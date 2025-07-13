
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText, Book } from "lucide-react";

const Documentation = () => {
  const documents = [
    {
      id: 1,
      title: "Getting Started Guide",
      description: "Learn the basics of the Smart Resource Conservation platform and how to set up your first optimization project.",
      icon: <FileText className="h-8 w-8 text-eco-blue" />,
      link: "/documentation/getting-started"
    },
    {
      id: 2,
      title: "User Manual",
      description: "Comprehensive guide covering all features and functionality of the Smart Resource platform.",
      icon: <Book className="h-8 w-8 text-eco-blue" />,
      link: "/documentation/user-manual"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Documentation</h1>
          <p className="text-gray-600 mb-8">
            Welcome to Smart Resource's comprehensive documentation. Here you'll find guides, tutorials, and resources
            to help you make the most of our energy optimization platform.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {doc.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                <p className="text-gray-600 mb-4">{doc.description}</p>
                <Button variant="outline" className="text-eco-blue border-eco-blue" href={doc.link}>
                  Read More
                </Button>
              </div>
            ))}
          </div>
          
          <div className="prose max-w-none">
            <h2>Documentation Overview</h2>
            <p>
              Our comprehensive documentation is designed to help you get the most out of the Smart Resource Conservation platform. 
              Whether you're just getting started or looking for advanced techniques, we have resources to support your journey 
              toward more efficient resource management.
            </p>
            
            <h3>Quick Start Resources</h3>
            <ul>
              <li>Installation guides for all supported devices</li>
              <li>Configuration instructions for optimal performance</li>
              <li>Best practices for resource monitoring</li>
              <li>Troubleshooting common issues</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Documentation;