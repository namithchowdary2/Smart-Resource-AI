
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FileText, Users, BarChart, Download, FileDown, Database } from "lucide-react";
import { toast } from "@/hooks/useToast";
import { playSound, playPaperSound } from "@/utils/soundUtils";

const Research = () => {
  const papers = [
    {
      id: 1,
      title: "Machine Learning for Residential Energy Optimization",
      authors: "Dr. Sarah Johnson, Dr. Michael Lee",
      publication: "Journal of Sustainable Computing, 2024",
      abstract: "This paper presents novel machine learning algorithms for optimizing household energy consumption based on usage patterns and environmental factors.",
      icon: <BarChart className="h-8 w-8 text-eco-blue dark:text-blue-400" />,
      link: "/research/machine-learning",
      pdf: "#", // Using placeholder links since we don't have actual PDF files
      supplementary: "#", // Using placeholder links since we don't have actual data files
      pdfSize: "1.2 MB",
      dataSize: "8.5 MB"
    },
    {
      id: 2,
      title: "Smart Water Conservation Systems: A Review",
      authors: "Prof. Alexander Williams, Dr. Emily Chen",
      publication: "Water Resources Management, 2023",
      abstract: "A comprehensive review of smart water management systems and their effectiveness in reducing residential water consumption.",
      icon: <FileText className="h-8 w-8 text-eco-blue dark:text-blue-400" />,
      link: "/research/water-conservation",
      pdf: "#", // Using placeholder links since we don't have actual PDF files
      supplementary: "#", // Using placeholder links since we don't have actual data files
      pdfSize: "2.4 MB",
      dataSize: "5.2 MB"
    },
    {
      id: 3,
      title: "User Adoption of Resource Conservation Technologies",
      authors: "Dr. Priya Patel, Dr. James Wilson",
      publication: "Behavioral Economics Journal, 2024",
      abstract: "This study examines factors influencing household adoption of smart resource conservation technologies and provides recommendations for increasing user engagement.",
      icon: <Users className="h-8 w-8 text-eco-blue dark:text-blue-400" />,
      link: "/research/user-adoption",
      pdf: "#", // Using placeholder links since we don't have actual PDF files
      supplementary: "#", // Using placeholder links since we don't have actual data files
      pdfSize: "1.8 MB",
      dataSize: "3.7 MB"
    }
  ];

  const handleDownload = (type: string, paper: any) => {
    playPaperSound();
    
    // Since we don't have actual files, we'll simulate a download
    toast({
      title: `${type === 'pdf' ? 'Paper' : 'Supplementary Data'} Downloaded`,
      description: `${paper.title} ${type === 'pdf' ? 'PDF' : 'data'} download started.`,
      variant: "default",
    });

    // Create a sample text file to download
    const content = type === 'pdf' 
      ? `This is a sample PDF content for ${paper.title}`
      : `This is sample supplementary data for ${paper.title}`;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = url;
    link.download = `${paper.title.replace(/\s+/g, '-').toLowerCase()}${type === 'pdf' ? '.pdf' : '-data.zip'}`;
    
    // Append to document, click to download, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Clean up the URL object
    setTimeout(() => URL.revokeObjectURL(url), 100);
  };

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