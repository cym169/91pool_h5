<template>
    <div>
        <x-header :left-options="{showBack: false}"><img class="logo" src="../../assets/logo.png"></x-header>
        <swiper :list="swiperList" loop auto :show-dots="false">
            <!--<inline-loading></inline-loading>-->
        </swiper>
        <div class="notice_box">
            <img class="noticeIcon" src="./notice.svg"/>
            <swiper auto height="50px" direction="vertical" :interval=2000 class="text-scroll vux-1px-b"
                    :show-dots="false">
                <swiper-item v-for="item in newsList" :key="item.id">
                    <a @click="goActivity(item.id)">{{item.title}}</a>
                </swiper-item>
            </swiper>
        </div>
        <group v-for="item in currencyList" :key="item.id">
            <cell :title="item.currencyName">
                <img slot="icon" height="20" style="display:block;margin-right:5px;" :src="item.logoUrl">
                <div @click="goTeach(item.currencyName)">
                    <img src="./teach.svg" height="24" style="display: block"/>
                </div>
            </cell>
            <cell-box @click.native="goCurrency(item.currencyName)">
                <x-table :cell-bordered="false" style="background-color:#fff;">
                    <thead>
                    <tr>
                        <th>矿池算力</th>
                        <th>全网算力</th>
                        <th>网络难度</th>
                        <th>价格</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style="color:#ff911a;">{{item.poolHashrate}}</td>
                        <td>{{item.netHashRate}}</td>
                        <td>{{item.netDiff}}</td>
                        <td>{{item.price}}</td>
                    </tr>
                    </tbody>
                </x-table>
            </cell-box>
            <cell title="24小时理论收益" :value="item.predictionIncome"></cell>
        </group>
        <x-button class="digging" v-show="showDigButton">我要挖矿</x-button>
    </div>
</template>

<script>
    import {XHeader, Swiper, SwiperItem, Group, Cell, CellBox, XTable, XButton, InlineLoading} from 'vux'

    const debug = process.env.NODE_ENV !== 'production';

    export default {
        name: 'Home',
        data() {
            return {
                swiperList: [],
                newsList: [],
                currencyList: [],
                scroll: 0,
                showDigButton: false
            }
        },
        methods: {

            goCurrency: function (coin) {
                this.$router.push({name: 'currency', params: {coin: coin}})
            },
            goActivity: function (id) {
                this.$router.push({name: 'activity', params: {id: id}})
            },
            goTeach: function (coin) {
                this.$router.push({name: 'teach', params: {coin: coin}})
            },
            getCurrency: function () {
                const _this = this
                const currencyUrl = debug ? '/api/pool/currency' : 'http://172.16.2.12:8099/pool/currency';
                this.$http.get(currencyUrl).then((res) => {
                    if (200 === res.data.status) {
                        _this.currencyList = res.data.data
                        _this.showDigButton = true
                    }
                })
            },
            getNews: function () {
                const _this = this
                const newsUrl = debug ? '/api/news/list' : 'http://172.16.2.12:8099/news/list';
                this.$http.get(newsUrl).then((res) => {
                    if (200 === res.data.status) {
                        _this.newsList = res.data.data
                    }
                })
            },
            getBanner: function () {
                const _this = this
                const bannerUrl = debug ? '/api/recommend/banner' : 'http://172.16.2.12:8099/recommend/banner';
                this.$http.get(bannerUrl).then((res) => {
                    if (200 === res.data.status) {
                        let list = []
                        res.data.data.forEach((item, index) => {
                            list.push({url: item.breakUrl, img: item.imageUrl})
                        })
                        _this.swiperList = list
                    }
                })
            }
        },
        created() {
            setTimeout(() => {
                document.getElementById('vux_view_box_body').scrollTop = 0
                this.getBanner()
                this.getNews()
                this.getCurrency()
            }, 500)

        },
        mounted() {

        },
        components: {
            XHeader,
            Swiper,
            SwiperItem,
            Group,
            Cell,
            CellBox,
            XTable,
            XButton,
            InlineLoading,
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

    .logo {
        margin-top: 5px;
        height: 30px;
    }

    .vux-slider > .vux-swiper > .vux-swiper-item > a {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 15px 0 50px;
        width: auto !important;
        line-height: 50px;
    }

    .notice_box {
        position: relative;
        background-color: #fff;
    }

    .noticeIcon {
        display: block;
        position: absolute;
        left: 15px;
        top: 10px;
        width: 28px;
    }

    .weui-cell:before {
        right: 15px;
    }

    .vux-table:after {
        border-top: none;
    }

    .vux-table td:before, .vux-table th:before {
        border-bottom: none;
    }

    .weui-cell__ft {
        color: #ff911a !important;
    }

    .digging {
        border-radius: 0;
        margin: 1.17647059em 0;
        background-color: #ffc629;
        color: #fff;
    }
    .digging:visited,.digging:active{
        color: #fff;
        background-color: #e1ae23!important;
    }

    .digging:after {
        border-radius: 0;
        border: none;
    }
</style>
