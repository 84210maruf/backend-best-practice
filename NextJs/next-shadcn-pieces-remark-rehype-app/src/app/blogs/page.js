import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
    const blogs = [
        {
            title: ' CSS Tutorial',
            description: 'This is JavaScript tutorial and this is for learning JavaScript',
            slug: 'css-tutorial',
            date: '11/02/2025',
            author: 'Harry',
            image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: ' CSS Tutorial',
            description: 'This is JavaScript tutorial and this is for learning JavaScript',
            slug: 'c-programming-tutorial',
            date: '11/02/2025',
            author: 'Harry',
            image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: ' CSS Tutorial',
            description: 'This is JavaScript tutorial and this is for learning JavaScript',
            slug: 'chatgpt-vs-gemini',
            date: '11/02/2025',
            author: 'Harry',
            image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            title: ' CSS Tutorial',
            description: 'This is JavaScript tutorial and this is for learning JavaScript',
            slug: 'cpp-programming-tutorial',
            date: '11/02/2025',
            author: 'Harry',
            image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
    ]
    return (
        <main>
            {/* blog section  */}

            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="container mx-auto p-6">
                    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-8">Top Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                        {blogs.map((blog) => (
                            <div key={blog.title} className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                                <img src={blog.image} alt="Blog 1" className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <p>{blog.date}</p>
                                    <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{blog.title}</h3>
                                    <p className="text-gray-600 dark:text-white mb-4 border-l-4 border-green-500 italic pl-2">{blog.description}</p>
                                    <Link href={`/blogs/blogpost/${blog.slug}`}><Button>Read more</Button></Link>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    )
}
