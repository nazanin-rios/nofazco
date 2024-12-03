import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function Newsletter() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".text-content", {
      opacity: 0,
      x: 20,
      delay: 0.5,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".text-content",
      },
    });
    gsap.from(".img-newsletter", {
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".footer-div",
      },
    });
  });
  return (
    <div className="bg-blue relative md:h-[400px] flex justify-between md:flex-row py-8 flex-col-reverse  items-center">
      <div className=" w-[100%] text-content  md:w-2/3 flex gap-4 items-start container mr-auto flex-col ">
        <div className="mr-[10%] md:mr-[15%]">
          <Link
            href="/"
            className="text-sm text-gray-200 border border-spacing-1 w-auto mb-4 p-2 rounded-full"
          >
            خبرنامه
          </Link>
          <p className="mt-4 text-white font-semibold text-3xl my-5">
            بیایید در خبرنامه عضو شویم
          </p>
        </div>
        <div className="flex  items-center justify-center w-full ">
          <form className="bg-white flex relative  rounded-full w-[90%] md:w-[70%] overflow-hidden p-3">
            <input
              type="email"
              placeholder="ایمیل خود را وارد کنید"
              className="outline-none w-[80%]"
            />
            <button type="submit" className="absolute left-6 ">
              <FaTelegramPlane className="text-primary text-2xl   " />
            </button>
          </form>
        </div>
        <p className="text-gray-300 mr-[10%] md:mr-[15%]">
          دسته‌بندی شده برای ارسال اطلاعات و اخبار
        </p>
      </div>
      <div className="md:w-1/3 img-newsletter relative w-full flex justify-end items-center">
        <Image
          width={600}
          height={600}
          quality={100}
          priority
          src="/newsletter.png"
          alt="دست ربات"
          className="w-[70%] md:w-[450px] md:h-[auto] "
        />
      </div>
    </div>
  );
}
