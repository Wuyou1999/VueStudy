<template>
    <view class="container ">
        <text class="title">主页,{{ title }}</text>
    </view>
</template>

<script>
export default {
    data() {
        return {
            title: 'Hello'
        };
    },
    onLoad() {},
    methods: {}
};
</script>

<style>
.container {
    width: 95%;
    margin: 0 auto;
    text-align: center;
}
.title {
    font-size: 36upx;
    color: #8f8f94;
}
</style>