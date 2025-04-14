
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Cookies Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Last updated: April 7, 2025
            </p>
            
            <h2>1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit 
              a website. They are widely used to make websites work more efficiently and provide information 
              to the website owners.
            </p>
            
            <h2>2. How We Use Cookies</h2>
            <p>
              Smart Resource Conservation uses cookies for a variety of purposes, including:
            </p>
            <ul>
              <li>Authentication and security</li>
              <li>Preferences and features</li>
              <li>Analytics and performance</li>
              <li>Advertising and targeting</li>
            </ul>
            
            <h2>3. Types of Cookies We Use</h2>
            <p>
              We use the following types of cookies:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> These are necessary for the website to function properly.</li>
              <li><strong>Preference cookies:</strong> These remember your preferences and settings.</li>
              <li><strong>Analytics cookies:</strong> These help us understand how visitors interact with our website.</li>
              <li><strong>Marketing cookies:</strong> These track your online activity to help deliver more relevant advertising.</li>
            </ul>
            
            <h2>4. Contact Us</h2>
            <p>
              If you have questions or concerns about our Cookies Policy, please contact us at:
              privacy@smartresource.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CookiesPolicy;