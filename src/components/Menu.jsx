import React from 'react'

const Menu = () => {
  return (
    <div id='Menu' className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4 '>
      <div className=' flex flex-col h-full justify-center px-2'>
        <h2 className='text-5xl md:text-6xl font-bold'>Menu</h2>
        <h3 className='text-2xl py-2'>Sushi - Sashimi - Rolls - Hand Rolls</h3>
        <p className='pb-2'>Salmon, , Salmon Skin, Yellowtail, Tuna, Shrimp, Eel, Octupus, options with Cream Cheese, Garlic, Japanese Mayo, and lots more.</p>
        <h3 className='text-2xl py-2'>Sides - Dishes</h3>
        <p className='pb-2'>Gyoza, Harumaki, Crispy Chicken, Shimeji, Sunomomo, Yakissoba, Fried Salmon, Misoshiro, more.</p>
        <h3 className='text-2xl py-2'>Deserts</h3>
        <p className='pb-2'>Try our selection of Mochi Ice Cream, Fried Ice Cream and Cheesecakes.</p>
      </div>
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh] lg:row-start-1'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="/static/images/sushi1.jpg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="/static/images/sushi2.jpg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="/static/images/sushi3.jpg" alt="/" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="/static/images/sushi8.jpg" alt="/" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="/static/images/sushi7.jpg" alt="/" />
      </div>
      
    </div>
  )
}

export default Menu

// text-center lg:col-start-2