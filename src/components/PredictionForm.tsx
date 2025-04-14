
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { PredictionInput } from "@/api/predictAPI";
import { 
  wallMaterialOptions, 
  roofTypeOptions, 
  buildingOrientationOptions 
} from "@/data/mockData";
import { Brain } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { playClickSound, playErrorSound } from "@/utils/soundUtils";

interface PredictionFormProps {
  onSubmit: (data: PredictionInput) => void;
  isLoading: boolean;
}

const PredictionForm: React.FC<PredictionFormProps> = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState<PredictionInput>({
    usage_percent: 60,
    humidity_percent: 45,
    solar_kwh: 5,
    wall_material: "Brick",
    roof_type: "Asphalt Shingles",
    building_orientation: "South",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = parseFloat(value);
    
    if (!isNaN(numValue)) {
      setFormData((prev) => ({ ...prev, [name]: numValue }));
    }
  };

  const handleSliderChange = (name: string, value: number[]) => {
    playClickSound();
    setFormData((prev) => ({ ...prev, [name]: value[0] }));
  };

  const handleSelectChange = (name: string, value: string) => {
    playClickSound();
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (formData.usage_percent < 0 || formData.usage_percent > 100) {
      playErrorSound();
      toast.error("Usage percentage must be between 0 and 100");
      return;
    }
    
    if (formData.humidity_percent < 0 || formData.humidity_percent > 100) {
      playErrorSound();
      toast.error("Humidity percentage must be between 0 and 100");
      return;
    }
    
    if (formData.solar_kwh < 0 || formData.solar_kwh > 20) {
      playErrorSound();
      toast.error("Solar energy must be between 0 and 20 kWh");
      return;
    }
    
    playClickSound();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="eco-card">
      <div className="bg-eco-gradient p-4 text-white flex justify-between items-center">
        <h2 className="text-xl font-semibold">Appliance Energy Optimizer</h2>
        <Badge className="bg-white/20 hover:bg-white/30 text-white">
          <Brain className="mr-1 h-3 w-3" />
          Gradient Boosting Regressor
        </Badge>
      </div>
      
      <div className="p-6 space-y-6">
        {/* Energy Efficient Appliances Usage */}
        <div className="form-input-container">
          <div className="flex justify-between mb-2">
            <label htmlFor="usage_percent" className="form-label">
              Energy Efficient Appliances Usage
            </label>
            <span className="text-sm font-medium text-gray-500">
              {formData.usage_percent}%
            </span>
          </div>
          <Slider
            id="usage_percent"
            name="usage_percent"
            value={[formData.usage_percent]}
            min={0}
            max={100}
            step={1}
            onValueChange={(val) => handleSliderChange("usage_percent", val)}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        {/* Humidity Levels */}
        <div className="form-input-container">
          <div className="flex justify-between mb-2">
            <label htmlFor="humidity_percent" className="form-label">
              Humidity Levels
            </label>
            <span className="text-sm font-medium text-gray-500">
              {formData.humidity_percent}%
            </span>
          </div>
          <Slider
            id="humidity_percent"
            name="humidity_percent"
            value={[formData.humidity_percent]}
            min={0}
            max={100}
            step={1}
            onValueChange={(val) => handleSliderChange("humidity_percent", val)}
            className="py-2"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>

        {/* Solar Energy Generated */}
        <div className="form-input-container">
          <label htmlFor="solar_kwh" className="form-label">
            Solar Energy Generated (kWh/day)
          </label>
          <Input
            id="solar_kwh"
            name="solar_kwh"
            type="number"
            value={formData.solar_kwh}
            onChange={handleInputChange}
            min={0}
            max={20}
            step={0.1}
            className="w-full"
          />
        </div>

        {/* Wall Material Type */}
        <div className="form-input-container">
          <label htmlFor="wall_material" className="form-label">
            Wall Material Type
          </label>
          <Select 
            value={formData.wall_material} 
            onValueChange={(val) => handleSelectChange("wall_material", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select wall material" />
            </SelectTrigger>
            <SelectContent>
              {wallMaterialOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Roof Type */}
        <div className="form-input-container">
          <label htmlFor="roof_type" className="form-label">
            Roof Type
          </label>
          <Select 
            value={formData.roof_type} 
            onValueChange={(val) => handleSelectChange("roof_type", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select roof type" />
            </SelectTrigger>
            <SelectContent>
              {roofTypeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Building Orientation */}
        <div className="form-input-container">
          <label htmlFor="building_orientation" className="form-label">
            Building Orientation
          </label>
          <Select 
            value={formData.building_orientation} 
            onValueChange={(val) => handleSelectChange("building_orientation", val)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select building orientation" />
            </SelectTrigger>
            <SelectContent>
              {buildingOrientationOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          type="submit" 
          className="w-full bg-eco-blue hover:bg-eco-blue-dark flex items-center justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>Calculating with ML Model...</>
          ) : (
            <>
              <Brain className="mr-2 h-4 w-4" />
              Run Gradient Boosting Prediction
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default PredictionForm;