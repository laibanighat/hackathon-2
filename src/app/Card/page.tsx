import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='w-[1440px] bg-black text-gray-400'>Card</div>

      <div>
        <Image src={'/picture14.png'} alt="" width={1440} height={96}/>
      </div>

      <div className='relative top-[-555px] left-[199px]'>
        <Image src={'/picture15.png'} alt="" width={733.33} height={547.89}/>
      </div>

      <div className='relative top-[-1088px] left-[944px]'>
        <Image src={'/picture16.png'} alt="" width={350.67} height={295}/>
      </div>
        
        <div className='relative top-[-1144px] left-[944px]'>
          <Link href="/Checkout">
            <Image src={'/Auto Layout Horizontal (2).png'} alt="" width={334.67} height={60}/>
          </Link>        
        </div>

        <div className='relative top-[-699px]'>
            <Image src={'/picture17.png'} alt="" width={1440} height={331}/>
        </div>
    </div>
  )
}

export default page
