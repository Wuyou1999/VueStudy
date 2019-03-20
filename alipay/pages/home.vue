<template>
	<view class="content">
		<view class="kong1"></view>
		
		<view class="header">
			<view class="top">
				<input confirm-type="text" class="search" placeholder="请输入" />
				<view class="qw">
					<image src="../../static/ren.png "></image>
					<image src="../../static/addTodo-nav.png"></image>
				</view>
			</view>
			<view class="center">
				<view class="as">
					<view class="as1">
						<image src="../../static/saoyisao.png" class="aa"></image>
						<p class="des">扫一扫</p>
					</view>
					<view class="as1">
						<image src="../../static/fukuanma.png" class="aa"></image>
						<p class="des">付钱</p>
					</view>
					<view class="as1">
						<image src="../../static/shouqian.png" class="aa"></image>
						<p class="des">收钱</p>
					</view>
					<view class="as1">
						<image src="../../static/zujianicon_-.png" class="aa"></image>
						<p class="des">卡包</p>
					</view>
				</view>
			</view>
		</view>

		<view class="mid">
			<view class="aq">
				<view class="as2">
					<image src="../../static/zhuanzhang.png" class="aa"></image>
					<p class="des1">转账</p>
				</view>
				<view class="as2">
					<image src="../../static/icon.png" class="aa"></image>
					<p class="des1">余额宝</p>
				</view>
				<view class="as2">
					<image src="../../static/taopiaopiao1.png" class="aa"></image>
					<p class="des1">淘票票</p>
				</view>
				<view class="as2">
					<image src="../../static/didichuhang.png" class="aa"></image>
					<p class="des1">滴滴出行</p>
				</view>
			</view>
			<view class="aq">
				<view class="as2">
					<image src="../../static/logo.png" class="aa"></image>
					<p class="des1">芝麻信用</p>
				</view>
				<view class="as2">
					<image src="../../static/wodekuaidi.png" class="aa"></image>
					<p class="des1">我的快递</p>
				</view>
				<view class="as2">
					<image src="../../static/huochepiaojipiao.png" class="aa"></image>
					<p class="des1">火车票</p>
				</view>
				<view class="as2">
					<image src="../../static/xiaoyuanyiqiatong.png" class="aa"></image>
					<p class="des1">大学生活</p>
				</view>
			</view>
			<view class="aq">
				<view class="as2">
					<image src="../../static/huabei.png" class="aa"></image>
					<p class="des1">花呗</p>
				</view>
				<view class="as2">
					<image src="../../static/ai-hongbao.png" class="aa"></image>
					<p class="des1">红包</p>
				</view>
				<view class="as2">
					<image src="../../static/shoujichongzhi.png" class="aa"></image>
					<p class="des1">充值中心</p>
				</view>
				<view class="as2">
					<image src="../../static/gengduo.png" class="aa"></image>
					<p class="des1">更多</p>
				</view>
			</view>
		</view>
		<view class="word"></view>
		<view class="mid1">
			<view class="left">
				<view class="left1">
					<image src="../../static/a.png" mode=""></image>
				</view>
				<view class="left2">
					<p class="des1">·你有小鸡饲料可以领取</p>
					<p class="des1">·快去捐步兑换公益金啦</p>
				</view>
				<view class="left3">
					<p class="des3">2小时前</p>
					<p class="des3">3小时前</p>
				</view>
			</view>
			<view class="right">
				<image src="../../static/b.png"></image>
			</view>
		</view>
		<view class="word"></view>
		<view class="qq">
			<p class="desc">惠支付</p>
			<view class="cc">
				<view class="er">
					<view class="ss">
						<p class="des1">88888元</p>
						<p class="des2">等你来分</p>
					</view>
					<view class="dd">
						<image src="../../static/DDA5CBB79A1C52C28C5AF2D283F39F5A.jpg"></image>
					</view>
				</view>
				<view class="er">
					<view class="ss">
						<p class="des1">瓜分9亿红包</p>
						<p class="des2">组队最高翻20倍</p>
					</view>
					<view class="dd">
						<image src="../../static/55B757F0452FB36EF3BA9F7E64B111DF.jpg"></image>
					</view>
				</view>
			</view>
		</view>
		<view class="qq">
			<p class="desc">生活服务</p>
			<view class="cc">
				<view class="er">
					<view class="ss">
						<p class="des1">过期药丢哪？</p>
						<p class="des2">来给ta找个好归宿</p>
					</view>
					<view class="dd">
						<image src="../../static/8C649A49513C292A830244E7DB6DB8AE.jpg"></image>
					</view>
				</view>
				<view class="er">
					<view class="ss">
						<p class="des1">崴脚了怎么办</p>
						<p class="des2">恰当处理不留遗症</p>
					</view>
					<view class="dd">
						<image src="../../static/FEE6255A792414772AB3FCFEBDF26FD1.jpg"></image>
					</view>
				</view>
			</view>
		
		</view>



	</view>
</template>
<script>
	export default {
		data() {
			return {
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
		width: 100%;
		height: 400upx;
	}
	.header {
		background-color: #1A81D1;
	}
	.search {
		border: 1px solid #8F8F94;
		width: 280px;
		background-color: white;
		margin-left: 10px;
	}
	.top {
		display: flex;
		justify-content: space-between;
		padding-top: 10px;
	}
	.top image {
		color: white;
		height: 28px;
		width: 28px;
	}
	.as {
		display: flex;
	}
	.aa {
		width: 40px;
		height: 40px;
	}
	.as1 {
		text-align: center;
		flex: 1 1 25%;
	}
	.as2 {
		flex: 1 1 25%;
		text-align: center;
	}
	.as2 image {
		height: 35px;
		width: 35px;
	}
	.des {
		color: white;
		font-weight: 200;
		font-size: 15px;
	}
	.des1 {
		font-weight: 200;
		font-size: 13px;
	}
	.aq {
		display: flex;
		margin-top: 10px;
	}
	.word {
		height: 8px;
		width: 100%;
		background: #EEEEEE;
	}
	.left {
		display: flex;
	}
	.left1 image {
		height: 50px;
		width: 50px;
	}
	.left2 {
		margin-top: 10px;
		margin-left: 10px;
	}
	.left3 {
		margin-top: 10px;
		margin-left: 10px;
	}
	.des2{
		font-size: 12px;
		color: #8F8F94;
	}
	.des3 {
		font-size: 13px;
		color: #8F8F94;
	}
	.right image {
		width: 30px;
		height: 30px;
	}
	.right {
		margin-top: 13px;
	}
	.mid1 {
		display: flex;
		justify-content: space-between;
	}
	.er {
		display: flex;
	}
	.dd image {
		height: 50px;
		width: 50px;
	}
	.cc{
		display:flex;
		width:90%;
		margin: 0 auto;
		border:1px solid #EEEEEE;
		margin-top:8px;
	}
	.er{
		flex:1 1 50%;
		justify-content: space-between;
	}
	.ss{
		margin-top:10px;
		margin-left:10px;
		
	}
	.qq{
		margin-top:5px;
	}
	.desc{
		margin-left:10px;
	}
</style>
