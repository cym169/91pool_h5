<template>
    <div>
        <x-header>返佣详情</x-header>
        <group>
            <cell @click.native="goDetail" title="ETC" inline-desc='2018.04.23 12:32:34' is-link>
                <img class="slotIcon" slot="icon" src="../../assets/home_active.png"/>
                <span class="receive">+8.27</span>
            </cell>
        </group>
    </div>
</template>

<script>
    import { XHeader, Group, Cell, } from 'vux'
    export default {
        name: "maid",
        data() {
            return {
                userId: ''
            }
        },
        created() {
            this.userId = this.$route.params.userId
        },
        methods: {
            goDetail: function () {
                this.$router.push({ name: 'maidDetail', params: { userId: this.userId, coin: 'ETC' }})
            }
        },
        components: {
            XHeader,
            Group,
            Cell,
        }
    }
</script>

<style lang="less" scoped>
.slotIcon{
    display:block;
    width: 45px;
    margin-right:20px;
}
.receive{
    color:#ff5a00;
    font-size: 20px;
}
</style>
