/*
 * @Description: 配置文件
 * @Author: Taurus-Limerence
 * @Date: 2023-03-15 13:40:18
 * @LastEditors: Taurus-Limerence
 * @LastEditTime: 2023-03-15 04:29:16
 */
module.exports = {
  publicPath: './',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/', // 本地后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}