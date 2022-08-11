import cn from 'classnames'
import Link from 'next/link'

type Props = {
  title: string
  src: string
  slug?: string
}

const IconImage = ({ title, src, slug }: Props) => {
  const image = (
  <div
    className={cn('p-4 ', {
      'transition-shadow duration-200': slug,
    })}
  >
    <img
      src={src}
      alt={`Icon Image for ${title}`}
      className='h-20 b-20'
    />
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

export default IconImage
