import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div>
        <div className='w-[1440px] bg-black text-gray-500 '>Product detail</div>

      <div>
        <Image src={'/picture12.png'} alt="" width={1440} height={96}/>
      </div>

      <div className='relative top-[110px] left-[99px]'>
        <Image src={'/Rectangle.png'} alt="" width={653} height={653}/>
      </div>

      <div className='relative top-[-533px] left-[888px]'>
        <Image src={'/Nike Air Force 1 PLT.AF.ORM (1).png'} alt="" width={367} height={96}/>
      </div>

      <div className='relative top-[-488px] left-[888px]'>
        <Image src={'/Auto Layout Vertical.png'} alt="" width={374.92} height={342}/>
      </div>

      <div className='relative top-[-488px] left-[888px]'>
        <Link href="/Card">
            <Image src={'/Auto Layout Horizontal (1).png'} alt="" width={174.42} height={44}/>
        </Link>
      </div>

      <div>
        <Image src={'/picture13.png'} alt="" width={1440} height={331}/>
      </div>
    </div>
  )
}

export default page
