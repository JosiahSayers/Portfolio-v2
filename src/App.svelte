<script lang="ts">
	import Navigation from "./components/Navigation.svelte";
	import ContactMe from "./sections/contact-me/ContactMe.svelte";
	import Intro from "./sections/intro/Intro.svelte";
	import Projects from "./sections/projects/Projects.svelte";
	import Skills from "./sections/skills/Skills.svelte";
	import Footer from "./components/Footer.svelte";
	import Modal from "./components/modal/Modal.svelte";
	import { LOGGER } from "./logging/sidelog";

	const introNavItem = { text: "Hello", id: "intro", active: true };
	const projectsNavItem = { text: "My Work", id: "projects", active: false };
	const skillsNavItem = { text: "My Skills", id: "skills", active: false };
	const contactMeNavItem = {
		text: "Contact",
		id: "contact-me",
		active: false,
	};

	const navItems = [
		introNavItem,
		projectsNavItem,
		skillsNavItem,
		contactMeNavItem,
	];

	LOGGER.info("Page Loaded");
</script>

<main>
	<Modal />
	<Intro id={introNavItem.id} />
	<Projects id={projectsNavItem.id} />
	<Skills id={skillsNavItem.id} />
	<ContactMe id={contactMeNavItem.id} />
	<Footer />
</main>
