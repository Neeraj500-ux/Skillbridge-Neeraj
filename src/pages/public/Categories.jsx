import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { categories } from '../../data/categories';

export default function Categories() {
  return (
    <div className="container-shell py-14">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="font-display text-3xl font-extrabold text-navy-900 dark:text-white">Browse Categories</h1>
        <p className="text-navy-400 dark:text-slate-400 mt-1.5">Every category, curated by instructors who work in that field.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => {
          const Icon = Icons[cat.icon] || Icons.BookOpen;
          return (
            <Link key={cat.id} to={`/courses?category=${cat.id}`} className="card-surface p-6 group hover:shadow-lift hover:-translate-y-1 transition-all duration-250">
              <span className="h-12 w-12 rounded-md bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Icon size={22} />
              </span>
              <p className="font-display font-bold text-navy-900 dark:text-white">{cat.name}</p>
              <p className="text-xs text-navy-400 mt-1">{cat.courses} courses</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
