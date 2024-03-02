<script lang="ts">
    export let title: string;
</script>
<div
        class="hero py-10  bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-purple-950 to-slate-900">
    <div class="hero-content text-center">
        <div class="max-w-screen-lg">
            <div class="shadow-sm shadow-purple-400 rounded-2xl p-10">
                <h1 class="text-4xl font-bold">{title}</h1>
                <div class="py-2">
                    <slot name="pre"/>
                </div>

                <div class="divider"/>
                <slot name="post"/>
            </div>
        </div>
    </div>
</div>
