export default function StatsCard({ icon: Icon, label, value, delta, tone = 'violet' }) {
  const toneMap = {
    violet: 'bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300',
    electric: 'bg-electric-50 text-electric-600 dark:bg-electric-500/10 dark:text-electric-300',
    emerald: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
    amber: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
  };
  return (
    <div className="card-surface p-5 flex items-start justify-between">
      <div>
        <p className="text-xs font-medium text-navy-400 dark:text-slate-400 mb-1.5">{label}</p>
        <p className="font-display text-2xl md:text-[28px] font-extrabold text-navy-900 dark:text-white">{value}</p>
        {delta && <p className="text-xs font-semibold text-emerald-600 mt-1.5">{delta}</p>}
      </div>
      {Icon && (
        <div className={`h-10 w-10 rounded-md flex items-center justify-center shrink-0 ${toneMap[tone]}`}>
          <Icon size={18} />
        </div>
      )}
    </div>
  );
}
