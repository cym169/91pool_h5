<template>
    <div class="notice_box">
        <x-header>通知公告</x-header>
        <group @click.native="goActivity">
            <cell-box>
                <div style="width: 50px;margin-right: 15px;">
                    <div class="month">Jul</div>
                    <div class="day">17</div>
                </div>
                <div style="flex: 1;">
                    <div class="title">XVG-Blake2s上线公告</div>
                    <div class="from">91pool</div>
                    <div class="intro">91POOL于2018年7月17日上线XVG-Blake2s挖矿，XVG-Blake2s今日起为期两个月进行0手续费挖矿，想挖矿的小伙伴快快参与进来。</div>
                </div>
            </cell-box>
            <cell-box>
                <div style="width: 50px;margin-right: 15px;">
                    <div class="month">Jul</div>
                    <div class="day">17</div>
                </div>
                <div style="flex: 1;">
                    <div class="title">XVG-Blake2s上线公告</div>
                    <div class="from">91pool</div>
                    <div class="intro">91POOL于2018年7月17日上线XVG-Blake2s挖矿，XVG-Blake2s今日起为期两个月进行0手续费挖矿，想挖矿的小伙伴快快参与进来。</div>
                </div>
            </cell-box>
        </group>
    </div>
</template>

<script>
    import {XHeader, Group, Cell, CellBox} from 'vux'

    export default {
        name: "notice",
        methods: {
            goActivity: function () {
                this.$router.push({name: 'activity', params: {id: 13}})
            }
        },
        components: {
            XHeader,
            Group,
            Cell,
            CellBox
        }
    }
</script>

<style lang="less" scoped>
    .month, .day {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
    }

    .month {
        background-color: #fd6b21;
        color: #fff;
    }

    .day {
        background-color: #f7f6f4;
        color: #fd6b21;
    }
    .title,.from{
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .title {
        font-size: 18px;
        color: #000200;
    }
    .from{
        font-size: 14px;
        color: #a0a0a0;
        margin: 5px 0;
    }
    .intro{
        height: 50px;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-align: left;
        font-size: 13px;
        color: #000200;
        line-height: 2;
    }
    .notice_box /deep/ .weui-cell:before{
        right: 15px;
    }
</style>
