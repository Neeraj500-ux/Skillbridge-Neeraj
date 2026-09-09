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
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
      document.removeEventListener(
        'mousedown',
        handleOutsideClick
      );
    };
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const submitSearch = (event) => {
    event.preventDefault();

    const query = searchQuery.trim();

    if (query) {
      navigate(`/courses?q=${encodeURIComponent(query)}`);
    } else {
      navigate('/courses');
    }

    setMobileOpen(false);
  };

  const handleLogout = () => {
    logout();
    setProfileOpen(false);
    setMobileOpen(false);
    navigate('/');
  };

  const formatCount = (count) => {
    return count > 99 ? '99+' : count;
  };

  const actionButtonClass = `
    group
    relative
    flex
    h-10
    w-10
    shrink-0
    items-center
    justify-center
    overflow-visible
    rounded-full
    border
    border-white/80
    bg-white/70
    text-navy-600
    shadow-[0_6px_20px_rgba(15,23,42,0.10)]
    backdrop-blur-xl
    transition-all
    duration-300
    hover:-translate-y-0.5
    hover:scale-105
    hover:border-violet-300
    hover:bg-white
    hover:text-violet-600
    hover:shadow-[0_10px_26px_rgba(124,58,237,0.22)]
    focus:outline-none
    focus:ring-2
    focus:ring-violet-400/60
    dark:border-white/10
    dark:bg-white/[0.07]
    dark:text-slate-300
    dark:hover:bg-white/10
    dark:hover:text-violet-300
    sm:h-11
    sm:w-11
  `;

  const badgeClass = `
    pointer-events-none
    absolute
    right-0.5
    top-0.5
    z-20
    flex
    h-[15px]
    min-w-[15px]
    items-center
    justify-center
    rounded-full
    bg-gradient-to-r
    from-violet-600
    to-indigo-600
    px-1
    text-[8px]
    font-extrabold
    leading-none
    text-white
    ring-2
    ring-white
    shadow-[0_3px_10px_rgba(124,58,237,0.50)]
    dark:ring-navy-950
  `;

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 isolate w-full
          px-2.5 transition-all duration-500
          sm:px-4 lg:px-6
          ${
            scrolled
              ? 'pt-2 sm:pt-3'
              : 'pt-2 sm:pt-4'
          }
        `}
      >
        <div
          className={`
            relative mx-auto max-w-[1500px]
            overflow-visible
            rounded-[24px]
            border border-white/80
            bg-gradient-to-r
            from-white/85
            via-white/70
            to-violet-50/75
            backdrop-blur-[26px]
            backdrop-saturate-[1.8]
            transition-all
            duration-500
            dark:border-white/10
            dark:from-navy-950/90
            dark:via-navy-950/80
            dark:to-violet-950/60
            sm:rounded-[28px]
            ${
              scrolled
                ? `
                  -translate-y-0.5
                  shadow-[0_18px_55px_rgba(15,23,42,0.16),0_0_42px_rgba(124,58,237,0.12)]
                  dark:shadow-[0_20px_60px_rgba(0,0,0,0.45),0_0_36px_rgba(124,58,237,0.15)]
                `
                : `
                  shadow-[0_12px_40px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.75)]
                  dark:shadow-[0_15px_45px_rgba(0,0,0,0.35)]
                `
            }
          `}
        >
          {/* Decorative glow effects */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute inset-0
              overflow-hidden
              rounded-[inherit]
            "
          >
            <div
              className="
                absolute -left-12 -top-20
                h-40 w-40 rounded-full
                bg-violet-500/15 blur-3xl
              "
            />

            <div
              className="
                absolute -bottom-24 right-5
                h-44 w-44 rounded-full
                bg-blue-400/15 blur-3xl
              "
            />

            <div
              className="
                absolute inset-x-10 top-0
                h-px
                bg-gradient-to-r
                from-transparent
                via-white
                to-transparent
                opacity-90
              "
            />
          </div>

          <div
            className="
              relative
              flex h-[66px]
              items-center justify-between
              gap-2 px-3
              sm:h-[72px] sm:px-4
              lg:px-5
            "
          >
            {/* Logo */}

            <Link
              to="/"
              aria-label="Skillbridge home"
              className="
                group flex min-w-0 shrink-0
                items-center gap-2
                rounded-full
                focus:outline-none
                focus:ring-2
                focus:ring-violet-400/60
              "
            >
              <span
                className="
                  relative flex h-11 w-11
                  shrink-0 items-center justify-center
                  overflow-hidden rounded-full
                  border border-white/70
                  bg-gradient-to-br
                  from-violet-600
                  via-indigo-600
                  to-blue-500
                  text-white
                  shadow-[0_8px_24px_rgba(124,58,237,0.35)]
                  transition-all duration-500
                  group-hover:-rotate-6
                  group-hover:scale-105
                  group-hover:shadow-[0_12px_30px_rgba(124,58,237,0.50)]
                "
              >
                <span
                  className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-white/35
                    via-transparent
                    to-transparent
                  "
                />

                <GraduationCap
                  size={21}
                  strokeWidth={2.2}
                  className="relative z-10"
                />
              </span>

              <span className="hidden min-[380px]:block">
                <span
                  className="
                    block whitespace-nowrap
                    font-display text-[17px]
                    font-extrabold leading-none
                    tracking-tight text-navy-900
                    dark:text-white sm:text-lg
                  "
                >
                  Skillbridge
                </span>

                <span
                  className="
                    mt-1 hidden text-[9px]
                    font-semibold uppercase
                    tracking-[0.20em]
                    text-violet-500
                    dark:text-violet-300
                    sm:block
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
                hidden items-center gap-0.5
                rounded-full
                border border-white/80
                bg-white/45 p-1.5
                shadow-inner
                backdrop-blur-xl
                dark:border-white/10
                dark:bg-white/[0.04]
                xl:flex
              "
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `
                      relative whitespace-nowrap
                      rounded-full px-3.5 py-2
                      text-[13px] font-semibold
                      transition-all duration-300
                      focus:outline-none
                      focus:ring-2
                      focus:ring-violet-400/50
                      ${
                        isActive
                          ? `
                            bg-gradient-to-r
                            from-violet-600
                            to-indigo-600
                            text-white
                            shadow-[0_7px_18px_rgba(124,58,237,0.32)]
                          `
                          : `
                            text-navy-600
                            hover:bg-white/90
                            hover:text-violet-600
                            dark:text-slate-300
                            dark:hover:bg-white/[0.08]
                            dark:hover:text-violet-300
                          `
                      }
                    `
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Right side actions */}

            <div
              className="
                flex min-w-0 items-center
                gap-2 sm:gap-2.5
              "
            >
              {/* Search */}

              <form
                onSubmit={submitSearch}
                className="
                  group relative
                  hidden items-center
                  lg:flex xl:hidden 2xl:flex
                "
              >
                <Search
                  size={16}
                  className="
                    pointer-events-none
                    absolute left-3.5 z-10
                    text-navy-400
                    transition-colors
                    group-focus-within:text-violet-500
                  "
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="Search courses..."
                  aria-label="Search courses"
                  className="
                    h-11 w-44
                    rounded-full
                    border border-white/80
                    bg-white/65
                    py-2 pl-10 pr-4
                    text-sm text-navy-800
                    shadow-[0_5px_18px_rgba(15,23,42,0.07)]
                    outline-none
                    backdrop-blur-xl
                    transition-all duration-300
                    placeholder:text-navy-300
                    focus:w-52
                    focus:border-violet-300
                    focus:bg-white/95
                    focus:ring-4
                    focus:ring-violet-500/10
                    dark:border-white/10
                    dark:bg-white/[0.07]
                    dark:text-white
                    dark:placeholder:text-slate-500
                    dark:focus:bg-white/10
                    2xl:w-52
                    2xl:focus:w-60
                  "
                />
              </form>

              {/* Theme button */}

              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={actionButtonClass}
              >
                <span
                  className="
                    pointer-events-none
                    absolute inset-0
                    scale-0 rounded-full
                    bg-violet-500/10
                    transition-transform
                    duration-300
                    group-hover:scale-100
                  "
                />

                {theme === 'dark' ? (
                  <Sun
                    size={18}
                    className="
                      relative z-10
                      transition-transform
                      duration-500
                      group-hover:rotate-45
                    "
                  />
                ) : (
                  <Moon
                    size={18}
                    className="
                      relative z-10
                      transition-transform
                      duration-500
                      group-hover:-rotate-12
                    "
                  />
                )}
              </button>

              {/* Wishlist */}

              <Link
                to="/student/wishlist"
                aria-label={`Wishlist with ${wishlistCourses.length} courses`}
                className={`${actionButtonClass} hidden min-[450px]:flex`}
              >
                <Heart
                  size={18}
                  className="
                    relative z-10
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {wishlistCourses.length > 0 && (
                  <span className={badgeClass}>
                    {formatCount(wishlistCourses.length)}
                  </span>
                )}
              </Link>

              {/* Cart */}

              <Link
                to="/student/cart"
                aria-label={`Cart with ${cartCourses.length} courses`}
                className={`${actionButtonClass} hidden min-[450px]:flex`}
              >
                <ShoppingCart
                  size={18}
                  className="
                    relative z-10
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {cartCourses.length > 0 && (
                  <span className={badgeClass}>
                    {formatCount(cartCourses.length)}
                  </span>
                )}
              </Link>

              {/* User profile */}

              {user && (
                <div
                  ref={profileRef}
                  className="relative hidden sm:block"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setProfileOpen((value) => !value)
                    }
                    aria-label="Open profile menu"
                    aria-expanded={profileOpen}
                    className="
                      group flex h-11
                      items-center gap-2
                      rounded-full
                      border border-white/80
                      bg-white/70
                      py-1 pl-1 pr-2.5
                      text-navy-700
                      shadow-[0_6px_20px_rgba(15,23,42,0.09)]
                      backdrop-blur-xl
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:border-violet-300
                      hover:bg-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-violet-400/60
                      dark:border-white/10
                      dark:bg-white/[0.07]
                      dark:text-slate-200
                      dark:hover:bg-white/10
                    "
                  >
                    <span className="relative">
                      <img
                        src={user.avatar}
                        alt={user.name || 'User'}
                        className="
                          h-9 w-9 rounded-full
                          border-2 border-white
                          object-cover shadow-sm
                          dark:border-white/20
                        "
                      />

                      <span
                        className="
                          absolute bottom-0 right-0
                          h-2.5 w-2.5
                          rounded-full
                          border-2 border-white
                          bg-emerald-500
                          dark:border-navy-950
                        "
                      />
                    </span>

                    <ChevronDown
                      size={14}
                      className={`
                        text-navy-400
                        transition-transform
                        duration-300
                        ${
                          profileOpen
                            ? 'rotate-180'
                            : ''
                        }
                      `}
                    />
                  </button>

                  {profileOpen && (
                    <div
                      className="
                        absolute right-0
                        top-[calc(100%+12px)]
                        w-64 overflow-hidden
                        rounded-[22px]
                        border border-white/80
                        bg-white/95 p-2.5
                        shadow-[0_24px_70px_rgba(15,23,42,0.20)]
                        backdrop-blur-[24px]
                        dark:border-white/10
                        dark:bg-navy-950/95
                      "
                    >
                      <div
                        className="
                          mb-2 rounded-2xl
                          bg-gradient-to-br
                          from-violet-500/10
                          to-blue-500/10
                          px-3.5 py-3
                        "
                      >
                        <p
                          className="
                            truncate text-sm
                            font-bold text-navy-900
                            dark:text-white
                          "
                        >
                          {user.name || 'Welcome back'}
                        </p>

                        <p
                          className="
                            mt-0.5 truncate
                            text-xs text-navy-400
                            dark:text-slate-400
                          "
                        >
                          {user.email}
                        </p>
                      </div>

                      <ProfileLink
                        to={roleHome[user.role] || '/'}
                        icon={LayoutDashboard}
                        onClick={() => setProfileOpen(false)}
                      >
                        Dashboard
                      </ProfileLink>

                      <ProfileLink
                        to={`/${user.role}/profile`}
                        icon={UserRound}
                        onClick={() => setProfileOpen(false)}
                      >
                        Profile
                      </ProfileLink>

                      <ProfileLink
                        to={`/${user.role}/settings`}
                        icon={Settings}
                        onClick={() => setProfileOpen(false)}
                      >
                        Settings
                      </ProfileLink>

                      <div
                        className="
                          my-1.5 h-px
                          bg-navy-100
                          dark:bg-white/10
                        "
                      />

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="
                          flex w-full items-center
                          gap-3 rounded-xl
                          px-3 py-2.5
                          text-left text-sm
                          font-semibold text-red-500
                          transition-colors
                          hover:bg-red-50
                          dark:hover:bg-red-500/10
                        "
                      >
                        <LogOut size={17} />
                        Log out
                      </button>
                    </div>
                  )}
                </div>
              )}

              {!user && (
                <div className="hidden items-center gap-2 sm:flex">
                  <Link
                    to="/login"
                    className="
                      rounded-full px-4 py-2.5
                      text-sm font-bold
                      text-navy-700
                      transition-all duration-300
                      hover:bg-white/80
                      hover:text-violet-600
                      dark:text-slate-200
                    "
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    className="
                      rounded-full
                      bg-gradient-to-r
                      from-violet-600
                      to-indigo-600
                      px-4 py-2.5
                      text-sm font-bold
                      text-white
                      shadow-[0_9px_24px_rgba(124,58,237,0.32)]
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_13px_30px_rgba(124,58,237,0.44)]
                    "
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}

              <button
                type="button"
                onClick={() =>
                  setMobileOpen((value) => !value)
                }
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
                className={`
                  flex h-11 w-11
                  items-center justify-center
                  rounded-full border
                  transition-all duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-violet-400/60
                  xl:hidden
                  ${
                    mobileOpen
                      ? `
                        rotate-90
                        border-violet-500
                        bg-gradient-to-r
                        from-violet-600
                        to-indigo-600
                        text-white
                        shadow-[0_8px_22px_rgba(124,58,237,0.34)]
                      `
                      : `
                        border-white/80
                        bg-white/70
                        text-navy-700
                        shadow-[0_6px_20px_rgba(15,23,42,0.09)]
                        hover:border-violet-300
                        hover:text-violet-600
                        dark:border-white/10
                        dark:bg-white/[0.07]
                        dark:text-slate-200
                      `
                  }
                `}
              >
                {mobileOpen ? (
                  <X size={20} />
                ) : (
                  <Menu size={20} />
                )}
              </button>
            </div>
          </div>

          {/* Mobile and tablet navigation */}

          <div
            className={`
              overflow-hidden
              transition-all
              duration-500
              ease-in-out
              xl:hidden
              ${
                mobileOpen
                  ? 'max-h-[calc(100vh-100px)] opacity-100'
                  : 'pointer-events-none max-h-0 opacity-0'
              }
            `}
          >
            <div
              className="
                max-h-[calc(100vh-110px)]
                overflow-y-auto
                border-t
                border-navy-100/70
                px-3 pb-4 pt-3
                dark:border-white/10
                sm:px-4
              "
            >
              <form
                onSubmit={submitSearch}
                className="relative mb-3"
              >
                <Search
                  size={17}
                  className="
                    pointer-events-none
                    absolute left-4 top-1/2
                    -translate-y-1/2
                    text-navy-400
                  "
                />

                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) =>
                    setSearchQuery(event.target.value)
                  }
                  placeholder="What do you want to learn?"
                  className="
                    h-12 w-full
                    rounded-full
                    border border-white/80
                    bg-white/70
                    pl-11 pr-4
                    text-sm text-navy-800
                    outline-none
                    backdrop-blur-xl
                    transition-all
                    placeholder:text-navy-300
                    focus:border-violet-300
                    focus:ring-4
                    focus:ring-violet-500/10
                    dark:border-white/10
                    dark:bg-white/[0.07]
                    dark:text-white
                    dark:placeholder:text-slate-500
                  "
                />
              </form>

              <div className="mb-3 grid grid-cols-2 gap-2">
                <Link
                  to="/student/wishlist"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex items-center
                    justify-center gap-2
                    rounded-2xl
                    border border-white/80
                    bg-white/60
                    px-3 py-3
                    text-sm font-semibold
                    text-navy-700
                    transition-all
                    hover:border-violet-300
                    hover:text-violet-600
                    dark:border-white/10
                    dark:bg-white/[0.06]
                    dark:text-slate-200
                  "
                >
                  <Heart size={17} />
                  Wishlist

                  {wishlistCourses.length > 0 && (
                    <span
                      className="
                        rounded-full
                        bg-violet-600
                        px-1.5 py-0.5
                        text-[10px]
                        font-bold text-white
                      "
                    >
                      {formatCount(wishlistCourses.length)}
                    </span>
                  )}
                </Link>

                <Link
                  to="/student/cart"
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex items-center
                    justify-center gap-2
                    rounded-2xl
                    border border-white/80
                    bg-white/60
                    px-3 py-3
                    text-sm font-semibold
                    text-navy-700
                    transition-all
                    hover:border-violet-300
                    hover:text-violet-600
                    dark:border-white/10
                    dark:bg-white/[0.06]
                    dark:text-slate-200
                  "
                >
                  <ShoppingCart size={17} />
                  Cart

                  {cartCourses.length > 0 && (
                    <span
                      className="
                        rounded-full
                        bg-violet-600
                        px-1.5 py-0.5
                        text-[10px]
                        font-bold text-white
                      "
                    >
                      {formatCount(cartCourses.length)}
                    </span>
                  )}
                </Link>
              </div>

              <nav
                aria-label="Mobile navigation"
                className="
                  grid grid-cols-2
                  gap-2
                  sm:grid-cols-3
                  lg:grid-cols-4
                "
              >
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `
                        flex items-center
                        justify-center
                        rounded-2xl
                        border px-3 py-3
                        text-center text-sm
                        font-semibold
                        transition-all duration-300
                        ${
                          isActive
                            ? `
                              border-transparent
                              bg-gradient-to-r
                              from-violet-600
                              to-indigo-600
                              text-white
                              shadow-[0_8px_22px_rgba(124,58,237,0.28)]
                            `
                            : `
                              border-white/80
                              bg-white/60
                              text-navy-700
                              hover:border-violet-300
                              hover:bg-white
                              hover:text-violet-600
                              dark:border-white/10
                              dark:bg-white/[0.05]
                              dark:text-slate-200
                            `
                        }
                      `
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <div
                className="
                  mt-3 border-t
                  border-navy-100/70
                  pt-3
                  dark:border-white/10
                "
              >
                {user ? (
                  <div
                    className="
                      grid grid-cols-1
                      gap-2
                      sm:grid-cols-3
                    "
                  >
                    <Link
                      to={roleHome[user.role] || '/'}
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex items-center
                        justify-center gap-2
                        rounded-full
                        bg-violet-50
                        px-4 py-3
                        text-sm font-bold
                        text-violet-700
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
                        flex items-center
                        justify-center gap-2
                        rounded-full
                        bg-white/60
                        px-4 py-3
                        text-sm font-bold
                        text-navy-700
                        dark:bg-white/[0.06]
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
                        flex items-center
                        justify-center gap-2
                        rounded-full
                        bg-red-50
                        px-4 py-3
                        text-sm font-bold
                        text-red-500
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
                        flex items-center
                        justify-center
                        rounded-full
                        border border-violet-200
                        bg-white/60
                        px-4 py-3
                        text-sm font-bold
                        text-violet-600
                      "
                    >
                      Login
                    </Link>

                    <Link
                      to="/register"
                      onClick={() => setMobileOpen(false)}
                      className="
                        flex items-center
                        justify-center
                        rounded-full
                        bg-gradient-to-r
                        from-violet-600
                        to-indigo-600
                        px-4 py-3
                        text-sm font-bold
                        text-white
                        shadow-[0_10px_24px_rgba(124,58,237,0.32)]
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

      {/* Mobile overlay */}

      <button
        type="button"
        aria-label="Close mobile navigation"
        onClick={() => setMobileOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-navy-950/30
          backdrop-blur-[3px]
          transition-opacity
          duration-300
          xl:hidden
          ${
            mobileOpen
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }
        `}
      />
    </>
  );
}

function ProfileLink({
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
        flex items-center
        gap-3 rounded-xl
        px-3 py-2.5
        text-sm font-semibold
        text-navy-700
        transition-all duration-200
        hover:bg-violet-50
        hover:text-violet-600
        dark:text-slate-200
        dark:hover:bg-violet-500/10
        dark:hover:text-violet-300
      "
    >
      <span
        className="
          flex h-8 w-8
          items-center justify-center
          rounded-full
          bg-navy-50
          text-navy-500
          dark:bg-white/[0.07]
          dark:text-slate-300
        "
      >
        <Icon size={16} />
      </span>

      {children}
    </Link>
  );
}