import { forwardRef } from 'react'

const SEMESTER_START = new Date('2026-01-15')

function daysOverdue() {
  return Math.max(0, Math.floor((Date.now() - SEMESTER_START.getTime()) / (1000 * 60 * 60 * 24)))
}

function SilhouetteSVG() {
  return (
    <svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* hat brim */}
      <ellipse cx="50" cy="38" rx="32" ry="5" fill="#5a3e2b" />
      {/* hat crown */}
      <rect x="26" y="12" width="48" height="27" rx="4" fill="#5a3e2b" />
      {/* hat band */}
      <rect x="26" y="33" width="48" height="5" fill="#3d2910" />
      {/* head */}
      <ellipse cx="50" cy="55" rx="16" ry="18" fill="#5a3e2b" />
      {/* neck / body */}
      <path d="M34 70 Q28 85 22 105 L78 105 Q72 85 66 70 Q58 75 50 75 Q42 75 34 70Z" fill="#5a3e2b" />
      {/* sheriff star */}
      <text x="50" y="98" textAnchor="middle" fontSize="12" fill="#c8a84b">★</text>
    </svg>
  )
}

function WantedPoster({ brother, days }) {
  return (
    <div
      className="relative cursor-default select-none transition-all duration-200 hover:-rotate-1 hover:scale-105"
      style={{ transformOrigin: 'center bottom' }}
    >
      {/* drop shadow layer */}
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-sm" style={{ background: '#3d2910', zIndex: 0 }} />

      {/* poster */}
      <div
        className="relative rounded-sm overflow-hidden"
        style={{
          background: '#f5e6c8',
          border: '3px solid #3d2910',
          zIndex: 1,
        }}
      >
        {/* aged texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 20% 20%, rgba(0,0,0,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(0,0,0,0.08) 0%, transparent 55%)',
            mixBlendMode: 'multiply',
          }}
        />

        {/* inner border */}
        <div className="absolute inset-[6px] pointer-events-none" style={{ border: '1.5px solid #3d2910', opacity: 0.4 }} />

        <div className="relative px-5 pt-5 pb-4 flex flex-col items-center gap-1 text-center" style={{ color: '#2c1a0a' }}>

          {/* stars + WANTED */}
          <div className="flex items-center gap-2">
            <span style={{ fontFamily: 'serif', fontSize: '0.9rem' }}>★</span>
            <span className="font-rye tracking-widest" style={{ fontSize: '2.6rem', lineHeight: 1, letterSpacing: '0.08em' }}>
              WANTED
            </span>
            <span style={{ fontFamily: 'serif', fontSize: '0.9rem' }}>★</span>
          </div>

          {/* dead or alive */}
          <p
            className="tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Georgia, serif', fontSize: '0.65rem', borderTop: '1px solid #3d2910', borderBottom: '1px solid #3d2910', padding: '2px 12px', marginTop: '2px', opacity: 0.85 }}
          >
            Dead or Alive
          </p>

          {/* silhouette */}
          <div className="w-24 h-28 my-2 opacity-80">
            <SilhouetteSVG />
          </div>

          {/* name */}
          <p className="font-rye" style={{ fontSize: '1.15rem', lineHeight: 1.2, letterSpacing: '0.04em' }}>
            {brother.name}
          </p>

          {/* divider */}
          <div className="w-full my-1" style={{ borderTop: '1px solid #3d2910', opacity: 0.4 }} />

          {/* reward */}
          <p className="font-rye" style={{ fontSize: '0.8rem', opacity: 0.7, letterSpacing: '0.06em' }}>Reward</p>
          <p className="font-rye" style={{ fontSize: '1.6rem', lineHeight: 1, color: '#7a4a0a' }}>
            ${brother.amount.toLocaleString()}
          </p>

          {/* crime */}
          <p style={{ fontFamily: 'Georgia, serif', fontSize: '0.6rem', fontStyle: 'italic', opacity: 0.75, marginTop: '4px', letterSpacing: '0.03em' }}>
            For the crime of:
          </p>
          <p
            className="tracking-widest uppercase"
            style={{ fontFamily: 'Georgia, serif', fontSize: '0.62rem', fontWeight: 700, opacity: 0.9 }}
          >
            Unpaid Dues
          </p>

          {/* days on the run */}
          <div
            className="mt-2 px-3 py-1 rounded-sm"
            style={{ background: '#3d2910', color: '#f5e6c8', fontSize: '0.55rem', letterSpacing: '0.1em', fontFamily: 'Georgia, serif', textTransform: 'uppercase' }}
          >
            On the run for {days} days
          </div>

        </div>
      </div>
    </div>
  )
}

const WantedBoard = forwardRef(function WantedBoard({ roster }, ref) {
  const wanted = roster.filter(b => b.status === 'late')
  const days = daysOverdue()
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

  return (
    <div ref={ref} className="rounded-2xl border border-card-border bg-card px-8 py-8">
      {/* section header — stays in the dark theme */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-text-primary tracking-wide">
          🤠 The following brothers are wanted by the treasury
        </h2>
        <p className="text-sm text-text-muted mt-1">
          Outstanding bounties as of {today} · {wanted.length} fugitives at large
        </p>
      </div>

      {wanted.length === 0 ? (
        <p className="text-center text-text-muted py-8">No brothers currently wanted. Everyone's paid up! 🎉</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {wanted.map(brother => (
            <WantedPoster key={brother.id} brother={brother} days={days} />
          ))}
        </div>
      )}
    </div>
  )
})

export default WantedBoard
