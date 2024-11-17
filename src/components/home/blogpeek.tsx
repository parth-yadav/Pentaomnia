"use client";

import { useEffect, useState } from "react";

import type { BlogPost } from "@/constants/blogs";

import dayjs from "dayjs";

import { BlogCard } from "@/components/home/blogcard";
import { CONST_BLOGS } from "@/constants/blogs";
import { isDevelopmentMode } from "@/constants/dev";

export const HomeBlogPeek: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogPost[] | null>(
        CONST_BLOGS.sort((a, b) => dayjs(a.createdAt).diff(dayjs(b.createdAt))),
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchBlogs = async () => {
        setIsLoading(true);
        const url = "https://670ff623a85f4164ef2ca14c.mockapi.io/blogs/posts";
        const response = await fetch(url);
        const data = (await response.json()) as BlogPost[];
        data.length && setBlogs(data.splice(0, 6));
        setIsLoading(false);
    };

    useEffect(() => {
        setTimeout(
            () => {
                fetchBlogs();
                setIsLoading(false);
            },
            isDevelopmentMode ? 0 : 2000,
        );
    }, []);

    return (
        <section id='blog' className='w-full py-8 md:py-16 lg:py-20'>
            <div className='container px-4 md:px-6'>
                {!blogs?.length ? (
                    <p className='text-center text-gray-500'>No blogs found.</p>
                ) : (
                    <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                        {/* {isLoading &&
                            [...Array(6)].map((_, index) => <BlogCard loading key={index} />)}
                        {blogs.map((blog) => (
                            <BlogCard key={blog.title} blog={blog} />
                        ))} */}
                            
                    </div>
                )}
            </div>
        </section>
    );
};
