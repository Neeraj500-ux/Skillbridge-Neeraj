import { useState } from 'react';
import { Camera } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useStore } from '../../context/StoreContext';
import { certificates, studentEnrollments } from '../../data/users';

export default function Profile() {
  const { user } = useAuth();
  const { showToast } = useStore();
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', phone: '+91 98765 43210', bio: 'Lifelong learner building practical skills, one course at a time.' });

  const completed = studentEnrollments.filter((e) => e.status === 'completed').length;

  return (
    <div className="max-w-2xl space-y-6">
      <div className="card-surface p-6">
        <div className="flex items-center gap-5">
          <div className="relative">
            <img src={user?.avatar} alt="" className="h-20 w-20 rounded-full object-cover" />
            <button className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-violet-600 text-white flex items-center justify-center border-2 border-white dark:border-navy-800"><Camera size={12} /></button>
          </div>
          <div>
            <h2 className="font-display font-bold text-lg text-navy-900 dark:text-white">{user?.name}</h2>
            <p className="text-sm text-navy-400 capitalize">{user?.role} · {user?.email}</p>
          </div>
        </div>

        {user?.role === 'student' && (
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-navy-100 dark:border-white/10">
            <Stat label="Enrolled" value={studentEnrollments.length} />
            <Stat label="Completed" value={completed} />
            <Stat label="Certificates" value={certificates.length} />
          </div>
        )}
      </div>

      <div className="card-surface p-6">
        <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Edit Profile</h3>
        <div className="space-y-4">
          <div>
            <label className="label-text">Full Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" />
          </div>
          <div>
            <label className="label-text">Email</label>
            <input value={form.email} disabled className="input-field opacity-60" />
          </div>
          <div>
            <label className="label-text">Phone</label>
            <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field" />
          </div>
          <div>
            <label className="label-text">Bio</label>
            <textarea rows={3} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} className="input-field resize-none" />
          </div>
          <button onClick={() => showToast('Profile updated')} className="btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="text-center">
      <p className="font-display text-xl font-extrabold text-navy-900 dark:text-white">{value}</p>
      <p className="text-xs text-navy-400">{label}</p>
    </div>
  );
}
