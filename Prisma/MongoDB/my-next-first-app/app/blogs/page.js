import prisma from '@/lib/prisma';
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: "Bloks Layout",
    description: "Generated by create next app",
};

async function Blogs() {
    const posts = await prisma.post.findMany();
    // const blogs = [{
    //     id: 1,
    //     title: 'Blog 1',
    //     descriptins: "blog 1 description"
    // },
    // {
    //     id: 2,
    //     title: 'Blog 2',
    //     descriptins: "blog 2 description"
    // },
    // {
    //     id: 3,
    //     title: 'Blog 3',
    //     descriptins: "blog 3 description"
    // }]
    let n = 0
    return (
        <main>
            {posts.map((post) => (
                <ul className='border-2 p-2 my-2'>
                    <li>Post : {n=n+1}</li>
                    <li className='px-4' key={post.id} blog={post}><Link href={`/blogs/${post.id}`}>{post.title}</Link></li>
                </ul>
            ))}
        </main>
    )
}

export default Blogs
