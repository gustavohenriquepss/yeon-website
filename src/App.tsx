
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'; // Make sure React is imported
import Index from "./pages/Index";
import About from "./pages/About";
import Artists from "./pages/Artists";
import MusicTools from "./pages/Tools"; // Updated component name
import ReleasePlanner from "./pages/ReleasePlanner";
import NotFound from "./pages/NotFound";

// Create a new QueryClient instance within the component to ensure proper React context
const App: React.FC = () => {
  // Create the client inside the component
  const queryClient = new QueryClient();
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/tools" element={<MusicTools />} /> {/* Updated component name */}
              <Route path="/artists" element={<Artists />} />
              <Route path="/release-planner" element={<ReleasePlanner />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
