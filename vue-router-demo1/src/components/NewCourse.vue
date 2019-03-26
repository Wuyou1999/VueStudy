<template>

	<div class="container">
		<div class="top">
			<span>课程</span>
			<span class="star">*</span>
		</div>
		<input type="text" placeholder="请填写班课名称" v-model="course.courseName" class="input-box" />
		<div class="top">
			<span>班级</span>
			<span class="star">*</span>
		</div>
		<input type="text" placeholder="请填写班级" v-model="course.courseClass" class="input-box" />
		<p>选择班课封面</p>
		<div class="preview" @click="handleClick()">
			<img :src="imgUrl" class="cover" v-if="!show" />
			<img src="../assets/plus.png" class="icon-plus" v-if="show" />
			<input type="file" @change="getFile($event)" style="display: none;" id="coverFile" />
		</div>
		<div class=button>
			<button @click="addCourse(course)" class="btn">确定</button>
			<button @click="reset()" class="btn1">取消</button>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'NewCourse',
		data() {
			return {
				loginUserId: 1,
				file: '',
				imgUrl: '',
				show: true,
				course: {
					courseName: '',
					courseClass: '',
					cover: ''
				},
			};
		},
		methods: {
			//点击图片预览区，即模拟点击文件选择组件
			handleClick: function() {
				document.getElementById('coverFile').click();
			},
			//图片预览
			getFile: function() {
				this.file = event.target.files[0];
				var windowURL = window.URL || window.webkitURL;
				this.imgUrl = windowURL.createObjectURL(this.file);
				this.show = false;
			},
			addCourse: function(course) {
				course.cover = this.imgUrl;
				var _this = this;
				this.$http({
					method: 'post',
					url: 'http://localhost:8080/api/course',
					data: {
						userId: _this.loginUserId,
						courseName: course.courseName,
						courseClass: course.courseClass,
						cover: course.cover,
						finished: 0
					}
				}).then(function() {
					alert('新增班课成功');
					_this.$router.push('/');
				});
			},
			reset: function() {
				var _this = this;
				_this.$router.push('/');
			}
		}
	};
</script>
<style scoped>
	.top {
		margin-bottom: 15px;
	}

	.star {
		color: red;
	}

	.container {
		display: flex;
		flex-direction: column;
		padding-top: 20px;
		padding-left: 100px;
		background-color: #fff;
		margin-top: 20px;

	}

	.input-box {
		width: 500px;
		height: 40px;
		margin-bottom: 10px;
		font-size: 14px;
	}

	.button {
		display: flex;

	}

	.btn {
		margin-top: 20px;
		width: 120px;
		height: 40px;
		border: 2px solid rgb(0, 187, 221);
		background-color: #fff;
		border-radius: 8px;
		outline: none;
		color: rgb(0, 187, 221);
		font-size: 16px;
	}

	.btn1 {
		margin-top: 20px;
		width: 120px;
		height: 40px;
		border: 2px solid darkgrey;
		background-color: #fff;
		border-radius: 8px;
		outline: none;
		color: darkgrey;
		font-size: 16px;
		margin-left: 50px;
	}

	.btn:hover {
		background-color: rgb(0, 187, 221);
		color: white;
	}

	.btn1:hover {
		background-color: darkgrey;
		color: white;
	}

	.preview {
		width: 130px;
		height: 130px;
		border: 2px dashed #aaa;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.icon-plus {
		width: 60px;
		height: 60px;
	}

	.cover {
		width: 100%;
		height: 100%;
	}
</style>
