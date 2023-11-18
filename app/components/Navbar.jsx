"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.svg";

import { HiBars3 } from "react-icons/hi2";
import { GrClose } from "react-icons/gr";
import { BiChevronRight } from "react-icons/bi";
import { useEffect, useState } from "react";

const navigationMenu = [
  {
    href: "#",
    label: "Home",
  },
  {
    href: "#",
    label: "How we work",
  },
  {
    href: "#",
    label: "Our mission",
  },
  {
    href: "#",
    label: "About",
  },
  {
    href: "#",
    label: "Contact",
  },
];

const Navbar = () => {
  let height = window.innerHeight;
  let width = window.innerWidth;
  const [navOpen, setNavOpen] = useState(false);
  const [dimensions, setDimensions] = useState(height, width);

  const mobileMenuHandler = () => {
    setNavOpen(!navOpen);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return null;
    }
    function handleResize() {
      setDimensions({
        height,
        width,
      });
      if (dimensions.width > 768 && navOpen) {
        setNavOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dimensions.width, height, navOpen, width]);

  return (
    <>
      <header className="py-7">
        <div className="container px-4 mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <Link href={"/"}>
                {/**Logo */}
                <Image src={logo} width={157} height={30} alt="FamSec Logo" />
              </Link>
            </div>
            {/**Nav Menu */}
            <div className="hidden lg:block text-center">
              <ul className="flex space-x-7">
                {navigationMenu.map((item, idx) => (
                  <li key={item.label}>
                    <Link href={item?.href}>{item?.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/**CTA button */}
            <div>
              <Link
                href={"#"}
                className="px-5 py-4 hidden lg:inline-block bg-primary text-white rounded-lg"
              >
                Get Started
              </Link>

              <button className="block lg:hidden" onClick={mobileMenuHandler}>
                <HiBars3 className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/**For Mobile/Tablets Nav Menu*/}
      <div
        className={
          navOpen
            ? "py-0 block fixed w-screen z-[9999]"
            : "py-0 hidden w-screen z-[9999]"
        }
      >
        <div
          className="h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50"
          onClick={mobileMenuHandler}
        ></div>
        <div className="bg-white w-[380px] top-0 right-0 z-[9999] h-screen fixed">
          <div className="h-14 px-10 border-b flex items-center">
            <button
              className="flex items-center space-x-3"
              onClick={mobileMenuHandler}
            >
              <GrClose />
              <span>Close</span>
            </button>
          </div>
          <div className="h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth">
            <ul className="block mb-7">
              {navigationMenu.map((item, idx) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-primary"
                  >
                    <span>{item.label}</span>
                    <span className="left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3">
                      <BiChevronRight className="text-xl" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
