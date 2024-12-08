import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../Shared/Loader";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [captchaToken, setCaptchaToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleLogin = async () => {
    if (!captchaToken) {
      setMessage("Please complete the CAPTCHA.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:2003/api/user/login",
        { username, password },
        { headers: { "g-recaptcha-response": captchaToken } }
      );

      if (response.data.role === "admin") {
        navigate("/admin/adminhome");
      } else if (response.data.role === "seller") {
        localStorage.setItem("seller", JSON.stringify(response.data.data));
        navigate("/artisan/home");
      } else {
        localStorage.setItem("user", JSON.stringify(response.data.data));
        navigate("/home");
      }
    } catch (error) {
      setMessage(error.response ? error.response.data : "Login failed.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container max-w-md mx-auto p-10">
          <div className="text-center">
            <h4 className="mb-3 text-xl font-semibold text-black">
              Login to Handloom Fashion
            </h4>
          </div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 w-full px-3 py-2 placeholder-gray-500"
            placeholder="Username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full px-3 py-2 placeholder-gray-500"
            placeholder="Password"
          />
          <ReCAPTCHA
            sitekey="6LeR5pQqAAAAAIkK47iFlVqGTVnKJK2dJK6vlbDq" // Your site key
            onChange={handleCaptchaChange}
          />
          <button
            onClick={handleLogin}
            className="mt-4 w-full px-6 py-2 bg-blue-600 text-white rounded"
          >
            Log in
          </button>
          <p className="text-red-500 mt-2">{message}</p>
        </div>
      )}
    </section>
  );
}
