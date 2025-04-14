
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const { toast } = useToast();
  
  const handleApply = (position: string) => {
    toast({
      title: "Application Started",
      description: `You're applying for ${position}. Please check your email for next steps.`,
    });
  };
  
  const openPositions = [
    {
      id: 1,
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    },
    {
      id: 2,
      title: "Energy Conservation Specialist",
      department: "Research",
      location: "Eco City, EC",
      type: "Full-time"
    },
    {
      id: 3,
      title: "Front-end Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Careers</h1>
          <p className="text-gray-600 mb-8">
            Join our team and help make a difference in energy conservation through innovative technology.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-2 text-eco-blue-dark">Mission Driven</h3>
                <p className="text-gray-600">
                  Be part of a team dedicated to creating positive environmental impact through innovative technology.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-2 text-eco-green-dark">Growth Opportunities</h3>
                <p className="text-gray-600">
                  Develop your skills and advance your career in a rapidly growing field of sustainability tech.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-medium text-xl mb-2 text-eco-blue">Inclusive Environment</h3>
                <p className="text-gray-600">
                  Join a diverse and inclusive workplace where all perspectives are valued and respected.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
            
            <div className="space-y-6">
              {openPositions.map(position => (
                <div key={position.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-medium">{position.title}</h3>
                      <div className="flex flex-wrap mt-2 gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                          {position.location}
                        </span>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button 
                      className="bg-eco-gradient" 
                      onClick={() => handleApply(position.title)}
                    >
                      Apply Now
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                Don't see a position that fits your skills? Send us your resume anyway!
              </p>
              <Button 
                variant="outline" 
                onClick={() => handleApply("General Application")}
              >
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;