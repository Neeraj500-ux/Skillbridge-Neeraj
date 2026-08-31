import { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingCart, Moon, Sun, Menu, X, GraduationCap, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useStore } from '../context/StoreContext';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Courses', to: '/courses' },
  { label: 'Categories', to: '/categories' },
  { label: 'Instructors', to: '/instructors' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

const roleHome = { student: '/student/dashboard', instructor: '/instructor/dashboard', admin: '/admin/dashboard' };

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { cartCourses, wishlistCourses } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const submitSearch = (e) => {
    e.preventDefault();
    navigate(searchQuery ? `/courses?q=${encodeURIComponent(searchQuery)}` : '/courses');
    setMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-250 ${scrolled ? 'bg-white/90 dark:bg-navy-950/90 backdrop-blur-md shadow-soft' : 'bg-white dark:bg-navy-950'} border-b border-navy-100/60 dark:border-white/5`}
    >
      <div className="container-shell flex items-center justify-between h-16 gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="h-9 w-9 rounded-md bg-brand-gradient flex items-center justify-center text-white">
            <GraduationCap size={18} />
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight text-navy-900 dark:text-white">Skillbridge</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-violet-600 dark:text-violet-300' : 'text-navy-600 dark:text-slate-300 hover:text-navy-900 dark:hover:text-white'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <form onSubmit={submitSearch} className="hidden md:flex items-center relative">
            <Search size={15} className="absolute left-3 text-navy-300" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses..."
              className="w-48 lg:w-64 rounded-full border border-navy-200 dark:border-white/10 bg-navy-50/60 dark:bg-white/5 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
            />
          </form>

          <button onClick={toggleTheme} aria-label="Toggle theme" className="h-9 w-9 rounded-full flex items-center justify-center text-navy-500 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-white/5 focus-ring">
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          <Link to="/student/wishlist" className="relative h-9 w-9 rounded-full flex items-center justify-center text-navy-500 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-white/5 focus-ring">
            <Heart size={17} />
            {wishlistCourses.length > 0 && <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-violet-600 text-white text-[10px] flex items-center justify-center">{wishlistCourses.length}</span>}
          </Link>
          <Link to="/student/cart" className="relative h-9 w-9 rounded-full flex items-center justify-center text-navy-500 dark:text-slate-300 hover:bg-navy-50 dark:hover:bg-white/5 focus-ring">
            <ShoppingCart size={17} />
            {cartCourses.length > 0 && <span className="absolute -top-0.5 -right-0.5 h-4 w-4 rounded-full bg-violet-600 text-white text-[10px] flex items-center justify-center">{cartCourses.length}</span>}
          </Link>

          {user ? (
            <div className="relative hidden sm:block">
              <button onClick={() => setProfileOpen((v) => !v)} className="flex items-center gap-1.5 pl-1 pr-2 py-1 rounded-full border border-navy-200 dark:border-white/10 focus-ring">
                <img src={user.avatar} alt="" className="h-7 w-7 rounded-full object-cover" />
                <ChevronDown size={14} className="text-navy-400" />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-52 card-surface p-1.5 text-sm" onMouseLeave={() => setProfileOpen(false)}>
                  <p className="px-3 py-2 text-xs text-navy-400 border-b border-navy-100 dark:border-white/10 mb-1">{user.email}</p>
                  <Link to={roleHome[user.role]} className="block px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-white/5" onClick={() => setProfileOpen(false)}>Dashboard</Link>
                  <Link to={`/${user.role}/profile`} className="block px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-white/5" onClick={() => setProfileOpen(false)}>Profile</Link>
                  <Link to={`/${user.role}/settings`} className="block px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-white/5" onClick={() => setProfileOpen(false)}>Settings</Link>
                  <button
                    onClick={() => { logout(); setProfileOpen(false); navigate('/'); }}
                    className="w-full text-left px-3 py-2 rounded-md hover:bg-red-50 dark:hover:bg-red-500/10 text-red-500"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login" className="btn-ghost !px-3">Login</Link>
              <Link to="/register" className="btn-primary !px-4">Get Started</Link>
            </div>
          )}

          <button className="lg:hidden h-9 w-9 flex items-center justify-center text-navy-600 dark:text-slate-300" onClick={() => setMobileOpen((v) => !v)} aria-label="Menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-100 dark:border-white/10 bg-white dark:bg-navy-950 px-5 py-4 space-y-3">
          <form onSubmit={submitSearch} className="flex items-center relative">
            <Search size={15} className="absolute left-3 text-navy-300" />
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search courses..." className="w-full rounded-full border border-navy-200 dark:border-white/10 bg-navy-50 dark:bg-white/5 pl-9 pr-3 py-2 text-sm" />
          </form>
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <NavLink key={l.to} to={l.to} onClick={() => setMobileOpen(false)} className="px-2 py-2.5 rounded-md text-sm font-medium text-navy-700 dark:text-slate-200 hover:bg-navy-50 dark:hover:bg-white/5">
                {l.label}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-2 pt-2 border-t border-navy-100 dark:border-white/10">
            {user ? (
              <>
                <Link to={roleHome[user.role]} className="btn-secondary flex-1" onClick={() => setMobileOpen(false)}>Dashboard</Link>
                <button onClick={() => { logout(); setMobileOpen(false); navigate('/'); }} className="btn-ghost flex-1">Log out</button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn-secondary flex-1" onClick={() => setMobileOpen(false)}>Login</Link>
                <Link to="/register" className="btn-primary flex-1" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
