import React, { useState } from "react";
import axios from "axios";
import Loader from "../Shared/Loader";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Validation functions
  const validateFullName = (name) => {
    const regex = /^[a-zA-Z\s]+$/; // Only alphabets and spaces
    return regex.test(name);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/; // Exactly 10 digits
    return regex.test(phone);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    // At least one uppercase, one lowercase, one number, one special character, and minimum 8 characters
    return regex.test(password);
  };

  const validateAddress = (address) => {
    return address.trim().length > 5; // Minimum 5 characters for address
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate inputs
    if (!validateFullName(name)) {
      setMessage("Full name should only contain alphabets and spaces.");
      setIsLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      setMessage("Invalid email format.");
      setIsLoading(false);
      return;
    }
    if (!validatePhone(phone)) {
      setMessage("Phone number should be exactly 10 digits.");
      setIsLoading(false);
      return;
    }
    if (!validatePassword(password)) {
      setMessage(
        "Password must have at least one uppercase, one lowercase, one numeric digit, one special character, and be at least 8 characters long."
      );
      setIsLoading(false);
      return;
    }
    if (!validateAddress(address)) {
      setMessage("Address must be at least 5 characters long.");
      setIsLoading(false);
      return;
    }

    const user = { name, phone, email, password, address };

    try {
      const response = await axios.post("http://localhost:2003/api/user/register", user);
      setMessage("Registration successful!");
      window.location.href = "/";
    } catch (error) {
      if (error.response) {
        setMessage("Error: " + error.response.data);
      } else {
        setMessage("Error: " + error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="container max-w-md mx-auto p-10">
          <div className="flex flex-col items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="g-0">
                <div className="px-4 md:px-0">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tse1.mm.bing.net/th?id=OIG3.0CS_8N.4hPaCHTUXCjpw&pid=ImgGn"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold text-black">
                        Join Handloom Fashion
                      </h4>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4 text-center text-black">Create your account</p>

                      {/* Full Name Input */}
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                        placeholder="Enter Full Name"
                        required
                      />

                      {/* Email Input */}
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                        placeholder="Enter Email"
                        required
                      />

                      {/* Phone Input */}
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                        placeholder="Enter Phone"
                        required
                      />

                      {/* Password Input */}
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                        placeholder="Enter Password"
                        required
                      />

                      {/* Address Input */}
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                        placeholder="Enter Address"
                        required
                      />

                      {/* Error or success message */}
                      {message && <p className="text-center text-red-500">{message}</p>}

                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          type="submit"
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          style={{
                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Register
                        </button>
                        <div className="text-center">
                          <a href="/" className="text-blue-500 hover:underline">
                            Already have an Account?
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
