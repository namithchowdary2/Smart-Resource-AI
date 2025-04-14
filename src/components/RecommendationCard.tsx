
import React from "react";
import { 
  Clock, 
  Droplets, 
  Settings, 
  Thermometer, 
  PlugZap, 
  SunMoon, 
  Waves, 
  Leaf, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecommendationCardProps {
  title: string;
  description: string;
  icon: string;
  link?: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  description,
  icon,
  link = "/tips",
}) => {
  const getIcon = () => {
    switch (icon) {
      case "clock":
        return <Clock className="h-5 w-5" />;
      case "droplets":
        return <Droplets className="h-5 w-5" />;
      case "settings":
        return <Settings className="h-5 w-5" />;
      case "thermometer":
        return <Thermometer className="h-5 w-5" />;
      case "plug":
        return <PlugZap className="h-5 w-5" />;
      case "sun":
        return <SunMoon className="h-5 w-5" />;
      case "waves":
        return <Waves className="h-5 w-5" />;
      default:
        return <Leaf className="h-5 w-5" />;
    }
  };

  return (
    <div className="eco-card p-5 h-full flex flex-col">
      <div className="flex items-center mb-3">
        <div className="w-10 h-10 rounded-full bg-eco-gradient flex items-center justify-center text-white mr-3">
          {getIcon()}
        </div>
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
      
      <Button 
        variant="link" 
        className="mt-4 p-0 h-auto text-eco-blue-dark hover:text-eco-blue justify-start"
        href={link}
      >
        Learn more
        <ArrowRight className="h-4 w-4 ml-1" />
      </Button>
    </div>
  );
};

export default RecommendationCard;