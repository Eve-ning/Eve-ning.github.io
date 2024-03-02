<script lang="ts">
  import {client, type GalleryImage} from '$lib/utils/sanity'
  import imageUrlBuilder from '@sanity/image-url'
  import type {ImageAsset} from '@sanity/types'

  // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client)

    export let galleryImages: GalleryImage[]

    function urlFor(source: ImageAsset) {
        return builder.image(source).url()
    }
</script>

<div class="grid lg:grid-cols-4 md:grid-cols-1 gap-10">
    {#each galleryImages as {image, name, desc}}
        <div class="card bg-base-100 shadow-xl">
            {#if image.asset}
                <figure><img
                        src="{urlFor(image)}"
                        alt="{name}"
                        class="filter contrast-75 hover:contrast-100 transition duration-300"
                        onclick="this.requestFullscreen()"
                /></figure>
            {/if}
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                {#if desc} <p>{desc}</p> {/if}
            </div>
        </div>
    {/each}
</div>
