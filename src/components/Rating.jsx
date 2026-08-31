import { Star } from 'lucide-react';

export default function Rating({ value, showValue = true, size = 14, students }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center gap-0.5 text-amber-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={size}
            fill={i < Math.round(value) ? 'currentColor' : 'none'}
            strokeWidth={1.5}
          />
        ))}
      </div>
      {showValue && <span className="text-sm font-semibold text-navy-800 dark:text-slate-200">{value.toFixed(1)}</span>}
      {students != null && (
        <span className="text-sm text-navy-400 dark:text-slate-400">
          ({students.toLocaleString('en-IN')} students)
        </span>
      )}
    </div>
  );
}
