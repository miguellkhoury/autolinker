'use client'

import Link from 'next/link'
import { Anchor, Mail, Lock, User, Building } from 'lucide-react'
import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Mock registration - redirect to dashboard
    window.location.href = '/app'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-bg p-4 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sea-blue/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sea-dark/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <div className="bg-gradient-to-br from-sea-blue to-sea-dark p-3 rounded-lg">
            <Anchor className="w-8 h-8 text-white" />
          </div>
          <span className="font-display text-2xl font-bold text-white">
            Auto<span className="text-sea-blue">Linker</span>
          </span>
        </Link>

        {/* Form Card */}
        <div className="glass-card p-8 animate-slide-up">
          <h1 className="font-display text-3xl font-bold text-white mb-2">
            Create Account
          </h1>
          <p className="text-gray-muted mb-8">
            Start your 30-day free trial today
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-text mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text placeholder-gray-muted focus:outline-none focus:border-sea-blue transition-colors"
                  placeholder="John Smith"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-text mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text placeholder-gray-muted focus:outline-none focus:border-sea-blue transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-text mb-2">
                Company Name
              </label>
              <div className="relative">
                <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text placeholder-gray-muted focus:outline-none focus:border-sea-blue transition-colors"
                  placeholder="Acme Freight"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-text mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                <input
                  type="password"
                  id="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text placeholder-gray-muted focus:outline-none focus:border-sea-blue transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-text mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text placeholder-gray-muted focus:outline-none focus:border-sea-blue transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-2">
              <input
                type="checkbox"
                required
                className="w-4 h-4 bg-navy-card border border-navy-border rounded focus:ring-2 focus:ring-sea-blue mt-1"
              />
              <span className="text-sm text-gray-muted">
                I agree to the{' '}
                <Link href="#" className="text-sea-blue hover:text-sea-light">Terms of Service</Link>
                {' '}and{' '}
                <Link href="#" className="text-sea-blue hover:text-sea-light">Privacy Policy</Link>
              </span>
            </label>

            {/* Submit Button */}
            <button type="submit" className="w-full btn-primary">
              Create Account
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-navy-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-navy-card text-gray-muted">Or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="btn-secondary flex items-center justify-center gap-2 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
              </svg>
              Google
            </button>
            <button className="btn-secondary flex items-center justify-center gap-2 text-sm">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-gray-muted">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-sea-blue hover:text-sea-light transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
