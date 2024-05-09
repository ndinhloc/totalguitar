import Image from "next/image";
import React from "react";

export default function ProductCard({ item }) {
  return (
    <div>
      <div className=" h-[360px] w-full relative shadow my-10 group overflow-hidden">
        <div className="absolute right-2 top-2 flex flex-col gap-y-2 z-10">
          <button className="w-[40px] h-[40px] rounded-full bg-slate-100  invisible group-hover:visible opacity-0 transition-all group-hover:opacity-100 duration-300 hover:bg-black hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
          <button className="w-[40px] h-[40px] rounded-full bg-slate-100  invisible group-hover:visible opacity-0 transition-all group-hover:opacity-100 duration-300 hover:bg-black hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 mx-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 h-10 w-5/6">
          <button className="h-full w-full rounded  bg-slate-100  invisible group-hover:visible opacity-0 transition-all group-hover:opacity-100 duration-300 hover:bg-black hover:text-white">
            <p>Add to Cart</p>
          </button>
        </div>
        <Image
          src={item.img1}
          alt=""
          width={553}
          height={640}
          className="object-cover w-full h-full"
        ></Image>
        <Image
          src={item.img2}
          alt=""
          width={553}
          height={640}
          className="object-cover w-full max-w-full h-full absolute top-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all group-hover:size-[105%] duration-500"
        ></Image>
      </div>
      <p className="text-lg">{item.name}</p>
      <p className="mt-2 font-light">{item.price}</p>
    </div>
  );
}
