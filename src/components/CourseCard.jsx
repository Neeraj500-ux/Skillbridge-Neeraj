import { Link } from 'react-router-dom';
import { Heart, Clock, BookOpen } from 'lucide-react';
import Rating from './Rating';
import { instructors } from '../data/instructors';
import { useStore } from '../context/StoreContext';

export default function CourseCard({ course }) {
  const instructor = instructors.find((i) => i.id === course.instructorId);
  const { wishlistIds, toggleWishlist } = useStore();
  const isWishlisted = wishlistIds.includes(course.id);
  const discount = Math.round(100 - (course.salePrice / course.price) * 100);

  return (
    <div className="group card-surface overflow-hidden flex flex-col h-full transition-all duration-250 hover:shadow-lift hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <Link to={`/course/${course.slug}`}>
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        <div className="absolute top-3 left-3 flex gap-1.5">
          {course.isBestseller && <span className="badge bg-amber-500 text-white">Bestseller</span>}
          {course.isNew && <span className="badge bg-electric-500 text-white">New</span>}
        </div>
        <button
          onClick={() => toggleWishlist(course.id)}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/90 dark:bg-navy-900/80 flex items-center justify-center shadow-soft focus-ring"
        >
          <Heart size={15} className={isWishlisted ? 'text-red-500' : 'text-navy-400'} fill={isWishlisted ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">
          {course.level}
        </span>
        <Link to={`/course/${course.slug}`}>
          <h3 className="font-display font-bold text-[15px] leading-snug mt-1.5 mb-1.5 text-navy-900 dark:text-white line-clamp-2 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">
            {course.title}
          </h3>
        </Link>
        {instructor && <p className="text-xs text-navy-400 dark:text-slate-400 mb-2">{instructor.name}</p>}
        <Rating value={course.rating} students={course.studentsCount} size={12} />

        <div className="flex items-center gap-3 text-xs text-navy-400 dark:text-slate-400 mt-2.5">
          <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
          <span className="flex items-center gap-1"><BookOpen size={12} /> {course.lessonsCount} lessons</span>
        </div>

        <div className="mt-auto pt-3.5 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-extrabold text-navy-900 dark:text-white">₹{course.salePrice.toLocaleString('en-IN')}</span>
            <span className="text-xs text-navy-300 line-through">₹{course.price.toLocaleString('en-IN')}</span>
          </div>
          <span className="text-xs font-semibold text-emerald-600">{discount}% off</span>
        </div>
        <Link to={`/course/${course.slug}`} className="btn-secondary w-full mt-3 !py-2 text-xs">
          View Course
        </Link>
      </div>
    </div>
  );
}
