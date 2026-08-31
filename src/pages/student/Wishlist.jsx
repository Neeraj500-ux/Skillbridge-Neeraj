import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Trash2 } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import Rating from '../../components/Rating';
import EmptyState from '../../components/EmptyState';

export default function Wishlist() {
  const { wishlistCourses, toggleWishlist, addToCart } = useStore();

  if (wishlistCourses.length === 0) {
    return <EmptyState icon={Heart} title="No wishlist courses" message="Save courses you're interested in to come back to them later." actionLabel="Explore Courses" actionTo="/courses" />;
  }

  return (
    <div className="space-y-4">
      {wishlistCourses.map((course) => (
        <div key={course.id} className="card-surface p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <img src={course.thumbnail} alt="" className="w-full sm:w-32 h-24 object-cover rounded-md shrink-0" />
          <div className="flex-1 min-w-0">
            <Link to={`/course/${course.slug}`} className="font-semibold text-sm text-navy-900 dark:text-white hover:text-violet-600">{course.title}</Link>
            <div className="mt-1"><Rating value={course.rating} students={course.studentsCount} size={12} /></div>
          </div>
          <div className="text-right shrink-0">
            <p className="font-display font-bold text-navy-900 dark:text-white">₹{course.salePrice.toLocaleString('en-IN')}</p>
            <p className="text-xs text-navy-300 line-through">₹{course.price.toLocaleString('en-IN')}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button onClick={() => addToCart(course.id)} className="btn-secondary !py-2 text-xs"><ShoppingCart size={13} /> Add to Cart</button>
            <button onClick={() => toggleWishlist(course.id)} className="h-9 w-9 rounded-md border border-navy-200 dark:border-white/10 flex items-center justify-center text-red-500"><Trash2 size={14} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
