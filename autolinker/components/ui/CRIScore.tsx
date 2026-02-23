'use client';

import { TrendingUp, Award } from 'lucide-react';
import { CRIResult } from '@/lib/types';

interface CRIScoreProps {
  criResult: CRIResult;
  showDetails?: boolean;
}

export default function CRIScore({ criResult, showDetails = false }: CRIScoreProps) {
  const { totalScore, components, level } = criResult;

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-50';
    if (score >= 60) return 'bg-blue-50';
    if (score >= 40) return 'bg-yellow-50';
    return 'bg-red-50';
  };

  const getLevelBadge = () => {
    const badges = {
      excellent: { bg: 'bg-green-100', text: 'text-green-700', label: 'Excellent' },
      high: { bg: 'bg-blue-100', text: 'text-blue-700', label: 'High' },
      medium: { bg: 'bg-yellow-100', text: 'text-yellow-700', label: 'Medium' },
      low: { bg: 'bg-red-100', text: 'text-red-700', label: 'Low' },
    };
    return badges[level];
  };

  const badge = getLevelBadge();

  return (
    <div className="card">
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <Award className="w-5 h-5 text-ocean-600" />
            <h3 className="text-lg font-semibold text-nautical-800">
              Crew Readiness Index
            </h3>
          </div>
          <p className="text-sm text-nautical-500">
            Your professional readiness score
          </p>
        </div>
        <span className={`badge ${badge.bg} ${badge.text}`}>
          {badge.label}
        </span>
      </div>

      {/* Main Score Display */}
      <div className="flex items-center justify-center mb-8">
        <div className="relative">
          <svg className="w-48 h-48 transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              className="text-nautical-100"
            />
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="currentColor"
              strokeWidth="12"
              fill="none"
              strokeDasharray={`${(totalScore / 100) * 553} 553`}
              className={getScoreColor(totalScore)}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`text-5xl font-bold ${getScoreColor(totalScore)}`}>
              {totalScore}
            </span>
            <span className="text-sm text-nautical-500 font-medium">out of 100</span>
          </div>
        </div>
      </div>

      {showDetails && (
        <>
          {/* Components Breakdown */}
          <div className="space-y-4 mb-6">
            <h4 className="text-sm font-semibold text-nautical-700 mb-3">
              Score Breakdown
            </h4>
            
            <ScoreComponent
              label="Document Completeness"
              score={components.documentCompleteness}
              max={30}
            />
            <ScoreComponent
              label="Experience Score"
              score={components.experienceScore}
              max={30}
            />
            <ScoreComponent
              label="Skill Coverage"
              score={components.skillCoverage}
              max={20}
            />
            <ScoreComponent
              label="Verification Status"
              score={components.verificationStatus}
              max={20}
            />
          </div>

          {/* Trend Indicator */}
          <div className={`flex items-center justify-center space-x-2 p-3 rounded-lg ${getScoreBgColor(totalScore)}`}>
            <TrendingUp className={`w-4 h-4 ${getScoreColor(totalScore)}`} />
            <span className={`text-sm font-medium ${getScoreColor(totalScore)}`}>
              +5 points from last month
            </span>
          </div>
        </>
      )}
    </div>
  );
}

interface ScoreComponentProps {
  label: string;
  score: number;
  max: number;
}

function ScoreComponent({ label, score, max }: ScoreComponentProps) {
  const percentage = (score / max) * 100;

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-nautical-600">{label}</span>
        <span className="text-sm font-semibold text-nautical-800">
          {score}/{max}
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
