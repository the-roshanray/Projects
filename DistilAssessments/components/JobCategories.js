"use client"

import { useState } from "react";

const JobCategories = () => {
  const categories = [
    "Accounts", "Back Office", "Beautician", "Cook", "Delivery", "Driver", "Field Sales",
    "Hardware Engineer", "HR", "Lab Technician", "Labourer", "Machine Operator", "Maid",
    "Marketing", "Nurse", "Office Boy Peon", "Security Guard", "Tailor", "Technician", "Trainer",
    "Typist", "Ward Boy", "Telecalling", "Retail", "Receptionist", "Online Marketing", "Engineer",
    "Business Development", "Graphic Designer", "Programmer", "Medical", "Hotel", "Counsellor",
    "Teacher", "Architect", "Housekeeping", "Vehicle Service", "Dtp", "Chemist", "Photographer",
    "Content Writing", "Fashion Designer", "Event Management", "Hospitality", "Legal"
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Hire from <span className="text-red-500">50+ Job Categories</span>
        </h2>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories
            .slice(0, showAll ? categories.length : 24)
            .map((category, index) => (
              <span
                key={index}
                className="px-4 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition"
              >
                {category}
              </span>
            ))}
        </div>

        {/* Show More/Less Button */}
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 text-blue-500 hover:underline text-sm font-medium"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default JobCategories;
