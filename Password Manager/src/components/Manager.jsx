import React, { useEffect, useRef, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setForm] = useState({ site: "", username: "", password: "" });
  const [passwordArray, setPasswordArray] = useState([]);
  const [showPasswordText, setShowPasswordText] = useState(false);

  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    setShowPasswordText((prevState) => !prevState);
    passwordRef.current.type = showPasswordText ? "password" : "text";
  };

  const savePassword = () => {
    const newPasswordArray = [...passwordArray, { ...form, id: uuidv4() }];
    localStorage.setItem("passwords", JSON.stringify(newPasswordArray));
    setPasswordArray(newPasswordArray);
    setForm({ site: "", username: "", password: "" });
    toast("Password Saved!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const deletePassword = (id) => {
    if (window.confirm("Do you really want to delete this password?")) {
      const updatedArray = passwordArray.filter((item) => item.id !== id);
      localStorage.setItem("passwords", JSON.stringify(updatedArray));
      setPasswordArray(updatedArray);
      toast("Password Deleted!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const editPassword = (id) => {
    const selectedPassword = passwordArray.find((i) => i.id === id);
    setForm(selectedPassword);
    setPasswordArray(passwordArray.filter((item) => item.id !== id));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied to Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="flex flex-col justify-between items-center p-4 md:p-8">
        <h1 className="font-bold text-2xl md:text-3xl text-green-700 mb-2">
          Password Manager
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-4">
          Your Own Password Manager
        </p>
        <div className="flex flex-col justify-center items-center w-full">
          <input
            value={form.site}
            onChange={handleChange}
            name="site"
            className="border border-green-600 rounded-full px-4 py-1 md:px-6 md:py-1 w-full md:w-2/3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 mb-5"
            placeholder="Enter URL"
            type="text"
          />
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-2/3 gap-4">
            <input
              value={form.username}
              onChange={handleChange}
              name="username"
              className="border border-green-600 rounded-full px-4 py-1 md:px-6 md:py-1 w-full md:w-1/2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter Username"
              type="text"
            />
            <div className="relative w-full md:w-1/2">
              <input
                ref={passwordRef}
                type={showPasswordText ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
                className="border border-green-600 rounded-full px-4 py-1 md:px-6 md:py-1 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer"
                onClick={showPassword}
              >
                <img
                  className="p-1"
                  width={20}
                  src={showPasswordText ? "hide.png" : "visible.png"}
                  alt={showPasswordText ? "Hide password" : "Show password"}
                />
              </span>
            </div>
          </div>
        </div>

        <button
          className="bg-gradient-to-r from-green-500 to-green-700 shadow-lg mt-4 px-4 py-2 md:px-6 md:py-2 text-white rounded-full flex items-center gap-2"
          onClick={savePassword}
        >
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            style={{ width: "20px", height: "20px" }}
          ></lord-icon>
          <span>Save</span>
        </button>

        <div className="self-start text-xl md:text-2xl p-1 mt-6">
          Your Passwords
        </div>
        {passwordArray.length === 0 && (
          <div className="self-start m-2 text-base">No Password to Show</div>
        )}
        {passwordArray.length > 0 && (
          <div className="overflow-x-auto w-full mt-2">
            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-gradient-to-r from-green-700 to-green-500 shadow-lg text-white text-xs md:text-sm">
                <tr>
                  <th className="px-2 py-1 md:px-4 md:py-2 text-left">URL</th>
                  <th className="px-2 py-1 md:px-4 md:py-2 text-left">
                    Username
                  </th>
                  <th className="px-2 py-1 md:px-4 md:py-2 text-left">
                    Password
                  </th>
                  <th className="px-2 py-1 md:px-4 md:py-2 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-green-100 text-xs md:text-sm">
                {passwordArray.map((item) => (
                  <tr key={item.id} className="hover:bg-green-200">
                    <td className="border-t border-green-200 px-2 py-1 md:px-4 md:py-2">
                      <a
                        href={item.site}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.site}
                      </a>
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "8px",
                        }}
                        aria-label="Copy URL"
                        onClick={() => copyToClipboard(item.site)}
                      ></lord-icon>
                    </td>

                    <td className="border-t border-green-200 px-2 py-1 md:px-4 md:py-2">
                      {item.username}
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "8px",
                        }}
                        aria-label="Copy Username"
                        onClick={() => copyToClipboard(item.username)}
                      ></lord-icon>
                    </td>

                    <td className="border-t border-green-200 px-2 py-1 md:px-4 md:py-2">
                      {"*".repeat(item.password.length)}
                      <lord-icon
                        src="https://cdn.lordicon.com/iykgtsbt.json"
                        trigger="hover"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginLeft: "8px",
                        }}
                        aria-label="Copy Password"
                        onClick={() => copyToClipboard(item.password)}
                      ></lord-icon>
                    </td>

                    <td className="border-t border-green-200 px-2 py-1 md:px-4 md:py-2 flex items-center space-x-2 md:space-x-4">
                      <lord-icon
                        src="https://cdn.lordicon.com/gwlusjdu.json"
                        trigger="hover"
                        style={{ width: "20px", height: "20px" }}
                        aria-label="Edit"
                        className="cursor-pointer"
                        onClick={() => editPassword(item.id)}
                      ></lord-icon>
                      <lord-icon
                        src="https://cdn.lordicon.com/skkahier.json"
                        trigger="hover"
                        style={{ width: "20px", height: "20px" }}
                        aria-label="Delete"
                        className="cursor-pointer"
                        onClick={() => deletePassword(item.id)}
                      ></lord-icon>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Manager;
