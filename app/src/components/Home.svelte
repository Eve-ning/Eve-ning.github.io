<script lang="ts">
    import Card from '../components/Card.svelte';
    import '../app.css';
    import type {Post} from '$lib/utils/sanity';

    export let posts: Post[];
</script>
{#each posts as post, ix}
    <Card {post}/>
    {#if ix === 0}
        <div class="divider divider-accent">LATEST</div>
    {:else}
        <div class="divider"></div>
    {/if}
{/each}