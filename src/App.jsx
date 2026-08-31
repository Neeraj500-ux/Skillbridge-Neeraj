import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { StoreProvider } from './context/StoreContext';

import PublicLayout from './layouts/PublicLayout';
import AuthLayout from './layouts/AuthLayout';
import StudentLayout from './layouts/StudentLayout';
import InstructorLayout from './layouts/InstructorLayout';
import AdminLayout from './layouts/AdminLayout';
import ProtectedRoute from './routes/ProtectedRoute';

// Public
import Home from './pages/public/Home';
import Courses from './pages/public/Courses';
import Categories from './pages/public/Categories';
import CourseDetail from './pages/public/CourseDetail';
import Instructors from './pages/public/Instructors';
import InstructorProfile from './pages/public/InstructorProfile';
import Pricing from './pages/public/Pricing';
import About from './pages/public/About';
import Contact from './pages/public/Contact';
import NotFound from './pages/public/NotFound';
import AccessDenied from './pages/public/AccessDenied';

// Auth
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';

// Student
import StudentDashboard from './pages/student/Dashboard';
import MyCourses from './pages/student/MyCourses';
import CourseLearning from './pages/student/CourseLearning';
import Certificates from './pages/student/Certificates';
import Wishlist from './pages/student/Wishlist';
import Cart from './pages/student/Cart';
import Quizzes from './pages/student/Quizzes';
import Assignments from './pages/student/Assignments';
import { Notes, Messages as StudentMessages, Notifications } from './pages/student/MiscPages';
import Profile from './pages/student/Profile';
import Settings from './pages/student/Settings';

// Instructor
import InstructorDashboard from './pages/instructor/Dashboard';
import InstructorCourses from './pages/instructor/InstructorCourses';
import CreateCourse from './pages/instructor/CreateCourse';
import { InstructorStudents, InstructorEarnings } from './pages/instructor/InstructorMisc';

// Admin
import AdminDashboard from './pages/admin/Dashboard';
import AdminStudents from './pages/admin/AdminStudents';
import AdminInstructors from './pages/admin/AdminInstructors';
import AdminCourses from './pages/admin/AdminCourses';
import {
  AdminCategories, AdminOrders, AdminPayments, AdminCoupons,
  AdminReviews, AdminCertificates, AdminSettings,
} from './pages/admin/AdminMisc';

export default function App() {
  return (
    <ThemeProvider>
      <StoreProvider>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              {/* Public site */}
              <Route element={<PublicLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/course/:slug" element={<CourseDetail />} />
                <Route path="/instructors" element={<Instructors />} />
                <Route path="/instructor/:id" element={<InstructorProfile />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/access-denied" element={<AccessDenied />} />
                <Route path="*" element={<NotFound />} />
              </Route>

              {/* Auth */}
              <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Route>

              {/* Student portal */}
              <Route element={<ProtectedRoute allowedRoles={['student']} />}>
                <Route element={<StudentLayout />}>
                  <Route path="/student/dashboard" element={<StudentDashboard />} />
                  <Route path="/student/courses" element={<MyCourses />} />
                  <Route path="/student/learn/:courseId" element={<CourseLearning />} />
                  <Route path="/student/wishlist" element={<Wishlist />} />
                  <Route path="/student/cart" element={<Cart />} />
                  <Route path="/student/certificates" element={<Certificates />} />
                  <Route path="/student/assignments" element={<Assignments />} />
                  <Route path="/student/quizzes" element={<Quizzes />} />
                  <Route path="/student/notes" element={<Notes />} />
                  <Route path="/student/messages" element={<StudentMessages />} />
                  <Route path="/student/notifications" element={<Notifications />} />
                  <Route path="/student/profile" element={<Profile />} />
                  <Route path="/student/settings" element={<Settings />} />
                </Route>
              </Route>

              {/* Instructor portal */}
              <Route element={<ProtectedRoute allowedRoles={['instructor']} />}>
                <Route element={<InstructorLayout />}>
                  <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
                  <Route path="/instructor/courses" element={<InstructorCourses />} />
                  <Route path="/instructor/courses/create" element={<CreateCourse />} />
                  <Route path="/instructor/students" element={<InstructorStudents />} />
                  <Route path="/instructor/earnings" element={<InstructorEarnings />} />
                  <Route path="/instructor/messages" element={<StudentMessages />} />
                  <Route path="/instructor/profile" element={<Profile />} />
                  <Route path="/instructor/settings" element={<Settings />} />
                </Route>
              </Route>

              {/* Admin portal */}
              <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
                <Route element={<AdminLayout />}>
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/admin/students" element={<AdminStudents />} />
                  <Route path="/admin/instructors" element={<AdminInstructors />} />
                  <Route path="/admin/courses" element={<AdminCourses />} />
                  <Route path="/admin/categories" element={<AdminCategories />} />
                  <Route path="/admin/orders" element={<AdminOrders />} />
                  <Route path="/admin/payments" element={<AdminPayments />} />
                  <Route path="/admin/coupons" element={<AdminCoupons />} />
                  <Route path="/admin/reviews" element={<AdminReviews />} />
                  <Route path="/admin/certificates" element={<AdminCertificates />} />
                  <Route path="/admin/settings" element={<AdminSettings />} />
                </Route>
              </Route>

              <Route path="/admin/login" element={<Navigate to="/login" replace />} />
              <Route path="/instructor/login" element={<Navigate to="/login" replace />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </StoreProvider>
    </ThemeProvider>
  );
}
