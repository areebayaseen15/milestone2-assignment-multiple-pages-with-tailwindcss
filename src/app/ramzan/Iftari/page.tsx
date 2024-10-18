
import Link from "next/link";
import Image from "next/image"
import Footer from "@/app/components/footer";


export default function Iftari(){
  return(
    <div className="overflow-hidden">
     <div className="flex flex-col md:flex-row justify-between mt-20 mr-20 ml-20 mb-10" >
     <div className="p-5">
     <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10 lg:mt-20">
    <h1 className="text-3xl lg:text-4xl font-semibold">
    Iftar <span className="text-yellow-600">Recipes</span>
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

  <main>
  <div className="flex justify-between ">
    <div className="m-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i1.webp")} 
      />
      <h2  className="p-3">3 Smoothies: Coffee, Superfood, </h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i2.jpg")} 
      />
      <h2  className="p-3">High Protein Chickpea Salad</h2>
              </div>

              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i3.webp")} 
      />
      <h2  className="p-3">2 Easy Bread Pudding with Lefto</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i4.webp")} 
      />
      <h2  className="p-3">Gulabi Pheni Ka Meetha</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i5.jpg")} 
      />
      <h2  className="p-3">Quick and Easy Chicken Sticks</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i6.webp")} 
      />
      <h2  className="p-3">Sizzling Gulab Jamun</h2>
              </div>
     </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i7.jpg")} 
      />
      <h2  className="p-3">Tandoori Chicken with Garlic Mint</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i8.jpg")} 
      />
      <h2  className="p-3">Loaded Animal Fries</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i9.webp")} 
      />
      <h2  className="p-3">Restaurant Style Club Sandwich</h2>
              </div>
     </div>
     
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i10.webp")} 
      />
      <h2  className="p-3">Boat basin inspired Chicken Cheese Paratha</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/i11.jpg")} 
      />
      <h2  className="p-3">Steam Roast Chicken Pulao</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
            <Image
              alt="logo"
              width={500}
              height={100}
        src={require("../../../../public/Assests/pictures/ramzan/12.webp")} 
      />
      <h2  className="p-3">Dahi Phulki Chaat with Storable </h2>
              </div>
     </div>
     
      </div>
     
    </div>
  </main>
  </div>

  )
   
}