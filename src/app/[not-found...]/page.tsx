import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import HeroSection from "../components/HeroSection";
import Newsletter from "../components/Newsletter";
import { IoWarningOutline } from "react-icons/io5";

export default function NotFoundPage() {
  return (
    <div className="">
      <Navbar />
      <HeroSection title="خطای 404" route="/" />
      <div className="flex justify-center py-20 gap-5 items-center flex-col ">
        <IoWarningOutline size={100} className="text-primary" />
        <h2 className="font-semibold text-[80px] font-yekBold">404</h2>
        <h3 className="font-semibold font-yekBold text-[30px]">صفحه یافت نشد</h3>
        <p className="max-w-[400px]">
          متاسفانه صفحه‌ای که به دنبال آن می‌گردید، در وب‌سایت ما وجود ندارد!
          شاید بخواهید به صفحه اصلی بروید یا از جستجو استفاده کنید؟
        </p>

        <Link href="/about" className="">
          <button className="hover:bg-[#1362C4] bg-[#1771df] transition duration-300 text-white rounded-full py-2 px-4">
            بازگشت به صفحه اصلی
          </button>
        </Link>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}
