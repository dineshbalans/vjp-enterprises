import React from "react";
import footerImg1 from "../../../assets/vjp_logo_color.png";
import footerImg2 from "../../../assets/footer_img.png";
import { Link } from "react-router-dom";
import { footerData, links } from "./footerData";

const Footer = () => {
  return (
    <footer className="text-ternary w-full bg-[#F2F6F8] border-t text-[15px]">
      <section
        className="flex flex-wrap sml:justify-between 
  px-10 py-12 2xl:container mx-auto"
      >
        <div className=" w-full md:w-1/4 flex flex-col sml:flex-none gap-5">
          <img
            src={footerImg1}
            alt=""
            className="w-52 mx-auto md:mx-0 object-contain"
          />
          <ul className="space-y-5">
            {footerData.map(({ id, cntnt, Icon }) => (
              <li key={id} className="flex gap-3 items-center">
                <Icon className="scale-[1.4]" />
                <h6 className="">{cntnt}</h6>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex flex-col gap-5 w-full md:w-1/4 pb-8 md:pb-0
      items-center md:items-start text-center md:text-left"
        >
          <h4 className="text-ternary text-xl font-semibold">Shop</h4>
          <ul className="space-y-1">
            <li>Hot deals</li>
            <li>Categories</li>
            <li>Brands</li>
            <li>Rebates</li>
            <li>Weekly deals</li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-5 w-full md:w-1/4 pb-8 md:pb-0
      items-center md:items-start text-center md:text-left"
        >
          <h4 className="text-ternary text-xl font-semibold">Need help?</h4>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>Order tracking</li>
            <li>FAQs</li>
            <li>Return Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div
          className="flex flex-col gap-5 w-1/2 mx-auto md:w-1/4
      items-center md:items-start text-center md:text-left pb-8 md:pb-0"
        >
          <h4 className="text-ternary text-xl font-semibold">
            Newsletter Signup
          </h4>
          <h5>
            Subscribe to our newsletter and get 10% off your first purchase
          </h5>
          <div className="flex border border-black rounded-full text-sm gap-2 p-[2px]">
            <input
              type="text"
              className="outline-none rounded-l-full px-2 text-[13px] bg-transparent"
              placeholder="Your Email address"
            />
            <button className="bg-black text-white px-5 py-2 rounded-full">
              Subscribe
            </button>
          </div>
          <img src={footerImg2} alt="" className="" />
        </div>
      </section>
      <section className="bg-white px-10 py-5 text-[#9CA7AA] text-sm ">
        <div
          className="2xl:container mx-auto flex flex-wrap md:flex-nowrap
    justify-center md:justify-between gap-5"
        >
          <h6 className="w-full md:1/2 text-center md:text-left">
            Copyright © 2024 <Link className="text-pink-600">Kalles</Link> all
            rights reserved. Powered by Blueskytech
          </h6>
          <ul className="flex gap-6 ">
            {links.map(({ id, path, title }) => (
              <li key={id} className="hover:text-pink-600 transition-all ease-linear">
                <Link to={path}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
