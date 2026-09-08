import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';
import {
  ArrowRight,
  PlayCircle,
  Star,
  CheckCircle2,
  Sparkles,
  Quote,
  ShieldCheck,
  Zap,
  Users,
  BookOpen,
  GraduationCap,
  Layers3,
  Heart,
} from 'lucide-react';
import { categories } from '../../data/categories';
import { courses } from '../../data/courses';
import { instructors } from '../../data/instructors';
import CourseCard from '../../components/CourseCard';
import Rating from '../../components/Rating';

const stats = [
  { label: 'Happy Students', value: 10000, suffix: '+', description: 'Learning worldwide', icon: Users, gradient: 'from-blue-500 via-indigo-500 to-violet-600', shadow: 'shadow-blue-500/30', glow: 'bg-blue-500/10' },
  { label: 'Premium Courses', value: 500, suffix: '+', description: 'Expert-led programs', icon: BookOpen, gradient: 'from-violet-500 via-purple-500 to-fuchsia-600', shadow: 'shadow-violet-500/30', glow: 'bg-violet-500/10' },
  { label: 'Expert Instructors', value: 100, suffix: '+', description: 'Industry professionals', icon: GraduationCap, gradient: 'from-cyan-500 via-sky-500 to-blue-600', shadow: 'shadow-cyan-500/30', glow: 'bg-cyan-500/10' },
  { label: 'Course Categories', value: 50, suffix: '+', description: 'Explore your passion', icon: Layers3, gradient: 'from-orange-400 via-amber-500 to-rose-500', shadow: 'shadow-orange-500/30', glow: 'bg-orange-500/10' },
  { label: 'Student Satisfaction', value: 95, suffix: '%', description: 'Trusted by learners', icon: Heart, gradient: 'from-rose-500 via-pink-500 to-red-600', shadow: 'shadow-rose-500/30', glow: 'bg-rose-500/10' },
];

const categoryThemes = [
  { gradient: 'from-violet-500 via-purple-500 to-indigo-600', iconBg: 'bg-violet-50 dark:bg-violet-500/10', iconText: 'text-violet-600 dark:text-violet-300', border: 'group-hover:border-violet-300/80 dark:group-hover:border-violet-500/40', glow: 'bg-violet-500/20' },
  { gradient: 'from-blue-500 via-sky-500 to-cyan-500', iconBg: 'bg-blue-50 dark:bg-blue-500/10', iconText: 'text-blue-600 dark:text-blue-300', border: 'group-hover:border-blue-300/80 dark:group-hover:border-blue-500/40', glow: 'bg-blue-500/20' },
  { gradient: 'from-emerald-500 via-teal-500 to-cyan-500', iconBg: 'bg-emerald-50 dark:bg-emerald-500/10', iconText: 'text-emerald-600 dark:text-emerald-300', border: 'group-hover:border-emerald-300/80 dark:group-hover:border-emerald-500/40', glow: 'bg-emerald-500/20' },
  { gradient: 'from-orange-400 via-amber-500 to-rose-500', iconBg: 'bg-orange-50 dark:bg-orange-500/10', iconText: 'text-orange-600 dark:text-orange-300', border: 'group-hover:border-orange-300/80 dark:group-hover:border-orange-500/40', glow: 'bg-orange-500/20' },
  { gradient: 'from-fuchsia-500 via-pink-500 to-rose-500', iconBg: 'bg-fuchsia-50 dark:bg-fuchsia-500/10', iconText: 'text-fuchsia-600 dark:text-fuchsia-300', border: 'group-hover:border-fuchsia-300/80 dark:group-hover:border-fuchsia-500/40', glow: 'bg-fuchsia-500/20' },
  { gradient: 'from-indigo-500 via-blue-500 to-violet-600', iconBg: 'bg-indigo-50 dark:bg-indigo-500/10', iconText: 'text-indigo-600 dark:text-indigo-300', border: 'group-hover:border-indigo-300/80 dark:group-hover:border-indigo-500/40', glow: 'bg-indigo-500/20' },
  { gradient: 'from-rose-500 via-red-500 to-orange-500', iconBg: 'bg-rose-50 dark:bg-rose-500/10', iconText: 'text-rose-600 dark:text-rose-300', border: 'group-hover:border-rose-300/80 dark:group-hover:border-rose-500/40', glow: 'bg-rose-500/20' },
  { gradient: 'from-cyan-500 via-blue-500 to-indigo-600', iconBg: 'bg-cyan-50 dark:bg-cyan-500/10', iconText: 'text-cyan-600 dark:text-cyan-300', border: 'group-hover:border-cyan-300/80 dark:group-hover:border-cyan-500/40', glow: 'bg-cyan-500/20' },
];

function useCountUp(target, active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame;
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);
  return value;
}

function StatCounter({ stat, active }) {
  const value = useCountUp(stat.value, active);
  const Icon = stat.icon;

  return (
    <div className="group relative min-w-0 w-full h-full">
      <div className={`absolute -inset-px rounded-[18px] min-[380px]:rounded-[22px] bg-gradient-to-br ${stat.gradient} opacity-20 transition-all duration-500 group-hover:opacity-70`} />

      <div className="relative flex h-full min-h-[150px] flex-col items-center justify-center overflow-hidden rounded-[17px] border border-white/80 bg-white/85 px-2.5 py-4 text-center shadow-[0_10px_30px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:shadow-[0_20px_45px_rgba(79,70,229,0.15)] dark:border-white/10 dark:bg-navy-900/85 min-[380px]:min-h-[185px] min-[380px]:rounded-[21px] min-[380px]:px-3 min-[380px]:py-5 sm:px-4 sm:py-6 lg:group-hover:-translate-y-2">
        <div className={`pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full ${stat.glow} blur-2xl transition-transform duration-500 group-hover:scale-150`} />
        <div className={`absolute left-1/2 top-0 h-[3px] w-12 -translate-x-1/2 rounded-full bg-gradient-to-r ${stat.gradient} transition-all duration-500 group-hover:w-24`} />

        <div className={`relative mx-auto mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg ${stat.shadow} transition-all duration-500 group-hover:-rotate-3 group-hover:scale-105 min-[380px]:mb-4 min-[380px]:h-12 min-[380px]:w-12 min-[380px]:rounded-2xl sm:group-hover:scale-110`}>
          <Icon className="h-[19px] w-[19px] min-[380px]:h-[22px] min-[380px]:w-[22px]" strokeWidth={2.2} />
          <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
        </div>

        <p className="relative whitespace-nowrap font-display text-[24px] font-black leading-none tracking-tight text-navy-900 dark:text-white min-[360px]:text-[26px] min-[380px]:text-3xl sm:text-[32px]">
          {value.toLocaleString('en-IN')}
          <span className={`ml-0.5 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.suffix}</span>
        </p>
        <h3 className="relative mt-2 break-words text-[11px] font-bold leading-tight text-navy-800 dark:text-slate-100 min-[380px]:text-xs sm:text-sm">{stat.label}</h3>
        <p className="relative mt-1 hidden text-[10px] leading-relaxed text-navy-400 dark:text-slate-400 min-[360px]:block sm:text-xs">{stat.description}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const statsRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);
  const featured = courses.filter((c) => c.isBestseller).slice(0, 4);
  const testimonials = [
    { name: 'Simran Kaur', role: 'Marketing Executive', avatar: 'https://i.pravatar.cc/80?img=20', quote: 'I went from zero to running paid campaigns for my company within six weeks. The instructors actually work in the field.' },
    { name: 'Aman Gupta', role: 'Frontend Developer', avatar: 'https://i.pravatar.cc/80?img=33', quote: 'The React bootcamp is the most practical course I have taken online. I shipped a real project by the end of it.' },
    { name: 'Tara Bhatt', role: 'Freelance Photographer', avatar: 'https://i.pravatar.cc/80?img=25', quote: 'Clear, well-paced, and the certificate actually helped me land my first paid shoot.' },
  ];

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      setStatsActive(true);
      return undefined;
    }
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setStatsActive(true);
        obs.disconnect();
      }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="w-full min-w-0 overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white dark:bg-navy-950">
        <div className="absolute inset-0 bg-violet-glow" />
        {/* decorative glow blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-electric-400/20 blur-3xl" />

        <div className="container-shell relative grid items-center gap-8 px-4 py-10 min-[380px]:py-12 sm:gap-10 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:py-28">
          <div className="relative z-10 min-w-0 text-center lg:text-left">
            <span className="badge bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300 mb-5 ring-1 ring-violet-200/60 dark:ring-violet-500/20 shadow-sm">
              <Sparkles size={12} className="animate-pulse" /> Learn • Grow • Succeed
            </span>
            <h1 className="font-display text-[clamp(2rem,10vw,2.35rem)] leading-[1.08] sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-navy-900 dark:text-white">
              Learn New Skills.<br />
              <span className="relative inline-block bg-gradient-to-r from-electric-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Build Your Future.
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-navy-500 dark:text-slate-400 min-[380px]:text-base sm:mt-5 sm:text-lg lg:mx-0">
              Learn from expert instructors through practical courses designed to help you grow your skills and achieve your goals.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap lg:justify-start">
              <Link
                to="/courses"
                className="btn-primary w-full sm:w-auto justify-center !px-7 !py-3.5 text-[15px] shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Courses <ArrowRight size={16} />
              </Link>
              <Link
                to="/register"
                className="btn-secondary w-full sm:w-auto justify-center !px-7 !py-3.5 text-[15px] hover:-translate-y-0.5 transition-all duration-300"
              >
                Become an Instructor
              </Link>
            </div>

            <div className="mt-9 flex flex-col min-[380px]:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                {[14, 21, 36, 45].map((n) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/60?img=${n}`}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-white dark:border-navy-950 object-cover shadow-md"
                  />
                ))}
                <span className="h-9 w-9 rounded-full border-2 border-white dark:border-navy-950 bg-violet-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md">
                  +9k
                </span>
              </div>
              <p className="text-sm text-center min-[380px]:text-left text-navy-500 dark:text-slate-400">
                <span className="font-semibold text-navy-800 dark:text-slate-200">12,000+</span> learners already onboard
              </p>
            </div>

            <div className="mx-auto mt-7 grid max-w-[270px] grid-cols-1 items-center justify-center gap-2 text-left text-xs text-navy-400 dark:text-slate-500 min-[420px]:max-w-none min-[420px]:grid-cols-3 min-[420px]:gap-3 sm:mt-8 lg:mx-0 lg:flex lg:justify-start lg:gap-x-6">
              <span className="inline-flex items-center justify-start gap-1.5 min-[420px]:justify-center lg:justify-start"><ShieldCheck size={14} className="shrink-0 text-emerald-500" /> Certified courses</span>
              <span className="inline-flex items-center justify-start gap-1.5 min-[420px]:justify-center lg:justify-start"><Zap size={14} className="shrink-0 text-amber-500" /> Learn at your pace</span>
              <span className="inline-flex items-center justify-start gap-1.5 min-[420px]:justify-center lg:justify-start"><CheckCircle2 size={14} className="shrink-0 text-violet-500" /> Lifetime access</span>
            </div>
          </div>

          <div className="relative mx-auto mt-1 w-full min-w-0 max-w-[760px] pb-5 min-[380px]:pb-8 sm:pb-0 lg:mt-0">
            <div className="absolute -inset-4 sm:-inset-7 rounded-[2rem] bg-gradient-to-tr from-violet-500/35 via-electric-500/20 to-fuchsia-400/15 blur-3xl" />
            <div className="relative rounded-[1.35rem] sm:rounded-[1.75rem] bg-white/95 dark:bg-navy-900/95 p-2 sm:p-3 shadow-[0_30px_80px_-24px_rgba(76,29,149,0.45)] ring-1 ring-black/5 dark:ring-white/10 lg:rotate-[-1.5deg] hover:rotate-0 hover:scale-[1.01] transition-transform duration-500">
              {/* browser chrome bar */}
              <div className="flex items-center gap-1.5 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-3 h-5 flex-1 rounded-full bg-navy-50 dark:bg-white/5" />
              </div>
              <div className="overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-slate-50 to-violet-50 dark:from-navy-950 dark:to-navy-900 ring-1 ring-black/5 dark:ring-white/10">
                <img
                  src="/hero-image.png"
                  alt="Student dashboard preview"
                  className="block aspect-[16/10] h-auto w-full min-h-[180px] max-h-[560px] object-contain object-center min-[380px]:min-h-[230px] sm:min-h-[360px] lg:min-h-[440px]"
                />
              </div>
            </div>
            <div className="hidden min-[380px]:flex absolute left-1 sm:-left-5 lg:-left-10 top-14 card-surface px-3 sm:px-4 py-2.5 sm:py-3 items-center gap-3 shadow-xl backdrop-blur-md bg-white/90 dark:bg-navy-900/80 animate-float scale-[0.82] sm:scale-100 origin-left">
              <span className="h-9 w-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={16} /></span>
              <div>
                <p className="text-sm font-bold text-navy-900 dark:text-white">98% Completion</p>
                <p className="text-xs text-navy-400">Course success rate</p>
              </div>
            </div>
            <div
              className="hidden min-[380px]:flex absolute right-1 sm:-right-5 lg:-right-8 bottom-3 sm:bottom-12 card-surface px-3 sm:px-4 py-2.5 sm:py-3 items-center gap-3 shadow-xl backdrop-blur-md bg-white/90 dark:bg-navy-900/80 animate-float scale-[0.82] sm:scale-100 origin-right"
              style={{ animationDelay: '1s' }}
            >
              <span className="h-9 w-9 rounded-full bg-amber-500/10 text-amber-500 flex items-center justify-center"><Star size={16} fill="currentColor" /></span>
              <div>
                <p className="text-sm font-bold text-navy-900 dark:text-white">4.9 Rating</p>
                <p className="text-xs text-navy-400">From 40k+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM STATS */}
      <section
        ref={statsRef}
        className="relative overflow-hidden border-y border-violet-100/80 bg-gradient-to-br from-slate-50 via-white to-violet-50/80 py-10 dark:border-white/5 dark:from-navy-950 dark:via-navy-950 dark:to-violet-950/30 min-[380px]:py-12 sm:py-16"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{ backgroundImage: 'radial-gradient(circle, #6d28d9 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-20 h-80 w-80 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="container-shell relative min-w-0 px-3 min-[380px]:px-4 sm:px-6">
          <div className="mx-auto mb-7 max-w-2xl px-1 text-center min-[380px]:mb-8 sm:mb-10">
            <span className="inline-flex max-w-full items-center justify-center gap-1.5 rounded-full border border-violet-200/70 bg-white/80 px-2.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-violet-600 shadow-sm backdrop-blur-lg dark:border-violet-500/20 dark:bg-white/5 dark:text-violet-300 min-[380px]:px-3 min-[380px]:text-[11px] min-[380px]:tracking-[0.16em]">
              <Sparkles size={13} /> Our Growing Community
            </span>
            <h2 className="mt-3 font-display text-[clamp(1.55rem,7vw,1.875rem)] font-black leading-tight tracking-tight text-navy-900 dark:text-white min-[380px]:mt-4 sm:text-3xl">Trusted by Learners Around the World</h2>
            <p className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-navy-400 dark:text-slate-400 min-[380px]:text-sm sm:text-base">Join a powerful learning community built around practical skills, expert guidance and real career growth.</p>
          </div>

          <div className="grid grid-cols-2 items-stretch gap-2 min-[360px]:gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-5 [&>*:last-child]:col-span-2 sm:[&>*:last-child]:col-span-1">
            {stats.map((stat) => <StatCounter key={stat.label} stat={stat} active={statsActive} />)}
          </div>
        </div>
      </section>

      {/* PREMIUM CATEGORIES */}
      <section className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-white via-slate-50/80 to-white py-14 dark:border-white/5 dark:from-navy-950 dark:via-[#090d22] dark:to-navy-950 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)', backgroundSize: '25px 25px' }} />
        <div className="pointer-events-none absolute -left-28 top-10 h-72 w-72 rounded-full bg-violet-500/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-blue-500/15 blur-[110px]" />

        <div className="container-shell relative px-4 sm:px-6">
          <div className="mx-auto mb-9 max-w-3xl text-center sm:mb-12">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/85 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-600 shadow-sm backdrop-blur-xl dark:border-violet-500/20 dark:bg-white/5 dark:text-violet-300 sm:text-xs">
              <Layers3 size={14} /> Explore Categories
            </span>
            <h2 className="font-display text-[clamp(1.8rem,7vw,2.4rem)] font-black leading-[1.15] tracking-tight text-navy-900 dark:text-white lg:text-5xl">
              Learn the skills that move your{' '}
              <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">career forward</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-navy-400 dark:text-slate-400 sm:text-base">
              Choose a learning path, master practical skills and build real-world projects with guidance from industry experts.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 min-[420px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {categories.slice(0, 8).map((cat, index) => {
              const Icon = Icons[cat.icon] || Icons.BookOpen;
              const theme = categoryThemes[index % categoryThemes.length];
              const courseCount = Number(cat.courses || 0);

              return (
                <Link
                  key={cat.id}
                  to={`/courses?category=${encodeURIComponent(cat.id)}`}
                  aria-label={`Explore ${cat.name} courses`}
                  className={`group relative flex min-h-[210px] min-w-0 flex-col overflow-hidden rounded-[22px] border border-slate-200/80 bg-white/90 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_55px_rgba(76,29,149,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/[0.045] dark:shadow-[0_18px_45px_rgba(0,0,0,0.25)] dark:hover:bg-white/[0.07] sm:min-h-[230px] sm:p-6 ${theme.border}`}
                >
                  <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${theme.gradient} transition-transform duration-500 group-hover:scale-x-100`} />
                  <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full ${theme.glow} opacity-40 blur-3xl transition-all duration-500 group-hover:scale-125 group-hover:opacity-70`} />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:from-white/[0.04]" />

                  <div className="relative flex items-start justify-between">
                    <span className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconText} shadow-sm ring-1 ring-black/[0.03] transition-all duration-500 group-hover:-rotate-3 group-hover:scale-110 dark:ring-white/10`}>
                      <Icon size={24} strokeWidth={2.1} />
                    </span>
                    <span className="flex h-9 w-9 translate-x-2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:border-white/10 dark:bg-white/5 dark:text-white">
                      <Icons.ArrowUpRight size={17} />
                    </span>
                  </div>

                  <div className="relative mt-5">
                    <h3 className="font-display text-base font-extrabold leading-tight text-navy-900 dark:text-white sm:text-lg">{cat.name}</h3>
                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-navy-400 dark:text-slate-400 sm:text-sm">
                      {cat.description || `Build practical ${cat.name} skills with expert-led lessons and real projects.`}
                    </p>
                  </div>

                  <div className="relative mt-auto flex items-center justify-between border-t border-slate-100 pt-4 dark:border-white/10">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-500 dark:text-slate-300">
                      <PlayCircle size={15} className={theme.iconText} />
                      {courseCount.toLocaleString('en-IN')} {courseCount === 1 ? 'course' : 'courses'}
                    </span>
                    <span className={`text-[10px] font-extrabold uppercase tracking-[0.12em] ${theme.iconText}`}>Explore</span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-9 flex justify-center sm:mt-11">
            <Link to="/categories" className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-600/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 min-[420px]:w-auto">
              View All Categories
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* PREMIUM BESTSELLERS */}
      <section className="relative overflow-hidden bg-[#070a18] py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(124,58,237,0.22),transparent_32%),radial-gradient(circle_at_88%_80%,rgba(14,165,233,0.16),transparent_30%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.18) 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 animate-pulse rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 animate-pulse rounded-full bg-blue-500/15 blur-[110px]" style={{ animationDelay: '1.2s' }} />

        <div className="container-shell relative px-4 sm:px-6">
          <div className="mb-9 flex flex-col items-center gap-7 text-center lg:mb-12 lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-400/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-300 shadow-[0_0_25px_rgba(251,191,36,0.08)] backdrop-blur-xl sm:text-xs">
                <Star size={14} fill="currentColor" className="animate-pulse" /> Student Favourites
              </span>
              <h2 className="font-display text-[clamp(1.85rem,7vw,2.5rem)] font-black leading-[1.12] tracking-tight text-white lg:text-5xl">
                Learn from our most-loved{' '}
                <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-rose-400 bg-clip-text text-transparent">bestsellers</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Join thousands of learners in our highest-rated, career-focused courses—selected for practical projects, expert teaching and real results.
              </p>
            </div>

            <div className="grid w-full grid-cols-3 gap-2 sm:max-w-[500px] sm:gap-3 lg:max-w-[460px]">
              {[
                { icon: Icons.UsersRound, value: '25K+', label: 'Enrolments', color: 'text-violet-300', bg: 'bg-violet-400/10' },
                { icon: Icons.Star, value: '4.9/5', label: 'Avg. rating', color: 'text-amber-300', bg: 'bg-amber-400/10' },
                { icon: Icons.BadgeCheck, value: '100%', label: 'Expert-led', color: 'text-cyan-300', bg: 'bg-cyan-400/10' },
              ].map((item) => {
                const MetricIcon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.055] px-2 py-3 text-center shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08] sm:px-3 sm:py-4">
                    <span className={`mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-xl ${item.bg} ${item.color}`}><MetricIcon size={16} /></span>
                    <p className="text-sm font-black text-white sm:text-base">{item.value}</p>
                    <p className="mt-0.5 text-[9px] font-medium text-slate-500 sm:text-[11px]">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {featured.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {featured.map((course, index) => (
                <div key={course.id} className="group relative min-w-0">
                  <div className="absolute -inset-px rounded-[20px] bg-gradient-to-br from-amber-300/45 via-violet-500/25 to-blue-500/40 opacity-35 blur-[1px] transition-all duration-500 group-hover:opacity-100 group-hover:shadow-[0_0_35px_rgba(124,58,237,0.22)]" />
                  <div className="relative h-full rounded-[19px] bg-white transition-all duration-500 group-hover:-translate-y-2 dark:bg-navy-900">
                    <div className="pointer-events-none absolute left-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#090d1f]/90 px-2.5 py-1.5 text-[9px] font-extrabold uppercase tracking-wider text-amber-300 shadow-lg backdrop-blur-xl">
                      <Icons.Crown size={12} fill="currentColor" /> #{index + 1} Bestseller
                    </div>
                    <CourseCard course={course} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-12 text-center backdrop-blur-xl">
              <Icons.BookOpen className="mx-auto text-violet-300" size={32} />
              <h3 className="mt-4 font-display text-xl font-bold text-white">New bestsellers coming soon</h3>
              <p className="mt-2 text-sm text-slate-400">Explore our complete catalogue to start learning today.</p>
            </div>
          )}

          <div className="mt-9 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl sm:mt-11 sm:flex-row sm:p-5">
            <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:text-left">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 text-white shadow-lg shadow-violet-500/20">
                <Icons.ShieldCheck size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-white">Learn confidently, at your own pace</p>
                <p className="mt-1 text-xs text-slate-400">Lifetime access · Practical projects · Completion certificate</p>
              </div>
            </div>
            <Link to="/courses" className="group inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070a18] sm:w-auto">
              Browse All Courses
              <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="container-shell px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
          <div className="text-center sm:text-left">
            <span className="badge bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300 mb-3">Our Mentors</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Learn From The Best</h2>
            <p className="text-navy-400 dark:text-slate-400 mt-1.5">Practitioners currently working in the field, not just teaching from slides.</p>
          </div>
          <Link to="/instructors" className="flex self-center sm:self-auto items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {instructors.slice(0, 3).map((ins) => (
            <Link
              key={ins.id}
              to={`/instructor/${ins.id}`}
              className="relative card-surface p-5 sm:p-6 text-center overflow-hidden hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 hover:ring-1 hover:ring-violet-300/60 dark:hover:ring-violet-500/30"
            >
              <div className="absolute inset-x-0 -top-10 h-24 bg-gradient-to-br from-violet-500/10 via-electric-500/5 to-transparent" />
              <img
                src={ins.avatar}
                alt={ins.name}
                className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full mx-auto object-cover object-top mb-5 ring-4 ring-white dark:ring-navy-900 shadow-lg"
              />
              <p className="relative font-display font-bold text-navy-900 dark:text-white">{ins.name}</p>
              <p className="relative text-xs text-navy-400 mb-3">{ins.title}</p>
              <div className="relative flex justify-center"><Rating value={ins.rating} size={12} /></div>
              <p className="relative text-xs text-navy-400 mt-2">{ins.students.toLocaleString('en-IN')} students · {ins.courses} courses</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-navy-950 py-14 sm:py-20 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="container-shell relative px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-white/5 text-violet-300 ring-1 ring-white/10 mb-3">Testimonials</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">What learners are saying</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6 backdrop-blur-sm hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
              >
                <Quote className="absolute top-4 right-4 text-white/10" size={32} />
                <div className="flex text-amber-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-slate-300 mb-5 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-9 w-9 rounded-full object-cover ring-2 ring-white/10" />
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-slate-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-shell px-4 sm:px-6 py-14 sm:py-20">
        <div className="relative overflow-hidden rounded-xl bg-brand-gradient px-5 py-11 min-[380px]:px-7 sm:px-16 sm:py-16 text-center shadow-2xl shadow-violet-600/25">
          <div className="absolute inset-0 bg-violet-glow" />
          <div className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20">
              <PlayCircle className="text-white" size={28} />
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to start learning?</h2>
            <p className="text-white/80 max-w-lg mx-auto mb-7">Join thousands of learners building real, practical skills with Skillbridge today.</p>
            <Link
              to="/register"
              className="btn w-full sm:w-auto justify-center bg-white text-navy-900 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 !px-7 !py-3 font-semibold"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
