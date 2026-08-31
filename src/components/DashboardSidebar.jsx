import { NavLink } from 'react-router-dom';
import { GraduationCap, X } from 'lucide-react';

export default function DashboardSidebar({ items, mobileOpen, setMobileOpen, roleLabel }) {
  return (
    <>
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={() => setMobileOpen(false)} />
      )}
      <aside
        className={`fixed lg:sticky top-0 h-screen w-64 shrink-0 bg-white dark:bg-navy-900 border-r border-navy-100 dark:border-white/5 z-50 transition-transform duration-250 flex flex-col
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-navy-100 dark:border-white/5 shrink-0">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-md bg-brand-gradient flex items-center justify-center text-white"><GraduationCap size={16} /></span>
            <div>
              <p className="font-display font-bold text-sm text-navy-900 dark:text-white leading-none">Skillbridge</p>
              <p className="text-[11px] text-navy-400 dark:text-slate-500 mt-0.5">{roleLabel}</p>
            </div>
          </div>
          <button className="lg:hidden text-navy-400" onClick={() => setMobileOpen(false)}><X size={18} /></button>
        </div>
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-0.5">
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300'
                    : 'text-navy-600 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-white/5'
                }`
              }
            >
              <item.icon size={17} />
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
}
