
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
  
  // ... keep existing code (papers array)
  
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

  // ... keep existing code (JSX for the component)

  return (
    // ... keep existing code (component JSX structure)
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
