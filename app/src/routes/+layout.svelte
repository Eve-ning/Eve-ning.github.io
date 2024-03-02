<script lang="ts">
  import '../app.css'
  import Footer from '../components/Footer.svelte'
  import TopNav from '../components/TopNav.svelte'
</script>

<div class="container max-w-full p-0 m-0 dark:bg-stone-950">
    <TopNav/>
    <main>
        <slot/>
    </main>
    <Footer/>
</div>
