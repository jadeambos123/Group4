import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, LogIn, LogOut } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

/**
 * Header component that displays at the top of all pages
 */
export const Header = ({ isAdmin = false, onLogout }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    // Clear login status
    localStorage.removeItem('isLoggedIn');
    
    // If onLogout prop exists, call it
    if (onLogout) {
      onLogout();
    } else {
      // Otherwise handle logout directly
      navigate('/');
      
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully",
      });
      
      // Force a reload to update all components
      window.dispatchEvent(new Event('storage'));
    }
  };
  
  return (
    <header className="bg-barangay-navy text-white py-3 px-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
        <Home size={24} />
        Barangay Services
      </Link>
      
      {isAdmin ? (
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline">Admin</span>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={handleLogout} 
            className="text-white border-white hover:bg-white/10"
          >
            <LogOut size={18} className="mr-1" />
            Logout
          </Button>
        </div>
      ) : (
        <Link to="/admin">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-white border-white/70 hover:bg-white/10"
          >
            <LogIn size={18} className="mr-1" /> 
            Admin Login
          </Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
