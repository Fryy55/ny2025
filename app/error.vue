<script setup lang="ts">
import type { NuxtError } from '#app';


const props = defineProps<{ error: NuxtError }>();

useHead({
	title: 'ОШИБКА!!!!!',
	bodyAttrs: {
		class: 'error-body'
	}
});
</script>


<template>
	<div>
		<p class="error-code">Ошибка {{ error.statusCode }}</p>
		<p>{{ error.message }}</p>
	</div>
</template>


<style lang="css">
.error-body {
	--background-color: black;
	background-color: var(--background-color);
	min-height: 0;
}
</style>

<style lang="css" scoped>
div {
	max-width: 40rem;
	margin: auto;
	margin-top: 10rem;
	border: 10px solid #444242;
	border-radius: 40px;
}

p {
	margin-left: 3rem;
	margin-right: 3rem;
}

.error-code {
	background:
		linear-gradient(var(--background-color)) padding-box,
		linear-gradient(55deg, #6a0000, #9b0808, #6a0000, #9b0808, #6a0000, #9b0808) border-box;
	background-size: 300% 100%;
}
</style>