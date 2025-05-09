
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/admin/Dashboard";
import ComplaintForm from "./pages/ComplaintForm";
import DocumentRequestForm from "./pages/DocumentRequestForm";
import AidRequestForm from "./pages/AidRequestForm";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Use state instead of direct localStorage access to ensure reactivity
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Check login status when component mounts
  useEffect(() => {
    const loginStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginStatus);
    
    // Add event listener for storage changes
    const handleStorageChange = () => {
      const currentLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(currentLoginStatus);
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/file-complaint" element={<ComplaintForm />} />
            <Route path="/request-documents" element={<DocumentRequestForm />} />
            <Route path="/request-aid" element={<AidRequestForm />} />
            
            <Route 
              path="/admin/dashboard" 
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/admin" />} 
            />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
