<script lang="ts">
    export let navItems: { text: String, id: string, active: boolean }[] = [];

    function isInViewport(element) {
		const {top, bottom} = element.getBoundingClientRect() ?? {};
		const heightToCheck = window.innerHeight / 2;
		return top < heightToCheck && bottom > heightToCheck
	}

	document.addEventListener('scroll', () => {
		const updatedItems = [...navItems];
		updatedItems.forEach((item) => item.active = isInViewport(document.getElementById(item.id)));
		navItems = updatedItems;
	});
</script>

<nav>
    <div class="sections">
        {#each navItems as item}
            <div class="nav-item">
                <a href="#{item.id}" class="circle" class:active={item.active} class:has-background-link-light={!item.active} class:has-background-link={item.active}> </a>
                <span>{item.text}</span>
            </div>
        {/each}
    </div>
</nav>

<style>
    nav {
        position: fixed;
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