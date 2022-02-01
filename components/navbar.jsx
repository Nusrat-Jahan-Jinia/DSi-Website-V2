import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const burgerMenuOperner = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/*  Header-xl */}
      <div className="hidden md:block">
        <div className="mx-auto mid-column ">
          <nav className="sm:flex justify-between sm:items-center">
            <div className="flex justify-between py-2">
              <Link href="/">
                <a title="Go back to Home">
                  <img
                    alt="Logo of Dynamic Solution Innovators Ltd."
                    src="/images/Group.png"
                    width="86"
                    height="49"
                  />
                </a>
              </Link>
              <div className="flex sm:hidden">
                <button type="button">
                  <img
                    className="h-8 w-8 justify-between"
                    src="images/hamburger.svg"
                    alt="Menu"
                  />
                </button>
              </div>
            </div>
            <div className="px-4 pt-2 pb-4 sm:flex rounded-lg bg-opacity-90">
              <Link href="/projects/1/">
                <a className="block text-xl hover:text-royalblue border-b-4 border-transparent hover:border-yellow-btn font-headline sm:inline-block font-semibold px-2 md:px-2 pb-2 lg:px-4 text-blue-600">
                  Projects
                </a>
              </Link>
              <Link href="/whitepapers/1">
                <a className="block text-xl hover:text-royalblue border-b-4 border-transparent hover:border-yellow-btn font-headline sm:inline-block font-semibold px-2 md:px-2 pb-2 lg:px-4">
                  White Papers
                </a>
              </Link>
              <Link href="/casestudies/1">
                <a className="block text-xl hover:text-royalblue border-b-4 border-transparent hover:border-yellow-btn font-headline sm:inline-block font-semibold px-2 md:px-2 pb-2 lg:px-4">
                  Case Studies
                </a>
              </Link>
              <Link href="/people/1">
                <a className="block text-xl hover:text-royalblue border-b-4 border-transparent hover:border-yellow-btn font-headline sm:inline-block font-semibold px-2 md:px-2 pb-2 lg:px-4">
                  People
                </a>
              </Link>
              <Link href="/campus">
                <a className="block text-xl hover:text-royalblue border-b-4 border-transparent hover:border-yellow-btn font-headline sm:inline-block font-semibold px-2 md:px-2 pb-2 lg:px-4">
                  Campus
                </a>
              </Link>
              <Link href="/news/1">
                <a className="block text-xl hover:text-royalblue border-b-4 border-transparent hover:border-yellow-btn font-headline sm:inline-block font-semibold px-2 md:px-2 pb-2 lg:px-4">
                  News
                </a>
              </Link>
              <Link href="/blogs/1">
                <a className="block text-xl hover:text-royalblue border-b-4 border-transparent hover:border-yellow-btn font-headline sm:inline-block font-semibold px-2 md:px-2 pb-2 lg:px-4">
                  Blog
                </a>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      {/* Header-sm */}

      <div className="bg-right-top bg-no-repeat block md:hidden mobile-menu">
        <div className="mx-auto xl:max-w-screen-lg ">
          <div className="md:flex justify-between sm:items-center">
            <div className="flex justify-between items-center px-4 py-2">
              <div>
                <Link href="/">
                  <a onClick={() => setMenuOpen(false)}>
                    <img
                      className="h-8"
                      src="/images/Logo_nav.png"
                      alt="Dynamic Solution Innovators Ltd."
                      width="60"
                    />
                  </a>
                </Link>
              </div>
              <div
                className="flex md:hidden"
                id="burger"
                onClick={burgerMenuOperner}
              >
                <svg
                  className="w-8 h-8 cursor-pointer p-1"
                  fill="none"
                  stroke="#ffffff"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </div>

            <div
              className={`shadow-2xl border-b-2 border-gray-300 w-full absolute z-10 bg-white divide-y-2 divide-gray-300 divide-solid ${
                !menuOpen ? "hidden" : ""
              }`}
              id="menu"
            >
              <Link href="/projects/1/">
                <a onClick={() => setMenuOpen(false)} className="sm-nav-item">
                  Projects
                </a>
              </Link>
              <Link href="/whitepapers/1">
                <a onClick={() => setMenuOpen(false)} className="sm-nav-item">
                  White Papers
                </a>
              </Link>
              <Link href="/casestudies/1">
                <a onClick={() => setMenuOpen(false)} className="sm-nav-item">
                  Case Studies
                </a>
              </Link>
              <Link href="/people/1">
                <a onClick={() => setMenuOpen(false)} className="sm-nav-item">
                  People
                </a>
              </Link>
              <Link href="/campus">
                <a onClick={() => setMenuOpen(false)} className="sm-nav-item">
                  Campus
                </a>
              </Link>
              <Link href="/news/1">
                <a onClick={() => setMenuOpen(false)} className="sm-nav-item">
                  News
                </a>
              </Link>
              <Link href="/blogs/1">
                <a onClick={() => setMenuOpen(false)} className="sm-nav-item">
                  Blog
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
