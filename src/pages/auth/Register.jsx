import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, User, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const roleHome = { student: '/student/dashboard', instructor: '/instructor/dashboard' };

export default function Register() {
  const [role, setRole] = useState('student');
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '', expertise: '', bio: '' });
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (form.password !== form.confirm) return setError('Passwords do not match.');
    if (!agreed) return setError('Please agree to the Terms & Conditions to continue.');
    const user = await register({ name: form.name, email: form.email, role });
    if (role === 'instructor') {
      navigate('/instructor/dashboard', { state: { pendingApproval: true } });
    } else {
      navigate(roleHome[user.role]);
    }
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-1.5">Join Our Learning Community</h1>
      <p className="text-sm text-navy-400 dark:text-slate-400 mb-6">Create an account to start learning or teaching.</p>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button type="button" onClick={() => setRole('student')} className={`card-surface p-4 text-left ${role === 'student' ? '!border-violet-500 ring-1 ring-violet-500' : ''}`}>
          <User size={18} className="text-violet-500 mb-2" />
          <p className="font-semibold text-sm text-navy-900 dark:text-white">Continue as Student</p>
        </button>
        <button type="button" onClick={() => setRole('instructor')} className={`card-surface p-4 text-left ${role === 'instructor' ? '!border-violet-500 ring-1 ring-violet-500' : ''}`}>
          <GraduationCap size={18} className="text-violet-500 mb-2" />
          <p className="font-semibold text-sm text-navy-900 dark:text-white">Become an Instructor</p>
        </button>
      </div>

      {error && (
        <div className="flex items-start gap-2 rounded-md bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-300 text-sm px-3.5 py-3 mb-5">
          <AlertCircle size={16} className="shrink-0 mt-0.5" /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label-text">Full Name</label>
          <input required value={form.name} onChange={set('name')} className="input-field" placeholder="Your full name" />
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label-text">Email</label>
            <input required type="email" value={form.email} onChange={set('email')} className="input-field" placeholder="you@example.com" />
          </div>
          <div>
            <label className="label-text">Phone</label>
            <input required value={form.phone} onChange={set('phone')} className="input-field" placeholder="+91 98765 43210" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="label-text">Password</label>
            <input required type="password" value={form.password} onChange={set('password')} className="input-field" placeholder="••••••••" />
          </div>
          <div>
            <label className="label-text">Confirm Password</label>
            <input required type="password" value={form.confirm} onChange={set('confirm')} className="input-field" placeholder="••••••••" />
          </div>
        </div>

        {role === 'instructor' && (
          <div className="space-y-4 border-t border-navy-100 dark:border-white/10 pt-4">
            <div>
              <label className="label-text">Area of Expertise</label>
              <input required value={form.expertise} onChange={set('expertise')} className="input-field" placeholder="e.g. Digital Marketing, Web Development" />
            </div>
            <div>
              <label className="label-text">Short Bio</label>
              <textarea required rows={3} value={form.bio} onChange={set('bio')} className="input-field resize-none" placeholder="Tell learners about your experience" />
            </div>
            <p className="text-xs text-navy-400 bg-amber-500/10 text-amber-700 dark:text-amber-300 rounded-md px-3 py-2.5">
              Instructor accounts require admin approval before your courses go live.
            </p>
          </div>
        )}

        <label className="flex items-start gap-2 text-sm text-navy-500 dark:text-slate-400 cursor-pointer">
          <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="accent-violet-600 mt-0.5" />
          I agree to the Terms &amp; Conditions and Privacy Policy
        </label>

        <button type="submit" disabled={loading} className="btn-primary w-full !py-3">{loading ? 'Creating account...' : 'Register'}</button>
      </form>

      <p className="text-center text-sm text-navy-400 mt-7">
        Already have an account? <Link to="/login" className="font-semibold text-violet-600 dark:text-violet-300">Login</Link>
      </p>
    </div>
  );
}
