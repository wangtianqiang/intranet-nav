# intranet-nav
用于内网导航的网页，支持自定义添加网址、图标和背景颜色



# 内网导航站

一个轻量级、可自定义的内网导航网页，支持添加网址、图标、背景颜色。

## 功能

- ✅ 自定义导航项（名称、URL、图标、颜色）
- ✅ 支持 Font Awesome 图标
- ✅ 支持自定义背景颜色
- ✅ 一键直达目标网页
- ✅ Docker 部署，方便运行在内网

## 项目结构
intranet-nav/
├── Dockerfile
├── docker-compose.yml
├── server.js
├── config.json
├── public/
│   ├── index.html
│   └── icons/
│       └── example.png
└── README.md


## 使用方法

### 1. 准备工作

- 安装 Docker 和 Docker Compose
- 确保内网服务器支持 Docker

### 2. 部署

```bash
# 克隆项目
git clone https://github.com/wangtianqiang/intranet-nav.git
cd intranet-nav

# 修改配置文件 config.json（添加您的导航项）
# 可选：上传自定义图标到 public/icons/

# 启动服务
docker-compose up -d

打开浏览器，访问： http://<服务器IP>:3000

配置说明
config.json：配置导航项、标题、背景等
public/icons/：存放自定义图标文件（如 example.png）
index.html：前端页面，支持响应式布局
