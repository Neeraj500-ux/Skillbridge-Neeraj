import { Link, Outlet } from 'react-router-dom';
import { GraduationCap, ShieldCheck, Sparkles, Users } from 'lucide-react';
import Toast from '../components/Toast';

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white dark:bg-navy-950">
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-12">
        <Link to="/" className="flex items-center gap-2 mb-10">
          <span className="h-9 w-9 rounded-md bg-brand-gradient flex items-center justify-center text-white">
            <GraduationCap size={18} />
          </span>
          <span className="font-display font-extrabold text-lg text-navy-900 dark:text-white">Skillbridge</span>
        </Link>
        <div className="max-w-sm mx-auto w-full">
          <Outlet />
        </div>
      </div>
      <div className="hidden lg:flex relative bg-brand-gradient items-center justify-center p-16 overflow-hidden">
        <div className="absolute inset-0 bg-violet-glow" />
        <div className="relative z-10 max-w-md text-white">
          <p className="badge bg-white/15 text-white mb-6">Learn • Grow • Succeed</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight mb-4">
            Join 10,000+ learners building real, usable skills.
          </h2>
          <p className="text-white/80 text-sm mb-8">
            Practical courses, real instructors, and a certificate that means something on your resume.
          </p>
          <div className="space-y-4">
            <Feature icon={Users} text="500+ courses from 100+ industry practitioners" />
            <Feature icon={Sparkles} text="Hands-on projects, quizzes and assignments" />
            <Feature icon={ShieldCheck} text="30-day money-back guarantee on every course" />
          </div>
        </div>
      </div>
      <Toast />
    </div>
  );
}

function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-9 w-9 rounded-md bg-white/15 flex items-center justify-center shrink-0"><Icon size={16} /></span>
      <p className="text-sm text-white/90">{text}</p>
    </div>
  );
}
