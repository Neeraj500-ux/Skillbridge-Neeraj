import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Crown,
  GraduationCap,
  Sparkles,
  Users,
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
    icon: GraduationCap,
    highlight: false,
    accent: 'from-cyan-400 via-blue-500 to-indigo-500',
    iconClass:
      'bg-blue-50 text-blue-600 ring-blue-100 dark:bg-blue-500/10 dark:text-blue-300 dark:ring-blue-400/20',
  },
  {
    name: 'Skillbridge Plus',
    price: '₹999',
    suffix: '/mo',
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
    icon: Crown,
    highlight: true,
    accent: 'from-blue-400 via-violet-400 to-fuchsia-400',
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
    icon: Users,
    highlight: false,
    accent: 'from-violet-500 via-indigo-500 to-blue-500',
    iconClass:
      'bg-violet-50 text-violet-600 ring-violet-100 dark:bg-violet-500/10 dark:text-violet-300 dark:ring-violet-400/20',
  },
];

export default function Pricing() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-28 dark:bg-[#050816]">
      {/* Premium background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[460px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/15 blur-[110px] dark:bg-blue-500/20" />
        <div className="absolute -left-32 top-1/2 h-80 w-80 rounded-full bg-cyan-400/10 blur-[100px] motion-safe:animate-pulse" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-500/10 blur-[110px] motion-safe:animate-pulse [animation-delay:1.2s]" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
            backgroundSize: '48px 48px',
            maskImage: 'linear-gradient(to bottom, black 30%, transparent 95%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black 30%, transparent 95%)',
          }}
        />

        <div className="absolute left-[12%] top-28 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_16px_4px_rgba(59,130,246,0.45)] motion-safe:animate-pulse" />
        <div className="absolute right-[16%] top-44 h-1 w-1 rounded-full bg-violet-500 shadow-[0_0_14px_4px_rgba(139,92,246,0.5)] motion-safe:animate-pulse [animation-delay:700ms]" />
      </div>

      <div className="container-shell relative z-10 px-4 sm:px-6">
        {/* Header */}
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-blue-700 shadow-[0_8px_30px_rgba(37,99,235,0.1)] backdrop-blur-xl dark:border-blue-400/20 dark:bg-white/[0.06] dark:text-blue-300">
            <Sparkles size={14} className="motion-safe:animate-pulse" />
            Flexible Pricing
          </div>

          <h1 className="font-display text-4xl font-black tracking-[-0.035em] text-navy-900 sm:text-5xl lg:text-6xl dark:text-white">
            Simple pricing.
            <span className="mt-1 block bg-gradient-to-r from-blue-600 via-violet-600 to-blue-500 bg-clip-text text-transparent">
              Serious learning.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-navy-400 sm:text-lg dark:text-slate-400">
            Pay per course, go unlimited, or bring your whole team.
          </p>
        </header>

        {/* Cards */}
        <section className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <article
                key={plan.name}
                className={`group relative flex min-h-[540px] flex-col rounded-[28px] transition-all duration-500 hover:-translate-y-2 ${
                  plan.highlight
                    ? 'overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-[1px] shadow-[0_28px_80px_-24px_rgba(79,70,229,0.65)] lg:-translate-y-4 lg:scale-[1.035] lg:hover:-translate-y-6'
                    : 'border border-slate-200/80 bg-white/80 p-[1px] shadow-[0_20px_60px_-35px_rgba(15,23,42,0.35)] backdrop-blur-xl hover:border-blue-300 hover:shadow-[0_28px_70px_-30px_rgba(37,99,235,0.35)] dark:border-white/10 dark:bg-white/[0.055] dark:hover:border-blue-400/30'
                }`}
              >
                {/* Animated glow */}
                {plan.highlight && (
                  <>
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/25 blur-3xl motion-safe:animate-pulse" />
                    <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-fuchsia-400/20 blur-3xl motion-safe:animate-pulse [animation-delay:1s]" />
                    <div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/15 to-transparent transition-all duration-1000 group-hover:left-[135%]" />
                  </>
                )}

                <div
                  className={`relative flex h-full flex-1 flex-col overflow-hidden rounded-[27px] p-7 sm:p-8 ${
                    plan.highlight
                      ? 'bg-gradient-to-br from-blue-600/70 via-indigo-700/80 to-violet-800/90 text-white backdrop-blur-xl'
                      : 'bg-white/90 dark:bg-[#0b1022]/90'
                  }`}
                >
                  <div
                    className={`absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent ${plan.accent} to-transparent opacity-90`}
                  />

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="mb-8 flex items-start justify-between gap-3">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ring-1 shadow-lg transition-all duration-500 group-hover:-rotate-6 group-hover:scale-110 ${
                          plan.highlight
                            ? 'bg-white/15 text-white ring-white/20 backdrop-blur-xl'
                            : plan.iconClass
                        }`}
                      >
                        <Icon size={25} strokeWidth={2.1} />
                      </div>

                      {plan.highlight && (
                        <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-white shadow-lg backdrop-blur-xl">
                          <Crown size={12} />
                          Most Popular
                        </div>
                      )}
                    </div>

                    <div>
                      <h2
                        className={`font-display text-xl font-extrabold ${
                          plan.highlight
                            ? 'text-white'
                            : 'text-navy-900 dark:text-white'
                        }`}
                      >
                        {plan.name}
                      </h2>

                      <div className="mt-4 flex min-h-[44px] items-end gap-1.5">
                        <span
                          className={`font-display text-3xl font-black tracking-[-0.03em] sm:text-[34px] ${
                            plan.highlight
                              ? 'text-white'
                              : 'text-navy-900 dark:text-white'
                          }`}
                        >
                          {plan.price}
                        </span>
                        {plan.suffix && (
                          <span className="mb-1 text-sm font-semibold text-blue-100">
                            {plan.suffix}
                          </span>
                        )}
                      </div>

                      <p
                        className={`mt-3 min-h-[48px] text-sm leading-6 ${
                          plan.highlight
                            ? 'text-blue-100/90'
                            : 'text-navy-400 dark:text-slate-400'
                        }`}
                      >
                        {plan.description}
                      </p>
                    </div>

                    <div
                      className={`my-7 h-px ${
                        plan.highlight
                          ? 'bg-white/15'
                          : 'bg-slate-200 dark:bg-white/10'
                      }`}
                    />

                    <ul className="mb-8 space-y-4">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-sm leading-5 transition-transform duration-300 group-hover:translate-x-1 ${
                            plan.highlight
                              ? 'text-white/90'
                              : 'text-navy-600 dark:text-slate-300'
                          }`}
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                              plan.highlight
                                ? 'bg-white/15 text-white ring-1 ring-white/20'
                                : 'bg-emerald-50 text-emerald-600 ring-1 ring-emerald-100 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20'
                            }`}
                          >
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={plan.to}
                      className={`group/button relative mt-auto flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-5 py-4 text-sm font-extrabold transition-all duration-300 active:scale-[0.98] ${
                        plan.highlight
                          ? 'bg-white text-indigo-700 shadow-[0_15px_35px_-12px_rgba(0,0,0,0.35)] hover:-translate-y-1 hover:bg-blue-50'
                          : 'bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-[0_15px_35px_-12px_rgba(37,99,235,0.55)] hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(79,70,229,0.65)]'
                      }`}
                    >
                      <span className="absolute inset-y-0 -left-16 w-12 -skew-x-12 bg-white/30 blur-sm transition-all duration-700 group-hover/button:left-[115%]" />
                      <span className="relative">{plan.cta}</span>
                      <ArrowRight
                        size={17}
                        className="relative transition-transform duration-300 group-hover/button:translate-x-1.5"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* Trust note */}
        <div className="mx-auto mt-10 flex max-w-max items-center gap-2 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2 text-xs font-semibold text-slate-500 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.05] dark:text-slate-400">
          <BadgeCheck size={15} className="text-blue-500" />
          Simple plans. No hidden fees.
        </div>
      </div>
    </main>
  );
}
