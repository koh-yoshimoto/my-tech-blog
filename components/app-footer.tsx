// components/AppFooter.js
import React from 'react'
import Link from 'next/link'

type Props = {
  tags: string[]
}

const AppFooter = ({ tags }: Props) => {
  return (
    <section className='pb-8'>
      <h2 className="mb-8 text-3xl md:text-4xl font-bold tracking-tighter leading-tight">
      Tags
      </h2>
      <div className='flex flex-wrap'>
        {tags && tags.map((tag) => (
          <div key={tag} className="bg-white py-2 px-4 my-1 mr-2 rounded-3xl shadow-lg">
            <Link href={`/tags/${tag.toLowerCase()}`}>
              <a className="hover:underline">{tag}</a>
            </Link>
            {/* TODO: Tag Count */}
            {/* <var className="count">20</var> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default AppFooter