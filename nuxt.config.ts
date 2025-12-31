export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/global.css'],
	app: {
		head: {
			titleTemplate: '%s - новый год!!!',
			title: '???',
			meta: [
				{
					name: 'description',
					content: 'ура урааа ура урааа сайт'
				}
			]
		}
	},

	modules: [
		'@nuxt/fonts',
		'@le-pepe/nuxt-snow-effect'
	],
	fonts: {
		provider: 'local'
	}
})