<script lang="ts">
    export let technology: string;
    export let link: string;
</script>

<span class="tag mx-2 is-normal is-rounded is-white">
    {#if link}
        <a href={link} class="has-text-black" target="_blank">{technology}</a>
    {:else}
        {technology}
    {/if}
</span>
