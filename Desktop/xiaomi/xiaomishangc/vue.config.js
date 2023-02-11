
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:"localhost",
    port:8080,
    proxy:{
      "/api":{
        target:"http://dev-mall-pre.springboot.cn",
        changeOrigin:true,
        pathRewrite:{
          "/api":""
        }
      }
    }
    }
})
