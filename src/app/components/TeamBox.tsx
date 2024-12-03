import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";


const TeamBox=({name,job,linkdin,facebook,insta,twitter,img})=>{
    return(
        <div className=" bg-white border h-96  border-white hover:border-primary rounded-md flex flex-col gap-5 hover:-translate-y-2 transition-all duration-500 w-72 justify-center items-center py-20 px-1 ">
        <Image
          src={img}
          width={100}
          height={100}
          alt={name}
          className="rounded-full object-cover "
        />
        <h3 className="text-lg font-yekBold">{name} </h3>
        <p className="text-sm text-gray-600">
          {job}
        </p>
        <div className="flex gap-2 flex-wrap ">
          <Link
            href={twitter}
            className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary transition duration-500  cursor-pointer"
          >
            <FaTwitter />
          </Link>
          <Link
            href={facebook}
            className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary duration-500 transition cursor-pointer"
          >
            <FaFacebookF />
          </Link>
          <Link
            href={insta}
            className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary duration-500 transition cursor-pointer"
          >
            <RiInstagramFill />
          </Link>
          <Link
            href={linkdin}
            className="w-8 h-8 p-2 ring-primary rounded-full ring-1 text-primary hover:text-white hover:bg-primary duration-500 transition cursor-pointer"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    )
}

export default TeamBox