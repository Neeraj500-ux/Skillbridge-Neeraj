import { Target, Users, Award, Heart } from 'lucide-react';

const values = [
  { icon: Target, title: 'Practical over theoretical', body: 'Every course is built around a real project or outcome, not just watching slides.' },
  { icon: Users, title: 'Taught by practitioners', body: 'Our instructors work in the fields they teach — no career trainers, no recycled scripts.' },
  { icon: Award, title: 'Certificates that mean something', body: 'Every certificate is verifiable and tied to real, demonstrated course work.' },
  { icon: Heart, title: 'Learner-first support', body: 'Instructor Q&A, community discussion, and real feedback on your assignments.' },
];

const faqs = [
  { q: 'Do I get lifetime access to a course after purchase?', a: 'Yes. Once you enroll in a course, you have lifetime access to all its lessons, resources, and future updates.' },
  { q: 'How do certificates work?', a: 'You receive a verifiable certificate automatically once you complete all required lessons, quizzes, and assignments in a course.' },
  { q: 'Can I get a refund?', a: 'Yes, every course purchase is covered by a 30-day money-back guarantee, no questions asked.' },
  { q: 'How do I become an instructor?', a: 'Register with the "Become an Instructor" option. Your application is reviewed by our team before you can publish courses.' },
];

export default function About() {
  return (
    <div>
      <section className="bg-navy-950 text-white py-16">
        <div className="container-shell text-center max-w-2xl mx-auto">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold mb-4">Built for learners who ship</h1>
          <p className="text-slate-300">
            Skillbridge exists because too many online courses teach theory without ever making you build something real.
            We work only with instructors who are still doing the work they teach.
          </p>
        </div>
      </section>

      <section className="container-shell py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v.title} className="card-surface p-6">
              <span className="h-11 w-11 rounded-md bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 flex items-center justify-center mb-4"><v.icon size={20} /></span>
              <h3 className="font-display font-bold text-navy-900 dark:text-white mb-1.5">{v.title}</h3>
              <p className="text-sm text-navy-400 dark:text-slate-400">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy-50/40 dark:bg-white/[0.02] py-16">
        <div className="container-shell max-w-2xl">
          <h2 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => <FaqItem key={f.q} {...f} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function FaqItem({ q, a }) {
  return (
    <details className="card-surface p-5 group">
      <summary className="font-semibold text-sm text-navy-900 dark:text-white cursor-pointer list-none flex items-center justify-between">
        {q}
        <span className="text-navy-400 group-open:rotate-45 transition-transform text-lg leading-none">+</span>
      </summary>
      <p className="text-sm text-navy-500 dark:text-slate-400 mt-3">{a}</p>
    </details>
  );
}
