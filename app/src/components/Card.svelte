<script lang="ts">
    import {formatDate} from '$lib/utils'
    import type {Post} from '$lib/utils/sanity'
    import {base} from '$app/paths'

    export let post: Post
</script>

<div class="flex">
    <div class="card flex-1">
        <div class="card transition duration-200 hover:bg-base-300">
            <a class="card-body p-4"
               href={`${base}/post/${post.slug.current}`}>
                <p class="card-title">{post.title}</p>
                <p class="badge">{formatDate(post._createdAt)}</p>
                <p>{post.excerpt}</p>
            </a>
        </div>
    </div>
</div>
