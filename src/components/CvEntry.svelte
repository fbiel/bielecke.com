<script lang="ts">
  import Briefcase from "../assets/Briefcase.svelte";
  import Internship from "../assets/Internship.svelte";
  import School from "../assets/School.svelte";
  import Tank from "../assets/Tank.svelte";
  import type { SingleCvEntry } from "../data/cv";

  export let entry: SingleCvEntry;
</script>

<li class="flex flex-col my-8">
  <div class="">
    <div
      class="flex md:flex-row flex-col-reverse flex-grow md:justify-between gap-1"
    >
      <div class="flex justify-start gap-2 items-center">
        {#if entry.type === "job"}
          <Briefcase />
        {:else if entry.type === "military"}
          <Tank />
        {:else if entry.type === "internship"}
          <Internship />
        {:else if entry.type === "education"}
          <School />
        {/if}
        <h5>{entry.title}</h5>
        {#if entry.current}
          <div
            class="inline hidden lg:inline-flex rounded-full font-semibold 
            text-green-700 outline-green-700 dark:text-green-400 dark:outline-green-400 
            outline outline-1 py-1 px-2 text-xs"
          >
            Current
          </div>
        {/if}
      </div>
      <div class="font-light italic md:text-right">
        {#if !entry.endDate}
          since
        {/if}
        {entry.startDate.toLocaleDateString("en", {
          year: "numeric",
          month: "long",
        })}
        {#if entry.endDate}
          - {entry.endDate.toLocaleDateString("en", {
            year: "numeric",
            month: "long",
          })}
        {/if}
      </div>
    </div>
    <div class="flex flex-col md:flex-row justify-between my-2">
      {#if entry.link}
        <a class="text-slate-500 dark:text-zinc-400" href={entry.link}>
          {entry.company}
        </a>
      {:else}
        <div class="text-slate-500 dark:text-zinc-400">
          {entry.company}
        </div>
      {/if}
      <div class="font-light hidden md:inline-flex">{entry.location}</div>
    </div>
  </div>
  <ul class="flex flex-col gap-3 list-disc ml-5 text-sm dark:text-zinc-300">
    {#each entry.activities as activity}
      <li>{activity}</li>
    {/each}
  </ul>
</li>
