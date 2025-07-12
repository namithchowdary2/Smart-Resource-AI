import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";

const BlogPost = () => {
  const { id } = useParams();
  
  const blogPosts = {
    "1": {
      title: "How Machine Learning is Revolutionizing Energy Conservation",
      date: "April 3, 2025",
      author: "Dr. Emma Chen",
      category: "Technology",
      readTime: "8 min read",
      content: `
        <p>Machine Learning (ML) has emerged as a game-changing technology in the field of energy conservation, offering unprecedented opportunities to optimize resource usage in residential and commercial settings. As we face growing environmental challenges and rising energy costs, ML provides intelligent solutions that can significantly reduce consumption while maintaining comfort and productivity.</p>

        <h2>The Power of Pattern Recognition</h2>
        <p>At its core, machine learning excels at identifying patterns in complex datasets. When applied to energy consumption, ML algorithms can analyze vast amounts of data from smart meters, IoT sensors, and weather stations to understand how energy is used throughout different times of day, seasons, and occupancy patterns.</p>

        <p>Our research shows that homes equipped with ML-powered energy management systems achieve an average of 30% reduction in energy consumption compared to traditional static programming approaches. This dramatic improvement comes from the system's ability to learn and adapt to individual household behaviors and preferences.</p>

        <h2>Real-Time Optimization</h2>
        <p>Unlike traditional energy management systems that rely on pre-programmed schedules, ML-powered systems make real-time decisions based on current conditions. For example, the system might delay running the dishwasher until solar panel output peaks, or pre-cool a home before utility rates increase during peak hours.</p>

        <h2>Predictive Maintenance Benefits</h2>
        <p>Machine learning doesn't just optimize energy usage—it also helps prevent waste through predictive maintenance. By analyzing performance patterns, ML algorithms can detect when appliances are operating inefficiently or predict when maintenance is needed before equipment fails.</p>

        <h2>The Future of Smart Energy</h2>
        <p>As we move forward, the integration of ML with emerging technologies like 5G, edge computing, and advanced IoT sensors will create even more sophisticated energy conservation systems. These systems will be able to coordinate not just individual appliances, but entire smart city infrastructures.</p>

        <p>The potential impact is enormous. If every household adopted ML-powered energy conservation technology, we could see a reduction of millions of tons of CO2 emissions annually while saving consumers billions of dollars in energy costs.</p>
      `
    },
    "2": {
      title: "5 Simple Ways to Reduce Your Home's Water Usage",
      date: "March 28, 2025",
      author: "Michael Rivera",
      category: "Conservation Tips",
      readTime: "6 min read",
      content: `
        <p>Water conservation is becoming increasingly important as many regions face water scarcity issues. The good news is that small changes in daily habits can lead to significant water savings. Here are five practical strategies that any household can implement immediately.</p>

        <h2>1. Fix Leaks Promptly</h2>
        <p>A single dripping faucet can waste over 3,000 gallons of water per year. Check faucets, toilets, and pipes regularly for leaks. A toilet leak can be detected by adding food coloring to the tank—if color appears in the bowl without flushing, you have a leak that needs fixing.</p>

        <h2>2. Install Water-Efficient Fixtures</h2>
        <p>Upgrading to WaterSense-labeled fixtures can reduce water usage by 20-30%. Low-flow showerheads, efficient toilets, and aerators for faucets are relatively inexpensive investments that pay for themselves through reduced utility bills.</p>

        <h2>3. Optimize Your Laundry Routine</h2>
        <p>Washing machines account for about 17% of household water usage. Always wash full loads, use cold water when possible (which also saves energy), and consider upgrading to a high-efficiency washer that uses 40% less water than standard models.</p>

        <h2>4. Smart Landscaping Choices</h2>
        <p>Outdoor water use can account for up to 30% of total household consumption. Choose native plants that require less watering, install drip irrigation systems, and collect rainwater for garden use. Smart irrigation controllers can adjust watering schedules based on weather conditions.</p>

        <h2>5. Develop Water-Conscious Habits</h2>
        <p>Simple behavioral changes can make a big difference:</p>
        <ul>
          <li>Take shorter showers (reducing shower time by 1 minute saves ~2,500 gallons per year)</li>
          <li>Turn off the tap while brushing teeth or shaving</li>
          <li>Run dishwashers only when full</li>
          <li>Use a broom instead of a hose to clean driveways and sidewalks</li>
        </ul>

        <p>By implementing these strategies, the average household can reduce water consumption by 20-30% without sacrificing comfort or convenience. Not only does this help the environment, but it also significantly reduces utility bills.</p>
      `
    },
    "3": {
      title: "The Future of Smart Homes and Sustainability",
      date: "March 15, 2025",
      author: "Sarah Johnson",
      category: "Industry Trends",
      readTime: "10 min read",
      content: `
        <p>The convergence of smart home technology and sustainability initiatives is creating a new paradigm in residential living. As environmental consciousness grows and technology becomes more accessible, smart homes are evolving from luxury conveniences to essential tools for sustainable living.</p>

        <h2>Integrated Energy Management</h2>
        <p>Modern smart homes feature comprehensive energy management systems that coordinate multiple components: solar panels, battery storage, smart appliances, and electric vehicle charging. These systems optimize energy usage by learning household patterns and responding to grid conditions in real-time.</p>

        <p>The integration goes beyond simple automation. Advanced systems can participate in demand response programs, selling excess solar energy back to the grid during peak hours and drawing power when rates are lowest. This creates a home that's not just energy-efficient, but actually contributes to grid stability.</p>

        <h2>Water Intelligence Systems</h2>
        <p>Smart water management is becoming as sophisticated as energy systems. Intelligent irrigation controllers adjust watering schedules based on soil moisture, weather forecasts, and plant needs. Indoor systems monitor usage patterns and can detect leaks within minutes of occurrence.</p>

        <h2>AI-Powered Optimization</h2>
        <p>Artificial intelligence is the key to making these systems truly effective. AI algorithms learn from occupant behavior, weather patterns, and energy market conditions to make decisions that balance comfort, cost, and environmental impact.</p>

        <p>For example, an AI system might pre-cool a home using excess solar power before clouds roll in, ensuring comfort while maximizing renewable energy usage. Or it might delay running high-energy appliances until wind power generation peaks in the evening.</p>

        <h2>The Circular Economy at Home</h2>
        <p>Future smart homes will embrace circular economy principles, minimizing waste and maximizing resource efficiency. This includes:</p>
        <ul>
          <li>Greywater recycling systems for irrigation</li>
          <li>Composting systems with automated monitoring</li>
          <li>Smart inventory management to reduce food waste</li>
          <li>Integration with sharing economy platforms for tool and equipment sharing</li>
        </ul>

        <h2>Challenges and Opportunities</h2>
        <p>While the potential is enormous, several challenges remain. Privacy concerns, interoperability between different smart home platforms, and the digital divide that could exclude lower-income households from these benefits. However, as technology costs continue to decline and awareness grows, smart sustainable homes are becoming accessible to a broader population.</p>

        <p>The next decade will see smart homes become the standard rather than the exception, with sustainability features built in from the ground up rather than added as afterthoughts. This transformation will play a crucial role in meeting global climate goals while improving quality of life for millions of families.</p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
            <Link to="/blog">
              <Button variant="outline">Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center text-eco-blue hover:text-eco-blue-dark mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          
          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <User className="mr-2 h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4" />
                  {post.category}
                </div>
                <span>{post.readTime}</span>
              </div>
            </div>
            
            <div className="h-64 bg-gray-200 rounded-lg mb-8 flex items-center justify-center">
              <span className="text-gray-500">Article Image</span>
            </div>
            
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
          
          <div className="mt-12 pt-8 border-t">
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Posts
              </Button>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;