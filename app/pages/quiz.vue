<template>
	<div class="initial-div" v-if="state === 'start'">
		<p>
			Снизу небольшая викторина.<br />
			Чтобы узнать, чей это подарок, нужно ответить всего лишь на 3 вопроса <em>подряд</em>.<br />
			Удачи!
		</p>
		<button
			@click="() => { useRouter().push({ query: { ...route.query, toQuiz: 'true' } }); }"
			class="start-button"
		>
			Начать
		</button>
	</div>
	<div v-else-if="state === 'quiz'">
		<FormKit type="form" :actions="false" :incomplete-message="false">
			<FormKit type="multi-step" tab-style="progress" :allow-incomplete="false">
				<FormKit
					v-for="(q, index) in currentQuiz"
					:key="q.id"
					type="step"
					:name="`Вопрос #${index + 1}`"
				>
					<p>{{ q.text }}</p>
					<FormKit
						type="radio"
						:options="q.options"
						:id="q.id"
						:classes="{
							outer: isWrongAnswer ? 'wrong-verified' : ''
						}"

						validation="required|verifyAnswer"
						:validation-rules="{ verifyAnswer }"
						:validation-messages="{ verifyAnswer: 'Неправильный ответ!' }"
						validation-visibility="live"
					/>

					<template #stepNext="{ handlers, node }">
						<button v-if="node.context!.state.valid && q.id != 'q10'" @click="handlers.next">
							Далее
						</button>

						<button v-else-if="node.context!.state.valid" @click="onReveal">
							Чей подарок?
						</button>

						<button
							v-else-if="isWrongAnswer"
							@click="reloadNuxtApp({ ttl: 0 })"
						>
							Заново
						</button>
					</template>
					<template #stepPrevious></template>
				</FormKit>
			</FormKit>
		</FormKit>
	</div>
	<div v-else-if="state === 'name'">
		<p>s</p>
	</div>
</template>


<script setup lang="ts">
import type { FormKitNode } from "@formkit/core"


useHead({
	title: "викторниа"
});

definePageMeta({
	validate: async (route) => {
		const hash = route.query.recipient;

		if (!hash) {
			return {
				statusCode: 400,
				statusMessage: "Кому подарок не понятно,,,"
			}
		}

		const { allowed } = await $fetch<{ allowed: boolean }>("/api/verify-hash", {
			method: "POST",
			body: { hash }
		});
		if (!allowed) {
			return {
				statusCode: 422,
				statusMessage: "Нет такого хеша !"
			}
		}

		return true;
	}
});

// post-validation

const route = useRoute();
const hash = route.query.recipient;

const state = ref("start");

if (route.query.toQuiz)
	state.value = "name";


const isWrongAnswer = ref(false);

const verifyAnswer = async (node: FormKitNode): Promise<boolean> => {
	const id = node.context!.id;
	const answerInd = questions.find(i => i.id === id)!.options.indexOf(node.value as string);

	const { correct } = await $fetch<{ correct: boolean }>("/api/verify-answer", {
		method: "POST",
		body: { id, answerInd }
	});

	isWrongAnswer.value = !correct;

	return correct;
};

interface Question {
	id: string,
	text: string,
	options: string[]
};

const currentQuiz = ref<Question[]>([]);
const questions = await $fetch<Question[]>(
	"/api/questions", { method: "GET" }
);

onMounted(async () => {
	for (let i = questions.length - 2; 0 < i; --i) {
		const j = Math.floor(Math.random() * (i + 1));
		[questions[i], questions[j]] = [questions[j]!, questions[i]!];
	}

	questions[2] = questions.at(-1)!;

	currentQuiz.value = questions.slice(0, 3);

	return;
});

// name stuff
const onReveal = () => {
	state.value = "name";
};
</script>


<style lang="css" scoped>
.initial-div {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.start-button {
	margin-top: 4rem;
}
</style>