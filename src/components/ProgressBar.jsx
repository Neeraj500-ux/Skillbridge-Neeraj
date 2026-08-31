export default function ProgressBar({ value, size = 'md', tone = 'violet' }) {
  const height = size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3' : 'h-2';
  const toneClass = tone === 'emerald' ? 'bg-emerald-500' : tone === 'electric' ? 'bg-electric-500' : 'bg-gradient-to-r from-electric-500 to-violet-500';
  return (
    <div className={`w-full ${height} rounded-full bg-navy-100 dark:bg-white/10 overflow-hidden`}>
      <div
        className={`${height} ${toneClass} rounded-full transition-all duration-500`}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
