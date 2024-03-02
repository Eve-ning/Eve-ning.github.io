<script lang="ts">
    import type {PageData} from './$types';
    import '../app.css';
    import Home from '../components/Home.svelte';
    import Hero from '../components/Hero.svelte';
    import Divider from '../components/Divider.svelte';
    import Body from '../components/Body.svelte';

    export let data: PageData;
</script>

<section>
    <Hero title="Good Evening">
        <div slot="post">☄️</div>
    </Hero>
    <Body>
    <Divider>Blog Posts</Divider>
    <div class="basis-full md:basis-full rounded-2xl p-2">
        <Home posts="{data.posts}"/>
    </div>
    </Body>
</section>
