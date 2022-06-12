import React from 'react'

function Lifeexpectancy() {
    return (
        <div className=' grid  grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mt-20 ml-5 mr-7'>
            <div>
                <h1 className='text-3xl pt-2 lg:pt-0 md:pt-0 md:text-5xl lg:text-6xl w-1/3 font-bold text-stone-900'>Life expectancy <br /><span className='text-slate-400 '>algorithm</span></h1>
            </div>

            <div className='text-xs lg:text-xl md:text-sm'>
                <p className='lg:w-3/2 font-sans  text-gray-600 mb-2 lg:mb-7'>PruScore Alpha is an algorithm that is utilised at present within Prudential to predict life expectancy for their Life products. The algorithm has further commercial benefits across other Prudential business lines, as well as opportunities to commercialize to the external market as a product.</p>
                <a href="#" className='bg-yellow-400 rounded font-semibold lg:font-bold lg:p-2 text-black text-xs font-sans p-1 hover:border'>Learn More</a>
            </div>
        </div>
    )
}

export default Lifeexpectancy