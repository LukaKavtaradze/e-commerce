import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  interface Shoes {
    name: string;
    image: string;
    price: number;
  }

  const Checkout: Shoes[] = [
    {
      name: "Fall Limited Edition Sneakers",
      image: "/assets/image-product-1-thumbnail.jpg",
      price: 125,
    },
  ];

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const [count, setCount] = useState<number>(0);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
  };

  const toggleCart = (status: boolean) => {
    setCartOpen(status);
  };

;

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="w-full h-screen bg-[#fff] flex justify-start items-center flex-col border-box font-[Kumbh Sans] relative">
      <div className="flex flex-col w-full justify-start items-center relative">
        <Header openCart={toggleCart} isOpenn={toggleMenu} />
        <div
          className={`absolute bg-white w-[300px] h-full top-[0px] flex flex-col pt-[24px] z-50 pl-[50px] ${
            isOpened ? "left-[-30px]" : "left-[-300px]"
          } `}
        >
          <img
            onClick={toggleMenu}
            className="w-[15px] h-[15px]"
            src="/assets/icon-close.svg"
            alt=""
          />
          <ul id="mobile-list" className="pt-[50px] gap-5">
            <li className="text-[18px] h-[26px] font-bold text-[#1d2026] ">
              Collections
            </li>
            <li className="text-[18px] h-[26px] font-bold text-[#1d2026]">
              Men
            </li>
            <li className="text-[18px] h-[26px] font-bold text-[#1d2026] ">
              Women
            </li>
            <li className="text-[18px] h-[26px] font-bold text-[#1d2026] ">
              About
            </li>
            <li className="text-[18px] h-[26px] font-bold text-[#1d2026] ">
              Contact
            </li>
          </ul>
        </div>

        <div
          id="cart"
          className={`w-[360px] h-[256px] bg-white rounded-xl ${
            cartOpen ? "flex" : "hidden"
          } flex-col absolute top-[100px] z-50 md:right-[400px]`}
        >
          <h1 className="text-[16px] h-[26px] font-bold text-[#1d2026] p-6">
            Cart
          </h1>
          <div className="h-[2px] bg-[#e4e9f2] w-[360px] mt-[27px]"></div>
          <div className="justify-center items-center flex-col flex mt-[25px]">
            <h1
              className={`text-[#69707d] w-[146px] h-[26px] text-[15px] font-bold ${
                count === 0 ? "flex" : "hidden"
              }`}
            >
              Your cart is empty.
            </h1>
            {count > 0 &&
              Checkout.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center font-[Kumbh Sans]"
                >
                  <div className="flex flex-row gap-5 justify-between items-center">
                    <img className="w-[50px]" src={item.image} alt="" />
                    <div className="flex flex-col">
                      <h2 className="h-[26px] text-[15px] w-[213px] text-[#69707d]">
                        {item.name}
                      </h2>
                      <p>
                        <span className="text-[#69707d]">
                          ${item.price} x {count}
                        </span>{" "}
                        <span className="text-[16px] text-[#1d2026] font-bold">
                          ${item.price * count}.00
                        </span>
                      </p>
                    </div>
                    <img
                      onClick={resetCount}
                      src="/assets/icon-delete.svg"
                      className="w-[14px] h-[16px] cursor-pointer"
                      alt="Delete"
                    />
                  </div>
                  <button className="w-[312px] h-[56px] bg-[#ff7e1b] rounded-xl mt-[26px] text-white">
                    Checkout
                  </button>
                </div>
              ))}
          </div>
        </div>
        <Main count={count} setCount={setCount} />
      </div>
    </div>
  );
};

export default App;
