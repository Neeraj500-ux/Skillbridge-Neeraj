import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '../../data/categories';

const themes = [
  { gradient: 'from-violet-500 to-indigo-600', ink: 'text-violet-600 dark:text-violet-300', tint: 'bg-violet-50 dark:bg-violet-500/10', color: '#8b5cf6' },
  { gradient: 'from-blue-500 to-cyan-500', ink: 'text-blue-600 dark:text-blue-300', tint: 'bg-blue-50 dark:bg-blue-500/10', color: '#3b82f6' },
  { gradient: 'from-emerald-500 to-teal-500', ink: 'text-emerald-600 dark:text-emerald-300', tint: 'bg-emerald-50 dark:bg-emerald-500/10', color: '#10b981' },
  { gradient: 'from-orange-500 to-rose-500', ink: 'text-orange-600 dark:text-orange-300', tint: 'bg-orange-50 dark:bg-orange-500/10', color: '#f97316' },
  { gradient: 'from-fuchsia-500 to-purple-600', ink: 'text-fuchsia-600 dark:text-fuchsia-300', tint: 'bg-fuchsia-50 dark:bg-fuchsia-500/10', color: '#d946ef' },
  { gradient: 'from-amber-400 to-orange-500', ink: 'text-amber-600 dark:text-amber-300', tint: 'bg-amber-50 dark:bg-amber-500/10', color: '#f59e0b' },
];

const courseCount = (value) => {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? Math.floor(number) : 0;
};

const styles = `
  .category-page { isolation:isolate; }
  .category-page *, .category-page *::before, .category-page *::after { box-sizing:border-box; }
  .category-page .cat-orb { animation:cat-drift 16s ease-in-out infinite alternate; }
  .category-page .cat-orb:nth-child(2) { animation-delay:-8s; }
  .category-page .cat-enter { animation:cat-reveal .65s ease both; }
  .category-page .cat-card { position:relative; transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease; }
  .category-page .cat-card::after { content:''; position:absolute; inset:0; pointer-events:none; background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.24) 48%,transparent 65%); transform:translateX(-130%); }
  .category-page .cat-icon { transition:transform .4s cubic-bezier(.2,.8,.2,1); }
  .category-page .cat-card:focus-visible { outline:3px solid #8b5cf6; outline-offset:4px; }
  .category-page .cat-card:focus-visible .cat-icon { transform:rotate(-6deg) scale(1.06); }
  .category-page .cat-grid-pattern { background-image:linear-gradient(rgba(139,92,246,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,.045) 1px,transparent 1px); background-size:48px 48px; mask-image:linear-gradient(to bottom,black,transparent); }
  .category-page .cat-outline { outline:none; }
  .category-page .cat-outline:focus-visible { outline:3px solid #8b5cf6; outline-offset:3px; }
  @media(hover:hover) and (pointer:fine) {
    .category-page .cat-card:hover { transform:translateY(-7px); border-color:var(--cat-color); box-shadow:0 22px 55px -24px var(--cat-color); }
    .category-page .cat-card:hover::after { transition:transform .85s ease; transform:translateX(130%); }
    .category-page .cat-card:hover .cat-icon { transform:rotate(-6deg) scale(1.08); }
  }
  @keyframes cat-drift { from { transform:translate3d(0,0,0); } to { transform:translate3d(35px,30px,0); } }
  @keyframes cat-reveal { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
  @media(prefers-reduced-motion:reduce) {
    .category-page *, .category-page *::before, .category-page *::after { animation:none!important; transition:none!important; }
    .category-page .cat-card:hover, .category-page .cat-card:hover .cat-icon, .category-page .cat-card:focus-visible .cat-icon { transform:none; }
    .category-page .cat-card::after { display:none; }
  }
`;

export default function Categories() {
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');
  const [view, setView] = useState('grid');
  const catalog = useMemo(() => (Array.isArray(categories) ? categories : []).filter(Boolean).map((category, index) => ({
    ...category,
    name: String(category.name || 'Untitled category'),
    description: String(category.description || `Build practical skills with our ${category.name || 'expert-led'} courses.`),
    count: courseCount(category.courses),
    theme: themes[index % themes.length],
  })), []);
  const totalCourses = catalog.reduce((total, category) => total + category.count, 0);
  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    const result = catalog.filter((category) => `${category.name} ${category.description}`.toLowerCase().includes(term));
    if (sort === 'courses') result.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
    if (sort === 'name') result.sort((a, b) => a.name.localeCompare(b.name));
    return result;
  }, [catalog, query, sort]);

  return (
    <main className="category-page relative min-h-screen overflow-hidden bg-slate-50 text-slate-900 dark:bg-[#050816] dark:text-white">
      <style>{styles}</style>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="cat-orb absolute -left-32 top-12 h-80 w-80 rounded-full bg-violet-400/20 blur-[100px]" />
        <div className="cat-orb absolute -right-32 top-64 h-96 w-96 rounded-full bg-blue-400/15 blur-[110px]" />
        <div className="cat-grid-pattern absolute inset-x-0 top-0 h-[700px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-12 pt-10 sm:px-6 sm:pb-16 sm:pt-16 lg:px-8 lg:pt-20">
        <section className="cat-enter mx-auto max-w-4xl text-center" aria-labelledby="categories-title">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-violet-700 shadow-sm backdrop-blur-xl dark:border-violet-400/20 dark:bg-white/5 dark:text-violet-300 sm:text-xs">
            <Icons.Sparkles size={15} aria-hidden="true" /> A new skill. A new possibility.
          </span>
          <h1 id="categories-title" className="mt-6 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
            Find your next<br className="hidden sm:block" />{' '}
            <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-blue-400 dark:to-cyan-300">big possibility.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
            Discover courses by category. Follow your curiosity, build real skills, and take your next step with confidence.
          </p>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { Icon: Icons.LayoutGrid, value: catalog.length.toLocaleString(), label: 'Learning categories', ink: 'text-violet-500' },
              { Icon: Icons.BookOpen, value: totalCourses.toLocaleString(), label: 'Courses to discover', ink: 'text-blue-500' },
              { Icon: Icons.Compass, value: 'Your pace', label: 'Your next chapter', ink: 'text-emerald-500' },
            ].map(({ Icon, value, label, ink }, index) => (
              <div key={label} className={`rounded-2xl border border-white bg-white/75 px-3 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] ${index === 2 ? 'col-span-2 sm:col-span-1' : ''}`}>
                <div className="flex items-center justify-center gap-2"><Icon size={18} className={ink} aria-hidden="true" /><span className="text-lg font-extrabold sm:text-xl">{value}</span></div>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400 sm:text-xs">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 sm:mt-14" aria-labelledby="browse-title">
          <div className="rounded-3xl border border-slate-200/70 bg-white/80 p-3 shadow-[0_12px_40px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-4">
            <div className="flex flex-col gap-3 md:flex-row">
              <div className="relative min-w-0 flex-1">
                <Icons.Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-violet-500" size={20} aria-hidden="true" />
                <label htmlFor="category-search" className="sr-only">Search categories</label>
                <input id="category-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="What do you want to learn?" className="cat-outline h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-12 pr-12 text-base text-slate-900 placeholder:text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400" />
                {query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="cat-outline absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 hover:text-violet-600"><Icons.X size={17} /></button>}
              </div>
              <div className="flex min-w-0 gap-3">
                <label htmlFor="category-sort" className="sr-only">Sort categories</label>
                <select id="category-sort" value={sort} onChange={(event) => setSort(event.target.value)} className="cat-outline h-12 min-w-0 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-[#101526] dark:text-slate-200 md:w-44 md:flex-none">
                  <option value="default">Default order</option><option value="courses">Most courses</option><option value="name">Name: A–Z</option>
                </select>
                <div role="group" aria-label="Category layout" className="flex shrink-0 gap-1 rounded-2xl border border-slate-200 bg-slate-50 p-1 dark:border-white/10 dark:bg-white/5">
                  {[{ value: 'grid', Icon: Icons.LayoutGrid }, { value: 'list', Icon: Icons.List }].map(({ value, Icon }) => <button key={value} type="button" aria-label={`${value} view`} aria-pressed={view === value} onClick={() => setView(value)} className={`cat-outline flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${view === value ? 'bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-md' : 'text-slate-500 hover:bg-white dark:text-slate-400 dark:hover:bg-white/10'}`}><Icon size={18} /></button>)}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 mt-7 flex flex-wrap items-end justify-between gap-3">
            <div><p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Choose your direction</p><h2 id="browse-title" className="text-2xl font-extrabold tracking-tight sm:text-3xl">Explore categories</h2></div>
            <p role="status" aria-live="polite" aria-atomic="true" className="text-xs text-slate-500 dark:text-slate-400">{visible.length} of {catalog.length} categories</p>
          </div>

          {visible.length ? (
            <div className={view === 'grid' ? 'grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4' : 'grid grid-cols-1 gap-4'}>
              {visible.map((category) => {
                const Icon = Icons[category.icon] || Icons.BookOpen;
                const theme = category.theme;
                const isList = view === 'list';
                return (
                  <Link key={category.id} to={`/courses?category=${encodeURIComponent(category.id)}`} style={{ '--cat-color': theme.color }} className={`cat-card group flex min-w-0 flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_8px_35px_rgba(15,23,42,0.04)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.045] sm:p-6 ${isList ? 'sm:flex-row sm:items-center sm:gap-6' : 'h-full'}`}>
                    <div aria-hidden="true" className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${theme.gradient}`} />
                    <div aria-hidden="true" className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-gradient-to-br opacity-[0.08] blur-2xl ${theme.gradient}`} />
                    <div className={`relative flex items-start justify-between ${isList ? 'mb-4 sm:mb-0 sm:shrink-0' : 'mb-6'}`}>
                      <span className={`cat-icon flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-current/10 ${theme.tint} ${theme.ink}`}><Icon size={26} strokeWidth={1.8} aria-hidden="true" /></span>
                      <span aria-hidden="true" className={`flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 text-slate-400 dark:border-white/10 ${isList ? 'sm:hidden' : ''}`}><Icons.ArrowUpRight size={17} /></span>
                    </div>
                    <div className={`relative min-w-0 ${isList ? 'flex-1' : 'flex-1 pb-5'}`}>
                      <h3 className="break-words text-lg font-extrabold tracking-tight sm:text-xl">{category.name}</h3>
                      <p className="mt-2 break-words text-sm leading-6 text-slate-500 dark:text-slate-400">{category.description}</p>
                    </div>
                    <div className={`relative mt-5 flex items-center justify-between gap-3 ${isList ? 'border-t border-slate-100 pt-4 dark:border-white/10 sm:mt-0 sm:shrink-0 sm:flex-col sm:items-end sm:border-0 sm:pt-0' : 'border-t border-slate-100 pt-4 dark:border-white/10'}`}>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300"><Icons.BookOpen size={15} className={theme.ink} aria-hidden="true" />{category.count.toLocaleString()} {category.count === 1 ? 'course' : 'courses'}</span>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-bold ${theme.ink}`}>Explore <Icons.ArrowRight size={15} aria-hidden="true" /></span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-violet-200 bg-white/70 px-5 py-14 text-center dark:border-violet-500/20 dark:bg-white/[0.03]">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300"><Icons.SearchX size={28} aria-hidden="true" /></span>
              <h3 className="mt-5 text-xl font-bold">{catalog.length ? 'No matching categories' : 'New possibilities are on the way'}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{catalog.length ? 'Try a different keyword or explore all categories.' : 'Check back soon for new learning categories.'}</p>
              {query && <button type="button" onClick={() => setQuery('')} className="cat-outline mt-5 min-h-[44px] rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white">Clear search</button>}
            </div>
          )}
        </section>

        <section className="relative mt-12 overflow-hidden rounded-[28px] bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700 p-6 shadow-[0_25px_70px_-25px_rgba(79,70,229,0.65)] sm:p-10 lg:p-12" aria-labelledby="categories-cta">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl"><span className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white"><Icons.Rocket size={15} aria-hidden="true" /> Start something great</span><h2 id="categories-cta" className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">Your next chapter<br className="hidden sm:block" /> starts with one skill.</h2><p className="mt-4 text-sm leading-7 text-indigo-100">Not sure which category to choose? Explore the full collection and find a course that fits your goals.</p></div>
            <Link to="/courses" className="cat-outline group inline-flex min-h-[52px] w-full shrink-0 items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-bold text-indigo-700 shadow-xl transition-colors hover:bg-indigo-50 sm:w-auto">Browse All Courses <Icons.ArrowUpRight size={19} aria-hidden="true" /></Link>
          </div>
        </section>
      </div>
    </main>
  );
}
