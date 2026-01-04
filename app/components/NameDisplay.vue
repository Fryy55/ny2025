<template>
	<Transition name="present-for-transition" appear>
		<p class="present-for">Это подарок...</p>
	</Transition>
	<div class="recipient-wrapper">
		<Transition name="recipient-transition" appear>
			<p class="recipient">{{ recipientRef }}</p>
		</Transition>
			<Transition name="recipient-transition" appear>
				<button v-if="wishes" @click="navigateTo('/wishes')" class="wishes">
					Пожелания
				</button>
			</Transition>
	</div>
</template>


<script setup lang="ts">
const recipientRef = ref("а");

const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ".split("");
const recipient = useSlots().default!()[0]!.children as string;

setTimeout(async () => {
	for (
		var curChar = 0;
		recipientRef.value != recipient;
	) {
		if (recipientRef.value[curChar] != recipient[curChar]) {
			recipientRef.value = recipientRef.value.slice(0, curChar)
														+ alphabet[alphabet.indexOf(recipientRef.value[curChar]!) + 1]
														+ recipientRef.value.slice(curChar + 1);
		} else {
			++curChar;
		}

		await new Promise(resolve => setTimeout(resolve,
			(() => {
				switch (curChar) {
					case recipient.length - 2:
						return 50;

					case recipient.length - 1:
						return 100;

					default:
						return 15;
				}
			})()
		));
	}

	wishes.value = true;
}, 1200);

const wishes = ref(false);
</script>


<style lang="css" scoped>
.present-for {
	margin-top: 4rem;
	border: none;
	background: none;
}

.recipient-wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.recipient {
	padding: 1rem;
	font-size: 3rem;

	background:
		linear-gradient(var(--background-color)) padding-box,
		linear-gradient(55deg, #23f5f5, #3cff70, #2a8cef, #23f5f5, #3cff70, #2a8cef) border-box;
	background-size: 300% 100%;
}

.wishes {
	margin-top: 2.5rem;
	scale: 1.2;
}

/* Transitions */
.present-for-transition-enter-from {
	margin-top: 2rem;
	opacity: 0%;
}

.present-for-transition-enter-active {
	transition: all 0.5s;
	transition-delay: 0.5s;
}


.recipient-transition-enter-from {
	opacity: 0%;
}

.recipient-transition-enter-active {
	transition: all 0.7s;
	transition-delay: 1.2s;
}
</style>