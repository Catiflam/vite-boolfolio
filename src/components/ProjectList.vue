<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";
import { store } from "../data/store";

export default {
	data() {
		return {
			projects: [],
			pagination: {
				prev: null,
				next: null,
			},
		};
	},

	components: { ProjectCard },

	methods: {
		fetchProject(uri = store.api.baseUrl + "projects") {
			axios.get(uri).then((response) => {
				this.projects = response.data.data;
				this.pagination.prev = response.data.prev_page_url;
				this.pagination.next = response.data.next_page_url;
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
		<h2>ProjectList</h2>
		<div class="row row-cols-3 g-4">
			<ProjectCard class="col" v-for="project in projects" :project="project" />
		</div>

		<!-- <nav aria-label="Page navigation example">
			<ul class="pagination">
				<li v-for="link in pagination.links" @click="fetchProject(link.url)" class="page-item">
					<a class="page-link" href="#">{{ link.label }}</a>
				</li>
			</ul>
		</nav> -->
	</div>
	<nav aria-label="Page navigation example">
		<ul class="pagination">
			<li @click="fetchProject(pagination.prev)" class="page-item">
				<a class="page-link" href="#">Prev </a>
			</li>
			<li class="page-item"><a class="page-link" href="#">1</a></li>
			<li class="page-item"><a class="page-link" href="#">2</a></li>
			<li class="page-item"><a class="page-link" href="#">3</a></li>
			<li @click="fetchProject(pagination.next)" class="page-item"><a class="page-link" href="#">Next</a></li>
		</ul>
	</nav>
</template>

<style lang="scss" scoped></style>
