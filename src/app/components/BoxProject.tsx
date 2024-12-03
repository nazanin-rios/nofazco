import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

export default function BoxProject({title,route,desc,img}) {
  return (
    <Link href={route} className="xl:w-[350px] xl:h-[400px] w-[90%] h-[90%]  overflow-hidden box relative bg-red-500">
        <Image
          width={300}
          height={300}
          alt="background"
          src={img}
          className="w-full h-full img-bg-box"
        />
        {/* content */}
        <div className="bg-red box-content z-[1000] absolute flex  p-2 flex-col gap-4  right-2 bottom-4">
          <div className="">
            <span className="bg-[#14183e77] rounded-xl p-2 text-white">
              {title}
            </span>
          </div>
          <p className="text-white text-xl">
           {desc}
          </p>
          <div className="">
            <button className="bg-primary p-3 duration-300 rounded-full text-white hover:bg-white hover:text-primary transition-all ">
              <FaArrowLeft />
            </button>
          </div>
        </div>
    </Link>
  );
}
