export interface BlogPost {
    id?: number;
    title: string;
    content: string;
    createdAt: string;
    coverImage: string;
    author: string;
}

export const CONST_BLOGS: BlogPost[] = [
    {
        title: "First Blog Post",
        content: "This is the content of the first blog post.",
        createdAt: "2024-10-15",
        coverImage: "https://picsum.photos/600",
        author: "Parth Yadav",
    },
    {
        title: "Second Blog Post",
        content: "This is the content of the second blog post.",
        createdAt: "2024-10-14",
        coverImage: "https://picsum.photos/600",
        author: "Parth Yadav",
    },
    {
        title: "Third Blog Post",
        content: "This is the content of the third blog post.",
        createdAt: "2024-10-13",
        coverImage: "https://picsum.photos/600",
        author: "Parth Yadav",
    },
];
