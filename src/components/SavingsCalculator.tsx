import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, DollarSign, Zap, Droplets } from "lucide-react";
import { motion } from "framer-motion";

interface SavingsData {
  monthlyEnergyBill: number;
  monthlyWaterBill: number;
  homeSize: number;
  appliances: number;
}

interface SavingsResult {
  energySavings: number;
  waterSavings: number;
  totalSavings: number;
  carbonReduction: number;
}

const SavingsCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<SavingsData>({
    monthlyEnergyBill: 0,
    monthlyWaterBill: 0,
    homeSize: 0,
    appliances: 0
  });
  const [result, setResult] = useState<SavingsResult | null>(null);

  const calculateSavings = () => {
    // Calculate estimated savings based on industry averages
    const energyEfficiencyRate = 0.25; // 25% average energy savings
    const waterEfficiencyRate = 0.20; // 20% average water savings
    
    const energySavings = formData.monthlyEnergyBill * energyEfficiencyRate * 12;
    const waterSavings = formData.monthlyWaterBill * waterEfficiencyRate * 12;
    const totalSavings = energySavings + waterSavings;
    
    // Calculate carbon reduction (roughly 0.5 kg CO2 per kWh saved)
    const carbonReduction = (energySavings / 0.12) * 0.5; // Assuming $0.12 per kWh
    
    setResult({
      energySavings,
      waterSavings,
      totalSavings,
      carbonReduction
    });
  };

  const handleInputChange = (field: keyof SavingsData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: parseFloat(value) || 0
    }));
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)}
        className="bg-eco-green hover:bg-eco-green-dark text-white"
      >
        <Calculator className="mr-2 h-4 w-4" />
        Calculate Your Savings
      </Button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calculator className="mr-2 h-5 w-5" />
                  Savings Calculator
                </CardTitle>
                <CardDescription>
                  Calculate your potential savings with smart resource conservation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="energy-bill">Monthly Energy Bill ($)</Label>
                    <Input
                      id="energy-bill"
                      type="number"
                      placeholder="150"
                      onChange={(e) => handleInputChange('monthlyEnergyBill', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="water-bill">Monthly Water Bill ($)</Label>
                    <Input
                      id="water-bill"
                      type="number"
                      placeholder="75"
                      onChange={(e) => handleInputChange('monthlyWaterBill', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="home-size">Home Size (sq ft)</Label>
                    <Input
                      id="home-size"
                      type="number"
                      placeholder="2000"
                      onChange={(e) => handleInputChange('homeSize', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="appliances">Number of Major Appliances</Label>
                    <Input
                      id="appliances"
                      type="number"
                      placeholder="8"
                      onChange={(e) => handleInputChange('appliances', e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button onClick={calculateSavings} className="bg-eco-blue">
                    Calculate Savings
                  </Button>
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Close
                  </Button>
                </div>

                {result && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 space-y-4"
                  >
                    <h3 className="text-lg font-semibold">Your Estimated Annual Savings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Zap className="h-5 w-5 text-blue-600 mr-2" />
                          <span className="font-medium">Energy Savings</span>
                        </div>
                        <p className="text-2xl font-bold text-blue-600">
                          ${result.energySavings.toFixed(0)}
                        </p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <Droplets className="h-5 w-5 text-green-600 mr-2" />
                          <span className="font-medium">Water Savings</span>
                        </div>
                        <p className="text-2xl font-bold text-green-600">
                          ${result.waterSavings.toFixed(0)}
                        </p>
                      </div>
                      <div className="bg-eco-gradient rounded-lg p-4 text-white">
                        <div className="flex items-center mb-2">
                          <DollarSign className="h-5 w-5 mr-2" />
                          <span className="font-medium">Total Annual Savings</span>
                        </div>
                        <p className="text-2xl font-bold">
                          ${result.totalSavings.toFixed(0)}
                        </p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <span className="font-medium">Carbon Reduction</span>
                        </div>
                        <p className="text-lg font-bold text-gray-700">
                          {result.carbonReduction.toFixed(0)} kg CO₂/year
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default SavingsCalculator;