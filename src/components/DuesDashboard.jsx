import { useRef } from 'react'
import HeroStats from './HeroStats'
import RosterTable from './RosterTable'
import DuesCountdown from './DuesCountdown'
import WantedBoard from './WantedBoard'
import PaymentSection from './PaymentSection'
import { HeroSection } from './HeroSection'

export const SEMESTER = 'Spring 2026'
export const DUES_AMOUNT = 160
export const CHAPTER_GOAL = 12160 // 76 brothers × $160

export const ROSTER = [
  { id: 1,  name: 'Ryan Arnold',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 2,  name: 'Vallabh Baldwa',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 3,  name: 'Kallista Bertini',          status: 'paid',    method: 'CashApp', date: 'Sep 3',  amount: 160 },
  { id: 4,  name: 'Nick Bivona',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 5,  name: 'Conall Burke',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 6,  name: 'Victoria Camacho Mande',    status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 7,  name: 'Alexis Cardenas',           status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 8,  name: 'Minna Cederman-Kobayashi',  status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 9,  name: 'Tyler Celestin',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 10, name: 'Angela Chen',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 11, name: 'Brady Conboy',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 12, name: 'Ryan Deasy',                status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 13, name: 'Andrea Doan',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 14, name: 'Sam Dunn',                  status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 15, name: 'Henry Ehmann',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 16, name: 'Zachary Epstein',           status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 17, name: 'Antonio Falcone',           status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 18, name: 'Theodore Galitzine',        status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 19, name: 'Conner Gilligan',           status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 20, name: 'Aryana Hamza',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 21, name: 'Jordan Hofschneider',       status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 22, name: 'Nadia Jamal',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 23, name: 'Andrew Jung',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 24, name: 'Paddy Kajaria',             status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 25, name: 'Sheetanshu Kandlakunta',    status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 26, name: 'Abhi Kathiriya',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 27, name: 'Ari Kefalas',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 28, name: 'Katie Kerwan',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 29, name: 'Roseallise Kowalewski',     status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 30, name: 'Riya Kumar',                status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 31, name: 'Evan Lacey',                status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 32, name: 'Jonathan Lamb',             status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 33, name: 'Nancy Lei',                 status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 34, name: 'Kyle Lok',                  status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 35, name: 'Myles Manoli',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 36, name: 'Daniel Matas',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 37, name: 'Nicole Medina',             status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 38, name: 'Anju Minhas',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 39, name: 'Owen Mintzer',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 40, name: 'Isabella Mohamed',          status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 41, name: 'Abigail Murray',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 42, name: 'Tristan Ng',                status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 43, name: 'Brady Nguyen',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 44, name: 'Daniel Nguyen',             status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 45, name: 'Arianna Ordonez',           status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 46, name: 'Christian Pacis',           status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 47, name: 'Carter Page',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 48, name: 'Adrian Palladino',          status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 49, name: 'Krish Parashar',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 50, name: 'Angel Pascual Felix',       status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 51, name: 'Nakul Patel',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 52, name: 'Ava Philipone',             status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 53, name: 'Catherine Quan',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 54, name: 'Brett Sabatino',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 55, name: 'Christian Sainristil',      status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 56, name: 'Matthew Sciara',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 57, name: 'Daniel Shao',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 58, name: 'Elizabeth Shaw',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 59, name: 'Adam Sid',                  status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 60, name: 'William Siegel',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 61, name: 'Aman Sinha',                status: 'paid',    method: 'CashApp', date: 'Sep 10', amount: 160 },
  { id: 62, name: 'Siany Smith',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 63, name: 'Ethan Solomon',             status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 64, name: 'Lucas Springer',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 65, name: 'Tashfia Tasnim',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 66, name: 'Charlie Thomas',            status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 67, name: 'Theresa Urzi',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 68, name: 'Timothy Wang',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 69, name: 'Lukas Warner',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 70, name: 'Erika Wilson',              status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 71, name: 'Jeslin Wong',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 72, name: 'Edward Yu',                 status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 73, name: 'Venus Yu',                  status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 74, name: 'Ahmad Zahid',               status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 75, name: 'Ryan Zima',                 status: 'pending', method: '—',       date: '—',      amount: 160 },
  { id: 76, name: 'Adrian Zivan',              status: 'pending', method: '—',       date: '—',      amount: 160 },
]

export default function DuesDashboard() {
  const wantedRef = useRef(null)
  const mainRef = useRef(null)
  const collected = ROSTER.filter(b => b.status === 'paid').length * DUES_AMOUNT
  const paidCount = ROSTER.filter(b => b.status === 'paid').length
  const pendingCount = ROSTER.filter(b => b.status === 'pending').length
  const lateCount = ROSTER.filter(b => b.status === 'late').length

  return (
    <div className="min-h-screen bg-bg text-text-primary">
      <HeroSection
        onScrollToMain={() => mainRef.current?.scrollIntoView({ behavior: 'smooth' })}
        onScrollToWanted={() => wantedRef.current?.scrollIntoView({ behavior: 'smooth' })}
      />

      <main ref={mainRef} className="px-8 py-8 space-y-8 max-w-7xl mx-auto">
        <HeroStats
          collected={collected}
          goal={CHAPTER_GOAL}
          paidCount={paidCount}
          pendingCount={pendingCount}
          lateCount={lateCount}
          total={ROSTER.length}
        />

        <DuesCountdown />

        <PaymentSection />

        <RosterTable roster={ROSTER} />

        <WantedBoard ref={wantedRef} roster={ROSTER} />
      </main>

      {/* Footer */}
      <footer className="px-8 py-4 border-t border-card-border text-center">
        <p className="text-xs text-text-muted">
          Delta Sigma Pi · Alpha Kappa Chapter · {SEMESTER} · Confidential
        </p>
      </footer>
    </div>
  )
}
