import React from 'react'

const VideoTitle = ({title, desc}) => {
  return (
    <div className='pt-36 px-8'>
      <h1 className='text-3xl font-bold text-red-600 p-2'>{title}</h1>
      <p className='w-6/12 p-2'>{desc}</p>
      <div className='w-5/12 flex p-2'>
        <button className='bg-gray-500 text-white px-8 py-4 w-30 text-xl mr-4 flex justify-center items-center rounded-lg opacity-60 hover:bg-gray-700'>‣ Play</button>
        <button className='bg-gray-500 text-white px-8 py-4 w-30 text-xl mr-4 flex justify-center items-center rounded-lg opacity-60 hover:bg-gray-700'>⁂ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle