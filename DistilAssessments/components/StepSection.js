import React from "react";
import Image from "next/image";

const StepsSection = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-12 leading-snug">
          Get started in <span className="text-red-500">3 easy steps</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center   p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-6">
              <Image
                src="/post.png"
                alt="Post a Job"
                width={180}
                height={180}
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Post a Job</h3>
            <p className="text-gray-600 leading-relaxed">
              Tell us what you need in a candidate in just 5 minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center  p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-6">
              <Image
                src="/verified.png"
                alt="Get Verified"
                width={180}
                height={180}
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Get Verified</h3>
            <p className="text-gray-600 leading-relaxed">
              Verify your profile for better visibility and trustworthiness.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="relative mb-6">
              <Image
                src="/find.png"
                alt="Select and Hire"
                width={180}
                height={180}
                className="rounded-lg"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-3">Select and Hire</h3>
            <p className="text-gray-600 leading-relaxed">
              You will get calls from relevant candidates within one hour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
