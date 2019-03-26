<template>
    <view class="container">
        <text>{{ name }}的个人中心</text>
        <navigator url="../ucenter/setting" hover-class="navigator-hover">
            <button type="default">设置</button>
        </navigator>
    </view>
</template>

<script>
export default {
    data() {
        return {
            name: '忆曦雪'
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
</style>