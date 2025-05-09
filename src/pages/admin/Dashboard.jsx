
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/Header';
import { MessageSquare, FileText, Heart } from 'lucide-react';
import { 
  getComplaints, 
  getDocumentRequests, 
  getAidRequests, 
  getAllActivities 
} from '@/services/storageService';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ActivityItem = ({ type, name, date, status }) => {
  const getIcon = () => {
    switch (type) {
      case 'complaint':
        return <MessageSquare size={18} />;
      case 'document':
        return <FileText size={18} />;
      case 'aid':
        return <Heart size={18} />;
      default:
        return null;
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
      default:
        return '';
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
      <div className={`text-xs px-2 py-1 rounded-full ${
        status === 'pending' 
          ? 'bg-yellow-100 text-yellow-800' 
          : status === 'resolved' || status === 'completed' || status === 'approved'
          ? 'bg-green-100 text-green-800'
          : 'bg-red-100 text-red-800'
      }`}>
        {status}
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [complaints, setComplaints] = useState(getComplaints());
  const [documents, setDocuments] = useState(getDocumentRequests());
  const [aidRequests, setAidRequests] = useState(getAidRequests());
  const [activities, setActivities] = useState(getAllActivities());

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/admin');
    }

    // Refresh data
    setComplaints(getComplaints());
    setDocuments(getDocumentRequests());
    setAidRequests(getAidRequests());
    setActivities(getAllActivities());
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
                  <span className="text-4xl font-bold">{complaints.length}</span>
                  <div className="text-sm">Total complaints</div>
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-500">{complaints.filter(c => c.status === 'pending').length} pending</span>
                    <span>{complaints.filter(c => c.status === 'resolved').length} resolved</span>
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
                  <span className="text-4xl font-bold">{documents.length}</span>
                  <div className="text-sm">Total requests</div>
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-amber-500">{documents.filter(d => d.status === 'pending').length} pending</span>
                    <span>{documents.filter(d => d.status === 'completed').length} completed</span>
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
                  <span className="text-4xl font-bold">{aidRequests.length}</span>
                  <div className="text-sm">Total applications</div>
                </div>
                <div className="mt-2 flex flex-col gap-1 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-amber-500">{aidRequests.filter(a => a.status === 'pending').length} pending</span>
                    <div>
                      <span className="text-green-500">{aidRequests.filter(a => a.status === 'approved').length} approved</span>
                      <span className="mx-1">•</span>
                      <span className="text-red-500">{aidRequests.filter(a => a.status === 'rejected').length} rejected</span>
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
            <div className="p-6">
              {activities.length === 0 ? (
                <p className="text-center text-gray-500 py-4">No recent activity</p>
              ) : (
                <div className="space-y-4">
                  {activities.slice(0, 5).map((activity) => (
                    <ActivityItem 
                      key={activity.id}
                      type={activity.type}
                      name={activity.name}
                      date={activity.date}
                      status={activity.status}
                    />
                  ))}
                </div>
              )}
            </div>
          </Card>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4">All Submissions</h2>
          <Card className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center">No submissions yet</TableCell>
                  </TableRow>
                ) : (
                  activities.map((activity) => (
                    <TableRow key={activity.id}>
                      <TableCell>{activity.date}</TableCell>
                      <TableCell className="capitalize">{activity.type}</TableCell>
                      <TableCell>{activity.name}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          activity.status === 'pending' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : activity.status === 'resolved' || activity.status === 'completed' || activity.status === 'approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {activity.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
