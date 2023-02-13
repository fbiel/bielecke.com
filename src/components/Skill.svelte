<script lang="ts">
  import type { SkillListResponseDataItem } from "../data/cms";
  import { parseLevel } from "../data/cms";
  import Rating from "./Rating.svelte";

  export let skill: SkillListResponseDataItem;
</script>

<li class="p-5 flex flex-col gap-1">
  <div class="font-semibold text-lg">
    {skill.attributes.title}
  </div>
  {#each skill.attributes.technologies.data as tech}
    <div class="flex flex-row justify-between">
      <div>{tech.attributes.name}</div>
      <Rating rating={parseLevel(tech.attributes.level) + 1} />
    </div>
  {/each}
</li>
