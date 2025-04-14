
import { toast } from "sonner";

export interface PredictionInput {
  usage_percent: number;
  humidity_percent: number;
  solar_kwh: number;
  wall_material?: string;
  roof_type?: string;
  building_orientation?: string;
}

export interface PredictionResult {
  predicted_score: number;
  recommendations: string[];
  savings_potential: {
    energy: number;
    water: number;
    cost: number;
  };
  model_info?: {
    name: string;
    algorithm: string;
    accuracy: number;
  };
}

// This function simulates the Gradient Boosting Regressor model
// based on the provided Python code
export const predictEnergyEfficiency = async (
  input: PredictionInput
): Promise<PredictionResult> => {
  try {
    console.log("Prediction input:", input);
    
    // For demo purposes, we'll simulate the API call with a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    // Simulating the Gradient Boosting Regressor prediction logic from the Python code
    // This is based on the ML model code shared (GradientBoostingRegressor)
    
    // Base score calculation (simplified version of your model's prediction)
    const baseScore = 50;
    let score = baseScore;
    
    // Apply weights similar to what the model might learn
    // Higher usage of energy efficient appliances increases the score
    score += input.usage_percent * 0.2;
    
    // Optimal humidity is around 45%, deviation reduces the score
    // This mirrors the preprocessing in the Python model
    const humidityFactor = Math.abs(input.humidity_percent - 45) * 0.1;
    score -= humidityFactor;
    
    // Solar energy improves the score (significant positive factor in the model)
    score += input.solar_kwh * 2;
    
    // Wall material impact (simulating the categorical encoding effect)
    if (input.wall_material === "Brick") score += 5;
    else if (input.wall_material === "Concrete") score += 3;
    else if (input.wall_material === "Wood") score -= 2;
    
    // Roof type impact
    if (input.roof_type === "Solar Roof") score += 8;
    else if (input.roof_type === "Metal") score += 4;
    else if (input.roof_type === "Asphalt Shingles") score += 0;
    
    // Building orientation impact
    if (input.building_orientation === "South") score += 5;
    else if (input.building_orientation === "East" || input.building_orientation === "West") score += 2;
    else if (input.building_orientation === "North") score -= 1;
    
    // Cap the score between 0 and 100
    const predictedScore = Math.max(0, Math.min(100, score));
    
    // Generate recommendations based on the input and model knowledge
    const recommendations = [];
    if (input.usage_percent < 60) {
      recommendations.push("Consider upgrading to more energy-efficient appliances");
    }
    if (input.humidity_percent < 30 || input.humidity_percent > 60) {
      recommendations.push("Maintain optimal humidity levels between 40-50% for energy efficiency");
    }
    if (input.solar_kwh < 5) {
      recommendations.push("Installing or expanding solar panels could significantly improve your energy score");
    }
    if (input.roof_type !== "Solar Roof") {
      recommendations.push("Upgrading to a solar roof could improve energy efficiency significantly");
    }
    if (input.building_orientation !== "South" && input.solar_kwh > 0) {
      recommendations.push("Consider adjusting solar panel orientation for optimal energy capture");
    }
    if (predictedScore < 70) {
      recommendations.push("Set appliances to run during off-peak hours to save energy");
    }
    if (recommendations.length === 0) {
      recommendations.push("Your settings are already optimized for energy efficiency!");
    }
    
    // Calculate potential savings (based on the difference from a perfect score)
    const savingsPotential = {
      energy: Math.round((100 - predictedScore) * 0.5), // kWh per month
      water: Math.round((100 - predictedScore) * 2.5), // Gallons per month
      cost: Math.round((100 - predictedScore) * 0.3 * 12), // $ per year
    };
    
    // Return prediction result with model info
    return {
      predicted_score: Math.round(predictedScore * 10) / 10,
      recommendations,
      savings_potential: savingsPotential,
      model_info: {
        name: "Gradient Boosting Regressor",
        algorithm: "Ensemble Learning",
        accuracy: 97.0 // Updated from 92.3 to 97.0 as per the actual model accuracy
      }
    };
    
  } catch (error) {
    console.error("Error predicting energy efficiency:", error);
    toast.error("Failed to get prediction. Please try again.");
    throw error;
  }
};