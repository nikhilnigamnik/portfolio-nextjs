import { formatDate, getBlogPosts } from "@/components/util";
import Link from "next/link";

export default function BlogPosts() {
    let allBlogs = getBlogPosts();



    return (
        <article>
            {allBlogs
                .sort((a, b) => {
                    if (
                        new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
                    ) {
                        return -1;
                    }
                    return 1;
                })
                .map((post, i) => (
                    <div key={post.slug} className="flex items-center gap-3 lis">
                        <li className="list-inside list-disc">{i + 1}</li>
                        <Link
                            key={post.slug}
                            className="flex flex-col cursor-pointer hover:underline"
                            href={`/blog/${post.slug}`}
                        >
                            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                                {post.metadata.title}
                            </p>
                        </Link>
                    </div>
                ))}
        </article>
    );
}
