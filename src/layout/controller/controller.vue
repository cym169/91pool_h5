<template>
    <div>
        <x-header :left-options="{showBack: false}">控制台<a slot="right" @click="goAdd"><img src="../../assets/plus.svg" width="20"/></a></x-header>
        <group style="margin-top: 0;">
            <cell title="矿池警报" is-link >
                <img slot="icon" height="20" style="display:block;margin-right:5px;" src="./alert.svg">
            </cell>
        </group>
        <div class="control_title">矿池监控</div>
        <group>
            <cell-box>
                <div class="coin_img_box"><img src="../../assets/home.png" width="60"/></div>
                <div class="coin_name">ETC</div>
                <div class="info_box">
                    <x-table :cell-bordered="false" style="background-color:#fff;">
                        <thead>
                        <tr>
                            <th>在线</th>
                            <th>离线</th>
                            <th>低算力</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>23</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        </tbody>
                    </x-table>
                </div>
            </cell-box>
        </group>
        <group>
            <cell-box>
                <div class="coin_img_box"><img src="../../assets/home.png" width="60"/></div>
                <div class="coin_name">ETC</div>
                <div class="info_box">
                    <x-table :cell-bordered="false" style="background-color:#fff;">
                        <thead>
                        <tr>
                            <th>在线</th>
                            <th>离线</th>
                            <th>低算力</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>23</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        </tbody>
                    </x-table>
                </div>
            </cell-box>
        </group>
        <group>
            <cell-box>
                <div class="coin_img_box"><img src="../../assets/home.png" width="60"/></div>
                <div class="coin_name">ETC</div>
                <div class="info_box">
                    <x-table :cell-bordered="false" style="background-color:#fff;">
                        <thead>
                        <tr>
                            <th>在线</th>
                            <th>离线</th>
                            <th>低算力</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>23</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        </tbody>
                    </x-table>
                </div>
            </cell-box>
        </group>
        <group>
            <cell-box>
                <div class="coin_img_box"><img src="../../assets/home.png" width="60"/></div>
                <div class="coin_name">ETC</div>
                <div class="info_box">
                    <x-table :cell-bordered="false" style="background-color:#fff;">
                        <thead>
                        <tr>
                            <th>在线</th>
                            <th>离线</th>
                            <th>低算力</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>23</td>
                            <td>1</td>
                            <td>2</td>
                        </tr>
                        </tbody>
                    </x-table>
                </div>
            </cell-box>
        </group>
        <div class="control_title">实用小工具</div>
        <grid class="corporation" :show-lr-borders="false" :show-vertical-dividers="false">
            <grid-item label="收益计算器">
                <img slot="icon" src="./cal.svg">
            </grid-item>
            <grid-item label="币种收益">
                <img slot="icon" src="./money.svg">
            </grid-item>
            <grid-item label="小工具">
                <img slot="icon" src="./gj.svg">
            </grid-item>
            <grid-item label="小工具">
                <img slot="icon" src="./gj.svg">
            </grid-item>
        </grid>
    </div>
</template>

<script>
    import {XHeader, Group, Cell, CellBox, XTable, Grid, GridItem,} from 'vux'

    export default {
        data() {
            return {}
        },
        methods: {
            goAdd : function () {
                this.$router.push({name: 'addcontrol'})
            }
        },
        created() {
            this.$nextTick(() => {
                document.getElementById('vux_view_box_body').scrollTop = 0
            })
        },
        components: {
            XHeader,
            Group,
            Cell,
            CellBox,
            XTable,
            Grid,
            GridItem,
        },
    }
</script>

<style lang="less" scoped>
    .control_title {
        padding: 0 15px;
        margin-top: 1.17647059em;
    }

    .coin_img_box {
        background-color: #f5f5f5;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .coin_name {
        margin: 0 30px 0 15px;
        font-size: 20px;
    }

    .info_box {
        width: calc(~"100% - 140px");;
    }

    .vux-table td:before, .vux-table th:before {
        border: none;
    }

    .vux-table:after {
        border-top: none;
    }

    .corporation {
        margin: 1.17647059em 0;
        background-color: #fff;
    }

</style>
