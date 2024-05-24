import React from 'react'
import Title from '../ui/title'
import BlogPosts from '../blog-card'

const Blog = () => {
  return (
    <section id='blog' className='mt-14 flex flex-col gap-4'>
      <Title title='Blogs' />
      <BlogPosts />
    </section>
  )
}

export default Blog