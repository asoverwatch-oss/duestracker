import { useState, useEffect } from 'react'

function StatCard({ label, count, color, icon }) {
  return (
    <div className="card px-6 py-5 flex items-center gap-4">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
        style={{ backgroundColor: `${color}18`, border: `1px solid ${color}40` }}
      >
        {icon}
      </div>
      <div>
        <div className="text-2xl font-bold" style={{ color }}>
          {count}
        </div>
        <div className="text-xs text-text-muted uppercase tracking-widest mt-0.5">
          {label}
        </div>
      </div>
    </div>
  )
}

export default function HeroStats({ collected, goal, paidCount, pendingCount, lateCount, total }) {
  const [barWidth, setBarWidth] = useState(0)
  const pct = Math.round((collected / goal) * 100)

  useEffect(() => {
    const t = setTimeout(() => setBarWidth(pct), 120)
    return () => clearTimeout(t)
  }, [pct])

  const remaining = goal - collected

  return (
    <div className="card p-8">
      {/* Top row: dollar figures */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
        <div>
          <div className="text-xs text-text-muted uppercase tracking-widest mb-1">
            Total Collected
          </div>
          <div className="text-5xl font-bold text-text-primary tracking-tight">
            ${collected.toLocaleString()}
            <span className="text-xl text-text-muted font-normal ml-2">
              / ${goal.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="text-4xl font-bold"
            style={{ color: '#d4a017' }}
          >
            {pct}%
          </span>
          <div className="text-right">
            <div className="text-xs text-text-muted">of semester goal</div>
            <div className="text-xs text-[#ef4444] mt-0.5">
              ${remaining.toLocaleString()} remaining
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative mb-2">
        <div className="h-3 w-full rounded-full bg-card-border overflow-hidden">
          <div
            className="progress-bar h-full rounded-full"
            style={{
              width: `${barWidth}%`,
              background: 'linear-gradient(90deg, #a07010 0%, #d4a017 50%, #f0c040 100%)',
              boxShadow: '0 0 12px rgba(212, 160, 23, 0.5)',
            }}
          />
        </div>
        {/* Tick markers at 25%, 50%, 75% */}
        {[25, 50, 75].map(tick => (
          <div
            key={tick}
            className="absolute top-0 w-px h-3 bg-bg opacity-40"
            style={{ left: `${tick}%` }}
          />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-text-muted mb-8">
        <span>$0</span>
        <span>${(goal * 0.25 / 1000).toFixed(1)}k</span>
        <span>${(goal * 0.5 / 1000).toFixed(1)}k</span>
        <span>${(goal * 0.75 / 1000).toFixed(1)}k</span>
        <span>${(goal / 1000).toFixed(1)}k</span>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard
          label="Paid"
          count={paidCount}
          color="#10b981"
          icon="✓"
        />
        <StatCard
          label="Pending"
          count={pendingCount}
          color="#f59e0b"
          icon="⏳"
        />
        <StatCard
          label="Late"
          count={lateCount}
          color="#ef4444"
          icon="!"
        />
      </div>

      {/* Sub-line */}
      <div className="mt-4 text-center text-xs text-text-muted">
        {total} brothers total · {paidCount} have paid · collection rate {pct}%
      </div>
    </div>
  )
}
