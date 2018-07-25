<template>
    <div class="cash_box">
        <div class="cash_header">
            <div class="cash_header_left" @click="goback">
                <a class="cash_header_back">返回</a>
                <div class="left-arrow"></div>
            </div>
            <h1 class="cash_header_title">提现</h1>
            <div class="cash_header_right"></div>
        </div>
        <group>
            <div class="cash_title">提现金额</div>
            <x-input class="money_input" :is-type="number" :placeholder="placeholder">
                <img slot="label" style="padding-right:15px;display:block;" src="../../assets/home_active.png" width="50">
            </x-input>
            <div class="charge vux-1px-t" >手续费：0.001</div>
        </group>
        <group>
            <x-input placeholder="请输入收币地址">
                <img slot="label" style="padding-right:10px;display:block;" src="./address.svg" width="20">
            </x-input>
        </group>
        <group>
            <x-input placeholder="请输入验证码">
                <img slot="label" style="padding-right:10px;display:block;" src="./img_code.svg" width="20">
                <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
            </x-input>
        </group>
        <div style="padding: 1.17647059em 15px">
            <x-button class="getCash" type="warn">确认提现</x-button>
        </div>
    </div>
</template>

<script>
    import {XHeader, Group, CellBox, Cell, XInput, XButton} from 'vux'
    export default {
        name: "cash",
        props: {
            param: {
                type: Object
            }
        },
        data() {
            return{
                placeholder: '',
                number: function (value) {
                    return {

                    }
                }
            }
        },
        created() {
            this.placeholder = `可用余额0.00`
        },
        methods: {
            goback: function () {
                this.$emit('getType',false)
            }
        },
        components: {
            XHeader,
            Group,
            CellBox,
            Cell,
            XInput,
            XButton
        }
    }
</script>

<style lang="less" scoped>
    .cash_box{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
    }
    .cash_header{
        position: relative;
        padding: 3px 0;
        box-sizing: border-box;
        background-color: #ffa114;
    }
    .cash_header_left{
        position: absolute;
        top: 14px;
        left: 18px;
        display: block;
        font-size: 14px;
        line-height: 21px;
        color: #ccc;
    }
    .cash_header_left a{
        color: #fff!important;
        float: left;
        margin-right: 8px;
        padding-left: 16px;
    }
    .cash_header_left .left-arrow{
        position: absolute;
        width: 30px;
        height: 30px;
        top: -5px;
        left: -5px;
    }
    .cash_header_left .left-arrow:before{
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
    .cash_header_title{
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
    .money_input:before{
        border: none!important;
    }
    .cash_title,.charge{
        position: relative;
    }
    .cash_title{
        padding: 10px 15px 0 15px;
        color: #313131;
        font-size: 18px;
    }
    .charge{
        padding: 10px 15px;
        color: #ffc629;
    }
    .cash_box .money_input /deep/ .weui-icon-clear{
        font-size: 24px!important;
    }
    .getCash{
        background-color: #ffc629;
    }
    .getCash:active,.getCash:visited{
        background-color: #e1ae23!important;
    }
</style>
