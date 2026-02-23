'use client';

import { Plus, Filter, Download } from 'lucide-react';
import CertificateCard from '@/components/ui/CertificateCard';
import { mockCertificates } from '@/lib/data/mockData';
import { useState } from 'react';

export default function CertificatesPage() {
  const [filter, setFilter] = useState<'all' | 'verified' | 'pending' | 'expiring'>('all');

  const filteredCertificates = mockCertificates.filter(cert => {
    if (filter === 'all') return true;
    if (filter === 'verified') return cert.verified;
    if (filter === 'pending') return !cert.verified;
    if (filter === 'expiring') {
      const daysUntilExpiry = Math.floor(
        (new Date(cert.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      );
      return daysUntilExpiry > 0 && daysUntilExpiry < 90;
    }
    return true;
  });

  const stats = {
    total: mockCertificates.length,
    verified: mockCertificates.filter(c => c.verified).length,
    pending: mockCertificates.filter(c => !c.verified).length,
    expiring: mockCertificates.filter(c => {
      const days = Math.floor(
        (new Date(c.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
      );
      return days > 0 && days < 90;
    }).length,
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold text-nautical-900">
            Certificates & Documents
          </h1>
          <p className="text-nautical-600 mt-1">
            Manage your maritime certificates and credentials
          </p>
        </div>
        <div className="flex gap-2">
          <button className="btn-secondary flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export All</span>
          </button>
          <button className="btn-primary flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Certificate</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card text-center">
          <p className="text-2xl font-bold text-nautical-800">{stats.total}</p>
          <p className="text-sm text-nautical-500 mt-1">Total</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-green-600">{stats.verified}</p>
          <p className="text-sm text-nautical-500 mt-1">Verified</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-gray-600">{stats.pending}</p>
          <p className="text-sm text-nautical-500 mt-1">Pending</p>
        </div>
        <div className="card text-center">
          <p className="text-2xl font-bold text-yellow-600">{stats.expiring}</p>
          <p className="text-sm text-nautical-500 mt-1">Expiring Soon</p>
        </div>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex items-center space-x-2 mb-4">
          <Filter className="w-4 h-4 text-nautical-600" />
          <span className="font-medium text-nautical-800">Filter:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            { value: 'all', label: 'All Certificates' },
            { value: 'verified', label: 'Verified' },
            { value: 'pending', label: 'Pending' },
            { value: 'expiring', label: 'Expiring Soon' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value as any)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === option.value
                  ? 'bg-ocean-500 text-white'
                  : 'bg-nautical-50 text-nautical-700 hover:bg-nautical-100'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Certificates Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filteredCertificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>

      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-nautical-500">No certificates found with the selected filter.</p>
        </div>
      )}
    </div>
  );
}
