"use client";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import BackToTopBtn from "../components/BackToTopBtn";

export default function Contact() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".form", {
      opacity: 0,
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".form",
      },
    });
  });
  return (
    <div className=" ">
      <Navbar />
      <HeroSection title="تماس با ما" route="contact" />
      {/* forms */}
      <div className="flex  justify-center py-12 gap-3 items-center  bg-gray-50 px-4">
        <div className="w-full max-w-2xl   rounded-lg p-6">
          <div className="text-center mb-8 flex flex-col gap-4">
            <button>
              <Link
                href="/"
                className="text-sm text-blue-600 border border-spacing-1 w-auto  p-2 rounded-full"
              >
                تماس با ما
              </Link>
            </button>
            <h2 className="text-2xl font-yekBold md:text-3xl text-gray-800 mt-2">
              اگر سوالی دارید، لطفاً با ما تماس بگیرید
            </h2>
            <p className="text-gray-500 mt-3 text-sm">
              دریافت کنید. <span className="text-blue-600">Ajax</span> و{" "}
              <span className="text-blue-600">PHP</span> فرم تماس در حال حاضر
              غیرفعال است. فرم تماس کارا و عملیاتی را در چند دقیقه با استفاده از
              کد، بسازید و{" "}
              <a
                href="#"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                دانلود کنید
              </a>
              .
            </p>
          </div>

          <form className="space-y-6 form">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-700">
                  نام شما
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 block w-full border outline-none border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-700">
                  ایمیل شما
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 block w-full border outline-none border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300"
                  placeholder="ایمیل خود را وارد کنید"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm text-gray-700">
                موضوع
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-3 block w-full border outline-none border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300"
                placeholder="موضوع پیام"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-gray-700">
                پیام
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-3 block w-full border outline-none  border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary transition-all duration-300"
                placeholder="پیام خود را بنویسید"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="w-full  px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                ارسال پیام
              </button>
            </div>
          </form>
        </div>
      </div>
      <Newsletter />
      <Footer />
      <BackToTopBtn/>
    </div>
  );
}
