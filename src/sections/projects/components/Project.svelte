<script lang="ts">
    import type { ProjectInterface } from "../project.interface";

    export let project: ProjectInterface;
</script>

{#if project}
    <div class="hero-body">
        <div class="container">
            <h1 class="title">{project.name}</h1>
        </div>
    </div>
{/if}
