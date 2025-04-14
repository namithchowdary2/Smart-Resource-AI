
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Defining the type for the tipData
interface TipData {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const Tips = () => {
  // Sample tips data
  const tipsData: TipData[] = [
    {
      id: 1,
      title: "Optimize Thermostat Settings",
      description: "Set your thermostat to 68°F in winter and 78°F in summer to reduce energy consumption.",
      icon: "thermometer",
    },
    {
      id: 2,
      title: "Use Energy-Efficient Light Bulbs",
      description: "Switch to LED bulbs which use up to 75% less energy and last 25 times longer than incandescent lighting.",
      icon: "lightbulb",
    },
    {
      id: 3,
      title: "Install Water-Saving Fixtures",
      description: "Low-flow showerheads and faucet aerators can reduce your water consumption by up to 50%.",
      icon: "droplet",
    },
    {
      id: 4,
      title: "Unplug Idle Electronics",
      description: "Devices continue to draw power even when turned off. Unplug chargers and appliances when not in use.",
      icon: "plug",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Energy Saving Tips</h1>
          <p className="text-gray-600 mb-8">
            Simple strategies to reduce your energy consumption and lower your utility bills.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tipsData.map((tip) => (
              <div key={tip.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-eco-blue-light/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-eco-blue-light text-xl">
                    {tip.icon === "thermometer" && "🌡️"}
                    {tip.icon === "lightbulb" && "💡"}
                    {tip.icon === "droplet" && "💧"}
                    {tip.icon === "plug" && "🔌"}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-600">{tip.description}</p>
                <Button variant="link" className="mt-4 p-0 text-eco-blue hover:text-eco-blue-light">
                  Learn more
                </Button>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="mb-4">
                Looking for more ways to save energy and water? Check out these resources:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li>Our comprehensive guide to home energy efficiency</li>
                <li>Water conservation techniques for everyday use</li>
                <li>Seasonal maintenance tips for optimal system performance</li>
                <li>Smart home devices that can help monitor and reduce consumption</li>
              </ul>
              <Button href="/documentation" className="bg-eco-gradient">Browse Resources</Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tips;