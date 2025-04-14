
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Book } from "lucide-react";

const UserManual = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Book className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">User Manual</h1>
          </div>

          <div className="prose max-w-none">
            <p className="lead text-lg mb-6">
              This comprehensive guide covers all features and functionality of the Smart Resource Conservation platform.
            </p>
            
            <h2>Platform Overview</h2>
            <p>
              The Smart Resource Conservation platform is a comprehensive solution for monitoring and optimizing your resource usage. 
              It combines data analytics, machine learning, and user-friendly interfaces to help you make informed decisions about 
              energy and water consumption.
            </p>
            
            <h2>Core Features</h2>
            
            <h3>1. Resource Monitoring</h3>
            <p>
              Track your consumption patterns in real-time with detailed breakdowns by device, time of day, and usage type.
            </p>
            <ul>
              <li><strong>Real-time data:</strong> View current consumption rates.</li>
              <li><strong>Historical analysis:</strong> Compare usage over different time periods.</li>
              <li><strong>Device-specific tracking:</strong> Identify which devices consume the most resources.</li>
            </ul>
            
            <h3>2. Optimization Tools</h3>
            <p>
              Receive personalized recommendations for reducing waste and improving efficiency.
            </p>
            <ul>
              <li><strong>AI-powered suggestions:</strong> Get recommendations based on your unique usage patterns.</li>
              <li><strong>Scenario planning:</strong> Model the impact of different conservation strategies.</li>
              <li><strong>Automated scheduling:</strong> Set up smart rules for resource-intensive devices.</li>
            </ul>
            
            <h3>3. Reporting and Analysis</h3>
            <p>
              Generate comprehensive reports on your conservation progress and potential areas for improvement.
            </p>
            <ul>
              <li><strong>Custom dashboards:</strong> Configure your view to focus on the metrics that matter to you.</li>
              <li><strong>Export options:</strong> Share reports in various formats (PDF, CSV, Excel).</li>
              <li><strong>Benchmark comparisons:</strong> See how your performance compares to similar users.</li>
            </ul>
            
            <h2>Account Management</h2>
            <h3>User Settings</h3>
            <p>
              Customize your account settings, notification preferences, and privacy options through the Settings panel.
            </p>
            
            <h3>Team Collaboration</h3>
            <p>
              For business accounts, you can add team members with different permission levels to collaborate on 
              conservation projects.
            </p>
            
            <h3>Billing and Subscription</h3>
            <p>
              Manage your subscription plan, view billing history, and update payment information in the Account section.
            </p>
            
            <h2>Troubleshooting</h2>
            <p>
              If you encounter any issues while using the platform, please refer to our troubleshooting guide or contact 
              customer support at support@smartresource.com.
            </p>
            
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

export default UserManual;