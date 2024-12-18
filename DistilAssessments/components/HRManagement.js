"use client";
import { useState } from "react";
import Image from "next/image";

export default function HRManagement() {
  const images = [
    "/home1.jpg",
    "/home2.jpg",
    "/home3.jpg",
    "/home4.jpg",
    "/home5.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" mt-16 flex items-center justify-center px-4 md:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Human Resources Management Company
          </h1>
          <hr className="w-12 border-2 border-red-500 mb-6" />
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Distil (WVC) world vocational Centre is a leading human resources
            management offering a range of solutions to 3500+ employers for
            their hiring, productivity, and scale challenges under Distil
            Assessments LLP. We help our clients in adopting and managing
            different staffing models, leveraging cutting-edge technologies that
            are pivotal to building.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Distil (WVC) tries to reduce this gap by matching the right
            employees to the right job, where employees can check, search, and
            apply for jobs in their own preferred local languages. It will help
            reduce the manpower and operational costs of companies towards
            entry-level and blue-collar jobs...
          </p>
          <a href="#" className="text-red-500 hover:text-red-700 font-semibold">
            Read More
          </a>
        </div>

        {/* Image Carousel Section */}
        <div className="relative w-full">
          {/* Carousel Wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {images.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 top-80 left-1/2 space-x-4">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-2 h-2 rounded-full transition-transform duration-300 ${
                  index === currentIndex
                    ? "bg-red-500 scale-125 shadow-lg"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={goToPrevious}
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
              <svg
                className="w-4 h-4 text-white"
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
            onClick={goToNext}
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 focus:ring-4 focus:ring-white">
              <svg
                className="w-4 h-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 9l4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
