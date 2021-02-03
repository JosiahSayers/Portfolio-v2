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
    <div class="titles">
        <h1 class="title is-unselectable">
            Hello, <ChangingText entries={changingTextEntries} />
        </h1>
        <h2 class="subtitle">
            I'm Josiah, and I'm a web developer. Let's get to know each other!
        </h2>
    </div>
    <a href="#projects">
        <svg
            class="top"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
        <svg
            class="bottom"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    </a>
</Hero>

<style>
    .titles {
        width: fit-content;
        padding: 1.5rem;
        flex-shrink: 0;
    }

    a {
        position: absolute;
        margin-top: 4rem;
        width: 50%;
        text-align: center;
        display: flex;
        flex-direction: column;
        transition-duration: 0.2s;

        animation: fade-in 1s ease-in-out cubic-bezier(0.55, 0.085, 0.68, 0.53)
            1 backwards;
    }

    a:hover {
        transform: scale(1.2);
    }

    svg.top {
        -webkit-animation: 0.4s ease-in-out 0.2s infinite alternate wave;
        animation: 0.4s ease-in-out 0.2s infinite alternate wave;
    }

    svg.bottom {
        -webkit-animation: 0.4s ease-in-out 0s infinite alternate wave;
        animation: 0.4s ease-in-out 0s infinite alternate wave;
    }

    svg {
        height: 5vh;
        margin-bottom: -1rem;
    }

    @keyframes wave {
        0% {
            transform: scale(1);
        }

        100% {
            transform: scale(1.05);
        }
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @media only screen and (max-width: 960px) {
        a {
            width: 100%;
        }
    }

    @media only screen and (max-width: 500px) {
        h1 {
            min-height: 8rem;
            display: flex;
            flex-direction: column;
        }
    }
</style>
