<script lang='ts'>
    export let navItems: { text: String, href: string, active: boolean }[] = [];
</script>

<nav>
    <div class="sections">
        {#each navItems as item}
            <div class="nav-item">
                <a href="{item.href}" class="circle" class:active={item.active} class:has-background-link-light={!item.active} class:has-background-link={item.active}> </a>
                <span>{item.text}</span>
            </div>
        {/each}
    </div>
</nav>

<style>
    nav {
        position: absolute;
        right: 1rem;
        height: 100vh;
    }

    .sections {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }

    .nav-item {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
    }

    .circle {
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
    }

    .circle + span {
        opacity: 0;
        right: 1rem;
        margin-right: 0.35rem;
    }

    .circle:hover + span {
        opacity: 1;
    }

    .circle.active + span {
        opacity: 1;
    }
</style>