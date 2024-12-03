import Link from "next/link";
import TeamBox from "./TeamBox";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const Teaam = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".team-box1", {
      opacity: 0,
      delay: 0.8,
      duration: 1,
      y: 20,
      scrollTrigger: {
        trigger: ".team-box1",
      },
    });
    gsap.from(".team-box2", {
      opacity: 0,
      delay: 1.3,
      duration: 1,
      y: 20,
      scrollTrigger: {
        trigger: ".team-box2",
      },
    });
    gsap.from(".team-desc", {
      opacity: 0,
      delay: 0.3,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".team-desc",
      },
    });
  });
  return (
    <div className="flex container mx-auto flex-col-reverse lg:flex-row md:py-20 py-10">
      <div className="flex flex-col md:flex-row gap-10 justify-center lg:w-3/5  mt-8 lg:mt-0 items-center">
        <div className="justify-center flex items-center team-box1 ">
          <TeamBox
            img="/ahmad.png"
            name="احمد سعادتمند"
            linkdin="/"
            facebook="/"
            insta="/"
            twitter="/"
            job="مدیر عامل"
          />
        </div>
        <div className="justify-center flex items-center team-box2">
          <TeamBox
            img="/firoozi.jpeg"
            name="علی فیروزی"
            linkdin="/"
            facebook="/"
            insta="/"
            twitter="/"
            job="مدیر ارشد تولید نرم افزار و هوش مصنوعی"
          />
        </div>
      </div>
      <div className="flex team-desc lg:justify-start justify-center items-center lg:w-2/5  ">
        <div className="pt-10 flex flex-col items-start gap-4 md:max-w-[500px]  px-4 ">
          <button>
            <Link
              href="/about"
              className="text-sm text-blue-600 border border-spacing-1 w-auto p-2 rounded-full"
            >
              تیم ما
            </Link>
          </button>
          <h2 className="text-3xl  font-semibold font-yekBold">
            با اعضای باتجربه تیم ما آشنا شوید
          </h2>
          <p className="text-sm text-justify ">
            ما در تیم خود افرادی با تخصص‌های مختلف داریم که هرکدام با تجربه‌های
            منحصر به فرد خود، در جهت بهبود خدمات و موفقیت بیشتر تلاش می‌کنند.
            اینجا، تیم ما متعهد به ایجاد راه‌حل‌های نوآورانه و تحقق اهداف بزرگ
            است.
          </p>
          <Link href="/about" className="">
            <button className="hover:bg-[#1362C4] bg-[#1771df] transition duration-300 text-white rounded-full py-2 px-4">
              بیشتر بخوانید
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Teaam;
