<script lang="ts">
    import { fly } from "svelte/transition";
    import type { ProjectInterface } from "../project.interface";
    import { technologyLinks } from "../projects";
    import ProjectFeature from "./ProjectFeature.svelte";
    import ProjectLinks from "./ProjectLinks.svelte";
    import TechnologyLink from "./TechnologyLink.svelte";

    export let project: ProjectInterface;
    export let active: boolean;
    export let reverseAnimation: boolean;

    const animationDuration = 150;

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
        class="py-7 px-4"
        out:fly={{
            x: reverseAnimation ? x * -1 : x,
            duration: animationDuration,
        }}
        in:fly={{
            x: reverseAnimation ? x : x * -1,
            duration: animationDuration,
        }}
    >
        <div class="container py-3">
            <h2 class="subtitle mb-1">{project.description}</h2>
            <ProjectLinks {project} />

            <div class="content">
                <ul>
                    {#each project.features as feature}
                        <li><ProjectFeature {feature} /></li>
                    {/each}
                </ul>
            </div>

            {#each project.technologies as tech}
                <TechnologyLink
                    technology={tech}
                    link={technologyLinks[tech]}
                />
            {/each}
        </div>
    </div>
{/if}
