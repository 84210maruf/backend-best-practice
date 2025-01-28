import React from 'react'
import Link from 'next/link'

export const metadata = {
    title: "About Layouts",
    description: "Generated by create next app",
};

function AboutLayout({ children }) {
    return (
        <div className='p-2'>
            <nav>
                <p className="text-center text-orange-600">
                    Blog posts
                </p>
            </nav>

            {children}
        </div>
    )
}

export default AboutLayout
