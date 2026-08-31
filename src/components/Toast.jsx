import { CheckCircle2, Info } from 'lucide-react';
import { useStore } from '../context/StoreContext';

export default function Toast() {
  const { toast } = useStore();
  if (!toast) return null;
  const isSuccess = toast.tone === 'success';
  return (
    <div
      key={toast.id}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-2 rounded-md bg-navy-900 dark:bg-white text-white dark:text-navy-900 px-4 py-3 shadow-lift text-sm font-medium animate-[float_0.3s_ease-out]"
      role="status"
    >
      {isSuccess ? <CheckCircle2 size={16} className="text-emerald-500" /> : <Info size={16} className="text-electric-400" />}
      {toast.message}
    </div>
  );
}
