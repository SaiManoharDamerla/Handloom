import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

export default function Register(): JSX.Element {
  return (
    <section className="h-screen flex items-center justify-center bg-neutral-200 dark:bg-neutral-100">
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

                  <form>
                    <p className="mb-4 text-center text-black">Create your account</p>
                    {/* Full Name Input */}
                    <input
                      type="text"
                      label="Full Name"
                      className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                      placeholder="Enter Full Name"
                    />
                    {/* Email Input */}
                    <input
                      type="email"
                      label="Email"
                      className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                      placeholder="Enter Email"
                    />
                    {/* Username Input */}
                    <input
                      type="text"
                      label="Username"
                      className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                      placeholder="Enter Username"
                    />
                    {/* Password Input */}
                    <input
                      type="password"
                      label="Password"
                      className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                      placeholder="Enter Password"
                    />
                    {/* Confirm Password Input */}
                    <input
                      type="password"
                      label="Confirm Password"
                      className="mb-4 text-black px-2 w-full py-2 placeholder-slate-600"
                      placeholder="Confirm Password"
                    />

                    <div className="mb-12 pb-1 pt-1 text-center">
                      <div rippleColor="light" className="w-full">
                        <a href="/">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          style={{
                            background: "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Register
                        </button>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pb-6">
                      <p className="mb-0 mr-2 text-black">Already have an account?</p>
                      <Link to="/">
                        <button
                          type="button"
                          className="text-black inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-800"
                        >
                          Login
                        </button>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
