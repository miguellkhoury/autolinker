import { dashboardMock } from '@/lib/data'
import { TrendingUp, TrendingDown, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-muted">Welcome back! Here's your overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardMock.stats.map((stat, i) => (
          <div key={i} className="glass-card p-6 hover:border-sea-blue/50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <p className="text-sm text-gray-muted">{stat.label}</p>
              {stat.trend === 'up' ? (
                <TrendingUp className="w-5 h-5 text-green-500" />
              ) : (
                <TrendingDown className="w-5 h-5 text-green-500" />
              )}
            </div>
            <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
            <p className={`text-sm ${stat.trend === 'up' ? 'text-green-500' : 'text-green-500'}`}>
              {stat.change} from last month
            </p>
          </div>
        ))}
      </div>

      {/* Recent Documents */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Recent Documents</h2>
          <a href="/app/documents" className="text-sea-blue hover:text-sea-light text-sm font-medium">
            View All
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Document ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Shipment</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Date</th>
              </tr>
            </thead>
            <tbody>
              {dashboardMock.recentDocuments.map((doc) => (
                <tr key={doc.id} className="border-b border-navy-border/50 hover:bg-navy-border/30 transition-colors">
                  <td className="py-4 px-4 text-sm text-gray-text font-mono">{doc.id}</td>
                  <td className="py-4 px-4 text-sm text-white">{doc.name}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 bg-navy-border px-2 py-1 rounded text-xs text-gray-text">
                      <FileText className="w-3 h-3" />
                      {doc.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-sea-blue font-mono">{doc.shipment}</td>
                  <td className="py-4 px-4">
                    {doc.status === 'Linked' && (
                      <span className="inline-flex items-center gap-1 bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs">
                        <CheckCircle className="w-3 h-3" />
                        Linked
                      </span>
                    )}
                    {doc.status === 'Processing' && (
                      <span className="inline-flex items-center gap-1 bg-sea-blue/10 text-sea-blue px-2 py-1 rounded text-xs">
                        <Clock className="w-3 h-3" />
                        Processing
                      </span>
                    )}
                    {doc.status === 'Review' && (
                      <span className="inline-flex items-center gap-1 bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded text-xs">
                        <AlertCircle className="w-3 h-3" />
                        Review
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-muted">{doc.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 hover:border-sea-blue/50 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-gradient-to-br from-sea-blue/20 to-sea-dark/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-sea-blue/30 group-hover:to-sea-dark/30 transition-all">
            <FileText className="w-6 h-6 text-sea-blue" />
          </div>
          <h3 className="font-display font-semibold text-white mb-2">Upload Documents</h3>
          <p className="text-gray-muted text-sm">Process new shipping documents</p>
        </div>

        <div className="glass-card p-6 hover:border-sea-blue/50 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-gradient-to-br from-sea-blue/20 to-sea-dark/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-sea-blue/30 group-hover:to-sea-dark/30 transition-all">
            <AlertCircle className="w-6 h-6 text-sea-blue" />
          </div>
          <h3 className="font-display font-semibold text-white mb-2">View CRI Alerts</h3>
          <p className="text-gray-muted text-sm">Check for compliance issues</p>
        </div>

        <div className="glass-card p-6 hover:border-sea-blue/50 transition-all cursor-pointer group">
          <div className="w-12 h-12 bg-gradient-to-br from-sea-blue/20 to-sea-dark/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-sea-blue/30 group-hover:to-sea-dark/30 transition-all">
            <TrendingUp className="w-6 h-6 text-sea-blue" />
          </div>
          <h3 className="font-display font-semibold text-white mb-2">View Analytics</h3>
          <p className="text-gray-muted text-sm">Analyze processing trends</p>
        </div>
      </div>
    </div>
  )
}
