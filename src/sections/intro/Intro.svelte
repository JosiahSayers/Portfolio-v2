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

<Hero {id} heroStyle="is-primary is-bold">
    <div class="neumorph-box">
        <h1 class="title is-unselectable">
            Hello, <ChangingText entries={changingTextEntries} />
        </h1>
        <h2 class="subtitle">
            I'm Josiah, and I'm a web developer. Let's get to know each other!
        </h2>
    </div>
</Hero>

<style>
    .neumorph-box {
        width: fit-content;
        padding: 1.5rem;
    }

    @media only screen and (max-width: 500px) {
        h1 {
            min-height: 8rem;
            display: flex;
            flex-direction: column;
        }
    }
</style>
