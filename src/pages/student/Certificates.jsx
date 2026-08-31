import { Award, Download, Share2, ShieldCheck } from 'lucide-react';
import { certificates } from '../../data/users';
import { getCourseById } from '../../data/courses';
import { useStore } from '../../context/StoreContext';
import EmptyState from '../../components/EmptyState';

export default function Certificates() {
  const { showToast } = useStore();

  if (certificates.length === 0) {
    return <EmptyState icon={Award} title="No certificates yet" message="Complete a course to earn your first certificate." actionLabel="Explore Courses" actionTo="/courses" />;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {certificates.map((cert) => {
        const course = getCourseById(cert.courseId);
        return (
          <div key={cert.id} className="card-surface overflow-hidden">
            <div className="bg-brand-gradient p-6 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-violet-glow" />
              <div className="relative">
                <Award size={26} className="mb-3 text-amber-300" />
                <p className="text-xs uppercase tracking-widest text-white/70 mb-1">Certificate of Completion</p>
                <h3 className="font-display font-bold text-lg leading-snug mb-3">{course.title}</h3>
                <p className="text-sm text-white/80">Awarded to <span className="font-semibold text-white">{cert.studentName}</span></p>
                <p className="text-xs text-white/60 mt-1">Instructor: {cert.instructor}</p>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between text-sm mb-4">
                <span className="text-navy-400">Issued {new Date(cert.issuedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                <span className="font-mono text-xs text-navy-400">{cert.id}</span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => showToast('Certificate downloaded')} className="btn-secondary flex-1 !py-2 text-xs"><Download size={13} /> Download</button>
                <button onClick={() => showToast('Share link copied')} className="btn-secondary flex-1 !py-2 text-xs"><Share2 size={13} /> Share</button>
                <button onClick={() => showToast('Certificate verified ✓')} className="btn-ghost !py-2 text-xs"><ShieldCheck size={13} /> Verify</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
