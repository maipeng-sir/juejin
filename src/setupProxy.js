const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/api",{
        target:"https://juejin.im/",
        changeOrigin:true,
        pathRewrite: {
            '^/juejin': ''
          }
    }))
}