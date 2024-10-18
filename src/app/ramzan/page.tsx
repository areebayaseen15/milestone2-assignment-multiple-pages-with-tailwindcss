import Link from "next/link";
import Image from "next/image"


export default async function Ramzan(){
 
  return(
    <div className="overflow-hidden">
     <div className="flex flex-col md:flex-row justify-between mt-20 mr-20 ml-20 mb-10" >
     <div className="p-5">
     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10 lg:mt-20">
    <h1 className="text-3xl lg:text-4xl font-semibold">
    RAMZAN <span className="text-yellow-600">Recipes</span>
    </h1>
    <div className="flex mt-5 lg:mt-0 lg:ml-20">
      <select
        name="ramzanrecipies"
        id="ramzanrecipies"
        className="border-2 border-gray-200 rounded p-2 lg:ml-[150px]"
      >
        <option value="Most Recent First">Most Recent First</option>
        <option value="Most Viewed">Most Viewed</option>
        <option value="Most Favourite">Most Favourite</option>
      </select>
    </div>

        <h1 className="font-extrabold text-2xl mr-20 lg:ml-20">Filters</h1>
        <div className="filter flex-col  w-20 mr-[150px] mt-0">
        <ul>
          <li className="border-2 border-gray-400 w-[200px]  hover:bg-gray-400  hover:text-white">
          <Link href={"/ramzan/Sehri"}  className="p-2" >Sehri</Link> 

          </li> 
          <li className="border-2 border-gray-400 w-[200px] mt-3 mr-20  hover:bg-gray-400  hover:text-white" >
          <Link href={"/ramzan/Iftari"}  className=" p-2">Iftar</Link>
          </li>
        </ul>
      </div>
        </div>
      </div>
  </div>

{/* <main> */}
    <div className="flex justify-between ">
    <div className="m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
              src={require("../../../public/Assests/pictures/ramzan/1.jpg")} 
              />
      <h2  className="p-3">Namkeen Gosht Karahi</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/2.webp")} 
      />
      <h2  className="p-3">Creamy Tikka Buns</h2>
              </div>

              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/3.jpg")} 
      />
      <h2  className="p-3">Pull-Apart Pizza Balls</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
     <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/4.jpg")} 
      />
      <h2  className="p-3">Seekh Kabab Dum Biryani</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/5.webp")} 
      />
      <h2  className="p-3">Pesto Lasagna</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/6.jpg")} 
      />
      <h2  className="p-3">Restaurant Style Chicken Mandi</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
     <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/7.jpg")} 
      />
      <h2  className="p-3">Chicken Makhni Kofta Gravy</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/8.jpg")} 
      />
      <h2  className="p-3">Filipino Egg Omelette</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/9.jpg")} 
      />
      <h2  className="p-3">Chicken Cheese White Karahi</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
     
     <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/10.webp")} 
      />
      <h2  className="p-3">Apricot Delight/ Khubani ka Trifle</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/11.webp")} 
      />
      <h2  className="p-3">Fire Tadka Daal</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../public/Assests/pictures/ramzan/12.webp")} 
      />
      <h2  className="p-3">Eid Dessert Kulfi Trifle</h2>
              </div>
              </div>
              </div>
      </div>
    </div>
    

  )
   
}