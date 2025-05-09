
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, LogIn, LogOut } from 'lucide-react';

interface HeaderProps {
  isAdmin?: boolean;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isAdmin = false, onLogout }) => {
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
            onClick={onLogout} 
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
            className="text-white border-white hover:bg-white/10"
          >
            <LogIn size={18} className="mr-1" /> 
            Admin Login
          </Button>
        </Link>
      )}
    </header>
  );
};
