import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Bell, Moon, Sun, LogOut, Settings, UserRound } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

const notifications = [
  { id: 1, title: 'Assignment graded', body: 'Your capstone project scored 92/100.', time: '2h ago' },
  { id: 2, title: 'New course published', body: 'Applied Machine Learning with Python is live.', time: '1d ago' },
  { id: 3, title: 'Certificate ready', body: 'Your certificate for Personal Finance 101 is ready.', time: '3d ago' },
];

export default function DashboardTopbar({ onMenuClick, title }) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="h-16 sticky top-0 z-30 bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border-b border-navy-100 dark:border-white/5 flex items-center justify-between px-4 sm:px-6">
      <div className="flex items-center gap-3">
        <button className="lg:hidden text-navy-500 dark:text-slate-300" onClick={onMenuClick}><Menu size={20} /></button>
        <h1 className="font-display font-bold text-lg text-navy-900 dark:text-white">{title}</h1>
      </div>
      <div className="flex items-center gap-1.5">
        <button onClick={toggleTheme} className="h-9 w-9 rounded-full flex items-center justify-center text-navy-500 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-white/5 focus-ring">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <div className="relative">
          <button onClick={() => setNotifOpen((v) => !v)} className="relative h-9 w-9 rounded-full flex items-center justify-center text-navy-500 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-white/5 focus-ring">
            <Bell size={16} />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-violet-600" />
          </button>
          {notifOpen && (
            <div className="absolute right-0 mt-2 w-80 card-surface p-2 max-h-96 overflow-y-auto" onMouseLeave={() => setNotifOpen(false)}>
              <p className="px-2.5 py-1.5 text-xs font-semibold text-navy-400 uppercase tracking-wide">Notifications</p>
              {notifications.map((n) => (
                <div key={n.id} className="px-2.5 py-2.5 rounded-md hover:bg-navy-50 dark:hover:bg-white/5">
                  <p className="text-sm font-semibold text-navy-800 dark:text-slate-100">{n.title}</p>
                  <p className="text-xs text-navy-400 dark:text-slate-400 mt-0.5">{n.body}</p>
                  <p className="text-[11px] text-navy-300 mt-1">{n.time}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={() => setProfileOpen((v) => !v)} className="flex items-center gap-2 pl-1 pr-1 py-1 rounded-full focus-ring">
            <img src={user?.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
          </button>
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-52 card-surface p-1.5 text-sm" onMouseLeave={() => setProfileOpen(false)}>
              <p className="px-3 py-2 text-xs text-navy-400 border-b border-navy-100 dark:border-white/10 mb-1 truncate">{user?.email}</p>
              <button onClick={() => { navigate(`/${user.role}/profile`); setProfileOpen(false); }} className="w-full flex items-center gap-2 text-left px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-white/5"><UserRound size={14} /> Profile</button>
              <button onClick={() => { navigate(`/${user.role}/settings`); setProfileOpen(false); }} className="w-full flex items-center gap-2 text-left px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-white/5"><Settings size={14} /> Settings</button>
              <button onClick={() => { logout(); navigate('/'); }} className="w-full flex items-center gap-2 text-left px-3 py-2 rounded-md hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"><LogOut size={14} /> Log out</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
