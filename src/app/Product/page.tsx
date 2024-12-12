import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  return (
    <div className='w-[1440px]'>
          <div className='bg-black text-gray-400'>All product-page</div>
      <div>
        
          <Link href="/Detail">
        
                  <Image src={'/picture6.png'} alt="" width={1440} height={96}/>
          </Link>
      </div>

      <div>
        <Image src={'/picture7.png'} alt="" width={1440} height={51}/>
      </div>

      <div className='relative top-4'>
        <Image src={'/picture9.png'} alt="" width={260} height={8492}/>
      </div>

      <div className='relative left-[333px] top-[-833px]'>
        <Image src={'/picture8.png'} alt="" width={1092} height={17706}/>
      </div>

      <div className='relative top-[-1500px] left-[333px]'>
        <Image src={'/picture10.png'} alt="" width={1092} height={259}/>
      </div>

      <div className='relative top-[-1500px] left-[177px]'>
        <Image src={'/picture11.png'} alt="" width={1440} height={331}/>
      </div>
    
    </div>


  );
}

export default page
