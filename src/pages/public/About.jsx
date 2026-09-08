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
    <main className="about-page overflow-hidden bg-white dark:bg-navy-950">
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

      <style>{`
        .about-page {
          position: relative;
          isolation: isolate;
        }

        .about-page *,
        .about-page *::before,
        .about-page *::after {
          box-sizing: border-box;
        }

        .about-page .about-glass,
        .about-page article,
        .about-page details {
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .about-page > section:first-child::before,
        .about-page > section:first-child::after {
          content: '';
          position: absolute;
          z-index: 0;
          width: 34rem;
          height: 34rem;
          border-radius: 9999px;
          pointer-events: none;
          filter: blur(35px);
          opacity: .48;
        }

        .about-page > section:first-child::before {
          left: -16rem;
          top: -12rem;
          background: radial-gradient(circle, rgba(139,92,246,.72), transparent 68%);
          animation: aboutOrbLeft 12s ease-in-out infinite alternate;
        }

        .about-page > section:first-child::after {
          right: -17rem;
          bottom: -14rem;
          background: radial-gradient(circle, rgba(14,165,233,.58), transparent 68%);
          animation: aboutOrbRight 14s ease-in-out infinite alternate;
        }

        .about-page > section:first-child h1 {
          animation: aboutRise .8s cubic-bezier(.2,.8,.2,1) both;
          text-shadow: 0 0 45px rgba(124,58,237,.16);
        }

        .about-page > section:first-child h1 span {
          background-size: 220% 220%;
          animation: aboutGradient 5s ease infinite;
          filter: drop-shadow(0 0 18px rgba(96,165,250,.22));
        }

        .about-page > section:first-child h1 + p {
          animation: aboutRise .85s .1s cubic-bezier(.2,.8,.2,1) both;
        }

        .about-page > section:first-child div[class*="inline-flex"][class*="rounded-full"] {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg,rgba(255,255,255,.15),rgba(255,255,255,.045));
          border-color: rgba(255,255,255,.2);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.2),0 14px 40px rgba(0,0,0,.22),0 0 30px rgba(124,58,237,.13);
          backdrop-filter: blur(22px) saturate(165%);
          -webkit-backdrop-filter: blur(22px) saturate(165%);
          animation: aboutBadgeFloat 4s ease-in-out infinite;
        }

        .about-page > section:first-child div[class*="max-w-5xl"][class*="grid-cols-2"] {
          position: relative;
          background: linear-gradient(135deg,rgba(255,255,255,.13),rgba(255,255,255,.035));
          border-color: rgba(255,255,255,.17);
          box-shadow: inset 0 1px 0 rgba(255,255,255,.16),0 28px 75px rgba(0,0,0,.34),0 0 50px rgba(99,102,241,.1);
          backdrop-filter: blur(24px) saturate(170%);
          -webkit-backdrop-filter: blur(24px) saturate(170%);
          animation: aboutRise 1s .2s cubic-bezier(.2,.8,.2,1) both;
        }

        .about-page > section:first-child div[class*="max-w-5xl"][class*="grid-cols-2"]::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(110deg,transparent 15%,rgba(167,139,250,.72),rgba(125,211,252,.62),transparent 82%);
          background-size: 260% 100%;
          animation: aboutBorderMove 6s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .about-page > section:first-child div[class*="max-w-5xl"][class*="grid-cols-2"] > div {
          transition: transform .35s ease,background-color .35s ease;
        }

        .about-page > section:first-child div[class*="max-w-5xl"][class*="grid-cols-2"] > div:hover {
          transform: translateY(-6px);
          background: rgba(255,255,255,.07);
        }

        .about-page a[class*="rounded-xl"] {
          position: relative;
          overflow: hidden;
          isolation: isolate;
        }

        .about-page a[class*="rounded-xl"]::after {
          content: '';
          position: absolute;
          z-index: -1;
          top: -30%;
          left: -85%;
          width: 55%;
          height: 160%;
          pointer-events: none;
          background: linear-gradient(100deg,transparent,rgba(255,255,255,.36),transparent);
          transform: rotate(15deg);
          transition: left .65s ease;
        }

        .about-page a[class*="rounded-xl"]:hover::after { left: 135%; }
        .about-page a[class*="rounded-xl"]:hover { transform: translateY(-4px) scale(1.02); }
        .about-page a[class*="rounded-xl"]:active { transform: translateY(-1px) scale(.98); }

        .about-page article {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          box-shadow: 0 12px 35px rgba(15,23,42,.07),inset 0 1px 0 rgba(255,255,255,.85);
          transition: transform .38s cubic-bezier(.2,.8,.2,1),box-shadow .38s ease,border-color .38s ease;
        }

        .about-page article::before {
          content: '';
          position: absolute;
          z-index: -1;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          background: radial-gradient(circle at 50% 0,rgba(139,92,246,.14),transparent 67%);
          transition: opacity .38s ease;
        }

        .about-page article::after {
          content: '';
          position: absolute;
          top: -55%;
          left: -75%;
          width: 45%;
          height: 210%;
          pointer-events: none;
          background: linear-gradient(100deg,transparent,rgba(255,255,255,.42),transparent);
          transform: rotate(18deg);
          transition: left .75s ease;
        }

        .about-page article:hover {
          transform: translateY(-10px);
          border-color: rgba(139,92,246,.32);
          box-shadow: 0 25px 60px rgba(15,23,42,.14),0 0 32px rgba(124,58,237,.09);
        }

        .about-page article:hover::before { opacity: 1; }
        .about-page article:hover::after { left: 140%; }

        .about-page article > span:first-of-type,
        .about-page article > div:first-of-type {
          transition: transform .38s cubic-bezier(.2,.8,.2,1),box-shadow .38s ease;
        }

        .about-page article:hover > span:first-of-type,
        .about-page article:hover > div:first-of-type {
          transform: translateY(-3px) scale(1.07) rotate(3deg);
        }

        .about-page section:nth-child(2) div[class*="from-navy-950"][class*="rounded-3xl"] {
          background: radial-gradient(circle at 100% 0,rgba(124,58,237,.32),transparent 34%),radial-gradient(circle at 0 100%,rgba(37,99,235,.25),transparent 36%),linear-gradient(145deg,#050d23,#151044);
          border-color: rgba(139,92,246,.25);
          box-shadow: 0 30px 80px rgba(15,23,42,.26),0 0 48px rgba(124,58,237,.13),inset 0 1px 0 rgba(255,255,255,.1);
          animation: aboutPanelFloat 6s ease-in-out infinite;
        }

        .about-page section:nth-child(2) div[class*="border-white"] {
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          transition: transform .35s ease,background-color .35s ease,border-color .35s ease;
        }

        .about-page section:nth-child(2) div[class*="border-white"]:hover {
          transform: translateY(-4px);
          background-color: rgba(255,255,255,.1);
          border-color: rgba(167,139,250,.3);
        }

        .about-page section > div[class*="rounded-3xl"][class*="bg-navy-950"] {
          background: radial-gradient(circle at 92% 8%,rgba(124,58,237,.3),transparent 36%),radial-gradient(circle at 8% 100%,rgba(37,99,235,.23),transparent 38%),linear-gradient(135deg,#020617,#0c1638,#151044);
          border: 1px solid rgba(255,255,255,.11);
          box-shadow: 0 32px 85px rgba(15,23,42,.28),0 0 48px rgba(124,58,237,.11),inset 0 1px 0 rgba(255,255,255,.09);
        }

        .about-page section > div[class*="rounded-3xl"][class*="bg-navy-950"] div[class*="bg-white"] {
          backdrop-filter: blur(18px) saturate(155%);
          -webkit-backdrop-filter: blur(18px) saturate(155%);
          transition: transform .35s ease,background-color .35s ease,border-color .35s ease;
        }

        .about-page section > div[class*="rounded-3xl"][class*="bg-navy-950"] div[class*="bg-white"]:hover {
          transform: translateY(-4px);
          background-color: rgba(255,255,255,.11);
          border-color: rgba(167,139,250,.3);
        }

        .about-page details {
          position: relative;
          background: linear-gradient(135deg,rgba(255,255,255,.95),rgba(248,250,252,.82));
          backdrop-filter: blur(20px) saturate(155%);
          -webkit-backdrop-filter: blur(20px) saturate(155%);
          box-shadow: 0 10px 30px rgba(15,23,42,.06),inset 0 1px 0 rgba(255,255,255,.9);
          transition: transform .35s ease,border-color .35s ease,box-shadow .35s ease;
        }

        .about-page details::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 4px;
          height: 0;
          pointer-events: none;
          border-radius: 0 8px 8px 0;
          background: linear-gradient(180deg,#8b5cf6,#3b82f6,#22d3ee);
          transition: height .35s ease;
        }

        .about-page details:hover,
        .about-page details[open] {
          transform: translateX(5px);
          border-color: rgba(139,92,246,.34);
          box-shadow: 0 18px 45px rgba(15,23,42,.1),0 0 28px rgba(124,58,237,.07);
        }

        .about-page details[open]::before { height: 100%; }
        .about-page details[open] > div { animation: aboutFaqOpen .4s ease both; }
        .about-page details summary { outline: none; }

        .about-page > section:last-child > div[class*="from-violet-600"] {
          background: linear-gradient(120deg,#7c3aed,#4f46e5,#2563eb,#7c3aed);
          background-size: 300% 300%;
          border: 1px solid rgba(255,255,255,.2);
          box-shadow: 0 30px 75px rgba(79,70,229,.3),0 0 58px rgba(124,58,237,.14),inset 0 1px 0 rgba(255,255,255,.18);
          animation: aboutGradient 9s ease infinite,aboutCtaFloat 6s ease-in-out infinite;
        }

        .dark .about-page details {
          background: linear-gradient(135deg,rgba(255,255,255,.07),rgba(255,255,255,.025));
          border-color: rgba(255,255,255,.1);
          box-shadow: 0 14px 38px rgba(0,0,0,.23),inset 0 1px 0 rgba(255,255,255,.06);
        }

        .dark .about-page article {
          background: linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.022));
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          box-shadow: 0 18px 45px rgba(0,0,0,.2),inset 0 1px 0 rgba(255,255,255,.06);
        }

        @keyframes aboutRise {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes aboutOrbLeft {
          from { transform: translate3d(0,0,0) scale(1); }
          to { transform: translate3d(110px,75px,0) scale(1.16); }
        }

        @keyframes aboutOrbRight {
          from { transform: translate3d(0,0,0) scale(1); }
          to { transform: translate3d(-105px,-70px,0) scale(1.15); }
        }

        @keyframes aboutGradient {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes aboutBorderMove {
          from { background-position: 200% 0; }
          to { background-position: -200% 0; }
        }

        @keyframes aboutBadgeFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes aboutPanelFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes aboutCtaFloat {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes aboutFaqOpen {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 767px) {
          .about-page > section:first-child::before,
          .about-page > section:first-child::after {
            width: 22rem;
            height: 22rem;
          }

          .about-page section:nth-child(2) div[class*="from-navy-950"][class*="rounded-3xl"],
          .about-page > section:last-child > div[class*="from-violet-600"] {
            animation: none;
          }

          .about-page article:hover { transform: translateY(-5px); }

          .about-page details:hover,
          .about-page details[open] { transform: none; }
        }

        @media (hover: none) {
          .about-page article:hover,
          .about-page a[class*="rounded-xl"]:hover { transform: none; }

          .about-page a[class*="rounded-xl"]:active { transform: scale(.98); }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
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
