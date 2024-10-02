
import React, {useState} from 'react'

const Dropdown = () => {
    const[showdropdown, setShowdropdown] = useState(false)
  return (
    <>
    <button onClick={() => setShowdropdown(!showdropdown)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-[#2E4057] font-medium text-md py-2 inline-flex items-center border-b border-gray-100 md:hover:bg-transparent md:border-0" type="button">Help <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
</svg>
</button>

{/* Dropdown menu */}
<div id="dropdown" className={`z-10 ${showdropdown?"":"hidden"} absolute bg-white divide-y divide-gray-100 shadow w-32 dark:bg-gray-700`}>
    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Election</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Poll</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Count</a>
      </li>
      <li>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
      </>
  )
}

export default Dropdown
