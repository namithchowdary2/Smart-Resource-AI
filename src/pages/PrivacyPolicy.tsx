
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Last updated: April 7, 2025
            </p>
            
            <h2>1. Introduction</h2>
            <p>
              Smart Resource Conservation ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our energy optimization services.
            </p>
            
            <h2>2. Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways including:
            </p>
            <ul>
              <li>Personal Data: Name, email address, phone number, etc.</li>
              <li>Usage Data: Information on how you use our services</li>
              <li>Device Data: Information about your computer or mobile device</li>
              <li>Energy Consumption Data: Information about your household's resource usage</li>
            </ul>
            
            <h2>3. How We Use Your Information</h2>
            <p>
              We may use the information we collect about you to:
            </p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Improve and personalize your experience</li>
              <li>Develop new products and services</li>
              <li>Communicate with you about updates or changes</li>
              <li>Monitor usage of our services</li>
              <li>Detect and prevent fraudulent activity</li>
            </ul>
            
            <h2>4. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
              privacy@smartresource.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;