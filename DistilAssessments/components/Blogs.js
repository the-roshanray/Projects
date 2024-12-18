"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Blogs() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogs = [
    {
      title: "Corporate Politics",
      image: "/blog1.png",
      description:
        "Political parties have started operating like corporates with PowerPoint presentations.",
    },
    {
      title: "Regional Head - Hafele India",
      image: "/blog2.jpg",
      description:
        "This session at FMS - Delhi, pushed us to study tirelessly to present innovative ideas.",
    },
    {
      title: "Facing Interviews",
      image: "/blog3.jpg",
      description:
        "Recruitment is the cornerstone of HR, and interviews shape the foundation of great hires.",
    },
    {
      title: "Leadership Qualities",
      image: "/blog4.jpg",
      description:
        "Leadership is about influence and inspiring others to excel. Here’s how to lead effectively.",
    },
  ];

  // Auto-rotate blogs
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [blogs.length]);

  // Calculate visible blogs
  const visibleBlogs = blogs
    .slice(currentIndex, currentIndex + 3)
    .concat(blogs.slice(0, Math.max(0, 3 - (blogs.length - currentIndex))));

  return (
    <div className="py-10 px-4 md:px-16 ">
      <h2 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
        Our Blogs
        <span className="block w-16 h-1 bg-red-500 mx-auto mt-2"></span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleBlogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="rounded-md object-cover"
              priority={index === 0}
            />
            <h3 className="text-xl font-semibold mt-4 text-gray-800">
              {blog.title}
            </h3>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <a
              href="#"
              className="text-red-500 font-semibold mt-4 inline-flex items-center space-x-2 border border-red-500 rounded-full px-4 py-2"
              aria-label="Read more"
            >
              <span>READ MORE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5 fill-red-500"
                aria-hidden="true"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
