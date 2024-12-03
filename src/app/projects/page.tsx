"use client";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import HeroSection from "../components/HeroSection";
import FAQ from "../components/FAQ";
import ProjectSection from "../components/ProjectSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import BackToTopBtn from "../components/BackToTopBtn";

export default function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".FAG-all", {
      opacity: 0,
      delay: 0.9,
      duration: 1.2,
      scrollTrigger: {
        trigger: ".FAG-all",
      },
    });
  });
  let data = [
    {
      question: "چگونه یک وبسایت بسازم؟",
      answer:
        "توضیحات در اینجا می‌آید. این بخش می‌تواند شامل مراحل ساخت وب‌سایت باشد.",
    },
    {
      question: "ساخت یک وبسایت چقدر زمان می‌برد؟",
      answer:
        "زمان ساخت به پیچیدگی پروژه بستگی دارد. به طور معمول چند هفته تا چند ماه ممکن است زمان ببرد.",
    },
    {
      question: "آیا فقط وبسایت‌های HTML می‌سازید؟",
      answer:
        "ما وبسایت‌هایی با زبان‌های مختلف توسعه می‌دهیم از جمله HTML، CSS، JavaScript، و PHP.",
    },
    {
      question: "آیا وبسایت من برای موبایل بهینه می‌شود؟",
      answer:
        "بله، همه وبسایت‌هایی که ما می‌سازیم کاملاً ریسپانسیو و برای دستگاه‌های موبایل بهینه هستند.",
    },
    {
      question: "هزینه ساخت وبسایت چقدر است؟",
      answer:
        "هزینه‌ها بستگی به ویژگی‌ها و پیچیدگی پروژه دارد. برای اطلاعات بیشتر با ما تماس بگیرید.",
    },
    {
      question: "آیا شما سایت من را برای من نگهداری خواهید کرد؟",
      answer: "بله، ما خدمات پشتیبانی و نگهداری وبسایت را نیز ارائه می‌دهیم.",
    },
    {
      question: "آیا شما SEO هم انجام می‌دهید؟",
      answer:
        "بله، ما به بهینه‌سازی موتور جستجو (SEO) نیز توجه ویژه‌ای داریم و وبسایت شما را برای جستجوهای گوگل بهینه می‌کنیم.",
    },
    {
      question: "آیا پس از تکمیل پروژه، آموزش خواهید داد؟",
      answer:
        "بله، ما آموزش‌هایی را برای نحوه استفاده از وبسایت و ابزارهای آن ارائه می‌دهیم.",
    },
  ];
  return (
    <div className="">
      <Navbar />
      <HeroSection title="پروژه ها" route="projects" />
      <ProjectSection />

      {/* FAQ */}
      <div className="flex flex-col pb-10 justify-center items-center">
        <button>
          <Link
            href="/projects"
            className="text-sm text-blue-600 border border-spacing-1 w-auto p-2 rounded-full"
          >
            سوالات رایج{" "}
          </Link>
        </button>
        <div className="flex container FAG-all mx-auto flex-col md:flex-row justify-center gap-8 mt-10 p-4">
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {data.slice(0, 4).map((item, index) => (
              <FAQ key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            {data.slice(4).map((item, index) => (
              <FAQ
                key={index + 4}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
      <BackToTopBtn/>
    </div>
  );
}
