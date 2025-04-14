
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, Database, Lock } from "lucide-react";

const ApiReference = () => {
  const apis = [
    {
      id: 1,
      title: "Consumption Prediction API",
      description: "Predict future resource consumption based on historical data and environmental factors.",
      endpoint: "/api/v1/predict",
      icon: <Code className="h-8 w-8 text-eco-blue" />,
      link: "/api-reference/prediction"
    },
    {
      id: 2,
      title: "Data Collection API",
      description: "Collect and store resource usage data from smart meters and IoT devices.",
      endpoint: "/api/v1/data",
      icon: <Database className="h-8 w-8 text-eco-blue" />,
      link: "/api-reference/data-collection"
    },
    {
      id: 3,
      title: "Authentication API",
      description: "Secure API endpoints for user authentication and authorization.",
      endpoint: "/api/v1/auth",
      icon: <Lock className="h-8 w-8 text-eco-blue" />,
      link: "/api-reference/authentication"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">API Reference</h1>
          <p className="text-gray-600 mb-8">
            Technical documentation for integrating with the Smart Resource Conservation API.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {apis.map((api) => (
              <div key={api.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  {api.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{api.title}</h3>
                <p className="text-gray-600 mb-4">{api.description}</p>
                <div className="bg-gray-100 p-2 rounded mb-4">
                  <code className="text-sm">{api.endpoint}</code>
                </div>
                <Button variant="outline" className="text-eco-blue border-eco-blue" href={api.link}>
                  API Documentation
                </Button>
              </div>
            ))}
          </div>
          
          <div className="prose max-w-none">
            <h2>API Overview</h2>
            <p>
              Our RESTful APIs are designed to help you integrate Smart Resource Conservation features into your own applications.
              All endpoints return JSON responses and require API key authentication.
            </p>
            
            <h3>Authentication</h3>
            <p>
              To access our APIs, you'll need to register for an API key through the developer portal. All requests must include
              your API key in the Authorization header.
            </p>
            
            <h3>Rate Limits</h3>
            <p>
              Free tier: 100 requests per day
              <br />
              Pro tier: 10,000 requests per day
              <br />
              Enterprise tier: Custom limits based on your needs
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApiReference;