// Demo accounts. In a real backend these would live in the User table
// and passwords would be bcrypt-hashed — this mock exists purely so the
// role-based flows are demoable without a server.
export const demoAccounts = [
  { id: 'u-student', name: 'Neeraj Kumar', email: 'student@demo.com', password: 'demo1234', role: 'student', avatar: 'https://i.pravatar.cc/160?img=68' },
  { id: 'u-instructor', name: 'Ananya Rao', email: 'instructor@demo.com', password: 'demo1234', role: 'instructor', avatar: 'https://i.pravatar.cc/160?img=47' },
  { id: 'u-admin', name: 'Admin User', email: 'admin@demo.com', password: 'demo1234', role: 'admin', avatar: 'https://i.pravatar.cc/160?img=5' },
];

export const studentEnrollments = [
  { courseId: 'c1', progress: 72, completedLessons: 30, totalLessons: 42, lastLesson: 'Facebook Ads Campaign Setup', enrolledAt: '2026-05-01', status: 'in-progress' },
  { courseId: 'c2', progress: 100, completedLessons: 58, totalLessons: 58, lastLesson: 'Deploying to Production', enrolledAt: '2026-02-14', status: 'completed', completedAt: '2026-04-02' },
  { courseId: 'c4', progress: 35, completedLessons: 11, totalLessons: 30, lastLesson: 'Logo System Basics', enrolledAt: '2026-06-20', status: 'in-progress' },
  { courseId: 'c5', progress: 100, completedLessons: 22, totalLessons: 22, lastLesson: 'Building Your Investing Plan', enrolledAt: '2026-01-10', status: 'completed', completedAt: '2026-02-01' },
  { courseId: 'c9', progress: 0, completedLessons: 0, totalLessons: 20, lastLesson: null, enrolledAt: '2026-08-20', status: 'not-started' },
];

export const certificates = [
  { id: 'CERT-2026-3381', courseId: 'c2', issuedDate: '2026-04-02', studentName: 'Neeraj Kumar', instructor: 'Rohan Mehta' },
  { id: 'CERT-2026-1147', courseId: 'c5', issuedDate: '2026-02-01', studentName: 'Neeraj Kumar', instructor: 'Priya Nair' },
];

export const wishlistCourseIds = ['c3', 'c6', 'c7'];

export const cartCourseIds = ['c3'];

export const learningActivity = [
  { day: 'Mon', minutes: 45 },
  { day: 'Tue', minutes: 20 },
  { day: 'Wed', minutes: 60 },
  { day: 'Thu', minutes: 0 },
  { day: 'Fri', minutes: 35 },
  { day: 'Sat', minutes: 90 },
  { day: 'Sun', minutes: 50 },
];

export const upcomingTasks = [
  { id: 't1', type: 'assignment', title: 'SEO Strategy Assignment', course: 'Complete Digital Marketing Masterclass', due: 'Tomorrow' },
  { id: 't2', type: 'quiz', title: 'Routing Knowledge Check', course: 'React Full-Stack Developer Bootcamp', due: 'In 3 days' },
  { id: 't3', type: 'certificate', title: 'Certificate ready to download', course: 'Personal Finance & Investing 101', due: 'Available now' },
];

export const quizzes = [
  {
    id: 'q1', courseId: 'c1', title: 'SEO Fundamentals Quiz', questions: 10, timeLimit: '15 min', attemptsAllowed: 2,
    attempts: [{ score: 8, total: 10, date: '2026-07-02', passed: true }],
  },
  {
    id: 'q2', courseId: 'c2', title: 'Routing Knowledge Check', questions: 8, timeLimit: '10 min', attemptsAllowed: 3, attempts: [],
  },
];

export const assignments = [
  {
    id: 'a1', courseId: 'c1', title: 'Build a Live Ad Campaign', due: '2026-09-05', status: 'pending',
    description: 'Create a full campaign brief for a Meta Ads campaign including targeting, budget and creative direction.',
  },
  {
    id: 'a2', courseId: 'c2', title: 'Ship Your Capstone Project', due: '2026-08-15', status: 'graded', marks: '92/100',
    feedback: 'Clean architecture and great commit hygiene. Consider adding tests next time.',
    description: 'Deploy a full-stack React application with authentication to production.',
  },
];

// ---- Instructor-facing mock data ----
export const instructorCourses = [
  { courseId: 'c1', status: 'published', students: 12500, revenue: 1842000, rating: 4.9 },
  { courseId: 'c5', status: 'published', students: 15200, revenue: 912000, rating: 4.7 },
  { courseId: 'c8', status: 'pending', students: 0, revenue: 0, rating: 0 },
];

export const instructorStudentsList = [
  { name: 'Neeraj Kumar', course: 'Complete Digital Marketing Masterclass', enrolledAt: '2026-05-01', progress: 72, lastActivity: '2 days ago' },
  { name: 'Simran Kaur', course: 'Complete Digital Marketing Masterclass', enrolledAt: '2026-06-11', progress: 44, lastActivity: 'Today' },
  { name: 'Aman Gupta', course: 'Personal Finance & Investing 101', enrolledAt: '2026-03-02', progress: 100, lastActivity: '3 weeks ago' },
  { name: 'Ritu Malhotra', course: 'Complete Digital Marketing Masterclass', enrolledAt: '2026-07-20', progress: 18, lastActivity: 'Yesterday' },
];

export const instructorEarningsHistory = [
  { month: 'Mar', revenue: 210000 },
  { month: 'Apr', revenue: 265000 },
  { month: 'May', revenue: 298000 },
  { month: 'Jun', revenue: 340000 },
  { month: 'Jul', revenue: 388000 },
  { month: 'Aug', revenue: 421000 },
];

// ---- Admin-facing mock data ----
export const adminStats = {
  totalRevenue: 48210000,
  totalStudents: 10420,
  totalInstructors: 138,
  totalCourses: 512,
  totalOrders: 18240,
  activeCourses: 468,
  pendingCourses: 12,
  pendingInstructors: 5,
  conversionRate: 4.2,
};

export const adminRevenueTrend = [
  { month: 'Mar', revenue: 3200000 },
  { month: 'Apr', revenue: 3650000 },
  { month: 'May', revenue: 4020000 },
  { month: 'Jun', revenue: 4380000 },
  { month: 'Jul', revenue: 4710000 },
  { month: 'Aug', revenue: 5120000 },
];

export const adminOrders = [
  { id: 'ORD-88213', student: 'Simran Kaur', course: 'Complete Digital Marketing Masterclass', amount: 4999, status: 'Paid', gateway: 'Razorpay', date: '2026-08-27' },
  { id: 'ORD-88214', student: 'Aman Gupta', course: 'React Full-Stack Developer Bootcamp', amount: 5499, status: 'Paid', gateway: 'Razorpay', date: '2026-08-27' },
  { id: 'ORD-88215', student: 'Ritu Malhotra', course: 'Applied Machine Learning with Python', amount: 6999, status: 'Refunded', gateway: 'Stripe', date: '2026-08-26' },
  { id: 'ORD-88216', student: 'Kabir Anand', course: 'Video Editing with Premiere & After Effects', amount: 3499, status: 'Failed', gateway: 'Razorpay', date: '2026-08-25' },
  { id: 'ORD-88217', student: 'Tara Bhatt', course: 'Photography Fundamentals for Beginners', amount: 2499, status: 'Paid', gateway: 'Razorpay', date: '2026-08-25' },
];

export const adminStudentsList = [
  { name: 'Neeraj Kumar', email: 'student@demo.com', courses: 5, joined: '2026-01-10', status: 'Active' },
  { name: 'Simran Kaur', email: 'simran.k@example.com', courses: 2, joined: '2026-06-11', status: 'Active' },
  { name: 'Aman Gupta', email: 'aman.g@example.com', courses: 3, joined: '2026-03-02', status: 'Active' },
  { name: 'Ritu Malhotra', email: 'ritu.m@example.com', courses: 1, joined: '2026-07-20', status: 'Suspended' },
];

export const adminInstructorsList = [
  { name: 'Ananya Rao', email: 'instructor@demo.com', courses: 6, students: 48210, status: 'Approved' },
  { name: 'Rohan Mehta', email: 'rohan.m@example.com', courses: 9, students: 61240, status: 'Approved' },
  { name: 'Dr. Kavita Iyer', email: 'kavita.i@example.com', courses: 4, students: 27650, status: 'Approved' },
  { name: 'Neel Kashyap', email: 'neel.k@example.com', courses: 0, students: 0, status: 'Pending' },
];
