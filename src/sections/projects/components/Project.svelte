<script lang="ts">
    import { afterUpdate, beforeUpdate } from "svelte";

    import { fly } from "svelte/transition";
    import type { ProjectInterface } from "../project.interface";
    import { technologyLinks } from "../projects";

    export let project: ProjectInterface;
    export let active: boolean;
    export let reverseAnimation: boolean;

    const animationDuration = 400;

    let timeoutRef: number;
    let shouldDisplay = true;
    let x = -1000;

    $: {
        if (active && timeoutRef) {
            clearTimeout(timeoutRef);
            timeoutRef = null;
        } else if (active) {
            timeoutRef = setTimeout(() => {
                shouldDisplay = true;
                clearTimeout(timeoutRef);
                timeoutRef = null;
            }, animationDuration);
        } else {
            shouldDisplay = false;
        }
    }
</script>

{#if project && shouldDisplay}
    <div
        class="hero-body"
        out:fly={{
            x: reverseAnimation ? x * -1 : x,
            duration: animationDuration,
        }}
        in:fly={{
            x: reverseAnimation ? x : x * -1,
            duration: animationDuration,
        }}
    >
        <div class="container">
            <h1 class="title">{project.name}</h1>
            <h2 class="subtitle">{project.description}</h2>

            <div class="columns">
                <div class="column">
                    {#each project.technologies as tech}
                        <span class="tag mx-2 is-normal is-rounded">
                            {#if technologyLinks[tech]}
                                <a
                                    href={technologyLinks[tech]}
                                    class="has-text-black"
                                    target="_blank">{tech}</a
                                >
                            {:else}
                                {tech}
                            {/if}
                        </span>
                    {/each}
                </div>
            </div>

            <div class="content">
                <ul>
                    {#each project.features as feature}
                        <li>{feature}</li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>
{/if}

<style>
</style>
