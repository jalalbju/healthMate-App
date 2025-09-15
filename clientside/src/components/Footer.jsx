import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------------ Left Section ------------ */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            HealthMate is a comprehensive healthcare platform that connects patients with a wide network of verified doctors and specialists. Our goal is to simplify the process of scheduling appointments, managing health records, and accessing expert medical care — all in one place.
With HealthMate, patients can book appointments securely and conveniently, ensuring quality healthcare is always within reach.
          </p>
        </div>

        {/* ------------ Center Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------------ Right Section ------------ */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91-920-501-1694</li>
            <li>mdj166766@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* ------------ Copyright Text ------------ */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2025 HealthMate - All Right Reserved, Made with 💙 by Jalal
        </p>
      </div>
    </div>
  );
};

export default Footer;
