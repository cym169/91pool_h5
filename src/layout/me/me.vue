<template>
    <div>
        <!--登录状态-->
        <cell-box class="user_box" v-if="$store.state.login">
            <div class="user_img_box">
                <img slot="icon" class="userImg" :src="userImg"/>
            </div>
            <div>
                <p class="info">13544119550</p>
                <p class="wallet" @click="goWallet"><i></i>我的钱包</p>
            </div>
        </cell-box>
        <!--未登录状态-->
        <cell-box class="user_box" v-if="!$store.state.login" @click.native="goLogin">
            <div class="user_img_box">
                <img slot="icon" class="userImg" src="../../assets/home.png"/>
            </div>
            <div>
                <p class="info">登录/注册</p>
            </div>
        </cell-box>
        <group>
            <cell title="通知公告" is-link link="/notice">
                <img class="me_icon" slot="icon" width="20" src="./alert.png">
            </cell>
        </group>
        <group>
            <cell title="推荐分享" is-link @click.native="goShare">
                <img class="me_icon" slot="icon" width="20" src="./share.svg">
            </cell>
            <cell title="返佣详情" is-link @click.native="goMaid">
                <img class="me_icon" slot="icon" width="20" src="./money.svg">
            </cell>
            <cell title="设置" is-link link="/setting">
                <img class="me_icon" slot="icon" width="20" src="./setting.svg">
            </cell>
        </group>
    </div>
</template>

<script>
    import {Group, Cell, CellBox} from 'vux'


    export default {
        components: {
            Group,
            Cell,
            CellBox
        },
        data() {
            return {
                userId: "212",
                userImg: ""
            }
        },
        methods: {
            goLogin: function () {
                this.$router.push({ name: 'login'})
            },
            goWallet: function () {
                this.$router.push({ name: 'wallet', params: { userId: this.userId }})
            },
            goMaid: function () {
                this.$router.push({ name: 'maid', params: { userId: this.userId }})
            },
            goShare: function () {
                this.$router.push({ name: 'share', params: { userId: this.userId }})
            }
        },
        created() {
            this.$nextTick(() => {
                document.getElementById('vux_view_box_body').scrollTop = 0
            })
        }
    }
</script>

<style lang="less" scoped>
    .vux-demo {
        text-align: center;
    }

    .logo {
        width: 100px;
        height: 100px
    }

    .user_box {
        padding-top: 46px;
        background: url("../../assets/head_bg.jpg") center center no-repeat;
        background-size: cover;
    }

    .user_img_box {
        background-color: rgba(255, 255, 255, .3);
        width: 70px;
        height: 70px;
        margin-right: 10px;
        border-radius: 5px;
        line-height: 70px;
        text-align: center;
    }

    .userImg {
        border-radius: 5px;
        width: 60px;
        height: 60px;
        margin-top: 5px;
    }

    .info {
        color: #fff;
        font-size: 20px;
    }

    .wallet {
        background-color: rgba(255, 255, 255, .2);
        border: 1px solid rgba(255, 255, 255, .35);
        border-radius: 15px;
        color: #fff;
        padding: 0;
        text-align: center;
        position: relative;
    }

    .wallet:after {
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #fff;
        border-style: solid;
        transform: matrix(.71, .71, -.71, .71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 22px;
    }
    .me_icon{
        display:block;
        margin-right:10px;
    }
</style>
