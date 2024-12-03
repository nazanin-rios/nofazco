const { default: Link } = require("next/link");
const { default: ServicesBox } = require("./ServicesBox");
import { FaRobot } from "react-icons/fa";
import { MdLibraryBooks } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";
import { BsRobot } from "react-icons/bs";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const ServicesSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".service-box1", {
      opacity: 0,
      delay: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: ".service-box1",
      },
    });
    gsap.from(".service-box2", {
      opacity: 0,
      delay: 0.6,
      duration: 1,
      scrollTrigger: {
        trigger: ".service-box2",
      },
    });
    gsap.from(".service-box3", {
      opacity: 0,
      delay: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: ".service-box3",
      },
    });
    gsap.from(".service-box4", {
      opacity: 0,
      delay: 1.2,
      duration: 1,
      scrollTrigger: {
        trigger: ".service-box4",
      },
    });
    gsap.from(".services-section-desc", {
      opacity: 0,
      delay: 0.8,
      duration: 1,
      scrollTrigger: {
        trigger: ".services-section-desc",
      },
    });
  });

  const data = [
    {
      id: 1,
      icon: <MdLibraryBooks size={25} />,
      title: "آموزش و علم",
      desc: "با استفاده از هوش مصنوعی، می‌توانیم به آموزش‌های دقیق‌تر و نتایج علمی معتبرتر دست یابیم.",
      route: "/services",
    },
    {
      id: 2,
      icon: <FaRobot size={25} />,
      title: "اتوماسیون رباتیک",
      desc: "اتوماسیون رباتیک برای بهبود فرایندهای کسب و کار، کاهش هزینه‌ها و افزایش بهره‌وری طراحی شده است.",
      route: "/services",
    },
    {
      id: 3,
      icon: <GiMaterialsScience size={25} />,
      title: "تحلیل پیش‌بینی",
      desc: "تحلیل پیش‌بینی به شما این امکان را می‌دهد که از داده‌های موجود برای پیش‌بینی آینده کسب و کار خود استفاده کنید.",
      route: "/services",
    },
    {
      id: 4,
      icon: <BsRobot size={25} />,
      title: "یادگیری ماشین",
      desc: "یادگیری ماشین به شما کمک می‌کند تا از داده‌های کسب و کار خود به نتایج دقیق‌تری برسید و تصمیم‌گیری بهتری داشته باشید.",
      route: "/services",
    },
  ];
  return (
    <div className="flex flex-col justify-between container lg:flex-row lg:w-full mx-auto items-center">
      <div className="lg:w-1/2 px-2 flex services-section-desc py-8 flex-col gap-5 justify-center items-center text-center">
        <button>
          <Link
            href="/services"
            className="text-sm text-blue-600 border border-spacing-1 w-auto p-2 rounded-full"
          >
            خدمات ما
          </Link>
        </button>
        <h2 className="font-semibold font-yekBold text-3xl md:max-w-[500px] ">
          راهکارهای هوش مصنوعی عالی برای کسب و کار شما
        </h2>
        <p className="text-gray-600 md:max-w-[500px] ">
          ما با ارائه راهکارهای هوش مصنوعی کمک می‌کنیم تا کسب‌وکار شما به سطوح
          جدیدی از بهره‌وری و نوآوری برسد. این راهکارها شامل اتوماسیون رباتیک،
          یادگیری ماشین و تحلیل پیش‌بینی است.
        </p>
        <div className="">
          <button className="hover:bg-[#1362C4] bg-[#1771df] transition duration-300 text-white rounded-full py-2 px-4">
            مطالعه بیشتر
          </button>
        </div>
      </div>
      <div className="py-5 flex flex-col md:flex-row gap-8 lg:w-1/2">
        <div className="flex flex-col  md:flex-col mt-14 gap-6 w-full md:w-1/2 justify-center items-center">
          <div className="service-box1 flex justify-center items-center">
            <ServicesBox
              key={data[0].id}
              icon={data[0].icon}
              title={data[0].title}
              desc={data[0].desc}
              route={data[0].route}
            />
          </div>
          <div className="service-box2 flex justify-center items-center">
            <ServicesBox
              key={data[1].id}
              icon={data[1].icon}
              title={data[1].title}
              desc={data[1].desc}
              route={data[1].route}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-col justify-center items-center gap-6 w-full md:w-1/2">
          <div className="service-box4 flex justify-center items-center">
            <ServicesBox
              key={data[3].id}
              icon={data[3].icon}
              title={data[3].title}
              desc={data[3].desc}
              route={data[3].route}
            />
          </div>
          <div className="service-box3 flex justify-center items-center">
            <ServicesBox
              key={data[2].id}
              icon={data[2].icon}
              title={data[2].title}
              desc={data[2].desc}
              route={data[2].route}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
