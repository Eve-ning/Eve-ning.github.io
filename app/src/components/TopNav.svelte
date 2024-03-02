<script>
  import {base} from '$app/paths'
</script>
<nav class="navbar bg-base-100 border-primary border-b">
    <div class=" mx-auto">
        <div class="flex-none">
            <a href="{base}/">
                <img
                        alt="Logo"
                        class="rounded-full border
                           border-accent
                           p-1 shadow-md"
                        src="{base}/signature.png"
                        width="42"
                />
            </a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal">
                <li><a href="{base}/">home</a></li>
                <li><a href="{base}/about">about</a></li>
                <li><a href="{base}/gallery">gallery</a></li>
            </ul>
        </div>
    </div>
</nav>