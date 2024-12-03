"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const FAQ = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[90%] mx-auto">
      <div
        className={`rounded-lg overflow-hidden transition-colors w-full duration-300 ${
          isOpen ? "bg-primary text-white" : "text-black bg-[#e5ebfa]"
        }`}
        onClick={toggleAccordion}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 cursor-pointer w-full">
          <h3 className="font-medium font-yekBold text-lg w-full">{question}</h3>
          <FiChevronDown
            className={`text-xl transition-transform duration-300 ${
              isOpen ? "rotate-180 text-white" : "rotate-0 text-gray-500"
            }`}
          />
        </div>

        {/* Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-40" : "max-h-0"
          }`}
        >
          <p className="text-gray-600 p-4 bg-white w-full">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
