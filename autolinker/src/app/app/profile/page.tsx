import { User, Mail, Building, MapPin, Phone, Shield, Bell, CreditCard } from 'lucide-react'

export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Profile Settings</h1>
        <p className="text-gray-muted">Manage your account and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-sea-blue to-sea-dark rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-xl font-bold text-white mb-1">John Smith</h2>
            <p className="text-gray-muted mb-4">john.smith@acmefreight.com</p>
            <div className="inline-flex items-center gap-2 bg-sea-blue/10 text-sea-blue px-3 py-1 rounded-full text-sm">
              <Shield className="w-4 h-4" />
              Professional Plan
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="lg:col-span-2">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-white mb-6">Account Information</h2>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-text mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                  <input
                    type="text"
                    defaultValue="John Smith"
                    className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text focus:outline-none focus:border-sea-blue transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-text mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                  <input
                    type="email"
                    defaultValue="john.smith@acmefreight.com"
                    className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text focus:outline-none focus:border-sea-blue transition-colors"
                  />
                </div>
              </div>

              {/* Company */}
              <div>
                <label className="block text-sm font-medium text-gray-text mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                  <input
                    type="text"
                    defaultValue="Acme Freight Forwarding"
                    className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text focus:outline-none focus:border-sea-blue transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text focus:outline-none focus:border-sea-blue transition-colors"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-text mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
                    <input
                      type="text"
                      defaultValue="San Francisco, CA"
                      className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text focus:outline-none focus:border-sea-blue transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button className="btn-secondary">Cancel</button>
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-sea-blue" />
          <h2 className="text-xl font-bold text-white">Notification Preferences</h2>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Email notifications for new documents', checked: true },
            { label: 'Email notifications for CRI alerts', checked: true },
            { label: 'Weekly summary reports', checked: false },
            { label: 'Processing completion notifications', checked: true },
            { label: 'Marketing emails', checked: false },
          ].map((item, i) => (
            <label key={i} className="flex items-center justify-between p-4 bg-navy-border rounded-lg cursor-pointer hover:bg-navy-card transition-colors">
              <span className="text-gray-text">{item.label}</span>
              <input
                type="checkbox"
                defaultChecked={item.checked}
                className="w-5 h-5 bg-navy-card border border-navy-border rounded focus:ring-2 focus:ring-sea-blue"
              />
            </label>
          ))}
        </div>
      </div>

      {/* Billing */}
      <div className="glass-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="w-6 h-6 text-sea-blue" />
          <h2 className="text-xl font-bold text-white">Billing & Subscription</h2>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-navy-border rounded-lg">
            <div>
              <p className="text-white font-semibold mb-1">Professional Plan</p>
              <p className="text-sm text-gray-muted">$899/month • Up to 5,000 documents</p>
            </div>
            <button className="text-sea-blue hover:text-sea-light font-medium">
              Change Plan
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-navy-border rounded-lg">
            <div>
              <p className="text-white font-semibold mb-1">Payment Method</p>
              <p className="text-sm text-gray-muted">•••• •••• •••• 4242 (Expires 12/25)</p>
            </div>
            <button className="text-sea-blue hover:text-sea-light font-medium">
              Update
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-navy-border rounded-lg">
            <div>
              <p className="text-white font-semibold mb-1">Next Billing Date</p>
              <p className="text-sm text-gray-muted">March 12, 2024</p>
            </div>
            <button className="text-sea-blue hover:text-sea-light font-medium">
              View Invoices
            </button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="glass-card p-6 border-red-500/30">
        <h2 className="text-xl font-bold text-white mb-6">Danger Zone</h2>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-semibold mb-1">Delete Account</p>
              <p className="text-sm text-gray-muted">Permanently delete your account and all data</p>
            </div>
            <button className="bg-red-500/10 hover:bg-red-500/20 text-red-500 px-4 py-2 rounded-lg font-medium transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
