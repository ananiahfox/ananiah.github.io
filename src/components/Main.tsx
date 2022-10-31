import type { MainComponent } from "../type/data.type";
import { ArticleItem } from "./ArticleItem"
import { TagCloud } from "./TagCloud"

export const Main: MainComponent = ({ data }) => {
  return (
    <main class="container mx-auto grid grid-cols-4 gap-4 mt-5 mb-32 ">
      <div class="col-span-3 px-2 box-border">
      {data.map(article => (<ArticleItem article={article} />))}
      </div>
      <div class="col-span-1 px-2 box-border">
        <TagCloud />
      </div>
    </main>
  )
}