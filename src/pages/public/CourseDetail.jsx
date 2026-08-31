import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  Star, Clock, BookOpen, BarChart3, Globe, CalendarClock, CheckCircle2, Heart,
  ShoppingCart, ChevronDown, PlayCircle, FileText, HelpCircle, ClipboardList, Lock, ShieldCheck,
} from 'lucide-react';
import { getCourseBySlug } from '../../data/courses';
import { instructors } from '../../data/instructors';
import Rating from '../../components/Rating';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';
import NotFound from './NotFound';

const lessonIcon = { video: PlayCircle, text: FileText, pdf: FileText, quiz: HelpCircle, assignment: ClipboardList };

export default function CourseDetail() {
  const { slug } = useParams();
  const course = getCourseBySlug(slug);
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartIds, wishlistIds, addToCart, toggleWishlist } = useStore();
  const [openModule, setOpenModule] = useState('m1');
  const [tab, setTab] = useState('curriculum');

  if (!course) return <NotFound />;

  const instructor = instructors.find((i) => i.id === course.instructorId);
  const inCart = cartIds.includes(course.id);
  const inWishlist = wishlistIds.includes(course.id);
  const totalLessons = course.curriculum.reduce((s, m) => s + m.lessons.length, 0);
  const discount = Math.round(100 - (course.salePrice / course.price) * 100);

  const buyNow = () => {
    addToCart(course.id);
    navigate('/student/cart');
  };

  return (
    <div>
      <section className="bg-navy-950 text-white">
        <div className="container-shell py-12 grid lg:grid-cols-[1fr_380px] gap-10">
          <div>
            <p className="text-xs font-semibold text-violet-300 uppercase tracking-wide mb-3">{course.level}</p>
            <h1 className="font-display text-2xl sm:text-3xl lg:text-[34px] font-extrabold leading-tight mb-3">{course.title}</h1>
            <p className="text-slate-300 max-w-2xl mb-4">{course.subtitle}</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-300">
              <Rating value={course.rating} students={course.studentsCount} />
              <span className="flex items-center gap-1.5"><CalendarClock size={14} /> Updated {new Date(course.updatedAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}</span>
              <span className="flex items-center gap-1.5"><Globe size={14} /> {course.language}</span>
            </div>
            {instructor && (
              <Link to={`/instructor/${instructor.id}`} className="flex items-center gap-2.5 mt-5">
                <img src={instructor.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
                <span className="text-sm">Created by <span className="font-semibold underline decoration-violet-400">{instructor.name}</span></span>
              </Link>
            )}
          </div>
        </div>
      </section>

      <div className="container-shell py-10 grid lg:grid-cols-[1fr_380px] gap-10">
        <div className="order-2 lg:order-1">
          {/* Tabs */}
          <div className="flex gap-1 border-b border-navy-100 dark:border-white/10 mb-8 overflow-x-auto">
            {[['overview', 'Overview'], ['curriculum', 'Curriculum'], ['instructor', 'Instructor'], ['reviews', 'Reviews']].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-4 py-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${tab === key ? 'border-violet-600 text-violet-600 dark:text-violet-300' : 'border-transparent text-navy-400 hover:text-navy-700 dark:hover:text-slate-200'}`}
              >
                {label}
              </button>
            ))}
          </div>

          {tab === 'overview' && (
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-3">Course Description</h2>
                <p className="text-navy-500 dark:text-slate-400 leading-relaxed">{course.description}</p>
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-4">What You'll Learn</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {course.learnOutcomes.map((o) => (
                    <div key={o} className="flex items-start gap-2.5">
                      <CheckCircle2 size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                      <p className="text-sm text-navy-600 dark:text-slate-300">{o}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'curriculum' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white">Course Curriculum</h2>
                <p className="text-sm text-navy-400">{course.curriculum.length} modules · {totalLessons} lessons</p>
              </div>
              <div className="space-y-3">
                {course.curriculum.map((module, idx) => {
                  const isOpen = openModule === module.id;
                  return (
                    <div key={module.id} className="card-surface overflow-hidden">
                      <button onClick={() => setOpenModule(isOpen ? null : module.id)} className="w-full flex items-center justify-between px-5 py-4 text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-violet-500">{String(idx + 1).padStart(2, '0')}</span>
                          <div>
                            <p className="font-semibold text-sm text-navy-900 dark:text-white">{module.title}</p>
                            <p className="text-xs text-navy-400">{module.lessons.length} lessons · {module.duration}</p>
                          </div>
                        </div>
                        <ChevronDown size={16} className={`text-navy-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isOpen && (
                        <div className="border-t border-navy-100 dark:border-white/10">
                          {module.lessons.map((lesson) => {
                            const Icon = lessonIcon[lesson.type] || PlayCircle;
                            return (
                              <div key={lesson.id} className="flex items-center justify-between px-5 py-3 text-sm border-b border-navy-50 dark:border-white/5 last:border-0">
                                <div className="flex items-center gap-3 text-navy-600 dark:text-slate-300">
                                  <Icon size={15} className="text-navy-400" />
                                  <span>{lesson.title}</span>
                                  {lesson.preview && <span className="badge bg-emerald-500/10 text-emerald-600 !py-0.5 !px-2">Preview</span>}
                                </div>
                                <div className="flex items-center gap-3 text-xs text-navy-400 shrink-0">
                                  <span>{lesson.duration}</span>
                                  {!lesson.preview && <Lock size={13} />}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {tab === 'instructor' && instructor && (
            <div className="card-surface p-6">
              <div className="flex items-start gap-5">
                <img src={instructor.avatar} alt="" className="h-20 w-20 rounded-full object-cover" />
                <div>
                  <p className="font-display text-lg font-bold text-navy-900 dark:text-white">{instructor.name}</p>
                  <p className="text-sm text-navy-400 mb-2">{instructor.title}</p>
                  <Rating value={instructor.rating} students={instructor.students} size={12} />
                </div>
              </div>
              <p className="text-sm text-navy-500 dark:text-slate-400 leading-relaxed mt-5">{instructor.bio}</p>
              <Link to={`/instructor/${instructor.id}`} className="btn-secondary mt-5 inline-flex">View Full Profile</Link>
            </div>
          )}

          {tab === 'reviews' && (
            <div>
              <div className="flex flex-col sm:flex-row gap-8 mb-8">
                <div className="text-center shrink-0">
                  <p className="font-display text-4xl font-extrabold text-navy-900 dark:text-white">{course.rating.toFixed(1)}</p>
                  <div className="flex justify-center my-1"><Rating value={course.rating} showValue={false} /></div>
                  <p className="text-xs text-navy-400">{course.studentsCount.toLocaleString('en-IN')} ratings</p>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-2 text-xs">
                      <span className="w-8 text-navy-500">{star} <Star size={10} className="inline mb-0.5" fill="currentColor" /></span>
                      <div className="flex-1 h-2 rounded-full bg-navy-100 dark:bg-white/10 overflow-hidden">
                        <div className="h-2 bg-amber-500 rounded-full" style={{ width: `${course.ratingBreakdown[star]}%` }} />
                      </div>
                      <span className="w-8 text-navy-400">{course.ratingBreakdown[star]}%</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                {course.reviews.map((r) => (
                  <div key={r.id} className="card-surface p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <img src={r.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
                      <div>
                        <p className="text-sm font-semibold text-navy-900 dark:text-white">{r.name}</p>
                        <div className="flex items-center gap-2">
                          <Rating value={r.rating} showValue={false} size={11} />
                          <span className="text-xs text-navy-400">{r.date}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-navy-500 dark:text-slate-400">{r.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Enrollment card */}
        <div className="order-1 lg:order-2">
          <div className="card-surface p-5 sticky top-24 -mt-32 lg:-mt-40 relative z-10">
            <img src={course.thumbnail} alt={course.title} className="w-full h-44 object-cover rounded-md mb-5" />
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-display text-3xl font-extrabold text-navy-900 dark:text-white">₹{course.salePrice.toLocaleString('en-IN')}</span>
              <span className="text-navy-300 line-through text-sm">₹{course.price.toLocaleString('en-IN')}</span>
            </div>
            <p className="text-sm font-semibold text-emerald-600 mb-5">{discount}% off — limited time</p>

            <button onClick={buyNow} className="btn-primary w-full !py-3 mb-2.5">Buy Now</button>
            <button onClick={() => addToCart(course.id)} disabled={inCart} className="btn-secondary w-full !py-3 mb-2.5">
              <ShoppingCart size={15} /> {inCart ? 'Already in Cart' : 'Add to Cart'}
            </button>
            <button onClick={() => toggleWishlist(course.id)} className="btn-ghost w-full !py-2.5">
              <Heart size={15} className={inWishlist ? 'text-red-500' : ''} fill={inWishlist ? 'currentColor' : 'none'} />
              {inWishlist ? 'Saved to Wishlist' : 'Add to Wishlist'}
            </button>

            <p className="flex items-center justify-center gap-1.5 text-xs text-navy-400 mt-4">
              <ShieldCheck size={14} className="text-emerald-500" /> 30-Day Money-Back Guarantee
            </p>

            <div className="border-t border-navy-100 dark:border-white/10 mt-5 pt-5 space-y-2.5 text-sm">
              <InfoRow icon={Clock} label="Duration" value={course.duration} />
              <InfoRow icon={BookOpen} label="Lessons" value={`${course.lessonsCount} lessons`} />
              <InfoRow icon={BarChart3} label="Level" value={course.level} />
              <InfoRow icon={Globe} label="Language" value={course.language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-2 text-navy-400"><Icon size={14} /> {label}</span>
      <span className="font-medium text-navy-700 dark:text-slate-200">{value}</span>
    </div>
  );
}
