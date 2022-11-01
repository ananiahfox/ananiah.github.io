import { createMemo, createSignal, For } from "solid-js";
import type {
  ArticleItemInterface,
  ArticleTypeInterface,
  MainComponent,
  MdSetting,
} from "../type/data.type";
import { ArticleItem } from "./ArticleItem";
import { TagCloud } from "./TagCloud";
import _ from "lodash";

export const Main: MainComponent = ({ data }) => {

  const [type, setType] = createSignal<ArticleTypeInterface[]>([])

  const dataSource = createMemo(() => {
    const valueByDate = _.groupBy(data, "date");
    const result: ArticleItemInterface[] = [];
    Object.keys(valueByDate).forEach((key) => {
      const value = valueByDate[key] as unknown as MdSetting[];
      result.push({
        date: key,
        value,
      });
    });
    const resultType: ArticleTypeInterface[] = [];
    const valueByType = _.groupBy(data, "type")
    Object.keys(valueByType).forEach(key => {
      resultType.push({
        type: key,
        value: valueByType[key].length
      })
    })
    setType(resultType)
    return _.orderBy(result, ['date'], ['desc']);
  }, data);

  return (
    <main class="container mx-auto grid grid-cols-4 gap-4 mt-5 mb-32 ">
      <div class="col-span-3 px-2 box-border">
        <For each={dataSource()}>
          {(item) => <ArticleItem article={item} />}
        </For>
      </div>
      <div class="col-span-1 px-2 box-border">
        <TagCloud dataSource={type()} />
      </div>
    </main>
  );
};
