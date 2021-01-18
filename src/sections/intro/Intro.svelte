<script lang="ts">
    import ChangingText from './components/ChangingText.svelte';
</script>

<section class="hero is-success is-fullheight">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">
          Hello, <ChangingText entries={['Awesome Person', 'Tech Genius', 'Developer', 'Hiring Manager', 'HR Specialist']} />
        </h1>
        <h2 class="subtitle">
          Fullheight subtitle
        </h2>
      </div>
    </div>
  </section>

<style>
</style>