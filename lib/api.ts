import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  type Items = {
    title: string,
    slug: string,
    content: string,
    excerpt: string,
    coverImage: string,
    date: string,
    author: {
      name: string,
      picture: string
    }
    ogImage: {
      url: string
    },
    tags: string[]
  }

  const items: Items = {
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    coverImage: '',
    date: '',
    author: {
      name:'',
      picture: '',
    },
    ogImage: {
      url: '',
    },
    tags: []
  }

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'title'||
        field === 'excerpt' ||
        field === 'coverImage' ||
        field === 'date' ||
        field === 'author' ||
        field === 'ogImage' ||
        field === 'tags'
        ) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  return slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

export function getAllTags() {
  const allPosts = getAllPosts(['tags', 'author', 'ogImage'])
  console.log(allPosts[0]);
  return allPosts.map(post => post.tags)
    .flat()
    .filter((e, i, a) => a.indexOf(e) === i)
}