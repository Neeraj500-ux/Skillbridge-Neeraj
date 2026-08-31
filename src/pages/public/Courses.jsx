import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { courses } from '../../data/courses';
import { categories } from '../../data/categories';
import CourseCard from '../../components/CourseCard';
import { CourseCardSkeleton } from '../../components/Skeletons';
import EmptyState from '../../components/EmptyState';

const levels = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];
const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
];

export default function Courses() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');
  const [selectedCategory, setSelectedCategory] = useState(params.get('category') || '');
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [maxPrice, setMaxPrice] = useState(20000);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState('popular');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [loading] = useState(false);

  const toggleLevel = (lvl) => setSelectedLevels((prev) => (prev.includes(lvl) ? prev.filter((l) => l !== lvl) : [...prev, lvl]));

  const filtered = useMemo(() => {
    let list = courses.filter((c) => {
      const matchesQuery = !query || c.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = !selectedCategory || c.category === selectedCategory;
      const matchesLevel = selectedLevels.length === 0 || selectedLevels.some((l) => c.level.includes(l));
      const matchesPrice = c.salePrice <= maxPrice;
      const matchesRating = c.rating >= minRating;
      return matchesQuery && matchesCategory && matchesLevel && matchesPrice && matchesRating;
    });
    if (sort === 'newest') list = [...list].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.salePrice - b.salePrice);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.salePrice - a.salePrice);
    if (sort === 'popular') list = [...list].sort((a, b) => b.studentsCount - a.studentsCount);
    return list;
  }, [query, selectedCategory, selectedLevels, maxPrice, minRating, sort]);

  const clearFilters = () => {
    setSelectedCategory(''); setSelectedLevels([]); setMaxPrice(20000); setMinRating(0); setQuery('');
    setParams({});
  };

  return (
    <div className="container-shell py-10">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-extrabold text-navy-900 dark:text-white">Explore Our Courses</h1>
        <p className="text-navy-400 dark:text-slate-400 mt-1.5">Learn from experts and build skills that matter.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses, skills or topics..."
            className="input-field !pl-11"
          />
        </div>
        <button onClick={() => setFiltersOpen((v) => !v)} className="btn-secondary lg:hidden">
          <SlidersHorizontal size={15} /> Filters
        </button>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="input-field sm:w-52">
          {sortOptions.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
        </select>
      </div>

      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        <aside className={`${filtersOpen ? 'block' : 'hidden'} lg:block`}>
          <div className="card-surface p-5 sticky top-24 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display font-bold text-sm text-navy-900 dark:text-white">Filters</h3>
              <button onClick={clearFilters} className="text-xs font-semibold text-violet-600">Clear all</button>
            </div>

            <div>
              <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase tracking-wide mb-3">Category</p>
              <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
                {categories.map((cat) => (
                  <label key={cat.id} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="radio" name="category" checked={selectedCategory === cat.id} onChange={() => setSelectedCategory(cat.id)} className="accent-violet-600" />
                    <span className="text-navy-600 dark:text-slate-300">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase tracking-wide mb-3">Level</p>
              <div className="space-y-2">
                {levels.map((lvl) => (
                  <label key={lvl} className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" checked={selectedLevels.includes(lvl)} onChange={() => toggleLevel(lvl)} className="accent-violet-600" />
                    <span className="text-navy-600 dark:text-slate-300">{lvl}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase tracking-wide mb-3">Max Price: ₹{maxPrice.toLocaleString('en-IN')}</p>
              <input type="range" min="0" max="20000" step="500" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full accent-violet-600" />
            </div>

            <div>
              <p className="text-xs font-semibold text-navy-500 dark:text-slate-400 uppercase tracking-wide mb-3">Minimum Rating</p>
              <div className="flex gap-2">
                {[4.5, 4, 3, 0].map((r) => (
                  <button
                    key={r}
                    onClick={() => setMinRating(r)}
                    className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${minRating === r ? 'bg-violet-600 text-white border-violet-600' : 'border-navy-200 dark:border-white/10 text-navy-500 dark:text-slate-300'}`}
                  >
                    {r === 0 ? 'Any' : `${r}+`}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <p className="text-sm text-navy-400 dark:text-slate-400 mb-4">{filtered.length} courses found</p>
          {loading ? (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => <CourseCardSkeleton key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState icon={X} title="No courses found" message="Try adjusting your filters or search terms to find what you're looking for." actionLabel="Clear filters" actionTo="/courses" />
          ) : (
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map((c) => <CourseCard key={c.id} course={c} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
