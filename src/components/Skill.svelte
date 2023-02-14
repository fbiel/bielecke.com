<script lang="ts">
  import type { SkillListResponseDataItem } from "../data/cms";
  import { parseLevel } from "../data/cms";
  import Rating from "./Rating.svelte";

  export let skill: SkillListResponseDataItem;
</script>

<li class="p-5 flex flex-col gap-5">
  <div class="font-bold text-2xl">
    {skill.attributes.title}
  </div>
  <div class="flex flex-col gap-2">
    {#each skill.attributes.technologies.data as tech}
      <div class="flex flex-row justify-between">
        <div class="text-lg">{tech.attributes.name}</div>
        <Rating rating={parseLevel(tech.attributes.level) + 1} />
        <!-- icon={tech.attributes.highlight ? "hearts" : "star"} -->
      </div>
      <!-- <div class="flex flex-wrap justify-start gap-1 max-w-full">
        {#each tech.attributes.keywords.split(",") as tag}
          <div
            class="inline hidden lg:inline-flex rounded-full border-0 rounded-sm font-bold
           bg-slate-600 py-1 px-1 text-xs uppercase whitespace-nowrap"
          >
            {tag}
          </div>
        {/each}
      </div> -->
    {/each}
  </div>
</li>
