<script lang="ts">
    import Hero from '../../components/Hero.svelte';
    import '../../app.css';
    import TimelineItem from '../../components/TimelineItem.svelte';
    import type {PageData} from './$types';
    import {marked} from 'marked';
    import Divider from '../../components/Divider.svelte';
    import Body from '../../components/Body.svelte';

    export let data: PageData;

</script>

<section>
    <div>
        <Hero title="about">
            <ul class="list-none" slot="post">
                <li class="font-mono">hello world</li>
            </ul>
        </Hero>
    </div>
    <Body>
    <Divider>Project History</Divider>
    <!--		<div class="divider font-extrabold text-3xl my-10 p-3 uppercase">Project History</div>-->
    <ul class="timeline timeline-vertical max-md:timeline-compact">
        {#each data.posts as {
            title,
            summary,
            links,
            dateFrom,
            dateTo,
            tags,
            body
        }}
            <TimelineItem {title} {summary} {dateFrom} {dateTo} {tags}>
                {#if links}
                    <ul>
                        {#each links as url}
                            <li><a href={url}
                                   class="font-mono underline text-xs">{url}</a>
                            </li>
                        {/each}
                    </ul>
                {/if}
                {#if body}
                    <div>{@html marked(body)}</div>
                {/if}
            </TimelineItem>
        {/each}
    </ul>
    </Body>
</section>
