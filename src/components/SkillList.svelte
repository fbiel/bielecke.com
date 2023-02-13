<script lang="ts">
  import {
    getSkills,
    type SkillListResponse,
    type SkillListResponseDataItem,
  } from "../data/cms";
  import Skill from "./Skill.svelte";

  let skills: SkillListResponseDataItem[] = [];
  getSkills().then((res) => {
    console.log(res);
    skills = res.data;
  });
</script>

<div class="container mx-auto max-w-5xl">
  <ul
    class="list-none border rounded-xl dark:divide-slate-700 divide-y divide-slate-300 border-opacity-25 bg-slate-200 dark:bg-slate-800 shadow-xl border-slate-600"
  >
    {#each skills as skill}
      <Skill {skill} />
    {/each}
  </ul>
</div>
