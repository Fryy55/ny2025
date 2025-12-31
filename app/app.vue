<template>
	<div>
		<SnowEffectComponent :speed=0.5 />
		<GlobalHeader />
		<div class="NuxtPageWrapper">
			<NuxtPage />
		</div>
		<GlobalFooter />
	</div>
</template>


<style lang="css" scoped>
.NuxtPageWrapper {
	padding-bottom: 60px;
}
</style>