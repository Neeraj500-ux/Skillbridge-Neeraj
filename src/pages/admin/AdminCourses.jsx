import { courses } from '../../data/courses';
import { instructors } from '../../data/instructors';
import DataTable from '../../components/DataTable';
import { StatusBadge } from './Dashboard';
import { useStore } from '../../context/StoreContext';

const statuses = ['Published', 'Published', 'Pending', 'Published', 'Published', 'Rejected', 'Published', 'Published', 'Pending'];

export default function AdminCourses() {
  const { showToast } = useStore();
  const rows = courses.map((c, i) => ({
    title: c.title,
    instructor: instructors.find((ins) => ins.id === c.instructorId)?.name,
    price: `₹${c.salePrice.toLocaleString('en-IN')}`,
    students: c.studentsCount.toLocaleString('en-IN'),
    status: statuses[i] || 'Published',
  }));

  const columns = [
    { key: 'title', label: 'Course' },
    { key: 'instructor', label: 'Instructor' },
    { key: 'price', label: 'Price' },
    { key: 'students', label: 'Students' },
    { key: 'status', label: 'Status', render: (v) => <StatusBadge status={v} /> },
  ];

  return (
    <DataTable
      columns={columns}
      rows={rows}
      actions={['View', 'Approve', 'Reject', 'Feature', 'Delete']}
      onAction={(action, row) => showToast(`${action} — ${row.title || 'selected courses'}`)}
    />
  );
}
