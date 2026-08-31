import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import {
  LayoutDashboard, Users, GraduationCap, BookOpen, FolderTree,
  ShoppingBag, CreditCard, Ticket, Star, Award, Settings,
} from 'lucide-react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardTopbar from '../components/DashboardTopbar';
import Toast from '../components/Toast';

const items = [
  { to: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard, end: true },
  { to: '/admin/students', label: 'Students', icon: Users },
  { to: '/admin/instructors', label: 'Instructors', icon: GraduationCap },
  { to: '/admin/courses', label: 'Courses', icon: BookOpen },
  { to: '/admin/categories', label: 'Categories', icon: FolderTree },
  { to: '/admin/orders', label: 'Orders', icon: ShoppingBag },
  { to: '/admin/payments', label: 'Payments', icon: CreditCard },
  { to: '/admin/coupons', label: 'Coupons', icon: Ticket },
  { to: '/admin/reviews', label: 'Reviews', icon: Star },
  { to: '/admin/certificates', label: 'Certificates', icon: Award },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
];

const titleMap = {
  '/admin/dashboard': 'Admin Dashboard',
  '/admin/students': 'Student Management',
  '/admin/instructors': 'Instructor Management',
  '/admin/courses': 'Course Management',
  '/admin/categories': 'Category Management',
  '/admin/orders': 'Order Management',
  '/admin/payments': 'Payment Management',
  '/admin/coupons': 'Coupon Management',
  '/admin/reviews': 'Review Moderation',
  '/admin/certificates': 'Certificates',
  '/admin/settings': 'Platform Settings',
};

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const title = titleMap[location.pathname] || 'Admin Portal';

  return (
    <div className="min-h-screen flex bg-[#F7F7FB] dark:bg-navy-950">
      <DashboardSidebar items={items} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} roleLabel="Super Admin" />
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
