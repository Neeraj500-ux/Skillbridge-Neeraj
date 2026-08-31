import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { demoAccounts } from '../../data/users';

const roleHome = { student: '/student/dashboard', instructor: '/instructor/dashboard', admin: '/admin/dashboard' };

export default function Login() {
  const [email, setEmail] = useState('student@demo.com');
  const [password, setPassword] = useState('demo1234');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const { login, loginAs, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const user = await login(email, password);
      navigate(location.state?.from || roleHome[user.role]);
    } catch (err) {
      setError(err.message);
    }
  };

  const quickLogin = (role) => {
    const user = loginAs(role);
    navigate(roleHome[user.role]);
  };

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-1.5">Welcome back</h1>
      <p className="text-sm text-navy-400 dark:text-slate-400 mb-7">Log in to continue your learning journey.</p>

      {error && (
        <div className="flex items-start gap-2 rounded-md bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-300 text-sm px-3.5 py-3 mb-5">
          <AlertCircle size={16} className="shrink-0 mt-0.5" /> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label-text">Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="you@example.com" />
        </div>
        <div>
          <label className="label-text">Password</label>
          <div className="relative">
            <input required type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="input-field pr-10" placeholder="••••••••" />
            <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-300">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-navy-500 dark:text-slate-400 cursor-pointer">
            <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="accent-violet-600" /> Remember me
          </label>
          <Link to="/forgot-password" className="font-semibold text-violet-600 dark:text-violet-300">Forgot password?</Link>
        </div>
        <button type="submit" disabled={loading} className="btn-primary w-full !py-3">{loading ? 'Logging in...' : 'Login'}</button>
      </form>

      <div className="flex items-center gap-3 my-6">
        <div className="h-px bg-navy-100 dark:bg-white/10 flex-1" />
        <span className="text-xs text-navy-400">or continue with</span>
        <div className="h-px bg-navy-100 dark:bg-white/10 flex-1" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="btn-secondary" type="button">Google</button>
        <button className="btn-secondary" type="button">Facebook</button>
      </div>

      <div className="mt-7 p-4 rounded-md bg-violet-50/70 dark:bg-violet-500/5 border border-violet-100 dark:border-violet-500/10">
        <p className="text-xs font-semibold text-navy-500 dark:text-slate-300 mb-2.5">Quick demo login (no password needed)</p>
        <div className="flex flex-wrap gap-2">
          {demoAccounts.map((a) => (
            <button key={a.role} type="button" onClick={() => quickLogin(a.role)} className="badge bg-white dark:bg-navy-800 border border-navy-200 dark:border-white/10 text-navy-700 dark:text-slate-200 capitalize hover:border-violet-400">
              {a.role}
            </button>
          ))}
        </div>
      </div>

      <p className="text-center text-sm text-navy-400 mt-7">
        Don't have an account? <Link to="/register" className="font-semibold text-violet-600 dark:text-violet-300">Create Account</Link>
      </p>
    </div>
  );
}
