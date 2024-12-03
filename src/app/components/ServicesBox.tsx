import Link from "next/link";

export default function ServicesBox({ icon, title, desc, route }) {
  return (
    <div className="md:w-[90%] md:h-[400px] hover:bg-primary rounded-md box-service hover:text-white transition-all duration-500 w-[80%] h-auto bg-white">
      <div className="flex flex-col justify-center py-5 gap-4 h-full px-2 items-center">
        <div className="rounded-full w-[76px] h-[76px] bg-[#F4F7FE] text-black flex justify-center items-center">
          {icon}
        </div>
        <h2 className="text-xl font-semibold font-yekBold">{title}</h2>
        <p className="text-center ">{desc}</p>

        <Link
          href={route}
          className="relative mx-auto py-3 px-5 transition-all duration-200 ease-in-out border-none bg-transparent cursor-pointer group"
        >
          <span className="absolute top-1 left-0 block w-[45px] h-[45px] bg-[#F4F7FE] rounded-full transition-all duration-500 ease-in-out btn-service"></span>

          <span className="relative text-sm font-semibold text-primary tracking-wide z-10">
            مطالعه بیشتر
          </span>
        </Link>
      </div>
    </div>
  );
}
