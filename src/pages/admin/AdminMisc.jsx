import { useState } from 'react';
import * as Icons from 'lucide-react';
import { Plus, Star, CheckCircle2, XCircle, Trash2, Award, Save } from 'lucide-react';
import { categories } from '../../data/categories';
import { adminOrders } from '../../data/users';
import { courses } from '../../data/courses';
import { certificates } from '../../data/users';
import DataTable from '../../components/DataTable';
import { StatusBadge } from './Dashboard';
import { useStore } from '../../context/StoreContext';

export function AdminCategories() {
  const { showToast } = useStore();
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-navy-400">{categories.length} categories</p>
        <button onClick={() => showToast('Category created')} className="btn-primary"><Plus size={15} /> Add Category</button>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat) => {
          const Icon = Icons[cat.icon] || Icons.BookOpen;
          return (
            <div key={cat.id} className="card-surface p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-md bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 flex items-center justify-center"><Icon size={18} /></span>
                <div>
                  <p className="font-semibold text-sm text-navy-900 dark:text-white">{cat.name}</p>
                  <p className="text-xs text-navy-400">{cat.courses} courses</p>
                </div>
              </div>
              <button onClick={() => showToast(`Editing ${cat.name}`)} className="text-xs font-semibold text-violet-600">Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function AdminOrders() {
  const { showToast } = useStore();
  const columns = [
    { key: 'id', label: 'Order ID' },
    { key: 'student', label: 'Student' },
    { key: 'course', label: 'Course' },
    { key: 'amount', label: 'Amount', render: (v) => `₹${v.toLocaleString('en-IN')}` },
    { key: 'gateway', label: 'Gateway' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status', render: (v) => <StatusBadge status={v} /> },
  ];
  return <DataTable columns={columns} rows={adminOrders} actions={['View Invoice', 'Refund']} onAction={(a, r) => showToast(`${a} — ${r.id || 'orders'}`)} />;
}

export function AdminPayments() {
  const totalRevenue = adminOrders.filter((o) => o.status === 'Paid').reduce((s, o) => s + o.amount, 0);
  const refunds = adminOrders.filter((o) => o.status === 'Refunded').reduce((s, o) => s + o.amount, 0);
  const failed = adminOrders.filter((o) => o.status === 'Failed').length;
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          ['Total Revenue', `₹${totalRevenue.toLocaleString('en-IN')}`],
          ["Today's Revenue", '₹12,498'],
          ['Refunds', `₹${refunds.toLocaleString('en-IN')}`],
          ['Failed Payments', failed],
        ].map(([label, value]) => (
          <div key={label} className="card-surface p-5">
            <p className="text-xs text-navy-400 mb-1.5">{label}</p>
            <p className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">{value}</p>
          </div>
        ))}
      </div>
      <div className="card-surface overflow-x-auto">
        <table className="w-full text-sm min-w-[600px]">
          <thead className="bg-navy-50 dark:bg-white/5 text-navy-400 text-xs uppercase">
            <tr><th className="text-left px-4 py-3">Reference</th><th className="text-left px-4 py-3">Gateway</th><th className="text-left px-4 py-3">Amount</th><th className="text-left px-4 py-3">Status</th></tr>
          </thead>
          <tbody>
            {adminOrders.map((o) => (
              <tr key={o.id} className="border-t border-navy-100 dark:border-white/5">
                <td className="px-4 py-3 font-mono text-xs">{o.id}</td>
                <td className="px-4 py-3 text-navy-500 dark:text-slate-300">{o.gateway}</td>
                <td className="px-4 py-3 text-navy-500 dark:text-slate-300">₹{o.amount.toLocaleString('en-IN')}</td>
                <td className="px-4 py-3"><StatusBadge status={o.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const initialCoupons = [
  { code: 'SAVE20', type: 'Percentage', value: '20%', expiry: '2026-12-31', usage: '142/500', status: 'Active' },
  { code: 'FLAT500', type: 'Fixed', value: '₹500', expiry: '2026-09-30', usage: '89/200', status: 'Active' },
  { code: 'WELCOME10', type: 'Percentage', value: '10%', expiry: '2026-06-01', usage: '500/500', status: 'Expired' },
];

export function AdminCoupons() {
  const { showToast } = useStore();
  const columns = [
    { key: 'code', label: 'Code' },
    { key: 'type', label: 'Type' },
    { key: 'value', label: 'Value' },
    { key: 'expiry', label: 'Expiry' },
    { key: 'usage', label: 'Usage' },
    { key: 'status', label: 'Status', render: (v) => <StatusBadge status={v === 'Active' ? 'Active' : 'Suspended'} /> },
  ];
  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <button onClick={() => showToast('Coupon created')} className="btn-primary"><Plus size={15} /> Create Coupon</button>
      </div>
      <DataTable columns={columns} rows={initialCoupons} actions={['Edit', 'Disable', 'Delete']} onAction={(a, r) => showToast(`${a} — ${r.code || 'coupons'}`)} searchable={false} />
    </div>
  );
}

const sampleReviews = [
  { student: 'Meera Joshi', course: 'Complete Digital Marketing Masterclass', rating: 5, comment: 'The paid ads module alone was worth the price.', status: 'Approved' },
  { student: 'Aditya Bose', course: 'React Full-Stack Developer Bootcamp', rating: 5, comment: 'Best React course I have taken.', status: 'Approved' },
  { student: 'Anonymous', course: 'Photography Fundamentals for Beginners', rating: 1, comment: 'Buy followers now at cheap-followers.example', status: 'Flagged' },
];

export function AdminReviews() {
  const { showToast } = useStore();
  return (
    <div className="space-y-4">
      {sampleReviews.map((r, i) => (
        <div key={i} className="card-surface p-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <p className="font-semibold text-sm text-navy-900 dark:text-white">{r.student}</p>
              <span className="text-amber-500 text-xs flex items-center gap-0.5">{'★'.repeat(r.rating)}</span>
              <StatusBadge status={r.status === 'Flagged' ? 'Failed' : 'Active'} />
            </div>
            <p className="text-xs text-navy-400 mb-2">{r.course}</p>
            <p className="text-sm text-navy-600 dark:text-slate-300">{r.comment}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button onClick={() => showToast('Review approved')} className="h-8 w-8 rounded-md border border-navy-200 dark:border-white/10 flex items-center justify-center text-emerald-600"><CheckCircle2 size={14} /></button>
            <button onClick={() => showToast('Review hidden')} className="h-8 w-8 rounded-md border border-navy-200 dark:border-white/10 flex items-center justify-center text-amber-500"><XCircle size={14} /></button>
            <button onClick={() => showToast('Review deleted')} className="h-8 w-8 rounded-md border border-navy-200 dark:border-white/10 flex items-center justify-center text-red-500"><Trash2 size={14} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function AdminCertificates() {
  const { showToast } = useStore();
  const columns = [
    { key: 'id', label: 'Certificate ID' },
    { key: 'course', label: 'Course' },
    { key: 'studentName', label: 'Student' },
    { key: 'issuedDate', label: 'Issued' },
  ];
  const rows = certificates.map((c) => ({ ...c, course: courses.find((co) => co.id === c.courseId)?.title }));
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 text-sm text-navy-400"><Award size={15} /> {certificates.length} certificates issued</div>
      <DataTable columns={columns} rows={rows} actions={['View', 'Revoke']} onAction={(a, r) => showToast(`${a} — ${r.id || 'certificates'}`)} />
    </div>
  );
}

export function AdminSettings() {
  const { showToast } = useStore();
  const [commission, setCommission] = useState(20);
  const [general, setGeneral] = useState({ siteName: 'Skillbridge', currency: 'INR (₹)', supportEmail: 'support@skillbridge.com' });

  return (
    <div className="max-w-2xl space-y-6">
      <div className="card-surface p-6">
        <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">General Settings</h3>
        <div className="space-y-4">
          <div>
            <label className="label-text">Site Name</label>
            <input value={general.siteName} onChange={(e) => setGeneral({ ...general, siteName: e.target.value })} className="input-field" />
          </div>
          <div>
            <label className="label-text">Currency</label>
            <select value={general.currency} onChange={(e) => setGeneral({ ...general, currency: e.target.value })} className="input-field">
              <option>INR (₹)</option><option>USD ($)</option>
            </select>
          </div>
          <div>
            <label className="label-text">Support Email</label>
            <input value={general.supportEmail} onChange={(e) => setGeneral({ ...general, supportEmail: e.target.value })} className="input-field" />
          </div>
        </div>
      </div>

      <div className="card-surface p-6">
        <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Platform Commission</h3>
        <label className="label-text">Instructor Commission Split: {100 - commission}% instructor / {commission}% platform</label>
        <input type="range" min="10" max="40" value={commission} onChange={(e) => setCommission(Number(e.target.value))} className="w-full accent-violet-600" />
      </div>

      <button onClick={() => showToast('Settings saved')} className="btn-primary"><Save size={15} /> Save Settings</button>
    </div>
  );
}
