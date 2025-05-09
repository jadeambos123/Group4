
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
import { addAidRequest } from '../services/storageService';

const AidRequestForm = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [aidType, setAidType] = useState('financial');
  const [amount, setAmount] = useState('');
  const [reason, setReason] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Save to storage
    try {
      addAidRequest({
        name,
        contact,
        aidType,
        amount,
        reason
      });
      
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Aid Request Submitted",
          description: "Your request has been received and is pending review.",
        });
        navigate('/');
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-2xl">
        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Request Barangay Aid</h1>
              <p className="text-gray-500 text-sm">Fill out this form to request financial, medical, or food assistance</p>
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
                <h2 className="text-lg font-semibold mb-3">Aid Details</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="aidType">Type of Aid</Label>
                    <Select
                      value={aidType}
                      onValueChange={setAidType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select aid type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial Assistance</SelectItem>
                        <SelectItem value="medical">Medical Assistance</SelectItem>
                        <SelectItem value="food">Food Assistance</SelectItem>
                        <SelectItem value="other">Other Assistance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="amount">Amount Needed (PHP)</Label>
                    <Input
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      type="number"
                      placeholder="5000"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="reason">Reason for Aid Request</Label>
                    <Textarea
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      placeholder="Please explain why you need this assistance..."
                      className="min-h-[120px]"
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

export default AidRequestForm;
