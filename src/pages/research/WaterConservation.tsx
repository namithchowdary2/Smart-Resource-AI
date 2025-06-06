
import React, { useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { playSound, playPaperSound } from "@/utils/soundUtils";
import { jsPDF } from "jspdf";

const WaterConservation = () => {
  const { toast } = useToast();
  
  const handleDownload = useCallback((type: string) => {
    playPaperSound();
    
    const paperTitle = "Smart Water Conservation Systems";
    
    // Show toast notification
    toast({
      title: `${type === 'pdf' ? 'Paper' : 'Supplementary Data'} Downloaded`,
      description: `${paperTitle} ${type === 'pdf' ? 'PDF' : 'data'} download started.`,
      variant: "default",
    });
    
    if (type === 'pdf') {
      // Create PDF document
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(18);
      doc.text(`${paperTitle}: A Review`, 20, 20);
      
      // Add authors
      doc.setFontSize(12);
      doc.text(`Authors: Prof. Alexander Williams, Dr. Emily Chen`, 20, 30);
      
      // Add publication
      doc.setFontSize(10);
      doc.text(`Water Resources Management, 2023`, 20, 40);
      
      // Add abstract header
      doc.setFontSize(14);
      doc.text("Abstract", 20, 55);
      
      // Add abstract with word wrapping
      doc.setFontSize(10);
      const abstractText = "This review paper provides a comprehensive analysis of smart water management systems and their effectiveness in reducing residential water consumption. We examine various technologies, including IoT-enabled water meters, leak detection systems, and adaptive irrigation controllers. The paper synthesizes findings from over 50 studies conducted between 2015 and 2023, identifying best practices and areas for future research. Our analysis indicates that smart water systems can achieve average water savings of 15-28% in residential settings when properly implemented and accompanied by user engagement strategies.";
      const splitAbstract = doc.splitTextToSize(abstractText, 170);
      doc.text(splitAbstract, 20, 65);
      
      // Add content sections
      let yPos = 90;
      
      // Introduction section
      doc.setFontSize(14);
      doc.text("1. Introduction", 20, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      const introText = "Water scarcity affects more than 40% of the global population and is projected to worsen with climate change and population growth. Residential water usage accounts for approximately 12% of total water consumption in developed countries, with significant variation depending on local climate and lifestyle factors. Smart water conservation systems have emerged as a promising approach to address this challenge by providing real-time monitoring, automated control, and data-driven insights.";
      const splitIntro = doc.splitTextToSize(introText, 170);
      doc.text(splitIntro, 20, yPos);
      yPos += splitIntro.length * 7;
      
      // Smart Water Metering section
      doc.setFontSize(14);
      doc.text("2. Smart Water Metering", 20, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      const meteringText = "Advanced metering infrastructure (AMI) for water has evolved significantly over the past decade. Current systems typically include high-resolution flow sensors, wireless communication modules, cloud-based analytics platforms, and mobile applications for user engagement and feedback.";
      const splitMetering = doc.splitTextToSize(meteringText, 170);
      doc.text(splitMetering, 20, yPos);
      yPos += splitMetering.length * 7;
      
      // Leak Detection Systems section
      doc.setFontSize(14);
      doc.text("3. Leak Detection Systems", 20, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      const leakText = "Undetected leaks account for an estimated 12-14% of residential water consumption (EPA, 2022). Smart leak detection systems have been developed to address this issue using various approaches including flow pattern analysis, acoustic sensors, moisture sensors, and pressure monitoring systems.";
      const splitLeak = doc.splitTextToSize(leakText, 170);
      doc.text(splitLeak, 20, yPos);
      
      // Add new page for conclusion
      doc.addPage();
      
      // Conclusion section
      doc.setFontSize(14);
      doc.text("6. Conclusion and Future Directions", 20, 20);
      
      doc.setFontSize(10);
      const conclusionText = "This review demonstrates that smart water conservation systems offer significant potential for reducing residential water consumption. The most effective implementations combine accurate measurement, automated controls, leak detection, and user engagement strategies tailored to local contexts.";
      const splitConclusion = doc.splitTextToSize(conclusionText, 170);
      doc.text(splitConclusion, 20, 30);
      
      // Add references
      doc.setFontSize(14);
      doc.text("References", 20, 50);
      
      doc.setFontSize(10);
      doc.text("Thompson, R. et al. (2021). Real-time water consumption feedback and conservation. Journal of Water Resources.", 20, 60);
      doc.text("Garcia-Rodriguez, M. (2022). Smart water metering in urban environments. Urban Technology Review.", 20, 70);
      doc.text("Chen, E., & Williams, A. (2022). Meta-analysis of leak detection technologies. Water Conservation Science.", 20, 80);
      doc.text("Environmental Protection Agency (2022). Residential water consumption report.", 20, 90);
      
      // Save the PDF
      doc.save(`${paperTitle.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } else {
      // For data files, use structured JSON content
      const dataContent = JSON.stringify({
        title: paperTitle,
        authors: "Prof. Alexander Williams, Dr. Emily Chen",
        publication: "Water Resources Management, 2023",
        date: new Date().toISOString(),
        datasets: [
          {
            name: "Household Water Consumption",
            description: "Monthly water usage across 500 households with smart meters",
            samples: [
              { month: "January", smartMeterHouseholds: 245, controlGroup: 320 },
              { month: "February", smartMeterHouseholds: 238, controlGroup: 325 },
              { month: "March", smartMeterHouseholds: 242, controlGroup: 318 },
              { month: "April", smartMeterHouseholds: 230, controlGroup: 322 },
              { month: "May", smartMeterHouseholds: 225, controlGroup: 330 },
              { month: "June", smartMeterHouseholds: 235, controlGroup: 345 },
            ]
          },
          {
            name: "Leak Detection Efficiency",
            description: "Performance metrics for different leak detection technologies",
            technologies: [
              { name: "Flow pattern analysis", detectionRate: 78, falsePositiveRate: 8 },
              { name: "Acoustic sensors", detectionRate: 92, falsePositiveRate: 5 },
              { name: "Moisture sensors", detectionRate: 95, falsePositiveRate: 12 },
              { name: "Pressure monitoring", detectionRate: 85, falsePositiveRate: 7 },
            ]
          }
        ],
        methods: "Data collection methods included smart meter readings, survey responses, and laboratory testing of leak detection systems. Statistical analysis was performed using R (version 4.1.2)."
      }, null, 2);
      
      const blob = new Blob([dataContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      // Create a temporary anchor element for download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${paperTitle.replace(/\s+/g, '-').toLowerCase()}-data.json`;
      
      // Append to document, click to download, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      setTimeout(() => URL.revokeObjectURL(url), 100);
    }
  }, [toast]);

  // ... keep existing code (JSX for the component)
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">Smart Water Conservation Systems: A Review</h1>
          </div>

          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="md:w-3/4">
              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="font-medium">Authors: Prof. Alexander Williams, Dr. Emily Chen</p>
                <p className="text-gray-600">Water Resources Management, 2023</p>
              </div>
              
              <div className="prose max-w-none">
                <h2>Abstract</h2>
                <p>
                  This review paper provides a comprehensive analysis of smart water management systems and their 
                  effectiveness in reducing residential water consumption. We examine various technologies, including 
                  IoT-enabled water meters, leak detection systems, and adaptive irrigation controllers. The paper 
                  synthesizes findings from over 50 studies conducted between 2015 and 2023, identifying best practices 
                  and areas for future research. Our analysis indicates that smart water systems can achieve average 
                  water savings of 15-28% in residential settings when properly implemented and accompanied by user 
                  engagement strategies.
                </p>
                
                {/* ... keep existing code (rest of the paper content) */}
              </div>
            </div>
            
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Related Research</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="#" className="text-eco-blue hover:underline" onClick={() => playSound('click')}>Drought-Resilient Smart Communities</a>
                    <p className="text-sm text-gray-600 mt-1">Dr. Jasmine Rodriguez, 2023</p>
                  </li>
                  <li>
                    <a href="#" className="text-eco-blue hover:underline" onClick={() => playSound('click')}>Water-Energy Nexus in Smart Buildings</a>
                    <p className="text-sm text-gray-600 mt-1">Prof. David Kim, 2022</p>
                  </li>
                  <li>
                    <a href="#" className="text-eco-blue hover:underline" onClick={() => playSound('click')}>IoT Networks for Environmental Monitoring</a>
                    <p className="text-sm text-gray-600 mt-1">Dr. Aisha Patel, 2023</p>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Download</h3>
                  <Button 
                    variant="outline" 
                    className="w-full mb-2" 
                    onClick={() => handleDownload('pdf')}
                  >
                    PDF (2.4 MB)
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => handleDownload('data')}
                  >
                    Supplementary Data
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button href="/research" variant="outline" className="text-eco-blue border-eco-blue" onClick={() => playSound('click')}>
              Back to Research Papers
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WaterConservation;
