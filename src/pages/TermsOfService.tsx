
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          <div className="prose max-w-none">
            <p className="text-gray-600">
              Last updated: April 7, 2025
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the Smart Resource Conservation website and services, you agree to be bound 
              by these Terms of Service and all applicable laws and regulations. If you do not agree with any 
              of these terms, you are prohibited from using or accessing this site.
            </p>
            
            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily use our website and services for personal, non-commercial use only. 
              This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software contained on the site</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
            
            <h2>3. Disclaimer</h2>
            <p>
              The materials on Smart Resource Conservation's website are provided on an 'as is' basis. 
              We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, 
              without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights.
            </p>
            
            <h2>4. Contact Us</h2>
            <p>
              If you have questions or concerns about these Terms of Service, please contact us at:
              legal@smartresource.com
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;