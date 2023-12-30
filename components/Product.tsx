import Card from "../components/Card";
import React from "react";
// import BG_PIC from "../public/Apple-Watch-Ultra-2-Alt-Gear.jpg";

const images = [
  {
    src: "../src/assets/watch.jpg",
    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },
  {
    src: "../src/assets/watch.jpg",
    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },
  {
    src: "../src/assets/watch.jpg",
    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },
  {
    src: "../src/assets/watch.jpg",
    alt: "Luminous GPTEX 240 AH Battery",
    width: 100,
    height: 100,
    className: "",
  },
];
const ProductListing = () => {
  return (
    <div className="container bg-slate-100">
      <div className="flex justify-between px-10 py-5">
        <div>
          <h1 className="text-3xl">Batteries</h1>
        </div>
        <div>
          <h1>View All Batteries</h1>
        </div>
      </div>

      {images.map((image, index) => (
        // @ts-ignore
        <Card imgSrc={image.src} alt={image.alt} key={index} />
      ))}
    </div>
  );
};

export default ProductListing;
