<script lang="ts">
    import { beforeUpdate } from "svelte";

    import Project from "./components/Project.svelte";
    import Tabs from "./components/Tabs.svelte";
    import { projects } from "./projects";

    export let id: string;

    let previousIndex = 0;
    let activeIndex = 0;
    let reverseAnimation = false;

    $: {
        reverseAnimation = previousIndex > activeIndex;
        previousIndex = activeIndex;
    }
</script>

<section class="hero is-danger" {id}>
    <div class="hero-body">
        <div class="container">
            <h1 class="title">Projects</h1>
        </div>
    </div>
    <Tabs bind:activeIndex {projects} />
    {#each projects as project, index}
        <Project {project} active={activeIndex === index} {reverseAnimation} />
    {/each}
</section>
