<script lang="ts">
    import { LOGGER } from "../../../logging/sidelog";

    import type { ProjectInterface } from "../project.interface";

    export let project: ProjectInterface;

    function logClick(linkType: "Live" | "Code") {
        LOGGER.info("Project link clicked", {
            projectName: project.name,
            linkType,
            url: linkType === "Live" ? project.url : project.sourcecodeUrl,
        });
    }
</script>

<span class="is-size-7 ml-2">
    {#if project.url}
        <a href={project.url} target="_blank" on:click={() => logClick("Live")}
            >View Live</a
        >
        <span class="mx-1">-</span>
    {/if}

    {#if project.sourcecodeUrl}
        <a
            href={project.sourcecodeUrl}
            target="_blank"
            on:click={() => logClick("Code")}>View Code</a
        >
    {/if}
</span>
