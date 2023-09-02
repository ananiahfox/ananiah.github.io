import type { MarkdownInstance } from "astro";
import type { Component, ParentProps } from "solid-js";

export interface Frontmatter {
  title: string;
  date: string;
  time: string;
  description?: string;
}
export interface MdSetting {
  title: string;
  date: string;
  time: string;
  type: string;
  layout: string;
}

export interface ArticleItemInterface {
  date: string;
  value: MdSetting[];
}
export interface ArticleTypeInterface {
  type?: string;
  value?: number;
}

export type RecordMdSetting = Record<string, MdSetting[]>;
export type MainComponent<P = { data: MdSetting[] }> = Component<
  ParentProps<P>
>;
export type ArticleItemComponent<P = { article: MdSetting }> = Component<
  ParentProps<P>
>;
export type TagCloudComponent<P = { dataSource: ArticleTypeInterface[] }> =
  Component<ParentProps<P>>;
