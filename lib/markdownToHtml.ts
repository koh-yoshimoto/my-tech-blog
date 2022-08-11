import { remark } from 'remark'
// import fs from "fs";
import { unified } from 'unified'
// import matter from 'gray-matter'
// import remarkParse from 'remark-parse'
import remarkSlug from 'remark-slug'
import remarkToc from 'remark-toc'
import remarkGfm from 'remark-gfm'
// import remarkHtml from 'remark-html'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiki from "@leafac/rehype-shiki"
import * as shiki from "shiki"

export default async function markdownToHtml(markdown: string) {
  // const fileContents = fs.readFileSync(markdown, "utf8")
  // const { data, content } = matter(markdown)
  const result = await remark()
    // .use(remarkParse)
    .use(remarkSlug)
    .use(remarkToc, { heading: '目次', maxDepth: 2 })
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeAutolinkHeadings, {
      behavior: 'prepend',          // `prepend`・`append`・`wrap`・`before`・`after` でリンクの挿入位置を指定できる
      properties: {},               // `a` 要素に付与する属性
    })
    .use(rehypeShiki, {
      highlighter: await shiki.getHighlighter({
        theme: 'github-dark',
      }),
    })
    .use(rehypeStringify)
    .process(markdown)

  return result.toString()
}
