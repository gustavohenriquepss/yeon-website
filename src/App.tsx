import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Artists from "./pages/Artists";
import MusicTools from "./pages/Tools";
import ReleasePlanner from "./pages/ReleasePlanner";
import NotFound from "./pages/NotFound";
import LinkInBio from "./pages/LinkInBio";
import TermsOfService from "./pages/TermsOfService";

// Create the QueryClient outside the component
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/tools" element={<MusicTools />} />
            <Route path="/artists" element={<Artists />} />
            <Route path="/release-planner" element={<ReleasePlanner />} />
            <Route path="/link-in-bio" element={<LinkInBio />} />
            <Route path="/termos-de-uso" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
