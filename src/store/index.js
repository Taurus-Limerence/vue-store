/*
 * @Description: Vuex入口
 * @Author: Taurus-Limerence
 * @Date: 2023-03-15 13:40:18
 * @LastEditors: Taurus-Limerence
 * @LastEditTime: 2023-03-15 04:29:16
 */
import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import shoppingCart from './modules/shoppingCart'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    user,
    shoppingCart
  }
})
