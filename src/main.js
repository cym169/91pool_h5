// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from 'router'
import store from './store'
import App from './App'
import axios from 'axios'

Vue.prototype.$http = axios

FastClick.attach(document.body)

Vue.config.productionTip = false
// no transitoin in demo site
const shouldUseTransition = !/transition=none/.test(location.href)
store.registerModule('vux', {
    state: {
        demoScrollTop: 0,
        isLoading: false,
        direction: shouldUseTransition ? 'forward' : ''
    },
    mutations: {
        updateLoadingStatus (state, payload) {
            state.isLoading = payload.isLoading
        },
        updateDirection (state, payload) {
            if (!shouldUseTransition) {
                return
            }
            state.direction = payload.direction
        }
    },
    actions: {
        updateDemoPosition ({commit}, top) {
            commit({type: 'updateDemoPosition', top: top})
        }
    }
})


const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
    endTime = Date.now()
})
methods.forEach(key => {
    let method = router[key].bind(router)
    router[key] = function (...args) {
        isPush = true
        method.apply(null, args)
    }
})

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', {isLoading: true})

    const toIndex = history.getItem(to.path)
    const fromIndex = history.getItem(from.path)

    if (toIndex) {
        if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
            store.commit('updateDirection', {direction: 'forward'})
        } else {
            // 判断是否是ios左滑返回
            if (!isPush && (Date.now() - endTime) < 377) {
                store.commit('updateDirection', {direction: ''})
            } else {
                store.commit('updateDirection', { direction: 'reverse' })
            }
        }
    } else {
        ++historyCount
        history.setItem('count', historyCount)
        to.path !== '/' && history.setItem(to.path, historyCount)
        store.commit('updateDirection', {direction: 'forward'})
    }

    if (/\/http/.test(to.path)) {
        let url = to.path.split('http')[1]
        window.location.href = `http${url}`
    } else {
        next()
    }
})

router.afterEach(function (to) {
    isPush = false
    store.commit('updateLoadingStatus', {isLoading: false})
})

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app-box')
