<script lang="ts">
    import { onMount } from "svelte";
import Project from "./components/Project.svelte";
    import Tabs from "./components/Tabs.svelte";

    export let id: string;

    let activeIndex = 0;
    let projects = [];
    $: selectedProject = projects[activeIndex];

    onMount(async () => projects = await (await fetch('/projects.json')).json());
</script>

<section class="hero is-danger" {id}>
    <div class="hero-body">
        <div class="container">
            <h1 class="title">Projects</h1>
        </div>
    </div>
    <Tabs 
        bind:activeIndex
        {projects}
    />
    <!-- <Project project={selectedProject} /> -->
    {#each projects as project, index}
        <Project {project} active={activeIndex === index} />
    {/each}
</section>
