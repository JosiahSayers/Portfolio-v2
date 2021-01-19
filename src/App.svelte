<script lang="ts">
	import Navigation from './components/Navigation.svelte';
	import ContactMe from './sections/contact-me/ContactMe.svelte';
	import Intro from './sections/intro/Intro.svelte';
	import Projects from './sections/projects/Projects.svelte';
	import Skills from './sections/skills/Skills.svelte';
	import Footer from './components/Footer.svelte';
	import Modal from './components/modal/Modal.svelte';
	import { LOGGER } from './logging/sidelog';

	const introNavItem = { text: 'Hello', id: 'intro', active: true };
	const projectsNavItem = { text: 'My Work', id: 'projects', active: false };
	const skillsNavItem = { text: 'My Skills', id: 'skills', active: false };
	const contactMeNavItem = { text: 'Contact Me', id: 'contact-me', active: false};

	const navItems = [
		introNavItem,
		projectsNavItem,
		skillsNavItem,
		contactMeNavItem
	];

	LOGGER.info('Page Loaded');
</script>

<main>
	<Modal></Modal>
	<Navigation {navItems}></Navigation>
	<Intro id={introNavItem.id}></Intro>
	<Projects id={projectsNavItem.id}></Projects>
	<Skills id={skillsNavItem.id}></Skills>
	<ContactMe id={contactMeNavItem.id}></ContactMe>
	<Footer></Footer>
</main>
