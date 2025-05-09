
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { MessageSquare, FileText, Heart } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/admin');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header isAdmin onLogout={handleLogout} />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button 
            variant="outline" 
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card className="p-6">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center gap-2">
                <MessageSquare className="text-blue-500" />
                <h2 className="font-semibold text-lg">Complaints</h2>
              </div>
              <p className="text-sm text-gray-500 mb-2">Manage resident complaints</p>
              <div className="mt-auto">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold">1</span>
                  <div className="text-sm">Total complaints</div>
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-500">1 pending</span>
                    <span>0 resolved</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => navigate('/admin/complaints')}
              >
                View Complaints
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center gap-2">
                <FileText className="text-green-500" />
                <h2 className="font-semibold text-lg">Document Requests</h2>
              </div>
              <p className="text-sm text-gray-500 mb-2">Process document applications</p>
              <div className="mt-auto">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold">1</span>
                  <div className="text-sm">Total requests</div>
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-500">1 pending</span>
                    <span>0 completed</span>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => navigate('/admin/documents')}
              >
                View Requests
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex flex-col h-full">
              <div className="mb-4 flex items-center gap-2">
                <Heart className="text-red-500" />
                <h2 className="font-semibold text-lg">Aid Applications</h2>
              </div>
              <p className="text-sm text-gray-500 mb-2">Review assistance requests</p>
              <div className="mt-auto">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold">1</span>
                  <div className="text-sm">Total applications</div>
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-500">1 pending</span>
                    <div>
                      <span className="text-green-500">0 approved</span>
                      <span className="mx-1">•</span>
                      <span className="text-red-500">0 rejected</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button 
                variant="outline" 
                className="mt-4 w-full"
                onClick={() => navigate('/admin/aid')}
              >
                View Aid Requests
              </Button>
            </div>
          </Card>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
          <Card className="overflow-hidden">
            <div className="p-6 space-y-4">
              <ActivityItem 
                type="complaint"
                name="Juan Dela Cruz"
                date="2025-05-09"
                status="pending"
              />
              
              <ActivityItem 
                type="document"
                name="Juan Dela Cruz"
                date="2025-05-09"
                status="pending"
              />
              
              <ActivityItem 
                type="aid"
                name="Juan Dela Cruz"
                date="2025-05-09"
                status="pending"
              />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

interface ActivityItemProps {
  type: 'complaint' | 'document' | 'aid';
  name: string;
  date: string;
  status: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ type, name, date, status }) => {
  const getIcon = () => {
    switch (type) {
      case 'complaint':
        return <MessageSquare size={18} />;
      case 'document':
        return <FileText size={18} />;
      case 'aid':
        return <Heart size={18} />;
    }
  };
  
  const getTypeText = () => {
    switch (type) {
      case 'complaint':
        return 'Complaint';
      case 'document':
        return 'Document';
      case 'aid':
        return 'Aid';
    }
  };

  return (
    <div className="flex items-center gap-4 py-2">
      <div className="text-gray-600">
        {getIcon()}
      </div>
      <div className="flex-1">
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-500 flex gap-2 items-center">
          <span>{getTypeText()}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
      </div>
      <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
        Pending
      </div>
    </div>
  );
};

export default Dashboard;
