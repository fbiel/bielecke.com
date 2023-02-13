<script lang="ts">
  export let label: string;
</script>

<h2
  id={label.toLowerCase()}
  class="container mx-auto px-2 max-w-5xl flex flex-row gap-3 italic items-baseline  self-stretch 
      after:bg-gradient-to-r after:from-red-300 after:to-orange-600
       after:w-full after:h-px after:content-[''] after:opacity-50"
>
  {label}
</h2>
