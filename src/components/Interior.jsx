import React from 'react'

const Interior = () => {
  return (
    <div id='Location' className='max-w-[1400px] h-[500p] bg-red-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span2'>
        <h3 className='text-2xl font-bold'>Location</h3>
        <p className='pt-4'>We are located at 110 NE 1st Ave, Miami, FL 33132, EUA.</p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img className='object-cover w-full h-full' src="/public/restaurant3.jpg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full' src="/public/restaurant1.jpg" alt="/" />
        <img className='object-cover w-full h-full' src="/public/restaurant2.jpg" alt="/" />
      </div>
    </div>
  )
}

export default Interior