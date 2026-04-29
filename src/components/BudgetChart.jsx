import {
  PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend
} from 'recharts'

const COLORS = ['#d4a017', '#6d28d9', '#0ea5e9', '#10b981', '#f59e0b', '#8b5cf6']

const RADIAN = Math.PI / 180

function renderLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }) {
  if (percent < 0.07) return null
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={11}
      fontWeight={600}
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null
  const d = payload[0].payload
  return (
    <div
      className="px-3 py-2 rounded-lg text-sm"
      style={{ background: '#1a1a2e', border: '1px solid #1e1e30', color: '#f5f0e8' }}
    >
      <div className="font-semibold">{d.name}</div>
      <div style={{ color: '#d4a017' }}>${d.value.toLocaleString()}</div>
    </div>
  )
}

export default function BudgetChart({ budget, total }) {
  return (
    <div className="card p-6 flex flex-col h-full">
      <div className="mb-5 flex-shrink-0">
        <h2 className="text-base font-semibold text-text-primary">Budget Allocation</h2>
        <p className="text-xs text-text-muted mt-0.5">
          How ${total.toLocaleString()} in dues will be used
        </p>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height={240}>
          <PieChart>
            <Pie
              data={budget}
              cx="50%"
              cy="50%"
              outerRadius={100}
              innerRadius={48}
              dataKey="value"
              labelLine={false}
              label={renderLabel}
              strokeWidth={2}
              stroke="#0a0a0f"
            >
              {budget.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-2 flex-shrink-0">
        {budget.map((item, i) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-sm flex-shrink-0"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              <span className="text-text-muted text-xs">{item.name}</span>
            </div>
            <span className="text-text-primary text-xs font-medium font-mono">
              ${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div
        className="mt-4 pt-3 flex items-center justify-between text-sm"
        style={{ borderTop: '1px solid #1e1e30' }}
      >
        <span className="text-text-muted text-xs uppercase tracking-wider font-semibold">Total</span>
        <span className="font-bold text-gold font-mono">
          ${budget.reduce((s, b) => s + b.value, 0).toLocaleString()}
        </span>
      </div>
    </div>
  )
}
