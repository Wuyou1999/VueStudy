<template>
	<view class="content">
		<view class="kong1"></view>
		<view class="top">
			<text class="title">{{title}}</text>
			<image src="../../static/img/pengyou.png" class="pengyou"></image>
			<image src="../../static/img/tianjia.png" class="tianjia"></image>
		</view>
		<view class="item">
			<view class="item1  it">
				<image src="../../static/img/shenghuohao.jpg" mode=""></image><br />
				<text>生活号</text><br />
				<text>简单生活</text>
			</view>
			<view class="item2 it">
				<image src="../../static/img/xiaochengxu.jpg" mode=""></image><br />
				<text>小程序</text><br />
				<text>发现更多服务</text>
			</view>
			<view class="item3 it">
				<image src="../../static/img/shenghuoquan.jpg" mode=""></image><br />
				<text>生活圈</text><br />
				<text>朋友分享生活</text>
			</view>
		</view>
		<view class="kong"></view>
		<view class="card" v-for="(user, index) in users" :key="index">
			<view class="cover">
				<image :src="user.avatar">
			</view>
			<view class="name-intro">
				<text class="name">{{user.name}}</text>
				<text class="time">{{user.time}}</text>
				<br />
				<text class="intro">{{user.intro}}</text>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '朋友',
				users: [{
						"avatar": "../../static/img/tixing.png",
						"name": "服务提醒",
						"intro": "你有运动奖励待领取啦",
						"time": "16:14"
					},
					{
						"avatar": "../../static/img/huabei.png",
						"name": "花呗 ",
						"intro": "交易提醒",
						"time": "3月16号"
					},
					{
						"avatar": "../../static/img/avatar1.png",
						"name": "吴佑 ",
						"intro": "[转账]转账520.0元",
						"time": "星期一"
					},
					{
						"avatar": "../../static/img/avatar2.png",
						"name": "赵鹏飞",
						"intro": "[转账]转账1314.0元",
						"time": "星期一"
					},
					{
						"avatar": "../../static/img/avatar3.png",
						"name": "李锦泉",
						"intro": "[转账]向你转账0.01元",
						"time": "3月17号"
					},
					{
						"avatar": "../../static/img/avatar4.jpg",
						"name": "张文旭",
						"intro": "收到，谢谢",
						"time": "星期一"
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
	.top {
		display: flex;
		height: 80upx;
		background: rgb(28, 131, 210);
		justify-content: space-between;
	}

	.top image {
		width: 50upx;
		height: 50upx;

	}

	.item {
		display: flex;
		width: 100%;
		height: 225upx;
	}

	.item image {
		margin: 15upx;
		width: 100upx;
		height: 100upx;
	}

	.kong {
		width: 100%;
		height: 35upx;
		background: #eee;
	}

	.kong1 {
		background-color: #15619d;
		width: 100%;
		height: 63upx;
	}

	.card {
		display: flex;
		width: 100%;
		height: 150upx;
		border: 1px solid #eee;
		margin-bottom: 8px;
		/* line-height: 32px; */
	}


	.cover image {
		padding-top: 5upx;
		margin-left: 25upx;
		width: 140upx;
		height: 140upx;
		border-radius: 8px;
		float: left;
	}

	.it {
		border: 1px solid #eee;
		width: 33.3%;
		text-align: center;
		line-height: 40upx;
	}

	.name-intro {
		margin-left: 50upx;
	}

	.intro {
		color: #999999;
	}

	.time {
		color: #999999;
		margin-left: 280upx;
	}

	.pengyou {
		margin-left: 525upx;
	}

	.title {
		color: #EEEEEE;
		margin-left: 20px;
	}
</style>
