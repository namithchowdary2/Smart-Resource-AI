
import React, { useState } from "react";
import Header from "@/components/Header";
import PredictionForm from "@/components/PredictionForm";
import ResultsDisplay from "@/components/ResultsDisplay";
import RecommendationCard from "@/components/RecommendationCard";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import { PredictionInput, PredictionResult, predictEnergyEfficiency } from "@/api/predictAPI";
import { efficiencyTips } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";
import { 
  ArrowDown, 
  BarChartHorizontal, 
  Lightbulb, 
  RefreshCw,
  Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { playSuccessSound, playErrorSound } from "@/utils/soundUtils";

const Index = () => {
  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handlePrediction = async (input: PredictionInput) => {
    setIsLoading(true);
    try {
      const result = await predictEnergyEfficiency(input);
      setPredictionResult(result);
      playSuccessSound();
      toast({
        title: "Prediction Complete",
        description: `Your energy efficiency score is ${result.predicted_score}/100`,
      });
    } catch (error) {
      console.error("Prediction error:", error);
      playErrorSound();
      toast({
        title: "Prediction Failed",
        description: "An error occurred while generating your prediction.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-white to-blue-50" id="home">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <span className="inline-block px-3 py-1 bg-eco-blue-light/20 text-eco-blue-dark rounded-full text-sm font-medium mb-4">
                Machine Learning Powered
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Smart Resource <span className="eco-gradient-text">Conservation</span> for Home Appliances
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Optimize your home's energy and water consumption with our advanced 
                machine learning model without sacrificing performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-eco-gradient" size="lg" href="#optimize">
                  Optimize Now
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" href="#about">
                  Learn How It Works
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-eco-gradient rounded-full opacity-20 animate-pulse-slow absolute -top-4 -left-4"></div>
                <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl">
                  <div className="w-full h-60 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                    <div className="text-center px-6">
                      <BarChartHorizontal className="mx-auto h-12 w-12 text-eco-blue-light mb-2" />
                      <h3 className="text-lg font-medium mb-1">Energy Efficiency Score</h3>
                      <p className="text-sm text-gray-500">
                        Our ML model analyzes your appliance usage and provides a detailed efficiency score
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <div className="font-bold text-eco-blue">-30%</div>
                      <div className="text-gray-500">Energy Use</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-eco-green">-25%</div>
                      <div className="text-gray-500">Water Use</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-eco-green-dark">-20%</div>
                      <div className="text-gray-500">Carbon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-eco-green-light/20 text-eco-green-dark rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Smart Conservation Through <span className="eco-gradient-text">Machine Learning</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our system leverages advanced machine learning algorithms to analyze your home appliance 
              usage patterns and recommend optimal operating conditions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-eco-blue-light/20 rounded-full flex items-center justify-center mb-4">
                <RefreshCw className="h-6 w-6 text-eco-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600">
                The system collects usage data from your appliances including energy consumption, 
                operating times, and environmental conditions.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-eco-green-light/20 rounded-full flex items-center justify-center mb-4">
                <BarChartHorizontal className="h-6 w-6 text-eco-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pattern Analysis</h3>
              <p className="text-gray-600">
                Our machine learning model analyzes patterns to identify opportunities for 
                optimization without affecting your daily routine.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-eco-gradient rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized recommendations to optimize appliance usage, 
                schedules, and settings for maximum resource conservation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Optimization Tool Section */}
      <section className="py-16" id="optimize">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-eco-blue-light/20 text-eco-blue-dark rounded-full text-sm font-medium mb-4">
              Try It Now
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Optimize Your Home's <span className="eco-gradient-text">Resource Usage</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Input your home's details to get personalized recommendations for optimizing 
              energy and water consumption in your appliances.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <PredictionForm onSubmit={handlePrediction} isLoading={isLoading} />
            {predictionResult && <ResultsDisplay result={predictionResult} />}
          </div>
        </div>
      </section>
      
      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-eco-green-light/20 text-eco-green-dark rounded-full text-sm font-medium mb-4">
              Expert Advice
            </span>
            <h2 className="text-3xl font-bold mb-4">
              Energy Efficiency <span className="eco-gradient-text">Tips</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              Implement these strategies to maximize the efficiency of your home appliances
              and reduce resource consumption.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {efficiencyTips.map((tip) => (
              <RecommendationCard
                key={tip.id}
                title={tip.title}
                description={tip.description}
                icon={tip.icon}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <InfoSection />
      
      {/* Call to Action */}
      <section className="py-16 bg-eco-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <Leaf className="h-12 w-12 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">
            Start Conserving Resources Today
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/80">
            Join thousands of homeowners who have reduced their energy and water consumption 
            by up to 30% using our smart optimization system.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" href="#optimize">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-eco-blue-dark" href="#contact">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;