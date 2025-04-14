
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

const Tutorials = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Video className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">Video Tutorials</h1>
          </div>

          <div className="prose max-w-none">
            <p className="lead text-lg mb-6">
              Learn how to use key features of the Smart Resource Conservation platform with these step-by-step video guides.
            </p>
            
            <h2>Getting Started Series</h2>
            
            <div className="mb-8">
              <h3>1. Platform Introduction</h3>
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-md mb-4">
                  <div className="flex items-center justify-center h-full text-white">
                    Video: Platform Overview (10:23)
                  </div>
                </div>
                <p>
                  This introductory video provides a complete tour of the Smart Resource Conservation platform, 
                  highlighting key features and navigation tips. Perfect for new users who want to get familiar 
                  with the interface.
                </p>
                <Button variant="outline" className="mt-2">Watch Video</Button>
              </div>
              
              <h3>2. Setting Up Your First Project</h3>
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-md mb-4">
                  <div className="flex items-center justify-center h-full text-white">
                    Video: Project Setup Guide (8:45)
                  </div>
                </div>
                <p>
                  Learn how to create and configure your first resource optimization project. This tutorial walks you 
                  through defining goals, connecting devices, and establishing a baseline for your conservation efforts.
                </p>
                <Button variant="outline" className="mt-2">Watch Video</Button>
              </div>
              
              <h3>3. Mobile App Walkthrough</h3>
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-md mb-4">
                  <div className="flex items-center justify-center h-full text-white">
                    Video: Mobile Features (6:12)
                  </div>
                </div>
                <p>
                  Access Smart Resource Conservation features on the go with our mobile app. This tutorial demonstrates 
                  how to install the app, log in securely, and use key features from your smartphone or tablet.
                </p>
                <Button variant="outline" className="mt-2">Watch Video</Button>
              </div>
            </div>
            
            <h2>Advanced Features</h2>
            
            <div className="mb-8">
              <h3>Custom Reporting</h3>
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="aspect-w-16 aspect-h-9 bg-black rounded-md mb-4">
                  <div className="flex items-center justify-center h-full text-white">
                    Video: Advanced Reports (12:37)
                  </div>
                </div>
                <p>
                  Create customized reports and dashboards that focus on the metrics most relevant to your conservation goals.
                </p>
                <Button variant="outline" className="mt-2">Watch Video</Button>
              </div>
            </div>
            
            <div className="mt-8">
              <Button href="/documentation" variant="outline" className="text-eco-blue border-eco-blue">
                Back to Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tutorials;