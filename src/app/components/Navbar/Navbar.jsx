"use client";
import Image from "next/image";
import classes from "./style.module.css";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else setHidden(false);
  });

  const [cart, setCart] = useState(false);
  const openCart = () => {
    setCart(true);
  };
  const closeCart = () => {
    setCart(false);
  };
  return (
    <motion.div
      variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full shadow-sm sticky top-0 z-10 bg-white"
    >
      <nav className="flex justify-between items-center mx-auto relative h-20 w-3/4 border-b-[1px] border-[#dbdbdb]">
        <ul className="flex gap-x-10 text-lg">
          <li className="relative group">
            <Link href={"/"} className=" group relative">
              <div className="flex items-center gap-x-2">
                <p>Shop by Category</p>
                <ChevronDownIcon className="group-hover:rotate-180 transition duration-200"></ChevronDownIcon>
              </div>
              <span className=" absolute -bot-4 mt-1 w-0 h-1 transition-all duration-500 group-hover:w-full bg-black"></span>
            </Link>

            <ul className="top-3 absolute z-10 invisible opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:visible bg-white flex flex-col gap-y-4 mt-6 shadow-lg w-48 pl-6 py-6 -ml-6 ">
              <li>Electric Guitar</li>
              <li>Electric Bass</li>
              <li>Effects & Pedals</li>
              <li>Accessories</li>
              <li>Strings</li>
              <li>Amplifier</li>
              <li>Cabinet</li>
              <li>Acoustic Guitar</li>
              <li>Classic Guitar</li>
            </ul>
          </li>
          <li>
            <Link href={"/"} className="flex items-center gap-x-2">
              Shop by Brand<ChevronDownIcon></ChevronDownIcon>
            </Link>
          </li>
          <li>
            <Link href={"/"} className="">
              About Us
            </Link>
          </li>
          <li>
            <Link href={"/"} className=""></Link>
          </li>
        </ul>

        <div className={classes.logo}>
          <Image
            src={"logo.svg"}
            alt=""
            width={200}
            height={150}
            className=""
          ></Image>
        </div>
        <div className="flex gap-x-10">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </button>
          <button onClick={openCart}>
            <svg
              className="w-6 h-6 text-black dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.2"
                d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
              />
            </svg>
          </button>
        </div>
      </nav>
      {cart && <Cart closeCart={closeCart} cartState={cart}></Cart>}
    </motion.div>
  );
}
