import { useState } from 'react';
import { Search, MoreHorizontal } from 'lucide-react';

export default function DataTable({ columns, rows, actions = ['View', 'Edit', 'Delete'], onAction, searchable = true }) {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  const filtered = rows.filter((r) => !query || Object.values(r).some((v) => String(v).toLowerCase().includes(query.toLowerCase())));

  const toggleAll = () => setSelected(selected.length === filtered.length ? [] : filtered.map((_, i) => i));
  const toggleOne = (i) => setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-3 flex-wrap">
        {searchable && (
          <div className="relative max-w-xs w-full">
            <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy-300" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..." className="input-field !pl-10 !py-2 text-sm" />
          </div>
        )}
        {selected.length > 0 && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-navy-400">{selected.length} selected</span>
            <button onClick={() => { onAction?.('bulk-suspend', selected.map((i) => filtered[i])); setSelected([]); }} className="btn-ghost !py-1.5 text-xs">Suspend</button>
            <button onClick={() => { onAction?.('bulk-delete', selected.map((i) => filtered[i])); setSelected([]); }} className="btn-ghost !py-1.5 text-xs text-red-500">Delete</button>
          </div>
        )}
      </div>

      <div className="card-surface overflow-x-auto">
        <table className="w-full text-sm min-w-[700px]">
          <thead className="bg-navy-50 dark:bg-white/5 text-navy-400 text-xs uppercase">
            <tr>
              <th className="px-4 py-3 w-8"><input type="checkbox" checked={selected.length === filtered.length && filtered.length > 0} onChange={toggleAll} className="accent-violet-600" /></th>
              {columns.map((c) => <th key={c.key} className="text-left px-4 py-3 whitespace-nowrap">{c.label}</th>)}
              <th className="px-4 py-3 w-10" />
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} className="border-t border-navy-100 dark:border-white/5">
                <td className="px-4 py-3"><input type="checkbox" checked={selected.includes(i)} onChange={() => toggleOne(i)} className="accent-violet-600" /></td>
                {columns.map((c) => (
                  <td key={c.key} className="px-4 py-3 text-navy-600 dark:text-slate-300 whitespace-nowrap">
                    {c.render ? c.render(row[c.key], row) : row[c.key]}
                  </td>
                ))}
                <td className="px-4 py-3 relative">
                  <button onClick={() => setOpenMenu(openMenu === i ? null : i)} className="text-navy-400 hover:text-navy-700 dark:hover:text-slate-200"><MoreHorizontal size={16} /></button>
                  {openMenu === i && (
                    <div className="absolute right-4 top-9 z-20 w-36 card-surface p-1.5" onMouseLeave={() => setOpenMenu(null)}>
                      {actions.map((a) => (
                        <button key={a} onClick={() => { onAction?.(a.toLowerCase(), row); setOpenMenu(null); }} className={`w-full text-left px-3 py-2 rounded-md text-xs hover:bg-navy-50 dark:hover:bg-white/5 ${a === 'Delete' ? 'text-red-500' : 'text-navy-600 dark:text-slate-300'}`}>{a}</button>
                      ))}
                    </div>
                  )}
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr><td colSpan={columns.length + 2} className="text-center py-10 text-navy-400 text-sm">No results found.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
