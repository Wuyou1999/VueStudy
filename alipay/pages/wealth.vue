<template>
	<view class="content">
		<view class="kong1"></view>
		<view class="top">
			<view class="t1">
				<view class="left">
					<view class="w1">{{ title }}</view>
					<view class="w2">
						总资产（元）
						<image src="../../static/eyes.png"></image>
					</view>
					<view class="w3">100.00</view>
				</view>
				<view class="right">
					<view>
						<image src="../../static/search.png"></image>
					</view>
					<view><text class="w2">昨日收益</text></view>
					<view><text class="w3">1.00</text></view>
				</view>
			</view>
			<view class="t2">
				<view class="c">
					<view>余额</view>
					<view>50.00</view>
				</view>
				<view class="c">
					<view>余额宝</view>
					<view>0.00</view>
				</view>
				<view class="cc">
					<view>更多理财资产</view>
					<view>>0.00</view>
				</view>

				<view></view>
			</view>
		</view>
		<view class="mid">
			<view>花呗</view>
			<view>可用3000</view>
		</view>
		<view class="bottom">
			<view>
				<image src="../../static/dingqi.png"></image>
				<view>定期</view>
			</view>
			<view>
				<image src="../../static/jijin.png"></image>
				<view>基金</view>
			</view>
			<view>
				<image src="../../static/yueb.png"></image>
				<view>余额宝</view>
			</view>
			<view>
				<image src="../../static/huangjin.png"></image>
				<view>黄金</view>
			</view>
			<view>
				<image src="../../static/gupiao.png"></image>
				<view>股票</view>
			</view>
		</view>
		<view class="youliao">
			<text>财富有料</text>
			<text class="ylw">更多</text>
			<view class="news">
				<view class="new">
					<view class="">
						<image src="../../static/yangy.jpg"></image>
					</view>
					<view class="">
						<p class="neww">杨洋被列入被执行人名单，索赔2千万还做不了飞机？</p>
					</view>

				</view>
				<view class="new">
					<view class="">
						<image src="../../static/tencent.png"></image>
					</view>
					<view class="">
						<p class="neww">腾讯京东“动刀”互联网中高层走出舒适区</p>
					</view>
				</view>
				<view class="new">
					<view class="">
						<image src="../../static/leij.jpg"></image>
					</view>
					<view class="">
						<p class="neww">“10亿赌约”董明珠赢了！小米去年营收难敌格力</p>
					</view>
				</view>
			</view>
		</view>
		<view class="ant">
			<image src="../../static/mycf.png" mode=""></image>
			<text class="a">蚂蚁财富</text>
			<view>过往业绩不预示未来表现，市场有风险，投资需谨慎></view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '财富'
			};
		},
		onLoad() {},
		methods: {}
	};
</script>

<style>
	.kong1 {
		background-color: #15619d;
		width: 100%;
		height: 63upx;
	}
	.content {

		height: 400upx;
	}

	.top {
		background: rgb(28, 131, 210);
	}

	.left image {
		height: 30upx;
		width: 40upx;
	}

	.right image {
		height: 50upx;
		width: 50upx;
		padding-left: 20upx;
		padding-top: 8upx;
	}

	.t1 {
		display: flex;
		justify-content: space-between;
	}

	.t2 {
		display: flex;
	}

	.c {
		flex: 1 1 33%;
		margin-left: 10upx;
		font-size: 20upx;

		color: white;
	}

	.cc {
		margin-right: 10upx;
		font-size: 20upx;
		color: white;
	}

	.w1 {
		font-size: 40upx;
		color: white;
	}

	.w2 {
		font-size: 20upx;
		color: white;
	}

	.w3 {
		font-size: 50upx;
		color: white;
	}

	.left {
		padding-left: 20upx;
	}

	.right {
		padding-right: 20upx;
	}

	.mid {
		background: rgb(241, 247, 255);
		display: flex;
		justify-content: space-between;
		padding: 10upx;
		font-size: 30upx;
	}

	.bottom {
		background: rgb(255, 255, 255);
		display: flex;
		justify-content: space-between;
		font-size: 30upx;
		padding: 20upx;
	}

	.bottom image {
		width: 40px;
		height: 40px;
	}

	.new {
		display: flex;
		font-size: 35upx;
		margin-bottom: 5upx;
	}

	.new image {
		width: 120px;
		height: 100px;
		margin-left: 10px;
	}

	.neww {
		margin-left: 10px;
	}

	.ylw {
		font-size: 30upx;
		color: gray;
		margin-left: 530upx;

	}

	.ant {
		text-align: center;
		font-size: 25upx;
		color: gray;
		padding-top: 30upx;
	}

	.a {
		font-size: 40upx;
	}

	.ant image {
		margin-top: 20upx;
		width: 50upx;
		height: 50upx;
	}
</style>
