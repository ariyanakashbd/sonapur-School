import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'হোম' },
  { to: '/about', label: 'আমাদের সম্পর্কে' },
  { to: '/academics', label: 'একাডেমিক' },
  { to: '/teachers', label: 'শিক্ষকমণ্ডলী' },
  { to: '/admission', label: 'ভর্তি' },
  { to: '/notices', label: 'নোটিশ' },
  { to: '/contact', label: 'যোগাযোগ' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-2xl">🏫</span>
          <span className="hidden sm:inline">সোনাপুর সরকারি প্রাথমিক বিদ্যালয়</span>
          <span className="sm:hidden">সোনাপুর সরকারি প্রা. বিদ্যালয়</span>
        </Link>

        <nav className="hidden md:flex gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md transition ${
                  isActive ? 'bg-secondary text-primary font-semibold' : 'hover:bg-white/10'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="মেনু"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-primary px-4 pb-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md ${
                  isActive ? 'bg-secondary text-primary font-semibold' : 'hover:bg-white/10'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
