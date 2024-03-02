<script lang="ts">

	import Divider from './Divider.svelte';
	import type { ExpPost } from '$lib/utils/sanity';
	import TimelineItem from './TimelineItem.svelte';
	import { marked } from 'marked';

	export let title: string;
	export let posts: ExpPost[];

</script>

<Divider>{title}</Divider>
<ul class="timeline timeline-vertical max-md:timeline-compact">
	{#each posts as { title, summary, links, dateFrom, dateTo, tags, body }}
		<TimelineItem {title} {summary} {dateFrom} {dateTo} {tags}>
			{#if links}
				<ul>
					{#each links as url}
						<li><a href={url} class="font-mono underline text-xs">{url}</a></li>
					{/each}
				</ul>
			{/if}
			{#if body}
				<div>{@html marked(body)}</div>
			{/if}
		</TimelineItem>
	{/each}
</ul>