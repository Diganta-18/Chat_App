import React from "react";
import GenderChechboxx from "./GenderChechboxx";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        Sign Up <span className="text-purple-800">ChatApp</span>
        <h1>
          <form>
            <div>
              <label className="label p-2">
                <span className="text-base label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label1">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="email"
                placeholder="Enter Password"
                className="w-full input input-bordered h-10"
              />
            </div>

            <div>
              <label className="label p-2">
                <span className="text-base label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter password"
                className="w-full input input-bordered h-10"
              />
            </div>
            <GenderChechboxx />
            <a
              className="text-sm hover:underline text-blue-600 mt-2 inline-block"
              href="#"
            >
              Already have an account?
            </a>

            <div>
              <button className="btn btn-block  btn-sm mt-2 border border-slate-700">
                Sign Up
              </button>
            </div>
          </form>
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
