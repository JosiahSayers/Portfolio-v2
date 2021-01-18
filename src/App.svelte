<script lang="ts">
	import Intro from './sections/intro/Intro.svelte';
	import Navigation from './components/Navigation.svelte';
	import Hero from './components/Hero.svelte';

	let navItems = [
		{ text: 'Hello', href: 'intro', active: true },
		{ text: 'My Work', href: 'projects', active: false },
		{ text: 'My Skills', href: 'skills', active: false }
	];
</script>

<main>
	<Navigation {navItems}></Navigation>
	<Intro></Intro>
	<Hero heroStyle="is-danger" id="projects">Projects</Hero>
	<Hero id="skills">Skills</Hero>
</main>
