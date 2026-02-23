# AutoLinker - Maritime Career Intelligence Platform

![AutoLinker](https://img.shields.io/badge/Next.js-14-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## 🚢 Overview

AutoLinker is a modern maritime career intelligence platform that solves the fragmented, manual, and non-transparent recruitment and career verification process in the maritime industry.

### Key Features

- ✅ **Verified Professional Profiles** - Store and organize all maritime certificates and sea service records
- 🤖 **AI Resume Generator** - Automatically generate structured maritime CVs
- 📊 **CRI (Crew Readiness Index)** - Calculated score (0-100) measuring document completeness, experience, skills, and verification status
- 📈 **Analytics Dashboard** - Track profile completion, document verification, and career progression
- 🎯 **Smart Matching** - Intelligent matching between seafarers and recruiters

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom theme
- **Lucide React** - Beautiful icons
- **Recharts** - Data visualization
- **date-fns** - Date formatting

### Current Phase
✅ **Phase 1: Frontend Presentation SaaS Template**
- Complete UI/UX implementation
- Mock data system
- Fully functional dashboard
- Certificate management
- Profile management
- Analytics and CRI scoring

❌ **Future Phases:**
- Backend API (Node.js/Express or Supabase)
- Real authentication
- Database integration
- File upload/storage
- AI features (OCR, matching algorithms)

## 📁 Project Structure

```
autolinker/
├── app/                          # Next.js App Router
│   ├── dashboard/               # Dashboard pages
│   │   ├── certificates/        # Certificate management
│   │   ├── layout.tsx          # Dashboard layout with navigation
│   │   └── page.tsx            # Main dashboard
│   ├── profile/                 # Profile pages
│   │   └── page.tsx            # Profile view
│   ├── globals.css             # Global styles & Tailwind
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Landing page
├── components/                  # React components
│   ├── layout/
│   │   └── Navigation.tsx      # Main navigation component
│   └── ui/
│       ├── CRIScore.tsx        # CRI score display
│       ├── CertificateCard.tsx # Certificate card component
│       └── StatsCard.tsx       # Statistics card component
├── lib/                         # Utilities and data
│   ├── data/
│   │   └── mockData.ts         # Mock data for development
│   └── types/
│       └── index.ts            # TypeScript type definitions
├── public/                      # Static assets
├── .eslintrc.json              # ESLint configuration
├── .gitignore                  # Git ignore rules
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Extract the zip file**
   ```bash
   unzip autolinker.zip
   cd autolinker
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📱 Pages & Features

### Landing Page (`/`)
- Hero section with value proposition
- Feature highlights
- How it works section
- Call-to-action sections

### Dashboard (`/dashboard`)
- **Analytics Overview**
  - Profile views, search appearances, recruiter contacts
  - Profile completion percentage
- **CRI Score Display**
  - Visual score with breakdown
  - Trend chart over time
- **Recent Activity**
  - Latest sea service records
  - Recommendations for improvement
- **Alerts**
  - Expiring certificates
  - Profile completion reminders

### Certificates (`/dashboard/certificates`)
- Certificate grid display
- Filtering (All, Verified, Pending, Expiring)
- Status badges (Verified, Expired, Expiring Soon)
- Document statistics

### Profile (`/profile`)
- Personal information display
- Sea service history
- Education and training
- CRI score with detailed breakdown
- Availability status
- Quick actions (Generate CV, Share Profile, Export Data)

## 🎨 Design System

### Color Palette
- **Ocean Blue**: Primary brand color (#0091af)
- **Nautical Gray**: Secondary colors (#627d98)
- **Background**: Gradient from slate to blue

### Typography
- **Display Font**: Space Grotesk
- **Body Font**: Inter

### Components
All components follow a consistent design system:
- Cards with hover effects
- Progress bars with animations
- Badges for status indicators
- Buttons (primary, secondary)
- Input fields with focus states

## 📊 Mock Data

The application uses comprehensive mock data located in `lib/data/mockData.ts`:

- User profiles
- Seafarer details
- Certificates (5 sample certificates)
- Sea service records (3 sample records)
- Education history
- CRI calculations
- Analytics data
- Notifications

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Optionally add a `layout.tsx` for nested layouts

### Modifying Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  ocean: { /* your colors */ },
  nautical: { /* your colors */ }
}
```

### Adding Components
Create new components in `components/ui/` or `components/layout/`

## 🚢 User Roles

The platform supports four user types:
1. **Seafarers/Students** - Create profiles, manage certificates
2. **Recruiters/Companies** - Search and evaluate candidates
3. **Maritime Academies** - Manage student profiles
4. **Admins** - System administration

Currently, the demo is configured for the Seafarer role.

## 📈 CRI (Crew Readiness Index) Calculation

The CRI score is calculated from 4 components:

1. **Document Completeness (30 points)** - Based on required certificates
2. **Experience Score (30 points)** - Based on total sea time
3. **Skill Coverage (20 points)** - Based on vessel types experience
4. **Verification Status (20 points)** - Based on verified documents

**Score Levels:**
- 80-100: Excellent
- 60-79: High
- 40-59: Medium
- 0-39: Low

## 🔮 Future Development

### Phase 2: Backend Integration
- [ ] Set up Supabase or Node.js/Express backend
- [ ] Implement authentication (email/password, OAuth)
- [ ] PostgreSQL database schema
- [ ] File upload and storage
- [ ] API endpoints for CRUD operations

### Phase 3: Advanced Features
- [ ] AI-powered CV generation with OpenAI
- [ ] OCR for certificate data extraction
- [ ] Job matching algorithm
- [ ] Real-time notifications
- [ ] Chat/messaging between users
- [ ] Advanced analytics and reporting

### Phase 4: Scaling
- [ ] Multi-tenancy for maritime companies
- [ ] Mobile app (React Native)
- [ ] API for third-party integrations
- [ ] Payment/subscription system

## 📝 License

This is a Phase 1 presentation template. All rights reserved.

## 🤝 Contributing

This is currently a Phase 1 template. For production use:
1. Set up proper authentication
2. Connect to a real database
3. Implement file upload functionality
4. Add proper error handling
5. Set up monitoring and logging

## 📧 Support

For questions or support, please contact the development team.

---

**Built with ❤️ for the Maritime Industry**

Version: 1.0.0 (Phase 1 - Frontend Template)
Last Updated: February 2026
