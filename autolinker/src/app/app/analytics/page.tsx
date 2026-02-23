import { BarChart3, TrendingUp, FileText, Clock } from 'lucide-react'

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-gray-muted">Track performance and processing trends</p>
      </div>

      {/* Time Period Selector */}
      <div className="flex gap-2">
        {['7 Days', '30 Days', '90 Days', 'Year'].map((period) => (
          <button
            key={period}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              period === '30 Days'
                ? 'bg-sea-blue text-white'
                : 'bg-navy-card text-gray-muted hover:text-gray-text hover:bg-navy-border'
            }`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Avg Processing Time', value: '2.3s', change: '-15%', icon: Clock },
          { label: 'Total Documents', value: '12,847', change: '+23%', icon: FileText },
          { label: 'Success Rate', value: '99.7%', change: '+0.2%', icon: BarChart3 },
          { label: 'Monthly Growth', value: '+34%', change: '+12%', icon: TrendingUp },
        ].map((metric, i) => {
          const Icon = metric.icon
          return (
            <div key={i} className="glass-card p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-muted">{metric.label}</p>
                <Icon className="w-5 h-5 text-sea-blue" />
              </div>
              <p className="text-3xl font-bold text-white mb-2">{metric.value}</p>
              <p className="text-sm text-green-500">{metric.change} vs last period</p>
            </div>
          )
        })}
      </div>

      {/* Chart Placeholder */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-white mb-6">Processing Volume</h2>
        <div className="h-80 bg-navy-card rounded-lg flex items-center justify-center border border-navy-border">
          <div className="text-center">
            <BarChart3 className="w-16 h-16 text-gray-muted mx-auto mb-4" />
            <p className="text-gray-muted">Chart visualization would appear here</p>
            <p className="text-sm text-gray-muted mt-2">Integrate with charting library like Chart.js or Recharts</p>
          </div>
        </div>
      </div>

      {/* Document Type Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-6">Document Types</h2>
          <div className="space-y-4">
            {[
              { type: 'Bill of Lading', count: 4234, percentage: 33 },
              { type: 'Commercial Invoice', count: 3891, percentage: 30 },
              { type: 'Packing List', count: 2564, percentage: 20 },
              { type: 'Certificate of Origin', count: 1282, percentage: 10 },
              { type: 'Customs Declaration', count: 876, percentage: 7 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-text text-sm">{item.type}</span>
                  <span className="text-white font-semibold">{item.count}</span>
                </div>
                <div className="w-full bg-navy-card rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-sea-blue to-sea-light h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6">
          <h2 className="text-xl font-bold text-white mb-6">Processing Status</h2>
          <div className="space-y-4">
            {[
              { status: 'Successfully Linked', count: 12107, color: 'bg-green-500' },
              { status: 'Currently Processing', count: 342, color: 'bg-sea-blue' },
              { status: 'Awaiting Review', count: 284, color: 'bg-yellow-500' },
              { status: 'Failed/Error', count: 114, color: 'bg-red-500' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-navy-border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-gray-text">{item.status}</span>
                </div>
                <span className="text-white font-bold">{item.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="glass-card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Export Report</h2>
            <p className="text-gray-muted">Download analytics data for external analysis</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary">Export CSV</button>
            <button className="btn-primary">Export PDF</button>
          </div>
        </div>
      </div>
    </div>
  )
}
