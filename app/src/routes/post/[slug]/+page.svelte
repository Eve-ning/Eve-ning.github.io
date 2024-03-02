<script lang="ts">
    import {formatDate} from '$lib/utils'
    import type {PageData} from './$types'
    import {marked} from 'marked'
    import markedKatex from 'marked-katex-extension'
    import Hero from '../../../components/Hero.svelte'
    import mermaid from 'mermaid';
    import {onMount} from "svelte";

    mermaid.initialize({
        theme: 'dark',
        startOnLoad: false,
    })
    export let data: PageData
    marked.use(markedKatex({displayMode: true, output: 'mathml'}))
    const renderer = new marked.Renderer();
    renderer.code = function (code, language) {
        if (code.match(/^sequenceDiagram/) || code.match(/^flowchart/) || code.match(/^quadrantChart/)) {
            return '<pre class="mermaid bg-transparent grid justify-items-center">' + code + '</pre>';
        } else {
            return '<pre class="bg-transparent"><code>' + code + '</code></pre>';
        }
    };
    onMount(() => {
        mermaid.run();
    })
</script>

<Hero title="{data.title ?? ''}">
    <div slot="post">
        <h3>{data.excerpt}</h3>
        <p>{formatDate(data._createdAt)}</p>
    </div>
</Hero>
<section class="prose grid gap-2 py-20 mx-auto">
    <div>{@html marked.parse(data.body, {renderer: renderer})}</div>
</section>
