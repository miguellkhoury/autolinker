import { dashboardMock } from '@/lib/data'
import { FileText, Clock, CheckCircle, AlertCircle, Upload, Filter, Search } from 'lucide-react'

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Documents</h1>
          <p className="text-gray-muted">Manage and review all processed documents</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Upload className="w-5 h-5" />
          Upload New
        </button>
      </div>

      {/* Filters */}
      <div className="glass-card p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-muted" />
              <input
                type="text"
                placeholder="Search documents..."
                className="w-full bg-navy-card border border-navy-border rounded-lg pl-12 pr-4 py-3 text-gray-text placeholder-gray-muted focus:outline-none focus:border-sea-blue transition-colors"
              />
            </div>
          </div>

          {/* Status Filter */}
          <select className="bg-navy-card border border-navy-border rounded-lg px-4 py-3 text-gray-text focus:outline-none focus:border-sea-blue transition-colors">
            <option>All Status</option>
            <option>Linked</option>
            <option>Processing</option>
            <option>Review</option>
          </select>

          {/* Type Filter */}
          <select className="bg-navy-card border border-navy-border rounded-lg px-4 py-3 text-gray-text focus:outline-none focus:border-sea-blue transition-colors">
            <option>All Types</option>
            <option>BOL</option>
            <option>Invoice</option>
            <option>Packing List</option>
            <option>Certificate</option>
            <option>Customs</option>
          </select>
        </div>
      </div>

      {/* Documents Table */}
      <div className="glass-card p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-navy-border">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">
                  <input type="checkbox" className="w-4 h-4 bg-navy-card border border-navy-border rounded" />
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Document ID</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Name</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Shipment</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Status</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Date</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {dashboardMock.recentDocuments.map((doc) => (
                <tr key={doc.id} className="border-b border-navy-border/50 hover:bg-navy-border/30 transition-colors">
                  <td className="py-4 px-4">
                    <input type="checkbox" className="w-4 h-4 bg-navy-card border border-navy-border rounded" />
                  </td>
                  <td className="py-4 px-4 text-sm text-gray-text font-mono">{doc.id}</td>
                  <td className="py-4 px-4 text-sm text-white max-w-xs truncate">{doc.name}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 bg-navy-border px-2 py-1 rounded text-xs text-gray-text">
                      <FileText className="w-3 h-3" />
                      {doc.type}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm text-sea-blue font-mono hover:underline cursor-pointer">
                    {doc.shipment}
                  </td>
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
                  <td className="py-4 px-4">
                    <button className="text-sea-blue hover:text-sea-light text-sm font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-gray-muted">
            Showing 1 to {dashboardMock.recentDocuments.length} of 247 documents
          </p>
          <div className="flex gap-2">
            <button className="btn-secondary px-4 py-2 text-sm">Previous</button>
            <button className="btn-primary px-4 py-2 text-sm">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}
