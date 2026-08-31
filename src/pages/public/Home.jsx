import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import * as Icons from 'lucide-react';
import { ArrowRight, PlayCircle, Star, CheckCircle2 } from 'lucide-react';
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
    const duration = 1200;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      setValue(Math.floor(progress * target));
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
    <div className="text-center">
      <p className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">
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
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white dark:bg-navy-950">
        <div className="absolute inset-0 bg-violet-glow" />
        <div className="container-shell relative py-16 sm:py-20 lg:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="badge bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300 mb-5">
              <Star size={12} fill="currentColor" /> Learn • Grow • Succeed
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-[1.08] text-navy-900 dark:text-white">
              Learn New Skills.<br />
              <span className="bg-gradient-to-r from-electric-600 to-violet-600 bg-clip-text text-transparent">Build Your Future.</span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-navy-500 dark:text-slate-400 max-w-lg">
              Learn from expert instructors through practical courses designed to help you grow your skills and achieve your goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/courses" className="btn-primary !px-6 !py-3 text-[15px]">
                Explore Courses <ArrowRight size={16} />
              </Link>
              <Link to="/register" className="btn-secondary !px-6 !py-3 text-[15px]">
                Become an Instructor
              </Link>
            </div>
            <div className="mt-9 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[14, 21, 36, 45].map((n) => (
                  <img key={n} src={`https://i.pravatar.cc/60?img=${n}`} alt="" className="h-9 w-9 rounded-full border-2 border-white dark:border-navy-950 object-cover" />
                ))}
              </div>
              <p className="text-sm text-navy-500 dark:text-slate-400"><span className="font-semibold text-navy-800 dark:text-slate-200">12,000+</span> learners already onboard</p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="card-surface p-4 rotate-[-2deg]">
              <img src="https://picsum.photos/seed/hero-dashboard/560/380" alt="Student dashboard preview" className="rounded-md w-full" />
            </div>
            <div className="absolute -left-8 top-8 card-surface px-4 py-3 flex items-center gap-3 animate-float">
              <span className="h-9 w-9 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center"><CheckCircle2 size={16} /></span>
              <div>
                <p className="text-sm font-bold text-navy-900 dark:text-white">98% Completion</p>
                <p className="text-xs text-navy-400">Course success rate</p>
              </div>
            </div>
            <div className="absolute -right-6 bottom-10 card-surface px-4 py-3 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
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
      <section ref={statsRef} className="border-y border-navy-100 dark:border-white/5 bg-navy-50/40 dark:bg-white/[0.02]">
        <div className="container-shell py-10 grid grid-cols-2 sm:grid-cols-5 gap-6">
          {stats.map((s) => <StatCounter key={s.label} stat={s} active={statsActive} />)}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container-shell py-20">
        <div className="flex items-end justify-between mb-8">
          <div>
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
                className="card-surface p-5 group hover:shadow-lift hover:-translate-y-1 transition-all duration-250"
              >
                <span className="h-11 w-11 rounded-md bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={20} />
                </span>
                <p className="font-display font-bold text-sm text-navy-900 dark:text-white">{cat.name}</p>
                <p className="text-xs text-navy-400 mt-1">{cat.courses} courses</p>
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
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Learn From The Best</h2>
            <p className="text-navy-400 dark:text-slate-400 mt-1.5">Practitioners currently working in the field, not just teaching from slides.</p>
          </div>
          <Link to="/instructors" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-violet-600 dark:text-violet-300">
            View all <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {instructors.slice(0, 3).map((ins) => (
            <Link key={ins.id} to={`/instructor/${ins.id}`} className="card-surface p-6 text-center hover:shadow-lift transition-all duration-250 hover:-translate-y-1">
              <img src={ins.avatar} alt={ins.name} className="h-20 w-20 rounded-full mx-auto object-cover mb-4" />
              <p className="font-display font-bold text-navy-900 dark:text-white">{ins.name}</p>
              <p className="text-xs text-navy-400 mb-3">{ins.title}</p>
              <div className="flex justify-center"><Rating value={ins.rating} size={12} /></div>
              <p className="text-xs text-navy-400 mt-2">{ins.students.toLocaleString('en-IN')} students · {ins.courses} courses</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-navy-950 py-20">
        <div className="container-shell">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white text-center mb-10">What learners are saying</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex text-amber-400 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm text-slate-300 mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="h-9 w-9 rounded-full object-cover" />
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
        <div className="relative overflow-hidden rounded-xl bg-brand-gradient px-8 py-14 sm:px-16 sm:py-16 text-center">
          <div className="absolute inset-0 bg-violet-glow" />
          <div className="relative">
            <PlayCircle className="mx-auto text-white/80 mb-4" size={36} />
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">Ready to start learning?</h2>
            <p className="text-white/80 max-w-lg mx-auto mb-7">Join thousands of learners building real, practical skills with Skillbridge today.</p>
            <Link to="/register" className="btn bg-white text-navy-900 hover:shadow-lift !px-7 !py-3">Start Learning</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
