<template>
	<footer>
		<p class="by">by Em &lt;3</p>
		<img src="/github-logo.svg" alt="GitHub logo" class="github-logo" />
		<p class="repo-link"><a href="https://github.com/Fryy55/ny2025">Source code</a></p>
	</footer>
</template>


<style lang="css" scoped>
footer {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;

	background-color: #121111;
	border: 0 solid #0f0e0e;
	border-top-width: 7px;

	display: flex;
}

p {
	margin: 0;
	background: transparent;
	text-shadow: none;
}

.by {
	text-align: left;
	padding-left: 10px;
	color: #191717;
}

.github-logo {
	margin: auto;
	margin-right: 0;
	height: 2.5rem;
}

.repo-link {
	text-align: right;
	padding-right: 10px;
}
</style>