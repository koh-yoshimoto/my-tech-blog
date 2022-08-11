import DateFormatter from './date-formatter'
import Link from 'next/link'
import Author from '../types/author'
import IconImage from './icon-image'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tags: string[]
}

const PostPreview = ({
  title,
  coverImage,
  date,
  slug,
  tags
}: Props) => {

  console.log(tags);

  return (
    // <div className='shadow-md rounded-2xl flex items-stretch bg-white hover:bg-gray-50'>
    <div className='flex px-4 shadow-md rounded-2xl  bg-white hover:bg-gray-50'>
      <div className="row-span-2 col-span-1 self-center w-1/4">
        <IconImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className='flex flex-col justify-between justify-items-center mx-2 my-4  w-3/4'>
        <div className=''>
          <h3 className="left-0 top-0 h-2/3 font-bold text-gray-800 text-lg leading-snug my-2 min-w-128">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
        </div>
        <div className='flex flex-col md:flex-row flex-wrap justify-between md:items-center'>
          <div className='flex justify-start'>
            {
              tags && tags.map((tag)=>(
                <div key={tag+slug} className="bg-amber-100 hover:bg-amber-200 mr-1 py-1 pl-2 pr-2 rounded-r-xl shadow-sm">
                  <Link href={`/tags/${tag.toLowerCase()}`}>
                    <a>{tag}</a>
                  </Link>
                </div>
              ))
            }
          </div>
          <div className="text-lg my-2">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
      {/*
        {tags.map((tag) => (
          <div>{tag}</div>
        ))
        }
      </div> */}
    </div>
  )
}

export default PostPreview
