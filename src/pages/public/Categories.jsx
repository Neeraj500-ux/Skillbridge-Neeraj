import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '../../data/categories';

const categoryThemes = [
  {
    gradient: 'from-violet-500 to-indigo-600',
    lightBg: 'bg-violet-50 dark:bg-violet-500/10',
    text: 'text-violet-600 dark:text-violet-300',
    glow: 'group-hover:shadow-violet-500/20',
  },
  {
    gradient: 'from-blue-500 to-cyan-500',
    lightBg: 'bg-blue-50 dark:bg-blue-500/10',
    text: 'text-blue-600 dark:text-blue-300',
    glow: 'group-hover:shadow-blue-500/20',
  },
  {
    gradient: 'from-emerald-500 to-teal-500',
    lightBg: 'bg-emerald-50 dark:bg-emerald-500/10',
    text: 'text-emerald-600 dark:text-emerald-300',
    glow: 'group-hover:shadow-emerald-500/20',
  },
  {
    gradient: 'from-orange-500 to-rose-500',
    lightBg: 'bg-orange-50 dark:bg-orange-500/10',
    text: 'text-orange-600 dark:text-orange-300',
    glow: 'group-hover:shadow-orange-500/20',
  },
  {
    gradient: 'from-fuchsia-500 to-purple-600',
    lightBg: 'bg-fuchsia-50 dark:bg-fuchsia-500/10',
    text: 'text-fuchsia-600 dark:text-fuchsia-300',
    glow: 'group-hover:shadow-fuchsia-500/20',
  },
  {
    gradient: 'from-amber-400 to-orange-500',
    lightBg: 'bg-amber-50 dark:bg-amber-500/10',
    text: 'text-amber-600 dark:text-amber-300',
    glow: 'group-hover:shadow-amber-500/20',
  },
];

export default function Categories() {
  const totalCourses = categories.reduce(
    (total, category) => total + Number(category.courses || 0),
    0
  );

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-[#050816]">
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-violet-400/20 blur-[110px]" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-blue-400/20 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="container-shell relative z-10 py-12 sm:py-16 lg:py-20">
        {/* Hero heading */}
        <section className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur-xl dark:border-violet-400/20 dark:bg-white/5 dark:text-violet-300">
            <Icons.Sparkles size={15} />
            Explore your potential
          </div>

          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-navy-900 dark:text-white sm:text-5xl lg:text-6xl">
            Discover courses by{' '}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              category
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-navy-400 dark:text-slate-400 sm:text-base">
            Explore expertly curated learning paths designed to help you build
            valuable skills, advance your career, and achieve your goals.
          </p>

          {/* Quick statistics */}
          <div className="mx-auto mt-7 flex max-w-xl flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <Icons.LayoutGrid
                size={16}
                className="text-violet-600 dark:text-violet-300"
              />
              <span className="text-sm font-bold text-navy-900 dark:text-white">
                {categories.length}
              </span>
              <span className="text-xs text-navy-400 dark:text-slate-400">
                Categories
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <Icons.BookOpen
                size={16}
                className="text-blue-600 dark:text-blue-300"
              />
              <span className="text-sm font-bold text-navy-900 dark:text-white">
                {totalCourses.toLocaleString()}+
              </span>
              <span className="text-xs text-navy-400 dark:text-slate-400">
                Courses
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/70 bg-white/80 px-4 py-2.5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <Icons.BadgeCheck
                size={16}
                className="text-emerald-600 dark:text-emerald-300"
              />
              <span className="text-xs font-semibold text-navy-700 dark:text-slate-300">
                Expert-led learning
              </span>
            </div>
          </div>
        </section>

        {/* Categories grid */}
        {categories.length > 0 ? (
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = Icons[category.icon] || Icons.BookOpen;
              const theme = categoryThemes[index % categoryThemes.length];

              return (
                <Link
                  key={category.id}
                  to={`/courses?category=${encodeURIComponent(category.id)}`}
                  aria-label={`Browse ${category.name} courses`}
                  className={`
                    group relative flex min-h-[245px] flex-col overflow-hidden
                    rounded-2xl border border-white/80 bg-white/85 p-6
                    shadow-[0_12px_40px_rgba(15,23,42,0.06)]
                    backdrop-blur-xl transition-all duration-500
                    hover:-translate-y-2 hover:border-transparent
                    hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]
                    focus:outline-none focus-visible:ring-2
                    focus-visible:ring-violet-500 focus-visible:ring-offset-2
                    dark:border-white/10 dark:bg-white/[0.045]
                    dark:shadow-[0_15px_50px_rgba(0,0,0,0.25)]
                    dark:hover:bg-white/[0.07]
                    ${theme.glow}
                  `}
                >
                  {/* Gradient top line */}
                  <div
                    className={`
                      absolute inset-x-0 top-0 h-1 origin-left scale-x-0
                      bg-gradient-to-r transition-transform duration-500
                      group-hover:scale-x-100 ${theme.gradient}
                    `}
                  />

                  {/* Soft card glow */}
                  <div
                    className={`
                      absolute -right-16 -top-16 h-40 w-40 rounded-full
                      bg-gradient-to-br opacity-0 blur-3xl
                      transition-opacity duration-500 group-hover:opacity-20
                      ${theme.gradient}
                    `}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-6 flex items-start justify-between">
                      <span
                        className={`
                          flex h-14 w-14 items-center justify-center rounded-2xl
                          transition-all duration-500
                          group-hover:-rotate-3 group-hover:scale-110
                          ${theme.lightBg} ${theme.text}
                        `}
                      >
                        <Icon size={26} strokeWidth={2} />
                      </span>

                      <span className="flex h-9 w-9 translate-x-2 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:border-white/10 dark:bg-white/5 dark:text-white">
                        <Icons.ArrowUpRight size={17} />
                      </span>
                    </div>

                    <h2 className="font-display text-xl font-extrabold text-navy-900 transition-colors duration-300 dark:text-white">
                      {category.name}
                    </h2>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-navy-400 dark:text-slate-400">
                      {category.description ||
                        `Explore practical ${category.name} courses taught by experienced instructors.`}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 dark:border-white/10">
                      <span className="flex items-center gap-2 text-sm font-semibold text-navy-500 dark:text-slate-300">
                        <Icons.PlayCircle size={17} className={theme.text} />
                        {Number(category.courses || 0).toLocaleString()}{' '}
                        {Number(category.courses) === 1 ? 'course' : 'courses'}
                      </span>

                      <span
                        className={`
                          text-xs font-bold uppercase tracking-wider
                          opacity-70 transition-opacity group-hover:opacity-100
                          ${theme.text}
                        `}
                      >
                        Explore
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        ) : (
          <section className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl dark:border-white/10 dark:bg-white/5">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
              <Icons.FolderOpen size={28} />
            </span>

            <h2 className="mt-5 font-display text-xl font-bold text-navy-900 dark:text-white">
              No categories available
            </h2>

            <p className="mt-2 text-sm text-navy-400 dark:text-slate-400">
              New learning categories will be added soon.
            </p>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 px-6 py-10 text-center shadow-[0_25px_70px_rgba(79,70,229,0.3)] sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="absolute -left-16 -top-20 h-52 w-52 rounded-full bg-white/10 blur-2xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-12 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white backdrop-blur-md">
              <Icons.Rocket size={23} />
            </span>

            <h2 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
              Not sure where to start?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
              Browse our complete course collection and find the perfect
              learning path for your goals.
            </p>

            <Link
              to="/courses"
              className="
                mt-6 inline-flex items-center justify-center gap-2 rounded-xl
                bg-white px-6 py-3.5 text-sm font-bold text-indigo-700
                shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                transition-all duration-300 hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(0,0,0,0.25)]
                focus:outline-none focus-visible:ring-2
                focus-visible:ring-white focus-visible:ring-offset-2
                focus-visible:ring-offset-indigo-700
              "
            >
              Browse All Courses
              <Icons.ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}