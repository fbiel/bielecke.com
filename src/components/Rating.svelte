<script lang="ts">
  export let rating: number = 0;
  type sizeType = "xs" | "sm" | "md" | "lg" | "xl";
  export let size: sizeType = "md";
  export let icon: "hearts" | "star" = "star";

  const calculateSize = (s: sizeType) => {
    switch (s) {
      case "xs":
        return 12;
      case "sm":
        return 16;
      case "md":
        return 20;
      case "lg":
        return 28;
      case "xl":
        return 36;
    }
  };
  const calculatedSize = calculateSize(size);

  if (rating > 5 || rating < 0)
    throw new Error("please provide a number between 0 and 5");
</script>

<div class="flex flex-row gap-1 justify-center items-start">
  {#each [...Array(rating).keys()] as _}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-star stroke-orange-500 fill-orange-500"
      width={calculatedSize}
      height={calculatedSize}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {#if icon === "star"}
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
        />
      {:else if icon === "hearts"}
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
        />
      {/if}
    </svg>
  {/each}
  {#each [...Array(5 - rating).keys()] as _}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-star stroke-orange-300 fill-orange-300 opacity-50"
      width={calculatedSize}
      height={calculatedSize}
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#000000"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      {#if icon === "star"}
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"
        />
      {:else if icon === "hearts"}
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
        />
      {/if}
    </svg>
  {/each}
</div>
