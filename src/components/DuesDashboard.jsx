import { useRef } from 'react'
import HeroStats from './HeroStats'
import RosterTable from './RosterTable'
import BudgetChart from './BudgetChart'
import DuesCountdown from './DuesCountdown'
import WantedBoard from './WantedBoard'
import { HeroSection } from './HeroSection'

export const SEMESTER = 'Spring 2026'
export const DUES_AMOUNT = 160
export const CHAPTER_GOAL = 16320 // 102 brothers × $160

export const ROSTER = [
  { id: 1,   name: 'Buthaina Al-Harth',             status: 'paid',    method: 'Venmo', date: 'Jan 15', amount: 160 },
  { id: 2,   name: 'Vallabh Baldwa',                status: 'paid',    method: 'Zelle', date: 'Jan 15', amount: 160 },
  { id: 3,   name: 'Kallista Bertini',              status: 'paid',    method: 'Venmo', date: 'Jan 15',      amount: 160 },
  { id: 4,   name: 'Paige Bessel',                  status: 'paid',    method: 'Cash',  date: 'Jan 16', amount: 160 },
  { id: 6,   name: 'Maruf Billah',                  status: 'paid',    method: 'Cash',     date: '—',      amount: 160 },
  { id: 7,   name: 'Nick Bivona',                   status: 'paid',    method: 'Venmo', date: 'Jan 18', amount: 160 },
  { id: 8,   name: 'Hayden Blufarb',                status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 9,   name: 'Arely Bravo',                   status: 'late',    method: 'Zelle', date: 'Jan 19', amount: 160 },
  { id: 10,  name: 'Conall Burke',                  status: 'paid',    method: 'Cash',  date: 'Jan 20', amount: 160 },
  { id: 11,  name: 'Victoria Camacho Mande',        status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 12,  name: 'Alexis Cardenas',               status: 'paid',    method: 'Check', date: 'Jan 21', amount: 160 },
  { id: 13,  name: 'Cesar Cardenas',                status: 'paid',    method: 'Venmo', date: 'Jan 22', amount: 160 },
  { id: 14,  name: 'Minna Cederman-Kobayashi',      status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 15,  name: 'Tyler Celestin',                status: 'paid',    method: 'Zelle', date: 'Jan 23', amount: 160 },
  { id: 16,  name: 'Angela Chen',                   status: 'paid',    method: 'Cash',  date: 'Jan 24', amount: 160 },
  { id: 17,  name: 'Austin Chen',                   status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 18,  name: 'Lia Chen',                      status: 'paid',    method: 'Check', date: 'Jan 25', amount: 160 },
  { id: 19,  name: "Sebastian D'Amico",             status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 20,  name: 'Ryan Deasy',                    status: 'paid',    method: 'Venmo', date: 'Jan 26', amount: 160 },
  { id: 21,  name: 'Joseph Denaro',                 status: 'paid',    method: 'Zelle', date: 'Jan 27', amount: 160 },
  { id: 22,  name: 'Andrea Doan',                   status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 23,  name: 'Megan Dreher',                  status: 'paid',    method: 'Cash',  date: 'Jan 28', amount: 160 },
  { id: 24,  name: 'Henry Ehmann',                  status: 'paid',    method: 'Check', date: 'Jan 29', amount: 160 },
  { id: 25,  name: 'Zachary Epstein',               status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 26,  name: 'Sheryn Rose Espinosa',          status: 'paid',    method: 'Venmo', date: 'Jan 30', amount: 160 },
  { id: 27,  name: 'Zaine Evans',                   status: 'late',    method: 'Zelle', date: 'Feb 1',  amount: 160 },
  { id: 28,  name: 'Antonio Falcone',               status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 29,  name: 'Angel Pascual Felix',           status: 'paid',    method: 'Cash',  date: 'Feb 2',  amount: 160 },
  { id: 30,  name: 'Jerry Fiorini',                 status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 31,  name: 'Theodore Galitzine',            status: 'paid',    method: 'Check', date: 'Feb 3',  amount: 160 },
  { id: 32,  name: 'Arlette Garcia',                status: 'paid',    method: 'Venmo', date: 'Feb 4',  amount: 160 },
  { id: 33,  name: 'Conner Gilligan',               status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 34,  name: 'Boris Guanga',                  status: 'late',    method: 'Zelle', date: 'Feb 5',  amount: 160 },
  { id: 35,  name: 'Andrew Hoffman',                status: 'paid',    method: 'Cash',  date: 'Feb 6',  amount: 160 },
  { id: 36,  name: 'Jordan Hofschneider',           status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 37,  name: 'Justin Huang',                  status: 'paid',    method: 'Check', date: 'Feb 7',  amount: 160 },
  { id: 38,  name: 'Nadia Jamal',                   status: 'paid',    method: 'Venmo', date: 'Feb 8',  amount: 160 },
  { id: 39,  name: 'Andrew Jung',                   status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 40,  name: 'Abhi Kathiriya',                status: 'paid',    method: 'Zelle', date: 'Feb 9',  amount: 160 },
  { id: 41,  name: 'Sheetanshu Kandlakunta',        status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 42,  name: 'Roseallise Kowalewski',         status: 'paid',    method: 'Cash',  date: 'Feb 10', amount: 160 },
  { id: 43,  name: 'Ryan Kuk',                      status: 'paid',    method: 'Check', date: 'Feb 11', amount: 160 },
  { id: 44,  name: 'Riya Kumar',                    status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 45,  name: 'Evan Lacey',                    status: 'paid',    method: 'Venmo', date: 'Feb 12', amount: 160 },
  { id: 46,  name: 'Jon Lamb',                      status: 'paid',    method: 'Zelle', date: 'Feb 13', amount: 160 },
  { id: 47,  name: 'Hannah Lerner-Morelle',         status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 48,  name: 'Brandon Ling',                  status: 'paid',    method: 'Cash',  date: 'Feb 14', amount: 160 },
  { id: 49,  name: 'Myles Manoli',                  status: 'paid',    method: 'Check', date: 'Feb 15', amount: 160 },
  { id: 50,  name: 'Serena Martino',                status: 'paid',    method: '—',     date: '—',      amount: 160 },
  { id: 51,  name: 'Daniel Matas',                  status: 'paid',    method: 'Venmo', date: 'Feb 16', amount: 160 },
  { id: 52,  name: 'Colin Matthew',                 status: 'late', method: '—',     date: '—',      amount: 160 },
  { id: 53,  name: 'Nicole Medina',                 status: 'paid',    method: 'Zelle', date: 'Feb 17', amount: 160 },
  { id: 54,  name: 'Andrew Mikolajczyk',            status: 'paid',    method: 'Cash',  date: 'Feb 18', amount: 160 },
  { id: 55,  name: 'Owen Mintzer',                  status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 56,  name: 'Jack Misenheimer',              status: 'paid',    method: 'Check', date: 'Feb 19', amount: 160 },
  { id: 57,  name: 'Abigail Murray',                status: 'paid',    method: 'Venmo', date: 'Feb 20', amount: 160 },
  { id: 58,  name: 'Stephanie Newberger',           status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 59,  name: 'Brady Nguyen',                  status: 'paid',    method: 'Zelle', date: 'Feb 21', amount: 160 },
  { id: 60,  name: 'Daniel Nguyen',                 status: 'late',    method: 'Cash',  date: 'Feb 22', amount: 160 },
  { id: 61,  name: "Sean O'Connor",                 status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 62,  name: 'Arianna Ordonez',               status: 'paid',    method: 'Check', date: 'Feb 23', amount: 160 },
  { id: 63,  name: 'Christain Pacis',               status: 'paid',    method: 'Venmo', date: 'Feb 24', amount: 160 },
  { id: 64,  name: 'Carter Page',                   status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 65,  name: 'Adrian Palladino',              status: 'paid',    method: 'Zelle', date: 'Feb 25', amount: 160 },
  { id: 66,  name: 'Krish Parashar',                status: 'paid',    method: 'Cash',  date: 'Feb 26', amount: 160 },
  { id: 67,  name: 'Sam Parker',                    status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 68,  name: 'Nakul Patel',                   status: 'paid',    method: 'Check', date: 'Feb 27', amount: 160 },
  { id: 69,  name: 'Skylar Paul',                   status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 70,  name: 'Ava Philippone',                status: 'paid',    method: 'Venmo', date: 'Feb 28', amount: 160 },
  { id: 71,  name: 'Madelyn Puff',                  status: 'paid',    method: 'Zelle', date: 'Mar 1',  amount: 160 },
  { id: 72,  name: 'Sydney Pulver',                 status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 73,  name: 'Catherine Quan',                status: 'paid',    method: 'Cash',  date: 'Mar 2',  amount: 160 },
  { id: 74,  name: 'Christian Sainristil',          status: 'paid',    method: 'Check', date: 'Mar 3',  amount: 160 },
  { id: 75,  name: 'Zachary Sanders',               status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 76,  name: 'Matthew Sciaria',               status: 'paid',    method: 'Venmo', date: 'Mar 4',  amount: 160 },
  { id: 77,  name: 'Daniel Shao',                   status: 'paid',    method: 'Zelle', date: 'Mar 5',  amount: 160 },
  { id: 78,  name: 'Bernice Sheenan',               status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 79,  name: 'Adam Sid',                      status: 'paid',    method: 'Cash',  date: 'Mar 6',  amount: 160 },
  { id: 80,  name: 'Will Siegel',                   status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 81,  name: 'Aman Sinha',                    status: 'paid',    method: 'Check', date: 'Mar 7',  amount: 160 },
  { id: 82,  name: 'Ethan Solomon',                 status: 'paid',    method: 'Venmo', date: 'Mar 8',  amount: 160 },
  { id: 83,  name: 'Tracy Son',                     status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 84,  name: 'Dowon Song',                    status: 'paid',    method: 'Zelle', date: 'Mar 9',  amount: 160 },
  { id: 85,  name: 'Lucas Springer',                status: 'paid',    method: 'Cash',  date: 'Mar 10', amount: 160 },
  { id: 86,  name: 'Stefan Stefanov',               status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 87,  name: 'Tashfia Tasnim',                status: 'paid',    method: 'Check', date: 'Mar 11', amount: 160 },
  { id: 88,  name: 'Abigail Tetrault',              status: 'paid',    method: 'Venmo', date: 'Mar 12', amount: 160 },
  { id: 89,  name: 'Charlie Thomas',                status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 90,  name: 'Austin Tuel',                   status: 'paid',    method: 'Zelle', date: 'Mar 13', amount: 160 },
  { id: 91,  name: 'Theresa Urzi',                  status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 92,  name: 'Courtney Vigliotti',            status: 'paid',    method: 'Cash',  date: 'Mar 14', amount: 160 },
  { id: 93,  name: 'Evan Vulcano',                  status: 'paid',    method: 'Check', date: 'Mar 15', amount: 160 },
  { id: 94,  name: 'Timothy Wang',                  status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 95,  name: 'Lukas Warner',                  status: 'paid',    method: 'Venmo', date: 'Mar 16', amount: 160 },
  { id: 96,  name: 'Abigail Wilczak',               status: 'paid',    method: 'Zelle', date: 'Mar 17', amount: 160 },
  { id: 97,  name: 'Erika Wilson',                  status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 98,  name: 'Jeslin Wong',                   status: 'paid',    method: 'Cash',  date: 'Mar 18', amount: 160 },
  { id: 99,  name: 'Edward Yu',                     status: 'paid',    method: 'Check', date: 'Mar 19', amount: 160 },
  { id: 100, name: 'Ahmed Zahid',                   status: 'late',    method: '—',     date: '—',      amount: 160 },
  { id: 101, name: 'Mickey Zeng',                   status: 'paid',    method: 'Venmo', date: 'Mar 20', amount: 160 },
  { id: 102, name: 'Ryan Zima',                     status: 'pending', method: '—',     date: '—',      amount: 160 },
  { id: 103, name: 'Adrian Zivan',                  status: 'paid',    method: 'Zelle', date: 'Mar 21', amount: 160 },
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
