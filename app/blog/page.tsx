import React from "react";
import BlogPosts from "../../components/blog-card";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blogs - Nikhil Nigam - Developer, Designer',
  description: "Read my blogs on web development, design, and other topics.",
}


const page = () => {
  return (
    <section>
      <BlogPosts />
    </section>
  );
};

export default page;
