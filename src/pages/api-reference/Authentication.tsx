
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight } from "lucide-react";

const Authentication = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-6">
            <Code className="h-8 w-8 text-eco-blue mr-3" />
            <h1 className="text-3xl font-bold">Authentication API</h1>
          </div>

          <div className="prose max-w-none">
            <p className="lead text-lg mb-6">
              The Authentication API allows developers to authenticate users and manage API keys for accessing the Smart Resource Conservation platform.
            </p>
            
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <h3 className="mt-0">Base URL</h3>
              <code className="block text-sm p-2 bg-black text-white rounded">https://api.smartresource.com/auth/v1</code>
            </div>
            
            <h2>Authentication Methods</h2>
            <p>
              The API supports the following authentication methods:
            </p>
            
            <h3>1. API Key Authentication</h3>
            <p>
              All API requests require an API key passed in the Authorization header:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <code className="block text-sm p-2 bg-black text-white rounded">
                Authorization: Bearer YOUR_API_KEY
              </code>
            </div>
            
            <h3>2. OAuth 2.0</h3>
            <p>
              For user-based authentication, the API supports OAuth 2.0:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-6">
              <code className="block text-sm p-2 bg-black text-white rounded">
                GET /oauth/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=YOUR_REDIRECT_URI
              </code>
            </div>
            
            <h2>Endpoints</h2>
            
            <h3>Generate API Key</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Endpoint</td>
                    <td className="border border-gray-300 p-2">
                      <code>POST /keys</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Description</td>
                    <td className="border border-gray-300 p-2">Generate a new API key</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Request Body</td>
                    <td className="border border-gray-300 p-2">
                      <pre className="text-sm bg-black text-white p-2 rounded overflow-x-auto">
{`{
  "name": "My API Key",
  "permissions": ["read:data", "write:data"],
  "expiration": "2025-12-31T23:59:59Z"  // Optional
}`}
                      </pre>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Response</td>
                    <td className="border border-gray-300 p-2">
                      <pre className="text-sm bg-black text-white p-2 rounded overflow-x-auto">
{`{
  "api_key": "sk_live_1234567890abcdef",
  "key_id": "key_123456",
  "name": "My API Key",
  "permissions": ["read:data", "write:data"],
  "created_at": "2024-04-08T12:34:56Z",
  "expires_at": "2025-12-31T23:59:59Z"
}`}
                      </pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>List API Keys</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Endpoint</td>
                    <td className="border border-gray-300 p-2">
                      <code>GET /keys</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Description</td>
                    <td className="border border-gray-300 p-2">List all API keys for the authenticated user</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Response</td>
                    <td className="border border-gray-300 p-2">
                      <pre className="text-sm bg-black text-white p-2 rounded overflow-x-auto">
{`{
  "keys": [
    {
      "key_id": "key_123456",
      "name": "My API Key",
      "permissions": ["read:data", "write:data"],
      "created_at": "2024-04-08T12:34:56Z",
      "expires_at": "2025-12-31T23:59:59Z"
    },
    {
      "key_id": "key_789012",
      "name": "Read-Only Key",
      "permissions": ["read:data"],
      "created_at": "2024-04-07T10:11:12Z",
      "expires_at": null
    }
  ]
}`}
                      </pre>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3>Revoke API Key</h3>
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-gray-300">
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Endpoint</td>
                    <td className="border border-gray-300 p-2">
                      <code>DELETE /keys/:key_id</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Description</td>
                    <td className="border border-gray-300 p-2">Revoke an API key</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 bg-gray-100 font-medium">Response</td>
                    <td className="border border-gray-300 p-2">
                      <pre className="text-sm bg-black text-white p-2 rounded overflow-x-auto">
{`{
  "message": "API key successfully revoked"
}`}
                      </pre>
                    </td>
                  </tr>
                </tbody>
              </table>
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
                    <td className="border border-gray-300 p-2">Unauthorized - Invalid or expired token</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">403</td>
                    <td className="border border-gray-300 p-2">Forbidden - Insufficient permissions</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">404</td>
                    <td className="border border-gray-300 p-2">Not Found - API key not found</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">429</td>
                    <td className="border border-gray-300 p-2">Too Many Requests - Rate limit exceeded</td>
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

export default Authentication;