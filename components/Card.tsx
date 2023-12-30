import { Label } from "./Labels";

import Button from "./Button";
import { IconContainer } from "./RenderIcons";
// import BG_PIC from "../src/assets/watch.jpg";
import React from "react";
import { Heart } from "react-feather";
import { useNavigate } from "react-router-dom";
const images = [
  {
    src: "Apple-Watch-Ultra-2-Alt-Gear.jpg",
    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },

  {
    src: "Apple-Watch-Ultra-2-Alt-Gear.jpg",

    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },

  {
    src: "Apple-Watch-Ultra-2-Alt-Gear.jpg",

    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },
  {
    src: "Apple-Watch-Ultra-2-Alt-Gear.jpg",

    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },
];

const Card = (props) => {
  const { imgSrc = "../src/assets/watch.jpg", alt } = props;

  const navigate = useNavigate();

  const handleCheckout = () => {
    console.log("sdsd");
    navigate("/checkout");
  };
  return (
    // image container
    <div className=" bg-white m-10  shadow-lg rounded-xl lg:flex  justify-center ">
      <div className=" rounded-lg lg:w-fit w-full  ">
        <div className="bg-slate-100 h-fit px-10 py-10 mt-6  w-fit">
          <img
            src={imgSrc}
            alt={alt}
            width={400}
            height={400}
            className="rounded-lg mb-3"
          />
        </div>
        <p className="font-semibold text-gray-300 mb-9">
          Roll over image to zoom in
        </p>

        <div className="flex items-center justify-between mb-4 ">
          {/* {images.map((image, index) => ( */}
          <div className="flex-col mx-2 h-[18] w-24 ">
            <img src={"watch.jpg"} alt="BgPic" />
          </div>
          {/* ))} */}

          <div className="flex-col mx-2 h-[18] w-24">
            <img
              src={"watch.jpg"}
              alt="Luminous GPTEX 240 AH Battery"
              width={100}
              height={100}
              className=""
            />
          </div>
          <div className="flex-col mx-2 h-[18] w-24">
            <img
              src={"watch.jpg"}
              alt="Luminous GPTEX 240 AH Battery"
              width={100}
              height={100}
              className=""
            />
          </div>
          <div className="flex-col mx-2 h-[18] w-24">
            <img
              src={"watch.jpg"}
              alt="Luminous GPTEX 240 AH Battery"
              width={100}
              height={100}
              className=""
            />
          </div>
        </div>
      </div>
      {/* content container */}
      <div className=" rounded-lg  p-8 flex-wrap lg:w-auto  w-full">
        <div className="flex items-center justify-between mb-4">
          <Label
            text="Pakistan"
            bgColor="bg-green-100"
            fontColor="text-green-600"
          />
          <button className="font-extrabold shadow text-blue-500">
            LUMINOUS
          </button>
        </div>

        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold mb-4">
            <span className="block">Luminous</span>
            <span className="block">GPTEX 240 AH</span>
          </h1>
          <div className="bg-gray-200 flex items-center justify-center text-center h-14 w-14">
            {/* PUT ICON HERE */}
            <Heart />

            {/* <img
                src={BG_PIC}
                alt="Luminous GPTEX 240 AH Battery"
                width={100}
                height={200}
                className=""
              />  */}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4 ">
          <Label
            text="Selling out fast"
            bgColor="bg-violet-200"
            fontColor="text-violet-600"
          />
          <Label
            text="Best in UAE"
            bgColor="bg-yellow-100"
            fontColor="text-yellow-500"
          />
        </div>

        <div className="flex items-center justify-between mb-4 ">
          <div className="flex-col items-center justify-between mt-4">
            <p className="text-gray-300 mr-2 font-semibold">Capacity:</p>
            <p className="font-bold text-gray-400">35 AH</p>
          </div>

          <div className="flex-col items-center justify-between mt-4">
            <p className="text-gray-300 mr-2 font-semibold">Warranty:</p>
            <p className="font-bold text-gray-400">3 yrs</p>
          </div>

          <div className="flex-col items-center justify-between mt-4">
            <p className="text-gray-300 mr-2 font-semibold">Price:</p>
            <p className="font-bold text-gray-400">Wholesale only</p>
          </div>
        </div>

        <div className="flex-col items-center justify-between mb-4 ">
          <p className="font-semibold text-gray-300">Price inclusive of VAT</p>
          <div className="flex justify-between">
            <h1 className="font-bold text-2xl mb-5">36.31 AED</h1>
            <div className="bg-gray-200 h-14 w-14"></div>
          </div>
          <p className="font-semibold text-gray-300">Also available on</p>
        </div>

        <div className="flex items-center justify-between mb-4 ">
          {images.map((image, index) => (
            <IconContainer
              key={index}
              icon={
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className={image.className}
                />
              }
            />
          ))}
        </div>

        <Button color={""} onClick={handleCheckout}>
          {" "}
          Buy Now{" "}
        </Button>
      </div>
    </div>
  );
};

export default Card;
