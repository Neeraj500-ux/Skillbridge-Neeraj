import { Link } from 'react-router-dom';

export default function EmptyState({ icon: Icon, title, message, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 card-surface">
      <div className="h-14 w-14 rounded-full bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-violet-500 mb-4">
        {Icon && <Icon size={24} />}
      </div>
      <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-1.5">{title}</h3>
      <p className="text-sm text-navy-400 dark:text-slate-400 max-w-sm mb-5">{message}</p>
      {actionLabel && actionTo && (
        <Link to={actionTo} className="btn-primary">{actionLabel}</Link>
      )}
    </div>
  );
}
