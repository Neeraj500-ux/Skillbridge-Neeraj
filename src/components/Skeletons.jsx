export function CourseCardSkeleton() {
  return (
    <div className="card-surface overflow-hidden">
      <div className="skeleton h-40 w-full" />
      <div className="p-4 space-y-2.5">
        <div className="skeleton h-3 w-16" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-2/3" />
        <div className="skeleton h-3 w-24" />
        <div className="skeleton h-8 w-full mt-2" />
      </div>
    </div>
  );
}

export function StatsCardSkeleton() {
  return (
    <div className="card-surface p-5 space-y-3">
      <div className="skeleton h-3 w-20" />
      <div className="skeleton h-7 w-16" />
    </div>
  );
}

export function TableRowSkeleton({ cols = 5 }) {
  return (
    <tr>
      {Array.from({ length: cols }).map((_, i) => (
        <td key={i} className="py-3.5 px-4"><div className="skeleton h-3.5 w-full" /></td>
      ))}
    </tr>
  );
}
