
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/Header';
import { Lock } from 'lucide-react';
import { Label } from '@/components/ui/label';

const AdminLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple authentication for demo purposes
    if (username === 'admin' && password === 'admin123') {
      // Store login state and navigate
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin/dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-6">
          <div className="text-center mb-6">
            <Lock className="w-12 h-12 mx-auto mb-2 text-barangay-navy" />
            <h1 className="text-2xl font-bold">Admin Login</h1>
            <p className="text-gray-500 text-sm">Enter your credentials to access the admin dashboard</p>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-md mb-6">
            <p className="text-sm text-yellow-800">
              Use username: <span className="font-medium">admin</span> / password: <span className="font-medium">admin123</span>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••"
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-slate-700 hover:bg-slate-800">
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;
