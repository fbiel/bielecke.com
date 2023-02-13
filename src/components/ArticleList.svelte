<script lang="ts">
  import { queryArticles, type ListArticleResponseItem } from "../data/cms";
  import ArticleCard from "./ArticleCard.svelte";

  let articles: { id: number; attributes: ListArticleResponseItem }[] = [];

  queryArticles("blogs").then((res) => {
    articles = res.data;
  });
</script>

<div
  class="container mx-auto px-2 max-w-5xl grid gap-3 md:grid-cols-2 xl:grid-cols-3 items-stretch"
>
  {#each articles as article}
    <ArticleCard article={article.attributes} />
    <ArticleCard article={article.attributes} />
  {/each}
</div>
