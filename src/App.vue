<script>
import ProjectList from "./components/projects/ProjectList.vue";

export default {
	data() {
		return {};
	},
	components: { ProjectList },
};
</script>

<template>
	<div class="container">
		<h1>Hello World</h1>
		<hr />
		<router-view></router-view>
		<ProjectList />
	</div>
</template>

<style lang="scss"></style>
