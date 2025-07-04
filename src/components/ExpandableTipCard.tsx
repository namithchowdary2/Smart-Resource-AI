import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ExpandableTipCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  details?: string[];
  savings?: string;
}

const ExpandableTipCard: React.FC<ExpandableTipCardProps> = ({
  title,
  description,
  icon,
  details = [],
  savings
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const defaultDetails = [
    "Implement during off-peak hours for maximum savings",
    "Monitor usage patterns for optimal performance",
    "Regular maintenance increases efficiency",
    "Combine with other tips for compound benefits"
  ];

  const tipDetails = details.length > 0 ? details : defaultDetails;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-primary/20">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-full">
                {icon}
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 h-8 w-8"
            >
              {isExpanded ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-3">{description}</p>
          
          {savings && (
            <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-medium mb-3">
              💰 Potential savings: {savings}
            </div>
          )}

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="border-t pt-3 mt-3">
                  <h4 className="font-medium text-sm mb-2 text-gray-800">Implementation Tips:</h4>
                  <ul className="space-y-1">
                    {tipDetails.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-sm text-gray-600 flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExpandableTipCard;