<template>
	<div class="container">
		<h2>班课{{ id }}详情页面</h2>
		<img :src="course.cover">
		<p>{{course.courseName}}</p>
		<p>{{course.courseClass}}</p>
		<div v-if="course.finished===0">
			<button @click="finishCourse(course)" class="btn">结束课程</button>
		</div>
		<div v-if="course.finished===1">
			<button @click="deleteCourse(course.courseId)" class="btn">删除课程</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'CourseDetail',
		data() {
			return {
				id: this.$route.params.id,
				course: {}
			};
		},
		methods: {
			finishCourse: function(course) {
				var _this = this;
				this.$http.get('http://localhost:8080/api/course/' + this.id).then(function(response) {
					_this.course = response.data;
				});
				this.$http({
					method: 'put',
					url: 'http://localhost:8080/api/course',
					data: {
						courseId: _this.course.courseId,
						courseName: _this.course.courseName,
						userId: _this.course.userId,
						courseClass: _this.course.courseClass,
						courseCode: _this.course.courseCode,
						cover: _this.course.cover,
						finished: 1
					}
				}).then(function() {
					alert('班课已经结束');
					_this.$router.push('/');
				});
			},
			deleteCourse: function(courseId) {
				var _this = this;
				this.$http({
					method: 'delete',
					url: 'http://localhost:8080/api/course/' + courseId
				}).then(function() {
					alert('班课删除成功');
					_this.$router.push('/');
				});
			}
		},
		created() {
			var _this = this;
			this.$http.get('http://localhost:8080/api/course/' + this.id).then(function(response) {
				_this.course = response.data;
			});
		}
	};
</script>
<style scoped>
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

	.btn:hover {
		background-color: rgb(162, 228, 177);
		color: #fff;
	}
</style>
