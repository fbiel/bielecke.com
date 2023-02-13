<script lang="ts">
  import { cv } from "../data/cv";
  import CvEntry from "./CvEntry.svelte";

  let showAll = false;
</script>

<div class="container mx-auto max-w-5xl">
  <div class="form-control">
    <label class="label cursor-pointer justify-end gap-3">
      <span class="text-sm">Show all</span>
      <input type="checkbox" class="toggle" bind:checked={showAll} />
    </label>
  </div>
  <ul class="list-none mx-3">
    {#each cv
      .filter((e) => e.significant || showAll)
      .sort((a, b) => b.startDate.getTime() - a.startDate.getTime()) as entry}
      <CvEntry {entry} />
    {/each}
  </ul>
</div>
