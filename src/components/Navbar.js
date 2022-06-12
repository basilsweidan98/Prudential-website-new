import React from 'react';
import logo from '../images/logo.png'
function Navbar() {
    return (
        <div className="flex ">
            <a href='#' className='grow lg:ml-8 md:ml-8 ml-5 pt-4 '>
                <img src={logo} alt="prudential logo" className=' w-28 lg:w-40 md:w-32' />

            </a>
            <nav class=" px-2 sm:px-4 py-2.5 ">
                <div class="container flex flex-wrap justify-between items-center mx-auto">

                    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-gray-500 " aria-controls="mobile-menu" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>

                    <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul class="flex flex-col mt-4 md:flex-row  md:mt-0 md:text-xs md:font-medium">
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white border-0 hover:bg-yellow-400  mt-3  font-semibold   rounded md:bg-transparent  p-4  hover:text-black" aria-current="page">Research</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white border-0 hover:bg-yellow-400  mt-3  font-semibold   rounded md:bg-transparent  p-4 hover:text-black">Use Cases</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white border-0 hover:bg-yellow-400  mt-3  font-semibold   rounded md:bg-transparent  p-4 hover:text-black">About</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white border-0 hover:bg-yellow-400  mt-3  font-semibold   rounded md:bg-transparent  p-4 hover:text-black">News</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-white border-0 hover:bg-yellow-400  mt-3  font-semibold   rounded md:bg-transparent  p-4  hover:text-black">Contact</a>

                            </li>
                            <li>
                                <a href="#" class="block py-2 pr-4 pl-3 text-black border-0 md:bg-yellow-400  mt-3  font-semibold   rounded md:bg-transparent  p-4 ">Request demo</a>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>




        </div>





    )
}

export default Navbar



