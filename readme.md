### egg+umi+MongoDB 开启SSR，打造个人博客

#### 技术栈

整体框架以egg为核心,使用egg-view-assets进行静态模板处理;

使用umi-server开启server render;

基于egg-mongoose调用MongoDB数据库,注册Restful APi提供前端博客展示及管理后台管理;

使用umi+antd打造前端架构,自动化路由;

使用react-markdown进行.md文件渲染;

核心技术栈:

```javascript {.line-numbers}
"antd": "^3.26.3",
"egg": "^2.26.0",
"egg-scripts": "^2.12.0",
"egg-view-assets": "^1.6.0",
"egg-view-nunjucks": "^2.2.0",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"umi": "^2.12.7",
"umi-server": "^1.1.8",
```

### npm install

### npm run dev

### npm start
