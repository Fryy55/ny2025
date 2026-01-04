export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	components: [
		{
			path: '~/components',
			pathPrefix: false
		}
	],
	css: [
		'@formkit/addons/css/multistep',
		'~/assets/css/global.css'
	],
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
		'@le-pepe/nuxt-snow-effect',
		'@formkit/nuxt'
	],
	fonts: {
		provider: 'local'
	}
})