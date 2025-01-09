import React from "react";

const Feature = () => {
  return (
    <div>
      <section className="py-8 bg-green-300 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-green-900">
          Karachi – The city of lights, where every corner holds a story and
          preserves its culture (Karachi – Roshaniyon ka shehar, jahan har kona
          apne andar ek kahani aur sanskrati chhupaye rakhta hai)
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-gray-950 md:mb-12 lg:mb-16 animate-fade-in-up delay-100">
          Karachi, often referred to as the City of Lights, is a bustling
          metropolis that thrives on its vibrant energy and diverse culture.
          From its historic landmarks to its modern skyline, Karachi tells
          stories of resilience, unity, and progress. Each corner of this city
          holds a unique narrative, reflecting its rich heritage and the warmth
          of its people. Known for its dynamic blend of tradition and modernity,
          Karachi is not just a city but a living, breathing testament to
          Pakistans cultural and economic heartbeat. It is a place where the
          past meets the present, creating an unparalleled charm that captivates
          everyone who visits.
        </p>
        <div className=" mx-auto max-w-7xl px-5">
       <h1 className="text-3xl font-bold text-center my-8 text-green-900 animate-color-change">Karachi – A Symphony of Culture and Modernity</h1>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 anmate-fade-in-up delay-100">
{[
  "Famous Attractions",
  "Travel & Places",
  "Explore Karachi" ,
  "Must-Visit Places in Karachi",
  "Discover Karachi",
  "Tourist Spots in Karachi",
].map((category, index) => (
      <div key={index} 
      className="relative group p-6 bg-slate-50 rounded-lg shadow-lg hover:bg-green-300 text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center text-neutral-600">
        <p className="text-center text-lg font-semibold">{category}</p>
      </div>
))}
        </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
