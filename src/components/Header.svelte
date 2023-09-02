<script lang="ts">
  import Logo from "./Logo.svelte";
  import night from "@assets/icon/night.svg?url";
</script>

<div class="w-full border-b-2 border-dotted">
  <div class="container mx-auto h-10 flex justify-between items-center">
    <Logo />
    <div class="w-5 h-5 flex cursor-pointer">
      <img src={night} alt="night" />
    </div>
  </div>
</div>
