"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function HomePageSlider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        navigation={true}
        autoplay={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper pb-0"
      >
        <div
          slot="container-start"
          className="parallax-bg bg-slider "
          data-swiper-parallax="-10%"
        ></div>
        {/* 1 */}
        <SwiperSlide className="h-full">
          <div className="flex flex-col-reverse pt-14 md:flex-row pb-0 px-4 gap-5 items-center h-full md:h-screen justify-between">
            <div
              className="subtitle items-end flex-col md:self-end pb-0 mt-10 md:mt-0 md:w-1/2 flex  justify-center md:justify-end  "
              data-swiper-parallax="-200"
            >
              <Image
                src="/hero-img.png"
                alt="robot"
                width={600}
                height={600}
                quality={100}
                priority
                className="md:w-[90%] "
              />
            </div>{" "}
            <div
              className="text md:w-1/2 w-full flex flex-col gap-4 items-end"
              data-swiper-parallax="-100"
            >
              <button>
                <Link
                  href="#"
                  className="text-sm text-white border border-white border-spacing-1 w-auto p-2 rounded-full"
                >
                  پیاده‌سازی هوش مصنوعی در خدمات شما
                </Link>
              </button>
              <h2 className="font-yekBold text-[35px]  w-full">
                پیاده‌سازی هوش مصنوعی در خدمات شما
              </h2>
              <p className="text-[16px]">
                با پیاده‌سازی هوش مصنوعی در خدمات شما، به بهینه‌سازی و افزایش
                دقت خدمات می‌پردازیم.
              </p>
              <div className=" flex flex-wrap gap-5">
                <Link href="/contact">
                  <button className=" transition duration-300 rounded-full py-4 px-8 border border-white text-white hover:bg-white hover:text-black">
                    تماس با ما
                  </button>
                </Link>
                <Link href="#">
                  <button className="bg-white hover:bg-gray-200 transition duration-300 rounded-full py-4 px-8 text-black ">
                    بیشتر بخوانید
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 2 */}
        <SwiperSlide>
          <div className="flex flex-col-reverse pt-14 md:flex-row pb-0 px-4 items-center h-full md:h-screen justify-between">
            <div
              className="subtitle  pb-4 mt-10  md:w-1/2 flex items-center justify-center  "
              data-swiper-parallax="-200"
            >
              <Image
                src="/app.png"
                alt="robot"
                width={600}
                height={600}
                quality={100}
                priority
                className="md:w-[90%] "
              />
            </div>{" "}
            <div
              className="text md:w-1/2 w-full flex flex-col gap-4 items-end"
              data-swiper-parallax="-100"
            >
              <button>
                <Link
                  href="#"
                  className="text-sm text-white border border-white border-spacing-1 w-auto p-2 rounded-full"
                >
                  تولید نرم‌افزارهای مبتنی بر هوش مصنوعی
                </Link>
              </button>
              <h2 className="font-yekBold text-[35px]  w-full">
                تولید نرم‌افزارهای مبتنی بر هوش مصنوعی
              </h2>
              <p className="text-[16px]">
                با استفاده از هوش مصنوعی، نرم‌افزارهای مبتنی بر داده‌های بزرگ و
                تحلیل‌های پیچیده برای حل مشکلات شما طراحی می‌شود.
              </p>
              <div className=" flex flex-wrap gap-5">
                <Link href="/contact">
                  <button className=" transition duration-300 rounded-full py-4 px-8 border border-white text-white hover:bg-white hover:text-black">
                    تماس با ما
                  </button>
                </Link>
                <Link href="#">
                  <button className="bg-white hover:bg-gray-200 transition duration-300 rounded-full py-4 px-8 text-black ">
                    بیشتر بخوانید
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 3 */}
        <SwiperSlide>
          <div className="flex flex-col-reverse pt-14 md:flex-row pb-0 px-4 items-center h-full md:h-screen justify-between">
            <div
              className="subtitle  pb-4 mt-10  md:w-1/2 flex items-center justify-center  "
              data-swiper-parallax="-200"
            >
              <Image
                src="/ai-company.png"
                alt="robot"
                width={600}
                height={600}
                quality={100}
                priority
                className="md:w-[90%] "
              />
            </div>{" "}
            <div
              className="text md:w-1/2 w-full flex flex-col gap-4 items-end"
              data-swiper-parallax="-100"
            >
              <button>
                <Link
                  href="#"
                  className="text-sm text-white border border-white border-spacing-1 w-auto p-2 rounded-full"
                >
                  پیاده‌سازی هوش مصنوعی در محصولات
                </Link>
              </button>
              <h2 className="font-yekBold text-[35px]  w-full">
                بهره‌برداری از هوش مصنوعی در طراحی و بهبود محصولات
              </h2>
              <p className="text-[16px]">
                با استفاده از فناوری‌های پیشرفته هوش مصنوعی، محصولات شما
                می‌توانند کارایی و عملکرد بهتری داشته باشند.
              </p>
              <div className=" flex flex-wrap gap-5">
                <Link href="/contact">
                  <button className=" transition duration-300 rounded-full py-4 px-8 border border-white text-white hover:bg-white hover:text-black">
                    تماس با ما
                  </button>
                </Link>
                <Link href="#">
                  <button className="bg-white hover:bg-gray-200 transition duration-300 rounded-full py-4 px-8 text-black ">
                    بیشتر بخوانید
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 4 */}
        <SwiperSlide>
          <div className="flex flex-col-reverse pt-14 md:flex-row pb-0 px-4 items-center h-full md:h-screen justify-between">
            <div
              className="subtitle  pb-4 mt-10  md:w-1/2 flex items-center justify-center  "
              data-swiper-parallax="-200"
            >
              <Image
                src="/company.png"
                alt="robot"
                width={600}
                height={600}
                quality={100}
                priority
                className="md:w-[90%] "
              />
            </div>{" "}
            <div
              className="text md:w-1/2 w-full flex flex-col gap-4 items-end"
              data-swiper-parallax="-100"
            >
              <button>
                <Link
                  href="#"
                  className="text-sm text-white border border-white border-spacing-1 w-auto p-2 rounded-full"
                >
                  هوش مصنوعی در فرآیندهای سازمانی و ستادی
                </Link>
              </button>
              <h2 className="font-yekBold text-[35px]  w-full">
                هوش مصنوعی در فرآیندهای سازمانی و ستادی
              </h2>
              <p className="text-[16px]">
                هوش مصنوعی می‌تواند فرآیندهای سازمانی را اتوماتیک کرده و به
                بهبود کارایی و بهره‌وری سازمان کمک کند.
              </p>
              <div className=" flex flex-wrap gap-5">
                <Link href="/contact">
                  <button className=" transition duration-300 rounded-full py-4 px-8 border border-white text-white hover:bg-white hover:text-black">
                    تماس با ما
                  </button>
                </Link>
                <Link href="#">
                  <button className="bg-white hover:bg-gray-200 transition duration-300 rounded-full py-4 px-8 text-black ">
                    بیشتر بخوانید
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* 5 */}
        <SwiperSlide>
          <div className="flex flex-col-reverse pt-14 md:flex-row pb-0 px-4 items-center h-full md:h-screen justify-between">
            <div
              className="subtitle  pb-4 mt-10  md:w-1/2 flex items-center justify-center  "
              data-swiper-parallax="-200"
            >
              <Image
                src="/amaliyat.png"
                alt="robot"
                width={600}
                height={600}
                quality={100}
                priority
                className="md:w-[90%] "
              />
            </div>{" "}
            <div
              className="text md:w-1/2 w-full flex flex-col gap-4 items-end"
              data-swiper-parallax="-100"
            >
              <button>
                <Link
                  href="#"
                  className="text-sm text-white border border-white border-spacing-1 w-auto p-2 rounded-full"
                >
                  هوش مصنوعی در عملیات سازمانی
                </Link>
              </button>
              <h2 className="font-yekBold text-[35px]  w-full">
                هوش مصنوعی در عملیات سازمانی
              </h2>
              <p className="text-[16px]">
                بهینه‌سازی و پیش‌بینی عملیات سازمانی با استفاده از هوش مصنوعی به
                افزایش دقت تصمیم‌گیری‌ها کمک می‌کند.
              </p>
              <div className=" flex flex-wrap gap-5">
                <Link href="/contact">
                  <button className=" transition duration-300 rounded-full py-4 px-8 border border-white text-white hover:bg-white hover:text-black">
                    تماس با ما
                  </button>
                </Link>
                <Link href="#">
                  <button className="bg-white hover:bg-gray-200 transition duration-300 rounded-full py-4 px-8 text-black ">
                    بیشتر بخوانید
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
