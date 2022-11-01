import { For } from "solid-js";
import type { TagCloudComponent } from "../type/data.type";

export const TagCloud: TagCloudComponent = ({ dataSource }) => {
  return (
    <div class="w-full">
      <div class="grid grid-cols-1">
        <div>
          <h1 class="text-sm mb-0.5 py-1 border-b italic ">分类</h1>
          <ul>
            <For each={dataSource}>
              {(item) => (
                <li class="text-xs pt-2 cursor-pointer">
                  <a href={`/${item.type}`}>{item.type}({item.value})</a>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </div>
  );
};
