<template>
	<!-- 根容器 -->
	<div class="container">
		<router-link to="/new_course"><button class="btn">新建班课</button></router-link>
		<div class="top">
			<p>进行中的班课</p>
			<p>{{courses.length}}个进行中的班课</p>
		</div>
		<hr>
		<div class="course-container">
			<div class="course" v-for="(course, index) in courses" :key="index">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				<div class="course-class">
					<p class="title">{{ course.courseClass }}</p>
				</div>
				<div class="course-name">
					<p class="title">{{ course.courseName }}</p>
				</div>
				<div class="teacher">
					<div class="left">
						<div class="avatar">
							<router-link :to="'/course/' + course.courseId">
								<img :src="course.avatar" />
							</router-link>
						</div>
						<div class="username">
							<p class="code">{{course.username}}</p>
						</div>
					</div>
					<div class="course-code">
						<p class="code" v-if="loginUserId === course.userId">{{course.courseCode}}</p>
					</div>
				</div>
				
			</div>
		</div>

		<div class="top">
			<p>已结束的班课</p>
			<p>{{courses1.length}}个已结束的班课</p>
		</div>
		<hr>
		<div class="course-container">
			<div class="course1" v-for="(course, index) in courses1" :key="index">
				<div class="course-cover">
					<router-link :to="'/course/' + course.courseId">
						<img :src="course.cover" />
					</router-link>
				</div>
				<div class="course-class">
					<p class="title">{{ course.courseClass }}</p>
				</div>
				<div class="course-name">
					<p class="title">{{ course.courseName }}</p>
				</div>
				
				<div class="teacher">
					<div class="left">
						<div class="avatar">
							<router-link :to="'/course/' + course.courseId">
								<img :src="course.avatar" />
							</router-link>
						</div>
						<div class="username">
							<p class="code">{{course.username}}</p>
						</div>
					</div>
					<div class="course-code" v-if="loginUserId === course.userId">
						<p class="code" >{{course.courseCode}}</p>
					    <button @click="deleteCourse(course.courseId,index)" class="btn">删除</button>
					</div>
				</div>
				 
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Index',
		data() {
			return {
				loginUserId: 1,
				courses: [],
				courses1: []
			};
		},
		methods: {
			deleteCourse: function(courseId, index) {
				var _this = this;
				this.$http({
					method: 'delete',
					url: 'http://localhost:8080/api/course/' + courseId
				}).then(function() {
					alert('班课删除成功');
					_this.courses1.splice(index, 1);
				});
			}
		},
		created() {
			var _this = this;
			this.$http.get('http://localhost:8080/api/cur-courses').then(function(response) {
				_this.courses = response.data;
			});
			this.$http.get('http://localhost:8080/api/fin-courses').then(function(response) {
				_this.courses1 = response.data;
			});
		}
	};
</script>
<style scoped>
	.top {
		width: 80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

	hr {
		width: 100%;
		color: #efefef;
	}

	.container {
		padding-top: 20px;
	}

	.course-container {
		display: flex;
		flex-wrap: wrap;
	}

	.course {
		width: 260px;
		height: 420px;
		margin-right: 20px;
		margin-bottom: 30px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
	}

	.course1 {
		width: 260px;
		height: 470px;
		margin-right: 20px;
		margin-bottom: 30px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
		-webkit-filter: grayscale(1);
	}

	.course-cover img {
		width: 100%;
		height: 280px;
	}

	.title {
		font-size: 16px;
		color: #333;
	}

	.btn {
		width: 120px;
		height: 40px;
		border: 1px solid #fff;
		background-color: rgb(0, 187, 221);
		border-radius: 20px;
		outline: none;
		color: #fff;
		font-size: 16px;
	}

	.course-code {
		color: rgb(0, 187, 221);
	}
	.teacher {
		display: flex;
		justify-content: space-between;
		padding-left: 10px;
	}
	.left {
		display: flex;
	}
	.avatar img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		margin-right: 5px;
	}
	.code {
		color: #00BBDD;
		margin-top: 5px;
	}
	.btn:hover{
		background-color: rgb(162, 228, 177);
	}
</style>
