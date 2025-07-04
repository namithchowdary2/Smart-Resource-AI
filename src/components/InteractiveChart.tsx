import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ChartData {
  name: string;
  value: number;
  color: string;
}

interface InteractiveChartProps {
  score: number;
}

const InteractiveChart: React.FC<InteractiveChartProps> = ({ score }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data: ChartData[] = [
    { name: 'Energy Efficiency', value: score, color: '#3B82F6' },
    { name: 'Water Conservation', value: Math.max(0, score - 5 + Math.random() * 10), color: '#10B981' },
    { name: 'Carbon Reduction', value: Math.max(0, score - 8 + Math.random() * 15), color: '#F59E0B' },
    { name: 'Cost Savings', value: Math.max(0, score - 3 + Math.random() * 8), color: '#8B5CF6' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-64 bg-white rounded-lg p-4 shadow-lg"
    >
      <h3 className="text-lg font-semibold mb-4 text-center">Efficiency Breakdown</h3>
      <div className="space-y-3">
        {data.map((item, index) => (
          <motion.div
            key={item.name}
            className="relative"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{item.name}</span>
              <span className="text-sm font-bold">{item.value.toFixed(1)}/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 relative overflow-hidden">
              <motion.div
                className="h-full rounded-full transition-all duration-300"
                style={{ 
                  backgroundColor: item.color,
                  opacity: hoveredIndex === null || hoveredIndex === index ? 1 : 0.6
                }}
                initial={{ width: 0 }}
                animate={{ width: `${item.value}%` }}
                transition={{ delay: index * 0.2 + 0.5, duration: 1, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default InteractiveChart;