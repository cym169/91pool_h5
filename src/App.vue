<template>
    <div style="height: 100%">
        <div v-transfer-dom>
            <loading v-model="isLoading"></loading>
        </div>

        <view-box ref="viewBox" body-padding-bottom="55px">
            <keep-alive>
            <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </transition>
            </keep-alive>
            <transition :name="'vux-pop-' + (direction === 'forward' ? 'in' : 'out')">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
            </transition>
            <tabbar slot="bottom" v-if="$route.meta.showNav">
                <tabbar-item link="/home" :selected="$route.name === 'home'">
                    <img slot="icon" src="./assets/home.png">
                    <img slot="icon-active" src="./assets/home_active.png">
                    <span slot="label">首页</span>
                </tabbar-item>
                <tabbar-item link="/controller" :selected="$route.name === 'controller'">
                    <img slot="icon" src="./assets/control.svg">
                    <img slot="icon-active" src="./assets/control_active.svg">
                    <span slot="label">控制台</span>
                </tabbar-item>
                <tabbar-item link="/me" :selected="$route.name === 'me'">
                    <img slot="icon" src="./assets/me.svg">
                    <img slot="icon-active" src="./assets/me_active.svg">
                    <span slot="label">我的</span>
                </tabbar-item>
            </tabbar>
        </view-box>
    </div>
</template>

<script>
    import {ViewBox, Tabbar, TabbarItem,Loading, TransferDom } from 'vux'
    import { mapState } from 'vuex'
    export default {
        name: 'app',
        computed:{
            ...mapState({
                isLoading: state => state.vux.isLoading,
                direction: state => state.vux.direction
            }),
        },
        components: {
            ViewBox,
            Tabbar,
            TabbarItem,
            Loading,
            TransferDom
        },
        directives: {
            TransferDom
        }
    }
</script>

<style lang="less">
    @import '~vux/src/styles/reset.less';
    @import '~vux/src/styles/1px.less';

    html, body {
        height: 100%;
        width: 100%;
        background-color: #f5f5f5;
        overflow-x: hidden;
        position: relative;
        font-family:Arial,Microsoft YaHei;
    }

    .vux-header {
        background-color: #ffa114 !important;
    }

    .vux-header .vux-header-left a {
        color: #fff !important;
    }

    .vux-header .vux-header-left .left-arrow:before {
        border-color: #fff !important;
    }

    /*.weui-tabbar__icon {*/
        /*width: 30px;*/
        /*height: 30px;*/
    /*}*/

    /*.weui-tabbar__label {*/
        /*font-size: 14px !important;*/
    /*}*/
    .vux-pop-out-enter-active,
    .vux-pop-out-leave-active,
    .vux-pop-in-enter-active,
    .vux-pop-in-leave-active {
        will-change: transform;
        transition: all 200ms;
        width: 100%;
        height: 100%;
        top: 0;
        position: absolute;
        backface-visibility: hidden;
        perspective: 1000;
        z-index: 2;
    }

    .vux-pop-out-enter {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    .vux-pop-out-leave-active {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-enter {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }

    .vux-pop-in-leave-active {
        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

</style>
