import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, BookOpen, Heart, ShoppingCart, Award, ClipboardList,
  HelpCircle, StickyNote, MessageSquare, Bell, UserRound, Settings,
} from 'lucide-react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardTopbar from '../components/DashboardTopbar';
import Toast from '../components/Toast';

const items = [
  { to: '/student/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/student/courses', label: 'My Courses', icon: BookOpen },
  { to: '/student/wishlist', label: 'Wishlist', icon: Heart },
  { to: '/student/cart', label: 'Cart', icon: ShoppingCart },
  { to: '/student/certificates', label: 'Certificates', icon: Award },
  { to: '/student/assignments', label: 'Assignments', icon: ClipboardList },
  { to: '/student/quizzes', label: 'Quizzes', icon: HelpCircle },
  { to: '/student/notes', label: 'Notes', icon: StickyNote },
  { to: '/student/messages', label: 'Messages', icon: MessageSquare },
  { to: '/student/notifications', label: 'Notifications', icon: Bell },
  { to: '/student/profile', label: 'Profile', icon: UserRound },
  { to: '/student/settings', label: 'Settings', icon: Settings },
];

const titleMap = {
  '/student/dashboard': 'Dashboard',
  '/student/courses': 'My Courses',
  '/student/wishlist': 'Wishlist',
  '/student/cart': 'Cart',
  '/student/certificates': 'Certificates',
  '/student/assignments': 'Assignments',
  '/student/quizzes': 'Quizzes',
  '/student/notes': 'My Notes',
  '/student/messages': 'Messages',
  '/student/notifications': 'Notifications',
  '/student/profile': 'My Profile',
  '/student/settings': 'Settings',
};

export default function StudentLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const title = titleMap[location.pathname] || (location.pathname.includes('/learn/') ? 'Course Player' : 'Dashboard');

  return (
    <div className="min-h-screen flex bg-[#F7F7FB] dark:bg-navy-950">
      <DashboardSidebar items={items} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} roleLabel="Student Portal" />
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
