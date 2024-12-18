import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <div className="bg-blue-500 py-12 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-4xl font-extrabold text-white">
            Grow with Confidence
          </h2>
          <p className="text-lg text-white">
            Reinforcing Skills and Mapping Careers
          </p>
        </div>
        <button className="mt-6 px-8 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300">
          SCHEDULE A CALL BACK
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* For Industrial Partnerships */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-semibold mb-2">
              For Industrial Partnerships
            </h4>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <span className="text-lg">📞</span>
              <span className="text-gray-400">011-43504632</span>
            </p>
          </div>

          {/* Corporate Office */}
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-2">Corporate Office</h4>
            <p className="text-gray-400 max-w-xs mx-auto">
              📍 Building No-4, 3rd Floor, Vill-Khizrabad, Opposite Vidhya
              Bhawan Public School, New Friends Colony, New Delhi
            </p>
          </div>

          {/* Follow Us */}
          <div className="text-center md:text-right">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition duration-300"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © 2022 Distil. All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
