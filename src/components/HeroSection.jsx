import { useState } from 'react'
import { Maximize2, Minimize2 } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4'

const GLASS_BORDER = 'rgba(212,160,23,0.45)'
const GLASS_BG     = 'rgba(212,160,23,0.12)'
const GLASS_SHADOW = '0 0 20px rgba(212,160,23,0.18), inset 0 1px 0 rgba(255,255,255,0.07)'

export function HeroSection({ onScrollToMain, onScrollToWanted }) {
  const [fullBleed, setFullBleed] = useState(true)

  return (
    <section
      className={`relative w-full overflow-hidden transition-all duration-500 ease-in-out ${
        fullBleed ? 'min-h-screen' : 'py-28 lg:py-36'
      }`}
    >
      {/* Toggle button */}
      <button
        onClick={() => setFullBleed(!fullBleed)}
        aria-label={fullBleed ? 'Switch to compact' : 'Switch to full-bleed'}
        className="absolute top-4 right-4 z-20 p-2.5 rounded-[10px] backdrop-blur-xl border transition-all hover:brightness-125 focus:outline-none"
        style={{ borderColor: GLASS_BORDER, background: GLASS_BG, color: '#f5f0e8' }}
      >
        {fullBleed ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
      </button>

      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'rgba(10,10,15,0.72)' }}
      />

      {/* Bottom fade — blends into dashboard background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0f)' }}
      />

      {/* Subtle gold vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(212,160,23,0.06) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-16 pb-24 px-6">

        {/* Tagline pill */}
        <div
          className="inline-flex items-center gap-2.5 h-[38px] px-3.5 rounded-[10px] backdrop-blur-xl border"
          style={{ borderColor: GLASS_BORDER, background: GLASS_BG, boxShadow: GLASS_SHADOW }}
        >
          <span
            className="font-cabin font-medium text-xs px-2.5 py-1 rounded-[6px]"
            style={{ background: '#d4a017', color: '#0a0a0f', boxShadow: '0 0 8px rgba(212,160,23,0.5)' }}
          >
            Spring 2026
          </span>
          <span className="font-cabin font-medium text-sm tracking-wide text-text-primary">
            Alpha Kappa Chapter · Dues Dashboard
          </span>
        </div>

        {/* DSP Seal */}
        <div className="mt-10 mb-6">
          <img
            src="/DSP+Seal+(White+&+Transparent).webp"
            alt="International Fraternity of Delta Sigma Pi seal"
            className="w-44 h-44 lg:w-56 lg:h-56 object-contain select-none"
            style={{
              filter: 'brightness(1.05) drop-shadow(0 0 32px rgba(212,160,23,0.35))',
            }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-instrument text-5xl lg:text-[84px] leading-[1.03] tracking-[-0.02em]"
          style={{ color: '#f5f0e8' }}
        >
          Delta Sigma Pi
        </h1>

        {/* Chapter line */}
        <p
          className="font-cabin font-medium text-sm lg:text-base tracking-[0.28em] uppercase mt-3"
          style={{ color: '#d4a017' }}
        >
          International Fraternity · Est. 1907
        </p>

        {/* Subtext */}
        <p className="font-cabin font-normal text-base mt-5 max-w-[520px] text-text-muted leading-relaxed">
          Spring 2026 dues collection tracker for the Alpha Kappa Chapter.
          Monitor payments, manage the roster, and keep brothers accountable.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-9">
          <button
            onClick={onScrollToMain}
            className="px-8 py-3.5 rounded-[10px] font-cabin font-medium text-base transition-all duration-200 hover:brightness-110 hover:scale-105 active:scale-95"
            style={{
              background: '#d4a017',
              color: '#0a0a0f',
              boxShadow: '0 4px 24px rgba(212,160,23,0.35)',
            }}
          >
            View Dashboard ↓
          </button>
          <button
            onClick={onScrollToWanted}
            className="font-rye px-8 py-3.5 rounded-[10px] text-base transition-all duration-200 hover:brightness-125 hover:scale-105 active:scale-95 border backdrop-blur-xl"
            style={{
              borderColor: GLASS_BORDER,
              background: GLASS_BG,
              color: '#d4a017',
              boxShadow: GLASS_SHADOW,
            }}
          >
            🤠 Wanted Board
          </button>
        </div>
      </div>
    </section>
  )
}
