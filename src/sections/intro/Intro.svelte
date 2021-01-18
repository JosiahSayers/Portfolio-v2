<script lang="ts">
    import ChangingText from './components/ChangingText.svelte';

    const changingTextEntries = [
        'Awesome Person',
        'Manager of Great Devs',
        'Tech Genius',
        'HR Specialist',
        'Gifted Developer',
        'Recruiting Extraordinaire'
    ]
</script>

<section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hello, <ChangingText entries={changingTextEntries} />
        </h1>
        <h2 class="subtitle">
          I'm Josiah, and I'm a web developer. Let's get to know each other!
        </h2>
      </div>
    </div>
  </section>

<style>
</style>