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
				},
				{
					name: 'viewport',
					content: 'shrink-to-fit=no'
				}
			]
		}
	},
	routeRules: {
		'/quiz': { ssr: false },
		'/wishes': { ssr: false }
	},
	nitro: {
		experimental: {
			database: true
		},
		database: {
			default: {
				connector: 'sqlite',
				options: { name: 'wishes' }
			}
		}
	},

	modules: [
		'@nuxt/fonts',
		'@formkit/nuxt'
	],
	fonts: {
		provider: 'local'
	}
})