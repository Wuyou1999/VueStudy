<template>
	<div class="container">
		<h2>任务中心</h2>
		<div class="preview">
			<img :src="imgUrl">
		</div>
		<form>
			<div class="upload">
				选择文件
				<input type="file" @change="getFile($event)"/>				
			</div>	
			<br />
			<button @click="submit($evnet)" class="sub-btn">提交</button>						
		</form>		
	</div>
</template>

<script>
export default {
	name: 'Task',
	data() {
		return {
			imgUrl:'https://public-cdn-oss.mosoteach.cn/mssvc/cover/2019/02/1dec295ea61fa4ffcab3c2fc8d2e217a.jpg?x-oss-process=style/s200x200',
			file:''
		};
	},		
};
</script>
<style scoped>
	.preview{
		width:300px;
		height:300px;
	}
	.preview{
		width:100%;
		height:100%;
	}
</style>