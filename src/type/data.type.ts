import type { MarkdownInstance } from "astro";
import type { Component, ParentProps } from "solid-js";

export interface Frontmatter {
  title: string;
  date: string;
  time: string;
  description?: string;
}
export type MainComponent<P = { data: MarkdownInstance<Frontmatter>[] }> = Component<ParentProps<P>>;
export type ArticleItemComponent<P = { article: MarkdownInstance<Frontmatter> }> = Component<ParentProps<P>>;