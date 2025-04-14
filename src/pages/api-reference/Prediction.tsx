
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Brain } from "lucide-react";

const Prediction = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">Energy Efficiency Prediction API</h1>
          </div>

          <div className="prose max-w-none">
            <div className="bg-eco-blue/5 border border-eco-blue/20 p-4 rounded-md mb-6 flex items-center">
              <Brain className="h-6 w-6 text-eco-blue mr-3" />
              <p className="lead text-lg mb-0">
                This API uses a <span className="font-semibold">Gradient Boosting Regressor</span> machine learning model
                to predict energy efficiency scores for homes based on building characteristics and energy usage patterns.
              </p>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="mt-0">Endpoint</h3>
              <code className="block text-sm p-2 bg-black text-white rounded">POST /api/v1/predict/energy-efficiency</code>
            </div>
            
            <h2>Authentication</h2>
            <p>
              All API requests require an API key passed in the Authorization header:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <code className="block text-sm p-2 bg-black text-white rounded">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
            
            <h2>Request Parameters</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">Parameter</th>
                    <th className="border border-gray-300 p-2 text-left">Type</th>
                    <th className="border border-gray-300 p-2 text-left">Required</th>
                    <th className="border border-gray-300 p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">usage_of_energy_efficient_appliances_percent</td>
                    <td className="border border-gray-300 p-2">number</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Percentage of energy efficient appliances used (0-100)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">humidity_levels_percent</td>
                    <td className="border border-gray-300 p-2">number</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Humidity level percentage (0-100)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">solar_energy_generated_kwh_per_day</td>
                    <td className="border border-gray-300 p-2">number</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Solar energy generated in kWh per day</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">wall_material_type</td>
                    <td className="border border-gray-300 p-2">string</td>
                    <td className="border border-gray-300 p-2">No</td>
                    <td className="border border-gray-300 p-2">Type of wall material (Brick, Concrete, Wood, etc.)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">roof_type</td>
                    <td className="border border-gray-300 p-2">string</td>
                    <td className="border border-gray-300 p-2">No</td>
                    <td className="border border-gray-300 p-2">Type of roof (Solar Roof, Metal, Asphalt Shingles, etc.)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">building_orientation</td>
                    <td className="border border-gray-300 p-2">string</td>
                    <td className="border border-gray-300 p-2">No</td>
                    <td className="border border-gray-300 p-2">Building orientation (North, South, East, West)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2>Response Format</h2>
            <p>
              The API returns JSON data with the predicted energy efficiency score and recommendations:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <pre className="text-sm p-2 bg-black text-white rounded overflow-x-auto">
{`{
  "status": "success",
  "data": {
    "predicted_score": 78.5,
    "recommendations": [
      "Installing or expanding solar panels could significantly improve your energy score",
      "Set appliances to run during off-peak hours to save energy"
    ],
    "savings_potential": {
      "energy": 12.5,   // kWh per month
      "water": 62.5,    // Gallons per month
      "cost": 72        // $ per year
    },
    "model_info": {
      "name": "Gradient Boosting Regressor",
      "algorithm": "Ensemble Learning",
      "accuracy": 97.0
    }
  }
}`}
              </pre>
            </div>
            
            <h2>Example Request</h2>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <pre className="text-sm p-2 bg-black text-white rounded overflow-x-auto">
{`curl -X POST "https://api.smartresource.com/api/v1/predict/energy-efficiency" \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "usage_of_energy_efficient_appliances_percent": 60,
    "humidity_levels_percent": 45,
    "solar_energy_generated_kwh_per_day": 5.0,
    "wall_material_type": "Brick",
    "roof_type": "Asphalt Shingles",
    "building_orientation": "South"
  }'`}
              </pre>
            </div>
            
            <h2>Model Information</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Algorithm</td>
                    <td className="border border-gray-300 p-2">Gradient Boosting Regressor</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Features</td>
                    <td className="border border-gray-300 p-2">Appliance usage, humidity, solar energy, construction materials</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Accuracy</td>
                    <td className="border border-gray-300 p-2">~97.0% (R² score)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Data Processing</td>
                    <td className="border border-gray-300 p-2">Label encoding for categorical variables, standard scaling for numerical features</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Training Dataset</td>
                    <td className="border border-gray-300 p-2">Renewable energy rural home dataset</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2>Error Codes</h2>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 text-left">Status Code</th>
                    <th className="border border-gray-300 p-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">400</td>
                    <td className="border border-gray-300 p-2">Bad Request - Missing or invalid parameters</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">401</td>
                    <td className="border border-gray-300 p-2">Unauthorized - Invalid API key</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">403</td>
                    <td className="border border-gray-300 p-2">Forbidden - Insufficient permissions</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">422</td>
                    <td className="border border-gray-300 p-2">Unprocessable Entity - Input values out of allowed ranges</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">500</td>
                    <td className="border border-gray-300 p-2">Server Error - Prediction model error</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8">
              <Button href="/api-reference" variant="outline" className="text-eco-blue border-eco-blue">
                Back to API Reference
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Prediction;