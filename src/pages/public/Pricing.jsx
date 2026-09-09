import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Crown,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

const plans = [
  {
    name: 'Single Course',
    price: 'Pay per course',
    description: 'Best if you know exactly what you want to learn next.',
    features: [
      'Lifetime access to the course',
      'Certificate on completion',
      'Downloadable resources',
      'Instructor Q&A access',
    ],
    cta: 'Browse Courses',
    to: '/courses',
    highlight: false,
    icon: Zap,
    accent: 'from-sky-500 to-blue-600',
    iconStyle:
      'bg-sky-50 text-sky-600 ring-sky-100 dark:bg-sky-500/10 dark:text-sky-400 dark:ring-sky-500/20',
    checkStyle:
      'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  },
  {
    name: 'Skillbridge Plus',
    price: '₹999/mo',
    description: 'Unlimited access to our full course library.',
    features: [
      'Access to 500+ courses',
      'New courses added monthly',
      'Priority instructor support',
      'Team progress reports',
      'Offline downloads',
    ],
    cta: 'Start Learning',
    to: '/register',
    highlight: true,
    icon: Crown,
    accent: 'from-violet-500 to-blue-600',
  },
  {
    name: 'For Teams',
    price: 'Custom pricing',
    description: 'Bring practical upskilling to your whole organization.',
    features: [
      'Bulk seat licensing',
      'Admin dashboard & reporting',
      'Dedicated account manager',
      'Custom learning paths',
    ],
    cta: 'Contact Sales',
    to: '/contact',
    highlight: false,
    icon: Users,
    accent: 'from-violet-500 to-indigo-600',
    iconStyle:
      'bg-violet-50 text-violet-600 ring-violet-100 dark:bg-violet-500/10 dark:text-violet-400 dark:ring-violet-500/20',
    checkStyle:
      'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400',
  },
];

export default function Pricing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white py-16 sm:py-20 lg:py-24 dark:bg-slate-950">
      {/* Background decorations */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/15" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[120px] dark:bg-violet-500/15" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
            backgroundSize: '42px 42px',
          }}
        />
      </div>

      <div className="container-shell relative z-10 px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm backdrop-blur-xl dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300">
            <Sparkles size={14} />
            Flexible Pricing
          </div>

          <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-4xl lg:text-5xl dark:text-white">
            Simple, transparent{' '}
            <span className="relative inline-block bg-gradient-to-r from-blue-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              pricing
              <span className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-500/80 to-violet-500/80" />
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-navy-400 sm:text-lg dark:text-slate-400">
            Pay per course, go unlimited, or bring your whole team.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`group relative flex h-full flex-col overflow-hidden rounded-[24px] transition-all duration-500 ${
                  plan.highlight
                    ? 'bg-brand-gradient text-white shadow-2xl shadow-violet-600/25 lg:-translate-y-4 lg:scale-[1.025]'
                    : 'border border-slate-200/80 bg-white/90 shadow-lg shadow-slate-900/[0.05] backdrop-blur-xl hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-600/10 dark:border-white/10 dark:bg-slate-900/80 dark:hover:border-blue-500/40 dark:hover:shadow-blue-500/10'
                }`}
              >
                {/* Top accent */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.accent}`}
                />

                {/* Highlight effects */}
                {plan.highlight && (
                  <>
                    <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="absolute right-0 top-0 h-28 w-28 overflow-hidden">
                      <div className="absolute right-[-38px] top-[22px] w-[150px] rotate-45 bg-white/15 py-1 text-center text-[9px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                        Popular
                      </div>
                    </div>
                  </>
                )}

                {/* Card content */}
                <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
                  <div className="mb-7 flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                        plan.highlight
                          ? 'bg-white/15 text-white ring-white/20 shadow-lg shadow-black/10 backdrop-blur-xl'
                          : plan.iconStyle
                      }`}
                    >
                      <Icon size={23} strokeWidth={2.2} />
                    </div>

                    {plan.highlight && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm backdrop-blur-xl">
                        <Sparkles size={12} />
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h2
                    className={`font-display text-xl font-bold ${
                      plan.highlight
                        ? 'text-white'
                        : 'text-navy-900 dark:text-white'
                    }`}
                  >
                    {plan.name}
                  </h2>

                  <p
                    className={`mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-[34px] ${
                      plan.highlight
                        ? 'text-white'
                        : 'text-navy-900 dark:text-white'
                    }`}
                  >
                    {plan.price}
                  </p>

                  <p
                    className={`mt-3 min-h-[48px] text-sm leading-6 ${
                      plan.highlight
                        ? 'text-white/80'
                        : 'text-navy-400 dark:text-slate-400'
                    }`}
                  >
                    {plan.description}
                  </p>

                  <div
                    className={`my-7 h-px ${
                      plan.highlight
                        ? 'bg-white/20'
                        : 'bg-slate-200 dark:bg-white/10'
                    }`}
                  />

                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className={`flex items-start gap-3 text-sm leading-5 ${
                          plan.highlight
                            ? 'text-white/90'
                            : 'text-navy-600 dark:text-slate-300'
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.highlight
                              ? 'bg-white/15 text-white ring-1 ring-white/20'
                              : plan.checkStyle
                          }`}
                        >
                          <Check size={12} strokeWidth={3} />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      to={plan.to}
                      className={`group/button flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-300 active:scale-[0.98] ${
                        plan.highlight
                          ? 'bg-white text-navy-900 shadow-xl shadow-black/15 hover:bg-blue-50 hover:shadow-2xl'
                          : 'bg-brand-gradient text-white shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/30'
                      }`}
                    >
                      <span>{plan.cta}</span>

                      <ArrowRight
                        size={17}
                        className="transition-transform duration-300 group-hover/button:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>

                {/* Card hover shine */}
                <div className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 group-hover:left-[140%]" />
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}