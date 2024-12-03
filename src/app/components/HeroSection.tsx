"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function HeroSection({ title, route }) {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".text-hero", {
      opacity: 0,
      x: 450,
      delay: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: ".text-hero",
      },
    });
  });

  return (
    <div className="bg-primary bg-blue">
      <div className="hero-section-contact container mx-auto  flex flex-col justify-between md:flex-row md:justify-around items-center h-screen md:h-[400px]">
        <div className="text-white mt-28 md:mt-0 flex flex-col gap-5 items-center justify-center ">
          <h1 className="font-semibold text-[50px] font-yekBold transition-transform duration-1000 text-hero">
            {title}
          </h1>
          <div className="flex gap-2">
            <Link href={`/${route}`}>{title}</Link>
            <span>/</span>
            <Link href="/">خانه</Link>
          </div>
        </div>
        <Image
          width={300} 
          height={300}
          quality={100} 
          priority
          alt="ربات"
          src="/hero-img.png"
          className="self-end block mx-auto md:inline md:mx-0 md:w-[350px] md:h-[300px] "
        />
      </div>
    </div>
  );
}
