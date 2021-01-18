<script lang="ts">
    import Hero from "../../components/Hero.svelte";
    import ChangingText from "./components/ChangingText.svelte";
    export let id: string;

    const changingTextEntries = [
        "Awesome Person",
        "Manager of Great Devs",
        "Tech Genius",
        "HR Specialist",
        "Gifted Developer",
        "Recruiting Extraordinaire",
    ];
</script>

<Hero {id}>
    <h1 class="title">
        Hello, <ChangingText entries={changingTextEntries} />
    </h1>
    <h2 class="subtitle">
        I'm Josiah, and I'm a web developer. Let's get to know each other!
    </h2>
</Hero>
