import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Clock } from 'lucide-react'

const TARGET_DATE = new Date('2026-05-01T00:00:00')

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { days, hours, minutes, seconds }
}

function TimeUnit({ value, label }) {
  const display = String(value).padStart(2, '0')
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center justify-center rounded-xl border border-card-border bg-card px-5 py-4 shadow-lg" style={{ minWidth: '5rem' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={display}
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -6, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="font-mono text-4xl font-semibold tabular-nums text-gold"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs font-medium uppercase tracking-widest text-text-muted">
        {label}
      </span>
    </div>
  )
}

function Separator() {
  return (
    <span className="pb-5 text-3xl font-light text-gold opacity-40 animate-pulse select-none">:</span>
  )
}

export default function DuesCountdown() {
  const [time, setTime] = useState(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!time) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="rounded-2xl border border-card-border bg-card px-8 py-8"
    >
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="flex flex-col items-center gap-1">
          <div className="flex items-center gap-2 text-gold">
            <Clock className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-widest">Dues Deadline</span>
          </div>
          <p className="text-lg font-semibold text-text-primary tracking-wide">
            May 1, 2026
          </p>
          <p className="text-xs text-text-muted">All payments must be received by this date</p>
        </div>

        <div className="flex items-center gap-3">
          <TimeUnit value={time.days}    label="Days"    />
          <Separator />
          <TimeUnit value={time.hours}   label="Hours"   />
          <Separator />
          <TimeUnit value={time.minutes} label="Minutes" />
          <Separator />
          <TimeUnit value={time.seconds} label="Seconds" />
        </div>
      </div>
    </motion.div>
  )
}
