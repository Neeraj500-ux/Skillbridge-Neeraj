import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Users, Wallet, Star, Info } from 'lucide-react';
import { instructorCourses, instructorEarningsHistory, instructorStudentsList } from '../../data/users';
import { getCourseById } from '../../data/courses';
import StatsCard from '../../components/StatsCard';

export default function InstructorDashboard() {
  const location = useLocation();
  const pendingApproval = location.state?.pendingApproval;
  const totalStudents = instructorCourses.reduce((s, c) => s + c.students, 0);
  const totalRevenue = instructorCourses.reduce((s, c) => s + c.revenue, 0);
  const avgRating = (instructorCourses.filter((c) => c.rating).reduce((s, c) => s + c.rating, 0) / instructorCourses.filter((c) => c.rating).length).toFixed(1);
  const maxRevenue = Math.max(...instructorEarningsHistory.map((m) => m.revenue));

  return (
    <div className="space-y-6">
      {pendingApproval && (
        <div className="card-surface p-4 flex items-start gap-3 border-l-4 border-l-amber-500">
          <Info size={18} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-sm text-navy-600 dark:text-slate-300">Your instructor application is <span className="font-semibold">pending admin approval</span>. You can explore the dashboard, but new courses won't go live until you're approved.</p>
        </div>
      )}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={BookOpen} label="Total Courses" value={instructorCourses.length} tone="violet" />
        <StatsCard icon={Users} label="Total Students" value={totalStudents.toLocaleString('en-IN')} tone="electric" />
        <StatsCard icon={Wallet} label="Total Earnings" value={`₹${(totalRevenue / 100000).toFixed(1)}L`} tone="emerald" delta="+12% this month" />
        <StatsCard icon={Star} label="Average Rating" value={avgRating} tone="amber" />
      </div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6">
        <div className="card-surface p-6">
          <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Monthly Revenue</h3>
          <div className="flex items-end justify-between gap-3 h-44">
            {instructorEarningsHistory.map((m) => (
              <div key={m.month} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full flex items-end justify-center h-36">
                  <div className="w-8 rounded-t-md bg-gradient-to-t from-electric-500 to-violet-500" style={{ height: `${(m.revenue / maxRevenue) * 100}%` }} title={`₹${m.revenue.toLocaleString('en-IN')}`} />
                </div>
                <span className="text-xs text-navy-400">{m.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6">
          <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Recent Reviews</h3>
          <div className="space-y-4">
            {[{ name: 'Meera Joshi', rating: 5, text: 'The paid ads module alone was worth the price.' }, { name: 'Sandeep Rao', rating: 5, text: 'Very practical, not just theory.' }].map((r) => (
              <div key={r.name}>
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-navy-800 dark:text-slate-100">{r.name}</p>
                  <span className="text-amber-500 text-xs">{'★'.repeat(r.rating)}</span>
                </div>
                <p className="text-xs text-navy-400">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-navy-900 dark:text-white">Your Courses</h3>
          <Link to="/instructor/courses" className="text-sm font-semibold text-violet-600 dark:text-violet-300">View all</Link>
        </div>
        <div className="card-surface overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-navy-50 dark:bg-white/5 text-navy-400 text-xs uppercase">
              <tr><th className="text-left px-4 py-3">Course</th><th className="text-left px-4 py-3">Status</th><th className="text-left px-4 py-3">Students</th><th className="text-left px-4 py-3">Revenue</th><th className="text-left px-4 py-3">Rating</th></tr>
            </thead>
            <tbody>
              {instructorCourses.map((ic) => {
                const course = getCourseById(ic.courseId);
                return (
                  <tr key={ic.courseId} className="border-t border-navy-100 dark:border-white/5">
                    <td className="px-4 py-3 font-medium text-navy-800 dark:text-slate-100">{course.title}</td>
                    <td className="px-4 py-3"><span className={`badge ${ic.status === 'published' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-amber-500/10 text-amber-600'}`}>{ic.status}</span></td>
                    <td className="px-4 py-3 text-navy-500 dark:text-slate-300">{ic.students.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-3 text-navy-500 dark:text-slate-300">₹{ic.revenue.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-3 text-navy-500 dark:text-slate-300">{ic.rating || '—'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
