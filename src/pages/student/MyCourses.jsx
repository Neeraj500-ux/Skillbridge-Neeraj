import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, CheckCircle2 } from 'lucide-react';
import { studentEnrollments } from '../../data/users';
import { getCourseById } from '../../data/courses';
import ProgressBar from '../../components/ProgressBar';
import EmptyState from '../../components/EmptyState';

const filters = [
  { key: 'all', label: 'All' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'completed', label: 'Completed' },
];

export default function MyCourses() {
  const [filter, setFilter] = useState('all');
  const filtered = studentEnrollments.filter((e) => filter === 'all' || e.status === filter || (filter === 'in-progress' && e.status === 'not-started'));

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${filter === f.key ? 'bg-violet-600 text-white' : 'bg-white dark:bg-navy-800 text-navy-500 dark:text-slate-300 border border-navy-200 dark:border-white/10'}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState icon={BookOpen} title="No courses yet" message="You haven't enrolled in any courses matching this filter." actionLabel="Explore Courses" actionTo="/courses" />
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((e) => {
            const course = getCourseById(e.courseId);
            return (
              <div key={e.courseId} className="card-surface overflow-hidden flex flex-col">
                <div className="relative">
                  <img src={course.thumbnail} alt="" className="w-full h-36 object-cover" />
                  {e.status === 'completed' && (
                    <span className="absolute top-3 right-3 badge bg-emerald-500 text-white"><CheckCircle2 size={12} /> Completed</span>
                  )}
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-semibold text-sm text-navy-900 dark:text-white line-clamp-2 mb-1">{course.title}</h3>
                  <p className="text-xs text-navy-400 mb-3">{e.completedLessons}/{e.totalLessons} lessons completed</p>
                  <ProgressBar value={e.progress} size="sm" tone={e.status === 'completed' ? 'emerald' : 'violet'} />
                  <p className="text-xs font-semibold text-navy-600 dark:text-slate-300 mt-1.5">{e.progress}% complete</p>
                  <Link to={`/student/learn/${course.id}`} className="btn-secondary w-full mt-4 !py-2 text-xs">
                    {e.status === 'completed' ? 'Review Course' : e.status === 'not-started' ? 'Start Course' : 'Continue Learning'} <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
