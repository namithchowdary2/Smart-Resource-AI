
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { toast } from "@/hooks/useToast";
import { playSound, playPaperSound } from "@/utils/soundUtils";

const WaterConservation = () => {
  const handleDownload = (type: string) => {
    playPaperSound();
    
    // Create a sample text file to download
    const paperTitle = "Smart Water Conservation Systems";
    const content = type === 'pdf' 
      ? `This is a sample PDF content for ${paperTitle}`
      : `This is sample supplementary data for ${paperTitle}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = url;
    link.download = `${paperTitle.replace(/\s+/g, '-').toLowerCase()}${type === 'pdf' ? '.pdf' : '-data.zip'}`;
    
    // Append to document, click to download, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(url), 100);
    
    // Show toast notification
    toast({
      title: `${type === 'pdf' ? 'Paper' : 'Supplementary Data'} Downloaded`,
      description: `${paperTitle} ${type === 'pdf' ? 'PDF' : 'data'} download started.`,
      variant: "default",
    });
  };

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
                
                <h2>1. Introduction</h2>
                <p>
                  Water scarcity affects more than 40% of the global population and is projected to worsen with climate 
                  change and population growth. Residential water usage accounts for approximately 12% of total water 
                  consumption in developed countries, with significant variation depending on local climate and lifestyle 
                  factors. Smart water conservation systems have emerged as a promising approach to address this challenge 
                  by providing real-time monitoring, automated control, and data-driven insights.
                </p>
                <p>
                  This review aims to synthesize current knowledge on smart water conservation technologies, their 
                  implementation strategies, and their measured effectiveness. We also identify gaps in the literature 
                  and propose directions for future research.
                </p>
                
                <h2>2. Smart Water Metering</h2>
                <p>
                  Advanced metering infrastructure (AMI) for water has evolved significantly over the past decade. 
                  Current systems typically include:
                </p>
                <ul>
                  <li>High-resolution flow sensors capable of detecting usage patterns at the fixture level</li>
                  <li>Wireless communication modules for real-time data transmission</li>
                  <li>Cloud-based analytics platforms for data processing and visualization</li>
                  <li>Mobile applications for user engagement and feedback</li>
                </ul>
                <p>
                  Studies by Thompson et al. (2021) and Garcia-Rodriguez (2022) demonstrated that providing households 
                  with real-time water usage information through smart meters resulted in average water consumption 
                  reductions of 9.2% and 12.7%, respectively. These savings were attributed primarily to increased 
                  awareness of water usage patterns and the identification of inefficient behaviors.
                </p>
                
                <h2>3. Leak Detection Systems</h2>
                <p>
                  Undetected leaks account for an estimated 12-14% of residential water consumption (EPA, 2022). Smart 
                  leak detection systems have been developed to address this issue using various approaches:
                </p>
                <ul>
                  <li>Flow pattern analysis to identify continuous low-level usage indicative of leaks</li>
                  <li>Acoustic sensors that detect the sound of water escaping from pipes</li>
                  <li>Moisture sensors placed in critical locations (e.g., under sinks, near water heaters)</li>
                  <li>Pressure monitoring systems that detect sudden or gradual pressure changes</li>
                </ul>
                <p>
                  The effectiveness of these systems varies considerably. A meta-analysis by Chen and Williams (2022) 
                  found that smart leak detection systems reduced water waste from leaks by 62-85% when compared to 
                  traditional periodic inspection approaches.
                </p>
                
                <h2>4. Smart Irrigation Systems</h2>
                <p>
                  Outdoor water usage represents 30-60% of residential water consumption in many regions. Smart irrigation 
                  controllers optimize watering schedules based on:
                </p>
                <ul>
                  <li>Weather data and forecasts</li>
                  <li>Soil moisture sensors</li>
                  <li>Evapotranspiration models</li>
                  <li>Plant-specific water requirements</li>
                </ul>
                <p>
                  Field studies conducted in diverse climate zones have demonstrated water savings of 20-50% compared to 
                  timer-based irrigation systems, without compromising landscape health (Lopez et al., 2020; Nakamura, 2021).
                </p>
                
                <h2>5. User Engagement and Behavior Change</h2>
                <p>
                  The technological capabilities of smart water systems are necessary but insufficient for achieving 
                  lasting conservation results. User engagement strategies play a crucial role in system effectiveness:
                </p>
                <ul>
                  <li>Personalized feedback and recommendations</li>
                  <li>Social comparison with neighbors or similar households</li>
                  <li>Gamification elements that reward conservation efforts</li>
                  <li>Educational content about water conservation</li>
                </ul>
                <p>
                  Studies by Wilson et al. (2023) found that systems incorporating multiple engagement strategies achieved 
                  40% greater water savings compared to those that relied solely on monitoring and automation.
                </p>
                
                <h2>6. Conclusion and Future Directions</h2>
                <p>
                  This review demonstrates that smart water conservation systems offer significant potential for reducing 
                  residential water consumption. The most effective implementations combine accurate measurement, automated 
                  controls, leak detection, and user engagement strategies tailored to local contexts.
                </p>
                <p>
                  Future research should focus on:
                </p>
                <ul>
                  <li>Long-term effectiveness and the persistence of behavior changes</li>
                  <li>Integration with other smart home systems for holistic resource management</li>
                  <li>Accessibility and adoption strategies for diverse socioeconomic groups</li>
                  <li>Privacy concerns and data ownership models</li>
                  <li>Standardization of measurement and reporting methodologies</li>
                </ul>
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
                  <Button variant="outline" className="w-full mb-2" onClick={() => handleDownload('pdf')}>PDF (2.4 MB)</Button>
                  <Button variant="outline" className="w-full" onClick={() => handleDownload('data')}>Supplementary Data</Button>
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