
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Database } from "lucide-react";

const DataCollection = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Database className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">Data Collection API</h1>
          </div>

          <div className="prose max-w-none">
            <p className="lead text-lg mb-6">
              The Data Collection API enables integration with smart meters and IoT devices to gather and store resource usage data.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="mt-0">Endpoint</h3>
              <code className="block text-sm p-2 bg-black text-white rounded">POST /api/v1/data</code>
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
            
            <h2>Request Body</h2>
            <p>
              The API accepts JSON data with the following structure:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <pre className="text-sm p-2 bg-black text-white rounded overflow-x-auto">
{`{
  "device_id": "dev_123456",
  "resource_type": "energy",
  "timestamp": "2024-04-08T14:30:00Z",
  "value": 2.4,
  "unit": "kWh",
  "metadata": {
    "temperature": 22,
    "humidity": 45,
    "occupancy": true
  }
}`}
              </pre>
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
                    <td className="border border-gray-300 p-2">device_id</td>
                    <td className="border border-gray-300 p-2">string</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Unique identifier for the device</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">resource_type</td>
                    <td className="border border-gray-300 p-2">string</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Type of resource (energy, water, gas)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">timestamp</td>
                    <td className="border border-gray-300 p-2">string (ISO 8601)</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Time when the data was collected</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">value</td>
                    <td className="border border-gray-300 p-2">number</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Measured consumption value</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">unit</td>
                    <td className="border border-gray-300 p-2">string</td>
                    <td className="border border-gray-300 p-2">Yes</td>
                    <td className="border border-gray-300 p-2">Unit of measurement (kWh, liters, etc.)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">metadata</td>
                    <td className="border border-gray-300 p-2">object</td>
                    <td className="border border-gray-300 p-2">No</td>
                    <td className="border border-gray-300 p-2">Additional contextual data</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h2>Response Format</h2>
            <p>
              The API returns JSON data confirming successful data storage:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <pre className="text-sm p-2 bg-black text-white rounded overflow-x-auto">
{`{
  "status": "success",
  "data": {
    "id": "data_789012",
    "device_id": "dev_123456",
    "timestamp": "2024-04-08T14:30:00Z",
    "received_at": "2024-04-08T14:30:05Z"
  }
}`}
              </pre>
            </div>
            
            <h2>Batch Upload</h2>
            <p>
              For uploading multiple data points at once, you can use the batch endpoint:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <code className="block text-sm p-2 bg-black text-white rounded">
                POST /api/v1/data/batch
              </code>
            </div>
            
            <p>
              The batch endpoint accepts an array of data points:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <pre className="text-sm p-2 bg-black text-white rounded overflow-x-auto">
{`{
  "data": [
    {
      "device_id": "dev_123456",
      "resource_type": "energy",
      "timestamp": "2024-04-08T14:30:00Z",
      "value": 2.4,
      "unit": "kWh"
    },
    {
      "device_id": "dev_123456",
      "resource_type": "energy",
      "timestamp": "2024-04-08T14:45:00Z",
      "value": 2.6,
      "unit": "kWh"
    }
  ]
}`}
              </pre>
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
                    <td className="border border-gray-300 p-2">413</td>
                    <td className="border border-gray-300 p-2">Payload Too Large - Batch size exceeded</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">429</td>
                    <td className="border border-gray-300 p-2">Too Many Requests - Rate limit exceeded</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">500</td>
                    <td className="border border-gray-300 p-2">Server Error - Internal server error</td>
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

export default DataCollection;