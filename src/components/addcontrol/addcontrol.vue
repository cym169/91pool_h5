<template>
    <div>
        <x-header>新增监控</x-header>
        <group>
            <popup-picker popup-title="请选择" :title="title" :data="list" v-model="coinName"
                          placeholder="请选择">
                <template slot="title"><!-- use scope="props" when vue < 2.5.0 -->
                    <span style="height:24px;">
                        <span style="display: inline-block;vertical-align:middle;"><img src="./coin.svg" height="24"/></span>
                        <span style="display: inline-block;">挖矿币种</span>
                    </span>
                </template>
            </popup-picker>
        </group>
        <group>
            <x-input title="钱包地址" placeholder="请输入地址" v-model="wallet" novalidate :show-clear="false" placeholder-align="left" required></x-input>
            <x-input title="矿机名称" placeholder="请输入名称" :is-type="noChinese" v-model="minerName" novalidate :show-clear="false" placeholder-align="left" required></x-input>
        </group>
        <div style="padding:15px;">
            <x-button class="add" type="primary" @click.native="addSuccess" :text="submitText" :disabled="load" :show-loading="load"></x-button>
        </div>
    </div>

</template>

<script>
    import {XHeader, Group, PopupPicker, Cell, XInput, XButton,} from 'vux'

    export default {
        name: "addcontrol",
        data() {
            return {
                coinName: [''],
                wallet: '',
                minerName: '',
                submitText: '确认添加',
                load: false,
                title: '货币种类',
                list: [['ETC', 'ETF', 'HSR','BTM', 'XVG-SCRYPT', 'XVG-BLAKE2S', 'DCR']],
            }
        },
        methods: {
            noChinese: function (value) {
                return {
                    valid: /^[A-Za-z0-9]+$/.test(value),
                    msg: '请输入正确的矿机名称。'
                }
            },
            addSuccess: function () {
                this.submitText = '正在添加，请稍后...'
                this.load = true
            }
        },
        created() {


        },
        beforeDestroy() {

        },
        components: {
            XHeader,
            Group,
            PopupPicker,
            Cell,
            XInput,
            XButton,
        },
    }
</script>

<style lang="less" scoped>
    .add{
        background-color: #ffc629;
    }
    .add:active,.add:visited{
        background-color: #e1ae23!important;
    }
</style>
