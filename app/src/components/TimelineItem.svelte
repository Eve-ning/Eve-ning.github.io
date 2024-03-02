<script lang="ts">

    export let title = '';
    export let summary: string;
    export let dateFrom: string;
    export let dateTo: string;
    export let tags: { label: string, value: string }[] = [];

    function formatDateRange(dateFrom: string, dateTo: string) {
        let dateFromYear = dateFrom.substring(0, 4);
        let dateToYear = dateTo.substring(0, 4);
        if (dateFromYear === dateToYear) {
            return dateFromYear;
        }
        return `${dateFromYear} ~ ${dateToYear}`;
    }

</script>

<li>
    <hr class="bg-primary"/>
    <div class="timeline-start md:text-end px-4">
        <div>
            <div class="text-lg">{title}</div>
            <div class="badge badge-info font-extrabold italic">{formatDateRange(dateFrom, dateTo)}</div>
        </div>

    </div>

    <div class="timeline-middle">
        <svg class="w-3 h-3"
             fill="currentColor"
             viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 18 a 8 8 0 1 0 0 -16 a 8 8 0 0 0 0 16 z z"
            />
        </svg>
    </div>
    <article class="
		timeline-end collapse collapse-plus prose
		hover:bg-base-100 hover:shadow transition duration-300 ease-in-out
		" tabindex="-1">

        <input class="peer" type="checkbox"/>
        <div class="collapse-title peer-checked:text-primary">
            {summary}
            <div>
                {#each tags as tag}
                    <span class="badge badge-neutral mx-0.5 italic">{tag.label}</span>
                {/each}
            </div>
        </div>
        <div class="collapse-content">
            <slot/>
        </div>
    </article>
    <hr class="bg-primary"/>
</li>