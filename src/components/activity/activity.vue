<template>
    <div>
        <x-header></x-header>
        <div class="activity_box">
            <div class="activity-title">XVG-Blake2s上线公告</div>
            <div class="activity-time">发布时间：2018-07-17&nbsp;&nbsp;&nbsp;&nbsp;来源：91pool</div>
            <div class="activity-content">91POOL将于2018年7月17日上线XVG-Blake2s挖矿，矿工可以使用支持Blake2s算法的挖矿软件进行显卡挖矿。为了回馈广大矿工对我们矿池长期以来的支持和厚爱，XVG-Blake2s将于2018年7月17日到2018年9月17日进行为期两个月行0手续费挖矿活动，想挖矿的小伙伴快快参与进来。

                VergeCurrency，简称：XVG，是一种注重个人隐私的公共账本。其核心是建立受全球性社区支持的去中心化交易，并通过在分布式账本中提供用户的隐私来保持比特币网络在设想状态中的活力。</div>
        </div>
    </div>
</template>

<script>
    import {XHeader} from 'vux'

    export default {
        name: "activity",
        data() {
            return {
                title: ""
            }
        },
        created() {
            // 让顶部导航名字为货币名字
            // this.title = this.$route.params.id
        },
        beforeDestroy() {

        },
        components: {
            XHeader
        },
    }

</script>

<style lang="less" scoped>
    .activity_box {
        padding: 50px 20px;
        background-color: #fff;
        margin: 30px 0 40px;
    }

    .activity-title {
        text-align: left;
        font-size: 24px;
    }

    .activity-time {
        margin: 10px 0 15px;
        text-align: left;
        color: #747674;
        font-size: 14px;
    }

    .activity-content {
        width: 100%;
        min-height: 400px;
        font-size: 16px;
        line-height: 28px;
        letter-spacing: 1px;
        overflow: hidden;
        text-align: justify;
        text-align-last: left;
    }
</style>
