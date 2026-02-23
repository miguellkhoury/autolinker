import { 
  User, 
  SeafarerProfile, 
  Certificate, 
  SeaService, 
  Education, 
  CRIResult,
  AnalyticsData,
  Notification 
} from '../types';

// Mock Current User
export const mockUser: User = {
  id: 'user-001',
  email: 'john.martinez@maritime.com',
  name: 'John Martinez',
  role: 'seafarer',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  createdAt: new Date('2024-01-15'),
};

// Mock Seafarer Profile
export const mockProfile: SeafarerProfile = {
  userId: 'user-001',
  rank: 'Chief Engineer',
  nationality: 'Philippines',
  dateOfBirth: new Date('1985-03-20'),
  phoneNumber: '+63 917 123 4567',
  address: 'Manila, Philippines',
  totalSeaTime: 156, // 13 years
  vesselTypes: ['Container', 'Bulk Carrier', 'Tanker'],
  criScore: 87,
  profileCompletion: 85,
  availableFrom: new Date('2026-04-01'),
  status: 'available',
};

// Mock Certificates
export const mockCertificates: Certificate[] = [
  {
    id: 'cert-001',
    userId: 'user-001',
    type: 'coc',
    name: 'Chief Engineer Officer Certificate',
    issueDate: new Date('2018-06-15'),
    expiryDate: new Date('2028-06-15'),
    issuingAuthority: 'MARINA Philippines',
    verified: true,
    verificationDate: new Date('2024-01-20'),
  },
  {
    id: 'cert-002',
    userId: 'user-001',
    type: 'stcw',
    name: 'STCW Basic Safety Training',
    issueDate: new Date('2020-03-10'),
    expiryDate: new Date('2025-03-10'),
    issuingAuthority: 'Maritime Training Center',
    verified: true,
    verificationDate: new Date('2024-01-20'),
  },
  {
    id: 'cert-003',
    userId: 'user-001',
    type: 'medical',
    name: 'Seafarer Medical Certificate',
    issueDate: new Date('2024-09-01'),
    expiryDate: new Date('2026-09-01'),
    issuingAuthority: 'Manila Medical Clinic',
    verified: true,
    verificationDate: new Date('2024-09-05'),
  },
  {
    id: 'cert-004',
    userId: 'user-001',
    type: 'passport',
    name: 'Passport',
    issueDate: new Date('2020-01-15'),
    expiryDate: new Date('2030-01-15'),
    issuingAuthority: 'Philippines DFA',
    verified: true,
    verificationDate: new Date('2024-01-20'),
  },
  {
    id: 'cert-005',
    userId: 'user-001',
    type: 'training',
    name: 'Advanced Fire Fighting',
    issueDate: new Date('2019-11-20'),
    expiryDate: new Date('2024-11-20'),
    issuingAuthority: 'Safety Training Institute',
    verified: false,
  },
];

// Mock Sea Service Records
export const mockSeaService: SeaService[] = [
  {
    id: 'sea-001',
    userId: 'user-001',
    vesselName: 'MV Ocean Navigator',
    vesselType: 'Container Ship',
    vesselFlag: 'Singapore',
    grossTonnage: 75000,
    enginePower: 45000,
    rank: 'Chief Engineer',
    company: 'Pacific Maritime Lines',
    signOnDate: new Date('2023-06-01'),
    signOffDate: new Date('2024-02-15'),
    durationMonths: 8,
  },
  {
    id: 'sea-002',
    userId: 'user-001',
    vesselName: 'MV Global Trader',
    vesselType: 'Bulk Carrier',
    vesselFlag: 'Liberia',
    grossTonnage: 82000,
    enginePower: 52000,
    rank: 'Second Engineer',
    company: 'International Shipping Co.',
    signOnDate: new Date('2022-01-10'),
    signOffDate: new Date('2023-03-20'),
    durationMonths: 14,
  },
  {
    id: 'sea-003',
    userId: 'user-001',
    vesselName: 'MT Energy Star',
    vesselType: 'Oil Tanker',
    vesselFlag: 'Marshall Islands',
    grossTonnage: 95000,
    enginePower: 48000,
    rank: 'Second Engineer',
    company: 'Marine Energy Transport',
    signOnDate: new Date('2020-08-01'),
    signOffDate: new Date('2021-10-30'),
    durationMonths: 15,
  },
];

// Mock Education
export const mockEducation: Education[] = [
  {
    id: 'edu-001',
    userId: 'user-001',
    institution: 'Philippine Merchant Marine Academy',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Marine Engineering',
    startDate: new Date('2003-06-01'),
    endDate: new Date('2007-04-15'),
    isCurrent: false,
  },
  {
    id: 'edu-002',
    userId: 'user-001',
    institution: 'Maritime Safety Training Center',
    degree: 'Advanced Diploma',
    fieldOfStudy: 'Ship Management and Operations',
    startDate: new Date('2015-01-10'),
    endDate: new Date('2015-12-20'),
    isCurrent: false,
  },
];

// Mock CRI Result
export const mockCRIResult: CRIResult = {
  totalScore: 87,
  components: {
    documentCompleteness: 26,
    experienceScore: 28,
    skillCoverage: 18,
    verificationStatus: 15,
  },
  recommendations: [
    'Renew Advanced Fire Fighting certificate expiring in Nov 2024',
    'Add ECDIS certificate to improve skill coverage',
    'Complete profile: Add language proficiencies',
    'Upload recommendation letters from previous employers',
  ],
  level: 'excellent',
};

// Mock Analytics Data
export const mockAnalytics: AnalyticsData = {
  profileViews: 142,
  searchAppearances: 58,
  recruiterContacts: 12,
  criHistory: [
    { date: new Date('2024-01-01'), score: 78 },
    { date: new Date('2024-02-01'), score: 80 },
    { date: new Date('2024-03-01'), score: 82 },
    { date: new Date('2024-04-01'), score: 83 },
    { date: new Date('2024-05-01'), score: 85 },
    { date: new Date('2024-06-01'), score: 87 },
  ],
  documentStatus: {
    total: 5,
    verified: 4,
    pending: 0,
    expired: 1,
  },
};

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-001',
    userId: 'user-001',
    type: 'document_expiry',
    title: 'Certificate Expiring Soon',
    message: 'Your Advanced Fire Fighting certificate expires in 30 days',
    read: false,
    createdAt: new Date('2024-10-20'),
    actionUrl: '/dashboard/certificates',
  },
  {
    id: 'notif-002',
    userId: 'user-001',
    type: 'new_match',
    title: 'New Job Match',
    message: 'A new Chief Engineer position matches your profile (CRI: 87)',
    read: false,
    createdAt: new Date('2024-10-18'),
    actionUrl: '/dashboard/jobs',
  },
  {
    id: 'notif-003',
    userId: 'user-001',
    type: 'profile_incomplete',
    title: 'Complete Your Profile',
    message: 'Add language skills to reach 90% profile completion',
    read: true,
    createdAt: new Date('2024-10-15'),
    actionUrl: '/profile/edit',
  },
];

// Helper function to calculate CRI
export function calculateCRI(
  certificates: Certificate[],
  seaService: SeaService[],
  profile: SeafarerProfile
): CRIResult {
  // Document Completeness (30 points)
  const requiredDocs = ['coc', 'stcw', 'medical', 'passport'];
  const hasDocs = requiredDocs.filter(type => 
    certificates.some(cert => cert.type === type && new Date(cert.expiryDate) > new Date())
  );
  const documentCompleteness = (hasDocs.length / requiredDocs.length) * 30;

  // Experience Score (30 points)
  const totalMonths = profile.totalSeaTime;
  const experienceScore = Math.min((totalMonths / 120) * 30, 30); // Cap at 10 years

  // Skill Coverage (20 points)
  const vesselTypesCount = profile.vesselTypes.length;
  const skillCoverage = Math.min((vesselTypesCount / 5) * 20, 20);

  // Verification Status (20 points)
  const verifiedCount = certificates.filter(c => c.verified).length;
  const verificationStatus = Math.min((verifiedCount / certificates.length) * 20, 20);

  const totalScore = Math.round(
    documentCompleteness + experienceScore + skillCoverage + verificationStatus
  );

  let level: 'low' | 'medium' | 'high' | 'excellent';
  if (totalScore >= 80) level = 'excellent';
  else if (totalScore >= 60) level = 'high';
  else if (totalScore >= 40) level = 'medium';
  else level = 'low';

  const recommendations: string[] = [];
  
  if (documentCompleteness < 25) {
    recommendations.push('Complete all required certificates');
  }
  
  const expiringCerts = certificates.filter(c => {
    const daysUntilExpiry = Math.floor(
      (new Date(c.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
    );
    return daysUntilExpiry > 0 && daysUntilExpiry < 90;
  });
  
  expiringCerts.forEach(cert => {
    recommendations.push(`Renew ${cert.name} expiring soon`);
  });

  if (profile.profileCompletion < 100) {
    recommendations.push('Complete your profile to 100%');
  }

  return {
    totalScore,
    components: {
      documentCompleteness: Math.round(documentCompleteness),
      experienceScore: Math.round(experienceScore),
      skillCoverage: Math.round(skillCoverage),
      verificationStatus: Math.round(verificationStatus),
    },
    recommendations,
    level,
  };
}
