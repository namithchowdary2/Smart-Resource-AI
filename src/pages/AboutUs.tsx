
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600 mb-8">
            Learn about the Smart Resource Conservation team and our mission to help households
            reduce energy consumption through advanced machine learning.
          </p>
          
          <div className="prose max-w-none">
            <h2>Our Mission</h2>
            <p>
              At Smart Resource Conservation, we're dedicated to developing intelligent solutions that
              optimize home resource usage without compromising on performance or comfort.
            </p>
            
            <h2>Our Team</h2>
            <p>
              Our team consists of experts in machine learning, energy optimization, and sustainability.
              We're passionate about creating technology that makes a positive impact on the environment.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;