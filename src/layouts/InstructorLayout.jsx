import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, PlusCircle, Users, Wallet,
  MessageSquare, UserRound, Settings,
} from 'lucide-react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardTopbar from '../components/DashboardTopbar';
import Toast from '../components/Toast';

const items = [
  { to: '/instructor/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/instructor/courses', label: 'My Courses', icon: BookOpen },
  { to: '/instructor/courses/create', label: 'Create Course', icon: PlusCircle },
  { to: '/instructor/students', label: 'Students', icon: Users },
  { to: '/instructor/earnings', label: 'Earnings', icon: Wallet },
  { to: '/instructor/messages', label: 'Messages', icon: MessageSquare },
  { to: '/instructor/profile', label: 'Profile', icon: UserRound },
  { to: '/instructor/settings', label: 'Settings', icon: Settings },
];

const titleMap = {
  '/instructor/dashboard': 'Instructor Dashboard',
  '/instructor/courses': 'My Courses',
  '/instructor/courses/create': 'Create Course',
  '/instructor/students': 'Students',
  '/instructor/earnings': 'Earnings',
  '/instructor/messages': 'Messages',
  '/instructor/profile': 'My Profile',
  '/instructor/settings': 'Settings',
};

export default function InstructorLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const title = titleMap[location.pathname] || 'Instructor Portal';

  return (
    <div className="min-h-screen flex bg-[#F7F7FB] dark:bg-navy-950">
      <DashboardSidebar items={items} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} roleLabel="Instructor Portal" />
      <div className="flex-1 min-w-0 flex flex-col">
        <DashboardTopbar onMenuClick={() => setMobileOpen(true)} title={title} />
        <main className="flex-1 p-4 sm:p-6 max-w-[1400px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
      <Toast />
    </div>
  );
}
