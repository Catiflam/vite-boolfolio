<script>
import ProjectList from "./components/projects/Projectlist.vue";
import axios from "axios";
export default {
	data() {
		return {
			post: [],
			api: {
				baseUrl: "http://127.0.0.1:8000/api/",
			},
		};
	},
	components: { ProjectList },

	methods: {
		fetchProject(uri = this.api.baseUrl + "project") {
			axios.get(uri).then((response) => {
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
	<h1>Hello World</h1>
	<hr />
	<ProjectList />
</template>

<style lang="scss"></style>
