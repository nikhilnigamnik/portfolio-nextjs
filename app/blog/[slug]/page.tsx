import { getBlogPosts } from "@/components/util";
import { CustomMDX } from "@/components/mdx";
import React from "react";

const page = ({ params }: { params: any }) => {
    let post = getBlogPosts().find((post) => post.slug === params.slug);

    if (!post) {
        return;
    }

    return (
        <article className="prose">
            <CustomMDX source={post.content} />
        </article>
    );
};

export default page;
