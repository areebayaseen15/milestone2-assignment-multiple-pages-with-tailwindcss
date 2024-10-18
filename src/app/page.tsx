import Image from "next/image";
import OurPartners from "./components/partner";

export default function Home() {
  return (
    //Banner
    <div className="relative overflow-hidden">
      <div>
        <Image
          alt="logo"
          width={1300}
          height={100}
          src={require("../../public/Assests/pictures/banner.webp")}
          className="w-full h-[300px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]"
        />
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold absolute top-10 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
          WE ARE HERE TO MAKE
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold absolute top-20 left-1/2 transform -translate-x-1/2 w-full text-center text-white">
          COOKING FUN AGAIN
        </h2>
        <input
          type="text"
          placeholder="Aaj kya pakana hai?"
          className="p-4 md:p-7 rounded-full border-2 border-yellow-500 absolute top-[140px] md:top-[160px] left-1/2 transform -translate-x-1/2 w-[250px] sm:w-[300px] md:w-[360px] lg:w-[400px] xl:w-[450px] h-12"
        />
      </div>

      {/* main section */}
      <main>
        {/* our reciepies */}
        <h1 className="text-center text-4xl pt-10">
          Our <span className="text-yellow-600">Recipes</span>
        </h1>
        <div className="flex flex-wrap justify-center md:justify-evenly w-full mt-10 lg:ml-20 lg:mr-20 mb-10">
          <div className="flex-col">
            <div className="Card1 bg-white w-full md:w-[500px] border-2 border-gray-200 mb-5">
              <Image
                alt="logo"
                width={500}
                height={100}
                src={require("../../public/Assests/pictures/r1.webp")}
                className="w-full"
              />
              <h1 className="text-extrabold text-2xl p-3">
                Malai Chicken Rollups
              </h1>
              <p className="text-gray-800 pb-10 pl-3">
                Wrap up the goodness with Malai Chicken Rollups, made with
                Olper's Cream! Rich, creamy, and bursting with flavors, this
                recipe elevates your meals. Try it at home and treat your loved
                ones!...
              </p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-evenly mt-5">
              <div className="w-full sm:w-[300px] md:w-[250px] border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r2.jpg")}
                  className="w-full"
                />
                <h2 className="p-5">Butter Chicken Baos</h2>
              </div>
              <div className="w-full sm:w-[300px] md:w-[250px] ml-0 md:ml-5 border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r3.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Mini Calzone</h2>
              </div>
            </div>
          </div>

          <div className="flex-col justify-around w-full md:w-[600px] overflow-hidden">
            <div className="flex flex-wrap justify-center md:justify-evenly mt-5">
              <div className="w-full sm:w-[300px] md:w-[250px] border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r4.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Easy Resha Chicken Paratha Roll</h2>
              </div>
              <div className="w-full sm:w-[300px] md:w-[250px] ml-0 md:ml-5 border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r5.jpg")}
                  className="w-full"
                />
                <h2 className="p-3">Chocolate Mocha Mousse</h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-evenly mt-5">
              <div className="w-full sm:w-[300px] md:w-[250px] border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r6.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Cabbage Kofta Curry</h2>
              </div>
              <div className="w-full sm:w-[300px] md:w-[250px] ml-0 md:ml-5 border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r7.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Malai Tandoori Tangri Kabab</h2>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-evenly mt-5">
              <div className="w-full sm:w-[300px] md:w-[250px] border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r8.jpg")}
                  className="w-full"
                />
                <h2 className="p-3">Butter Chicken Baos</h2>
              </div>
              <div className="w-full sm:w-[300px] md:w-[250px] ml-0 md:ml-5 border-2 border-gray-200 mb-5">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/r9.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Perfect Chocolate Cake In A Micro...</h2>
              </div>
            </div>
          </div>
        </div>

        <button className="bg-yellow-400 hover:bg-blue-950 w-[150px] p-2 text-white rounded-full mx-auto mt-5 mb-10 block">
          Load More
        </button>
        {/* trending */}
        <section className="trending">
          <h1 className="text-center text-4xl pt-10">
            Trending On <span className="text-yellow-600">Food Fusion</span>
          </h1>
          <div className="flex flex-col m-5 md:m-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t1.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Chicken Cheese Cubes</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t2.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Firecracker Prawns</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t3.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Breakfast Bread Lasagna</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t4.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Shahi Tukray Fries</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 mb-20">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t5.jpg")}
                  className="w-full"
                />
                <h2 className="p-3">Millionaire’s Dessert Cups</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t6.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Shahi Tukray Fries</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t7.jpg")}
                  className="w-full"
                />
                <h2 className="p-3">Namkeen Gosht Karahi</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={250}
                  height={100}
                  src={require("../../public/Assests/pictures/t8.webp")}
                  className="w-full"
                />
                <h2 className="p-3">Meatball Surprise</h2>
              </div>
            </div>
          </div>
        </section>

        {/* may also like */}
        <section className="trending bg-white py-10">
          <h1 className="text-center text-4xl pt-10">
            You May Also <span className="text-yellow-600">Like</span>
          </h1>
          <div className="m-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l1.webp")}
                />
                <h2 className="p-3">Murghi ke Panjay ka Salan – Chi</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l2.webp")}
                />
                <h2 className="p-3">Strawberry Angle Food Cake De</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l3.webp")}
                />
                <h2 className="p-3">Jiggly Fluffy Cake – Aka Castella</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l4.webp")}
                />
                <h2 className="p-3">Chicken Daleems</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l5.jpg")}
                />
                <h2 className="p-3">Turkish Lahmacun</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l6.webp")}
                />
                <h2 className="p-3">Creamy Chicken Pita Sandwich</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l7.webp")}
                />
                <h2 className="p-3">Seekh Kabab Paratha Bites</h2>
              </div>
              <div className="w-full border-2 border-gray-200">
                <Image
                  alt="logo"
                  width={500}
                  height={100}
                  src={require("../../public/Assests/pictures/l8.jpg")}
                />
                <h2 className="p-3">Moroccan Beef Kabab</h2>
              </div>
            </div>
          </div>
        </section>

        {/* partners */}
        <OurPartners />
      </main>
    </div>
  );
}
