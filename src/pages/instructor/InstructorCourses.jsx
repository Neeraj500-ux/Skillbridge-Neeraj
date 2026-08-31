import { Link } from 'react-router-dom';
import { Plus, Users, IndianRupee, Star, Edit3 } from 'lucide-react';
import { instructorCourses } from '../../data/users';
import { getCourseById } from '../../data/courses';

export default function InstructorCourses() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-navy-400">{instructorCourses.length} courses</p>
        <Link to="/instructor/courses/create" className="btn-primary"><Plus size={15} /> Create Course</Link>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructorCourses.map((ic) => {
          const course = getCourseById(ic.courseId);
          return (
            <div key={ic.courseId} className="card-surface overflow-hidden">
              <img src={course.thumbnail} alt="" className="w-full h-36 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`badge ${ic.status === 'published' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>{ic.status}</span>
                  <button className="text-navy-400 hover:text-violet-600"><Edit3 size={14} /></button>
                </div>
                <h3 className="font-semibold text-sm text-navy-900 dark:text-white line-clamp-2 mb-3">{course.title}</h3>
                <div className="grid grid-cols-3 gap-2 text-xs text-navy-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><Users size={12} /> {ic.students.toLocaleString('en-IN')}</span>
                  <span className="flex items-center gap-1"><IndianRupee size={12} /> {(ic.revenue / 1000).toFixed(0)}k</span>
                  <span className="flex items-center gap-1"><Star size={12} /> {ic.rating || '—'}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
