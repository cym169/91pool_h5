/*
* @Author: chen
* @Date:   2018/7/21
*/
'use strict';

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    isLoading: false,
    direction: 'forward',
    login: false
}
export default new Vuex.Store({
    state,
    mutations: {
        UPDATE_LOADING (state, status) {
            state.isLoading = status
        },
        UPDATE_DIRECTION (state, direction) {
            state.direction = direction
        }
    }
})
