
import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import PredictionForm from "@/components/PredictionForm";
import ResultsDisplay from "@/components/ResultsDisplay";
import RecommendationCard from "@/components/RecommendationCard";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleBackground from "@/components/ParticleBackground";
import InteractiveChart from "@/components/InteractiveChart";
import ExpandableTipCard from "@/components/ExpandableTipCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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
  const [heroRef, heroVisible] = useScrollReveal();
  const [aboutRef, aboutVisible] = useScrollReveal();
  const [statsRef, statsVisible] = useScrollReveal();

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
      <section className="relative py-20 bg-gradient-to-br from-white to-blue-50 overflow-hidden" id="home" ref={heroRef}>
        <ParticleBackground />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-3 py-1 bg-eco-blue-light/20 text-eco-blue-dark rounded-full text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Machine Learning Powered
              </motion.span>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Smart Resource <span className="eco-gradient-text">Conservation</span> for Home Appliances
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Optimize your home's energy and water consumption with our advanced 
                machine learning model without sacrificing performance.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={heroVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button className="bg-eco-gradient" size="lg" href="#optimize">
                    Optimize Now
                    <ArrowDown className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="lg" href="#about">
                    Learn How It Works
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={heroVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative" ref={statsRef}>
                <motion.div 
                  className="w-64 h-64 md:w-80 md:h-80 bg-eco-gradient rounded-full opacity-20 absolute -top-4 -left-4"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <motion.div 
                  className="relative z-10 bg-white p-6 rounded-xl shadow-xl"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-60 flex items-center justify-center bg-gray-100 rounded-lg mb-4">
                    <div className="text-center px-6">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <BarChartHorizontal className="mx-auto h-12 w-12 text-eco-blue-light mb-2" />
                      </motion.div>
                      <h3 className="text-lg font-medium mb-1">Energy Efficiency Score</h3>
                      <p className="text-sm text-gray-500">
                        Our ML model analyzes your appliance usage and provides a detailed efficiency score
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="text-center">
                      <AnimatedCounter target={30} suffix="%" prefix="-" isVisible={statsVisible} className="text-eco-blue" />
                      <div className="text-gray-500">Energy Use</div>
                    </div>
                    <div className="text-center">
                      <AnimatedCounter target={25} suffix="%" prefix="-" isVisible={statsVisible} className="text-eco-green" />
                      <div className="text-gray-500">Water Use</div>
                    </div>
                    <div className="text-center">
                      <AnimatedCounter target={20} suffix="%" prefix="-" isVisible={statsVisible} className="text-eco-green-dark" />
                      <div className="text-gray-500">Carbon</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-16 bg-gray-50" id="about" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block px-3 py-1 bg-eco-green-light/20 text-eco-green-dark rounded-full text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={aboutVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              How It Works
            </motion.span>
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Smart Conservation Through <span className="eco-gradient-text">Machine Learning</span>
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our system leverages advanced machine learning algorithms to analyze your home appliance 
              usage patterns and recommend optimal operating conditions.
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 bg-eco-blue-light/20 rounded-full flex items-center justify-center mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <RefreshCw className="h-6 w-6 text-eco-blue-dark" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Data Collection</h3>
              <p className="text-gray-600">
                The system collects usage data from your appliances including energy consumption, 
                operating times, and environmental conditions.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 bg-eco-green-light/20 rounded-full flex items-center justify-center mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              >
                <BarChartHorizontal className="h-6 w-6 text-eco-green-dark" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Pattern Analysis</h3>
              <p className="text-gray-600">
                Our machine learning model analyzes patterns to identify opportunities for 
                optimization without affecting your daily routine.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={aboutVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div 
                className="w-12 h-12 bg-eco-gradient rounded-full flex items-center justify-center mb-4"
                whileHover={{ scale: 1.2, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Lightbulb className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized recommendations to optimize appliance usage, 
                schedules, and settings for maximum resource conservation.
              </p>
            </motion.div>
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
            <div className="space-y-6">
              {predictionResult && <ResultsDisplay result={predictionResult} />}
              {predictionResult && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <InteractiveChart score={predictionResult.predicted_score} />
                </motion.div>
              )}
            </div>
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
            {efficiencyTips.map((tip, index) => (
              <motion.div
                key={tip.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <ExpandableTipCard
                  title={tip.title}
                  description={tip.description}
                  icon={tip.icon}
                  savings={`$${Math.floor(Math.random() * 200 + 50)}/year`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <InfoSection />
      
      {/* Call to Action */}
      <section className="py-16 bg-eco-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 40% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Leaf className="h-12 w-12 mx-auto mb-6" />
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Start Conserving Resources Today
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto mb-8 text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of homeowners who have reduced their energy and water consumption 
            by up to 30% using our smart optimization system.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="secondary" href="#optimize">
                Get Started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-eco-blue-dark" href="#contact">
                Schedule Demo
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;