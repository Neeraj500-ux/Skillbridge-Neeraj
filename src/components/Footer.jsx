import { Link } from 'react-router-dom';
import { GraduationCap, AtSign, Briefcase, PlayCircle, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-300 mt-24">
      <div className="container-shell py-14 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-3">
            <span className="h-9 w-9 rounded-md bg-brand-gradient flex items-center justify-center text-white">
              <GraduationCap size={18} />
            </span>
            <span className="font-display font-extrabold text-lg text-white">Skillbridge</span>
          </Link>
          <p className="text-sm text-slate-400 max-w-xs">
            Practical courses from real practitioners — built to help you learn a skill you can actually use.
          </p>
          <div className="flex gap-3 mt-5">
            {[AtSign, Briefcase, PlayCircle, Camera].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
        <FooterCol title="Explore" links={[['Courses', '/courses'], ['Categories', '/categories'], ['Instructors', '/instructors'], ['Pricing', '/pricing']]} />
        <FooterCol title="Company" links={[['About', '/about'], ['Contact', '/contact'], ['Become an Instructor', '/register']]} />
        <FooterCol title="Legal" links={[['Terms', '/about'], ['Privacy Policy', '/about'], ['Refund Policy', '/about'], ['FAQs', '/about']]} />
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <span>© 2026 Skillbridge Learning Pvt. Ltd. All rights reserved.</span>
          <span>Made for learners who ship.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white mb-3">{title}</h4>
      <ul className="space-y-2.5">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-sm text-slate-400 hover:text-white transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
