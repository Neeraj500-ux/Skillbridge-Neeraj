import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';
import { ArrowRight, PlayCircle, Star, CheckCircle2, Sparkles, Quote, ShieldCheck, Zap } from 'lucide-react';
import { categories } from '../../data/categories';
import { courses } from '../../data/courses';
import { instructors } from '../../data/instructors';
import CourseCard from '../../components/CourseCard';
import Rating from '../../components/Rating';

const stats = [
  { label: 'Students', value: 10000, suffix: '+' },
  { label: 'Courses', value: 500, suffix: '+' },
  { label: 'Expert Instructors', value: 100, suffix: '+' },
  { label: 'Categories', value: 50, suffix: '+' },
  { label: 'Student Satisfaction', value: 95, suffix: '%' },
];

function useCountUp(target, active) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
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
  return (
    <div className="text-center group">
      <p className="font-display text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-navy-900 to-navy-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110">
        {value.toLocaleString('en-IN')}{stat.suffix}
      </p>
      <p className="text-sm text-navy-400 dark:text-slate-400 mt-1">{stat.label}</p>
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
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setStatsActive(true);
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden bg-white dark:bg-navy-950">
        <div className="absolute inset-0 bg-violet-glow" />
        {/* decorative glow blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="pointer-events-none absolute top-1/2 -left-32 h-80 w-80 rounded-full bg-electric-400/20 blur-3xl" />

        <div className="container-shell relative py-14 sm:py-20 lg:py-28 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
          <div className="relative z-10 text-center lg:text-left">
            <span className="badge bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300 mb-5 ring-1 ring-violet-200/60 dark:ring-violet-500/20 shadow-sm">
              <Sparkles size={12} className="animate-pulse" /> Learn • Grow • Succeed
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.06] tracking-tight text-navy-900 dark:text-white">
              Learn New Skills.<br />
              <span className="relative inline-block bg-gradient-to-r from-electric-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                Build Your Future.
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-navy-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Learn from expert instructors through practical courses designed to help you grow your skills and achieve your goals.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              <Link
                to="/courses"
                className="btn-primary !px-7 !py-3.5 text-[15px] shadow-lg shadow-violet-600/25 hover:shadow-xl hover:shadow-violet-600/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Courses <ArrowRight size={16} />
              </Link>
              <Link
                to="/register"
                className="btn-secondary !px-7 !py-3.5 text-[15px] hover:-translate-y-0.5 transition-all duration-300"
              >
                Become an Instructor
              </Link>
            </div>

            <div className="mt-9 flex items-center justify-center lg:justify-start gap-4">
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
              <p className="text-sm text-navy-500 dark:text-slate-400">
                <span className="font-semibold text-navy-800 dark:text-slate-200">12,000+</span> learners already onboard
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-navy-400 dark:text-slate-500">
              <span className="inline-flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> Certified courses</span>
              <span className="inline-flex items-center gap-1.5"><Zap size={14} className="text-amber-500" /> Learn at your pace</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 size={14} className="text-violet-500" /> Lifetime access</span>
            </div>
          </div>

          <div className="relative mx-auto mt-3 w-full max-w-[760px] lg:mt-0">
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
                  className="block w-full h-auto min-h-[250px] sm:min-h-[360px] lg:min-h-[440px] max-h-[560px] object-contain object-center"
                />
              </div>
            </div>
            <div className="absolute left-2 sm:-left-5 lg:-left-10 top-14 card-surface px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-3 shadow-xl backdrop-blur-md bg-white/90 dark:bg-navy-900/80 animate-float scale-90 sm:scale-100 origin-left">
              <span className="h-9 w-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={16} /></span>
              <div>
                <p className="text-sm font-bold text-navy-900 dark:text-white">98% Completion</p>
                <p className="text-xs text-navy-400">Course success rate</p>
              </div>
            </div>
            <div
              className="absolute right-2 sm:-right-5 lg:-right-8 bottom-8 sm:bottom-12 card-surface px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-3 shadow-xl backdrop-blur-md bg-white/90 dark:bg-navy-900/80 animate-float scale-90 sm:scale-100 origin-right"
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

      {/* STATS */}
      <section
        ref={statsRef}
        className="relative border-y border-navy-100 dark:border-white/5 bg-navy-50/40 dark:bg-white/[0.02] backdrop-blur-sm"
      >
        <div className="container-shell py-10 grid grid-cols-2 sm:grid-cols-5 gap-6">
          {stats.map((s) => <StatCounter key={s.label} stat={s} active={statsActive} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-shell py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="badge bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300 mb-3">Categories</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Explore Categories</h2>
            <p className="text-navy-400 dark:text-slate-400 mt-1.5">Find the skill track that fits where you want to go next.</p>
          </div>
          <Link to="/categories" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((cat) => {
            const Icon = Icons[cat.icon] || Icons.BookOpen;
            return (
              <Link
                key={cat.id}
                to={`/courses?category=${cat.id}`}
                className="relative card-surface p-5 group overflow-hidden hover:shadow-lift hover:-translate-y-1.5 transition-all duration-300 hover:ring-1 hover:ring-violet-300/60 dark:hover:ring-violet-500/30"
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
      <section className="bg-navy-50/40 dark:bg-white/[0.02] py-20">
        <div className="container-shell">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="badge bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300 mb-3">
                <Star size={12} fill="currentColor" /> Bestsellers
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Featured Courses</h2>
              <p className="text-navy-400 dark:text-slate-400 mt-1.5">Our highest-rated, most-enrolled courses this month.</p>
            </div>
            <Link to="/courses" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
              Browse all <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        </div>
      </section>

      {/* INSTRUCTORS */}
      <section className="container-shell py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="badge bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300 mb-3">Our Mentors</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Learn From The Best</h2>
            <p className="text-navy-400 dark:text-slate-400 mt-1.5">Practitioners currently working in the field, not just teaching from slides.</p>
          </div>
          <Link to="/instructors" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors.slice(0, 3).map((ins) => (
            <Link
              key={ins.id}
              to={`/instructor/${ins.id}`}
              className="relative card-surface p-6 text-center overflow-hidden hover:shadow-lift transition-all duration-300 hover:-translate-y-1.5 hover:ring-1 hover:ring-violet-300/60 dark:hover:ring-violet-500/30"
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
      <section className="relative bg-navy-950 py-20 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-violet-600/10 blur-3xl" />
        <div className="container-shell relative">
          <div className="text-center mb-10">
            <span className="badge bg-white/5 text-violet-300 ring-1 ring-white/10 mb-3">Testimonials</span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white">What learners are saying</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="relative bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/[0.07] hover:-translate-y-1 transition-all duration-300"
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
      <section className="container-shell py-20">
        <div className="relative overflow-hidden rounded-xl bg-brand-gradient px-8 py-14 sm:px-16 sm:py-16 text-center shadow-2xl shadow-violet-600/25">
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
              className="btn bg-white text-navy-900 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-300 !px-7 !py-3 font-semibold"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
