import Image from "next/image";
import HeroSlider from "./components/HeroSlider/HeroSlider";
// import { PRODUCTS } from "../constants/data";
import ProductCard from "./components/ProductCard/ProductCard";
const PRODUCTS = [
  {
    name: "Gibson Les Paul Special Double Cut - 1999 - Ebony",
    price: "65.000.000₫",
    img1: "/lespaul-black-1.webp",
    img2: "/lespaul-black-2.webp",
  },
  {
    name: "Gibson Les Paul Special Double Cut - 1999 - Ebony",
    price: "65.000.000₫",
    img1: "/lespaul-black-1.webp",
    img2: "/lespaul-black-2.webp",
  },
  {
    name: "Gibson Les Paul Special Double Cut - 1999 - Ebony",
    price: "65.000.000₫",
    img1: "/lespaul-black-1.webp",
    img2: "/lespaul-black-2.webp",
  },
  {
    name: "Gibson Les Paul Special Double Cut - 1999 - Ebony",
    price: "65.000.000₫",
    img1: "/lespaul-black-1.webp",
    img2: "/lespaul-black-2.webp",
  },
  {
    name: "Gibson Les Paul Special Double Cut - 1999 - Ebony",
    price: "65.000.000₫",
    img1: "/lespaul-black-1.webp",
    img2: "/lespaul-black-2.webp",
  },
  {
    name: "Gibson Les Paul Special Double Cut - 1999 - Ebony",
    price: "65.000.000₫",
    img1: "/lespaul-black-1.webp",
    img2: "/lespaul-black-2.webp",
  },
];

export default function Home() {
  return (
    <div className="">
      <div className="">
        <HeroSlider></HeroSlider>
      </div>
      <div className="w-3/4 mx-auto">
        <h3 className="text-3xl text-center my-20">New Arrivals</h3>
        <div className="flex justify-between gap-x-2">
          {PRODUCTS?.map((item) => (
            <ProductCard key={item.name} item={item}></ProductCard>
          ))}
        </div>
      </div>
    </div>
  );
}
