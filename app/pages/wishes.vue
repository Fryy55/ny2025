<template>
<div v-if="!submitted" class="submit-div">
	<p>Оставить пожелание</p>
	<form @submit.prevent="sendAWish">
		<textarea
			rows="10" cols="50"
			maxlength="300"
			placeholder="ну нужно хоть что-нибудь ну"
			v-model="message"
		></textarea>
		<button>Отправить</button>
		<p v-if="sending" class="loading">Загрузка...</p>
	</form>
</div>
<div v-else>
	<Transition name="list-transition" appear>
		<div class="wishes-list">
			<p
				v-for="(w, index) in list"
				:key="index"
				class="wish"
				:class="{
					'alternate-wish': index % 2
				}"
				:style="{
					'--start-offset': w.delay
				}"
			>
				{{ w.wish }}
			</p>
		</div>
	</Transition>
</div>
</template>


<script setup lang="ts">
const submitted = ref(false);
const message = ref("с новым годом\n\n- имя");
const sending = ref(false);
const list = ref<{ wish: string, delay: string }[]>([]);

const sendAWish = async () => {
	sending.value = true;

	const res = await $fetch("/api/wishes", {
		method: "POST",
		body: {
			wish: message.value
		}
	});

	if ("forbidden" in res) {
		alert("Пожелания с буквами желательно");
		sending.value = false;
		return;
	}

	list.value = res.wishes.map(i => ({
		wish: i,
		delay: `${(Math.random() * -20)}s`
	}));

	submitted.value = true;
}
</script>


<style lang="css" scoped>
.submit-div,
form {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.submit-div {
	margin-top: 5rem;
	margin-bottom: 3rem;
}

form {
	gap: 1rem;
}

textarea {
	background-color: var(--background-color);

	color: white;
	text-align: start;
	font-size: medium;
	resize: none;

	background:
		linear-gradient(var(--background-color)) padding-box,
		linear-gradient(45deg, #ff4646, #ff9646, #faff6f, #90ff59, #59fff7, #4665ff, #774dff) border-box;
	background-size: 200% 100%;
	animation: grad-shift 10s ease infinite;
	border: 6px solid transparent;
	border-radius: 15px;

	scrollbar-color: #ffffff65 transparent;
}

textarea::selection {
	background-color: #ffffff2d;
}

.loading {
	margin-top: 0;
}

/* list */
.wishes-list {
	margin-bottom: 3rem;
	overflow-x: hidden;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.wish {
	white-space: pre-wrap;

	width: 70%;
	margin: 0;
	padding-left: 200%;
	padding-right: 200%;

	background: none;
	border: none;
	border-radius: 0;

	position: relative;
	animation: wish-shift 20s ease-in-out infinite;
	animation-delay: var(--start-offset, 0s);
}

.alternate-wish {
	background-color: #ffffff07;
}


/* Transitions */
.list-transition-enter-from {
	opacity: 0%;
}

.list-transition-enter-active {
	transition: all 2s ease-in-out;
}


/* Keyframes */
@keyframes wish-shift {
	0% {
		transform: translateX(10%);
	}
	50% {
		transform: translateX(-10%);
	}
	100% {
		transform: translateX(10%);
	}
}
@-moz-keyframes wish-shift {
	0% {
		transform: translateX(10%);
	}
	50% {
		transform: translateX(-10%);
	}
	100% {
		transform: translateX(10%);
	}
}
@-webkit-keyframes wish-shift {
	0% {
		transform: translateX(10%);
	}
	50% {
		transform: translateX(-10%);
	}
	100% {
		transform: translateX(10%);
	}
}
</style>