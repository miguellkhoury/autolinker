import { dashboardMock } from '@/lib/data'
import { AlertTriangle, AlertCircle, Info, CheckCircle } from 'lucide-react'

export default function CRIPage() {
  const { criData } = dashboardMock

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">CRI Alerts</h1>
        <p className="text-gray-muted">Compliance & Risk Intelligence monitoring</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-muted">Total Risks</p>
            <AlertTriangle className="w-5 h-5 text-gray-muted" />
          </div>
          <p className="text-3xl font-bold text-white">{criData.totalRisks}</p>
        </div>

        <div className="glass-card p-6 border-red-500/30">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-muted">High Priority</p>
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-3xl font-bold text-red-500">{criData.highPriority}</p>
        </div>

        <div className="glass-card p-6 border-yellow-500/30">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-muted">Medium Priority</p>
            <AlertCircle className="w-5 h-5 text-yellow-500" />
          </div>
          <p className="text-3xl font-bold text-yellow-500">{criData.mediumPriority}</p>
        </div>

        <div className="glass-card p-6 border-blue-500/30">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-gray-muted">Low Priority</p>
            <Info className="w-5 h-5 text-blue-500" />
          </div>
          <p className="text-3xl font-bold text-blue-500">{criData.lowPriority}</p>
        </div>
      </div>

      {/* Recent Alerts */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-white mb-6">Recent Alerts</h2>

        <div className="space-y-4">
          {criData.recentAlerts.map((alert) => (
            <div
              key={alert.id}
              className={`
                glass-card p-6 hover:border-opacity-70 transition-all
                ${alert.severity === 'high' ? 'border-red-500/30 hover:border-red-500/50' : ''}
                ${alert.severity === 'medium' ? 'border-yellow-500/30 hover:border-yellow-500/50' : ''}
                ${alert.severity === 'low' ? 'border-blue-500/30 hover:border-blue-500/50' : ''}
              `}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`
                    w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0
                    ${alert.severity === 'high' ? 'bg-red-500/10' : ''}
                    ${alert.severity === 'medium' ? 'bg-yellow-500/10' : ''}
                    ${alert.severity === 'low' ? 'bg-blue-500/10' : ''}
                  `}
                >
                  {alert.severity === 'high' && <AlertTriangle className="w-5 h-5 text-red-500" />}
                  {alert.severity === 'medium' && <AlertCircle className="w-5 h-5 text-yellow-500" />}
                  {alert.severity === 'low' && <Info className="w-5 h-5 text-blue-500" />}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-white mb-1">
                        {alert.title}
                      </h3>
                      <p className="text-sm text-gray-muted">
                        Shipment: <span className="text-sea-blue font-mono">{alert.shipment}</span>
                        {' • '}
                        {alert.date}
                      </p>
                    </div>
                    <span
                      className={`
                        px-3 py-1 rounded-full text-xs font-medium uppercase
                        ${alert.severity === 'high' ? 'bg-red-500/10 text-red-500' : ''}
                        ${alert.severity === 'medium' ? 'bg-yellow-500/10 text-yellow-500' : ''}
                        ${alert.severity === 'low' ? 'bg-blue-500/10 text-blue-500' : ''}
                      `}
                    >
                      {alert.severity}
                    </span>
                  </div>
                  <p className="text-gray-text mb-4">{alert.description}</p>
                  <div className="flex gap-3">
                    <button className="text-sea-blue hover:text-sea-light text-sm font-medium">
                      View Details
                    </button>
                    <button className="text-gray-muted hover:text-gray-text text-sm font-medium">
                      Mark as Resolved
                    </button>
                    <button className="text-gray-muted hover:text-gray-text text-sm font-medium">
                      Dismiss
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Risk Categories */}
      <div className="glass-card p-6">
        <h2 className="text-xl font-bold text-white mb-6">Risk Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { category: 'Documentation', count: 18, color: 'text-red-500' },
            { category: 'Compliance', count: 15, color: 'text-yellow-500' },
            { category: 'Data Quality', count: 14, color: 'text-blue-500' },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-navy-border rounded-lg">
              <div>
                <p className="text-gray-muted text-sm mb-1">{item.category}</p>
                <p className={`text-2xl font-bold ${item.color}`}>{item.count}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-sea-blue/20 to-sea-dark/20 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
