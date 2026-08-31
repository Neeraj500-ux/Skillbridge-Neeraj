import { Link } from 'react-router-dom';
import { Home, Compass, SearchX } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="h-16 w-16 rounded-full bg-violet-50 dark:bg-violet-500/10 text-violet-500 flex items-center justify-center mx-auto mb-6"><SearchX size={28} /></span>
        <h1 className="font-display text-3xl font-extrabold text-navy-900 dark:text-white mb-2">Oops! Page Not Found</h1>
        <p className="text-navy-400 dark:text-slate-400 mb-8">The page you're looking for doesn't exist or may have been moved.</p>
        <div className="flex justify-center gap-3">
          <Link to="/" className="btn-primary"><Home size={15} /> Go Home</Link>
          <Link to="/courses" className="btn-secondary"><Compass size={15} /> Explore Courses</Link>
        </div>
      </div>
    </div>
  );
}
