<script lang="ts">
    export let hover: string;

</script>
<span class="tooltip underline font-bold"
      data-tip={hover}><slot/></span>
