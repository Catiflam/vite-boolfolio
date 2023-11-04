<script>
import ProjectList from "./assets/components/ProjectList.vue";
import axios from "axios";

export default {
	data() {
		return {
			project: [],
			api: {
				baseUrl: "http://127.0.0.1:8000/api/",
			},
		};
	},
	components: { ProjectList },

	methods: {
		fetchProject() {
			axios.get("http://127.0.0.1:8000/api/projects").then((response) => {
				this.project = response.data.data;
			});
		},
	},

	created() {
		this.fetchProject();
	},
};
</script>

<template>
	<div class="container">
		<h1>Hello World</h1>
		<hr />
		<ProjectList :projects="project" />
	</div>
</template>

<style lang="scss"></style>
