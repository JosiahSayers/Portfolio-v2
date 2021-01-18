<script lang="ts">
    export let heroStyle: string = 'is-success';
    export let id: string = '';
</script>

<section class="hero {heroStyle} is-fullheight" {id}>
    <div class="hero-body">
        <div class="container">
            <slot></slot>
        </div>
    </div>
</section>