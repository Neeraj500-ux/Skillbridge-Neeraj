import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Play, Pause, Volume2, Maximize, Settings2, ChevronLeft, ChevronRight,
  CheckCircle2, Circle, Lock, FileText, HelpCircle, ClipboardList, PlayCircle, MessageSquare, StickyNote, Paperclip,
} from 'lucide-react';
import { getCourseById } from '../../data/courses';
import { studentEnrollments } from '../../data/users';
import ProgressBar from '../../components/ProgressBar';
import { useStore } from '../../context/StoreContext';

const lessonIcon = { video: PlayCircle, text: FileText, pdf: FileText, quiz: HelpCircle, assignment: ClipboardList };

export default function CourseLearning() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);
  const enrollment = studentEnrollments.find((e) => e.courseId === courseId);
  const { showToast } = useStore();
  const allLessons = useMemo(() => course.curriculum.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleTitle: m.title }))), [course]);
  const [activeLessonId, setActiveLessonId] = useState(allLessons[0]?.id);
  const [playing, setPlaying] = useState(false);
  const [tab, setTab] = useState('description');
  const [completedIds, setCompletedIds] = useState(new Set(allLessons.slice(0, enrollment?.completedLessons || 0).map((l) => l.id)));

  const activeIndex = allLessons.findIndex((l) => l.id === activeLessonId);
  const activeLesson = allLessons[activeIndex];
  const progressPct = Math.round((completedIds.size / allLessons.length) * 100);

  const markComplete = () => {
    setCompletedIds((prev) => new Set(prev).add(activeLesson.id));
    showToast('Lesson marked complete');
    if (activeIndex < allLessons.length - 1) setActiveLessonId(allLessons[activeIndex + 1].id);
  };

  const goPrev = () => activeIndex > 0 && setActiveLessonId(allLessons[activeIndex - 1].id);
  const goNext = () => activeIndex < allLessons.length - 1 && setActiveLessonId(allLessons[activeIndex + 1].id);

  return (
    <div className="grid lg:grid-cols-[1fr_340px] gap-5 -m-4 sm:-m-6 lg:m-0 lg:gap-6">
      {/* Main player column */}
      <div className="p-4 sm:p-6 lg:p-0 space-y-5">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <Link to="/student/courses" className="text-xs text-navy-400 hover:text-violet-600">← Back to My Courses</Link>
            <h2 className="font-display font-bold text-navy-900 dark:text-white truncate">{course.title}</h2>
          </div>
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <span className="text-xs font-semibold text-navy-500 dark:text-slate-300">{progressPct}% Complete</span>
            <div className="w-28"><ProgressBar value={progressPct} size="sm" /></div>
          </div>
        </div>

        {/* Video player mock */}
        <div className="rounded-lg overflow-hidden bg-navy-950 aspect-video relative flex items-center justify-center group">
          <img src={course.thumbnail} alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
          <button onClick={() => setPlaying((p) => !p)} className="relative z-10 h-16 w-16 rounded-full bg-white/15 backdrop-blur flex items-center justify-center text-white hover:bg-white/25 transition">
            {playing ? <Pause size={26} /> : <Play size={26} className="ml-1" />}
          </button>
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="h-1 bg-white/25 rounded-full mb-3 overflow-hidden"><div className="h-1 bg-electric-500 rounded-full w-1/3" /></div>
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-4">
                <button onClick={() => setPlaying((p) => !p)}>{playing ? <Pause size={17} /> : <Play size={17} />}</button>
                <Volume2 size={17} />
                <span className="text-xs">6:42 / {activeLesson?.duration}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold">1x</span>
                <Settings2 size={16} />
                <Maximize size={16} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white">{activeLesson?.title}</h3>
          <p className="text-xs text-navy-400 mt-1">{activeLesson?.moduleTitle} · {activeLesson?.duration}</p>
        </div>

        <div className="flex gap-1 border-b border-navy-100 dark:border-white/10">
          {[['description', 'Description', FileText], ['resources', 'Resources', Paperclip], ['notes', 'Notes', StickyNote], ['discussion', 'Discussion', MessageSquare]].map(([key, label, Icon]) => (
            <button key={key} onClick={() => setTab(key)} className={`flex items-center gap-1.5 px-3.5 py-2.5 text-sm font-semibold border-b-2 ${tab === key ? 'border-violet-600 text-violet-600 dark:text-violet-300' : 'border-transparent text-navy-400'}`}>
              <Icon size={14} /> {label}
            </button>
          ))}
        </div>

        <div className="card-surface p-5">
          {tab === 'description' && <p className="text-sm text-navy-500 dark:text-slate-400 leading-relaxed">{course.description}</p>}
          {tab === 'resources' && (
            <ul className="space-y-2.5">
              {['Lesson Slides.pdf', 'Starter Files.zip', 'Cheat Sheet.pdf'].map((r) => (
                <li key={r} className="flex items-center gap-2.5 text-sm text-navy-600 dark:text-slate-300"><Paperclip size={14} className="text-navy-400" /> {r}</li>
              ))}
            </ul>
          )}
          {tab === 'notes' && <NotesTab lessonId={activeLesson?.id} />}
          {tab === 'discussion' && (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <img src="https://i.pravatar.cc/40?img=8" alt="" className="h-8 w-8 rounded-full" />
                <div className="bg-navy-50 dark:bg-white/5 rounded-md px-3.5 py-2.5 text-sm">
                  <p className="font-semibold text-navy-800 dark:text-slate-100 text-xs mb-0.5">Simran Kaur</p>
                  <p className="text-navy-600 dark:text-slate-300">How does this apply if I'm targeting a B2B audience instead?</p>
                </div>
              </div>
              <textarea rows={2} placeholder="Ask a question about this lesson..." className="input-field resize-none" />
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <button onClick={goPrev} disabled={activeIndex === 0} className="btn-secondary"><ChevronLeft size={15} /> Previous</button>
          <button onClick={markComplete} className="btn-primary">
            <CheckCircle2 size={15} /> Mark Complete
          </button>
          <button onClick={goNext} disabled={activeIndex === allLessons.length - 1} className="btn-secondary">Next <ChevronRight size={15} /></button>
        </div>
      </div>

      {/* Curriculum sidebar */}
      <div className="border-t lg:border-t-0 lg:border-l border-navy-100 dark:border-white/10 lg:pl-6 p-4 sm:p-6 lg:p-0">
        <p className="font-display font-bold text-sm text-navy-900 dark:text-white mb-4">Course Content</p>
        <div className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
          {course.curriculum.map((module) => (
            <div key={module.id}>
              <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-2">{module.title}</p>
              <div className="space-y-1">
                {module.lessons.map((lesson) => {
                  const Icon = lessonIcon[lesson.type] || PlayCircle;
                  const isDone = completedIds.has(lesson.id);
                  const isActive = activeLessonId === lesson.id;
                  const locked = !lesson.preview && !isDone && !isActive && lesson.id !== allLessons[completedIds.size]?.id;
                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setActiveLessonId(lesson.id)}
                      className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left text-sm transition ${isActive ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300' : 'hover:bg-navy-50 dark:hover:bg-white/5 text-navy-600 dark:text-slate-300'}`}
                    >
                      {isDone ? <CheckCircle2 size={15} className="text-emerald-500 shrink-0" /> : <Icon size={15} className="text-navy-400 shrink-0" />}
                      <span className="flex-1 truncate">{lesson.title}</span>
                      <span className="text-xs text-navy-400 shrink-0">{lesson.duration}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NotesTab({ lessonId }) {
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState('');
  return (
    <div className="space-y-3">
      <textarea rows={4} value={note} onChange={(e) => setNote(e.target.value)} placeholder="Write a private note for this lesson..." className="input-field resize-none" />
      <button onClick={() => setSaved(note)} className="btn-secondary !py-2 text-xs">Save Note</button>
      {saved && <p className="text-sm text-navy-500 dark:text-slate-400 bg-navy-50 dark:bg-white/5 rounded-md p-3">{saved}</p>}
    </div>
  );
}
