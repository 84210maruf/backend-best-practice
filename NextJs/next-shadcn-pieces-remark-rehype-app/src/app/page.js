import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
    return (
        <main>
            {/* Top Section  */}
            <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
                <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
                    <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
                        A <span className="font-semibold">free repository</span> for community
                        <br className="hidden lg:block" /> components using
                        <span className="font-semibold underline decoration-primary">Tailwind CSS</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
                        Open source Tailwind UI components and templates to
                        <br className="hidden lg:block" /> bootstrap your new apps, projects or landing sites!
                    </p>
                    <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
                        <form action="https://www.creative-tim.com/twcomponents/search" className="flex flex-wrap justify-between md:flex-row">
                            <input
                                type="search"
                                name="query"
                                placeholder="Search Components"
                                required
                                className="flex-1 h-10 px-4 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none lg:h-12 dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center w-full p-2 m-1 text-white transition-colors duration-300 transform rounded-lg lg:w-12 lg:h-12 lg:p-0 bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
                    <Image
                        src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
                        alt="tailwind css components"
                        className="w-full h-full max-w-md mx-auto"
                        width={100}
                        height={100}
                    />
                </div>
            </section>
            {/* Pricing section */}
            <section className="p-6 bg-gray-100 dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">Pricing Plans</h2>
                <div className="flex flex-col sm:flex-row justify-around space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="pricing-tier bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 w-full sm:w-1/3 transform transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0">
                        <input type="radio" name="pricing" id="basic" className="hidden peer" />
                        <label for="basic" className="block cursor-pointer p-4 rounded-lg border-2 border-transparent peer-checked:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-600">
                            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">Basic</h3>
                            <p className="text-lg text-center text-gray-800 dark:text-gray-200">Price: <span className="font-bold">$10/month</span></p>
                            <ul className="mt-2 text-center text-gray-800 dark:text-gray-200">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                                <li>Feature 5</li>
                            </ul>
                        </label>
                        <Button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">Choose plan</Button>
                    </div>
                    <div className="pricing-tier bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 w-full sm:w-1/3 transform transition-transform duration-300 hover:scale-105 mb-4 sm:mb-0 border-[2px] border-purple-300 outline outline-[2px] outline-purple-500">
                        <input type="radio" name="pricing" id="standard" className="hidden peer" />
                        <label for="standard" className="block cursor-pointer p-4 rounded-lg border-2 border-transparent peer-checked:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-600">
                            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">Standard</h3>
                            <p className="text-lg text-center text-gray-800 dark:text-gray-200">Price: <span className="font-bold">$20/month</span></p>
                            <ul className="mt-2 text-center text-gray-800 dark:text-gray-200">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                                <li>Feature 5</li>
                            </ul>
                            <span className="absolute top-2 right-2 bg-yellow-300 text-black font-bold px-2 py-1 rounded dark:bg-yellow-500 dark:text-black">Best Seller</span>
                        </label>
                        <Button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">Choose plan</Button>

                    </div>
                    <div className="pricing-tier bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 w-full sm:w-1/3 transform transition-transform duration-300 hover:scale-105">
                        <input type="radio" name="pricing" id="premium" className="hidden peer" />
                        <label for="premium" className="block cursor-pointer p-4 rounded-lg border-2 border-transparent peer-checked:border-purple-500 hover:bg-purple-100 dark:hover:bg-purple-600">
                            <h3 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200">Premium</h3>
                            <p className="text-lg text-center text-gray-800 dark:text-gray-200">Price: <span className="font-bold">$30/month</span></p>
                            <ul className="mt-2 text-center text-gray-800 dark:text-gray-200">
                                <li>Feature 1</li>
                                <li>Feature 2</li>
                                <li>Feature 3</li>
                                <li>Feature 4</li>
                                <li>Feature 5</li>
                            </ul>
                        </label>

                        <Button className="mt-4 w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">Choose plan</Button>
                    </div>
                </div>
            </section>

            {/* Client say  */}

            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="container mx-auto p-6">
                    <h2 className="text-2xl font-extrabold text-gray-800 dark:text-white text-center mb-4">What Our Client Say</h2>
                    <p className='text-center mb-6'>Hare from out satisfied customers</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 text-center">
                        
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-white mb-4">A brief description of the blog post goes here.</p>
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Jone Doe</h3>
                                <p>CEO, Company A</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-white mb-4">A brief description of the blog post goes here.</p>
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Jone Doe</h3>
                                <p>CEO, Company A</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-white mb-4">A brief description of the blog post goes here.</p>
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Jone Doe</h3>
                                <p>CEO, Company A</p>
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-white mb-4">A brief description of the blog post goes here.</p>
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Jone Doe</h3>
                                <p>CEO, Company A</p>
                            </div>
                        </div>
            
                      
                    </div>
                </div>
            </section>
            {/* blog section  */}

            <section className="bg-white dark:bg-gray-900 py-12">
                <div className="container mx-auto p-6">
                    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-8">Top Blogs</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <img src="https://images.unsplash.com/photo-1528696334500-245a1b1b67f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 1" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Blog Title 1</h3>
                                <p className="text-gray-600 dark:text-white mb-4">A brief description of the blog post goes here.</p>
                                <a href="#" className="text-blue-600 hover:underline font-semibold">Read More</a>
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <img src="https://images.unsplash.com/photo-1528696334500-245a1b1b67f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 2" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Blog Title 2</h3>
                                <p className="text-gray-600 dark:text-white mb-4">A brief description of the blog post goes here.</p>
                                <a href="#" className="text-blue-600 hover:underline font-semibold">Read More</a>
                            </div>
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-600 rounded-sm shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <img src="https://images.unsplash.com/photo-1528696334500-245a1b1b67f4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog 3" className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Blog Title 3</h3>
                                <p className="text-gray-600 dark:text-white mb-4">A brief description of the blog post goes here.</p>
                                <a href="#" className="text-blue-600 hover:underline font-semibold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    )
}
