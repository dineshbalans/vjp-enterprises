import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import newsLetterBg from "../../assets/Newsletter-banner.jpg";
import ProductItem from "../../components/Product/ProductItem";
import { featuresData } from "../../data/featuresData";
import TopCollection from "./components/TopCollection";

const LandingPage = () => {
  return (
    <section className="">
      <Carousel />
      <div className="px-12 space-y-16">
        <TopCollection />
        {/* NEWSLETTERS */}
        <div
          className="bg-cover bg-center bg-no-repeat flex justify-evenly items-center py-24"
          style={{ backgroundImage: `url(${newsLetterBg})` }}
        >
          <div className="w-[45%] space-y-2">
            <h1 className="text-[#696969]">SUBSCRIBE TO OUR NEWSLETTERS </h1>
            <h4 className="text-[27px] leading-10 font-semibold">
              Keep up to Date with Our New Collection and Exclusive Offers
            </h4>
          </div>
          <div className="w-[45%] flex gap-3">
            <input
              type="text"
              className="outline-none p-3 border border-white text-white bg-transparent
              placeholder:text-white w-full placeholder:text-sm"
              placeholder="Your email Address"
            />
            <button className="bg-black text-white px-5 py-2">Subscribe</button>
          </div>
        </div>
        {/* Trending product */}
        <div>
          <div className="space-y-10">
            <div className="space-y-4">
              <h1 className="text-center text-4xl font-semibold">
                Trending product
              </h1>
              <h3 className="text-center">
                Get through all trending products and get your best deal.
              </h3>
            </div>
            <ul className="flex flex-wrap justify-between">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <ProductItem key={i} />
              ))}
            </ul>
          </div>
        </div>
        {/* Features List */}
        <ul className="flex justify-evenly">
          {featuresData.map(({ id, title, desc, image }) => (
            <li key={id} className="text-center space-y-1 w-[27%] p-4 pb-16">
              <img src={image} alt="" className="mx-auto mb-4" />
              <h3 className="font-semibold">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LandingPage;
