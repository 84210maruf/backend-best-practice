import NotFound from '@/app/not-found';
import prisma from '@/lib/prisma';
import React from 'react'

export default async function blogDetails({ params }) {
    const { id } = await params;
    const post = await prisma.post.findUnique({
        where: {
            id: id
        }
    })
    if (id === '4') {
        return NotFound(); // Redirects to the 404 page
    }

    return (

        <main className='flex flex-col justify-center items-center space-y-2 pt-10'>
            <div className='space-y-4'>
            <div>Post ID is : <span className="rounded-sm p-1 bg-yellow-500 w-10 text-center">
                {id}</span></div>
            <div>post title : {post.title}</div>
            <div>post content : {post.content}</div>
            </div>
        </main>

    )
}
