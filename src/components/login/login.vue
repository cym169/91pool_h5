<template>
    <div>
        <x-header>登录91pool</x-header>
        <group>
            <x-input title="+86" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
            <x-input title="发送验证码" class="weui-vcode">
                <x-button slot="right" type="primary" mini>发送验证码</x-button>
            </x-input>
            <x-input title="验证码">
                <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
            </x-input>
        </group>
        <div style="padding: 1.17647059em 15px">
            <x-button class="login" type="warn">登录</x-button>
        </div>
    </div>
</template>

<script>
    import { XHeader, Group, Cell, XInput, XButton } from 'vux'
    export default {
        name: "login",
        beforeCreate() {
            // 判断是否登录，如果登录则跳转到我的页面
            if(this.$store.state.login){
                this.$router.push({name: 'me'})
                return false
            }
        },
        components: {
            XHeader,
            Group,
            Cell,
            XInput,
            XButton
        }
    }
</script>

<style lang="less" scoped>
    .login{
        background-color: #ffc629;
    }
    .login:active,.login:visited{
        background-color: #e1ae23!important;
    }
</style>
