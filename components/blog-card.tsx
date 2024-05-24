import { formatDate, getBlogPosts } from '@/components/util'
import Link from 'next/link'

export default function BlogPosts() {
    let allBlogs = getBlogPosts()

    return (
        <article>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                    ) {
                        return -1
                    }
                    return 1
                })
                .map((post) => (
                    <Link
                        key={post.slug}
                        className="flex flex-col space-y-1 mb-4 cursor-pointer hover:underline"
                        href={`/blog/${post.slug}`}
                    >


                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                            {post.metadata.title}
                        </p>

                    </Link>
                ))}
        </article>
    )
}