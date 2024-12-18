"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplitSectionCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.webp",
    "/banner4.jpg",
    "/banner5.jpg",
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  });

  return (
    <div id="animation-carousel" className="relative w-full">
      {/* Carousel wrapper */}
      <div className="relative h-56 overflow-hidden  md:h-96">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt={`Carousel item ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
      {/* Slider controls */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-40 end-36 z-30 hidden sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-16 h-16 bg-white group-hover:bg-gray-200 group-focus:ring-4 group-focus:ring-gray-300 group-focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      <button
        type="button"
        onClick={handleNext}
        className="absolute top-40 end-16 z-30 hidden sm:flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        <span className="inline-flex items-center justify-center w-16 h-16 bg-white group-hover:bg-gray-200 group-focus:ring-4 group-focus:ring-gray-300 group-focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
}
