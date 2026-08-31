import { adminInstructorsList } from '../../data/users';
import DataTable from '../../components/DataTable';
import { StatusBadge } from './Dashboard';
import { useStore } from '../../context/StoreContext';

export default function AdminInstructors() {
  const { showToast } = useStore();
  const columns = [
    { key: 'name', label: 'Instructor' },
    { key: 'email', label: 'Email' },
    { key: 'courses', label: 'Courses' },
    { key: 'students', label: 'Students', render: (v) => v.toLocaleString('en-IN') },
    { key: 'status', label: 'Status', render: (v) => <StatusBadge status={v} /> },
  ];
  return (
    <DataTable
      columns={columns}
      rows={adminInstructorsList}
      actions={['View', 'Approve', 'Suspend', 'Delete']}
      onAction={(action, row) => showToast(`${action} — ${row.name || 'selected instructors'}`)}
    />
  );
}
