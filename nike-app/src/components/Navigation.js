import React from 'react';


function Navigation() {
  return (
    <div>
        <nav className=''>
            <div class="w-full flex mx-auto relative">
                <a href="https://flowbite.com/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png?20220908234918" class="h-12 mt-8 absolute left-20" alt="Nike Logo" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>

                <div class="hidden w-fit md:block mx-auto flex relative pl-6" id="navbar-default">

                <ul class="flex md:p-0 md:flex-row md:space-x-16 md:mt-8 md:border-0 font-semibold text-3xl tracking-wide">
                    <li>
                        <a href="#" class="block py-2 pl-4 pr-4 md:p-0 md:text-zinc-800 w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center relative" aria-current="page">HOME</a>
                    </li>

                    <li> 
                        <div className='block h-5 mt-3 border-solid border border-zinc-800'></div> 
                    </li>

                    <li>
                        <a href="#" class="block py-2 pl-4 pr-4 md:p-0 md:text-zinc-800 w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center relative">PRODUCTS</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pl-4 pr-4 md:p-0 md:text-white w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center relative">ABOUT US</a>
                    </li>

                    <li>
                        <a href="#" class="block py-2 pl-4 pr-4 md:p-0 md:text-white w-fit after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center relative">CONTACT US</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navigation