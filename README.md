# Skillbridge — LMS Platform (Frontend)

A complete, premium React frontend for a three-portal Learning Management
System — Student, Instructor, and Super Admin — built with Vite, Tailwind
CSS, and React Router.

> **Scope note:** This is a fully working **frontend** application with a
> realistic mock data layer (courses, users, enrollments, orders, etc.)
> standing in for a backend API. There is no real database, payment gateway,
> or server — logging in, buying a course, submitting an assignment, etc.
> all work against in-memory mock data so every screen is genuinely
> interactive. See "Connecting a real backend" below for how to wire it up
> to Node/Express/Prisma or any REST API.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serve the production build locally
```

Requires Node.js 18+.

## Demo accounts

Go to `/login` and either type credentials manually or use the one-click
"Quick demo login" buttons:

| Role       | Email                | Password   |
|------------|-----------------------|-----------|
| Student    | student@demo.com      | demo1234  |
| Instructor | instructor@demo.com   | demo1234  |
| Admin      | admin@demo.com        | demo1234  |

## What's included

- **Public site**: home, course marketplace with filters/search/sort,
  course detail pages (curriculum, reviews, instructor tab), categories,
  instructor marketplace + profiles, pricing, about/FAQ, contact form,
  404 and 403 pages.
- **Auth**: login, registration (student or instructor path), forgot
  password flow — all role-based and route-protected.
- **Student portal**: dashboard, my courses, a full course-learning page
  (video player UI, curriculum sidebar, notes, discussion, resources,
  progress tracking), wishlist, cart + coupon + mock checkout, quizzes
  (actually playable), assignments, certificates, messages, notifications,
  profile, settings.
- **Instructor portal**: dashboard with revenue chart, course list,
  a full multi-step "Create Course" wizard (info → curriculum
  drag-reorderable builder → pricing → resources → SEO → review/submit),
  student roster, earnings/payout view.
- **Admin portal**: dashboard with platform KPIs, student/instructor/course
  management tables (search, bulk select, row actions), categories, orders,
  payments, coupons, review moderation, certificates, and settings.
- Dark mode, responsive layouts (mobile sidebar drawers, mobile nav),
  toasts, skeleton loaders, empty states — all functional, not just styled.

## Project structure

```
src/
  components/     Reusable UI (CourseCard, DataTable, Navbar, StatsCard, ...)
  context/        AuthContext, ThemeContext, StoreContext (cart/wishlist)
  data/           Mock "API" data — shaped like real API responses
  layouts/        PublicLayout, AuthLayout, StudentLayout, InstructorLayout, AdminLayout
  pages/
    public/       Marketing site pages
    auth/         Login, Register, ForgotPassword
    student/      Student portal pages
    instructor/   Instructor portal pages
    admin/        Admin portal pages
  routes/         ProtectedRoute (role-based route guard)
```

## Connecting a real backend

Everything that would normally hit an API is isolated in `src/data/*.js`
(read-only mock data) and `src/context/AuthContext.jsx` /
`src/context/StoreContext.jsx` (mock actions). To connect a real backend:

1. Stand up your API (the original spec suggested Node.js + Express +
   PostgreSQL/MySQL + Prisma + JWT + bcrypt).
2. Replace the bodies of `login`, `register`, `logout` in
   `AuthContext.jsx` with calls to `POST /api/auth/login`,
   `/register`, etc., and store the returned JWT (e.g. in an httpOnly
   cookie or memory) instead of the mock user object.
3. Replace the static imports from `src/data/*.js` in each page with
   `fetch`/`axios` calls to the matching endpoint (e.g. `getCourseById`
   → `GET /api/courses/:id`), ideally via a small `src/services/api.js`
   wrapper and a data-fetching library like React Query.
4. Replace `addToCart` / `toggleWishlist` / cart totals in
   `StoreContext.jsx` with calls to `/api/cart` and `/api/wishlist`.
5. Wire the "Create Course" wizard's submit handler and the Admin
   approve/reject actions to real `POST /api/instructor/courses` and
   `PATCH /api/admin/courses/:id` endpoints.
6. Swap the mock "Pay ₹X" button in `Cart.jsx` for a real Razorpay/Stripe
   checkout session.

No component structure changes are required for this — the UI already
treats all of this data as if it came from an API.

## Tech stack

React 19 · Vite · Tailwind CSS 3 · React Router 6 · lucide-react icons
