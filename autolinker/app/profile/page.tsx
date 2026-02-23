'use client';

import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Ship,
  GraduationCap,
  Edit,
  Award,
  Globe
} from 'lucide-react';
import { mockUser, mockProfile, mockSeaService, mockEducation } from '@/lib/data/mockData';
import { format } from 'date-fns';
import CRIScore from '@/components/ui/CRIScore';
import { mockCRIResult } from '@/lib/data/mockData';

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-nautical-900">
            My Profile
          </h1>
          <p className="text-nautical-600 mt-1">
            Your professional maritime profile
          </p>
        </div>
        <button className="btn-primary flex items-center space-x-2">
          <Edit className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      </div>

      {/* Profile Header Card */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={mockUser.avatar}
            alt={mockUser.name}
            className="w-32 h-32 rounded-2xl ring-4 ring-ocean-100"
          />
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-nautical-900">{mockUser.name}</h2>
                <p className="text-ocean-600 font-semibold mt-1">{mockProfile.rank}</p>
              </div>
              <span className={`badge ${
                mockProfile.status === 'available' 
                  ? 'bg-green-50 text-green-700' 
                  : 'bg-gray-50 text-gray-700'
              }`}>
                {mockProfile.status === 'available' ? '✓ Available' : 'Employed'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-nautical-400" />
                <span className="text-nautical-600">{mockUser.email}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-nautical-400" />
                <span className="text-nautical-600">{mockProfile.phoneNumber}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-nautical-400" />
                <span className="text-nautical-600">{mockProfile.address}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Globe className="w-4 h-4 text-nautical-400" />
                <span className="text-nautical-600">{mockProfile.nationality}</span>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-nautical-100">
              <div className="flex items-center space-x-6">
                <div>
                  <p className="text-2xl font-bold text-ocean-600">
                    {Math.floor(mockProfile.totalSeaTime / 12)}
                    <span className="text-lg text-nautical-500 ml-1">years</span>
                  </p>
                  <p className="text-xs text-nautical-500">Sea Experience</p>
                </div>
                <div className="h-10 w-px bg-nautical-200" />
                <div>
                  <p className="text-2xl font-bold text-ocean-600">{mockProfile.vesselTypes.length}</p>
                  <p className="text-xs text-nautical-500">Vessel Types</p>
                </div>
                <div className="h-10 w-px bg-nautical-200" />
                <div>
                  <p className="text-2xl font-bold text-ocean-600">
                    {mockProfile.profileCompletion}%
                  </p>
                  <p className="text-xs text-nautical-500">Profile Complete</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Sea Service */}
          <div className="card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Ship className="w-5 h-5 text-ocean-600" />
                <h3 className="text-lg font-semibold text-nautical-800">
                  Sea Service Record
                </h3>
              </div>
              <button className="text-sm text-ocean-600 hover:text-ocean-700 font-medium">
                View All →
              </button>
            </div>

            <div className="space-y-6">
              {mockSeaService.map((service) => (
                <div key={service.id} className="pb-6 border-b border-nautical-100 last:border-0">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-nautical-800">{service.vesselName}</h4>
                      <p className="text-sm text-nautical-600 mt-1">
                        {service.rank} • {service.vesselType}
                      </p>
                    </div>
                    <span className="badge bg-ocean-50 text-ocean-700">
                      {service.durationMonths} months
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <p className="text-nautical-500">Company</p>
                      <p className="font-medium text-nautical-800">{service.company}</p>
                    </div>
                    <div>
                      <p className="text-nautical-500">Flag</p>
                      <p className="font-medium text-nautical-800">{service.vesselFlag}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-sm text-nautical-600">
                    <Calendar className="w-4 h-4 text-nautical-400" />
                    <span>
                      {format(new Date(service.signOnDate), 'MMM yyyy')} - 
                      {format(new Date(service.signOffDate), 'MMM yyyy')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="w-5 h-5 text-ocean-600" />
              <h3 className="text-lg font-semibold text-nautical-800">
                Education & Training
              </h3>
            </div>

            <div className="space-y-6">
              {mockEducation.map((edu) => (
                <div key={edu.id} className="pb-6 border-b border-nautical-100 last:border-0">
                  <h4 className="font-semibold text-nautical-800">{edu.degree}</h4>
                  <p className="text-sm text-nautical-600 mt-1">{edu.fieldOfStudy}</p>
                  <p className="text-sm text-nautical-500 mt-2">{edu.institution}</p>
                  <div className="flex items-center space-x-2 text-sm text-nautical-600 mt-2">
                    <Calendar className="w-4 h-4 text-nautical-400" />
                    <span>
                      {format(new Date(edu.startDate), 'MMM yyyy')} - 
                      {edu.endDate ? format(new Date(edu.endDate), 'MMM yyyy') : 'Present'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vessel Types Experience */}
          <div className="card">
            <h3 className="text-lg font-semibold text-nautical-800 mb-4">
              Vessel Types Experience
            </h3>
            <div className="flex flex-wrap gap-2">
              {mockProfile.vesselTypes.map((type, index) => (
                <span
                  key={index}
                  className="badge bg-ocean-50 text-ocean-700 border border-ocean-200"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - CRI & Actions */}
        <div className="space-y-8">
          <CRIScore criResult={mockCRIResult} showDetails={true} />

          {/* Availability */}
          <div className="card">
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-ocean-600" />
              <h3 className="text-lg font-semibold text-nautical-800">
                Availability
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-nautical-500 mb-1">Status</p>
                <span className="badge bg-green-50 text-green-700">
                  Available for Assignment
                </span>
              </div>
              <div>
                <p className="text-sm text-nautical-500 mb-1">Available From</p>
                <p className="font-medium text-nautical-800">
                  {format(new Date(mockProfile.availableFrom), 'MMMM dd, yyyy')}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card">
            <h3 className="text-lg font-semibold text-nautical-800 mb-4">
              Actions
            </h3>
            <div className="space-y-2">
              <button className="w-full btn-primary text-sm py-2">
                Generate CV
              </button>
              <button className="w-full btn-secondary text-sm py-2">
                Share Profile
              </button>
              <button className="w-full border border-nautical-200 text-nautical-700 px-4 py-2 rounded-lg text-sm hover:bg-nautical-50 transition-colors">
                Export Data
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
