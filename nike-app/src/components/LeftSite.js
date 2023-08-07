import React from 'react'

function LeftSite() {
  return (
    <div className='w-1/2 z-0'>
        <div className='flex justify-normal n relative top-32 left-28'>
        <div className='w-fit h-1/2 inline-block relative top-44 mr-24'>
            <a href='#'>
                <div className='block w-4 h-4 border border-zinc-800 rounded-full bg-zinc-800 mt-6'></div>
            </a>
            <a href='#'>
                <div className='block w-4 h-4 border border-zinc-800 rounded-full mt-6'></div>
            </a>
            <a href='#'>
                <div className='block w-4 h-4 border border-zinc-800 rounded-full mt-6'></div>
            </a>
            <a href='#'>
                <div className='block w-4 h-4 border border-zinc-800 rounded-full mt-6'></div>
            </a>
            <a href='#'>
                <div className='block w-4 h-4 border border-zinc-800 rounded-full mt-6'></div>
            </a>
        </div>


        <div className='w-auto'>
            <h1 className="text-9xl text-white text-stroke-2 font-bold text-left">
            JUST DO<br></br> IT. 
            </h1>

            <p className='text-sm w-1/2 text-left mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dolorum illum sint culpa, nulla similique sit amet consectetur.</p>

            <button className='p-2 px-4 bg-zinc-800 text-white text-center font-extralight rounded-3xl mt-4 hover:bg-neutral-950 ease duration-300'>READ MORE →</button>
        </div> 
    </div>
    </div>
  )
}

export default LeftSite