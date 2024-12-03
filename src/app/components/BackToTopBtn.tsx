import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTopBtn = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button
        onClick={scrollTop}
        className={`fixed bottom-4 right-4 h-10 w-10 rounded-full flex justify-center items-center text-white shadow-lg bg-blue-600 hover:bg-blue-700 transition duration-500 transform ${
          backToTop ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <IoIosArrowUp size={18} />
      </button>
    </div>
  );
};

export default BackToTopBtn;
