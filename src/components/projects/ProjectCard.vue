<script>
export default {
	data() {
		return {};
	},

	props: { project: Object },
};
</script>

<template>
	<div class="col">
		<div class="card h-100">
			<div class="card-header d-flex justify-content-between align-items-center">
				<span class="badge mx-1" :style="{ backgroundColor: project.type.color }">{{ project.type.label }}</span>
				<div>
					<span class="badge mx-1" v-for="technology in project.technologies" :style="{ backgroundColor: technology.color }">{{ technology.label }}</span>
				</div>
			</div>
			<div class="card-body">
				<h4>{{ project.title }}</h4>
			</div>
			<div class="card-footer">
				<a href="" class="btn btn-primary">vedi</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
