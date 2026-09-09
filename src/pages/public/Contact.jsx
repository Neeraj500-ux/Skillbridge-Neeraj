import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
  UserRound,
} from 'lucide-react';

const initialForm = {
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
      'Building No. 532/1, First Floor, Bank Colony Deoli Village, New Delhi-110062, Near Shani Bazar Bandh Road.',
    href: 'https://maps.google.com/?q=Building+No.+532%2F1,+First+Floor,+Bank+Colony+Deoli+Village,+New+Delhi-110062',
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
    content: '+91 9910232927, +91 9910232941',
    href: 'tel:+919910232927',
    action: 'Call us now',
  },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previousForm) => ({
      ...previousForm,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your FormSubmit or backend connection here.
    setSubmitted(true);
  };

  const resetForm = () => {
    setForm(initialForm);
    setSubmitted(false);
  };

  return (
    <main className="contact-page relative isolate overflow-hidden bg-white dark:bg-navy-950">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-16 h-96 w-96 rounded-full bg-violet-300/20 blur-[100px] dark:bg-violet-700/10" />

        <div className="absolute -right-36 top-[35%] h-[430px] w-[430px] rounded-full bg-indigo-300/20 blur-[110px] dark:bg-indigo-700/10" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.055]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, #6d28d9 1px, transparent 0)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <section className="container-shell relative px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        {/* Top heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-violet-200 bg-violet-50 px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.18em] text-violet-700 shadow-sm dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300">
            <Sparkles size={15} />
            Contact Us
          </div>

          <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-tight text-navy-900 dark:text-white sm:text-5xl lg:text-[58px]">
            We’re Just a{' '}
            <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-500 bg-clip-text text-transparent">
              Message Away
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-navy-500 dark:text-slate-400 sm:text-lg sm:leading-8">
            Have a question or need assistance? Your questions matter to us.
            Reach out anytime and our team will be happy to help.
          </p>
        </div>

        {/* Main contact box */}
        <div className="relative overflow-hidden rounded-[30px] border border-violet-100 bg-white shadow-[0_30px_90px_rgba(79,70,229,0.14)] dark:border-white/10 dark:bg-navy-900">
          <div className="grid items-stretch lg:grid-cols-[0.92fr_1.08fr]">
            {/* Left section */}
            <div className="relative overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-purple-700 px-6 py-10 text-white sm:px-10 sm:py-12 lg:px-11 lg:py-14">
              <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border-[46px] border-white/[0.05]" />

              <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-[80px]" />

              <div className="relative mx-auto max-w-xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] backdrop-blur-md">
                  Get in touch
                </span>

                <h2 className="mt-6 font-display text-3xl font-extrabold leading-[1.18] sm:text-[38px]">
                  Your Questions Matter—
                  <br className="hidden sm:block" />
                  Reach Out Anytime.
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-7 text-violet-100">
                  Connect with our team by phone, email, or visit our New Delhi
                  office. We’re always happy to assist you.
                </p>

                <div className="mt-9 space-y-5">
                  {contactDetails.map((item) => (
                    <ContactCard key={item.title} {...item} />
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-4.5 backdrop-blur-md sm:p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                    <Clock3 size={21} />
                  </span>

                  <span>
                    <span className="block text-xs font-medium uppercase tracking-[0.1em] text-violet-200">
                      Response time
                    </span>

                    <span className="mt-1 block text-sm font-bold leading-5 text-white">
                      We usually respond within one business day
                    </span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right form section */}
            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-14">
              <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-bl-full bg-violet-50/80 dark:bg-violet-500/5" />

              {submitted ? (
                <SuccessMessage onReset={resetForm} />
              ) : (
                <div className="relative mx-auto max-w-2xl">
                  <div className="mb-9">
                    <div className="mb-3 flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-300">
                      <MessageCircle size={18} />
                      Send us a message
                    </div>

                    <h2 className="font-display text-3xl font-extrabold leading-tight text-navy-900 dark:text-white sm:text-[40px]">
                      How can we help you?
                    </h2>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-navy-400 dark:text-slate-400 sm:text-base">
                      Complete the form below and our team will contact you
                      shortly.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField label="Name" required>
                        <InputWrapper icon={UserRound}>
                          <input
                            required
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="contact-input contact-input-icon"
                            placeholder="Your name"
                          />
                        </InputWrapper>
                      </FormField>

                      <FormField label="Surname" required>
                        <input
                          required
                          type="text"
                          name="surname"
                          value={form.surname}
                          onChange={handleChange}
                          className="contact-input"
                          placeholder="Your surname"
                        />
                      </FormField>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <FormField label="Phone" required>
                        <InputWrapper icon={Phone}>
                          <input
                            required
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="contact-input contact-input-icon"
                            placeholder="+91 00000 00000"
                            pattern="[0-9+\-\s]{10,16}"
                          />
                        </InputWrapper>
                      </FormField>

                      <FormField label="Email" required>
                        <InputWrapper icon={Mail}>
                          <input
                            required
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="contact-input contact-input-icon"
                            placeholder="you@example.com"
                          />
                        </InputWrapper>
                      </FormField>
                    </div>

                    <FormField label="Subject" required>
                      <input
                        required
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="contact-input"
                        placeholder="What would you like to discuss?"
                      />
                    </FormField>

                    <FormField label="Message" required>
                      <textarea
                        required
                        rows={5}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        className="contact-input contact-textarea"
                        placeholder="Write your message here..."
                      />
                    </FormField>

                    <button type="submit" className="contact-submit group">
                      <span className="contact-button-shine" />

                      <Send
                        size={19}
                        className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                      />

                      <span className="relative">Send Message</span>

                      <ArrowRight
                        size={18}
                        className="relative transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </button>

                    <p className="text-center text-xs leading-5 text-navy-400 dark:text-slate-500">
                      By submitting this form, you agree to be contacted by our
                      support team.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Location heading */}
        <div className="mb-6 mt-14 text-center sm:mt-18">
          <span className="text-sm font-extrabold uppercase tracking-[0.15em] text-violet-600 dark:text-violet-300">
            Our location
          </span>

          <h2 className="mt-3 font-display text-3xl font-extrabold text-navy-900 dark:text-white sm:text-4xl">
            Visit Our Head Office
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-navy-400 dark:text-slate-400">
            Find us easily using the interactive map below.
          </p>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[28px] border border-violet-100 bg-white p-2.5 shadow-[0_24px_65px_rgba(79,70,229,0.13)] dark:border-white/10 dark:bg-navy-900">
          <iframe
            title="Creative Adhyayan Head Office"
            src="https://maps.google.com/maps?q=Building%20No.%20532%2F1%2C%20First%20Floor%2C%20Bank%20Colony%20Deoli%20Village%2C%20New%20Delhi-110062%20Near%20by%20Shani%20Bazar%20Bandh%20Road.&t=m&z=15&output=embed&iwloc=near"
            className="h-[310px] w-full rounded-[21px] border-0 sm:h-[400px] lg:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <style>{`
        .contact-input {
          display: block;
          width: 100%;
          min-height: 54px;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          background: rgba(248, 250, 252, 0.9);
          padding: 0 18px;
          color: #172554;
          font-size: 14px;
          font-weight: 500;
          outline: none;
          box-sizing: border-box;
          transition:
            border-color 250ms ease,
            box-shadow 250ms ease,
            background-color 250ms ease,
            transform 250ms ease;
        }

        /* Keeps proper space between icon and placeholder */
        .contact-input.contact-input-icon {
          padding-left: 52px !important;
        }

        .contact-input::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .contact-input:hover {
          border-color: #c4b5fd;
          background: #ffffff;
        }

        .contact-input:focus {
          border-color: #7c3aed;
          background: #ffffff;
          box-shadow:
            0 0 0 4px rgba(139, 92, 246, 0.11),
            0 10px 30px rgba(109, 40, 217, 0.08);
        }

        .contact-textarea {
          min-height: 155px;
          resize: vertical;
          padding-top: 16px;
          padding-bottom: 16px;
          line-height: 1.65;
        }

        .contact-submit {
          position: relative;
          display: flex;
          width: 100%;
          min-height: 56px;
          align-items: center;
          justify-content: center;
          gap: 11px;
          overflow: hidden;
          border: 0;
          border-radius: 14px;
          background: linear-gradient(
            115deg,
            #7c3aed 0%,
            #4f46e5 50%,
            #7e22ce 100%
          );
          padding: 14px 24px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
          box-shadow: 0 16px 38px rgba(109, 40, 217, 0.3);
          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .contact-submit:hover {
          transform: translateY(-3px);
          box-shadow: 0 22px 45px rgba(109, 40, 217, 0.4);
        }

        .contact-submit:focus-visible {
          outline: 4px solid rgba(167, 139, 250, 0.3);
          outline-offset: 3px;
        }

        .contact-button-shine {
          position: absolute;
          inset: 0;
          transform: translateX(-110%);
          background: linear-gradient(
            100deg,
            transparent 25%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 75%
          );
          transition: transform 800ms ease;
        }

        .contact-submit:hover .contact-button-shine {
          transform: translateX(110%);
        }

        .dark .contact-input {
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(15, 23, 42, 0.7);
          color: #ffffff;
        }

        .dark .contact-input:hover,
        .dark .contact-input:focus {
          border-color: rgba(167, 139, 250, 0.75);
          background: rgba(15, 23, 42, 0.95);
        }

        @media (max-width: 639px) {
          .contact-input {
            min-height: 52px;
            border-radius: 12px;
          }

          .contact-textarea {
            min-height: 140px;
          }

          .contact-submit {
            min-height: 54px;
            border-radius: 12px;
          }
        }
      `}</style>
    </main>
  );
}

function FormField({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-2.5 block text-sm font-bold text-navy-900 dark:text-slate-200">
        {label}

        {required && (
          <span className="ml-1 text-violet-600 dark:text-violet-400">*</span>
        )}
      </span>

      {children}
    </label>
  );
}

function InputWrapper({ icon: Icon, children }) {
  return (
    <div className="relative">
      <Icon
        size={18}
        strokeWidth={2}
        className="pointer-events-none absolute left-[18px] top-1/2 z-10 -translate-y-1/2 text-violet-500"
      />

      {children}
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  content,
  href,
  action,
  external,
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="group flex items-start gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.16] hover:shadow-[0_18px_38px_rgba(31,21,95,0.22)] sm:gap-5"
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-violet-700 shadow-[0_10px_25px_rgba(0,0,0,0.16)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
        <Icon size={21} strokeWidth={2.2} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block text-base font-extrabold text-white">
          {title}
        </span>

        <span className="mt-1.5 block break-words text-sm leading-6 text-violet-100">
          {content}
        </span>

        <span className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-bold text-white">
          {action}

          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </span>
    </a>
  );
}

function SuccessMessage({ onReset }) {
  return (
    <div className="flex min-h-[600px] items-center justify-center py-10 text-center">
      <div className="max-w-md">
        <div className="relative mx-auto mb-7 flex h-24 w-24 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/15" />
          <span className="absolute inset-2 rounded-full bg-emerald-100 dark:bg-emerald-500/10" />

          <CheckCircle2
            size={54}
            className="relative text-emerald-500"
            strokeWidth={1.8}
          />
        </div>

        <span className="inline-flex rounded-full bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300">
          Message submitted
        </span>

        <h2 className="mt-6 font-display text-3xl font-extrabold text-navy-900 dark:text-white">
          Thank you for contacting us!
        </h2>

        <p className="mt-4 leading-7 text-navy-400 dark:text-slate-400">
          We have received your message. Our team will review your details and
          contact you shortly.
        </p>

        <button
          type="button"
          onClick={onReset}
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-violet-700"
        >
          Send Another Message
        </button>
      </div>
    </div>
  );
}