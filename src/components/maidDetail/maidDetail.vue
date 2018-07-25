<template>
    <div>
        <x-header :title="title"></x-header>
        <cell-box class="maidDetail_box">
            <div style="width: 100%">
                <p>{{introTitle}}</p>
                <p>8.27</p>
                <p><x-button @click.native="goCash" class="goCash" mini type="primary">兑换</x-button></p>
            </div>
        </cell-box>
        <group>
            <cell title="登录" inline-desc='2018.04.23 12:32:34'>
                <span class="receive">+8.27</span>
            </cell>
            <cell title="交易" inline-desc='2018.04.23 12:32:34'>
                <span class="receive">+8.27</span>
            </cell>
            <cell title="交易" inline-desc='2018.04.23 12:32:34'>
                <span class="receive">+8.27</span>
            </cell>
        </group>
        <transition :name="'vux-pop-' + (showCash ? 'in' : 'out')">
            <cash v-on:getType="cashType" :param="param" v-show="showCash"></cash>
        </transition>
    </div>
</template>

<script>
    import {XHeader, Group, Cell, CellBox, XButton,} from 'vux'
    import Cash from '../cash/cash'
    export default {
        data() {
            return {
                title: '',
                introTitle: '',
                showCash: false,
                param: {
                    userId: '',
                    coin: 'ETC',
                }
            }
        },
        name: "maid-detail",
        methods: {
            cashType: function (value) {
                this.showCash = value
            },
            goCash: function () {
                this.showCash = true
                // this.$router.push({ name: 'cash', params: { userId: this.userId, coin: 'ETC' }})
            }
        },
        created() {
            this.$nextTick(() => {
                // 让顶部导航名字为货币名字
                this.title = `${this.$route.params.coin}返佣`
                this.introTitle = `您拥有的${this.$route.params.coin}返佣`
                this.param.userId = this.$route.params.userId
            })
        },
        beforeDestroy() {

        },
        components: {
            XHeader,
            Group,
            Cell,
            CellBox,
            XButton,
            Cash
        }
    }
</script>

<style lang="less" scoped>
    .maidDetail_box {
        padding: 20px 15px;
        background: url("../../assets/head_bg.jpg") center center no-repeat;
        background-size: cover;
    }

    .maidDetail_box:before {
        border: none !important;
    }

    .maidDetail_box > div {
        width: 100%;
    }
    .maidDetail_box > div > p{
        text-align: center;
        color: #fff;
    }
    .maidDetail_box > div > p:nth-child(2){
        margin: 10px 0 20px 0;
        font-size: 40px;
    }
    .goCash{
        width: 40%;
        border-radius: 20px;
        background-color: rgba(255,255,255,.5);
        border: 2px solid rgba(255,145,26,.5);
        color: #ffa114;
        letter-spacing: 2px;
    }
    .goCash:active,.goCash:visited{
        background-color: rgba(255,255,255,.2)!important;
        border: 2px solid rgba(255,145,26,.2)!important;
        color: #ffa114!important;
    }
    .goCash:after{
        border: none!important;
    }
    .receive{
        color:#ff5a00;
        font-size: 20px;
    }
    .vux-label{
        color: #333;
    }
</style>
