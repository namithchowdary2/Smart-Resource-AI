
import { PredictionResult } from "@/api/predictAPI";
import { format } from "date-fns";

export function generateReport(data: PredictionResult): string {
  // Get today's date in a nice format
  const dateStr = format(new Date(), "MMMM d, yyyy");
  
  // Format savings with 2 decimal places
  const formatSavings = (value: number): string => value.toFixed(2);
  
  // Generate the report content
  const reportContent = `
ENERGY EFFICIENCY REPORT
Generated on: ${dateStr}
----------------------------------------

EFFICIENCY SCORE: ${data.predicted_score}/100
MODEL: ${data.model_info?.name || "Energy Prediction Model"}
ACCURACY: ${data.model_info?.accuracy || "N/A"}%

----------------------------------------
RECOMMENDATIONS:
${data.recommendations.map(rec => `- ${rec}`).join('\n')}

----------------------------------------
POTENTIAL MONTHLY SAVINGS:

Energy: ${formatSavings(data.savings_potential.energy)} kWh
Water: ${formatSavings(data.savings_potential.water)} Gallons
Annual Cost Savings: $${formatSavings(data.savings_potential.cost)}

----------------------------------------
Thank you for using our Energy Efficiency Prediction Tool.
For more information, please contact support.
`;

  return reportContent;
}

export function downloadReportFile(data: PredictionResult): void {
  // Generate the report content
  const reportContent = generateReport(data);
  
  // Create a blob with the text content
  const blob = new Blob([reportContent], { type: "text/plain" });
  
  // Create a download link
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `energy-report-${format(new Date(), "yyyy-MM-dd")}.txt`;
  
  // Trigger download
  document.body.appendChild(link);
  link.click();
  
  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}