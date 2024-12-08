import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function ExampleV2() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    captchaInput: "",
  });
  const [captchaText, setCaptchaText] = useState(""); // CAPTCHA state
  const [message, setMessage] = useState(""); // Message for errors or notifications
  const navigate = useNavigate();

  // Generate a new CAPTCHA
  const generateCaptcha = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(result); // Set the generated CAPTCHA string
  };

  // Generate CAPTCHA on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  // Handle input change
  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    if (user.captchaInput !== captchaText) {
      setMessage("Invalid CAPTCHA. Please try again.");
      generateCaptcha(); // Regenerate CAPTCHA on failure
      setUser((prev) => ({ ...prev, captchaInput: "" })); // Clear CAPTCHA input
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:2003/api/user/login?username=${user.username}&password=${user.password}`
      );

      if (response.data.role === "admin") {
        navigate("/admin/adminhome");
      } else if (response.data.role === "seller") {
        const seller = JSON.stringify(response.data.data);
        localStorage.setItem("seller", seller);
        navigate("/artisan/home");
      } else {
        const userData = JSON.stringify(response.data.data);
        localStorage.setItem("user", userData);
        navigate("/home");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data);
      } else {
        setMessage("Error: " + error.message);
      }
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      <div className="container max-w-md mx-auto p-10">
        <div className="flex flex-col items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="text-center">
            <img className="mx-auto w-48" 
            src={require('../../components/th.jpg')}
            alt="logo" />

              <h4 className="mb-3 mt-1 pb-1 text-xl font-semibold text-black">
                We are Handloom Fashion Team
              </h4>
            </div>

            <form onSubmit={handleLogin}>
              <p className="mb-4 text-center text-black">Please login to your account</p>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInput}
                className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                placeholder="Enter username"
                required
              />
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleInput}
                className="mb-4 text-black px-2 py-2 placeholder-slate-600 w-full"
                placeholder="Enter Password"
                required
              />
               <div className="text-center">
                <a href="/forgetpassword" className="text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="captcha"
                  className="block mb-2 text-lg font-medium text-gray-700"
                >
                  Verification Code
                </label>
                <div className="flex items-center space-x-4">
                  <div
                    className="bg-gray-200 py-2 px-4   text-black rounded-md font-bold text-2xl cursor-pointer"
                    style={{ fontFamily: "monospace", display: 'inline-block' }} // Ensuring it stays visible
                    onClick={generateCaptcha}
                  >
                    {captchaText}
                  </div>
                  <input
                    type="text"
                    name="captchaInput"
                    placeholder="Enter verification code"
                    id="captcha"
                    required
                    value={user.captchaInput}
                    onChange={handleInput}
                    className="w-30 px-3 py-2 border text-black border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Click on the code to regenerate.
                </p>
              </div>
              <div className="mb-12 text-center">
                <button
                  className="mb-3 w-full rounded px-6 py-2.5 text-xs text-white font-medium uppercase"
                  style={{
                    background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                  type="submit"
                >
                  Log in
                </button>
                <p className="text-red-500">{message}</p>
              </div>

              <div className="text-center" style={{ marginTop: "-1cm" }}>
  <a href="/signup" className="text-blue-500 hover:underline">
    Create an Account?
  </a>
</div>

             
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
