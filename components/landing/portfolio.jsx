import React from "react";
import PORTFOLIO__ANIMATION from "../animation/animation";
import Image from "next/image";
import CircularGallery from "../CircularGallery/CircularGallery";

function Portfolio() {
  PORTFOLIO__ANIMATION();
  return (
    <>
      <section className="w-full h-[200vh] bg-none flex flex-col relative portfolio_section z-10 overflow-hidden">
        <div className="w-full work_headline">
          <h2 className="text-center text-9xl text-white">OUR WORKS</h2>
        </div>

        <div className="w-full h-auto relative flex flex-col gap-10 items-center overflow-hidden">
          <div className=" card bg-red-400 h-[800px]  rounded-3xl w-[80%]"></div>
          <div className=" card bg-green-400 h-[800px]  rounded-3xl w-[80%]"></div>
          <div className=" card  bg-yellow-950 h-[800px] rounded-3xl w-[80%]"></div>
        </div>
      </section>
      <section className="h-screen z-10 mt-60 w-full relative  bg-red-800 parallax_section"></section>
      <section className="h-screen w-full relative  bg-blue-800 "></section>
    </>
  );
}

export default Portfolio;
