import { useState } from 'react';
import { ClipboardList, Upload, CheckCircle2, Clock } from 'lucide-react';
import { assignments } from '../../data/users';
import { getCourseById } from '../../data/courses';
import { useStore } from '../../context/StoreContext';
import EmptyState from '../../components/EmptyState';

export default function Assignments() {
  const { showToast } = useStore();
  const [submitted, setSubmitted] = useState({});

  if (assignments.length === 0) {
    return <EmptyState icon={ClipboardList} title="No assignments" message="Assignments from your enrolled courses will show up here." />;
  }

  return (
    <div className="space-y-5">
      {assignments.map((a) => {
        const course = getCourseById(a.courseId);
        const isGraded = a.status === 'graded';
        const isSubmitted = submitted[a.id] || isGraded;
        return (
          <div key={a.id} className="card-surface p-5">
            <div className="flex items-start justify-between gap-4 mb-3">
              <div>
                <p className="text-xs text-navy-400 mb-1">{course.title}</p>
                <h3 className="font-display font-bold text-navy-900 dark:text-white">{a.title}</h3>
              </div>
              <span className={`badge shrink-0 ${isGraded ? 'bg-emerald-500/10 text-emerald-600' : isSubmitted ? 'bg-electric-500/10 text-electric-600' : 'bg-amber-500/10 text-amber-600'}`}>
                {isGraded ? 'Graded' : isSubmitted ? 'Submitted' : 'Pending'}
              </span>
            </div>
            <p className="text-sm text-navy-500 dark:text-slate-400 mb-4">{a.description}</p>
            <p className="flex items-center gap-1.5 text-xs text-navy-400 mb-4"><Clock size={13} /> Due {new Date(a.due).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</p>

            {isGraded && (
              <div className="bg-emerald-500/10 rounded-md p-4 mb-4">
                <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-1">Marks: {a.marks}</p>
                <p className="text-sm text-navy-600 dark:text-slate-300">{a.feedback}</p>
              </div>
            )}

            {!isGraded && !isSubmitted && (
              <button onClick={() => { setSubmitted((s) => ({ ...s, [a.id]: true })); showToast('Assignment submitted'); }} className="btn-primary !py-2 text-sm">
                <Upload size={14} /> Upload & Submit
              </button>
            )}
            {!isGraded && isSubmitted && (
              <p className="flex items-center gap-1.5 text-sm text-electric-600 font-semibold"><CheckCircle2 size={15} /> Waiting for instructor review</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
