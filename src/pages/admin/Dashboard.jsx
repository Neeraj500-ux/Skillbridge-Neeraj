import { IndianRupee, Users, GraduationCap, BookOpen, ShoppingBag, Clock } from 'lucide-react';
import { adminStats, adminRevenueTrend, adminOrders } from '../../data/users';
import StatsCard from '../../components/StatsCard';

export default function AdminDashboard() {
  const maxRevenue = Math.max(...adminRevenueTrend.map((m) => m.revenue));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={IndianRupee} label="Total Revenue" value={`₹${(adminStats.totalRevenue / 10000000).toFixed(2)}Cr`} tone="emerald" delta="+8.4% MoM" />
        <StatsCard icon={Users} label="Total Students" value={adminStats.totalStudents.toLocaleString('en-IN')} tone="violet" />
        <StatsCard icon={GraduationCap} label="Total Instructors" value={adminStats.totalInstructors} tone="electric" />
        <StatsCard icon={BookOpen} label="Total Courses" value={adminStats.totalCourses} tone="amber" />
        <StatsCard icon={ShoppingBag} label="Total Orders" value={adminStats.totalOrders.toLocaleString('en-IN')} tone="violet" />
        <StatsCard icon={BookOpen} label="Active Courses" value={adminStats.activeCourses} tone="emerald" />
        <StatsCard icon={Clock} label="Pending Courses" value={adminStats.pendingCourses} tone="amber" />
        <StatsCard icon={Clock} label="Pending Instructors" value={adminStats.pendingInstructors} tone="amber" />
      </div>

      <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6">
        <div className="card-surface p-6">
          <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Revenue Analytics</h3>
          <div className="flex items-end justify-between gap-3 h-48">
            {adminRevenueTrend.map((m) => (
              <div key={m.month} className="flex flex-col items-center gap-2 flex-1">
                <div className="w-full flex items-end justify-center h-40">
                  <div className="w-9 rounded-t-md bg-gradient-to-t from-electric-500 to-violet-500" style={{ height: `${(m.revenue / maxRevenue) * 100}%` }} title={`₹${m.revenue.toLocaleString('en-IN')}`} />
                </div>
                <span className="text-xs text-navy-400">{m.month}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="card-surface p-6">
          <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Conversion Rate</h3>
          <div className="flex flex-col items-center justify-center h-48">
            <p className="font-display text-5xl font-extrabold text-navy-900 dark:text-white">{adminStats.conversionRate}%</p>
            <p className="text-sm text-navy-400 mt-2">Visitor → Enrollment</p>
            <p className="text-xs font-semibold text-emerald-600 mt-3">+0.6pp vs last month</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-navy-900 dark:text-white mb-4">Recent Orders</h3>
        <div className="card-surface overflow-x-auto">
          <table className="w-full text-sm min-w-[700px]">
            <thead className="bg-navy-50 dark:bg-white/5 text-navy-400 text-xs uppercase">
              <tr><th className="text-left px-4 py-3">Order ID</th><th className="text-left px-4 py-3">Student</th><th className="text-left px-4 py-3">Course</th><th className="text-left px-4 py-3">Amount</th><th className="text-left px-4 py-3">Status</th></tr>
            </thead>
            <tbody>
              {adminOrders.map((o) => (
                <tr key={o.id} className="border-t border-navy-100 dark:border-white/5">
                  <td className="px-4 py-3 font-mono text-xs text-navy-500">{o.id}</td>
                  <td className="px-4 py-3 font-medium text-navy-800 dark:text-slate-100">{o.student}</td>
                  <td className="px-4 py-3 text-navy-500 dark:text-slate-300 max-w-[240px] truncate">{o.course}</td>
                  <td className="px-4 py-3 text-navy-500 dark:text-slate-300">₹{o.amount.toLocaleString('en-IN')}</td>
                  <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export function StatusBadge({ status }) {
  const map = {
    Paid: 'bg-emerald-500/10 text-emerald-600',
    Pending: 'bg-amber-500/10 text-amber-600',
    Failed: 'bg-red-500/10 text-red-500',
    Refunded: 'bg-electric-500/10 text-electric-600',
    Cancelled: 'bg-navy-100 text-navy-500',
    Active: 'bg-emerald-500/10 text-emerald-600',
    Suspended: 'bg-red-500/10 text-red-500',
    Approved: 'bg-emerald-500/10 text-emerald-600',
  };
  return <span className={`badge ${map[status] || 'bg-navy-100 text-navy-500'}`}>{status}</span>;
}
