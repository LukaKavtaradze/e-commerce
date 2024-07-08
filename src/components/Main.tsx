


import React, { useState } from "react";

interface ShoeCart {
  count:number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
 
}

const Main: React.FC<ShoeCart> = ({count,setCount}) => {
 

  const increaseShoeCount = () => {
   
    setCount(count+1);
  };

  const decreaseShoeCount = () => {
  
    setCount(count -1)
    if(count === 0) setCount(0) 
   
  };
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  const addToCart = () => {
    setIsVisible(true);
  };

  return (
    <>
      <main className="flex flex-col items-center justify-center md:flex-row md:gap-[125px] md:mt-[50px]">
        <section className="shoe-cart">
          <div className="relative">
            <img
              className="w-full md:w-[445px] md:rounded-2xl"
              src="/assets/image-product-1.jpg"
              alt=""
            />
            <div className="w-[40px] h-[40px] bg-white rounded-[50%] flex items-center justify-center absolute top-1/2 right-4">
              <img src="/assets/icon-next.svg" alt="" />
            </div>
            <div className="w-[40px] h-[40px] bg-white rounded-[50%] flex items-center justify-center absolute top-1/2 left-4">
              <img
                src="https://ecommerce-product-page-lazzzare.vercel.app/assets/icon-previous-7543ce3f.svg"
                alt=""
              />
            </div>
          </div>
          <div className="hidden flex-row gap-7 mt-5 md:flex">
            <img
              className="w-[88px] h-[88px] rounded-xl hover:bg-[#FFFFFF] hover:opacity-50 cursor-pointer"
              src="/assets/image-product-1-thumbnail.jpg"
              alt=""
            />
            <img
              className="w-[88px] h-[88px] rounded-xl  hover:bg-[#FFFFFF] hover:opacity-50 cursor-pointer"
              src="/assets/image-product-2-thumbnail.jpg"
              alt=""
            />
            <img
              className="w-[88px] h-[88px] rounded-xl  hover:bg-[#FFFFFF] hover:opacity-50 cursor-pointer"
              src="/assets/image-product-3-thumbnail.jpg"
              alt=""
            />
            <img
              className="w-[88px] h-[88px] rounded-xl hover:bg-[#FFFFFF] hover:opacity-50 cursor-pointer"
              src="/assets/image-product-3-thumbnail.jpg"
              alt=""
            />
          </div>
        </section>
        <section id="about-shoes" className="flex flex-col md:items-start justify-center p-6">
          <div id="title" className="flex flex-col items-center gap-4">
            <h4 className="w-[327px] h-[12px] md:w-[445px] text-[12px] text-[#ff7e1b] tracking-[1.85px] font-[Kumbh Sans] font-bold">
              SNEAKER COMPANY
            </h4>
            <h1 className="w-[327px] h-[64px] md:w-[445px] md:text-[44px] md:leading-none text-[28px] font-[Kumbh Sans] text-[#1d2026] font-bold tracking-normal leading-8">
              Fall Limited Edition Sneakers
            </h1>
            <p className="w-[327px] h-[100px] text-[15px] font-normal font-[Kumbh Sans] md:w-[445px] text-[#69707d] md:pt-[30px]">
              These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
            </p>
          </div>
          <div id="price-sec" className="flex justify-between md:flex-col md:items-start items-center">
            <div className="flex items-center justify-center gap-2">
              <h3 className="w-[106px] text-[28px] font-bold font-[Kumbh Sans] text-[#1d2026]">
                $125.00
              </h3>
              <div className="w-[50px] h-[27px] text-[16px] text-[#ff7e1b] font-[Kumbh Sans] font-bold bg-[#ffeee2] rounded-md flex justify-center items-center">
                50%
              </div>
            </div>
            <span className="line-through w-[63px] h-[26px] text-[16px] font-bold text-[#b6bcc8]">
              $250.00
            </span>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex flex-row justify-between pl-3 pr-3 items-center w-[327px] h-[56px] md:w-[157px] bg-[#f6f8fd] rounded-xl mt-[30px]">
              <img
                src="/assets/icon-minus.svg"
                className="cursor-pointer"
                alt=""
                onClick={decreaseShoeCount}
              />
              <h2 className="w-3 font-bold text-[16px] text-[#1d2026]">
             {count}
            </h2>
              <img
                src="/assets/icon-plus.svg"
                className="cursor-pointer"
                alt=""
                onClick={increaseShoeCount}
              />
            </div>
            <div
              onClick={addToCart}
              className="w-[327px] md:w-[272px] h-[56px] bg-[#ff7e1b] rounded-xl flex-row mt-5 flex items-center justify-center gap-2"
            >
              <img src="/assets/icon-cart.svg" alt="" />
              <h3 className="w-[86px] text-[16px] whitespace-nowrap font-bold font-[Kumbh Sans] text-white">
                Add To cart
              </h3>
            </div>
          </div>
        </section>

        
      </main>


      
    </>
  );
};

export default Main;