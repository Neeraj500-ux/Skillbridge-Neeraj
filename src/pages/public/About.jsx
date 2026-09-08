import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Heart,
  Lightbulb,
  MessageCircle,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from 'lucide-react';

const stats = [
  { value: '10K+', label: 'Active learners' },
  { value: '500+', label: 'Practical courses' },
  { value: '100+', label: 'Expert instructors' },
  { value: '95%', label: 'Student satisfaction' },
];

const values = [
  {
    icon: Target,
    title: 'Practical over theoretical',
    body: 'Every course is designed around a real project, practical skill, or measurable outcome.',
    accent: 'from-violet-500 to-indigo-500',
    shadow: 'shadow-violet-500/20',
  },
  {
    icon: Users,
    title: 'Taught by practitioners',
    body: 'Learn from professionals who actively work in the industries and fields they teach.',
    accent: 'from-blue-500 to-cyan-500',
    shadow: 'shadow-blue-500/20',
  },
  {
    icon: Award,
    title: 'Meaningful certificates',
    body: 'Earn verifiable certificates connected to real skills and completed course projects.',
    accent: 'from-amber-400 to-orange-500',
    shadow: 'shadow-orange-500/20',
  },
  {
    icon: Heart,
    title: 'Learner-first support',
    body: 'Get instructor guidance, community support, and useful feedback on your assignments.',
    accent: 'from-pink-500 to-rose-500',
    shadow: 'shadow-pink-500/20',
  },
];

const learningSteps = [
  {
    number: '01',
    icon: BookOpen,
    title: 'Choose your skill',
    body: 'Explore carefully structured courses across today’s most valuable career categories.',
  },
  {
    number: '02',
    icon: PlayCircle,
    title: 'Learn by doing',
    body: 'Follow focused lessons, complete exercises, and build practical real-world projects.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow your career',
    body: 'Demonstrate your skills, earn a certificate, and confidently take your next step.',
  },
];

const benefits = [
  'Lifetime access to purchased courses',
  'Real projects and practical assignments',
  'Direct instructor and community support',
  'Verifiable completion certificates',
  'Learn anywhere, on any device',
  '30-day money-back guarantee',
];

const faqs = [
  {
    q: 'Do I get lifetime access after purchasing a course?',
    a: 'Yes. Once you enroll, you receive lifetime access to all lessons, downloadable resources, projects, and future course updates.',
  },
  {
    q: 'How do Skillbridge certificates work?',
    a: 'A verifiable certificate is issued automatically after you complete all required lessons, quizzes, projects, and assignments.',
  },
  {
    q: 'Can I request a refund?',
    a: 'Yes. Every eligible course purchase includes a 30-day money-back guarantee, giving you enough time to explore the learning experience.',
  },
  {
    q: 'Can I learn on a mobile device?',
    a: 'Absolutely. Skillbridge is fully responsive, so you can continue learning on your mobile phone, tablet, laptop, or desktop.',
  },
  {
    q: 'How can I become an instructor?',
    a: 'Choose the “Become an Instructor” option during registration and submit your application. Our team will review your experience before publishing access is approved.',
  },
];

export default function About() {
  return (
    <main className="overflow-hidden bg-white dark:bg-navy-950">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.25),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(37,99,235,0.20),transparent_35%)]" />

        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] bg-[size:54px_54px]" />

        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="container-shell relative z-10 px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-violet-200 shadow-xl backdrop-blur-xl sm:text-sm">
              <Sparkles size={16} />
              Learning designed for real-world progress
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              We help ambitious learners
              <span className="block bg-gradient-to-r from-violet-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                turn knowledge into action.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Skillbridge was created to make online learning more practical,
              personal, and career-focused. Learn from experienced professionals
              and build skills you can confidently use.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-600/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-600/40 sm:w-auto"
              >
                Explore Courses
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/instructors"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.07] px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.12] sm:w-auto"
              >
                <Users size={18} />
                Meet Our Instructors
              </Link>
            </div>
          </div>

          {/* STATS */}
          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`relative px-4 py-6 text-center sm:px-6 ${
                  index !== stats.length - 1
                    ? 'lg:border-r lg:border-white/10'
                    : ''
                } ${index < 2 ? 'border-b border-white/10 lg:border-b-0' : ''}`}
              >
                <div className="font-display text-2xl font-black text-white sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs font-medium text-slate-400 sm:text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container-shell px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-500/15 to-blue-500/15 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-navy-950 via-navy-900 to-violet-950 p-6 shadow-2xl dark:border-white/10 sm:p-9">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 text-white shadow-lg shadow-violet-500/25">
                    <Lightbulb size={24} />
                  </span>

                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-bold text-emerald-300">
                    Learn • Build • Grow
                  </span>
                </div>

                <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.07] p-5 backdrop-blur-xl sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                      <Target size={21} />
                    </div>

                    <div>
                      <p className="font-display text-lg font-bold text-white">
                        Our mission
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Make high-quality, practical education accessible to
                        every learner—regardless of location or background.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <BadgeCheck className="mb-3 text-blue-300" size={22} />
                    <p className="text-sm font-bold text-white">Trusted skills</p>
                    <p className="mt-1 text-xs text-slate-400">
                      Relevant and practical
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                    <ShieldCheck className="mb-3 text-emerald-300" size={22} />
                    <p className="text-sm font-bold text-white">
                      Quality assured
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Carefully reviewed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
              <Sparkles size={15} />
              Our story
            </span>

            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-navy-950 dark:text-white sm:text-4xl">
              Online education should create
              <span className="text-violet-600 dark:text-violet-400">
                {' '}
                real transformation.
              </span>
            </h2>

            <p className="mt-5 leading-7 text-navy-500 dark:text-slate-400">
              Skillbridge started with a simple observation: learners were
              completing hours of online content but still lacked the
              confidence to apply what they had learned.
            </p>

            <p className="mt-4 leading-7 text-navy-500 dark:text-slate-400">
              We built a platform where learning is connected to action. Every
              course is created with experienced practitioners and designed
              around useful exercises, real projects, and meaningful outcomes.
            </p>

            <div className="mt-7 space-y-3">
              {[
                'Industry-relevant curriculum',
                'Experienced and active instructors',
                'Projects that strengthen your portfolio',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <CheckCircle2 size={15} />
                  </span>
                  <span className="text-sm font-semibold text-navy-800 dark:text-slate-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              to="/courses"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-violet-600 transition-colors hover:text-violet-700 dark:text-violet-400"
            >
              Discover our learning experience
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative bg-navy-50/60 py-16 dark:bg-white/[0.02] sm:py-20 lg:py-24">
        <div className="container-shell px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
              What guides us
            </span>

            <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-950 dark:text-white sm:text-4xl">
              Values behind every course
            </h2>

            <p className="mt-4 text-navy-500 dark:text-slate-400">
              Every decision we make begins with one question: will this help
              our learners make meaningful progress?
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.title}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-violet-200 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-violet-500/30"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${value.accent} text-white shadow-lg ${value.shadow} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon size={22} />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-bold text-navy-950 dark:text-white">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-navy-500 dark:text-slate-400">
                    {value.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-shell px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
            Your learning journey
          </span>

          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-950 dark:text-white sm:text-4xl">
            From curiosity to capability
          </h2>

          <p className="mt-4 text-navy-500 dark:text-slate-400">
            A simple, focused learning experience designed to move you forward.
          </p>
        </div>

        <div className="relative grid gap-5 md:grid-cols-3">
          <div className="absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-violet-200 dark:border-violet-500/20 md:block" />

          {learningSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.04] sm:p-7"
              >
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-600/20 dark:border-navy-950">
                  <Icon size={25} />
                </div>

                <span className="absolute right-5 top-4 font-display text-5xl font-black text-slate-100 dark:text-white/[0.04]">
                  {step.number}
                </span>

                <h3 className="mt-6 font-display text-xl font-bold text-navy-950 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-navy-500 dark:text-slate-400">
                  {step.body}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="container-shell px-4 pb-16 sm:px-6 sm:pb-20 lg:pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-5 py-10 text-white shadow-2xl sm:px-10 sm:py-12 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.28),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.20),transparent_35%)]" />
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full border border-white/10" />
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3.5 py-2 text-xs font-bold text-violet-200">
                <Award size={15} />
                The Skillbridge promise
              </span>

              <h2 className="mt-5 font-display text-3xl font-extrabold sm:text-4xl">
                Everything you need to keep moving forward.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-slate-300">
                Learn with confidence through flexible access, expert guidance,
                and practical content built around your success.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm transition hover:bg-white/[0.1]"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-300">
                    <CheckCircle2 size={16} />
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-50/60 py-16 dark:bg-white/[0.02] sm:py-20 lg:py-24">
        <div className="container-shell px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-400">
                Common questions
              </span>

              <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-950 dark:text-white sm:text-4xl">
                Frequently asked questions
              </h2>

              <p className="mt-4 leading-7 text-navy-500 dark:text-slate-400">
                Everything you need to know before beginning your learning
                journey with Skillbridge.
              </p>

              <div className="mt-7 rounded-2xl border border-violet-100 bg-violet-50 p-5 dark:border-violet-500/20 dark:bg-violet-500/[0.07]">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
                  <MessageCircle size={20} />
                </span>

                <h3 className="mt-4 font-display font-bold text-navy-950 dark:text-white">
                  Still have a question?
                </h3>

                <p className="mt-1 text-sm text-navy-500 dark:text-slate-400">
                  Our support team is ready to help.
                </p>

                <Link
                  to="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-violet-600 dark:text-violet-400"
                >
                  Contact support
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <FaqItem
                  key={faq.q}
                  question={faq.q}
                  answer={faq.a}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container-shell px-4 py-16 sm:px-6 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 px-5 py-12 text-center text-white shadow-2xl shadow-violet-600/20 sm:px-10 sm:py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.22),transparent_40%)]" />
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative mx-auto max-w-2xl">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl">
              <Sparkles size={25} />
            </span>

            <h2 className="mt-6 font-display text-3xl font-extrabold sm:text-4xl">
              Ready to build a skill that matters?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-violet-100 sm:text-base">
              Join thousands of learners building practical skills, completing
              real projects, and creating better career opportunities.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/courses"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-violet-700 shadow-xl transition duration-300 hover:-translate-y-0.5 hover:bg-violet-50"
              >
                Start Learning Today
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/register"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/15"
              >
                Create Free Account
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FaqItem({ question, answer, defaultOpen = false }) {
  return (
    <details
      open={defaultOpen}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 open:border-violet-200 open:shadow-lg open:shadow-violet-500/5 dark:border-white/10 dark:bg-white/[0.04] dark:open:border-violet-500/30"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
        <span className="font-display text-sm font-bold leading-6 text-navy-950 dark:text-white sm:text-base">
          {question}
        </span>

        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600 transition duration-300 group-open:rotate-180 group-open:bg-violet-600 group-open:text-white dark:bg-violet-500/10 dark:text-violet-300">
          <ChevronDown size={18} />
        </span>
      </summary>

      <div className="border-t border-slate-100 px-5 pb-5 pt-4 dark:border-white/10 sm:px-6 sm:pb-6">
        <p className="text-sm leading-7 text-navy-500 dark:text-slate-400">
          {answer}
        </p>
      </div>
    </details>
  );
}