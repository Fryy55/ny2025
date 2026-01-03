import { createMultiStepPlugin } from "@formkit/addons"
import { bindings } from "@formkit/vue"
import { FormKitOptions } from "@formkit/core"


export default {
	plugins: [
		createMultiStepPlugin(),
		bindings
	],
	locales: {
		en: {
			validation: {
				required: "Выберите ответ"
			}
		}
	}
} satisfies FormKitOptions;