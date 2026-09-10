import { QRCodeSVG } from 'qrcode.react'

const GLASS_BORDER = 'rgba(212,160,23,0.35)'
const GLASS_BG     = 'rgba(212,160,23,0.06)'

const PAYMENTS = [
  {
    label: 'Venmo',
    handle: '@dspak145',
    url: 'https://venmo.com/u/dspak145',
    color: '#3d95ce',
    logo: (
      <svg viewBox="0 0 111 111" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="111" height="111" rx="18" fill="#3d95ce"/>
        <path d="M68.5 20c2.5 4.1 3.6 8.3 3.6 13.6 0 17-14.5 39-26.3 54.4H18L8 22.6l25.6-2.4 5.3 42.1C46 53 51.5 37.6 51.5 26.9c0-5.8-1-9.7-2.6-13L68.5 20z" fill="#fff"/>
      </svg>
    ),
  },
  {
    label: 'CashApp',
    handle: '$DSP716VPF',
    url: 'https://cash.app/$DSP716VPF',
    color: '#00d632',
    logo: (
      <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
        <rect width="48" height="48" rx="10" fill="#00d632"/>
        <path d="M29.6 17.4c-.8-1.4-2.1-2.4-3.6-2.8l.4-2a.75.75 0 0 0-.73-.9h-3a.75.75 0 0 0-.74.6l-.4 2.1c-3.1.5-5.3 2.7-5.3 5.5 0 2.5 1.6 4.1 4.9 5 2.4.7 3.1 1.2 3.1 2.2 0 1-.9 1.7-2.3 1.7-1.8 0-3.4-.8-4.5-2.1l-2 2.3c1.1 1.4 2.7 2.4 4.5 2.8l-.4 2a.75.75 0 0 0 .73.9h3a.75.75 0 0 0 .74-.6l.4-2.1c3.3-.6 5.4-2.8 5.4-5.8 0-2.7-1.6-4.2-5-5.1-2.3-.6-3-1.1-3-2 0-.9.8-1.5 2-1.5 1.5 0 2.9.6 3.9 1.7l2-2.9z" fill="#fff"/>
      </svg>
    ),
  },
]

function PaymentCard({ label, handle, url, color, logo }) {
  return (
    <div
      className="flex flex-col items-center gap-5 rounded-2xl p-7 border backdrop-blur-xl"
      style={{ borderColor: GLASS_BORDER, background: GLASS_BG }}
    >
      {/* platform badge */}
      <div className="flex items-center gap-2.5">
        {logo}
        <span className="font-cabin font-semibold text-xl" style={{ color: '#f5f0e8' }}>
          {label}
        </span>
      </div>

      {/* QR code */}
      <div className="rounded-xl overflow-hidden p-3 bg-white shadow-lg">
        <QRCodeSVG
          value={url}
          size={180}
          bgColor="#ffffff"
          fgColor="#0a0a0f"
          level="H"
        />
      </div>

      {/* handle */}
      <div className="text-center">
        <p
          className="font-cabin font-bold text-lg tracking-wide"
          style={{ color }}
        >
          {handle}
        </p>
        <p className="font-cabin text-xs mt-1" style={{ color: '#9ca3af' }}>
          Scan or tap to pay $160
        </p>
      </div>

      {/* pay button */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="w-full text-center py-2.5 rounded-[10px] font-cabin font-medium text-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
        style={{ background: color, color: '#fff' }}
      >
        Open in {label}
      </a>
    </div>
  )
}

export default function PaymentSection() {
  return (
    <div className="rounded-2xl border border-card-border bg-card px-8 py-8">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold text-text-primary tracking-wide">
          💸 Pay Your Dues
        </h2>
        <p className="text-sm text-text-muted mt-1">
          Scan a QR code or tap to open the app — $160 per brother
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
        {PAYMENTS.map(p => (
          <PaymentCard key={p.label} {...p} />
        ))}
      </div>
    </div>
  )
}
