import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Footer() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".footer-div1", {
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-div1",
      },
    });
    gsap.from(".footer-div2", {
      opacity: 0,
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-div2",
      },
    });
    gsap.from(".footer-div3", {
      opacity: 0,
      delay: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-div3",
      },
    });
    gsap.from(".footer-div4", {
      opacity: 0,
      delay: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-div4",
      },
    });
  });
  return (
    <div className="footer bg-[#14183e]">
      <div className="max-w-[1400px] mx-auto">
        <div className="   flex flex-wrap ">
          <div className="footer-div1 w-full lg:w-1/4 md:w-1/2 p-4 md:p-8 flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-white font-yekBold">
              NOFAZCO
            </h2>
            <p className="text-gray-500 text-justify">
              نوآوری فناوری آینده زیبا - هوش مصنوعی و نرم‌افزار. اینجا می‌توانید
              درباره خدمات و محصولات پیشرفته ما بخوانید.
            </p>
          </div>

          <div className="footer-div2 w-full lg:w-1/4 md:w-1/2 p-4 md:p-8 flex flex-col gap-4">
            <h3 className="text-white text-xl font-semibold font-yekBold">
              تماس با ما
            </h3>
            <div className="flex gap-2">
              <FaLocationDot className="text-gray-500" />
              <span className="text-gray-500">خیابان نمونه، تهران، ایران</span>
            </div>
            <div className="flex gap-2">
              <FaPhoneAlt className="text-gray-500" />
              <span className="text-gray-500"> +021 123 45678</span>
            </div>
            <div className="flex gap-2">
              <MdEmail className="text-gray-500" />
              <span className="text-gray-500">nofazco@gmail.com </span>
            </div>
            <div className="flex gap-2 flex-wrap ">
              <Link
                href="/"
                className="w-8 h-8 p-2 ring-gray-500 rounded-full ring-1 text-gray-500 hover:text-white transition hover:ring-white  cursor-pointer"
              >
                <FaTwitter />
              </Link>
              <Link
                href="/"
                className="w-8 h-8 p-2 ring-gray-500 rounded-full ring-1 text-gray-500 hover:text-white hover:ring-white transition cursor-pointer"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="/"
                className="w-8 h-8 p-2 ring-gray-500 rounded-full ring-1 text-gray-500 hover:text-white hover:ring-white transition cursor-pointer"
              >
                <RiInstagramFill />
              </Link>
              <Link
                href="/"
                className="w-8 h-8 p-2 ring-gray-500 rounded-full ring-1 text-gray-500 hover:text-white hover:ring-white transition cursor-pointer"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>

          <div className="footer-div3 w-full lg:w-1/4 md:w-1/2 p-4 md:p-8 flex flex-col gap-4">
            <h3 className="text-white text-xl font-semibold font-yekBold">
              لینک‌های پرطرفدار
            </h3>
            <Link
              className="flex gap-2 flex-wrap items-center footer-links  text-gray-500 hover:text-white transition-all"
              href="/about"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">درباره ما</span>
            </Link>

            <Link
              className="flex gap-2 flex-wrap items-center footer-links  text-gray-500 hover:text-white transition-all"
              href="/contact"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition"> تماس با ما</span>
            </Link>

            <Link
              className="flex gap-2 flex-wrap items-center footer-links  text-gray-500 hover:text-white transition-all"
              href="/"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition"> سیاست و حریم خصوصی</span>
            </Link>

            <Link
              className="flex gap-2 flex-wrap items-center footer-links  text-gray-500 hover:text-white transition-all"
              href="/"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition"> شرایت و مقررات</span>
            </Link>

            <Link
              className="flex gap-2 flex-wrap items-center footer-links  text-gray-500 hover:text-white transition-all"
              href="/"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">فرصت هایه شغلی </span>
            </Link>
          </div>

          <div className="footer-div4 w-full lg:w-1/4 md:w-1/2 p-4 md:p-8 flex flex-col gap-4">
            <h3 className="text-white text-xl font-semibold font-yekBold">
              خدمات ما
            </h3>
            <Link
              className="flex gap-2 items-center footer-links text-gray-500 hover:text-white transition-all"
              href="/ai-products"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">
                پیاده‌سازی هوش مصنوعی در محصولات شما
              </span>
            </Link>

            <Link
              className="flex gap-2 items-center footer-links text-gray-500 hover:text-white transition-all"
              href="/ai-services"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">
                پیاده‌سازی هوش مصنوعی در خدمات شما
              </span>
            </Link>

            <Link
              className="flex gap-2 items-center footer-links text-gray-500 hover:text-white transition-all"
              href="/ai-processes"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">
                هوش مصنوعی در فرآیندهای سازمانی و ستادی
              </span>
            </Link>

            <Link
              className="flex gap-2 items-center footer-links text-gray-500 hover:text-white transition-all"
              href="/ai-operations"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">هوش مصنوعی در عملیات سازمانی</span>
            </Link>

            <Link
              className="flex gap-2 items-center footer-links text-gray-500 hover:text-white transition-all"
              href="/consultation"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">
                مشاوره آنلاین و حضوری با مدیر توسعه نرم‌افزار و مدیرعامل
              </span>
            </Link>

            <Link
              className="flex gap-2 items-center footer-links text-gray-500 hover:text-white transition-all"
              href="/training"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">مشاوره و آموزش</span>
            </Link>

            <Link
              className="flex gap-2 items-center footer-links text-gray-500 hover:text-white transition-all"
              href="/ai-software"
            >
              <IoIosArrowBack className="transition" />
              <span className="transition">تولید نرم‌افزارهای هوش مصنوعی</span>
            </Link>
          </div>
        </div>
        <div className="w-[95%] mx-auto h-[1px] bg-gray-500"></div>
        <div
          className="text-gray-500 p-4 flex flex-col md:w-[95%] md:mx-auto md:px-0 justify-center items-center md:flex-row  md:justify-between 
      "
        >
          <div className="flex flex-wrap mt-3 ">
            <Link
              href="/"
              className="border-r  hover:text-white transition text-sm border-r-gray-500 px-4"
            >
              خانه
            </Link>
            <Link
              href="/"
              className="border-r hover:text-white transition  text-sm border-r-gray-500 px-4"
            >
              حریم خصوصی
            </Link>

            <Link
              href="/"
              className="border-r hover:text-white transition  text-sm border-r-gray-500 px-4"
            >
              راهنما پرسش‌های متداول
            </Link>
          </div>
          <div className="text-sm mt-3">
            کلیه حقوق محفوظ است. طراحی شده توسط <Link href="#">NOFAZCO</Link>©
          </div>
        </div>
      </div>
    </div>
  );
}
