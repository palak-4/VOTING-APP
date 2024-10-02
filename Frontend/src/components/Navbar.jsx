import React from 'react'
import Dropdown from './Dropdown'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
     <div className="">

<nav className="bg-[#2E4057]  text-white">
    <div className="flex flex-wrap items-center justify-between py-3 px-4">
        <Link to="#" className="flex">
            <img className="h-10 mr-3 invert" width="51" height="70"
                src="https://icon-library.com/images/vote-icon/vote-icon-19.jpg" alt="" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">Cube</span>
        </Link>
        <button data-collapse-toggle="mobile-menu" type="button"
            className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-2" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"></path>
            </svg>
            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
        <div className="hidden md:block w-full md:w-auto">
            <ul className="flex-col md:flex-row flex md:space-x-6 mt-4 md:mt-0">
                <li>
                    <Link to="#"
                        className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block py-2 ">About</Link>
                </li>
                <li>

                   <Dropdown/>

                </li>
                <li>
                    <Link to="#"
                        className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block py-2">Contact</Link>
                </li>
                <li>
                    <Link to="http://127.0.0.1:8000/account/"
                        className=" hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block py-2 ">Login</Link>
                </li>
            </ul>
        </div>
    </div>
</nav>

</div>


    </>
  )
}

export default Navbar
