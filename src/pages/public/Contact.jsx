import { useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Send,
  Sparkles,
  UserRound,
  Zap,
} from 'lucide-react';

const INITIAL_FORM = {
  name: '',
  surname: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

const contactDetails = [
  {
    icon: MapPin,
    title: 'Head Office',
    content:
      'Building No. 532/1, First Floor, Bank Colony, Deoli Village, New Delhi – 110062, near Shani Bazar Bandh Road.',
    href: 'https://maps.google.com/?q=Building+No.+532%2F1,+First+Floor,+Bank+Colony,+Deoli+Village,+New+Delhi-110062',
    action: 'View on map',
    external: true,
  },
  {
    icon: Mail,
    title: 'Email Support',
    content: 'contact@creativeadhyayan.com',
    href: 'mailto:contact@creativeadhyayan.com',
    action: 'Send an email',
  },
  {
    icon: Phone,
    title: "Let's Talk",
    content: '+91 99102 32927 / +91 99102 32941',
    href: 'tel:+919910232927',
    action: 'Call us now',
  },
];

const inputClass =
  'block min-h-[54px] w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 text-[15px] font-medium text-slate-900 outline-none transition duration-300 placeholder:font-normal placeholder:text-slate-400 hover:border-violet-300 hover:bg-white focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-slate-950/50 dark:text-white dark:placeholder:text-slate-500 dark:hover:border-violet-400/50 dark:hover:bg-slate-950/70 dark:focus:border-violet-400';

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');

  const handleChange = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('sending');

    // Replace this delay with your FormSubmit/API request when ready.
    window.setTimeout(() => setStatus('success'), 700);
  };

  const resetForm = () => {
    setForm(INITIAL_FORM);
    setStatus('idle');
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white text-slate-900 dark:bg-[#070B1A] dark:text-white">
      <BackgroundDecoration />

      <section className="relative mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-violet-700 shadow-sm dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300 sm:px-5 sm:text-xs">
            <Sparkles size={15} aria-hidden="true" />
            Contact Us
          </div>

          <h1 className="mt-5 text-4xl font-black leading-[1.08] tracking-[-0.035em] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            We’re Just a{' '}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-fuchsia-500 bg-clip-text text-transparent">
              Message Away
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-400 sm:text-lg sm:leading-8">
            Have a question or need assistance? Reach out anytime—our friendly team is ready to help.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            <TrustPill icon={BadgeCheck} text="Trusted support" />
            <TrustPill icon={Zap} text="Fast response" />
            <TrustPill icon={ShieldCheck} text="Your data is secure" />
          </div>
        </header>

        <div className="premium-shell relative rounded-[28px] p-[1px] shadow-[0_35px_100px_rgba(79,70,229,0.2)] sm:rounded-[34px]">
          <div className="relative overflow-hidden rounded-[27px] bg-white/90 backdrop-blur-2xl dark:bg-[#0D1326]/90 sm:rounded-[33px]">
            <div className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
            <ContactInformation />

            <div className="relative px-5 py-9 sm:px-9 sm:py-12 lg:px-12 lg:py-14 xl:px-14">
              <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-bl-full bg-violet-50/80 dark:bg-violet-500/5 sm:h-44 sm:w-44" />
              <div className="pointer-events-none absolute bottom-10 right-10 h-28 w-28 rounded-full bg-fuchsia-400/10 blur-3xl" />

              {status === 'success' ? (
                <SuccessMessage onReset={resetForm} />
              ) : (
                <div className="relative mx-auto max-w-2xl">
                  <div className="mb-7 sm:mb-9">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-300 sm:text-sm">
                      <MessageCircle size={18} aria-hidden="true" />
                      Send us a message
                    </div>
                    <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 dark:text-white sm:text-4xl">
                      How can we help you?
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
                      Complete the form and our team will contact you shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                      <FormField label="Name" htmlFor="contact-name" required>
                        <InputWrapper icon={UserRound}>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="given-name"
                            value={form.name}
                            onChange={handleChange}
                            className={`${inputClass} pl-12`}
                            placeholder="Your name"
                            required
                          />
                        </InputWrapper>
                      </FormField>

                      <FormField label="Surname" htmlFor="contact-surname" required>
                        <input
                          id="contact-surname"
                          name="surname"
                          type="text"
                          autoComplete="family-name"
                          value={form.surname}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder="Your surname"
                          required
                        />
                      </FormField>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                      <FormField label="Phone" htmlFor="contact-phone" required>
                        <InputWrapper icon={Phone}>
                          <input
                            id="contact-phone"
                            name="phone"
                            type="tel"
                            inputMode="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={handleChange}
                            className={`${inputClass} pl-12`}
                            placeholder="+91 00000 00000"
                            pattern="[0-9+() -]{10,18}"
                            title="Please enter a valid phone number"
                            required
                          />
                        </InputWrapper>
                      </FormField>

                      <FormField label="Email" htmlFor="contact-email" required>
                        <InputWrapper icon={Mail}>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={handleChange}
                            className={`${inputClass} pl-12`}
                            placeholder="you@example.com"
                            required
                          />
                        </InputWrapper>
                      </FormField>
                    </div>

                    <FormField label="Subject" htmlFor="contact-subject" required>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="What would you like to discuss?"
                        required
                      />
                    </FormField>

                    <FormField label="Message" htmlFor="contact-message" required>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} min-h-[145px] resize-y py-4 leading-7`}
                        placeholder="Write your message here..."
                        required
                      />
                    </FormField>

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="contact-submit group relative flex min-h-[56px] w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 px-6 py-3.5 text-[15px] font-extrabold text-white shadow-[0_16px_38px_rgba(109,40,217,0.3)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_45px_rgba(109,40,217,0.4)] focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/30 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      <span className="contact-shine absolute inset-0" />
                      <Send size={19} className="relative" aria-hidden="true" />
                      <span className="relative">{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                      <ArrowRight
                        size={18}
                        className="relative transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </button>

                    <div className="flex items-start justify-center gap-2 text-center text-xs leading-5 text-slate-500 dark:text-slate-500">
                      <ShieldCheck size={15} className="mt-0.5 shrink-0 text-emerald-500" aria-hidden="true" />
                      <p>Your information is protected and never shared with third parties.</p>
                    </div>
                  </form>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>

        <QuickActions />

        <div className="mb-6 mt-14 text-center sm:mt-20">
          <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-violet-600 dark:text-violet-300 sm:text-sm">
            Our location
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Visit Our Head Office
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
            Find us easily using the interactive map below.
          </p>
        </div>

        <div className="premium-shell relative rounded-[25px] p-[1px] shadow-[0_24px_65px_rgba(79,70,229,0.15)] sm:rounded-[31px]">
          <div className="relative overflow-hidden rounded-[24px] bg-white p-2 dark:bg-[#0D1326] sm:rounded-[30px] sm:p-2.5">
          <iframe
            title="Creative Adhyayan Head Office"
            src="https://maps.google.com/maps?q=Building%20No.%20532%2F1%2C%20First%20Floor%2C%20Bank%20Colony%20Deoli%20Village%2C%20New%20Delhi-110062%20Near%20Shani%20Bazar%20Bandh%20Road&t=m&z=15&output=embed&iwloc=near"
            className="h-[300px] w-full rounded-[18px] border-0 sm:h-[390px] sm:rounded-[22px] lg:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <a
            href="https://maps.google.com/?q=Building+No.+532%2F1,+First+Floor,+Bank+Colony,+Deoli+Village,+New+Delhi-110062"
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-card absolute bottom-5 left-1/2 flex w-[calc(100%-2.5rem)] -translate-x-1/2 items-center gap-3 overflow-hidden rounded-2xl border border-white/70 bg-white/85 p-3.5 shadow-[0_18px_45px_rgba(15,23,42,0.2)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(79,70,229,0.25)] dark:border-white/10 dark:bg-slate-950/80 sm:bottom-7 sm:left-7 sm:w-auto sm:max-w-sm sm:translate-x-0 sm:p-4"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-700 text-white shadow-lg shadow-violet-600/25">
              <MapPin size={20} aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] font-extrabold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-300">Creative Adhyayan</span>
              <span className="mt-0.5 block truncate text-sm font-black text-slate-900 dark:text-white">Open location in Google Maps</span>
            </span>
            <ArrowRight size={17} className="ml-auto shrink-0 text-violet-600" aria-hidden="true" />
          </a>
          </div>
        </div>
      </section>

      <style>{`
        .premium-shell {
          background: linear-gradient(115deg, rgba(124,58,237,.92), rgba(255,255,255,.86), rgba(79,70,229,.8), rgba(217,70,239,.78), rgba(124,58,237,.92));
          background-size: 300% 300%;
          animation: contact-border 9s ease infinite;
        }

        .liquid-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(135deg, rgba(255,255,255,.75), rgba(255,255,255,.12), rgba(196,181,253,.5));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .liquid-card::after {
          content: '';
          position: absolute;
          top: -80%;
          left: -45%;
          width: 42%;
          height: 250%;
          transform: rotate(24deg);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.18), transparent);
          transition: left 850ms cubic-bezier(.2,.75,.25,1);
          pointer-events: none;
        }

        .liquid-card:hover::after { left: 125%; }

        @keyframes contact-border {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes contact-float {
          0%, 100% { transform: translate3d(0, 0, 0); }
          50% { transform: translate3d(0, -16px, 0); }
        }

        .contact-orb { animation: contact-float 7s ease-in-out infinite; }
        .contact-orb-delay { animation-delay: -3.5s; }

        .contact-shine {
          transform: translateX(-120%);
          background: linear-gradient(105deg, transparent 28%, rgba(255,255,255,.32) 50%, transparent 72%);
          transition: transform 800ms ease;
        }

        .contact-submit:hover .contact-shine { transform: translateX(120%); }

        @media (prefers-reduced-motion: reduce) {
          .contact-orb, .premium-shell { animation: none; }
          .contact-shine, .contact-submit, .contact-card { transition: none !important; }
        }
      `}</style>
    </main>
  );
}

function TrustPill({ icon: Icon, text }) {
  return (
    <span className="liquid-card relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/60 bg-white/55 px-3.5 py-2 text-xs font-bold text-slate-700 shadow-[0_8px_24px_rgba(79,70,229,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300 sm:px-4">
      <Icon size={15} className="text-violet-600 dark:text-violet-300" aria-hidden="true" />
      {text}
    </span>
  );
}

function QuickActions() {
  const actions = [
    {
      icon: Phone,
      eyebrow: 'Direct support',
      title: 'Call our team',
      detail: '+91 99102 32927',
      href: 'tel:+919910232927',
      color: 'from-violet-500 to-indigo-600',
    },
    {
      icon: MessageCircle,
      eyebrow: 'Quick conversation',
      title: 'Chat on WhatsApp',
      detail: 'Start a live chat',
      href: 'https://wa.me/919910232927',
      external: true,
      color: 'from-emerald-400 to-teal-600',
    },
    {
      icon: CalendarDays,
      eyebrow: 'Plan a discussion',
      title: 'Schedule a call',
      detail: 'Choose a convenient time',
      href: 'mailto:contact@creativeadhyayan.com?subject=Schedule%20a%20Call',
      color: 'from-fuchsia-500 to-violet-600',
    },
  ];

  return (
    <div className="relative z-10 mx-auto -mt-2 grid max-w-5xl gap-3 px-2 pt-8 sm:grid-cols-3 sm:gap-4 sm:px-6 lg:-mt-8 lg:pt-0">
      {actions.map(({ icon: Icon, eyebrow, title, detail, href, external, color }) => (
        <a
          key={title}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className="liquid-card group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border border-white/70 bg-white/70 p-4 shadow-[0_18px_50px_rgba(60,45,130,0.12)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(79,70,229,0.2)] dark:border-white/10 dark:bg-[#11182B]/75 sm:p-4 lg:p-5"
        >
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transition duration-300 group-hover:scale-105 group-hover:-rotate-3`}>
            <Icon size={21} aria-hidden="true" />
          </span>
          <span className="min-w-0">
            <span className="block text-[10px] font-extrabold uppercase tracking-[0.12em] text-violet-600 dark:text-violet-300">{eyebrow}</span>
            <span className="mt-0.5 block text-sm font-black text-slate-900 dark:text-white sm:text-[15px]">{title}</span>
            <span className="mt-0.5 block truncate text-xs text-slate-500 dark:text-slate-400">{detail}</span>
          </span>
          <ArrowRight size={16} className="ml-auto shrink-0 text-slate-400 transition duration-300 group-hover:translate-x-1 group-hover:text-violet-600" aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}

function BackgroundDecoration() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="contact-orb absolute -left-40 top-12 h-80 w-80 rounded-full bg-violet-300/25 blur-[95px] dark:bg-violet-700/10 sm:h-96 sm:w-96" />
      <div className="contact-orb contact-orb-delay absolute -right-40 top-[38%] h-96 w-96 rounded-full bg-indigo-300/20 blur-[110px] dark:bg-indigo-700/10" />
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.055]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #6d28d9 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />
    </div>
  );
}

function ContactInformation() {
  return (
    <aside className="relative overflow-hidden bg-[radial-gradient(circle_at_15%_15%,rgba(216,180,254,0.24),transparent_30%),linear-gradient(145deg,#6d28d9_0%,#4338ca_48%,#312e81_100%)] px-5 py-10 text-white sm:px-9 sm:py-12 lg:px-11 lg:py-14">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border-[42px] border-white/[0.05]" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-[80px]" />

      <div className="relative mx-auto max-w-xl">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] backdrop-blur-md sm:text-xs">
          Get in touch
        </span>
        <h2 className="mt-5 text-3xl font-black leading-[1.16] tracking-tight sm:mt-6 sm:text-4xl">
          Your Questions Matter—Reach Out Anytime.
        </h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-violet-100 sm:mt-5 sm:text-[15px]">
          Connect with us by phone, email, or visit our New Delhi office. We’re always happy to assist you.
        </p>

        <div className="mt-8 space-y-4 sm:mt-9 sm:space-y-5">
          {contactDetails.map((item) => <ContactCard key={item.title} {...item} />)}
        </div>

        <div className="liquid-card relative mt-5 flex items-center gap-4 overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl sm:mt-6 sm:p-5">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-lg sm:h-12 sm:w-12">
            <Clock3 size={21} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-200 sm:text-xs">Response time</span>
            <span className="mt-1 block text-sm font-bold leading-5 text-white">Usually within one business day</span>
          </span>
        </div>
      </div>
    </aside>
  );
}

function FormField({ label, htmlFor, required, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-bold text-slate-800 dark:text-slate-200">
        {label}
        {required && <span className="ml-1 text-violet-600 dark:text-violet-400">*</span>}
      </label>
      {children}
    </div>
  );
}

function InputWrapper({ icon: Icon, children }) {
  return (
    <div className="relative">
      <Icon
        size={18}
        strokeWidth={2}
        className="pointer-events-none absolute left-4 top-1/2 z-10 -translate-y-1/2 text-violet-500"
        aria-hidden="true"
      />
      {children}
    </div>
  );
}

function ContactCard({ icon: Icon, title, content, href, action, external }) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="contact-card liquid-card group relative flex items-start gap-3.5 overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.16] hover:shadow-[0_18px_38px_rgba(31,21,95,0.22)] sm:gap-5 sm:p-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-lg transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 sm:h-12 sm:w-12">
        <Icon size={21} strokeWidth={2.2} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[15px] font-extrabold text-white sm:text-base">{title}</span>
        <span className="mt-1 block break-words text-[13px] leading-5 text-violet-100 sm:mt-1.5 sm:text-sm sm:leading-6">{content}</span>
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-white sm:mt-2.5">
          {action}
          <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </span>
    </a>
  );
}

function SuccessMessage({ onReset }) {
  return (
    <div className="flex min-h-[500px] items-center justify-center py-8 text-center sm:min-h-[590px] sm:py-10">
      <div className="max-w-md">
        <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/15" />
          <span className="absolute inset-2 rounded-full bg-emerald-100 dark:bg-emerald-500/10" />
          <CheckCircle2 size={52} className="relative text-emerald-500" strokeWidth={1.8} aria-hidden="true" />
        </div>
        <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 sm:text-xs">
          Message submitted
        </span>
        <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:mt-6 sm:text-4xl">Thank you!</h2>
        <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400 sm:text-base">
          We have received your message. Our team will review your details and contact you shortly.
        </p>
        <button
          type="button"
          onClick={onReset}
          className="mt-7 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-violet-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/30 sm:mt-8 sm:px-7"
        >
          Send Another Message
        </button>
      </div>
    </div>
  );
}
