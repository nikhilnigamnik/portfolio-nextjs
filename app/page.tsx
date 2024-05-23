import Experience from '@/components/layout/experience'
import Hero from '@/components/layout/hero'
import Skills from '@/components/layout/skills'
import Projects from '@/components/layout/project'

import React from 'react'
import Blog from '@/components/layout/blog'

const page = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Blog />


    </>
  )
}

export default page