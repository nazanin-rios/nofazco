"use client";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const WhyUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".wyh-us-desc", {
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".wyh-us-desc",
      },
    });
    gsap.from(".wyh-us-img", {
      opacity: 0,
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".wyh-us-img",
      },
    });
  });

  const { ref: customersRef, inView: customersInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const { ref: projectsRef, inView: projectsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="bg-blue ">
      <div className="my-5 pt-5 md:flex-row flex flex-col-reverse container mx-auto">
        <div className="flex wyh-us-img items-end md:w-1/2">
          <Image
            src="/feature.png"
            width={600}
            height={600}
            quality={100}
            priority
            alt="robot"
            className="w-[80%] md:w-[95%] lg:w-[500px]"
          />
        </div>
        <div className="md:w-1/2 wyh-us-desc flex lg:justify-end">
          <div className="lg:w-5/6 flex flex-col gap-5 items-start p-4">
            <button>
              <Link
                href="/about"
                className="text-sm text-white border border-white border-spacing-1 w-auto p-2 rounded-full"
              >
                چرا ما را انتخاب کنید؟
              </Link>
            </button>
            <h2 className="text-3xl font-semibold font-yekBold text-white">
              ما بهترین‌ها در صنعت هوش مصنوعی با 10 سال تجربه هستیم
            </h2>
            <p className="text-white text-sm text-justify">
              ما با ارائه راه‌حل‌های هوش مصنوعی به کسب‌وکارها، به آن‌ها کمک
              می‌کنیم تا پیشرفت کنند و به اهداف خود دست یابند.
            </p>
            <div className="flex flex-col gap-2 ">
              <div className="flex items-center text-white gap-4 ">
                <FaCheckCircle size={28} />
                ما به کسب‌وکار شما کمک می‌کنیم تا بهره‌وری خود را افزایش دهید.
              </div>
              <div className="flex items-center text-white gap-4 ">
                <FaCheckCircle size={28} />
                ما توانایی‌های هوش مصنوعی را به بهترین نحو در اختیار شما قرار
                می‌دهیم.
              </div>
              <div className="flex items-center text-white gap-4 ">
                <FaCheckCircle size={28} />
                ما بهترین راه‌حل‌های هوش مصنوعی را برای مشتریان خود ارائه
                می‌دهیم.
              </div>
            </div>
            <div className="flex justify-between flex-wrap w-full mt-8">
              <div
                className="flex items-center backdrop p-2 rounded-md w-[48%] gap-3"
                ref={customersRef} // اختصاص Ref برای شمارش مشتریان
              >
                <IoPeople size={44} color="white" />
                <div className="flex flex-col items-start text-white gap-2">
                  <span className="font-semibold text-2xl font-yekBold">
                    {customersInView && (
                      <CountUp start={0} end={20} className="" duration={2} />
                    )}
                  </span>
                  <span className="text-sm">مشتریان راضی</span>
                </div>
              </div>
              <div
                className="flex items-center backdrop p-2 rounded-md w-[48%] gap-3"
                ref={projectsRef} // اختصاص Ref برای شمارش پروژه‌ها
              >
                <FaCheck size={44} color="white" />
                <div className="flex flex-col items-start text-white gap-2">
                  <span className="font-semibold text-2xl font-yekBold">
                    {projectsInView && (
                      <CountUp start={0} end={20} duration={2} />
                    )}
                  </span>
                  <span className="text-sm">پروژه‌های تکمیل‌شده</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
