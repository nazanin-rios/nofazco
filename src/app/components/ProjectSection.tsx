import BoxProject from "../components/BoxProject";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const ProjectSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".project-box-1", {
      opacity: 0,
      y: 20,
      delay: 0.4,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-box-1",
      },
    });
    gsap.from(".project-box-2", {
      opacity: 0,
      delay: 0.9,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-box-2",
      },
    });
    gsap.from(".project-box-3", {
      opacity: 0,
      y: 20,
      delay: 1.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".project-box-3",
      },
    });
  });

  return (
    <div className="flex flex-col items-center justify-center gap-4 my-8">
      <button>
        <Link
          href="/"
          className="text-sm text-blue-600 border border-spacing-1 w-auto  p-2 rounded-full"
        >
          مطالعه موردی
        </Link>
      </button>
      <p className="text-black font-semibold px-2 md:max-w-[420px] text-center text-xl md:text-3xl">
        کاوش در جدیدترین مطالعات موردی و پروژه‌های هوش مصنوعی ما
      </p>
      <div className="flex flex-col md:flex-row justify-center mt-9 p-5 gap-6 items-center w-full">
        <div className="project-box-1 overflow-hidden rounded-md">
          <BoxProject
            title="اتوماسیون رباتیک"
            img="/project-1.jpg"
            desc=" پروژه‌های پیشرفته در اتوماسیون رباتیک و کاربردهای آن"
            route="/projects"
          />
        </div>
        <div className="project-box-2 overflow-hidden rounded-md">
          <BoxProject
            title="یادگیری ماشین"
            img="/project-2.jpg"
            desc="پیشرفت‌های جدید در یادگیری ماشین و تحلیل داده‌ها"
            route="/projects"
          />
        </div>
        <div className="project-box-3 overflow-hidden rounded-md">
          <BoxProject
            title="تحلیل پیش بینی"
            img="/project-3.jpg"
            desc="کاربردهای تحلیل پیش‌بینی در صنایع مختلف"
            route="/projects"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
