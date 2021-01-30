<script lang="ts">
    import type { ProjectInterface } from "../project.interface";

    export let activeIndex: number;
    export let projects: ProjectInterface[];
</script>

<div class="tabs is-medium is-boxed mb-0">
    <ul>
        {#each projects as project, index}
            <li class:is-active={activeIndex === index}>
                <a
                    href="javascript:void(0)"
                    on:click|preventDefault={() => (activeIndex = index)}
                    class="has-text-black">{project.name}</a
                >
            </li>
        {/each}
    </ul>
</div>
