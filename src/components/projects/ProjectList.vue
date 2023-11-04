<script>
export default {
	data() {
		return {};
	},

	props: {
		projects: Array,
	},
};
</script>

<template>
	<div class="container">
		<h2>ProjectList</h2>
		<div class="row row-cols-3 g-4">
			<div class="col" v-for="i in 6">
				<div class="card">
					<div class="card-body">
						<h4>ProjectTitle</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
