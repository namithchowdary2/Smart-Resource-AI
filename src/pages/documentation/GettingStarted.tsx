
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const GettingStarted = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">Getting Started Guide</h1>
          </div>

          <div className="prose max-w-none">
            <p className="lead text-lg mb-6">
              Welcome to the Smart Resource Conservation platform! This guide will help you set up your first optimization project and get familiar with the basic features.
            </p>
            
            <h2>Initial Setup</h2>
            <p>
              To get started with the Smart Resource Conservation platform, follow these steps:
            </p>
            <ol>
              <li>
                <strong>Create an account:</strong> Sign up using your email address or Google account.
              </li>
              <li>
                <strong>Complete your profile:</strong> Add information about your home or business to receive personalized recommendations.
              </li>
              <li>
                <strong>Connect devices:</strong> Link compatible smart meters and IoT devices to start tracking your resource usage.
              </li>
              <li>
                <strong>Set goals:</strong> Define your conservation targets for energy, water, and other resources.
              </li>
              <li>
                <strong>Explore the dashboard:</strong> Familiarize yourself with the main features and monitoring tools.
              </li>
            </ol>

            <h2>Creating Your First Optimization Project</h2>
            <p>
              An optimization project helps you identify and implement specific conservation strategies:
            </p>
            <ol>
              <li>
                <strong>Navigate to Projects:</strong> Click on the "Projects" tab in the main navigation.
              </li>
              <li>
                <strong>Create New Project:</strong> Click the "New Project" button.
              </li>
              <li>
                <strong>Select resource type:</strong> Choose which resource you want to optimize (energy, water, etc.).
              </li>
              <li>
                <strong>Define scope:</strong> Set the parameters and goals for your project.
              </li>
              <li>
                <strong>Review recommendations:</strong> The system will analyze your usage patterns and suggest optimization strategies.
              </li>
              <li>
                <strong>Implement changes:</strong> Follow the recommended actions and track your progress.
              </li>
            </ol>

            <h2>Understanding Your Dashboard</h2>
            <p>
              The dashboard provides a comprehensive view of your resource usage and conservation progress:
            </p>
            <ul>
              <li>
                <strong>Usage graphs:</strong> Real-time and historical data on your consumption patterns.
              </li>
              <li>
                <strong>Savings tracker:</strong> Monitor the financial and environmental impact of your conservation efforts.
              </li>
              <li>
                <strong>Alerts:</strong> Notifications about unusual usage patterns or system updates.
              </li>
              <li>
                <strong>Recommendations:</strong> Personalized suggestions for further optimization.
              </li>
              <li>
                <strong>Reports:</strong> Detailed analysis of your conservation performance.
              </li>
            </ul>
            
            <div className="mt-8">
              <Button href="/documentation" variant="outline" className="text-eco-blue border-eco-blue">
                Back to Documentation
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GettingStarted;