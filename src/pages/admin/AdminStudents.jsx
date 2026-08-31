import { adminStudentsList } from '../../data/users';
import DataTable from '../../components/DataTable';
import { StatusBadge } from './Dashboard';
import { useStore } from '../../context/StoreContext';

export default function AdminStudents() {
  const { showToast } = useStore();
  const columns = [
    { key: 'name', label: 'Student' },
    { key: 'email', label: 'Email' },
    { key: 'courses', label: 'Courses' },
    { key: 'joined', label: 'Joined' },
    { key: 'status', label: 'Status', render: (v) => <StatusBadge status={v} /> },
  ];
  return <DataTable columns={columns} rows={adminStudentsList} onAction={(action, row) => showToast(`${action} — ${row.name || 'selected students'}`)} />;
}
