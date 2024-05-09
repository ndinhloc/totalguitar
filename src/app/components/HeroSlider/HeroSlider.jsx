"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const slides = ["/hero1.webp", "/hero2.webp", "/hero3.webp", "/hero4.webp"];

function HeroSlider() {
  return (
    <div className="">
      <Carousel
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        className="w-3/4 mx-auto"
      >
        <CarouselContent>
          {slides.map((i) => (
            <CarouselItem key={i}>
              <Image
                src={i}
                alt={i}
                width={3840}
                height={1800}
                className="w-full object-contain"
              ></Image>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default HeroSlider;
