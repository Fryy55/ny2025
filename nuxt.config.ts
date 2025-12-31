export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/global.css'],

	modules: [
		'@nuxt/fonts',
		'@le-pepe/nuxt-snow-effect'
	],
	fonts: {
		provider: 'local'
	}
})