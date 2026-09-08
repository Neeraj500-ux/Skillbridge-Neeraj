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

      {/* CATEGORIES */}
      <section className="container-shell px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
          <div className="text-center sm:text-left">
            <span className="badge bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300 mb-3">Categories</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Explore Categories</h2>
            <p className="text-navy-400 dark:text-slate-400 mt-1.5">Find the skill track that fits where you want to go next.</p>
          </div>
          <Link to="/categories" className="flex self-center sm:self-auto items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categories.slice(0, 8).map((cat) => {
            const Icon = Icons[cat.icon] || Icons.BookOpen;
            return (
              <Link
                key={cat.id}
                to={`/courses?category=${cat.id}`}
                className="relative card-surface p-4 sm:p-5 group overflow-hidden hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 hover:ring-1 hover:ring-violet-300/60 dark:hover:ring-violet-500/30"
              >
                <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-violet-500/5 group-hover:bg-violet-500/10 transition-colors duration-300" />
                <span className="relative h-11 w-11 rounded-md bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-500/10 dark:to-violet-500/5 text-violet-600 dark:text-violet-300 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon size={20} />
                </span>
                <p className="relative font-display font-bold text-sm text-navy-900 dark:text-white">{cat.name}</p>
                <p className="relative text-xs text-navy-400 mt-1">{cat.courses} courses</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="bg-navy-50/40 dark:bg-white/[0.02] py-14 sm:py-20">
        <div className="container-shell px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7 sm:mb-8">
            <div className="text-center sm:text-left">
              <span className="badge bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300 mb-3">
                <Star size={12} fill="currentColor" /> Bestsellers
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Featured Courses</h2>
              <p className="text-navy-400 dark:text-slate-400 mt-1.5">Our highest-rated, most-enrolled courses this month.</p>
            </div>
            <Link to="/courses" className="flex self-center sm:self-auto items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
              Browse all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {featured.map((c) => <CourseCard key={c.id} course={c} />)}
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
