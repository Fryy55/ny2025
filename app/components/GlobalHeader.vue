<template>
	<header>
		<h1 class="happy-new-year-header">C Новым годом!</h1>
	</header>
</template>


<style lang="css" scoped>
header {
	--border-radius: 40px;

	background:
		linear-gradient(to bottom, #2f2f2f, #212121) padding-box,
		linear-gradient(to right, red, green, red, green, red, green, red, green, red, green) border-box;
	border: 5px solid transparent;
	border-top-width: 0;
	border-bottom-left-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	background-size: 200% 100%;
	animation: grad-shift 10s ease infinite;

	position: sticky;
	top: 0px;
}

.happy-new-year-header {
	font-family: "PF Playskool Pro", fantasy;

	text-align: center;
	letter-spacing: 2rem;
	font-size: 300%;

	background-image: linear-gradient(80deg, #76ffed, #deff72, #ff4242, #76ffed, #deff72, #ff4242, #76ffed, #deff72, #ff4242);
	background-size: 200% 100%;
	animation: grad-shift 10s ease infinite;
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	-webkit-text-fill-color: transparent;

	margin: 0;
}
</style>