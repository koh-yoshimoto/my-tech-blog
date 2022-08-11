import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <section className='flex'>
      <div className="mx-8 mb-8 md:mb-16 w-full">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div>
      <div>
        <h3 className="mb-4 text-4xl lg:text-5xl leading-tight">
          <Link as={`/posts/${slug}`} href="/posts/[slug]">
            <a className="font-bold hover:underline">{title}</a>
          </Link>
        </h3>
      </div>
      <div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
      <div className="mb-4 md:mb-0 text-lg">
        <DateFormatter dateString={date} />
      </div>
      </div>
    </section>
  )
}

export default HeroPost
