"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      title: "Vice President - BD",
      subtitle: "(ESSCI)",
      image: "/client1.jpg",
      description:
        "We developed a great partnership with Distil Assessments LLP and their dedication in all aspects of business with ESSCI. We appreciate their attention to detail and creative approach in bringing our new exhibit to life.",
    },
    {
      title: "Danish Siddiqui",
      subtitle: "Asia Africa Human Resources (FedEx)",
      image: "/client2.jpg",
      description:
        "Distil has the best solution for us—it is a platform to recruit quality candidates for any department. It is a complete solution for technical and psychometric assessment tests.",
    },
    {
      title: "Corporate HR Head",
      subtitle: "Micro Turners Group - India",
      image: "/client3.jpg",
      description:
        "We have been associated with Distil Assessments LLP since 2018, and I have personally found their team to excel in addressing manpower shortages and compliance needs. Thanks for doing a great job with our pan-India project!",
    },
    {
      title: "Pradeep Kumar Sharma",
      subtitle: "Senior Human Manager at Carparo Engineering India Ltd",
      image: "/client4.jpg",
      description:
        "Distil Assessments has been a major contributor to our hiring requirements and has been very professional in their approach. Looking forward to continued support.",
    },
    {
      title: "Saloni Singh",
      subtitle: "Human Resources Officer (Innovation M)",
      image: "/client.png",
      description:
        "We hire a good number of candidates every month and screen around 500 candidates to hire this number. Now we are associated with Distil for 80% of our online assessments.",
    },
    {
      title: "Optimus",
      subtitle: "Recruitment Team",
      image: "/client.png",
      description:
        "Distil's online assessments filter 35-40% of applicants for us, helping streamline the interview process with the best quality candidates. Feedback test reports are excellent tools to analyze candidate profiles.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold mb-4">
          What clients say about <span className="text-red-500">Distil</span>
        </h2>
        <div className="flex flex-col items-center">
          <div className=" mb-2">
            <Image
              src={testimonials[currentIndex].image}
              alt={`Image of ${testimonials[currentIndex].title}`}
              width={75}
              height={75}
              className="rounded-full border-4 border-orange-500 object-cover"
            />
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-2">
            {testimonials[currentIndex].description}
          </p>

          {/* Client Info */}
          <h3 className="text-lg font-bold">{testimonials[currentIndex].title}</h3>
          <p className="text-sm text-gray-500 italic">
            {testimonials[currentIndex].subtitle}
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-between mt-8 mx-8">
          <button
            onClick={goToPrevious}
            className="hidden"
            aria-label="Previous Testimonial"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="hidden"
            aria-label="Next Testimonial"
          >
            &gt;
          </button>
        </div>

        {/* Active Dots */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`h-1 w-6 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-red-500" : "bg-gray-200"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
