
export const wallMaterialOptions = [
  { value: "Brick", label: "Brick" },
  { value: "Concrete", label: "Concrete" },
  { value: "Wood", label: "Wood" },
  { value: "Stone", label: "Stone" },
  { value: "Metal", label: "Metal" },
  { value: "Glass", label: "Glass" }
];

export const roofTypeOptions = [
  { value: "Asphalt Shingles", label: "Asphalt Shingles" },
  { value: "Metal Roof", label: "Metal Roof" },
  { value: "Clay Tiles", label: "Clay Tiles" },
  { value: "Concrete Tiles", label: "Concrete Tiles" },
  { value: "Wood Shingles", label: "Wood Shingles" },
  { value: "Solar Tiles", label: "Solar Tiles" }
];

export const buildingOrientationOptions = [
  { value: "North", label: "North" },
  { value: "South", label: "South" },
  { value: "East", label: "East" },
  { value: "West", label: "West" },
  { value: "Northeast", label: "Northeast" },
  { value: "Northwest", label: "Northwest" },
  { value: "Southeast", label: "Southeast" },
  { value: "Southwest", label: "Southwest" }
];

export const efficiencyTips = [
  {
    id: 1,
    title: "Smart Scheduling",
    description: "Run appliances during off-peak hours to reduce energy costs and environmental impact.",
    icon: "clock"
  },
  {
    id: 2,
    title: "Optimal Temperature",
    description: "Set your refrigerator to 37-40°F and freezer to 0-5°F for best efficiency.",
    icon: "thermometer"
  },
  {
    id: 3,
    title: "Full Loads Only",
    description: "Only run dishwashers and washing machines when they're full to maximize water efficiency.",
    icon: "droplets"
  },
  {
    id: 4,
    title: "Regular Maintenance",
    description: "Clean refrigerator coils and HVAC filters regularly for optimal performance.",
    icon: "settings"
  }
];

export const applianceData = [
  { name: "Refrigerator", avgConsumption: "150 kWh", potentialSavings: "30 kWh" },
  { name: "Washing Machine", avgConsumption: "75 kWh", potentialSavings: "25 kWh" },
  { name: "Dishwasher", avgConsumption: "100 kWh", potentialSavings: "35 kWh" },
  { name: "HVAC", avgConsumption: "900 kWh", potentialSavings: "150 kWh" }
];