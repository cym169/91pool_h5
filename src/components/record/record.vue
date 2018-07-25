<template>
    <div class="record_box">
        <div class="record_header">
            <div class="record_header_left" @click="goback">
                <a class="record_header_back">返回</a>
                <div class="left-arrow"></div>
            </div>
            <h1 class="record_header_title">记录</h1>
            <div class="record_header_right"></div>
        </div>
        <group>
            <popup-picker popup-title="请选择" :title="title" :data="list" v-model="coinName"
                          placeholder="请选择">
                <template slot="title"><!-- use scope="props" when vue < 2.5.0 -->
                    <span style="height:24px;">
                        <span style="display: inline-block;vertical-align:middle;"><img src="./coin.svg" height="24"/></span>
                        <span style="display: inline-block;">币种</span>
                    </span>
                </template>
            </popup-picker>
        </group>
        <group>
            <cell @click.native="goDetail" title="推荐返利" inline-desc='2018.04.23 12:32:34'>
                <span class="receive">+8.27</span>
            </cell>
        </group>
    </div>
</template>

<script>
    import {XHeader, Group, Cell, PopupPicker, } from 'vux'
    export default {
        name: "record",
        data() {
            return{
                coinName: [''],
                title: '货币种类',
                list: [['ETC', 'ETF', 'HSR','BTM', 'XVG-SCRYPT', 'XVG-BLAKE2S', 'DCR']],
                data: []
            }
        },
        created() {
            this.$nextTick(() => {
                this.coinName = [this.$route.params.coin]
            })
        },
        methods: {
            goback: function () {
                this.$emit('getRecordType',false)
            }
        },
        components: {
            XHeader,
            Group,
            Cell,
            PopupPicker,
        }
    }
</script>

<style lang="less" scoped>
    .record_box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
    .record_header{
        position: relative;
        padding: 3px 0;
        box-sizing: border-box;
        background-color: #ffa114;
    }
    .record_header_left{
        position: absolute;
        top: 14px;
        left: 18px;
        display: block;
        font-size: 14px;
        line-height: 21px;
        color: #ccc;
    }
    .record_header_left a{
        color: #fff!important;
        float: left;
        margin-right: 8px;
        padding-left: 16px;
    }
    .record_header_left .left-arrow{
        position: absolute;
        width: 30px;
        height: 30px;
        top: -5px;
        left: -5px;
    }
    .record_header_left .left-arrow:before{
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #fff;
        border-width: 1px 0 0 1px;
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    }
    .record_header_title{
        margin: 0 88px;
        height: 40px;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        color: #fff;
    }
.receive{
    color:#ff5a00;
    font-size: 20px;
}
</style>
