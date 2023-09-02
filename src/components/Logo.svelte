<script lang="ts">
  import cat from "@assets/icon/cat.svg?url";
</script>

<a href="/" class="logo">
  <img src={cat} alt="logo" />
  <p class="title">Ananiah</p>
</a>

<style>
  .logo {
    @apply w-32 flex h-10 items-center justify-around cursor-pointer;
  }

  .title {
    @apply text-black font-medium italic text-base;
  }
</style>
