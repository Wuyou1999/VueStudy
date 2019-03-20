<template>
	<view class="content">
		<view class="kong1"></view>
		<view class="top">
			<view class="title">
				<text>{{title}}</text>
			</view>
			<view class="set">
				<text>{{setting}}</text>
			</view>
		</view>

		<view class="infor">
			<image src="../../static/img/avatar1.png"></image>
			<text class="username">{{username}}</text>
			<text class="mobile">{{mobile}}</text>
		</view>

		<view class="item" v-for="(user,index) in users" :key="index">
			<image :src="user.avatar" mode=""></image>
			<view class="right">{{user.name}}</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '我的',
				setting: '设置',
				username: '张文旭',
				mobile: '18852009939',
				avatar: 'avatar.png',
				users: [{
						name: '支付宝会员',
						avatar: '../../static/vip1.png'
					},
					{
						name: '商家服务',
						avatar: '../../static/service1.png'
					},
					{
						name: '账单',
						avatar: '../../static/zd1.png'
					},
					{
						name: '资产',
						avatar: '../../static/zc.png'
					},
					{
						name: '余额        ',
						avatar: 'static/ye1.png'
					},
					{
						name: '花呗',
						avatar: 'static/hb1.png'
					},
					{
						name: '银行卡',
						avatar: 'static/card1.png'
					},
					{
						name: '芝麻信用',
						avatar: 'static/xy1.png'
					},
					{
						name: '芝麻保险',
						avatar: 'static/bx1.png'
					}
				]


			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
<style>
	.kong1 {
		background-color: #15619d;
		width: 100%;
		height: 63upx;
	}

	.content {
		text-align: center;
		height: 400upx;
	}

	.top {
		display: flex;
		justify-content: space-between;
		background: rgb(28, 131, 210);
		color: #FFFFFF;
	}

	.infor {
		display: flex;
		height: 150upx;
		width: 100%;
		background: rgb(28, 131, 210);
		color: #FFFFFF;
	}

	.infor image {
		width: 150upx;
		height: 100%;
	}

	.username {
		margin-top: 50upx;
		margin-left: 80upx;
	}

	.mobile {
		margin-top: 90upx;
		margin-left: -115upx;
	}

	.item {
		width: 100%;
		display: flex;
		height: 100upx;
		padding-left: 20upx;
		border-bottom: 1upx solid #eee;
		margin-right: 20upx;
		margin-bottom: 10upx;
		background-color: #fff;

	}

	.item image {
		height: 60upx;
		width: 60upx;
		padding-top: 10px;
	}

	.right {
		margin-left: 20upx;
		margin-top: 10px;

	}
</style>
