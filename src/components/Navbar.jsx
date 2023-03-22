import Image from "next/image";
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Button from "../components/Button";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "PORTFOLIO", link: "/" },
    { name: "CONTACT", link: "/" },
    // { name: "BLOGS", link: "/" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            {/* <Image className="logo-image" alt="logo-image" /> */}
          </span>
          Betachops
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-black absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-[60px] " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-md md:my-0 my-7 font-[nunito]"
            >
              <a
                href={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500 "
              >
                {link.name}
              </a>
            </li>
          ))}
          <Button>Shop Now </Button>
          <div className="text-black text-3xl md:px-6 py-4">
            <AiOutlineShoppingCart />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
