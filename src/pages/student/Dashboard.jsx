import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle2, Award, Clock, ArrowRight, ClipboardList, HelpCircle, FileBadge } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { studentEnrollments, learningActivity, upcomingTasks, certificates } from '../../data/users';
import { getCourseById } from '../../data/courses';
import StatsCard from '../../components/StatsCard';
import ProgressBar from '../../components/ProgressBar';

const taskIcon = { assignment: ClipboardList, quiz: HelpCircle, certificate: FileBadge };

export default function StudentDashboard() {
  const { user } = useAuth();
  const inProgress = studentEnrollments.filter((e) => e.status === 'in-progress');
  const completed = studentEnrollments.filter((e) => e.status === 'completed');
  const totalHours = 48;
  const continueCourse = inProgress[0];
  const continueDetails = continueCourse ? getCourseById(continueCourse.courseId) : null;
  const maxMinutes = Math.max(...learningActivity.map((d) => d.minutes), 1);
  const firstName = user?.name?.split(' ')[0] || 'there';

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-extrabold text-navy-900 dark:text-white">Good morning, {firstName} 👋</h2>
        <p className="text-navy-400 dark:text-slate-400 text-sm mt-1">Continue your learning journey.</p>
      </div>

      {continueDetails && (
        <div className="card-surface p-6 grid sm:grid-cols-[200px_1fr] gap-5 items-center">
          <img src={continueDetails.thumbnail} alt="" className="w-full h-32 sm:h-full object-cover rounded-md" />
          <div>
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-300 uppercase tracking-wide mb-1.5">Continue Learning</p>
            <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-1">{continueDetails.title}</h3>
            <p className="text-sm text-navy-400 mb-3">Lesson: {continueCourse.lastLesson}</p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex-1"><ProgressBar value={continueCourse.progress} /></div>
              <span className="text-sm font-semibold text-navy-700 dark:text-slate-200">{continueCourse.progress}%</span>
            </div>
            <Link to={`/student/learn/${continueDetails.id}`} className="btn-primary">Continue Learning <ArrowRight size={15} /></Link>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={BookOpen} label="Courses Enrolled" value={studentEnrollments.length} tone="violet" />
        <StatsCard icon={CheckCircle2} label="Courses Completed" value={completed.length} tone="emerald" />
        <StatsCard icon={Clock} label="Learning Hours" value={`${totalHours}h`} tone="electric" />
        <StatsCard icon={Award} label="Certificates" value={certificates.length} tone="amber" />
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <div className="card-surface p-6">
          <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Learning Activity</h3>
          <div className="flex items-end justify-between gap-2 h-40">
            {learningActivity.map((d) => (
              <div key={d.day} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full flex items-end justify-center h-32">
                  <div
                    className="w-7 rounded-t-md bg-gradient-to-t from-electric-500 to-violet-500"
                    style={{ height: `${Math.max(6, (d.minutes / maxMinutes) * 100)}%` }}
                    title={`${d.minutes} minutes`}
                  />
                </div>
                <span className="text-xs text-navy-400">{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6">
          <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Upcoming Tasks</h3>
          <div className="space-y-4">
            {upcomingTasks.map((t) => {
              const Icon = taskIcon[t.type] || ClipboardList;
              return (
                <div key={t.id} className="flex items-start gap-3">
                  <span className="h-9 w-9 rounded-md bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 flex items-center justify-center shrink-0"><Icon size={16} /></span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-navy-800 dark:text-slate-100 truncate">{t.title}</p>
                    <p className="text-xs text-navy-400 truncate">{t.course}</p>
                    <p className="text-xs font-semibold text-violet-600 dark:text-violet-300 mt-0.5">{t.due}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-navy-900 dark:text-white">Continue Learning</h3>
          <Link to="/student/courses" className="text-sm font-semibold text-violet-600 dark:text-violet-300 flex items-center gap-1">View all <ArrowRight size={14} /></Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {inProgress.map((e) => {
            const course = getCourseById(e.courseId);
            return (
              <div key={e.courseId} className="card-surface p-4 flex gap-4">
                <img src={course.thumbnail} alt="" className="h-20 w-28 object-cover rounded-md shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-sm text-navy-900 dark:text-white truncate">{course.title}</p>
                  <p className="text-xs text-navy-400 mb-2">Lesson {e.completedLessons} of {e.totalLessons}</p>
                  <ProgressBar value={e.progress} size="sm" />
                  <Link to={`/student/learn/${course.id}`} className="text-xs font-semibold text-violet-600 dark:text-violet-300 flex items-center gap-1 mt-2">Continue <ArrowRight size={12} /></Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
