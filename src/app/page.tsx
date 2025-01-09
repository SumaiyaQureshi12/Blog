import React from "react";
import Navbar from "@/Components/Navbar";
import Mega from "@/Components/Mega";
import AutherCard from "@/Components/AutherCard";
import Feature from "@/Components/Feature";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Feature />
      <Mega />
      <AutherCard />
      <Footer />
    </div>
  );
}
