import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Single Course',
    price: 'Pay per course',
    description: 'Best if you know exactly what you want to learn next.',
    features: ['Lifetime access to the course', 'Certificate on completion', 'Downloadable resources', 'Instructor Q&A access'],
    cta: 'Browse Courses',
    to: '/courses',
    highlight: false,
  },
  {
    name: 'Skillbridge Plus',
    price: '₹999/mo',
    description: 'Unlimited access to our full course library.',
    features: ['Access to 500+ courses', 'New courses added monthly', 'Priority instructor support', 'Team progress reports', 'Offline downloads'],
    cta: 'Start Learning',
    to: '/register',
    highlight: true,
  },
  {
    name: 'For Teams',
    price: 'Custom pricing',
    description: 'Bring practical upskilling to your whole organization.',
    features: ['Bulk seat licensing', 'Admin dashboard & reporting', 'Dedicated account manager', 'Custom learning paths'],
    cta: 'Contact Sales',
    to: '/contact',
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <div className="container-shell py-16">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 dark:text-white">Simple, transparent pricing</h1>
        <p className="text-navy-400 dark:text-slate-400 mt-2">Pay per course, go unlimited, or bring your whole team.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-xl p-8 border ${p.highlight ? 'bg-brand-gradient text-white border-transparent shadow-lift lg:-translate-y-3' : 'card-surface'}`}>
            {p.highlight && <span className="badge bg-white/20 text-white mb-4">Most Popular</span>}
            <h3 className={`font-display text-xl font-bold ${p.highlight ? 'text-white' : 'text-navy-900 dark:text-white'}`}>{p.name}</h3>
            <p className={`font-display text-3xl font-extrabold mt-3 mb-2 ${p.highlight ? 'text-white' : 'text-navy-900 dark:text-white'}`}>{p.price}</p>
            <p className={`text-sm mb-6 ${p.highlight ? 'text-white/80' : 'text-navy-400 dark:text-slate-400'}`}>{p.description}</p>
            <ul className="space-y-3 mb-8">
              {p.features.map((f) => (
                <li key={f} className={`flex items-start gap-2.5 text-sm ${p.highlight ? 'text-white/90' : 'text-navy-600 dark:text-slate-300'}`}>
                  <Check size={16} className={p.highlight ? 'text-white' : 'text-emerald-500'} /> {f}
                </li>
              ))}
            </ul>
            <Link to={p.to} className={p.highlight ? 'btn bg-white text-navy-900 w-full !py-3' : 'btn-primary w-full !py-3'}>{p.cta}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
