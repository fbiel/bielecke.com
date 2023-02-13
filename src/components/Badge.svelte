<script lang="ts">
  import type { TailwindColor } from "../lib/color";

  export let label: string;
  export let color: TailwindColor;
</script>

<div class="badge slate">
  {label}
</div>

<style>
  /* use tailwind colors */
  .badge {
    outline-width: 1px;
    padding-top: 0.25rem /* 4px */;
    padding-bottom: 0.25rem /* 4px */;
    padding-left: 0.5rem /* 8px */;
    padding-right: 0.5rem /* 8px */;
    font-size: 0.75rem /* 12px */;
    line-height: 1rem /* 16px */;
    --tw-border-opacity: 1;
    border-color: hsl(var(--b2, var(--b1)) / var(--tw-border-opacity));
    --tw-text-opacity: 1;
    color: hsl(var(--nc) / var(--tw-text-opacity));
    --tw-border-opacity: 1;
    border-color: hsl(var(--nf, var(--n)) / var(--tw-border-opacity));
    background-color: transparent;
    outline-style: solid;
    display: inline;
    border-radius: 9999px;
  }
  .slate {
    --tw-text-opacity: 1;
    color: rgb(100 116 139 / var(--tw-text-opacity));
    outline-color: #64748b;
  }
</style>
