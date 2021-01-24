<script lang="ts">
    export let heroStyle: string = "is-success";
    export let id: string = "";
    export let fullHeight = true;
</script>

<section class="hero {heroStyle}" class:is-fullheight={fullHeight} {id}>
    <div class="hero-body">
        <div class="container">
            <slot />
        </div>
    </div>
</section>
