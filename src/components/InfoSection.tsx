
import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { applianceData } from "@/data/mockData";

const InfoSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50" id="benefits">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 eco-gradient-text">
            Benefits of Resource Conservation
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our smart resource optimization system helps you reduce energy and water consumption
            without compromising performance, leading to significant savings and environmental benefits.
          </p>
        </div>

        <div className="mb-16">
          <Tabs defaultValue="energy" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="energy">Energy Savings</TabsTrigger>
              <TabsTrigger value="water">Water Conservation</TabsTrigger>
              <TabsTrigger value="cost">Cost Reduction</TabsTrigger>
            </TabsList>
            
            <TabsContent value="energy" className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-4 text-eco-blue-dark">
                    Reduce Energy Consumption
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Home appliances account for approximately 13% of total household energy use. 
                    Our system optimizes operation to reduce unnecessary energy consumption.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-blue-dark"></span>
                      <span>Save up to 30% on refrigerator energy usage</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-blue-dark"></span>
                      <span>Reduce HVAC consumption by optimizing temperature and timing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-blue-dark"></span>
                      <span>Lower standby power waste from idle appliances</span>
                    </li>
                  </ul>
                  <Button className="bg-eco-blue-dark hover:bg-eco-blue" href="/tips">
                    Learn Energy Saving Tips
                  </Button>
                </div>
                
                <div className="md:w-1/2">
                  <h4 className="font-semibold mb-3 text-eco-blue-dark">Average Energy Usage and Potential Savings</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="py-3 px-4 text-left">Appliance</th>
                          <th className="py-3 px-4 text-left">Monthly Usage</th>
                          <th className="py-3 px-4 text-left">Potential Savings</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applianceData.map((item, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                            <td className="py-3 px-4">{item.name}</td>
                            <td className="py-3 px-4">{item.avgConsumption}</td>
                            <td className="py-3 px-4">{item.potentialSavings}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="water" className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-4 text-eco-green-dark">
                    Conserve Water Resources
                  </h3>
                  <p className="mb-4 text-gray-600">
                    Washing machines and dishwashers can waste significant amounts of water.
                    Smart optimization can reduce water usage by up to 40%.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-green-dark"></span>
                      <span>Save up to 15 gallons per dishwasher load</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-green-dark"></span>
                      <span>Reduce washing machine water usage by 40%</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-green-dark"></span>
                      <span>Optimize water heater efficiency</span>
                    </li>
                  </ul>
                  <Button className="bg-eco-green-dark hover:bg-eco-green" href="/research/water-conservation">
                    Water Conservation Guide
                  </Button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-eco-blue-light/10 p-6 rounded-lg">
                    <h4 className="font-semibold mb-3 text-eco-green-dark">Did You Know?</h4>
                    <p className="text-gray-600 mb-4">
                      The average American family uses more than 300 gallons of water per day at home.
                      Approximately 70% of this water is used indoors, with the bathroom being the largest consumer.
                    </p>
                    <div className="bg-white p-4 rounded-lg border border-eco-green/20">
                      <h5 className="font-medium mb-2">Water Usage by Appliance</h5>
                      <ul className="space-y-2 text-sm">
                        <li className="flex justify-between">
                          <span>Standard Washing Machine:</span>
                          <span className="font-semibold">41 gallons/load</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Energy Star Washing Machine:</span>
                          <span className="font-semibold">25 gallons/load</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Standard Dishwasher:</span>
                          <span className="font-semibold">6 gallons/load</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Energy Star Dishwasher:</span>
                          <span className="font-semibold">4 gallons/load</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="cost" className="bg-white rounded-lg p-8 shadow-md">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                  <h3 className="text-2xl font-semibold mb-4 text-eco-green">
                    Save on Utility Bills
                  </h3>
                  <p className="mb-4 text-gray-600">
                    By optimizing your appliances with our smart system, you can significantly 
                    reduce your monthly utility bills while helping the environment.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-green"></span>
                      <span>Average savings of $300-$600 per year</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-green"></span>
                      <span>Reduced maintenance costs through optimized usage</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 mr-2 rounded-full bg-eco-green"></span>
                      <span>Extended appliance lifespan</span>
                    </li>
                  </ul>
                  <Button className="bg-eco-green hover:bg-eco-green-dark" href="#optimize">
                    Calculate Your Savings
                  </Button>
                </div>
                
                <div className="md:w-1/2">
                  <div className="bg-eco-gradient p-6 rounded-lg text-white">
                    <h4 className="font-semibold text-xl mb-3">Annual Savings Potential</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Electricity</span>
                          <span>$120 - $240</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-white h-2.5 rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Water</span>
                          <span>$80 - $150</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-white h-2.5 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Gas/Heating</span>
                          <span>$100 - $200</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-white h-2.5 rounded-full" style={{ width: "55%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span>Maintenance</span>
                          <span>$50 - $100</span>
                        </div>
                        <div className="w-full bg-white/20 rounded-full h-2.5">
                          <div className="bg-white h-2.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <div className="pt-2 border-t border-white/30 mt-4">
                        <div className="flex justify-between font-semibold">
                          <span>Total Potential Savings</span>
                          <span>$350 - $690</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;