
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import { ToastProvider } from "@/hooks/useToast";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Tips from "./pages/Tips";
import Documentation from "./pages/Documentation";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import ApiReference from "./pages/ApiReference";
import Research from "./pages/Research";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiesPolicy from "./pages/CookiesPolicy";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

// Documentation pages
import GettingStarted from "./pages/documentation/GettingStarted";
import UserManual from "./pages/documentation/UserManual";
import Tutorials from "./pages/documentation/Tutorials";

// API Reference pages
import Prediction from "./pages/api-reference/Prediction";
import DataCollection from "./pages/api-reference/DataCollection";
import Authentication from "./pages/api-reference/Authentication";

// Research pages
import MachineLearning from "./pages/research/MachineLearning";
import WaterConservation from "./pages/research/WaterConservation";
import UserAdoption from "./pages/research/UserAdoption";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <ToastProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
              
              {/* Documentation routes */}
              <Route path="/documentation" element={<Documentation />} />
              <Route path="/documentation/getting-started" element={<GettingStarted />} />
              <Route path="/documentation/user-manual" element={<UserManual />} />
              <Route path="/documentation/tutorials" element={<Tutorials />} />
              
              {/* API Reference routes */}
              <Route path="/api-reference" element={<ApiReference />} />
              <Route path="/api-reference/prediction" element={<Prediction />} />
              <Route path="/api-reference/data-collection" element={<DataCollection />} />
              <Route path="/api-reference/authentication" element={<Authentication />} />
              
              {/* Research routes */}
              <Route path="/research" element={<Research />} />
              <Route path="/research/machine-learning" element={<MachineLearning />} />
              <Route path="/research/water-conservation" element={<WaterConservation />} />
              <Route path="/research/user-adoption" element={<UserAdoption />} />
              
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiesPolicy />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </ToastProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
