'use client';

import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  color = 'blue',
}: StatsCardProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50',
      text: 'text-blue-600',
      icon: 'text-blue-500',
    },
    green: {
      bg: 'bg-green-50',
      text: 'text-green-600',
      icon: 'text-green-500',
    },
    purple: {
      bg: 'bg-purple-50',
      text: 'text-purple-600',
      icon: 'text-purple-500',
    },
    orange: {
      bg: 'bg-orange-50',
      text: 'text-orange-600',
      icon: 'text-orange-500',
    },
  };

  const colors = colorClasses[color];

  return (
    <div className="card group hover:shadow-lg transition-all">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-nautical-500 mb-1">{title}</p>
          <p className={`text-3xl font-bold ${colors.text} mb-1`}>{value}</p>
          {subtitle && (
            <p className="text-xs text-nautical-400">{subtitle}</p>
          )}
          {trend && (
            <div className="flex items-center mt-2">
              <span
                className={`text-xs font-medium ${
                  trend.isPositive ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
              </span>
              <span className="text-xs text-nautical-400 ml-2">vs last month</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform`}>
          <Icon className={`w-6 h-6 ${colors.icon}`} />
        </div>
      </div>
    </div>
  );
}
