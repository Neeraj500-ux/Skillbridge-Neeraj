import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailCheck } from 'lucide-react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  if (sent) {
    return (
      <div className="text-center">
        <span className="h-14 w-14 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-5"><MailCheck size={24} /></span>
        <h1 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-2">Check your email</h1>
        <p className="text-sm text-navy-400 dark:text-slate-400 mb-7">
          We've sent a secure password reset link to <span className="font-semibold text-navy-700 dark:text-slate-200">{email}</span>. The link expires in 30 minutes.
        </p>
        <Link to="/login" className="btn-secondary">Back to Login</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-1.5">Forgot your password?</h1>
      <p className="text-sm text-navy-400 dark:text-slate-400 mb-7">Enter your email and we'll send you a secure link to reset it.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="label-text">Email</label>
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input-field" placeholder="you@example.com" />
        </div>
        <button type="submit" className="btn-primary w-full !py-3">Send Reset Link</button>
      </form>
      <p className="text-center text-sm text-navy-400 mt-7">
        Remembered it? <Link to="/login" className="font-semibold text-violet-600 dark:text-violet-300">Back to Login</Link>
      </p>
    </div>
  );
}
