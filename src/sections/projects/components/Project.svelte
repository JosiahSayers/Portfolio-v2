<script lang="ts">
    import type { ProjectInterface } from "../project.interface";
    import { fly } from 'svelte/transition';

    export let project: ProjectInterface;
    export let active: boolean;
</script>

{#if project && active}
    <div class="hero-body" in:fly={{x: 1000}} out:fly={{x: -1000}}>
        <div class="container">
            <h1 class="title">{project.name}</h1>
        </div>
    </div>
{/if}
