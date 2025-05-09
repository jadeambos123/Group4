
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from '@/hooks/use-toast';

const DocumentRequestForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [documentType, setDocumentType] = useState('barangay_clearance');
  const [purpose, setPurpose] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Document Request Submitted",
        description: "Your request has been received and is pending processing.",
      });
      navigate('/');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Request Documents</h1>
              <p className="text-gray-500 text-sm">Request official barangay documents and certificates</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-semibold mb-3">Personal Information</h2>
                
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Juan Dela Cruz"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Complete Address</Label>
                    <Input
                      id="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Main St, Barangay Example"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="contact">Contact Number</Label>
                    <Input
                      id="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="09123456789"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <h2 className="text-lg font-semibold mb-3">Document Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="documentType">Document Type</Label>
                    <Select
                      value={documentType}
                      onValueChange={setDocumentType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select document type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="barangay_clearance">Barangay Clearance</SelectItem>
                        <SelectItem value="business_permit">Business Permit</SelectItem>
                        <SelectItem value="residency_cert">Certificate of Residency</SelectItem>
                        <SelectItem value="indigency_cert">Certificate of Indigency</SelectItem>
                        <SelectItem value="other">Other Document</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="purpose">Purpose of Request</Label>
                    <Textarea
                      id="purpose"
                      value={purpose}
                      onChange={(e) => setPurpose(e.target.value)}
                      placeholder="Please explain why you need this document..."
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-barangay-navy hover:bg-barangay-navy/90"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Request"}
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default DocumentRequestForm;
