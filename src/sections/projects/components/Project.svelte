<script lang="ts">
    import { afterUpdate, beforeUpdate } from "svelte";

    import { fly } from "svelte/transition";
    import type { ProjectInterface } from "../project.interface";

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

            <ul>
                {#each project.features as feature}
                    <li>{feature}</li>
                {/each}
            </ul>
        </div>
    </div>
{/if}

<style>
</style>
