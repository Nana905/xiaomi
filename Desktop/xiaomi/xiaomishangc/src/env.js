// 根据不同的开发环境配置不同的接口
// 打包的时候统一注入环境参数统一环境管理，输出不同的版本包

// serve mode =development
// build mode =production 
// process 对象是一个全局变量，提供了有关当前 Node.js进程的信息并对其进行控制，作为一个全局变量
// 通过 webpack中的参数--mode `process.env.NODE_ENV 获取不同环境项目配置信息
// 基于cors跨域
let baseURL
switch (process.env.NODE_ENV) {
    // 开发环境
    case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
    case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;
  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;
    // 线上
  case 'production':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default{
    baseURL
}