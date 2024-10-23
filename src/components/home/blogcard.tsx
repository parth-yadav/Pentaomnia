import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Skeleton } from "@nextui-org/skeleton";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";

import { type BlogPost } from "@/constants/blogs";

interface BaseBlogCardProps {
    className?: string;
}

interface LoadingProps extends BaseBlogCardProps {
    loading: true;
    blog?: BlogPost;
}

interface BlogProps extends BaseBlogCardProps {
    loading?: false;
    blog: BlogPost;
}

type BlogCardProps = LoadingProps | BlogProps;

export const BlogCard: React.FC<BlogCardProps> = ({ blog, loading, className }) => {
    return (
        <div className={`relative flex h-full flex-col ${className}`}>
            {loading ? (
                <Card
                    // isFooterBlurred
                    className={`col-span-12 h-[300px] w-full sm:col-span-5 ${className}`}
                >
                    <Skeleton className='h-full w-full' />
                </Card>
            ) : (
                <Card className='h-[250px] max-w-[440px] p-4'>
                    <CardHeader className='flex justify-between'>
                        <div className='flex gap-5'>
                            <Image
                                alt='Blog cover'
                                height={40}
                                src={`${blog.coverImage}?random=${blog.id}`}
                                width={40}
                                className='rounded-full'
                            />
                            <div className='flex flex-col items-start justify-center gap-1'>
                                <h4 className='text-small font-semibold leading-none text-default-600'>
                                    {blog.title}
                                </h4>
                                <h5 className='text-small tracking-tight text-default-400'>
                                    {dayjs(blog.createdAt).format("MMM DD, YYYY")}
                                </h5>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody className='px-3 py-0 text-small text-default-400'>
                        <p className='line-clamp-3'>{blog.content}</p>
                    </CardBody>
                    <CardFooter className='flex justify-between gap-3'>
                        <Link href={`/blog/${blog.id}`} className='text-small text-default-400'>
                            <Button color='secondary'>Read more</Button>
                        </Link>
                        <div className='flex gap-1'>
                            <p className='text-small text-default-400'>By {blog.author}</p>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};
