<script lang="ts">
    import Hero from "../../components/Hero.svelte";
    import HeroTitle from "../../components/HeroTitle.svelte";
    export let id: string;
</script>

<div class="section" {id}>
    <HeroTitle>Skills</HeroTitle>
</div>
