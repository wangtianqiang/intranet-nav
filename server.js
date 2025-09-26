const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 3000;

const CONFIG_PATH = path.join(__dirname, 'config.json');
let config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/config', (req, res) => {
  res.json(config);
});

app.get('/go/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const nav = config.navs[id];
  if (nav && nav.url) {
    res.redirect(nav.url);
  } else {
    res.status(404).send('导航项不存在');
  }
});

app.listen(PORT, () => {
  console.log(`导航站运行在 http://localhost:${PORT}`);
});
