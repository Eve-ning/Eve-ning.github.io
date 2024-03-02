<script lang="ts">
  import Gallery from '../../components/Gallery.svelte'
  import Hero from '../../components/Hero.svelte'
  import '../../app.css'
  import type {PageData} from './$types'

  export let data: PageData
</script>

<section>
    <div>
        <Hero title="gallery">
            <ul class="list-none" slot="pre">
                <li>Images are all <span
                        class="font-bold">downscaled</span></li>
                <li>Click on images for <span
                        class="font-bold">fullscreen</span></li>
            </ul>
            <p class="py-6 text-lg" slot="post">
                You can consider attributing me, via my Twitter handle
                <a class="text-amber-500 italic"
                   href="https://twitter.com/dev_evening">@dev_evening</a>
            </p>
        </Hero>
    </div>
    <div class="max-w-screen-2xl mx-auto p-10">
        <Gallery galleryImages="{data.ims}"/>
    </div>
</section>
