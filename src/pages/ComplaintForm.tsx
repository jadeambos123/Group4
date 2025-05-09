
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

const ComplaintForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [urgency, setUrgency] = useState('medium');
  const [description, setDescription] = useState('');
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
        title: "Complaint Submitted",
        description: "Your complaint has been received and is pending review.",
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
              <h1 className="text-2xl font-bold">File a Complaint</h1>
              <p className="text-gray-500 text-sm">Please provide details about your complaint</p>
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
                </div>
              </div>

              <div className="pt-2">
                <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
                
                <div>
                  <Label htmlFor="contact">Email or phone number</Label>
                  <Input
                    id="contact"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    placeholder="Email or phone number"
                    required
                  />
                </div>
              </div>

              <div className="pt-2">
                <h2 className="text-lg font-semibold mb-3">Complaint Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <Select
                      value={urgency}
                      onValueChange={setUrgency}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="description">Complaint Description</Label>
                    <Textarea
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Please describe your complaint in detail..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="photo">Upload Photo Evidence (Optional)</Label>
                    <div className="mt-1">
                      <Input 
                        id="photo" 
                        type="file" 
                        accept="image/*"
                      />
                      <p className="text-xs text-gray-500 mt-1">Maximum file size: 5MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-barangay-navy hover:bg-barangay-navy/90"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Complaint"}
            </Button>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default ComplaintForm;
