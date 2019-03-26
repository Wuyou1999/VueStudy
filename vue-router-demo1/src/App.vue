<template>
	<div id="app">
		<div class="header">
			<router-link to="/">
				<img src="./assets/logo.png" class="logo" />
			</router-link>
			<div class="kong"></div>
			<img src="./assets/task_logo.jpg" class="task_logo" />
			<router-link to="/task" class="nav-item">任务中心</router-link>
			<img src="./assets/ku_logo.jpg" class="ku_logo" />
			<router-link to="/lib" class="nav-item">库管理</router-link>
			<img src="./assets/user1.jpg" class="avatar" />
			<router-link to="/ucenter" class="nav-item"> 吴佑</router-link>
			<router-link to="" class="nav-item">退出</router-link>
			<router-link to="" class="nav-item">帮助</router-link>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App'
	};
</script>

<style>
	#app {
		background-color: rgb(244, 244, 244);
	}

	.header {
		display: flex;
		height: 43px;
		background-color: #fff;
		font-size: 20px;
		padding-left: 120px;
		align-items: center;
	}

	.nav-item {
		width: 100px;
		margin-right: 20px;
	}

	.nav-item1 {
		width: 100px;
		margin-right: 20px;
		margin-top: -17px;
	}

	.logo {
		widows: 100px;
		height: 35px;
		margin-right: 200px;
	}

	.container {
		width: 85%;
		margin: 0 auto;
		padding-bottom: 40px;
	}

	a {
		text-decoration: none;
		color: #aaa;
	}

	a:hover {
		color: rgb(2, 165, 218);
	}

	.kong {
		width: 250px;
	}

	.avatar {
		width:40px;
		height: 40px;
		border-radius: 50%;
		margin-left: -10px;
	}

	.task_logo {
		width: 40px;
		height: 40px;
		margin-left: -10px;
	}

	.ku_logo {
		width: 40px;
		height: 40px;
		margin-left: -10px;
	}
</style>
