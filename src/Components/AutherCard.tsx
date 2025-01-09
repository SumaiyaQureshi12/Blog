import React from "react";

const AutherCard = () => {
  return (
    <div className="bg-yellow-50 shadow-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <img
          className="w-16 h-16 rounded-full mr-4 object-cover border-2 bg-rose-700"
          src="/img1.jpeg"
          alt="Auther image"
        />
        <div>
          <h3 className="txt-xl font-bold">Mera Karachi</h3>
          <p className="text-black">
            Mera Karachi – Shehr jo kabhi sota nahi, har mod par ek kahani
            sunata hai.
          </p>
        </div>
      </div>
      <p className="mt-4 text-black leading-relaxed">
        Karachi, Pakistan’s vibrant heart, is a city of endless energy and
        diversity. From bustling streets to serene shores, it’s a blend of
        cultures, flavors, and stories. Where the lights never fade, and the
        spirit never dies.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href=""
          className="px-4 py-2 text-white bg-green-400 rounded-md hover:bg-green-800 transition duration-300"
        >
          Github
        </a>
        <a
          href=""
          className="px-4 py-2 text-white bg-green-400 rounded-md hover:bg-green-800 transition duration-300"
        >
          Linkedin
        </a>
        <a
          href=""
          className="px-4 py-2 text-white bg-green-400 rounded-md hover:bg-green-800 transition duration-300"
        >
          Intagram
        </a>
      </div>
    </div>
  );
};

export default AutherCard;
