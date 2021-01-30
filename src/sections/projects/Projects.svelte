<script lang="ts">
    import Project from "./components/Project.svelte";
    import Tabs from "./components/Tabs.svelte";
    import HeroTitle from "../../components/HeroTitle.svelte";
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

<section class="section" {id}>
    <div class="container">
        <HeroTitle>Projects</HeroTitle>
        <Tabs bind:activeIndex {projects} />
        {#each projects as project, index}
            <Project
                {project}
                active={activeIndex === index}
                {reverseAnimation}
            />
        {/each}
    </div>
</section>
