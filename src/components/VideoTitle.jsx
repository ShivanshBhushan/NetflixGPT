import React from 'react'

const VideoTitle = ({title, desc}) => {
  return (
    <div className='w-screen aspect-video pt-36 px-8 absolute bg-gradient-to-r from-gray z-10 right-0'>
      <h1 className='text-4xl font-bold text-red-600 p-6'>{title}</h1>
      <p className='w-6/12 p-6 text-white'>{desc}</p>
      <div className='w-5/12 flex p-6'>
        <button className='bg-white text-black px-8 py-4 w-36 text-xl mr-4 flex justify-center items-center rounded-lg opacity-60 hover:bg-gray-700'>‣ Play</button>
        <button className='bg-gray-500 text-white px-8 py-4 w-30 text-xl mr-4 flex justify-center items-center rounded-lg opacity-60 hover:bg-gray-700'>⁂ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle