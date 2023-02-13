<script lang="ts">
  import GitHub from "../assets/GitHub.svelte";
  import LinkedIn from "../assets/LinkedIn.svelte";
</script>

<div
  class="sticky top-0 z-50 flex-row flex sm:flex flex-end px-5 py-2 shadow-md mb-2 drop-shadow-md 
     justify-end sm:justify-around w-100 backdrop-blur-md bg-neutral-200 bg-opacity-20 dark:bg-opacity-10"
>
  <div
    class="sm:flex flex-row w-100 justify-center gap-5
   text-lg hidden font-semibold "
  >
    <a href="#cv">CV</a>
    <a href="#articles">Articles</a>
    <a href="#skills">Skills</a>
  </div>
  <div class="flex gap-5">
    <a href="https://github.com/fbiel"> <GitHub /></a>
    <a href="https://www.linkedin.com/in/frank-bielecke-180847165">
      <LinkedIn /></a
    >
  </div>
</div>

<style>
  a {
    text-decoration: inherit;
    transition: color ease-in-out 150ms;
    letter-spacing: 0.06em;
    font-family: "Rubik", system-ui, Avenir, Helvetica, Arial, sans-serif;
  }
  @media (prefers-color-scheme: dark) {
    a:hover {
      color: #535bf2;
    }
  }
</style>
