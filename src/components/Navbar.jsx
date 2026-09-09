import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  Search,
  Heart,
  ShoppingCart,
  Moon,
  Sun,
  Menu,
  X,
  GraduationCap,
  ChevronDown,
  LayoutDashboard,
  UserRound,
  Settings,
  LogOut,
} from 'lucide-react';

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

const roleHome = {
  student: '/student/dashboard',
  instructor: '/instructor/dashboard',
  admin: '/admin/dashboard',
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const profileRef = useRef(null);

  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { cartCourses = [], wishlistCourses = [] } = useStore();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const submitSearch = (event) => {
    event.preventDefault();

    const cleanQuery = searchQuery.trim();

    navigate(
      cleanQuery
        ? `/courses?q=${encodeURIComponent(cleanQuery)}`
        : '/courses'
    );

    setMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    setMobileOpen(false);
    navigate('/');
  };

  const badgeCount = (count) => (count > 99 ? '99+' : count);

  const iconButtonClass = `
    group relative flex h-10 w-10 shrink-0 items-center justify-center
    overflow-hidden rounded-full
    border border-white/70 dark:border-white/10
    bg-white/60 dark:bg-white/[0.06]
    text-navy-600 dark:text-slate-300
    shadow-[0_6px_20px_rgba(15,23,42,0.08)]
    backdrop-blur-xl
    transition-all duration-300
    hover:-translate-y-0.5
    hover:border-violet-300/80
    hover:bg-white/90 dark:hover:bg-white/10
    hover:text-violet-600 dark:hover:text-violet-300
    hover:shadow-[0_10px_28px_rgba(124,58,237,0.18)]
    focus:outline-none focus:ring-2 focus:ring-violet-400/60
  `;

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 w-full
          px-2.5 sm:px-4 lg:px-6
          transition-all duration-500
          ${
            scrolled
              ? 'pt-2 sm:pt-3'
              : 'pt-2 sm:pt-4'
          }
        `}
      >
        <div
          className={`
            group/navbar relative mx-auto max-w-[1500px]
            overflow-visible rounded-[24px] sm:rounded-[28px]
            border border-white/70 dark:border-white/10
            bg-white/70 dark:bg-navy-950/70
            backdrop-blur-[22px] backdrop-saturate-150
            transition-all duration-500
            ${
              scrolled
                ? `
                  shadow-[0_16px_45px_rgba(15,23,42,0.14),0_0_35px_rgba(124,58,237,0.08)]
                  dark:shadow-[0_16px_50px_rgba(0,0,0,0.4),0_0_30px_rgba(139,92,246,0.12)]
                `
                : `
                  shadow-[0_10px_35px_rgba(15,23,42,0.08)]
                  dark:shadow-[0_12px_40px_rgba(0,0,0,0.3)]
                `
            }
          `}
        >
          {/* Animated glass border */}
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-0 -z-10
              overflow-hidden rounded-[inherit]
            "
          >
            <div
              className="
                absolute -left-1/3 top-[-240%]
                h-[600%] w-[45%]
                rotate-[20deg]
                bg-gradient-to-r
                from-transparent via-violet-400/20 to-transparent
                blur-xl
                animate-[navbarShine_8s_ease-in-out_infinite]
                dark:via-violet-400/10
              "
            />

            <div
              className="
                absolute -left-16 -top-20
                h-44 w-44 rounded-full
                bg-violet-500/10 blur-3xl
                animate-[navbarGlow_7s_ease-in-out_infinite]
              "
            />

            <div
              className="
                absolute -bottom-24 right-0
                h-48 w-48 rounded-full
                bg-blue-400/10 blur-3xl
                animate-[navbarGlow_8s_ease-in-out_infinite_reverse]
              "
            />
          </div>

          <div
            className="
              relative flex h-[66px] items-center justify-between
              gap-2 px-3 sm:h-[72px] sm:px-4 lg:px-5
            "
          >
            {/* Logo */}
            <Link
              to="/"
              aria-label="Skillbridge home"
              className="
                group/logo flex min-w-0 shrink-0 items-center gap-2
                rounded-full pr-1
                focus:outline-none focus:ring-2 focus:ring-violet-400/60
              "
            >
              <span
                className="
                  relative flex h-11 w-11 shrink-0 items-center
                  justify-center overflow-hidden rounded-full
                  border border-white/60
                  bg-brand-gradient text-white
                  shadow-[0_8px_24px_rgba(124,58,237,0.32)]
                  transition-all duration-500
                  group-hover/logo:rotate-[-5deg]
                  group-hover/logo:scale-105
                  group-hover/logo:shadow-[0_10px_30px_rgba(124,58,237,0.48)]
                "
              >
                <span
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-white/35 via-transparent to-transparent
                  "
                />
                <GraduationCap
                  size={21}
                  strokeWidth={2.2}
                  className="relative z-10"
                />
              </span>

              <span className="hidden min-[390px]:block">
                <span
                  className="
                    block whitespace-nowrap font-display
                    text-[17px] font-extrabold leading-none
                    tracking-tight text-navy-900
                    dark:text-white sm:text-lg
                  "
                >
                  Skillbridge
                </span>

                <span
                  className="
                    mt-1 hidden text-[9px] font-semibold
                    uppercase tracking-[0.2em]
                    text-violet-500 sm:block
                    dark:text-violet-300
                  "
                >
                  Learn • Grow • Achieve
                </span>
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              aria-label="Main navigation"
              className="
                hidden items-center gap-0.5 rounded-full
                border border-white/70 dark:border-white/[0.08]
                bg-white/45 dark:bg-white/[0.035]
                p-1.5 shadow-inner
                backdrop-blur-xl xl:flex
              "
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `
                    relative whitespace-nowrap rounded-full
                    px-3.5 py-2 text-[13px] font-semibold
                    transition-all duration-300
                    focus:outline-none focus:ring-2
                    focus:ring-violet-400/50
                    ${
                      isActive
                        ? `
                          bg-gradient-to-r from-violet-600 to-indigo-600
                          text-white
                          shadow-[0_7px_18px_rgba(124,58,237,0.3)]
                        `
                        : `
                          text-navy-600 dark:text-slate-300
                          hover:bg-white/90 dark:hover:bg-white/[0.08]
                          hover:text-violet-600 dark:hover:text-violet-300
                        `
                    }
                  `}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex min-w-0 items-center gap-1 sm:gap-1.5">
              {/* Desktop search */}
              <form
                onSubmit={submitSearch}
                className="
                  group/search relative hidden items-center
                  lg:flex xl:hidden 2xl:flex
                "
              >
                <Search
                  size={16}
                  className="
                    pointer-events-none absolute left-3.5 z-10
                    text-navy-400 transition-colors
                    group-focus-within/search:text-violet-500
                  "
                />

                <input
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search courses..."
                  aria-label="Search courses"
                  className="
                    h-10 w-44 rounded-full
                    border border-white/80 dark:border-white/10
                    bg-white/60 dark:bg-white/[0.06]
                    py-2 pl-10 pr-4 text-sm
                    text-navy-800 dark:text-white
                    shadow-[0_5px_18px_rgba(15,23,42,0.06)]
                    outline-none backdrop-blur-xl
                    transition-all duration-300
                    placeholder:text-navy-300
                    dark:placeholder:text-slate-500
                    focus:w-52
                    focus:border-violet-300
                    focus:bg-white/90 dark:focus:bg-white/10
                    focus:ring-4 focus:ring-violet-500/10
                    2xl:w-52 2xl:focus:w-60
                  "
                />
              </form>

              {/* Theme */}
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={
                  theme === 'dark'
                    ? 'Switch to light mode'
                    : 'Switch to dark mode'
                }
                className={iconButtonClass}
              >
                <span
                  className="
                    absolute inset-0 scale-0 rounded-full
                    bg-violet-500/10
                    transition-transform duration-300
                    group-hover:scale-100
                  "
                />
                {theme === 'dark' ? (
                  <Sun
                    size={18}
                    className="relative z-10 transition-transform duration-500 group-hover:rotate-45"
                  />
                ) : (
                  <Moon
                    size={18}
                    className="relative z-10 transition-transform duration-500 group-hover:-rotate-12"
                  />
                )}
              </button>

              {/* Wishlist */}
              <Link
                to="/student/wishlist"
                aria-label={`Wishlist with ${wishlistCourses.length} courses`}
                className={`${iconButtonClass} hidden min-[460px]:flex`}
              >
                <Heart
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />

                {wishlistCourses.length > 0 && (
                  <span
                    className="
                      absolute -right-0.5 -top-0.5 z-20
                      flex min-h-4 min-w-4 items-center justify-center
                      rounded-full border-2 border-white
                      bg-gradient-to-r from-violet-600 to-indigo-600
                      px-0.5 text-[9px] font-bold text-white
                      shadow-md dark:border-navy-950
                    "
                  >
                    {badgeCount(wishlistCourses.length)}
                  </span>
                )}
              </Link>

              {/* Cart */}
              <Link
                to="/student/cart"
                aria-label={`Cart with ${cartCourses.length} courses`}
                className={`${iconButtonClass} hidden min-[460px]:flex`}
              >
                <ShoppingCart
                  size={18}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />

                {cartCourses.length > 0 && (
                  <span
                    className="
                      absolute -right-0.5 -top-0.5 z-20
                      flex min-h-4 min-w-4 items-center justify-center
                      rounded-full border-2 border-white
                      bg-gradient-to-r from-violet-600 to-indigo-600
                      px-0.5 text-[9px] font-bold text-white
                      shadow-md dark:border-navy-950
                    "
                  >
                    {badgeCount(cartCourses.length)}
                  </span>
                )}
              </Link>

              {/* Profile */}
              {user ? (
                <div
                  ref={profileRef}
                  className="relative hidden sm:block"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setProfileOpen((current) => !current)
                    }
                    aria-expanded={profileOpen}
                    aria-label="Open profile menu"
                    className="
                      group/profile flex h-11 items-center gap-2
                      rounded-full border border-white/80
                      bg-white/60 py-1 pl-1 pr-2.5
                      text-navy-700 shadow-[0_6px_20px_rgba(15,23,42,0.08)]
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:border-violet-300
                      hover:bg-white/90
                      hover:shadow-[0_10px_28px_rgba(124,58,237,0.16)]
                      focus:outline-none focus:ring-2
                      focus:ring-violet-400/60
                      dark:border-white/10
                      dark:bg-white/[0.06]
                      dark:text-slate-200
                      dark:hover:bg-white/10
                    "
                  >
                    <span className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name || 'User'}
                        className="
                          h-9 w-9 rounded-full border-2
                          border-white object-cover
                          shadow-sm dark:border-white/20
                        "
                      />
                      <span
                        className="
                          absolute bottom-0 right-0 h-2.5 w-2.5
                          rounded-full border-2 border-white
                          bg-emerald-500 dark:border-navy-950
                        "
                      />
                    </span>

                    <span className="hidden max-w-20 truncate text-xs font-bold lg:block">
                      {user.name || user.role}
                    </span>

                    <ChevronDown
                      size={14}
                      className={`
                        text-navy-400 transition-transform duration-300
                        ${profileOpen ? 'rotate-180' : ''}
                      `}
                    />
                  </button>

                  {profileOpen && (
                    <div
                      className="
                        absolute right-0 top-[calc(100%+12px)]
                        w-64 origin-top-right overflow-hidden
                        rounded-[22px]
                        border border-white/70 dark:border-white/10
                        bg-white/90 dark:bg-navy-950/90
                        p-2.5
                        shadow-[0_24px_70px_rgba(15,23,42,0.2)]
                        backdrop-blur-[24px]
                        animate-[navbarMenu_0.25s_ease-out]
                      "
                    >
                      <div
                        className="
                          mb-2 rounded-2xl
                          bg-gradient-to-br
                          from-violet-500/10 to-blue-500/10
                          px-3.5 py-3
                        "
                      >
                        <p
                          className="
                            truncate text-sm font-bold
                            text-navy-900 dark:text-white
                          "
                        >
                          {user.name || 'Welcome back'}
                        </p>
                        <p
                          className="
                            mt-0.5 truncate text-xs
                            text-navy-400 dark:text-slate-400
                          "
                        >
                          {user.email}
                        </p>
                      </div>

                      <ProfileMenuLink
                        to={roleHome[user.role] || '/'}
                        icon={LayoutDashboard}
                        onClick={() => setProfileOpen(false)}
                      >
                        Dashboard
                      </ProfileMenuLink>

                      <ProfileMenuLink
                        to={`/${user.role}/profile`}
                        icon={UserRound}
                        onClick={() => setProfileOpen(false)}
                      >
                        Profile
                      </ProfileMenuLink>

                      <ProfileMenuLink
                        to={`/${user.role}/settings`}
                        icon={Settings}
                        onClick={() => setProfileOpen(false)}
                      >
                        Settings
                      </ProfileMenuLink>

                      <div className="my-1.5 h-px bg-navy-100 dark:bg-white/10" />

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="
                          flex w-full items-center gap-3 rounded-xl
                          px-3 py-2.5 text-left text-sm font-semibold
                          text-red-500 transition-colors
                          hover:bg-red-50 dark:hover:bg-red-500/10
                        "
                      >
                        <LogOut size={17} />
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden items-center gap-1.5 sm:flex">
                  <Link
                    to="/login"
                    className="
                      rounded-full px-4 py-2.5 text-sm font-bold
                      text-navy-700 transition-all duration-300
                      hover:bg-white/80 hover:text-violet-600
                      dark:text-slate-200 dark:hover:bg-white/[0.07]
                      dark:hover:text-violet-300
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="
                      relative overflow-hidden rounded-full
                      bg-gradient-to-r from-violet-600 to-indigo-600
                      px-4 py-2.5 text-sm font-bold text-white
                      shadow-[0_9px_24px_rgba(124,58,237,0.3)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_13px_30px_rgba(124,58,237,0.42)]
                      active:translate-y-0
                    "
                  >
                    <span
                      className="
                        absolute inset-0 -translate-x-full
                        bg-gradient-to-r
                        from-transparent via-white/25 to-transparent
                        transition-transform duration-700
                        hover:translate-x-full
                      "
                    />
                    <span className="relative">Get Started</span>
                  </Link>
                </div>
              )}

              {/* Tablet and mobile menu */}
              <button
                type="button"
                onClick={() =>
                  setMobileOpen((current) => !current)
                }
                aria-label={
                  mobileOpen ? 'Close navigation' : 'Open navigation'
                }
                aria-expanded={mobileOpen}
                className={`
                  flex h-11 w-11 items-center justify-center
                  rounded-full border
                  transition-all duration-300 xl:hidden
                  focus:outline-none focus:ring-2
                  focus:ring-violet-400/60
                  ${
                    mobileOpen
                      ? `
                        rotate-90 border-violet-500
                        bg-gradient-to-r from-violet-600 to-indigo-600
                        text-white
                        shadow-[0_8px_22px_rgba(124,58,237,0.32)]
                      `
                      : `
                        border-white/70 bg-white/60
                        text-navy-700
                        shadow-[0_6px_20px_rgba(15,23,42,0.08)]
                        hover:border-violet-300
                        hover:text-violet-600
                        dark:border-white/10 dark:bg-white/[0.06]
                        dark:text-slate-200
                      `
                  }
                `}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Tablet/mobile panel */}
          <div
            className={`
              xl:hidden
              transition-all duration-500 ease-out
              ${
                mobileOpen
                  ? 'max-h-[calc(100vh-95px)] opacity-100'
                  : 'pointer-events-none max-h-0 opacity-0'
              }
            `}
          >
            <div
              className="
                max-h-[calc(100vh-105px)] overflow-y-auto
                border-t border-navy-100/70
                px-3 pb-4 pt-3
                dark:border-white/10 sm:px-4
              "
            >
              {/* Mobile search */}
              <form
                onSubmit={submitSearch}
                className="group/mobile-search relative mb-3"
              >
                <Search
                  size={17}
                  className="
                    pointer-events-none absolute left-4 top-1/2
                    -translate-y-1/2 text-navy-400
                    group-focus-within/mobile-search:text-violet-500
                  "
                />

                <input
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="What do you want to learn?"
                  aria-label="Search courses"
                  className="
                    h-12 w-full rounded-full
                    border border-white/80 dark:border-white/10
                    bg-white/65 dark:bg-white/[0.06]
                    pl-11 pr-4 text-sm
                    text-navy-800 dark:text-white
                    shadow-inner outline-none
                    backdrop-blur-xl
                    transition-all duration-300
                    placeholder:text-navy-300
                    dark:placeholder:text-slate-500
                    focus:border-violet-300
                    focus:ring-4 focus:ring-violet-500/10
                  "
                />
              </form>

              {/* Mobile quick actions */}
              <div className="mb-3 grid grid-cols-2 gap-2 min-[460px]:hidden">
                <Link
                  to="/student/wishlist"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex items-center justify-center gap-2
                    rounded-2xl border border-white/70
                    bg-white/55 px-3 py-3 text-sm font-semibold
                    text-navy-700 transition-colors
                    hover:text-violet-600
                    dark:border-white/10 dark:bg-white/[0.05]
                    dark:text-slate-200
                  "
                >
                  <Heart size={17} />
                  Wishlist
                  {wishlistCourses.length > 0 && (
                    <span className="rounded-full bg-violet-600 px-1.5 py-0.5 text-[10px] text-white">
                      {badgeCount(wishlistCourses.length)}
                    </span>
                  )}
                </Link>

                <Link
                  to="/student/cart"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex items-center justify-center gap-2
                    rounded-2xl border border-white/70
                    bg-white/55 px-3 py-3 text-sm font-semibold
                    text-navy-700 transition-colors
                    hover:text-violet-600
                    dark:border-white/10 dark:bg-white/[0.05]
                    dark:text-slate-200
                  "
                >
                  <ShoppingCart size={17} />
                  Cart
                  {cartCourses.length > 0 && (
                    <span className="rounded-full bg-violet-600 px-1.5 py-0.5 text-[10px] text-white">
                      {badgeCount(cartCourses.length)}
                    </span>
                  )}
                </Link>
              </div>

              {/* Responsive navigation links */}
              <nav
                aria-label="Mobile navigation"
                className="
                  grid grid-cols-2 gap-2
                  sm:grid-cols-3 lg:grid-cols-4
                "
              >
                {navLinks.map((link, index) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    style={{
                      animationDelay: `${index * 45}ms`,
                    }}
                    className={({ isActive }) => `
                      flex items-center justify-center
                      rounded-2xl border px-3 py-3
                      text-center text-sm font-semibold
                      transition-all duration-300
                      ${
                        mobileOpen
                          ? 'animate-[navbarItem_0.4s_ease-out_both]'
                          : ''
                      }
                      ${
                        isActive
                          ? `
                            border-transparent
                            bg-gradient-to-r from-violet-600 to-indigo-600
                            text-white
                            shadow-[0_8px_22px_rgba(124,58,237,0.25)]
                          `
                          : `
                            border-white/70 dark:border-white/[0.08]
                            bg-white/50 dark:bg-white/[0.04]
                            text-navy-700 dark:text-slate-200
                            hover:border-violet-300/60
                            hover:bg-white/85 dark:hover:bg-white/[0.08]
                            hover:text-violet-600 dark:hover:text-violet-300
                          `
                      }
                    `}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              {/* Mobile account section */}
              <div
                className="
                  mt-3 border-t border-navy-100/70
                  pt-3 dark:border-white/10
                "
              >
                {user ? (
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <Link
                      to={roleHome[user.role] || '/'}
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex items-center justify-center gap-2
                        rounded-full border border-violet-200
                        bg-violet-50 px-4 py-3
                        text-sm font-bold text-violet-700
                        transition-colors
                        hover:bg-violet-100
                        dark:border-violet-400/20
                        dark:bg-violet-500/10
                        dark:text-violet-300
                      "
                    >
                      <LayoutDashboard size={17} />
                      Dashboard
                    </Link>

                    <Link
                      to={`/${user.role}/profile`}
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex items-center justify-center gap-2
                        rounded-full border border-white/70
                        bg-white/55 px-4 py-3
                        text-sm font-bold text-navy-700
                        dark:border-white/10
                        dark:bg-white/[0.05]
                        dark:text-slate-200
                      "
                    >
                      <UserRound size={17} />
                      Profile
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="
                        flex items-center justify-center gap-2
                        rounded-full border border-red-200
                        bg-red-50 px-4 py-3
                        text-sm font-bold text-red-500
                        transition-colors
                        hover:bg-red-100
                        dark:border-red-400/20
                        dark:bg-red-500/10
                      "
                    >
                      <LogOut size={17} />
                      Log out
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <Link
                      to="/login"
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex items-center justify-center
                        rounded-full border border-violet-200
                        bg-white/60 px-4 py-3
                        text-sm font-bold text-violet-600
                        transition-colors hover:bg-violet-50
                        dark:border-white/10
                        dark:bg-white/[0.05]
                        dark:text-violet-300
                      "
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex items-center justify-center
                        rounded-full
                        bg-gradient-to-r from-violet-600 to-indigo-600
                        px-4 py-3 text-sm font-bold text-white
                        shadow-[0_10px_24px_rgba(124,58,237,0.3)]
                        transition-transform hover:-translate-y-0.5
                      "
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile background overlay */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-40 bg-navy-950/30
          backdrop-blur-[3px] transition-opacity duration-300
          xl:hidden
          ${
            mobileOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />

      {/* Component animations */}
      <style>{`
        @keyframes navbarShine {
          0%, 15% {
            transform: translateX(-120%) rotate(20deg);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          55%, 100% {
            transform: translateX(450%) rotate(20deg);
            opacity: 0;
          }
        }

        @keyframes navbarGlow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
            opacity: 0.55;
          }
          50% {
            transform: translate3d(35px, 12px, 0) scale(1.15);
            opacity: 0.85;
          }
        }

        @keyframes navbarMenu {
          from {
            opacity: 0;
            transform: translateY(-8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes navbarItem {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          header *,
          header *::before,
          header *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

function ProfileMenuLink({
  to,
  icon: Icon,
  children,
  onClick,
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        flex items-center gap-3 rounded-xl
        px-3 py-2.5 text-sm font-semibold
        text-navy-700 transition-all duration-200
        hover:bg-violet-50 hover:text-violet-600
        dark:text-slate-200
        dark:hover:bg-violet-500/10
        dark:hover:text-violet-300
      "
    >
      <span
        className="
          flex h-8 w-8 items-center justify-center rounded-full
          bg-navy-50 text-navy-500
          dark:bg-white/[0.06] dark:text-slate-300
        "
      >
        <Icon size={16} />
      </span>
      {children}
    </Link>
  );
}