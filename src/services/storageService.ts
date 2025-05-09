
// Types for our forms
export interface Complaint {
  id: string;
  name: string;
  contact: string;
  urgency: string;
  description: string;
  date: string;
  status: 'pending' | 'resolved';
}

export interface DocumentRequest {
  id: string;
  name: string;
  address: string;
  contact: string;
  documentType: string;
  purpose: string;
  date: string;
  status: 'pending' | 'completed';
}

export interface AidRequest {
  id: string;
  name: string;
  contact: string;
  aidType: string;
  amount: string;
  reason: string;
  date: string;
  status: 'pending' | 'approved' | 'rejected';
}

// Storage keys
const STORAGE_KEYS = {
  COMPLAINTS: 'barangay_complaints',
  DOCUMENTS: 'barangay_documents',
  AID_REQUESTS: 'barangay_aid',
};

// Helper to generate unique IDs
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
};

// Helper to get current date
const getCurrentDate = (): string => {
  return new Date().toISOString().split('T')[0];
};

// Get items from storage
export const getComplaints = (): Complaint[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.COMPLAINTS);
  return stored ? JSON.parse(stored) : [];
};

export const getDocumentRequests = (): DocumentRequest[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.DOCUMENTS);
  return stored ? JSON.parse(stored) : [];
};

export const getAidRequests = (): AidRequest[] => {
  const stored = localStorage.getItem(STORAGE_KEYS.AID_REQUESTS);
  return stored ? JSON.parse(stored) : [];
};

// Add items to storage
export const addComplaint = (complaint: Omit<Complaint, 'id' | 'date' | 'status'>): Complaint => {
  const complaints = getComplaints();
  const newComplaint: Complaint = {
    ...complaint,
    id: generateId(),
    date: getCurrentDate(),
    status: 'pending',
  };
  
  complaints.push(newComplaint);
  localStorage.setItem(STORAGE_KEYS.COMPLAINTS, JSON.stringify(complaints));
  return newComplaint;
};

export const addDocumentRequest = (request: Omit<DocumentRequest, 'id' | 'date' | 'status'>): DocumentRequest => {
  const requests = getDocumentRequests();
  const newRequest: DocumentRequest = {
    ...request,
    id: generateId(),
    date: getCurrentDate(),
    status: 'pending',
  };
  
  requests.push(newRequest);
  localStorage.setItem(STORAGE_KEYS.DOCUMENTS, JSON.stringify(requests));
  return newRequest;
};

export const addAidRequest = (request: Omit<AidRequest, 'id' | 'date' | 'status'>): AidRequest => {
  const requests = getAidRequests();
  const newRequest: AidRequest = {
    ...request,
    id: generateId(),
    date: getCurrentDate(),
    status: 'pending',
  };
  
  requests.push(newRequest);
  localStorage.setItem(STORAGE_KEYS.AID_REQUESTS, JSON.stringify(requests));
  return newRequest;
};

// Get all requests combined for activity feed
export const getAllActivities = () => {
  const complaints = getComplaints().map(c => ({...c, type: 'complaint'}));
  const documents = getDocumentRequests().map(d => ({...d, type: 'document'}));
  const aids = getAidRequests().map(a => ({...a, type: 'aid'}));
  
  return [...complaints, ...documents, ...aids].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};
