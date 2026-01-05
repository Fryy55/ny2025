<template>
	<div>
		<ClientOnly>
			<vue-particles
				id="snow"
				:options="{
					particles: {
						move: {
							direction: 'bottom',
							enable: true,
							speed: 2
						},
						number: {
							value: 100
						},
						shape: {
							type: 'circle'
						},
						size: {
							value: 3
						},
						color: {
							value: '#ffffff'
						}
					}
				}"
			/>
		</ClientOnly>
		<GlobalHeader />
		<div class="NuxtPageWrapper">
			<NuxtPage :page-key="route => route.fullPath" />
		</div>
		<GlobalFooter />
	</div>
</template>


<style lang="css" scoped>
.NuxtPageWrapper {
	padding-bottom: 60px;
}
</style>