import { Link } from 'react-router-dom';
import { instructors } from '../../data/instructors';
import Rating from '../../components/Rating';

export default function Instructors() {
  return (
    <div className="container-shell py-14">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h1 className="font-display text-3xl font-extrabold text-navy-900 dark:text-white">Meet Our Instructors</h1>
        <p className="text-navy-400 dark:text-slate-400 mt-1.5">Practitioners currently working in the field — not just teaching from slides.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {instructors.map((ins) => (
          <Link key={ins.id} to={`/instructor/${ins.id}`} className="card-surface p-6 text-center hover:shadow-lift hover:-translate-y-1 transition-all duration-250">
            <img src={ins.avatar} alt={ins.name} className="h-20 w-20 rounded-full mx-auto object-cover mb-4" />
            <p className="font-display font-bold text-navy-900 dark:text-white">{ins.name}</p>
            <p className="text-xs text-navy-400 mb-3">{ins.title}</p>
            <div className="flex justify-center mb-2"><Rating value={ins.rating} size={12} /></div>
            <p className="text-xs text-navy-400 mb-4">{ins.students.toLocaleString('en-IN')} students · {ins.courses} courses</p>
            <div className="flex flex-wrap justify-center gap-1.5">
              {ins.expertise.map((e) => <span key={e} className="badge bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300">{e}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
