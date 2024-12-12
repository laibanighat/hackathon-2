import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
        <div className='bg-black text-gray-500'>Login</div>

      <div>
        <Image src={'/picture21.png'} alt="" width={1440} height={96} />
      </div>

      <div className='relative left-[555px]'>
        <Image src={'/picture22.png'} alt="" width={380} height={489}/>
      </div>

      <div>
        <Image src={'/picture23.png'} alt="" width={1440} height={331}/>
      </div>

      <Link href="JoinUs">
      <div className='relative top-[-381px] left-[771px] text-gray-400'>Join Us</div>
      </Link>
    </div>
  )
}

export default page
