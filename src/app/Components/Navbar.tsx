import Image from "next/image";
import Link from "next/link"

const Navbar =() => {

  return (
  <div>
      <div className="w-[1440px]">
         <h1 className="text-gray-500 bg-black ">Home-Page</h1>
        <nav className=" flex bg-[#F5F5F5] text-black font-semibold h-12 items-center sm:" >
         <div className="w-[24px] h-[24px] relative top-[6px] left-[48px] ">
            <Image src={'/Vector.png'} alt="" width={24} height={24}/>
         </div>
          <ul className=" w-[333px] h-[36px] relative left-[1129.19px] gap-[13.69px] flex ">
           
             <li>Find a Store |</li>
          
            <li>Help |</li>
            
             <li>JoinUs |</li>
            <Link href="/Login">
            <li>Sign in </li>
            </Link>
          </ul>
        </nav>
      </div>

        <div>
            <div className="w-[1440px] h-[60px] relative top-[-8px] left-[9px]">
                <Image src={'/picture5.png'} alt="" width={1450} height={60} />
            </div>
         </div>  

        <div className="w-[1444px] h-[66px] relative top-[26px] bg-[#F5F5F5]">
        <div className="w-[500px] h-[1px] relative top-[10px] left-[667.52px] flex">Hello Nike App</div>
        <div className="flex w-[500px] h-[1px] relative size-11 top-8 left-[555px] align-middle">Download the app to access everything Nike. Get Your Great</div>
        
          <div className="w-[1344px] h-[977px] relative top-[58px] left-[48px]">
            <Link href="/Product">
              <Image src={'/Image.png'} alt="" width={1344} height={700}/>
            </Link>
          </div>
          
        </div>
        <div className="w-[1008px] h-[212px] relative top-[748px] left-[168px]">
             <div className="w-[100px] h-[24px] relative left-[444px] font-semibold">First Look</div>
             <div className="w-[500px] h-[60px] relative top-3 left-[240px] font-black ">
                  <Image src={'/Nike Air Max Pulse.png'} alt="" width={500} height={60}/>
              </div>
             <div className="w-[550px] h-[34px] relative top-7 left-[250px] font-normal text-black">
                   <p>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                      —designed to push you past your limits and help you go to the max.</p>
             </div>
             <div className="w-[1008px] h-[45px] relative top-[30px] left-[373.63px] pt-6 pr-[379.64px] ">
                     <button className="w-[130px] h-[45px] left-5 rounded-full bg-black text-white text-sm">Notify Me</button>
                     <button className="w-[130px] h-[45px] relative left-[10px] rounded-full bg-black text-white text-sm">Shop Air Max</button>
             </div>
        </div>

         <div className="w-[1440px] h-[52px] relative top-[777px] left-[80px]">
                <Image src={'/best.png'} alt="" width={161} height={27}/>
           <div className="w-[164.75px] h-[48px] relative top-[-18px] left-[1166.61px] gap-[12.38px] font-bold">Shop</div>
             <div className="w-[48px] h-[48px] relative top-[-80px] left-[1230.77px]">
                   <Image src={'/Frame (1).png'} alt="" width={48} height={48}/>
             </div>
             <div className="w-[48px] h-[48px] relative top-[-130px] left-[1288.77px]">
              <Image src={'/Frame (2).png'} alt="" width={48} height={48}/>
             </div>
         </div>

         <div className="w-[1440px] h-[540.36px] relative top-[64px]">
              <div className="w-[441.36px] h-[441.36px] relative top-[700px] left-[77px]">
                <Image src={'/Image (1).png'} alt="" width={441.36} height={441.36}/>
              </div>
                <div className="w-[425.36px] h-[48px] relative top-[711px] left-[77px]">
                   <Image src={'/Frame (4).png'} alt="" width={425} height={48}/>
                </div>
         </div>

         <div className="w-[441.36px] h-[509.36px] relative top-[220px] left-[525px]">
              <Image src={'/Frame (5).png'} alt="" width={441.36} height={510}/>
         </div>

         <div className="w-[441.36px] h-[510.36px] relative top-[-288px] left-[971px]">
          <Image src={'/Frame (6).png'} alt="" width={441.36} height={510}/>
         </div>

         <div className="w-[441.36px] h-[510.36px] relative top-[-800px] left-[1419px]">
            <Image src={'/Frame (7).png'} alt="" width={31.77} height={31.77}/>
         </div>

         <div>
           <div className="w-[1344px] h-[977px] relative left-[48px]">
            <div className="w-[111.36px] h-[37px] relative top-[-777px] left-[33px] text-lg font-bold">Featured</div>
           </div>
           <div className="w-[1344px] h-[925px] relative top-[-1709px] left-[77px]">
            <Image src={'/Frame (8).png'} alt="" width={1344} height={925} />
           </div>
         </div>

         <div>
          <div className="w-[90.9px] h-[27px] relative top-[-1699px] left-[77px] text-lg font-bold">Gear Up</div>
         </div>

         <div className="w-[1356px] h-[509] relative top-[-1697px] left-[74px]">
          <Image src={'/Frame (9).png'} alt="" width={1356} height={509}/>
         </div>

         <div>
          <div className="w-[111.48px] h-[77px] relative top-[-1682px] left-[70px] font-semibold items-lg">Don't Miss</div>
          <div className="w-[1344px] h-[977px] relative top-[-1708.66px] left-[70px]">
            <Image src={'/picture (2).png'} alt="" width={1344} height={925}/>
          </div>
         </div>
         
         <div className="w-[1361px] h-[594px] relative top-[-1704.99px] left-[70px]">
          <Image src={'/picrure3.png'} alt="" width={1361} height={594}/>
         </div>

         <div>
          <nav>
            <ul className="relative top-[-1599px] left-[210px] ">
              <li className="w-[182px] h-[24px] font-semibold relative-[-44px] text-2xl">Icons</li>
              <li className=" w-[182px] h-[24px] relative top-[65px] text-2xl text-gray-500">Air Force 1</li>
              <li className=" w-[182px] h-[24px] relative top-[99px] text-2xl text-gray-500">Huarache</li>
              <li className=" w-[182px] h-[24px] relative top-[136px] text-2xl text-gray-500">Air Max 90</li>
              <li className="w-[182px] h-[24px] relative top-[177px] text-2xl text-gray-500">Air Max 95</li>
            </ul>
          </nav>
         </div>

         <div>
          <nav>
            <ul className="relative top-[-1599px] left-[565px]">
              <li className="relative top-[-118px] text-2xl font-semibold">Shoes</li>
              <li className="text-gray-500 text-2xl relative top-[-67px]">All Shoes</li>
              <li className="text-gray-500 text-2xl relative top-[-37px]">Customs Shoes</li>
              <li className="text-gray-500 text-2xl relative top-[-10px]">Jordan Shoes</li>
              <li className="text-gray-500 text-2xl relative top-[20px]">Running Shoes</li>
            </ul>
          </nav>
         </div>

         <div>
          <nav>
            <ul className="relative top-[-1799px] left-[898px]">
              <li className="relative top-[-77px] text-2xl font-semibold ">Clothing</li>
              <li className="text-gray-500 text-2xl relative top-[-22px]">All Clothing</li>
              <li className="text-gray-500 text-2xl">Modest Wear</li>
              <li className="text-gray-500 text-2xl relative top-7">Hoddies & Pullovers</li>
              <li className="text-gray-500 text-2xl relative top-[55px]">Shirts & Tops</li>
            </ul>
          </nav>
         </div>

         <div>
          <nav>
            <ul className="relative top-[-1888px] left-[1199px]">
              <li className="relative top-[-155px] text-2xl font-semibold">Kids</li>
              <li className="relative top-[-101px] text-gray-500 text-2xl">Infant & Toddler Shoes</li>
              <li className="relative top-[-75px] text-gray-500 text-2xl">Kids' Shoes</li>
              <li className="relative top-[-44px] text-gray-500 text-2xl">Kids' Jordan Shoes</li>
              <li className="relative top-[-20px] text-gray-500 text-2xl">Kids' Basketball Shoes</li>
            </ul>
          </nav>
         </div>

         <div className="w-[1440px] h-[331px] relative top-[-1800px] left-[111px]">
          <Image src={'/picture4.png'} alt="" width={1440} height={331}/>
         </div>
  </div>
  );
}




export default Navbar
