import React from "react";
import offer1 from "../../../assets/offers/Offer1.png";
import offer2 from "../../../assets/offers/Offer2.png";
import offer3 from "../../../assets/offers/Offer3.png";
import offer4 from "../../../assets/offers/Offer4.png";
const Offers = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col mb-16">
      <div className="flex flex-col md:flex-row gap-10 my-16">
        <div className="bg-green-300 p-3 rounded basis-1/3 flex flex-row items-center">
          <div className="basis-1/3">
            <h4 className="text-base font-bold">New Offer</h4>
            <h1 className="text-5xl font-bold">Fresh</h1>
            <h1 className="text-5xl font-bold">Coconut</h1>
            <button className=' mt-6 text-sm bg-green-700 text-green-100 px-3 py-1 font-bold rounded-full'>Shop Now</button>
          </div>
          <div className="basis-2/3">
            <img src={offer1} width="100%" alt="" srcset="" />
          </div>
        </div>
        <div className="bg-green-300 p-3 rounded basis-2/3 flex flex-row items-center">
          <div className="basis-2/3">
            <h4 className="text-base font-bold">30% Off</h4>
            <h1 className="text-5xl font-bold">Get Garden fresh</h1>
            <h1 className="text-5xl font-bold">Pure Orange</h1>
            <button className='mt-6 text-sm bg-green-700 text-green-100 px-3 py-1 font-bold rounded-full'>Shop Now</button>
          </div>
          <div className="lg:basis-1/3">
            <img src={offer2} alt="" srcset="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="bg-green-300 p-3 rounded basis-2/3 flex flex-row items-center">
          <div className="basis-2/3">
            <h4 className="text-base font-bold">50% Off Offer</h4>
            <h1 className="text-5xl font-bold">Shop Sroberry</h1>
            <h1 className="text-5xl font-bold">Fresh Food</h1>
            <button className='mt-6 text-sm bg-green-700 text-green-100 px-3 py-1 font-bold rounded-full'>Shop Now</button>
          </div>
          <div className="lg:basis-1/3">
            <img src={offer3} alt="" srcset="" />
          </div>
        </div>
        <div className="bg-green-300 p-3 rounded basis-1/3 flex flex-row items-center">
          <div className="basis-1/3">
            <h4 className="text-base font-bold">Best Offer</h4>
            <h1 className="text-5xl font-bold">Broccoli</h1>
            <h1 className="text-5xl font-bold">Slice</h1>
            <button className=' mt-6 text-sm bg-green-700 text-green-100 px-3 py-1 font-bold rounded-full'>Shop Now</button>
          </div>
          <div className="basis-2/3">
            <img src={offer4} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
