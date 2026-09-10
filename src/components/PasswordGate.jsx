import { useState } from 'react'

// Change this to whatever passcode you share with brothers
const PASSCODE = '1907'

const GLASS_BORDER = 'rgba(212,160,23,0.45)'
const GLASS_BG     = 'rgba(212,160,23,0.08)'
const GLASS_SHADOW = '0 0 32px rgba(212,160,23,0.15), inset 0 1px 0 rgba(255,255,255,0.05)'

export default function PasswordGate({ children }) {
  const [authed, setAuthed] = useState(
    sessionStorage.getItem('dues-auth') === 'true'
  )
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)
  const [shaking, setShaking] = useState(false)

  if (authed) return children

  function handleSubmit(e) {
    e.preventDefault()
    if (input === PASSCODE) {
      sessionStorage.setItem('dues-auth', 'true')
      setAuthed(true)
    } else {
      setError(true)
      setShaking(true)
      setInput('')
      setTimeout(() => setShaking(false), 500)
    }
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: '#0a0a0f' }}
    >
      {/* Gold radial glow */}
      <div
        className="pointer-events-none fixed inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 45%, rgba(212,160,23,0.07) 0%, transparent 65%)',
        }}
      />

      <div
        className="relative w-full max-w-sm rounded-2xl p-8 flex flex-col items-center gap-6 backdrop-blur-xl border"
        style={{ borderColor: GLASS_BORDER, background: GLASS_BG, boxShadow: GLASS_SHADOW }}
      >
        {/* Seal */}
        <img
          src="/DSP+Seal+(White+&+Transparent).webp"
          alt="Delta Sigma Pi seal"
          className="w-24 h-24 object-contain select-none"
          style={{ filter: 'brightness(1.05) drop-shadow(0 0 20px rgba(212,160,23,0.4))' }}
        />

        {/* Heading */}
        <div className="text-center space-y-1">
          <h1 className="font-instrument text-3xl" style={{ color: '#f5f0e8' }}>
            Delta Sigma Pi
          </h1>
          <p className="font-cabin text-xs tracking-[0.25em] uppercase" style={{ color: '#d4a017' }}>
            Alpha Kappa Chapter · Members Only
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div
            className={`transition-transform duration-150 ${shaking ? 'animate-[shake_0.4s_ease-in-out]' : ''}`}
            style={shaking ? { animation: 'shake 0.4s ease-in-out' } : {}}
          >
            <input
              type="password"
              value={input}
              onChange={e => { setInput(e.target.value); setError(false) }}
              placeholder="Enter chapter passcode"
              autoFocus
              className="w-full rounded-[10px] px-4 py-3 font-cabin text-sm outline-none transition-all"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: `1px solid ${error ? '#ef4444' : 'rgba(212,160,23,0.3)'}`,
                color: '#f5f0e8',
                caretColor: '#d4a017',
              }}
            />
          </div>

          {error && (
            <p className="font-cabin text-xs text-center" style={{ color: '#ef4444' }}>
              Incorrect passcode. Try again.
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-[10px] font-cabin font-medium text-sm transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: '#d4a017',
              color: '#0a0a0f',
              boxShadow: '0 4px 20px rgba(212,160,23,0.3)',
            }}
          >
            Enter
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%       { transform: translateX(-8px); }
          40%       { transform: translateX(8px); }
          60%       { transform: translateX(-6px); }
          80%       { transform: translateX(6px); }
        }
      `}</style>
    </div>
  )
}
