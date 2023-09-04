<script lang="ts">
  import type { MdSetting } from "@/type/data.type";
  import ArticleItem from "./ArticleItem.svelte";

  export let values: MdSetting[] = [];
</script>

<main class="main">
  {#each values as value}
    <ArticleItem />
  {/each}
</main>
