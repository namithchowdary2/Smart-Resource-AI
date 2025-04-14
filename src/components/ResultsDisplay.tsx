import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { PredictionResult } from "@/api/predictAPI";
import { Check, Brain, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { downloadReportFile } from "@/utils/reportGenerator";
import { playClickSound, playSuccessSound } from "@/utils/soundUtils";

interface ResultsDisplayProps {
  result: PredictionResult | null;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [savingsData, setSavingsData] = useState<any[]>([]);
  
  useEffect(() => {
    if (result) {
      setChartData([
        { name: "Efficiency", value: result.predicted_score },
        { name: "Remaining", value: 100 - result.predicted_score }
      ]);
      
      setSavingsData([
        { name: "Energy (kWh/mo)", value: result.savings_potential.energy },
        { name: "Water (Gal/mo)", value: result.savings_potential.water / 10 },
        { name: "Cost ($/yr)", value: result.savings_potential.cost }
      ]);
    }
  }, [result]);
  
  if (!result) {
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "#4D9D74";
    if (score >= 60) return "#57A0D3";
    if (score >= 40) return "#FFC107";
    return "#F44336";
  };
  
  const scoreColor = getScoreColor(result.predicted_score);
  
  const COLORS = ["#4D9D74", "#ECEFF1"];
  const SAVINGS_COLORS = ["#57A0D3", "#8CD790", "#4D9D74"];

  const handleDownloadReport = () => {
    if (result) {
      playSuccessSound();
      downloadReportFile(result);
    }
  };

  return (
    <motion.div 
      className="eco-card overflow-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => playSuccessSound()}
    >
      <div className="bg-eco-gradient p-4 text-white flex justify-between items-center">
        <h2 className="text-xl font-semibold">Prediction Results</h2>
        {result.model_info && (
          <Badge className="bg-white/20 hover:bg-white/30 text-white">
            <Brain className="mr-1 h-3 w-3" />
            ML Powered
          </Badge>
        )}
      </div>
      
      <div className="p-6">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-medium text-gray-700 mb-1">Energy Efficiency Score</h3>
            <div className="flex items-baseline">
              <span className="text-4xl font-bold" style={{ color: scoreColor }}>
                {result.predicted_score}
              </span>
              <span className="text-xl text-gray-500 ml-1">/100</span>
            </div>
            <div 
              className="mt-1 text-sm" 
              style={{ color: scoreColor }}
            >
              {result.predicted_score >= 80
                ? "Excellent"
                : result.predicted_score >= 60
                ? "Good"
                : result.predicted_score >= 40
                ? "Average"
                : "Poor"}
            </div>
          </div>
          
          <div className="w-40 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={60}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  startAngle={90}
                  endAngle={-270}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {result.model_info && (
          <motion.div 
            className="mb-6 bg-gray-50 rounded-lg p-4 border border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-medium text-gray-700 mb-2 flex items-center">
              <Brain className="mr-2 h-5 w-5 text-eco-blue" />
              Model Information
            </h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-2">
                <p className="text-sm text-gray-500">Model Type</p>
                <p className="font-medium">{result.model_info.name}</p>
              </div>
              <div className="p-2">
                <p className="text-sm text-gray-500">Algorithm</p>
                <p className="font-medium">{result.model_info.algorithm}</p>
              </div>
              <div className="p-2">
                <p className="text-sm text-gray-500">Accuracy</p>
                <p className="font-medium">{result.model_info.accuracy}%</p>
              </div>
            </div>
          </motion.div>
        )}
        
        <div className="mb-8">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Recommendations</h3>
          <ul className="space-y-2">
            {result.recommendations.map((recommendation, index) => (
              <motion.li 
                key={index} 
                className="flex items-start"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <span className="mr-2 mt-1 flex-shrink-0">
                  <Check className="h-4 w-4 text-eco-green" />
                </span>
                <span>{recommendation}</span>
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-700 mb-3">Potential Monthly Savings</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={savingsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Amount">
                  {savingsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={SAVINGS_COLORS[index % SAVINGS_COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Energy</p>
              <p className="font-bold text-eco-blue-dark">{result.savings_potential.energy} kWh</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Water</p>
              <p className="font-bold text-eco-green-dark">{result.savings_potential.water} Gal</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">Annual Cost</p>
              <p className="font-bold text-eco-green">${result.savings_potential.cost}</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button className="bg-eco-gradient" onClick={handleDownloadReport}>
            <Download className="mr-2 h-4 w-4" />
            Download Full Report
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsDisplay;