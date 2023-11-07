<script>
import ProjectList from "./assets/components/ProjectList.vue";
import axios from "axios";

export default {
	data() {
		return {
			projects: [],
			api: {
				baseUrl: "http://127.0.0.1:8000/api/",
			},
		};
	},
	components: { ProjectList },

	methods: {
		fetchProject(uri = this.api.baseUrl + "projects") {
			axios.get(uri).then((response) => {
				this.projects = response.data.data;
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
		<ProjectList :projects="projects" />
	</div>
</template>

<style lang="scss"></style>
