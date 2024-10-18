import Image from "next/image";

export default async function Drinks() {
  
  return (
    <div className="overflow-hidden">
      <div className="flex justify-between mt-20 mr-[200px] ml-20 mb-10">
        <div>
          <h1 className="text-4xl font-extrabold">Drinks</h1>
        </div>
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
      <main>
        <div className="flex justify-between ">
          <div className="m-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d1.webp")}
                />
                <h2 className="p-3">Iced Mango Latte & Korean Man</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d2.webp")}
                />
                <h2 className="p-3">Ginger Mint Lemonade</h2>
              </div>

              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d3.webp")}
                />
                <h2 className="p-3">Homemade Instant Limo Pani Mi</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d4.webp")}
                />
                <h2 className="p-3">Arabic Champagne – Halal Saud</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d5.webp")}
                />
                <h2 className="p-3">Strawberry Sago Sharbat</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d6.webp")}
                />
                <h2 className="p-3">Apple Sharbat</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d7.webp")}
                />
                <h2 className="p-3">Magic Home Remedy for Cough</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d8.webp")}
                />
                <h2 className="p-3">Magic Home Remedy for Cough &</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d9.webp")}
                />
                <h2 className="p-3">Instant Coffee Mix – Just add Ho</h2>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d10.webp")}
                />
                <h2 className="p-3">Apricot Delight/ Khubani ka Trifle</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d11.webp")}
                />
                <h2 className="p-3">Instant Chai Mix</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../../public/Assests/pictures/drinks/d12.jpg")}
                />
                <h2 className="p-3">Instant Coffee Mix – Just add Hot</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
