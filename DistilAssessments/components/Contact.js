import React from "react";

export default function Contact() {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundImage: "url('/contact-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 opacity-70"></div>

      <div className="relative z-10 w-full max-w-7xl px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-white lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="text-orange-500">Contact Us</span>
            </h1>
            <div className="w-20 h-2 bg-orange-500 mt-2 rounded-full"></div>
            <h3 className="text-xl sm:text-2xl font-semibold">We can help you!</h3>
            <p className="text-gray-300">
              Talk to our consultants who are happy to assist you with what
              would work best for you.
            </p>

            <div className="space-y-4">
              {["For Students", "For Corporates"].map((label, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-blue-800 to-blue-600 p-5 rounded-lg shadow-2xl"
                >
                  <h4 className="font-bold text-lg flex items-center gap-2">
                    📞 {label}:
                  </h4>
                  <p>
                    Mobile - {index === 0 ? "+91-8882123959" : "+91-8448373884"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-lg shadow-2xl w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 text-center">
              Send us a Message
            </h3>
            <form className="space-y-4" aria-labelledby="contact-form-heading">
              <h2 id="contact-form-heading" className="sr-only">
                Contact Form
              </h2>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                aria-required="true"
              />

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  aria-required="true"
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  aria-required="true"
                />
              </div>

              <select
                id="subject"
                required
                className="w-full p-2 border border-gray-300 rounded-lg text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                aria-required="true"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a Subject
                </option>
                <option value="inquiry">Inquiry</option>
                <option value="support">Support</option>
              </select>

              <textarea
                id="comment"
                placeholder="Enter your comment"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200 font-bold"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
