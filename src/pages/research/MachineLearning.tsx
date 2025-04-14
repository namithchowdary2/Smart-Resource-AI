
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BarChart } from "lucide-react";

const MachineLearning = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <BarChart className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">Machine Learning for Residential Energy Optimization</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-3/4">
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="font-medium">Authors: Dr. Sarah Johnson, Dr. Michael Lee</p>
                <p className="text-gray-600">Journal of Sustainable Computing, 2024</p>
              </div>
              
              <div className="prose max-w-none">
                <h2>Abstract</h2>
                <p>
                  This paper presents novel machine learning algorithms for optimizing household energy consumption 
                  based on usage patterns and environmental factors. We demonstrate that our approach achieves a 17% 
                  improvement in energy efficiency compared to traditional rule-based systems, while maintaining 
                  user comfort and satisfaction. The proposed system adapts to changing conditions and user behaviors 
                  over time, providing increasingly personalized recommendations for conservation.
                </p>
                
                <h2>1. Introduction</h2>
                <p>
                  Residential energy consumption accounts for approximately 20% of total energy usage in developed 
                  countries. Smart home technologies and IoT devices offer new opportunities for monitoring and 
                  optimizing this consumption. However, existing solutions often rely on static rules or simple 
                  heuristics that fail to capture the complexity of household behaviors and environmental conditions.
                </p>
                <p>
                  In this paper, we introduce a machine learning framework that leverages multi-modal sensor data 
                  to build personalized energy consumption models. These models enable precise predictions of energy 
                  needs and recommendations for optimization that balance efficiency with user preferences.
                </p>
                
                <h2>2. Methodology</h2>
                <p>
                  Our approach combines several machine learning techniques to address different aspects of the energy 
                  optimization problem:
                </p>
                <h3>2.1 Data Collection and Preprocessing</h3>
                <p>
                  We collected data from 150 households over a 12-month period, including:
                </p>
                <ul>
                  <li>Energy consumption at 15-minute intervals</li>
                  <li>Indoor temperature and humidity</li>
                  <li>Occupancy patterns</li>
                  <li>Appliance-specific usage</li>
                  <li>Weather conditions</li>
                  <li>User comfort preferences</li>
                </ul>
                <p>
                  The data was cleaned, normalized, and augmented with derived features such as day-of-week, 
                  hour-of-day, and seasonal indicators.
                </p>
                
                <h3>2.2 Consumption Prediction Models</h3>
                <p>
                  We developed an ensemble of gradient-boosted decision trees and recurrent neural networks to predict 
                  energy consumption based on historical patterns and contextual factors. The model architecture allows 
                  for both short-term predictions (next 24 hours) and long-term forecasts (weekly and monthly).
                </p>
                
                <h3>2.3 Optimization Algorithm</h3>
                <p>
                  Using reinforcement learning techniques, we implemented an optimization algorithm that suggests 
                  adjustments to thermostat settings, appliance usage schedules, and other controllable parameters. 
                  The reward function balances energy savings with user comfort preferences, learned through explicit 
                  feedback and implicit behavior patterns.
                </p>
                
                <h2>3. Results</h2>
                <p>
                  Our evaluation shows that the proposed system achieves:
                </p>
                <ul>
                  <li>17% reduction in overall energy consumption compared to baseline</li>
                  <li>93% user satisfaction rate with recommended adjustments</li>
                  <li>Prediction accuracy of 94.3% for next-day consumption patterns</li>
                  <li>Adaptation to seasonal changes within 7-10 days</li>
                </ul>
                
                <h2>4. Conclusion</h2>
                <p>
                  The machine learning approach described in this paper demonstrates significant potential for 
                  residential energy optimization without sacrificing user comfort. By continuously adapting to 
                  changing conditions and learning from user behaviors, the system provides increasingly personalized 
                  and effective recommendations over time. Future work will focus on expanding the model to incorporate 
                  additional data sources and exploring transfer learning techniques to improve performance for new users 
                  with limited historical data.
                </p>
                
                <h2>References</h2>
                <ol>
                  <li>Johnson, S., et al. (2023). "Survey of Machine Learning Approaches for Energy Optimization." International Journal of Energy Research, 47(3), 245-267.</li>
                  <li>Lee, M., & Wilson, J. (2022). "Reinforcement Learning for Smart Thermostats." Proceedings of the Energy Efficiency Conference, 112-125.</li>
                  <li>Zhang, Q., et al. (2023). "Time Series Forecasting for Residential Energy Consumption." Applied Energy, 310, 118571.</li>
                  <li>Patel, P., & Chen, E. (2022). "User Comfort Models in Smart Buildings." Building and Environment, 204, 108172.</li>
                  <li>Williams, A., et al. (2023). "Multi-modal Sensing for Occupancy Detection." IEEE Sensors Journal, 23(8), 15432-15445.</li>
                </ol>
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Related Research</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-eco-blue hover:underline">Comparative Analysis of Energy Prediction Models</a>
                    <p className="text-sm text-gray-600 mt-1">Dr. Lisa Zhang, 2023</p>
                  </li>
                  <li>
                    <a href="#" className="text-eco-blue hover:underline">User Behavior Modeling for Resource Conservation</a>
                    <p className="text-sm text-gray-600 mt-1">Prof. Robert Chen, 2024</p>
                  </li>
                  <li>
                    <a href="#" className="text-eco-blue hover:underline">Deep Learning for Appliance-Level Energy Disaggregation</a>
                    <p className="text-sm text-gray-600 mt-1">Dr. Tanya Patel, 2023</p>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Download</h3>
                  <Button variant="outline" className="w-full mb-2">PDF (1.2 MB)</Button>
                  <Button variant="outline" className="w-full">Supplementary Data</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button href="/research" variant="outline" className="text-eco-blue border-eco-blue">
              Back to Research Papers
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MachineLearning;