import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ShoppingCart, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import EmptyState from '../../components/EmptyState';

export default function Cart() {
  const { cartCourses, removeFromCart, cartTotal, cartOriginalTotal, showToast } = useStore();
  const [coupon, setCoupon] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [step, setStep] = useState('cart');
  const navigate = useNavigate();

  const applyCoupon = () => {
    if (coupon.trim().toUpperCase() === 'SAVE20') {
      setAppliedCoupon({ code: 'SAVE20', percent: 20 });
      showToast('Coupon applied — 20% off');
    } else {
      showToast('Invalid coupon code', 'info');
    }
  };

  const couponDiscount = appliedCoupon ? Math.round(cartTotal * (appliedCoupon.percent / 100)) : 0;
  const finalTotal = cartTotal - couponDiscount;

  if (cartCourses.length === 0 && step === 'cart') {
    return <EmptyState icon={ShoppingCart} title="Your cart is empty" message="Browse our courses and add something you'd like to learn." actionLabel="Explore Courses" actionTo="/courses" />;
  }

  if (step === 'success') {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={48} />
        <h2 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-2">Payment Successful</h2>
        <p className="text-navy-400 dark:text-slate-400 mb-8">You're enrolled! Your courses are now available in My Courses.</p>
        <div className="flex justify-center gap-3">
          <button onClick={() => navigate('/student/courses')} className="btn-primary">Start Learning</button>
          <button onClick={() => navigate('/student/dashboard')} className="btn-secondary">Go to Dashboard</button>
        </div>
      </div>
    );
  }

  if (step === 'payment') {
    return (
      <div className="max-w-md mx-auto">
        <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-6">Payment</h2>
        <div className="card-surface p-6 space-y-4">
          <p className="text-sm text-navy-500 dark:text-slate-400">Choose a payment method to complete your purchase of ₹{finalTotal.toLocaleString('en-IN')}.</p>
          <div className="space-y-2.5">
            {['Razorpay (UPI / Cards / Netbanking)', 'Stripe (International Cards)'].map((m) => (
              <label key={m} className="flex items-center gap-3 border border-navy-200 dark:border-white/10 rounded-md px-4 py-3 cursor-pointer hover:border-violet-400">
                <input type="radio" name="pay" defaultChecked={m.includes('Razorpay')} className="accent-violet-600" />
                <span className="text-sm text-navy-700 dark:text-slate-200">{m}</span>
              </label>
            ))}
          </div>
          <p className="flex items-center gap-1.5 text-xs text-navy-400"><ShieldCheck size={13} className="text-emerald-500" /> Payments are encrypted and secure.</p>
          <button onClick={() => setStep('success')} className="btn-primary w-full !py-3">Pay ₹{finalTotal.toLocaleString('en-IN')}</button>
          <button onClick={() => setStep('cart')} className="btn-ghost w-full">Back to Cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-[1fr_360px] gap-8">
      <div className="space-y-4">
        {cartCourses.map((course) => (
          <div key={course.id} className="card-surface p-4 flex gap-4 items-center">
            <img src={course.thumbnail} alt="" className="w-28 h-20 object-cover rounded-md shrink-0" />
            <div className="flex-1 min-w-0">
              <Link to={`/course/${course.slug}`} className="font-semibold text-sm text-navy-900 dark:text-white hover:text-violet-600 line-clamp-1">{course.title}</Link>
              <p className="text-xs text-navy-400 mt-1">{course.level}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="font-display font-bold text-navy-900 dark:text-white">₹{course.salePrice.toLocaleString('en-IN')}</p>
              <p className="text-xs text-navy-300 line-through">₹{course.price.toLocaleString('en-IN')}</p>
            </div>
            <button onClick={() => removeFromCart(course.id)} className="h-9 w-9 rounded-md border border-navy-200 dark:border-white/10 flex items-center justify-center text-red-500 shrink-0"><Trash2 size={14} /></button>
          </div>
        ))}
      </div>

      <div className="card-surface p-6 h-fit sticky top-24">
        <h3 className="font-display font-bold text-navy-900 dark:text-white mb-5">Order Summary</h3>
        <div className="space-y-2.5 text-sm mb-5">
          <div className="flex justify-between text-navy-500 dark:text-slate-400"><span>Subtotal</span><span>₹{cartOriginalTotal.toLocaleString('en-IN')}</span></div>
          <div className="flex justify-between text-emerald-600"><span>Course discount</span><span>-₹{(cartOriginalTotal - cartTotal).toLocaleString('en-IN')}</span></div>
          {appliedCoupon && <div className="flex justify-between text-emerald-600"><span>Coupon ({appliedCoupon.code})</span><span>-₹{couponDiscount.toLocaleString('en-IN')}</span></div>}
        </div>

        <div className="flex gap-2 mb-5">
          <div className="relative flex-1">
            <Tag size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-300" />
            <input value={coupon} onChange={(e) => setCoupon(e.target.value)} placeholder="Coupon code (try SAVE20)" className="input-field !pl-8 !py-2 text-sm" />
          </div>
          <button onClick={applyCoupon} className="btn-secondary !py-2 text-xs">Apply</button>
        </div>

        <div className="flex justify-between items-baseline border-t border-navy-100 dark:border-white/10 pt-4 mb-5">
          <span className="font-semibold text-navy-700 dark:text-slate-200">Total</span>
          <span className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">₹{finalTotal.toLocaleString('en-IN')}</span>
        </div>
        <button onClick={() => setStep('payment')} className="btn-primary w-full !py-3">Proceed to Checkout</button>
      </div>
    </div>
  );
}
