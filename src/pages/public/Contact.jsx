import { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container-shell py-16">
      <div className="text-center max-w-xl mx-auto mb-12">
        <h1 className="font-display text-3xl font-extrabold text-navy-900 dark:text-white">Get in Touch</h1>
        <p className="text-navy-400 dark:text-slate-400 mt-2">Questions about a course, partnership, or your account? We usually reply within a day.</p>
      </div>

      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
        <div className="space-y-4">
          <ContactCard icon={Mail} label="Email us" value="support@skillbridge.com" />
          <ContactCard icon={Phone} label="Call us" value="+91 98765 43210" />
          <ContactCard icon={MapPin} label="Visit us" value="Skillbridge HQ, Cyber City, Gurugram, India" />
        </div>

        <div className="card-surface p-7">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle2 className="mx-auto text-emerald-500 mb-3" size={40} />
              <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white">Message sent</h3>
              <p className="text-sm text-navy-400 mt-1.5">Thanks for reaching out — our team will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-text">Full Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input-field" placeholder="Your name" />
                </div>
                <div>
                  <label className="label-text">Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="input-field" placeholder="you@example.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-text">Phone (optional)</label>
                  <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input-field" placeholder="+91" />
                </div>
                <div>
                  <label className="label-text">Subject</label>
                  <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="input-field" placeholder="How can we help?" />
                </div>
              </div>
              <div>
                <label className="label-text">Message</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="input-field resize-none" placeholder="Tell us more..." />
              </div>
              <button type="submit" className="btn-primary w-full !py-3">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

function ContactCard({ icon: Icon, label, value }) {
  return (
    <div className="card-surface p-5 flex items-center gap-4">
      <span className="h-11 w-11 rounded-md bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 flex items-center justify-center shrink-0"><Icon size={18} /></span>
      <div>
        <p className="text-xs text-navy-400">{label}</p>
        <p className="text-sm font-semibold text-navy-800 dark:text-slate-100">{value}</p>
      </div>
    </div>
  );
}
