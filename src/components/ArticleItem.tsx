import DateSvg from "../assets/icon/date.svg";
import type { ArticleItemComponent } from "../type/data.type";

export const ArticleItem: ArticleItemComponent = ({ article }) => {
  return (
    <div class="w-full">
      <h1 class="text-base mt-2.5 italic">{article?.frontmatter.date}</h1>

      <div class="flex pt-3 pl-8 box-border">
        <div class="sm:w-24 md:w-24 lg:w-24 h-6 flex justify-between items-center ">
          <img src={DateSvg} width={16} alt="date" />
          <span class="text-slate-500 text-xs whitespace-nowrap">
            {article?.frontmatter.time}
          </span>
        </div>
        <p
          class="
          w-11/12
          flex-initial
          text-sm
          border-b 
          border-transparent 
          text-slate-400
          cursor-pointer
          sm: px-6 
          md:px-6
          lg:px-4
          box-border
          leading-6"
        >
          {article?.frontmatter.title}
        </p>
      </div>
    </div>
  );
};
