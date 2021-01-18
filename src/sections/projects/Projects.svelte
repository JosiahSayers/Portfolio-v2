<script lang="ts">
    import Hero from '../../components/Hero.svelte';
    export let id: string;
</script>

<Hero {id} heroStyle="is-danger">
    <h1 class="title">Projects</h1>
</Hero>