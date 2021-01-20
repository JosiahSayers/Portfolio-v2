<script lang="ts">
    import type { ProjectInterface } from "../project.interface";

    export let activeIndex: number;
    export let projects: ProjectInterface[]
</script>

<div class="hero-foot">
    <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
            <ul>
                {#each projects as project, index}
                     <li class:is-active={activeIndex === index}>
                         <a on:click|preventDefault={() => activeIndex = index}>{project.name}</a>
                     </li>
                {/each}
            </ul>
        </div>
    </nav>
</div>