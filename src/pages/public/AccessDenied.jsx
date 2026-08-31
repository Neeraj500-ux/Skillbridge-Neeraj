import { Link } from 'react-router-dom';
import { ShieldAlert, LayoutDashboard } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const roleHome = { student: '/student/dashboard', instructor: '/instructor/dashboard', admin: '/admin/dashboard' };

export default function AccessDenied() {
  const { user } = useAuth();
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <span className="h-16 w-16 rounded-full bg-red-50 dark:bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-6"><ShieldAlert size={28} /></span>
        <h1 className="font-display text-3xl font-extrabold text-navy-900 dark:text-white mb-2">Access Denied</h1>
        <p className="text-navy-400 dark:text-slate-400 mb-8">You don't have permission to access this page.</p>
        <Link to={user ? roleHome[user.role] : '/'} className="btn-primary"><LayoutDashboard size={15} /> Go to Dashboard</Link>
      </div>
    </div>
  );
}
