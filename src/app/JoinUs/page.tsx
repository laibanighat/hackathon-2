import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <div>
        <div className='bg-black text-gray-400'>JoinUs</div>
      <div>
      <nav className=" flex bg-[#F5F5F5] text-black font-semibold h-12 items-center sm:" >
         <div className="w-[24px] h-[24px] relative top-[6px] left-[48px] ">
            <Image src={'/Vector.png'} alt="" width={24} height={24}/>
         </div>
          <ul className=" w-[333px] h-[36px] relative left-[1129.19px] gap-[13.69px] flex ">
            <li>Find a Store |</li>
          <Link href="Help">
            <li>Help |</li>
          </Link>  
             <li>JoinUs |</li>
            <li>Sign in </li>
          </ul>
        </nav>
      </div>

      <div>
        <Image src={'/picture25.png'} alt="" width={1480} height={60}/>
      </div>

      <div className='relative left-[555px]'>
        <Image src={'/picture24.png'} alt="" width={380} height={833}/>
      </div>

      <div>
        <Image src={'/picture26.png'} alt="" width={1411} height={331}/>
      </div>
    </div>
  )
}

export default page
