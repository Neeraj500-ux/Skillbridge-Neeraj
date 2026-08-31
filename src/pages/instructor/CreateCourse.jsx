import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Trash2, GripVertical, CheckCircle2 } from 'lucide-react';
import { categories } from '../../data/categories';
import { useStore } from '../../context/StoreContext';

const steps = ['Information', 'Curriculum', 'Pricing', 'Resources', 'SEO', 'Review'];

export default function CreateCourse() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const { showToast } = useStore();

  const [info, setInfo] = useState({ title: '', subtitle: '', description: '', category: categories[0].id, level: 'Beginner', language: 'English' });
  const [modules, setModules] = useState([{ id: 1, title: 'Introduction', lessons: [{ id: 1, title: 'Welcome', type: 'video' }] }]);
  const [pricing, setPricing] = useState({ price: '', salePrice: '', isFree: false });
  const [seo, setSeo] = useState({ seoTitle: '', seoDescription: '', slug: '' });

  const addModule = () => setModules((m) => [...m, { id: Date.now(), title: `Module ${m.length + 1}`, lessons: [] }]);
  const removeModule = (id) => setModules((m) => m.filter((mod) => mod.id !== id));
  const addLesson = (moduleId) => setModules((m) => m.map((mod) => mod.id === moduleId ? { ...mod, lessons: [...mod.lessons, { id: Date.now(), title: `Lesson ${mod.lessons.length + 1}`, type: 'video' }] } : mod));
  const removeLesson = (moduleId, lessonId) => setModules((m) => m.map((mod) => mod.id === moduleId ? { ...mod, lessons: mod.lessons.filter((l) => l.id !== lessonId) } : mod));

  const submit = () => {
    setSubmitted(true);
    showToast('Course submitted for review');
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={48} />
        <h2 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-2">Course Submitted</h2>
        <p className="text-navy-400 dark:text-slate-400 mb-8">"{info.title || 'Your course'}" has been sent for admin review. You'll be notified once it's approved and published.</p>
        <button onClick={() => navigate('/instructor/courses')} className="btn-primary">Go to My Courses</button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      {/* Step nav */}
      <div className="flex items-center mb-8 overflow-x-auto">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center shrink-0">
            <button onClick={() => setStep(i)} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${i === step ? 'bg-violet-600 text-white' : i < step ? 'bg-emerald-500/10 text-emerald-600' : 'bg-navy-50 dark:bg-white/5 text-navy-400'}`}>
              <span>{String(i + 1).padStart(2, '0')}</span> {s}
            </button>
            {i < steps.length - 1 && <div className="w-6 h-px bg-navy-200 dark:bg-white/10" />}
          </div>
        ))}
      </div>

      <div className="card-surface p-6">
        {step === 0 && (
          <div className="space-y-4">
            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-2">Course Information</h3>
            <div>
              <label className="label-text">Course Title</label>
              <input value={info.title} onChange={(e) => setInfo({ ...info, title: e.target.value })} className="input-field" placeholder="e.g. Advanced Instagram Growth Strategy" />
            </div>
            <div>
              <label className="label-text">Subtitle</label>
              <input value={info.subtitle} onChange={(e) => setInfo({ ...info, subtitle: e.target.value })} className="input-field" placeholder="A short one-line description" />
            </div>
            <div>
              <label className="label-text">Description</label>
              <textarea rows={4} value={info.description} onChange={(e) => setInfo({ ...info, description: e.target.value })} className="input-field resize-none" placeholder="Full course description" />
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="label-text">Category</label>
                <select value={info.category} onChange={(e) => setInfo({ ...info, category: e.target.value })} className="input-field">
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div>
                <label className="label-text">Level</label>
                <select value={info.level} onChange={(e) => setInfo({ ...info, level: e.target.value })} className="input-field">
                  {['Beginner', 'Intermediate', 'Advanced', 'All Levels'].map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
              <div>
                <label className="label-text">Language</label>
                <select value={info.language} onChange={(e) => setInfo({ ...info, language: e.target.value })} className="input-field">
                  {['English', 'Hindi', 'Spanish'].map((l) => <option key={l}>{l}</option>)}
                </select>
              </div>
            </div>
            <div>
              <label className="label-text">Thumbnail</label>
              <div className="border-2 border-dashed border-navy-200 dark:border-white/10 rounded-md p-8 text-center text-sm text-navy-400">Drag and drop an image, or click to upload</div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-2">Curriculum Builder</h3>
            {modules.map((mod, mi) => (
              <div key={mod.id} className="border border-navy-200 dark:border-white/10 rounded-md">
                <div className="flex items-center gap-2 px-4 py-3 bg-navy-50 dark:bg-white/5">
                  <GripVertical size={15} className="text-navy-300" />
                  <span className="text-xs font-bold text-violet-500">{String(mi + 1).padStart(2, '0')}</span>
                  <input value={mod.title} onChange={(e) => setModules((m) => m.map((x) => x.id === mod.id ? { ...x, title: e.target.value } : x))} className="flex-1 bg-transparent text-sm font-semibold text-navy-800 dark:text-slate-100 focus:outline-none" />
                  <button onClick={() => removeModule(mod.id)} className="text-red-400"><Trash2 size={14} /></button>
                </div>
                <div className="p-3 space-y-2">
                  {mod.lessons.map((lesson) => (
                    <div key={lesson.id} className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-navy-50 dark:hover:bg-white/5">
                      <GripVertical size={13} className="text-navy-300" />
                      <input value={lesson.title} onChange={(e) => setModules((m) => m.map((x) => x.id === mod.id ? { ...x, lessons: x.lessons.map((l) => l.id === lesson.id ? { ...l, title: e.target.value } : l) } : x))} className="flex-1 bg-transparent text-sm text-navy-600 dark:text-slate-300 focus:outline-none" />
                      <select value={lesson.type} onChange={(e) => setModules((m) => m.map((x) => x.id === mod.id ? { ...x, lessons: x.lessons.map((l) => l.id === lesson.id ? { ...l, type: e.target.value } : l) } : x))} className="text-xs border border-navy-200 dark:border-white/10 rounded-md px-2 py-1 bg-white dark:bg-navy-900">
                        {['video', 'text', 'pdf', 'quiz', 'assignment'].map((t) => <option key={t}>{t}</option>)}
                      </select>
                      <button onClick={() => removeLesson(mod.id, lesson.id)} className="text-red-400"><Trash2 size={13} /></button>
                    </div>
                  ))}
                  <button onClick={() => addLesson(mod.id)} className="text-xs font-semibold text-violet-600 flex items-center gap-1 px-3 py-1.5"><Plus size={13} /> Add Lesson</button>
                </div>
              </div>
            ))}
            <button onClick={addModule} className="btn-secondary !py-2 text-sm"><Plus size={14} /> Add Module</button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-2">Pricing</h3>
            <label className="flex items-center gap-2 text-sm cursor-pointer">
              <input type="checkbox" checked={pricing.isFree} onChange={(e) => setPricing({ ...pricing, isFree: e.target.checked })} className="accent-violet-600" /> This is a free course
            </label>
            {!pricing.isFree && (
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label-text">Regular Price (₹)</label>
                  <input type="number" value={pricing.price} onChange={(e) => setPricing({ ...pricing, price: e.target.value })} className="input-field" placeholder="9999" />
                </div>
                <div>
                  <label className="label-text">Sale Price (₹)</label>
                  <input type="number" value={pricing.salePrice} onChange={(e) => setPricing({ ...pricing, salePrice: e.target.value })} className="input-field" placeholder="3999" />
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-2">Course Resources</h3>
            <div className="border-2 border-dashed border-navy-200 dark:border-white/10 rounded-md p-8 text-center text-sm text-navy-400">Upload PDFs, documents, or ZIP files for your students</div>
            <div>
              <label className="label-text">External Links</label>
              <input className="input-field" placeholder="https://" />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-2">SEO</h3>
            <div>
              <label className="label-text">SEO Title</label>
              <input value={seo.seoTitle} onChange={(e) => setSeo({ ...seo, seoTitle: e.target.value })} className="input-field" />
            </div>
            <div>
              <label className="label-text">SEO Description</label>
              <textarea rows={3} value={seo.seoDescription} onChange={(e) => setSeo({ ...seo, seoDescription: e.target.value })} className="input-field resize-none" />
            </div>
            <div>
              <label className="label-text">Slug</label>
              <input value={seo.slug} onChange={(e) => setSeo({ ...seo, slug: e.target.value })} className="input-field" placeholder="course-url-slug" />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-4">
            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-2">Review & Submit</h3>
            <div className="space-y-3 text-sm">
              <ReviewRow label="Title" value={info.title || '—'} />
              <ReviewRow label="Category" value={categories.find((c) => c.id === info.category)?.name} />
              <ReviewRow label="Level" value={info.level} />
              <ReviewRow label="Modules" value={`${modules.length} modules, ${modules.reduce((s, m) => s + m.lessons.length, 0)} lessons`} />
              <ReviewRow label="Price" value={pricing.isFree ? 'Free' : `₹${pricing.salePrice || 0} (was ₹${pricing.price || 0})`} />
            </div>
            <p className="text-xs text-navy-400 bg-amber-500/10 text-amber-700 dark:text-amber-300 rounded-md px-3 py-2.5">Your course will be set to "Pending Review" and reviewed by our admin team before going live.</p>
          </div>
        )}

        <div className="flex items-center justify-between mt-8 pt-5 border-t border-navy-100 dark:border-white/10">
          <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} className="btn-secondary">Back</button>
          {step < steps.length - 1 ? (
            <button onClick={() => setStep((s) => s + 1)} className="btn-primary">Next Step</button>
          ) : (
            <button onClick={submit} className="btn-primary">Submit for Review</button>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div className="flex justify-between border-b border-navy-50 dark:border-white/5 pb-2.5">
      <span className="text-navy-400">{label}</span>
      <span className="font-semibold text-navy-800 dark:text-slate-100">{value}</span>
    </div>
  );
}
