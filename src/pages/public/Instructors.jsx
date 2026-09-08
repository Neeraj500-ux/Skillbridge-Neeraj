import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  GraduationCap,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';
import { instructors } from '../../data/instructors';
import Rating from '../../components/Rating';

const cardThemes = [
  { gradient: 'from-violet-500 via-purple-500 to-indigo-600', glow: 'bg-violet-500/20', text: 'text-violet-600 dark:text-violet-300', soft: 'bg-violet-50 dark:bg-violet-500/10' },
  { gradient: 'from-blue-500 via-sky-500 to-cyan-500', glow: 'bg-blue-500/20', text: 'text-blue-600 dark:text-blue-300', soft: 'bg-blue-50 dark:bg-blue-500/10' },
  { gradient: 'from-fuchsia-500 via-pink-500 to-rose-500', glow: 'bg-fuchsia-500/20', text: 'text-fuchsia-600 dark:text-fuchsia-300', soft: 'bg-fuchsia-50 dark:bg-fuchsia-500/10' },
  { gradient: 'from-emerald-500 via-teal-500 to-cyan-500', glow: 'bg-emerald-500/20', text: 'text-emerald-600 dark:text-emerald-300', soft: 'bg-emerald-50 dark:bg-emerald-500/10' },
  { gradient: 'from-orange-400 via-amber-500 to-rose-500', glow: 'bg-orange-500/20', text: 'text-orange-600 dark:text-orange-300', soft: 'bg-orange-50 dark:bg-orange-500/10' },
  { gradient: 'from-indigo-500 via-blue-500 to-violet-600', glow: 'bg-indigo-500/20', text: 'text-indigo-600 dark:text-indigo-300', soft: 'bg-indigo-50 dark:bg-indigo-500/10' },
];

export default function Instructors() {
  const totalStudents = instructors.reduce((sum, ins) => sum + Number(ins.students || 0), 0);
  const totalCourses = instructors.reduce((sum, ins) => sum + Number(ins.courses || 0), 0);
  const averageRating = instructors.length
    ? instructors.reduce((sum, ins) => sum + Number(ins.rating || 0), 0) / instructors.length
    : 0;

  const highlights = [
    { icon: Users, value: `${totalStudents.toLocaleString('en-IN')}+`, label: 'Students mentored', color: 'text-violet-600 dark:text-violet-300', bg: 'bg-violet-50 dark:bg-violet-500/10' },
    { icon: BookOpen, value: `${totalCourses}+`, label: 'Expert courses', color: 'text-blue-600 dark:text-blue-300', bg: 'bg-blue-50 dark:bg-blue-500/10' },
    { icon: Star, value: `${averageRating.toFixed(1)}/5`, label: 'Average rating', color: 'text-amber-600 dark:text-amber-300', bg: 'bg-amber-50 dark:bg-amber-500/10' },
    { icon: BadgeCheck, value: '100%', label: 'Verified experts', color: 'text-emerald-600 dark:text-emerald-300', bg: 'bg-emerald-50 dark:bg-emerald-500/10' },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#050816]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-28 top-20 h-80 w-80 rounded-full bg-violet-500/15 blur-[115px]" />
        <div className="absolute -right-28 top-72 h-80 w-80 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #7c3aed 1px, transparent 1px)', backgroundSize: '26px 26px' }} />
      </div>

      <div className="container-shell relative px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <section className="mx-auto max-w-4xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200/80 bg-white/85 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.18em] text-violet-600 shadow-sm backdrop-blur-xl dark:border-violet-500/20 dark:bg-white/5 dark:text-violet-300 sm:text-xs">
            <Sparkles size={14} /> World-class mentorship
          </span>
          <h1 className="font-display text-[clamp(2rem,8vw,3rem)] font-black leading-[1.1] tracking-tight text-navy-900 dark:text-white lg:text-6xl">
            Meet the experts behind your{' '}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">next breakthrough</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-navy-400 dark:text-slate-400 sm:text-base">
            Learn directly from accomplished practitioners who bring current industry knowledge, practical projects and real career experience to every lesson.
          </p>
        </section>

        <section className="mx-auto mt-9 grid max-w-5xl grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-4 sm:gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-white/80 bg-white/85 px-3 py-4 text-center shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.045] sm:px-4 sm:py-5">
                <span className={`mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.color}`}><Icon size={19} /></span>
                <p className="font-display text-lg font-black text-navy-900 dark:text-white sm:text-xl">{item.value}</p>
                <p className="mt-1 text-[10px] font-medium text-navy-400 dark:text-slate-400 sm:text-xs">{item.label}</p>
              </div>
            );
          })}
        </section>

        {instructors.length > 0 ? (
          <section className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {instructors.map((ins, index) => {
              const theme = cardThemes[index % cardThemes.length];
              return (
                <Link
                  key={ins.id}
                  to={`/instructor/${ins.id}`}
                  aria-label={`View ${ins.name}'s instructor profile`}
                  className="group relative min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
                >
                  <div className={`absolute -inset-px rounded-[25px] bg-gradient-to-br ${theme.gradient} opacity-20 transition-all duration-500 group-hover:opacity-75 group-hover:shadow-[0_20px_55px_rgba(79,70,229,0.18)]`} />
                  <article className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,0.07)] backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 dark:border-white/10 dark:bg-navy-900/90 sm:p-6">
                    <div className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full ${theme.glow} blur-3xl transition-transform duration-500 group-hover:scale-125`} />
                    <div className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r ${theme.gradient} transition-transform duration-500 group-hover:scale-x-100`} />

                    <div className="relative mx-auto mb-5">
                      <div className={`absolute -inset-2 rounded-full bg-gradient-to-br ${theme.gradient} opacity-25 blur-md transition-opacity duration-500 group-hover:opacity-55`} />
                      <img src={ins.avatar} alt={ins.name} className="relative h-24 w-24 rounded-full border-4 border-white object-cover object-top shadow-xl dark:border-navy-900 sm:h-28 sm:w-28" />
                      <span className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-emerald-500 text-white shadow-md dark:border-navy-900">
                        <BadgeCheck size={16} />
                      </span>
                    </div>

                    <h2 className="relative font-display text-lg font-extrabold text-navy-900 dark:text-white sm:text-xl">{ins.name}</h2>
                    <p className={`relative mt-1 text-xs font-semibold ${theme.text}`}>{ins.title}</p>
                    <div className="relative mt-3 flex items-center justify-center gap-2">
                      <Rating value={ins.rating} size={13} />
                      <span className="text-xs font-bold text-navy-600 dark:text-slate-300">{Number(ins.rating || 0).toFixed(1)}</span>
                    </div>

                    <div className="relative my-5 grid grid-cols-2 divide-x divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/80 py-3 dark:divide-white/10 dark:border-white/10 dark:bg-white/[0.035]">
                      <div><p className="text-sm font-black text-navy-900 dark:text-white">{Number(ins.students || 0).toLocaleString('en-IN')}+</p><p className="mt-0.5 text-[10px] text-navy-400 dark:text-slate-500">Students</p></div>
                      <div><p className="text-sm font-black text-navy-900 dark:text-white">{ins.courses}</p><p className="mt-0.5 text-[10px] text-navy-400 dark:text-slate-500">Courses</p></div>
                    </div>

                    <div className="relative flex flex-wrap justify-center gap-1.5">
                      {(ins.expertise || []).slice(0, 4).map((expertise) => (
                        <span key={expertise} className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${theme.soft} ${theme.text}`}>{expertise}</span>
                      ))}
                    </div>

                    <div className="relative mt-auto flex items-center justify-center gap-2 pt-5 text-xs font-bold text-violet-600 dark:text-violet-300">
                      View Instructor Profile <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </article>
                </Link>
              );
            })}
          </section>
        ) : (
          <section className="mx-auto mt-12 max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl dark:border-white/10 dark:bg-white/5">
            <GraduationCap className="mx-auto text-violet-500" size={34} />
            <h2 className="mt-4 font-display text-xl font-bold text-navy-900 dark:text-white">New instructors coming soon</h2>
            <p className="mt-2 text-sm text-navy-400 dark:text-slate-400">Our expert mentor community is growing.</p>
          </section>
        )}

        <section className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 px-5 py-10 text-center shadow-[0_25px_70px_rgba(79,70,229,0.3)] sm:mt-16 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-12 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md"><TrendingUp size={23} /></span>
            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">Ready to learn from the best?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">Choose a practical course and start building skills that create real opportunities.</p>
            <Link to="/courses" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 shadow-xl transition-all duration-300 hover:-translate-y-1 min-[420px]:w-auto">
              Explore All Courses <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
