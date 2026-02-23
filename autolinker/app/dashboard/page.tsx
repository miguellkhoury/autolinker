'use client';

import { 
  Eye, 
  Search, 
  Mail, 
  TrendingUp, 
  AlertCircle,
  FileText,
  Ship,
  Calendar
} from 'lucide-react';
import StatsCard from '@/components/ui/StatsCard';
import CRIScore from '@/components/ui/CRIScore';
import CertificateCard from '@/components/ui/CertificateCard';
import { 
  mockProfile, 
  mockCRIResult, 
  mockAnalytics, 
  mockCertificates,
  mockSeaService 
} from '@/lib/data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import Link from 'next/link';

export default function DashboardPage() {
  const upcomingExpiries = mockCertificates
    .filter(cert => {
      const daysUntilExpiry = Math.floor(
        (new Date(cert.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysUntilExpiry > 0 && daysUntilExpiry < 90;
    })
    .sort((a, b) => new Date(a.expiryDate).getTime() - new Date(b.expiryDate).getTime());

  const recentSeaService = mockSeaService[0];

  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="animate-slide-up">
        <h1 className="text-3xl font-display font-bold text-nautical-900 mb-2">
          Welcome back, John! 👋
        </h1>
        <p className="text-nautical-600">
          Here's your maritime career overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-slide-up animate-delay-100">
        <StatsCard
          title="Profile Views"
          value={mockAnalytics.profileViews}
          subtitle="Last 30 days"
          icon={Eye}
          trend={{ value: 12, isPositive: true }}
          color="blue"
        />
        <StatsCard
          title="Search Appearances"
          value={mockAnalytics.searchAppearances}
          subtitle="In recruiter searches"
          icon={Search}
          trend={{ value: 8, isPositive: true }}
          color="green"
        />
        <StatsCard
          title="Recruiter Contacts"
          value={mockAnalytics.recruiterContacts}
          subtitle="This month"
          icon={Mail}
          trend={{ value: 3, isPositive: true }}
          color="purple"
        />
        <StatsCard
          title="Profile Completion"
          value={`${mockProfile.profileCompletion}%`}
          subtitle="Almost there!"
          icon={TrendingUp}
          color="orange"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - CRI Score & Chart */}
        <div className="lg:col-span-2 space-y-8">
          {/* CRI Score */}
          <div className="animate-slide-up animate-delay-200">
            <CRIScore criResult={mockCRIResult} showDetails={true} />
          </div>

          {/* CRI Trend Chart */}
          <div className="card animate-slide-up animate-delay-300">
            <h3 className="text-lg font-semibold text-nautical-800 mb-6">
              CRI Score Trend
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockAnalytics.criHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="date" 
                  tickFormatter={(date) => format(new Date(date), 'MMM')}
                  stroke="#64748b"
                />
                <YAxis stroke="#64748b" domain={[70, 90]} />
                <Tooltip 
                  labelFormatter={(date) => format(new Date(date), 'MMM yyyy')}
                  contentStyle={{
                    backgroundColor: '#fff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#0091af" 
                  strokeWidth={3}
                  dot={{ fill: '#0091af', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity */}
          <div className="card animate-slide-up animate-delay-400">
            <h3 className="text-lg font-semibold text-nautical-800 mb-6">
              Recent Sea Service
            </h3>
            {recentSeaService && (
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ocean-50 rounded-lg flex items-center justify-center">
                    <Ship className="w-6 h-6 text-ocean-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-nautical-800">
                      {recentSeaService.vesselName}
                    </h4>
                    <p className="text-sm text-nautical-600 mt-1">
                      {recentSeaService.rank} • {recentSeaService.vesselType}
                    </p>
                    <p className="text-sm text-nautical-500 mt-1">
                      {recentSeaService.company}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Calendar className="w-4 h-4 text-nautical-400" />
                      <span className="text-sm text-nautical-600">
                        {format(new Date(recentSeaService.signOnDate), 'MMM yyyy')} - {format(new Date(recentSeaService.signOffDate), 'MMM yyyy')}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="badge bg-ocean-50 text-ocean-700">
                      {recentSeaService.durationMonths} months
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Alerts & Quick Actions */}
        <div className="space-y-8">
          {/* Recommendations */}
          <div className="card animate-slide-up animate-delay-200">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="w-5 h-5 text-orange-600" />
              <h3 className="text-lg font-semibold text-nautical-800">
                Recommendations
              </h3>
            </div>
            <ul className="space-y-3">
              {mockCRIResult.recommendations.map((rec, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm">
                  <span className="text-ocean-600 mt-0.5">•</span>
                  <span className="text-nautical-600">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Expiring Certificates */}
          {upcomingExpiries.length > 0 && (
            <div className="card animate-slide-up animate-delay-300 border-l-4 border-yellow-500">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-5 h-5 text-yellow-600" />
                <h3 className="text-lg font-semibold text-nautical-800">
                  Expiring Soon
                </h3>
              </div>
              <div className="space-y-3">
                {upcomingExpiries.slice(0, 2).map((cert) => {
                  const daysUntilExpiry = Math.floor(
                    (new Date(cert.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                  );
                  return (
                    <div key={cert.id} className="pb-3 border-b border-nautical-100 last:border-0">
                      <p className="font-medium text-nautical-800 text-sm">{cert.name}</p>
                      <p className="text-xs text-yellow-600 mt-1">
                        Expires in {daysUntilExpiry} days
                      </p>
                    </div>
                  );
                })}
              </div>
              <Link 
                href="/dashboard/certificates"
                className="block text-center mt-4 text-sm text-ocean-600 hover:text-ocean-700 font-medium"
              >
                View All Certificates →
              </Link>
            </div>
          )}

          {/* Quick Actions */}
          <div className="card animate-slide-up animate-delay-400">
            <h3 className="text-lg font-semibold text-nautical-800 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link href="/profile/edit" className="block w-full btn-secondary text-sm py-2 text-center">
                Edit Profile
              </Link>
              <button className="w-full btn-primary text-sm py-2">
                Generate CV
              </button>
              <Link href="/dashboard/certificates" className="block w-full border border-nautical-200 text-nautical-700 px-4 py-2 rounded-lg text-sm hover:bg-nautical-50 transition-colors text-center">
                Upload Certificate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
