'use client';

import Link from 'next/link';
import { 
  Anchor, 
  FileCheck, 
  BarChart3, 
  Users, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-nautical-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-lg flex items-center justify-center shadow-lg">
                <Anchor className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold text-gradient">
                AutoLinker
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="btn-secondary text-sm">
                Sign In
              </Link>
              <Link href="/dashboard" className="btn-primary text-sm">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-ocean-50 via-blue-50 to-nautical-50 py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl sm:text-6xl font-display font-bold text-nautical-900 mb-6 leading-tight">
                Maritime Career
                <span className="text-gradient block">Intelligence Platform</span>
              </h1>
              <p className="text-xl text-nautical-600 mb-8 leading-relaxed">
                Transform how maritime professionals build careers and recruiters find talent. 
                Verified profiles, AI-powered CVs, and intelligent readiness scoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard" className="btn-primary text-lg inline-flex items-center justify-center">
                  Start Your Profile
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="btn-secondary text-lg">
                  Watch Demo
                </button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-nautical-600">Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-nautical-600">Verified certificates</span>
                </div>
              </div>
            </div>
            <div className="relative animate-slide-up animate-delay-200">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-nautical-100">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-nautical-800">Verified Profile</p>
                      <p className="text-sm text-nautical-500">Documents authenticated</p>
                    </div>
                  </div>
                  <div className="h-px bg-nautical-100" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-nautical-600">Crew Readiness Index</span>
                    <span className="text-2xl font-bold text-green-600">87/100</span>
                  </div>
                  <div className="progress-bar h-3">
                    <div className="progress-fill" style={{ width: '87%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-nautical-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-nautical-600">
              Comprehensive tools for maritime career management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card hover:scale-105 transition-transform animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-nautical-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-nautical-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-nautical-50 to-ocean-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-nautical-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-nautical-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-ocean-500 to-ocean-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-nautical-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-nautical-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-ocean-500 to-ocean-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Transform Your Maritime Career?
          </h2>
          <p className="text-xl text-ocean-100 mb-8">
            Join thousands of maritime professionals using AutoLinker
          </p>
          <Link href="/dashboard" className="inline-flex items-center bg-white text-ocean-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-ocean-50 transition-colors shadow-xl">
            Create Your Profile Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-nautical-900 text-nautical-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Anchor className="w-6 h-6 text-ocean-400" />
                <span className="text-xl font-display font-bold text-white">AutoLinker</span>
              </div>
              <p className="text-sm">
                Maritime Career Intelligence Platform
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-ocean-400">Features</a></li>
                <li><a href="#" className="hover:text-ocean-400">Pricing</a></li>
                <li><a href="#" className="hover:text-ocean-400">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-ocean-400">About</a></li>
                <li><a href="#" className="hover:text-ocean-400">Careers</a></li>
                <li><a href="#" className="hover:text-ocean-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-ocean-400">Privacy</a></li>
                <li><a href="#" className="hover:text-ocean-400">Terms</a></li>
                <li><a href="#" className="hover:text-ocean-400">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-nautical-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2026 AutoLinker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: Shield,
    title: 'Verified Profiles',
    description: 'Store and verify all your maritime certificates and sea service records in one secure place.',
    color: 'bg-gradient-to-br from-green-400 to-green-600',
  },
  {
    icon: FileCheck,
    title: 'AI Resume Generator',
    description: 'Automatically generate professional maritime CVs from your verified profile data.',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    icon: BarChart3,
    title: 'CRI Score',
    description: 'Get a comprehensive readiness score based on experience, certificates, and skills.',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Smart Matching',
    description: 'Connect with recruiters looking for professionals with your exact qualifications.',
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
  },
  {
    icon: Users,
    title: 'Network Building',
    description: 'Connect with maritime academies, companies, and fellow seafarers worldwide.',
    color: 'bg-gradient-to-br from-teal-400 to-teal-600',
  },
  {
    icon: BarChart3,
    title: 'Career Analytics',
    description: 'Track your profile performance, views, and career progression over time.',
    color: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
  },
];

const steps = [
  {
    title: 'Create Profile',
    description: 'Sign up and add your experience, certificates, and sea service records.',
  },
  {
    title: 'Get Verified',
    description: 'Upload documents for verification and receive your CRI score.',
  },
  {
    title: 'Get Hired',
    description: 'Connect with recruiters and apply to positions matching your profile.',
  },
];
