import Vue from 'vue'
import Router from 'vue-router'
import Home from 'layout/home/home'
import Controller from 'layout/controller/controller'
import Me from 'layout/me/me'
import Currency from 'components/currency/currency'
import CurrencyInfo from 'components/currencyInfo/currencyInfo'
import Activity from 'components/activity/activity'
import Teach from 'components/teach/teach'
import Notice from 'components/notice/notice'
import Share from 'components/share/share'
import Maid from 'components/maid/maid'
import MaidDetail from 'components/maidDetail/maidDetail'
import Addcontrol from 'components/addcontrol/addcontrol'
import Wallet from 'components/wallet/wallet'
import Setting from 'components/setting/setting'
import Login from 'components/login/login'
import Record from 'components/record/record'
import Cash from 'components/cash/cash'

Vue.use(Router);

const router = new Router({
    saveScrollPosition: true,
    hashbang: true,
    transitionOnLoad: true,
    linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
                // keepAlive: true,
                showNav: true,
            }
        },
        {
            path: '/controller',
            name: 'controller',
            component: Controller,
            meta:{
                // keepAlive: true,
                showNav: true,
            }
        },
        {
            path: '/me',
            name: 'me',
            component: Me,
            meta:{
                // keepAlive: true,
                showNav: true,
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/currency',
            name: 'currency',
            component: Currency,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/currencyInfo',
            name: 'currencyInfo',
            component: CurrencyInfo,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/activity',
            name: 'activity',
            component: Activity,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/teach',
            name: 'teach',
            component: Teach,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/notice',
            name: 'notice',
            component: Notice,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/share',
            name: 'share',
            component: Share,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/maid',
            name: 'maid',
            component: Maid,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/MaidDetail',
            name: 'maidDetail',
            component: MaidDetail,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/addcontrol',
            name: 'addcontrol',
            component: Addcontrol,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/wallet',
            name: 'wallet',
            component: Wallet,
            meta:{
                // keepAlive: true
                showNav: false,
            }
        },
        {
            path: '/setting',
            name: 'setting',
            component: Setting,
            meta:{
                // keepAlive: true
                showNav: false,
            },
        }
    ]
})

export default router
