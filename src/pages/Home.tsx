
import React from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { FileText, MessageSquare, Heart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold mb-2">Barangay Services Portal</h1>
          <p className="text-gray-600">Serving the community with efficient digital services</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-r-md">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">Announcements</h2>
          <ul className="space-y-1 text-sm text-gray-700">
            <li>• Curfew updated to 10 PM starting April 15</li>
            <li>• Free medical check-up every Thursday</li>
            <li>• Garbage collection moved to Mondays/Thursdays</li>
          </ul>
        </div>

        <h2 className="text-2xl font-bold mb-4">Available Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/request-documents">
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
              <div className="flex flex-col items-center text-center">
                <FileText size={36} className="text-barangay-blue mb-4" />
                <h3 className="text-xl font-semibold mb-2">Request Documents</h3>
                <p className="text-gray-500">Apply for barangay clearance, business permit, and more</p>
              </div>
            </Card>
          </Link>

          <Link to="/file-complaint">
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
              <div className="flex flex-col items-center text-center">
                <MessageSquare size={36} className="text-barangay-red mb-4" />
                <h3 className="text-xl font-semibold mb-2">File Complaints</h3>
                <p className="text-gray-500">Report issues or concerns in the community</p>
              </div>
            </Card>
          </Link>

          <Link to="/request-aid">
            <Card className="p-6 hover:shadow-md transition-shadow cursor-pointer h-full">
              <div className="flex flex-col items-center text-center">
                <Heart size={36} className="text-barangay-green mb-4" />
                <h3 className="text-xl font-semibold mb-2">Request Aid</h3>
                <p className="text-gray-500">Apply for financial, medical, or food assistance</p>
              </div>
            </Card>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
