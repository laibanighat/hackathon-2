import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <div className='bg-black text-gray-400'>Checkout</div>
      <div>
        <Image src={'/picture18.png'} alt="" width={1440} height={72.8}/>
      </div>

      <div className='relative left-[300px]'>
        <Image src={'/Auto Layout Vertical (1).png'} alt="" width={440} height={2206}/>
      </div>

      <div className='relative top-[-2199px] left-[822px]'>
        <Image src={'/picture19.png'} alt="" width={320} height={721}/>
      </div>

      <div className='relative top-[-555px]'>
        <Image src={'/picture20.png'} alt="" width={1440} height={51}/>
      </div>
    </div>
  )
}

export default page
