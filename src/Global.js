/*
 * @Description: 全局变量
 * @Author: Taurus-Limerence
 * @Date: 2023-03-15 13:40:18
 * @LastEditors: Taurus-Limerence
 * @LastEditTime: 2023-03-15 04:29:16
 */
exports.install = function (Vue) {
  Vue.prototype.$target = "http://localhost:3000/"; // 本地后端地址
  // 封装提示成功的弹出框
  Vue.prototype.notifySucceed = function (msg) {
    this.$notify({
      title: "成功",
      message: msg,
      type: "success",
      offset: 100
    });
  };
  // 封装提示失败的弹出框
  Vue.prototype.notifyError = function (msg) {
    this.$notify.error({
      title: "错误",
      message: msg,
      offset: 100
    });
  };
}