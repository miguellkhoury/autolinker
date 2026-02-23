# AutoLinker - Quick Start Guide

## 🎯 What You Have

This is a **complete Phase 1 frontend** for AutoLinker - a maritime career intelligence platform.

✅ **Included:**
- Fully functional Next.js 14 application
- TypeScript throughout
- Professional UI with Tailwind CSS
- Mock data system (ready for backend integration)
- 4 main pages: Landing, Dashboard, Certificates, Profile
- CRI scoring system
- Analytics and charts
- Responsive design

❌ **Not Included (Future Development):**
- Backend/Database
- Real authentication
- File upload
- AI features

## 🚀 Setup (5 Minutes)

### Step 1: Install Node.js
If you don't have Node.js installed:
- Download from https://nodejs.org (get version 18 or higher)
- Install it on your computer

### Step 2: Install Dependencies
Open terminal/command prompt in the autolinker folder:

```bash
cd autolinker
npm install
```

This will take 2-3 minutes to download all dependencies.

### Step 3: Run the Development Server

```bash
npm run dev
```

### Step 4: Open in Browser
Go to: http://localhost:3000

## 📱 What You'll See

1. **Landing Page** (http://localhost:3000)
   - Marketing homepage
   - Click "Start Your Profile" or "Sign In"

2. **Dashboard** (http://localhost:3000/dashboard)
   - Analytics overview
   - CRI score
   - Recent activity
   - Recommendations

3. **Certificates** (http://localhost:3000/dashboard/certificates)
   - View all certificates
   - Filter by status
   - See expiring documents

4. **Profile** (http://localhost:3000/profile)
   - Personal information
   - Sea service history
   - Education
   - CRI breakdown

## 🔧 Customization

### Change Colors
Edit `tailwind.config.ts`:
```typescript
ocean: {
  500: '#0091af', // Change this to your brand color
}
```

### Change Mock Data
Edit `lib/data/mockData.ts`:
```typescript
export const mockUser: User = {
  name: 'Your Name', // Change here
  email: 'your.email@example.com',
  // ... etc
}
```

### Add New Pages
1. Create folder in `app/`
2. Add `page.tsx` file
3. Done! Next.js handles routing automatically

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🔮 Next Steps (Backend Integration)

To make this production-ready:

1. **Choose Backend:**
   - Option A: Supabase (recommended - easiest)
   - Option B: Node.js + Express + PostgreSQL

2. **Set up Authentication:**
   - Use Supabase Auth or NextAuth.js
   - Replace mock user with real login

3. **Database Schema:**
   - See `lib/types/index.ts` for data structure
   - Create tables for: users, profiles, certificates, sea_service, etc.

4. **File Upload:**
   - Use Supabase Storage or AWS S3
   - Replace mock certificates with real uploads

5. **Deploy:**
   - Frontend: Vercel (easiest for Next.js)
   - Backend: Supabase Cloud or Render

## ❓ Common Issues

### Port 3000 already in use
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies not installing
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Make sure Node.js version is 18+
node --version

# Update if needed
```

## 📚 Learn More

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs
- **Supabase:** https://supabase.com/docs (for backend)

## 💡 Tips

1. **Development Tips:**
   - Hot reload is enabled - changes show immediately
   - Check browser console for errors
   - Use React DevTools for debugging

2. **Code Organization:**
   - Components in `components/`
   - Pages in `app/`
   - Data/types in `lib/`
   - Keep this structure as you expand

3. **Git Setup:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AutoLinker Phase 1"
   ```

## 📧 Support

This is a template. For production deployment:
- Set up error tracking (Sentry)
- Add analytics (Google Analytics, Vercel Analytics)
- Implement proper SEO
- Add loading states
- Handle edge cases

---

**Enjoy building AutoLinker! 🚢**
