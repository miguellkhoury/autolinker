// User Types
export type UserRole = 'seafarer' | 'recruiter' | 'academy' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
}

// Seafarer Profile Types
export interface SeafarerProfile {
  userId: string;
  rank: string;
  nationality: string;
  dateOfBirth: Date;
  phoneNumber: string;
  address: string;
  
  // Experience
  totalSeaTime: number; // in months
  vesselTypes: string[];
  
  // CRI Score
  criScore: number;
  
  // Profile completion
  profileCompletion: number;
  
  // Availability
  availableFrom: Date;
  status: 'available' | 'employed' | 'unavailable';
}

// Certificate Types
export interface Certificate {
  id: string;
  userId: string;
  type: CertificateType;
  name: string;
  issueDate: Date;
  expiryDate: Date;
  issuingAuthority: string;
  documentUrl?: string;
  verified: boolean;
  verificationDate?: Date;
}

export type CertificateType = 
  | 'coc' // Certificate of Competency
  | 'stcw' // STCW certificates
  | 'medical'
  | 'passport'
  | 'seaman_book'
  | 'training'
  | 'other';

// Sea Service Types
export interface SeaService {
  id: string;
  userId: string;
  vesselName: string;
  vesselType: string;
  vesselFlag: string;
  grossTonnage: number;
  enginePower: number;
  rank: string;
  company: string;
  signOnDate: Date;
  signOffDate: Date;
  durationMonths: number;
}

// Education Types
export interface Education {
  id: string;
  userId: string;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate?: Date;
  isCurrent: boolean;
}

// CRI Calculation Types
export interface CRIComponents {
  documentCompleteness: number; // 0-30
  experienceScore: number; // 0-30
  skillCoverage: number; // 0-20
  verificationStatus: number; // 0-20
}

export interface CRIResult {
  totalScore: number; // 0-100
  components: CRIComponents;
  recommendations: string[];
  level: 'low' | 'medium' | 'high' | 'excellent';
}

// Analytics Types
export interface AnalyticsData {
  profileViews: number;
  searchAppearances: number;
  recruiterContacts: number;
  criHistory: {
    date: Date;
    score: number;
  }[];
  documentStatus: {
    total: number;
    verified: number;
    pending: number;
    expired: number;
  };
}

// Job/Vacancy Types (for future)
export interface JobVacancy {
  id: string;
  recruiterId: string;
  companyName: string;
  position: string;
  vesselType: string;
  contractDuration: number;
  salary?: string;
  requirements: {
    minCRI: number;
    certificates: string[];
    experience: number;
  };
  postedDate: Date;
  status: 'open' | 'closed' | 'filled';
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'document_expiry' | 'profile_incomplete' | 'new_match' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}
