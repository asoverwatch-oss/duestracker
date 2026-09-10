import { useRef } from 'react'
import HeroStats from './HeroStats'
import RosterTable from './RosterTable'
import BudgetChart from './BudgetChart'
import DuesCountdown from './DuesCountdown'
import WantedBoard from './WantedBoard'
import { HeroSection } from './HeroSection'

export const SEMESTER = 'Spring 2026'
export const DUES_AMOUNT = 160
export const CHAPTER_GOAL = 11040 // 69 brothers × $160

export const ROSTER = [
  { id: 1,  name: 'Nick Bivona',                  status: 'paid',    method: 'Venmo', date: 'Jan 18', amount: 160 },
  { id: 2,  name: 'Conall Burke',                 status: 'paid',    method: 'Cash',  date: 'Jan 20', amount: 160 },
  { id: 3,  name: 'Victoria Camacho Mande',       status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 4,  name: 'Alexis Cardenas',              status: 'paid',    method: 'Check', date: 'Jan 21', amount: 160 },
  { id: 5,  name: 'Minna Cederman-Kobayashi',     status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 6,  name: 'Tyler Celestin',               status: 'paid',    method: 'Zelle', date: 'Jan 23', amount: 160 },
  { id: 7,  name: 'Brady Conboy',                 status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 8,  name: 'Ryan Deasy',                   status: 'paid',    method: 'Venmo', date: 'Jan 26', amount: 160 },
  { id: 9,  name: 'Andrea Doan',                  status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 10, name: 'Sam Dunn',                     status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 11, name: 'Henry Ehmann',                 status: 'paid',    method: 'Check', date: 'Jan 29', amount: 160 },
  { id: 12, name: 'Zachary Epstein',              status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 13, name: 'Antonio Falcone',              status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 14, name: 'Theodore Galitzine',           status: 'paid',    method: 'Check', date: 'Feb 3',  amount: 160 },
  { id: 15, name: 'Conner Gilligan',              status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 16, name: 'Jordan Hofschneider',          status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 17, name: 'Nadia Jamal',                  status: 'paid',    method: 'Venmo', date: 'Feb 8',  amount: 160 },
  { id: 18, name: 'Andrew Jung',                  status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 19, name: 'Paddy Kajaria',                status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 20, name: 'Sheetanshu Kandlakunta',       status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 21, name: 'Abhi Kathiriya',               status: 'paid',    method: 'Zelle', date: 'Feb 9',  amount: 160 },
  { id: 22, name: 'Ari Kefalas',                  status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 23, name: 'Katie Kerwan',                 status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 24, name: 'Roseallise Kowalewski',        status: 'paid',    method: 'Cash',  date: 'Feb 10', amount: 160 },
  { id: 25, name: 'Riya Kumar',                   status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 26, name: 'Evan Lacey',                   status: 'paid',    method: 'Venmo', date: 'Feb 12', amount: 160 },
  { id: 27, name: 'Jonathan Lamb',                status: 'paid',    method: 'Zelle', date: 'Feb 13', amount: 160 },
  { id: 28, name: 'Nancy Lei',                    status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 29, name: 'Myles Manoli',                 status: 'paid',    method: 'Check', date: 'Feb 15', amount: 160 },
  { id: 30, name: 'Daniel Matas',                 status: 'paid',    method: 'Venmo', date: 'Feb 16', amount: 160 },
  { id: 31, name: 'Nicole Medina',                status: 'paid',    method: 'Zelle', date: 'Feb 17', amount: 160 },
  { id: 32, name: 'Anju Minhas',                  status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 33, name: 'Owen Mintzer',                 status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 34, name: 'Isabella Mohamed',             status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 35, name: 'Abigail Murray',               status: 'paid',    method: 'Venmo', date: 'Feb 20', amount: 160 },
  { id: 36, name: 'Tristan Ng',                   status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 37, name: 'Brady Nguyen',                 status: 'paid',    method: 'Zelle', date: 'Feb 21', amount: 160 },
  { id: 38, name: 'Daniel Nguyen',                status: 'late',    method: 'Cash',  date: 'Feb 22', amount: 160 },
  { id: 39, name: 'Arianna Ordonez',              status: 'paid',    method: 'Check', date: 'Feb 23', amount: 160 },
  { id: 40, name: 'Christian Pacis',              status: 'paid',    method: 'Venmo', date: 'Feb 24', amount: 160 },
  { id: 41, name: 'Carter Page',                  status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 42, name: 'Adrian Palladino',             status: 'paid',    method: 'Zelle', date: 'Feb 25', amount: 160 },
  { id: 43, name: 'Krish Parashar',               status: 'paid',    method: 'Cash',  date: 'Feb 26', amount: 160 },
  { id: 44, name: 'Angel Pascual Felix',          status: 'paid',    method: 'Cash',  date: 'Feb 2',  amount: 160 },
  { id: 45, name: 'Nakul Patel',                  status: 'paid',    method: 'Check', date: 'Feb 27', amount: 160 },
  { id: 46, name: 'Ava Philipone',                status: 'paid',    method: 'Venmo', date: 'Feb 28', amount: 160 },
  { id: 47, name: 'Catherine Quan',               status: 'paid',    method: 'Cash',  date: 'Mar 2',  amount: 160 },
  { id: 48, name: 'Brett Sabatino',               status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 49, name: 'Christian Sainristil',         status: 'paid',    method: 'Check', date: 'Mar 3',  amount: 160 },
  { id: 50, name: 'Matthew Sciara',               status: 'paid',    method: 'Venmo', date: 'Mar 4',  amount: 160 },
  { id: 51, name: 'Daniel Shao',                  status: 'paid',    method: 'Zelle', date: 'Mar 5',  amount: 160 },
  { id: 52, name: 'Elizabeth Shaw',               status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 53, name: 'Adam Sid',                     status: 'paid',    method: 'Cash',  date: 'Mar 6',  amount: 160 },
  { id: 54, name: 'William Siegel',               status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 55, name: 'Aman Sinha',                   status: 'paid',    method: 'Check', date: 'Mar 7',  amount: 160 },
  { id: 56, name: 'Siany Smith',                  status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 57, name: 'Ethan Solomon',                status: 'paid',    method: 'Venmo', date: 'Mar 8',  amount: 160 },
  { id: 58, name: 'Lucas Springer',               status: 'paid',    method: 'Cash',  date: 'Mar 10', amount: 160 },
  { id: 59, name: 'Tashfia Tasnim',               status: 'paid',    method: 'Check', date: 'Mar 11', amount: 160 },
  { id: 60, name: 'Charlie Thomas',               status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 61, name: 'Theresa Urzi',                 status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 62, name: 'Timothy Wang',                 status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 63, name: 'Erika Wilson',                 status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 64, name: 'Jeslin Wong',                  status: 'paid',    method: 'Cash',  date: 'Mar 18', amount: 160 },
  { id: 65, name: 'Edward Yu',                    status: 'paid',    method: 'Check', date: 'Mar 19', amount: 160 },
  { id: 66, name: 'Venus Yu',                     status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 67, name: 'Ahmad Zahid',                  status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 68, name: 'Ryan Zima',                    status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 69, name: 'Adrian Zivan',                 status: 'paid',    method: 'Zelle', date: 'Mar 21', amount: 160 },
]

export const BUDGET = [
  { name: 'National Dues',     value: 5362 },
  { name: 'Chapter Events',    value: 3892 },
  { name: 'Operations',        value: 2681 },
  { name: 'Community Service', value: 1950 },
  { name: 'Brotherhood',       value: 1384 },
  { name: 'Reserve Fund',      value: 1051 },
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

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="xl:col-span-3">
            <RosterTable roster={ROSTER} />
          </div>
          <div className="xl:col-span-2">
            <BudgetChart budget={BUDGET} total={CHAPTER_GOAL} />
          </div>
        </div>

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
