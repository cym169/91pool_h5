<template>
    <div>
        <x-header :title="title"></x-header>
        <div id="myChart" style="width: 100%;height: 240px"></div>
        <grid class="currency_grid" :cols="2" :show-t-border="false" :show-lr-borders="false">
            <grid-item>
                <img class="grid_img" src="./miners.svg"/>
                <div style="display: inline-block">
                    <p class="name_title">矿工在线</p>
                    <p class="number">111</p>
                </div>
            </grid-item>
            <grid-item>
                <img class="grid_img" src="./diff.svg"/>
                <div style="display: inline-block">
                    <p class="name_title">网络难度</p>
                    <p class="number">115.34TH</p>
                </div>
            </grid-item>
            <grid-item>
                <img class="grid_img" src="./time.svg"/>
                <div style="display: inline-block">
                    <p class="name_title">上一个区块</p>
                    <p class="number">13分钟之前</p>
                </div>
            </grid-item>
            <grid-item>
                <img class="grid_img" src="./block.svg"/>
                <div style="display: inline-block">
                    <p class="name_title">已打包区块</p>
                    <p class="number">157983</p>
                </div>
            </grid-item>
            <grid-item>
                <img class="grid_img" src="./rate.svg"/>
                <div style="display: inline-block">
                    <p class="name_title">矿池算力</p>
                    <p class="number">105.98GH</p>
                </div>
            </grid-item>
            <grid-item>
                <img class="grid_img" src="./miner.svg"/>
                <div style="display: inline-block">
                    <p class="name_title">采矿区块</p>
                    <p class="number">157983</p>
                </div>
            </grid-item>
        </grid>
        <group title="矿池节点配置">
            <cell title="节点1：hk-etc.91Pool.com:8008 "></cell>
            <cell title="节点2：cn-etc.91Pool.com:8008 "></cell>
        </group>
    </div>
</template>

<script>
    // 引入echarts中的bar和tooltip组件
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/bar')
    require('echarts/lib/component/tooltip')

    import {XHeader, Grid, GridItem, Group, Cell,} from 'vux'

    export default {
        data() {
            return {
                title: ''
            }
        },
        mounted() {
            this.drawBar()
        },
        methods: {
            drawBar: function () {
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
                    tooltip: {
                        position: function (pt) {
                            return [pt[0], '10%'];
                        },
                        confine: true
                    },
                    xAxis: {
                        show: true,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            color: '#fff'
                        },
                        data: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"]
                    },
                    yAxis: {
                        show: false
                    },
                    backgroundColor: '#ffa114',
                    series: [{
                        name: '算力',
                        type: 'bar',
                        itemStyle: {
                            color: '#ffd08a',
                            barBorderRadius: 15
                        },
                        barWidth: '50%',
                        data: [5, 10, 15, 20, 25, 30, 25, 20, 15, 10, 5, 30]
                    }]
                })

                myChart.on('click', function (param) {
                    param.color = '#fff'
                })
            }
        },
        created() {
            this.$nextTick(() => {
                // 让顶部导航名字为货币名字
                this.title = this.$route.params.coin
            })
        },
        beforeDestroy() {

        },
        components: {
            XHeader,
            Grid,
            GridItem,
            Group,
            Cell,
        },
    }
</script>

<style lang="less" scoped>
    .currency_grid{
        background-color: #fff;
    }
    .grid_img {
        display: inline-block;
        width: 40px;
        margin-right: 20px;
    }

    .name_title {
        color: #9a9a9a;
    }

    .number {
        color: #000;
    }

</style>
