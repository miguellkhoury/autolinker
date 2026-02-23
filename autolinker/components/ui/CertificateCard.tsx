'use client';

import { FileText, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Certificate } from '@/lib/types';
import { format } from 'date-fns';

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const isExpired = new Date(certificate.expiryDate) < new Date();
  const daysUntilExpiry = Math.floor(
    (new Date(certificate.expiryDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );
  const isExpiringSoon = daysUntilExpiry > 0 && daysUntilExpiry < 90;

  const getStatusBadge = () => {
    if (isExpired) {
      return {
        icon: AlertCircle,
        bg: 'bg-red-50',
        text: 'text-red-700',
        border: 'border-red-200',
        label: 'Expired',
      };
    }
    if (isExpiringSoon) {
      return {
        icon: Clock,
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200',
        label: `Expires in ${daysUntilExpiry} days`,
      };
    }
    if (certificate.verified) {
      return {
        icon: CheckCircle,
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200',
        label: 'Verified',
      };
    }
    return {
      icon: Clock,
      bg: 'bg-gray-50',
      text: 'text-gray-700',
      border: 'border-gray-200',
      label: 'Pending',
    };
  };

  const status = getStatusBadge();
  const StatusIcon = status.icon;

  return (
    <div className={`card border-l-4 ${status.border} hover:scale-[1.02] transition-transform`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          <div className={`p-2 rounded-lg ${status.bg}`}>
            <FileText className={`w-5 h-5 ${status.text}`} />
          </div>
          <div>
            <h4 className="font-semibold text-nautical-800">{certificate.name}</h4>
            <p className="text-sm text-nautical-500 mt-1">{certificate.issuingAuthority}</p>
          </div>
        </div>
        <span className={`badge ${status.bg} ${status.text} flex items-center space-x-1`}>
          <StatusIcon className="w-3 h-3" />
          <span>{status.label}</span>
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div>
          <p className="text-nautical-500 mb-1">Issue Date</p>
          <p className="font-medium text-nautical-800">
            {format(new Date(certificate.issueDate), 'MMM dd, yyyy')}
          </p>
        </div>
        <div>
          <p className="text-nautical-500 mb-1">Expiry Date</p>
          <p className={`font-medium ${isExpired ? 'text-red-600' : 'text-nautical-800'}`}>
            {format(new Date(certificate.expiryDate), 'MMM dd, yyyy')}
          </p>
        </div>
      </div>

      {certificate.verified && certificate.verificationDate && (
        <div className="mt-4 pt-4 border-t border-nautical-100">
          <p className="text-xs text-nautical-500">
            Verified on {format(new Date(certificate.verificationDate), 'MMM dd, yyyy')}
          </p>
        </div>
      )}
    </div>
  );
}
