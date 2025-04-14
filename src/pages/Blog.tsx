

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Machine Learning is Revolutionizing Energy Conservation",
      excerpt: "Discover how AI and ML technologies are helping households reduce energy consumption by up to 30%.",
      date: "April 3, 2025",
      author: "Dr. Emma Chen",
      category: "Technology"
    },
    {
      id: 2,
      title: "5 Simple Ways to Reduce Your Home's Water Usage",
      excerpt: "Practical tips for conserving water in your daily routine without sacrificing convenience.",
      date: "March 28, 2025",
      author: "Michael Rivera",
      category: "Conservation Tips"
    },
    {
      id: 3,
      title: "The Future of Smart Homes and Sustainability",
      excerpt: "How integrated smart home systems are becoming central to environmental conservation efforts.",
      date: "March 15, 2025",
      author: "Sarah Johnson",
      category: "Industry Trends"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Blog</h1>
          <p className="text-gray-600 mb-8">
            Insights, tips, and the latest news on energy efficiency and resource conservation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-eco-blue-dark">{post.category}</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Button variant="link" className="text-eco-blue p-0">
                      Read More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
