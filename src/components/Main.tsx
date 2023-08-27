import { createMemo, createSignal, For } from "solid-js";
import type {
  ArticleItemInterface,
  ArticleTypeInterface,
  MainComponent,
  MdSetting,
} from "../type/data.type";
import { ArticleItem } from "./ArticleItem";
import _ from "lodash";

export const Main: MainComponent = ({ data }) => {
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
    const valueByType = _.groupBy(data, "type");
    Object.keys(valueByType).forEach((key) => {
      resultType.push({
        type: key,
        value: valueByType[key].length,
      });
    });
    return _.orderBy(result, ["date"], ["desc"]);
  }, data);

  return (
    <main class="main">
      <For each={dataSource()}>{(item) => <ArticleItem article={item} />}</For>
    </main>
  );
};
