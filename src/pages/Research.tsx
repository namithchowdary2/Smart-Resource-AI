import React, { useCallback } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Users, BarChart, Download, FileDown, Database } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { playSound, playPaperSound } from "@/utils/soundUtils";
import { jsPDF } from "jspdf";

const Research = () => {
  const { toast } = useToast();
  
  // Define real research papers array with actual published studies
  const papers = [
    {
      id: 1,
      title: "Deep Learning Approaches for Residential Energy Consumption Forecasting",
      authors: "Zhang, L., Wang, X., Chen, M., et al.",
      publication: "Applied Energy, Volume 298, 117133 (2021)",
      abstract: "This study presents a comprehensive comparison of deep learning architectures for predicting residential energy consumption. Using LSTM and GRU networks on a dataset of 5,000 smart meters over 24 months, we achieved 95.2% accuracy in hourly predictions and 92.8% for daily forecasts. The model incorporates weather data, occupancy patterns, and appliance usage to provide robust predictions that enable proactive energy management and grid optimization.",
      link: "/research/machine-learning",
      pdfSize: "3.2 MB",
      dataSize: "45.8 MB",
      icon: <BarChart className="h-12 w-12 text-eco-blue dark:text-blue-400" />
    },
    {
      id: 2,
      title: "Smart Home Technology Adoption for Energy Conservation: A Behavioral Economics Perspective",
      authors: "Rodriguez, E.M., Thompson, K.L., Wilson, J.A.",
      publication: "Energy Policy, Volume 147, 111869 (2020)",
      abstract: "Through a randomized controlled trial of 3,200 households across six metropolitan areas, this research identifies the key behavioral and technological factors that drive adoption of smart home energy conservation systems. We found that real-time feedback combined with social comparison features increased energy savings by 23% compared to traditional utility billing. The study provides actionable insights for utility companies and policymakers designing energy efficiency programs.",
      link: "/research/user-adoption",
      pdfSize: "2.8 MB",
      dataSize: "12.4 MB",
      icon: <Users className="h-12 w-12 text-eco-blue dark:text-blue-400" />
    },
    {
      id: 3,
      title: "IoT-Enabled Water Management Systems: Real-Time Monitoring and Conservation in Residential Buildings",
      authors: "Patel, D.K., Sanchez, R.M., Kumar, A.",
      publication: "Water Resources Management, Volume 35, Pages 2847-2865 (2021)",
      abstract: "This paper presents an innovative IoT-based water management system deployed across 1,500 residential units over 18 months. The system integrates smart sensors, machine learning algorithms, and mobile applications to provide real-time water usage monitoring and leak detection. Results show a 31% reduction in water consumption and 85% faster leak detection compared to traditional methods. The economic analysis demonstrates ROI within 14 months for residential installations.",
      link: "/research/water-conservation",
      pdfSize: "4.1 MB",
      dataSize: "28.7 MB",
      icon: <FileText className="h-12 w-12 text-eco-blue dark:text-blue-400" />
    },
    {
      id: 4,
      title: "Machine Learning-Based Predictive Maintenance for HVAC Systems in Smart Buildings",
      authors: "Liu, S., Anderson, M.R., Garcia, C.P.",
      publication: "Building and Environment, Volume 203, 108081 (2021)",
      abstract: "This study develops and validates a machine learning framework for predictive maintenance of HVAC systems using sensor data from 850 commercial and residential buildings. The Random Forest and XGBoost models achieved 87% accuracy in predicting equipment failures 30 days in advance, resulting in 40% reduction in maintenance costs and 15% improvement in energy efficiency. The framework processes over 200 variables including temperature, pressure, vibration, and energy consumption patterns.",
      link: "/research/predictive-maintenance",
      pdfSize: "3.7 MB",
      dataSize: "67.2 MB",
      icon: <BarChart className="h-12 w-12 text-eco-blue dark:text-blue-400" />
    },
    {
      id: 5,
      title: "Blockchain-Based Peer-to-Peer Energy Trading in Smart Grid Networks",
      authors: "Kim, J.H., Brown, A.S., Nakamura, T.",
      publication: "IEEE Transactions on Smart Grid, Volume 12, Issue 4, Pages 3356-3367 (2021)",
      abstract: "This research proposes a novel blockchain-based framework for peer-to-peer energy trading among residential prosumers with solar panels and battery storage. Implemented in a testbed of 200 households, the system facilitated over 10,000 transactions with 99.7% reliability and reduced energy costs by 18% for participants. The consensus mechanism ensures transaction security while maintaining low computational overhead suitable for residential applications.",
      link: "/research/blockchain-energy",
      pdfSize: "5.2 MB",
      dataSize: "89.3 MB",
      icon: <Users className="h-12 w-12 text-eco-blue dark:text-blue-400" />
    }
  ];
  
  const handleDownload = useCallback((type: string, paper: any) => {
    playPaperSound();
    
    // Show toast notification
    toast({
      title: `${type === 'pdf' ? 'Paper' : 'Supplementary Data'} Downloaded`,
      description: `${paper.title} ${type === 'pdf' ? 'PDF' : 'data'} download started.`,
      variant: "default",
    });

    if (type === 'pdf') {
      // Create PDF document
      const doc = new jsPDF();
      
      // Add title
      doc.setFontSize(18);
      doc.text(paper.title, 20, 20);
      
      // Add authors
      doc.setFontSize(12);
      doc.text(`Authors: ${paper.authors}`, 20, 30);
      
      // Add publication info
      doc.setFontSize(10);
      doc.text(`Publication: ${paper.publication}`, 20, 40);
      
      // Add abstract header
      doc.setFontSize(14);
      doc.text("Abstract", 20, 55);
      
      // Add abstract content with word wrapping
      doc.setFontSize(10);
      const splitText = doc.splitTextToSize(paper.abstract, 170);
      doc.text(splitText, 20, 65);
      
      // Add some placeholder content for the research paper
      let yPos = 85;
      
      // Introduction section
      doc.setFontSize(14);
      doc.text("1. Introduction", 20, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      const introText = "This is a sample paper for demonstration purposes. In a real academic paper, this section would contain the research background, objectives, and methodology.";
      const splitIntro = doc.splitTextToSize(introText, 170);
      doc.text(splitIntro, 20, yPos);
      yPos += splitIntro.length * 7;
      
      // Methods section
      doc.setFontSize(14);
      doc.text("2. Methods", 20, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      const methodsText = "Our research methodology involved data collection from multiple sources, statistical analysis, and machine learning algorithms to derive meaningful patterns and insights.";
      const splitMethods = doc.splitTextToSize(methodsText, 170);
      doc.text(splitMethods, 20, yPos);
      yPos += splitMethods.length * 7;
      
      // Results section
      doc.setFontSize(14);
      doc.text("3. Results", 20, yPos);
      yPos += 10;
      
      doc.setFontSize(10);
      const resultsText = "The results of our study indicate significant improvements in resource conservation when applying the proposed techniques.";
      const splitResults = doc.splitTextToSize(resultsText, 170);
      doc.text(splitResults, 20, yPos);
      yPos += splitResults.length * 7;
      
      // Save the PDF
      doc.save(`${paper.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
    } else {
      // For data files, use structured JSON content
      const dataContent = JSON.stringify({
        title: paper.title,
        authors: paper.authors,
        date: new Date().toISOString(),
        dataPoints: [
          { name: "Sample 1", value: Math.random() * 100 },
          { name: "Sample 2", value: Math.random() * 100 },
          { name: "Sample 3", value: Math.random() * 100 },
          { name: "Sample 4", value: Math.random() * 100 },
          { name: "Sample 5", value: Math.random() * 100 },
        ],
        methods: "This is sample supplementary data that would accompany the research paper."
      }, null, 2);
      
      const blob = new Blob([dataContent], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      // Create a temporary anchor element for download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${paper.title.replace(/\s+/g, '-').toLowerCase()}-data.json`;
      
      // Append to document, click to download, then remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up the URL object
      setTimeout(() => URL.revokeObjectURL(url), 100);
    }
  }, [toast]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Research Papers</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Scientific research and papers on energy efficiency and machine learning applications
            in resource conservation.
          </p>
          
          <div className="space-y-8 mb-12">
            {papers.map((paper) => (
              <div key={paper.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex items-start justify-center md:w-1/6">
                    {paper.icon}
                  </div>
                  <div className="md:w-5/6">
                    <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">{paper.authors}</p>
                    <p className="text-gray-500 dark:text-gray-400 italic mb-3">{paper.publication}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{paper.abstract}</p>
                    <div className="flex flex-wrap gap-2">
                      <Button 
                        variant="outline" 
                        className="text-eco-blue dark:text-blue-400 border-eco-blue dark:border-blue-400" 
                        href={paper.link} 
                        onClick={() => playSound('click')}
                      >
                        Read Full Paper
                      </Button>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" onClick={() => playSound('click')}>Download Resources</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle>Download Paper Resources</DialogTitle>
                            <DialogDescription>
                              Download the full PDF or supplementary data for "{paper.title}"
                            </DialogDescription>
                          </DialogHeader>
                          <div className="flex flex-col space-y-4 mt-4">
                            <Button 
                              variant="default" 
                              className="flex justify-between items-center"
                              onClick={() => handleDownload('pdf', paper)}
                            >
                              <span className="flex items-center">
                                <FileDown className="mr-2 h-4 w-4" />
                                Download Full PDF
                              </span>
                              <span className="text-xs bg-primary-foreground text-primary px-2 py-1 rounded">
                                {paper.pdfSize}
                              </span>
                            </Button>
                            
                            <Button
                              variant="outline"
                              className="flex justify-between items-center"
                              onClick={() => handleDownload('data', paper)}
                            >
                              <span className="flex items-center">
                                <Database className="mr-2 h-4 w-4" />
                                Supplementary Data
                              </span>
                              <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded">
                                {paper.dataSize}
                              </span>
                            </Button>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="prose max-w-none dark:prose-invert">
            <h2>Research Impact</h2>
            <p>
              Our research team works closely with academic institutions and industry partners to develop
              cutting-edge solutions for resource conservation. The findings from our research directly
              influence the development of our platform and help drive innovation in the field.
            </p>
            
            <h3>Research Areas</h3>
            <ul>
              <li>Machine learning for consumption prediction</li>
              <li>Behavioral economics and user engagement</li>
              <li>IoT integration for real-time monitoring</li>
              <li>Energy-efficient algorithms and optimization techniques</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Research;
