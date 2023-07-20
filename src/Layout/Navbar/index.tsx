import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsCart4, BsTelephone } from "react-icons/bs";
import { IoReorderThree } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router";
import { links } from "../../utils/data";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);

  //handling mobile nav
  const handleMobile = () => {
    setMobile(!mobile);
  };

  return (
    <div className="w-full fixed z-20 font-inter">
      <div className="flex flex-col gap-y-2 md:gap-0 md:flex-row md:justify-between items-center py-2 px-10 bg-primary text-white text-xs">
        <span className="flex gap-x-4 items-center">
          <BsTelephone /> <p>+026738482972</p>
        </span>
        <span className="hidden md:block">
          <p>Get 50% on Selected Items | Shop Now</p>
        </span>
        <div className="flex gap-x-5 md:gap-x-2">
          <span className="flex items-center gap-x-1">
            <p>Eng</p>
            <RiArrowDropDownLine className="text-2xl" />
          </span>
          <span className="flex items-center gap-x-1">
            <p>Location</p>
            <RiArrowDropDownLine className="text-2xl" />
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center bg-white py-4 border border-black px-5 lg:px-12">
        <span className="flex items-center gap-x-1 font-semibold text-2xl text-primary cursor-pointer">
          <img
            onClick={() => navigate("/")}
            src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg"
            alt="logo"
          />
        </span>
        <span className="items-center hidden lg:flex lg:gap-x-5 xl:gap-x-10 ">
          {links.map((link) => (
            <ul key={link.id} className="flex gap-x-10">
              <li className="text-gray-500 text-lg hover:text-primary font-semibold cursor-pointer">
                {link.title}
              </li>
            </ul>
          ))}
        </span>
        <span className="hidden xl:block">
          <div className="relative">
            <input
              type="search"
              id="default-search"
              className="block px-4 py-1 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Product"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </span>
        <div className="hidden md:flex items-center md:gap-x-10 lg:gap-x-3 font-semibold">
          <span className="flex items-center gap-x-1.5 cursor-pointer">
            <AiOutlineUser /> <p className="hover:text-orange-500">Account</p>
          </span>

          <span className="flex items-center gap-x-1.5 cursor-pointer">
            <BsCart4 />
            <p className="hover:text-orange-500">Cart</p>
          </span>
        </div>
        <div
          className={
            mobile ? "lg:hidden bg-slate-300" : "lg:hidden bg-transparent"
          }
        >
          <span className="text-3xl" onClick={handleMobile}>
            <IoReorderThree />
          </span>
        </div>
      </div>
      <div
        className={
          mobile
            ? "absolute top-[9rem] border border-black w-full rounded-2xl bg-white py-5 slideIn"
            : "slideOut hidden "
        }
      >
        {links.map((link) => (
          <ul key={link.id} className="flex flex-col">
            <li className="text-gray-500 text-lg hover:text-primary text-center py-2 font-semibold cursor-pointer">
              {link.title}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
