import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [serverOtp, setServerOtp] = useState(""); // Store OTP from server
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleSendOtp = async () => {
    try {
      const response = await axios.post(
        `http://localhost:2003/api/user/forgetPassword/${email}`
      );
      if (response.data) {
        setServerOtp(response.data);
        setMessage("OTP sent to your email!");
        setStep(2);
      } else {
        setMessage(response.data.message || "Failed to send OTP.");
      }
    } catch (error) {
      setMessage("Error sending OTP. Please try again.");
    }
  };

  const handleVerifyOtp = () => {
    if (otp.trim() === String(serverOtp).trim()) {
      setMessage("OTP verified successfully.");
      setStep(3); // Proceed to password reset step
    } else {
      setMessage("Invalid OTP. Please try again.");
    }
  };

  const handleChangePassword = async () => {
    try {
      const response = await axios.post(
        `http://localhost:2003/api/user/changepassword/${email}/${newPassword}`
      );
      if (response.data) {
        setMessage("Password changed successfully.");
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          navigate("/login"); // Replace '/login' with your login page route
        }, 2000);
      } else {
        setMessage(response.data.message || "Password change failed.");
      }
    } catch (error) {
      setMessage("Error changing password.");
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      <div className="max-w-md mx-auto p-4 mt-5 bg-white rounded-md shadow-md">
        <h2 className="text-center text-2xl font-semibold mb-4">Forgot Password</h2>
        {message && (
          <p className="text-center text-red-500 mb-2">{message}</p>
        )}

        {step === 1 && (
          <div>
            <label className="block mb-2">Enter your email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 w-full p-2 mb-4 rounded-md focus:outline-none"
              placeholder="Enter your email"
            />
            <button
              className="mb-3 w-full rounded px-6 py-2.5 text-xs text-white font-medium uppercase"
              style={{
                background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
              onClick={handleSendOtp}
            >
              Send OTP
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <label className="block mb-2">Enter OTP sent to your email</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border border-gray-300 w-full p-2 mb-4 rounded-md focus:outline-none"
              placeholder="Enter OTP"
            />
            <button
              className="mb-3 w-full rounded px-6 py-2.5 text-xs text-white font-medium uppercase"
              style={{
                background: "linear-gradient(to right, #28a745, #218838, #155724)",
              }}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </div>
        )}

        {step === 3 && (
          <div>
            <label className="block mb-2">Enter new password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-gray-300 w-full p-2 mb-4 rounded-md focus:outline-none"
              placeholder="Enter new password"
            />
            <button
              className="mb-3 w-full rounded px-6 py-2.5 text-xs text-white font-medium uppercase"
              style={{
                background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
              }}
              onClick={handleChangePassword}
            >
              Change Password
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default ForgotPassword;
