import { useState } from 'react'

const STATUS_CONFIG = {
  paid:    { label: 'Paid',    bg: 'rgba(16,185,129,0.15)',  border: 'rgba(16,185,129,0.4)',  text: '#10b981' },
  pending: { label: 'Pending', bg: 'rgba(245,158,11,0.15)',  border: 'rgba(245,158,11,0.4)',  text: '#f59e0b' },
  late:    { label: 'Late',    bg: 'rgba(239,68,68,0.15)',   border: 'rgba(239,68,68,0.4)',   text: '#ef4444' },
}

const METHOD_ICONS = {
  Venmo:   '💙',
  Zelle:   '💜',
  Cash:    '💵',
  Check:   '📝',
  CashApp: '💚',
  '—':     '',
}

const FILTERS = ['All', 'Paid', 'Pending', 'Late']

function MobileRow({ brother }) {
  const cfg = STATUS_CONFIG[brother.status]
  return (
    <div
      className="px-4 py-3 border-b flex items-center justify-between gap-3"
      style={{ borderColor: '#1e1e30' }}
    >
      <div className="flex items-center gap-3 min-w-0">
        <span className="text-xs text-text-muted w-5 flex-shrink-0">{brother.id}</span>
        <span className="text-sm font-medium text-text-primary truncate">{brother.name}</span>
      </div>
      <div className="flex items-center gap-2 flex-shrink-0">
        {brother.method !== '—' && (
          <span className="text-xs text-text-muted">{METHOD_ICONS[brother.method]}</span>
        )}
        <span
          className="inline-block px-2 py-0.5 rounded-full text-xs font-semibold"
          style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }}
        >
          {cfg.label}
        </span>
      </div>
    </div>
  )
}

export default function RosterTable({ roster }) {
  const [filter, setFilter] = useState('All')

  const visible = filter === 'All'
    ? roster
    : roster.filter(b => b.status === filter.toLowerCase())

  return (
    <div className="card overflow-hidden">
      {/* Header */}
      <div className="px-4 md:px-6 py-4 border-b border-card-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-base font-semibold text-text-primary">Brother Roster</h2>
          <p className="text-xs text-text-muted mt-0.5">{visible.length} brothers shown</p>
        </div>
        <div className="flex gap-1.5 flex-wrap">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-200"
              style={
                filter === f
                  ? { background: 'rgba(212,160,23,0.15)', border: '1px solid rgba(212,160,23,0.5)', color: '#d4a017' }
                  : { background: 'transparent', border: '1px solid #1e1e30', color: '#9ca3af' }
              }
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile list */}
      <div className="block md:hidden overflow-y-auto" style={{ maxHeight: '480px' }}>
        {visible.map(brother => (
          <MobileRow key={brother.id} brother={brother} />
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-y-auto" style={{ maxHeight: '520px' }}>
        <table className="w-full text-sm">
          <thead className="sticky top-0 z-10" style={{ background: '#13131f' }}>
            <tr className="border-b border-card-border">
              <th className="px-6 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-text-muted w-8">#</th>
              <th className="px-4 py-3 text-left text-[10px] font-semibold uppercase tracking-widest text-text-muted">Name</th>
              <th className="px-4 py-3 text-right text-[10px] font-semibold uppercase tracking-widest text-text-muted">Amount</th>
              <th className="px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-widest text-text-muted">Status</th>
              <th className="px-4 py-3 text-center text-[10px] font-semibold uppercase tracking-widest text-text-muted">Method</th>
              <th className="px-6 py-3 text-right text-[10px] font-semibold uppercase tracking-widest text-text-muted">Date</th>
            </tr>
          </thead>
          <tbody>
            {visible.map(brother => {
              const cfg = STATUS_CONFIG[brother.status]
              return (
                <tr
                  key={brother.id}
                  className="row-hover border-l-2 transition-all duration-150"
                  style={{ borderLeftColor: 'transparent', borderBottom: '1px solid #1e1e30' }}
                >
                  <td className="px-6 py-3.5 text-text-muted text-xs">{brother.id}</td>
                  <td className="px-4 py-3.5 font-medium text-text-primary">{brother.name}</td>
                  <td className="px-4 py-3.5 text-right font-mono text-text-primary">
                    {brother.status === 'paid' ? (
                      <span style={{ color: '#10b981' }}>${brother.amount}</span>
                    ) : (
                      <span className="text-text-muted">${brother.amount}</span>
                    )}
                  </td>
                  <td className="px-4 py-3.5 text-center">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
                      style={{ background: cfg.bg, border: `1px solid ${cfg.border}`, color: cfg.text }}
                    >
                      {cfg.label}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-xs text-text-muted">
                    {METHOD_ICONS[brother.method]} {brother.method !== '—' ? brother.method : '—'}
                  </td>
                  <td className="px-6 py-3.5 text-right text-xs text-text-muted">{brother.date}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
