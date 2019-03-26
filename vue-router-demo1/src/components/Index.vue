<template>
	<!-- 根容器 -->
	<div class="container">

		<router-link to="/new_course"><img src="../assets/jiahao.png" class="btn" /></router-link>
		<div class="box">
			<input type="text" placeholder="搜索" class="input-box" />
			<button type="button" class="search-btn">搜索</button>
		</div>
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
					<span class="title">{{ course.courseClass }}</span>
				</div>
				<div class="course-name">
					<span class="title1">{{ course.courseName }}</span>
				</div>
				<br />
				<div class="teacher">
					<div class="left">
						<div class="avatar">
							<router-link :to="'/course/' + course.courseId">
								<img :src="course.avatar" />
							</router-link>
						</div>
						<div class="username">
							<p class="code" v-if="loginUserId === course.userId">{{course.username}}</p>
							<p class="code1" v-else="">{{course.username}}</p>
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
					<span class="title">{{ course.courseClass }}</span>
				</div>
				<div class="course-name">
					<span class="title">{{ course.courseName }}</span>
				</div>
				<br />
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
						<p class="code">{{course.courseCode}}</p>
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
	.box {
		margin-left: 325px;
		align-items: center;
		height: 35px;
		margin-top: 1px;
		margin-bottom: 12px;
	}

	.input-box {
		width: 310px;
		height: 25px;
		border-radius: 5px;
		border: #00BBDD 1px solid;

	}

	.search-btn {
		height: 29px;
		width: 50px;
		background-color: #00BBDD;
		color: white;
		border-radius: 5px;
		border: none;
		outline: none;
	}

	.top {
		width: 100%;
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
		width: 220px;
		height: 340px;
		margin-right: 20px;
		margin-bottom: 30px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
		padding-bottom: 10px;
	}

	.course1 {
		width: 220px;
		height: 340px;
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
		height: 240px;
		margin-bottom: 10px;
	}

	.title {
		font-size: 16px;
		color: #333;
	}

	.title1 {
		color: darkgrey;
	}

	.btn {
		width: 50px;
		height: 50px;
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

	.code1 {
		margin-top: 5px;
	}


</style>
