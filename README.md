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
