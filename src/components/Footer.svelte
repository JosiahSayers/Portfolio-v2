<script>
    import Hero from "./Hero.svelte";

    const links = [
        { text: "Github", href: "https://github.com/JosiahSayers" },
        {
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/josiah-sayers/",
        },
        {
            text: "Resume",
            href: "https://www.josiahsayers.com/docs/josiah.sayers.pdf",
        },
    ];
</script>

<footer>
    <Hero heroStyle="is-light" fullHeight={false} id="footer">
        <div class="is-flex is-justify-content-space-between is-size-7-mobile">
            <div class="copyright">
                <span>&copy; {new Date().getFullYear()} Josiah Sayers</span>
            </div>

            <div class="links">
                {#each links as link, index}
                    <a href={link.href}>{link.text}</a>
                    {#if index !== links.length - 1}
                        <span class="mx-3"> | </span>
                    {/if}
                {/each}
            </div>
        </div>
    </Hero>
</footer>
