import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <div
      className={cn('p-8 rounded-3xl shadow-md flex bg-white justify-center', {
        'hover:shadow-lg transition-shadow duration-200': slug,
      })}
    >
      <div>
        <img
          src={src}
          alt={`Cover Image for ${title}`}
          className='h-40 b-40'
        />
      </div>
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
