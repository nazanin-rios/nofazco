"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { RiMenu5Fill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full py-3  z-[1002] transition-all duration-500 ${
        isFixed
          ? "fixed top-0 bg-gray-800 margin-animate"
          : " bg-transparent absolute top-0  bg-blue-700"
      }`}
    >
      <div className="container mx-auto md:px-4">
        <nav className="flex items-center justify-between py-3">
          {/* Hamburger Menu for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white lg:hidden focus:outline-none"
          >
            <RiMenu5Fill size={24} className="mr-2"/>
          </button>

          {/* Links for Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
          <button className="text-white font-semibold transition-all hover:text-opacity-100 md:ml-3 text-opacity-70">
          <IoSearch size={20} />

            </button>
            <Link
              href="/"
              className="text-white font-semibold transition-all hover:text-opacity-100 md:ml-3 text-opacity-70"
            >
              خانه
            </Link>
            <Link
              href="/about"
              className="text-white font-semibold transition-all hover:text-opacity-100 text-opacity-70"
            >
              درباره ما
            </Link>
            <Link
              href="/services"
              className="text-white font-semibold transition-all hover:text-opacity-100 text-opacity-70"
            >
              خدمات
            </Link>
            <Link
              href="/projects"
              className="text-white font-semibold transition-all hover:text-opacity-100 text-opacity-70"
            >
              پروژه‌ها
            </Link>
            <Link
              href="/contact"
              className="text-white font-semibold hover:text-opacity-100 text-opacity-70"
            >
              تماس
            </Link>
 
          </div>
          {/* Logo */}
          <Link href="/" className="text-white text-2xl ml-2 font-bold">
            <span className="text-gray-800">.</span>NOFAZCO
          </Link>
        </nav>

        {/* Links for Mobile */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex w-full bg-[#1156aa] py-4 pr-2 flex-col space-y-4 mt-4">
            <Link
              href="/"
              className="text-white hover:text-opacity-100 text-opacity-70"
            >
              خانه
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-opacity-100 text-opacity-70"
            >
              درباره
            </Link>
            <Link
              href="/services"
              className="text-white hover:text-opacity-100 text-opacity-70"
            >
              خدمات
            </Link>
            <Link
              href="/projects"
              className="text-white hover:text-opacity-100 text-opacity-70"
            >
              پروژه‌ها
            </Link>
            <Link
              href="/contact"
              className="text-white hover:text-opacity-100 text-opacity-70"
            >
              تماس
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
