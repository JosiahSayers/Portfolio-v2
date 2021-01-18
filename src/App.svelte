<script lang="ts">
	import Intro from './sections/intro/Intro.svelte';
	import Navigation from './components/Navigation.svelte';

	const navItems = [
		{ text: 'Hello', href: '#', active: true },
		{ text: 'My Work', href: '#projects', active: false },
		{ text: 'My Skills', href: '#skills', active: false }
	];
</script>

<main>
	<Navigation {navItems}></Navigation>
	<Intro></Intro>
</main>

<style>
</style>