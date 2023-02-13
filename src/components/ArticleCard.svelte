<script lang="ts">
  import type { ListArticleResponseItem } from "../data/cms";
  export let article: ListArticleResponseItem;
</script>

<div
  class="card max-w-sm shadow-xl bg-slate-200 dark:bg-slate-800 cursor-pointer transition-colors"
>
  <figure>
    <img
      class="max-h-64 w-full object-cover"
      src={import.meta.env.VITE_CMS + article.cover.data.attributes.url}
      alt={article.cover.data.attributes.alternativeText}
    />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{article.title}</h2>
    <p class="prose dark:text-slate-100 line-clamp-3">{article.description}</p>
    <div class="card-actions justify-end text-sm">
      {new Date(article.publishedAt).toLocaleDateString("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </div>
  </div>
</div>
