"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [currentTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      const time = now.toLocaleTimeString("en-US", { hour12: false });
      setCurrentDateTime(`${date} ${time}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header className="text-gray-400 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black">
          <span>{currentTime}</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <Link
            href="/"
            className="mr-5 hover:text-red-300 transition-colors duration-300 transform hover:scale-x-105"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="mr-5 hover:text-red-300 transition-colors duration-300 transform hover:scale-x-105"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="mr-5 hover:text-red-300 transition-colors duration-300 transform hover:scale-x-105"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="mr-5 hover:text-red-300 transition-colors duration-300 transform hover:scale-x-105"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
