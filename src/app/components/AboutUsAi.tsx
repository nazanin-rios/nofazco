import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const AboutUsAi = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".about-us-ai-img", {
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-us-ai-img",
      },
    });
    gsap.from(".about-us-ai-desc", {
      opacity: 0,
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-us-ai-desc",
      },
    });
  });

  return (
    <div className="bg-white">
      <div className="flex container mx-auto flex-col-reverse md:flex-row justify-center items-center py-10 gap-10 ">
        <div className="flex about-us-ai-desc md:justify-end md:w-1/2 ">
          <div className="pt-10 flex flex-col items-start gap-4 md:max-w-[500px]  px-4 ">
            <button>
              <Link
                href="/about"
                className="text-sm text-blue-600 border border-spacing-1 w-auto p-2 rounded-full"
              >
                درباره ما
              </Link>
            </button>
            <h2 className="text-3xl font-semibold font-yekBold ">
              ما کسب‌وکار شما را با هوش مصنوعی هوشمندتر می‌کنیم
            </h2>
            <p className="text-sm text-justify ">
              ما در شرکت خود به ارائه خدمات نوآورانه در حوزه هوش مصنوعی
              می‌پردازیم. هدف ما این است که با استفاده از فناوری‌های پیشرفته،
              کسب‌وکارها را در مسیر رشد و بهبود عملکرد هدایت کنیم. این متن
              به‌عنوان نمونه برای توضیح خدمات و ویژگی‌های شرکت در اینجا نمایش
              داده شده است.
            </p>
            <p className="text-sm text-justify ">
              با استفاده از راه‌حل‌های هوش مصنوعی، به شما کمک می‌کنیم تا
              فرآیندها را بهینه کرده و بهره‌وری کسب‌وکار خود را افزایش دهید. تیم
              ما با تجربه و تخصص بالا، بهترین راهکارها را برای نیازهای خاص شما
              ارائه می‌دهد.
            </p>
            <div className=" ">
              <div className="flex gap-10 mb-5">
                <div className=" flex gap-3 flex-col ">
                  <span className=" flex gap-2 items-center justify-start ">
                    <FaCheck className="text-primary" /> برنده جوایز
                  </span>
                  <span className=" flex gap-2 items-center ">
                    <FaCheck className="text-primary" />
                    پرسنل حرفه‌ای
                  </span>
                </div>
                <div className=" flex gap-3 flex-col justify-start">
                  <span className=" flex gap-2 items-center ">
                    <FaCheck className="text-primary" />
                    پشتیبانی ۲۴/۷
                  </span>
                  <span className=" flex gap-2 items-center ">
                    <FaCheck className="text-primary" />
                    قیمت‌های منصفانه
                  </span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <Link href="/about" className="">
                  <button className="hover:bg-[#1362C4] bg-[#1771df] transition duration-300 text-white rounded-full py-2 px-4">
                    مطالعه بیشتر
                  </button>
                </Link>
                <div className="flex gap-2 flex-wrap ">
                  <Link
                    href="/"
                    className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary transition duration-500  cursor-pointer"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="/"
                    className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary duration-500 transition cursor-pointer"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    href="/"
                    className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary duration-500 transition cursor-pointer"
                  >
                    <RiInstagramFill />
                  </Link>
                  <Link
                    href="/"
                    className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary duration-500 transition cursor-pointer"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 about-us-ai-img w-full flex justify-center items-center">
          <Image
                 width={600}
                 height={600}
                 quality={100} 
                 priority 
            alt="robot"
            className="w-[70%]"
            src="/bg-about.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsAi;
