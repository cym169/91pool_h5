<template>
    <div>
        <x-header>我的钱包</x-header>
        <group>
            <cell-box>
                <div style="flex:1;">
                    <div class="coin_title"><img src="../../assets/home_active.png"/>ETC</div>
                    <div class="coin_money">2542.15000000</div>
                </div>
                <div>
                    <x-button class="cash" type="warn" mini @click.native="goCash">
                        <i style="display: inline-block;"><img src="./receive.svg" height="20"
                                                               style="position: relative;top: 3px;"/></i>
                        提现
                    </x-button>
                    <br/>
                    <x-button class="record" type="warn" plain mini @click.native="goRecord">
                        <i style="display: inline-block;"><img src="./record.svg" height="20"
                                                               style="position: relative;top: 5px;"/></i>
                        记录</x-button>
                </div>
            </cell-box>
        </group>
        <transition :name="'vux-pop-' + (showCash ? 'in' : 'out')">
            <cash v-on:getType="cashType" :param="param" v-show="showCash"></cash>
        </transition>

        <transition :name="'vux-pop-' + (showRecord ? 'in' : 'out')">
            <record v-on:getRecordType="recordType" :param="param" v-show="showRecord"></record>
        </transition>
    </div>
</template>

<script>
    import {XHeader, Group, CellBox, XButton,} from 'vux'
    import Cash from '../cash/cash'
    import Record from '../record/record'
    export default {
        name: "wallet",
        data() {
            return {
                showCash: false,
                showRecord: false,
                param: {
                    userId: '',
                    coin: 'ETC'
                }
            }
        },
        created() {
            this.param.userId = this.$route.params.userId
        },
        methods: {
            goCash: function () {
                this.showCash = true
            },
            goRecord: function () {
                this.showRecord = true
            },
            cashType: function (value) {
                this.showCash = value
            },
            recordType: function (value) {
                this.showRecord = value
            }
        },
        components: {
            Cash,
            Record,
            XHeader,
            Group,
            CellBox,
            XButton,
        }
    }
</script>

<style lang="less" scoped>
    .coin_title{
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 10px;
    }
    .coin_title>img{
        display: inline-block;
        width: 20px;
        position: relative;
        top:2px;
        margin-right: 12px;
    }
    .coin_money{
        font-size: 22px;
    }
    .cash, .record {
        width: 100px;
        margin: 5px 0;
    }
    .cash{
        background-color: #ffc629;
    }
    .cash:active,.cash:visited{
        background-color: #e1ae23!important;
    }
    .record{
        border-color: #ffc629;
        color: #ffc629;
    }
    .record:active,.record:visited{
        border-color: #e1ae23!important;
        color: #e1ae23!important;
    }
</style>
