import { useState } from 'react';
import { Search, Download, Wallet, Clock, CheckCircle2 } from 'lucide-react';
import { instructorStudentsList, instructorEarningsHistory } from '../../data/users';
import ProgressBar from '../../components/ProgressBar';
import StatsCard from '../../components/StatsCard';
import { useStore } from '../../context/StoreContext';

export function InstructorStudents() {
  const [query, setQuery] = useState('');
  const filtered = instructorStudentsList.filter((s) => s.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="space-y-4">
      <div className="relative max-w-sm">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-300" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search students..." className="input-field !pl-10" />
      </div>
      <div className="card-surface overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-navy-50 dark:bg-white/5 text-navy-400 text-xs uppercase">
            <tr>
              <th className="text-left px-4 py-3">Student</th>
              <th className="text-left px-4 py-3">Course</th>
              <th className="text-left px-4 py-3">Enrolled</th>
              <th className="text-left px-4 py-3">Progress</th>
              <th className="text-left px-4 py-3">Last Activity</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((s) => (
              <tr key={s.name + s.course} className="border-t border-navy-100 dark:border-white/5">
                <td className="px-4 py-3 font-medium text-navy-800 dark:text-slate-100">{s.name}</td>
                <td className="px-4 py-3 text-navy-500 dark:text-slate-300">{s.course}</td>
                <td className="px-4 py-3 text-navy-500 dark:text-slate-300">{s.enrolledAt}</td>
                <td className="px-4 py-3 w-40"><ProgressBar value={s.progress} size="sm" /></td>
                <td className="px-4 py-3 text-navy-400">{s.lastActivity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function InstructorEarnings() {
  const { showToast } = useStore();
  const totalRevenue = instructorEarningsHistory.reduce((s, m) => s + m.revenue, 0);
  const commission = Math.round(totalRevenue * 0.2);
  const net = totalRevenue - commission;
  const maxRevenue = Math.max(...instructorEarningsHistory.map((m) => m.revenue));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard icon={Wallet} label="Gross Revenue" value={`₹${(totalRevenue / 100000).toFixed(1)}L`} tone="violet" />
        <StatsCard icon={Wallet} label="Platform Commission (20%)" value={`₹${(commission / 100000).toFixed(1)}L`} tone="amber" />
        <StatsCard icon={CheckCircle2} label="Net Earnings" value={`₹${(net / 100000).toFixed(1)}L`} tone="emerald" />
        <StatsCard icon={Clock} label="Pending Balance" value="₹42,000" tone="electric" />
      </div>

      <div className="card-surface p-6">
        <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Revenue History</h3>
        <div className="flex items-end justify-between gap-3 h-40">
          {instructorEarningsHistory.map((m) => (
            <div key={m.month} className="flex flex-col items-center gap-2 flex-1">
              <div className="w-full flex items-end justify-center h-32">
                <div className="w-8 rounded-t-md bg-gradient-to-t from-electric-500 to-violet-500" style={{ height: `${(m.revenue / maxRevenue) * 100}%` }} />
              </div>
              <span className="text-xs text-navy-400">{m.month}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="card-surface p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-navy-900 dark:text-white">Withdrawal</h3>
          <button onClick={() => showToast('Withdrawal request submitted')} className="btn-primary !py-2 text-sm"><Download size={14} /> Request Payout</button>
        </div>
        <p className="text-sm text-navy-400">Available balance: <span className="font-semibold text-navy-800 dark:text-slate-100">₹{(net - 42000).toLocaleString('en-IN')}</span></p>
      </div>
    </div>
  );
}
