import React from 'react'
import logo from '../images/logo.png';
import twitter from '../images/twitter.png'
function Footer() {
    return (

        <footer className="bg-gray-800 ">
            <div className='py-2 px-10 bg-gray-800 md:flex md:items-center md:justify-between border-b '>
                <dev className="flex gap-2 ">
                    <a href="#" className='rounded hover:bg-yellow-400  hover:text-black text-xs text-white font-semibold p-2 '>Research</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>Use Cases</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>About</a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>News </a>
                    <a href="#" className='rounded hover:bg-yellow-400 hover:text-black text-xs text-white  font-semibold p-2 '>Contact</a>
                </dev>

            </div>
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <div className="grow text-left text-white text-2xl  rounded-md  font-medium">
                        <img src={logo} alt="prudential logo" className=' lg:w-40 md:w-40 w-32' />
                    </div>
                    <div className="flex space-x-2 mt-5  pl-5 ">
                        <a href="#!" className="border rounded-full p-1">
                            <svg className="w-6 h-6  text-white  fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
                                />
                            </svg>
                        </a>

                        <a href="#!" className="border rounded-full p-1">
                            <svg className="w-6 h-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                />
                            </svg>
                        </a>
                        <a href="#!" className="border rounded-full p-1">
                            <svg className="w-6 h-6 text-white  fill-current"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                ></path>
                            </svg>
                        </a>

                    </div>
                </div>
                <div>
                    <h2 className="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul className="text-gray-300">
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">News</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">Investor relations</a>
                        </li><a href="#" className="hover:underline">
                        </a><li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Help & Support</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul className="text-gray-300">
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">News</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">Investor relations</a>
                        </li><a href="#" className="hover:underline">
                        </a><li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Help & Support</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6  text-sm font-semibold text-white uppercase">Prudential</h2>
                    <ul className="text-gray-300">
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">About</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">News</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm">
                            <a href="#" className="hover:underline">Investor relations</a>
                        </li><a href="#" className="hover:underline">
                        </a><li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Corporate Responsibility</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Careers</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Help & Support</a>
                        </li>
                        <li className="lg:mb-4 md:mb-4 mb-2 text-sm lg:text-base md:text-sm"><a href="#" className="hover:underline">
                        </a><a href="#" className="hover:underline">Forms</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="py-2 px-10 bg-gray-800  border-t">
                <span className=" text-gray-300 lg:text-sm md:text-sm text-xs">© 2021 <a href="#">Prudential Financial, Inc. and its related entities.</a>
                </span>

            </div>
        </footer>

    )
}
export default Footer