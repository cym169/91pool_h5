<template>
    <div>
        <x-header :title="teachTitle"></x-header>
    </div>
</template>

<script>
    import { XHeader, Group, Cell, } from 'vux'
    export default {
        name: "teach",
        data(){
            return {
                teachTitle: ""
            }
        },
        created() {
            this.teachTitle = `${this.$route.params.coin}挖矿教程`
        },
        components: {
            XHeader,
            Group,
            Cell,
        }
    }
</script>

<style lang="less" scoped>

</style>
