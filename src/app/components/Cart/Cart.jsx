"use client";
import React, { useState } from "react";
import Backdrop from "../Backdrop/Backdrop";
import { Cross2Icon } from "@radix-ui/react-icons";
import { motion, AnimatePresence } from "framer-motion";

const slideIn = {
  hidden: { x: "350px", opacity: 0 },
  visible: { x: "0", opacity: 1 },
  exit: { x: "-350px", opacity: 0 },
};

export default function Cart({ closeCart, openState }) {
  const [itemCount, setItemCount] = useState(0);
  return (
    <Backdrop onClick={closeCart} className="overflow-hidden">
      <motion.div
        variants={slideIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ ease: "linear" }}
        className=" bg-slate-50 absolute h-full z-20 right-0 w-[350px] top-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col">
          <div className="flex justify-between py-4 px-4 ">
            <h3 className="text-2xl">Shopping Cart</h3>
            <button onClick={closeCart}>
              <Cross2Icon className="w-6 h-6"></Cross2Icon>
            </button>
          </div>
          <div className="mx-4">
            {itemCount == 0 && <h1>Your cart is empty!</h1>}
          </div>
        </div>
      </motion.div>
    </Backdrop>
  );
}
