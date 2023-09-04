<script lang="ts">
  import DateSvg from "@assets/icon/date.svg?url";
  const article = { time: 31223123, title: "31231" };
</script>

<div class="w-full">
  <div class="content">
    <div class="item">
      <img src={DateSvg} width={16} alt="date" />
      <span class="time">
        {article?.time}
      </span>
    </div>
    <a class="link">{article?.title}</a>
  </div>
</div>

<style lang="scss">
  .time {
    @apply text-slate-500 text-xs whitespace-nowrap;
  }
  .content {
    @apply flex pt-3 pl-8 box-border;
  }
  .item {
    @apply w-24 sm:w-24 md:w-24 lg:w-24 h-6 flex justify-between items-center;
  }
  .link {
    @apply w-11/12 flex-initial text-sm border-b border-transparent text-slate-400 cursor-pointer sm:px-6 md:px-6 lg:px-4 box-border leading-6;
  }
</style>
