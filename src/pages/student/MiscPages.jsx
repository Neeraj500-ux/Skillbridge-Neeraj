import { useState } from 'react';
import { StickyNote, MessageSquare, Bell, Send, ClipboardList, HelpCircle, Award, CheckCircle2 } from 'lucide-react';
import { getCourseById } from '../../data/courses';
import { studentEnrollments } from '../../data/users';
import EmptyState from '../../components/EmptyState';

export function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, courseId: 'c1', lesson: 'Facebook Ads Campaign Setup', text: 'Remember to set a daily budget cap before scaling a campaign.' },
    { id: 2, courseId: 'c2', lesson: 'State & Hooks Deep Dive', text: 'useEffect cleanup functions run before the next effect and on unmount.' },
  ]);

  if (notes.length === 0) {
    return <EmptyState icon={StickyNote} title="No notes yet" message="Notes you take while watching lessons will appear here." />;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {notes.map((n) => {
        const course = getCourseById(n.courseId);
        return (
          <div key={n.id} className="card-surface p-5">
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-300 mb-1">{course.title}</p>
            <p className="text-xs text-navy-400 mb-3">{n.lesson}</p>
            <p className="text-sm text-navy-600 dark:text-slate-300">{n.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export function Messages() {
  const [thread, setThread] = useState('ins-1');
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([
    { from: 'them', text: 'Hi! Let me know if you have any questions about the paid ads module.' },
    { from: 'me', text: 'Thanks! Quick question on budget pacing for a 7-day campaign.' },
    { from: 'them', text: 'Great question — I\'ll cover that in the next live Q&A, but briefly: start conservative for the first 2 days.' },
  ]);
  const conversations = [
    { id: 'ins-1', name: 'Ananya Rao', avatar: 'https://i.pravatar.cc/60?img=47', last: 'Start conservative for the first 2 days.' },
    { id: 'ins-2', name: 'Rohan Mehta', avatar: 'https://i.pravatar.cc/60?img=12', last: 'Great work on the capstone submission!' },
  ];

  const send = () => {
    if (!draft.trim()) return;
    setMessages((m) => [...m, { from: 'me', text: draft }]);
    setDraft('');
  };

  return (
    <div className="grid sm:grid-cols-[240px_1fr] gap-5 card-surface overflow-hidden h-[600px]">
      <div className="border-r border-navy-100 dark:border-white/10 overflow-y-auto">
        {conversations.map((c) => (
          <button key={c.id} onClick={() => setThread(c.id)} className={`w-full flex items-center gap-3 px-4 py-3.5 text-left ${thread === c.id ? 'bg-violet-50 dark:bg-violet-500/10' : 'hover:bg-navy-50 dark:hover:bg-white/5'}`}>
            <img src={c.avatar} alt="" className="h-9 w-9 rounded-full object-cover shrink-0" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-navy-900 dark:text-white truncate">{c.name}</p>
              <p className="text-xs text-navy-400 truncate">{c.last}</p>
            </div>
          </button>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[75%] px-4 py-2.5 rounded-lg text-sm ${m.from === 'me' ? 'bg-violet-600 text-white ml-auto' : 'bg-navy-50 dark:bg-white/5 text-navy-700 dark:text-slate-200'}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="border-t border-navy-100 dark:border-white/10 p-3 flex gap-2">
          <input value={draft} onChange={(e) => setDraft(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && send()} placeholder="Type a message..." className="input-field !py-2" />
          <button onClick={send} className="btn-primary !px-4"><Send size={15} /></button>
        </div>
      </div>
    </div>
  );
}

const notifIcon = { assignment: ClipboardList, quiz: HelpCircle, certificate: Award, enrollment: CheckCircle2 };
const notifData = [
  { id: 1, type: 'enrollment', title: 'Enrollment successful', body: 'You are now enrolled in Applied Machine Learning with Python.', time: '2h ago', unread: true },
  { id: 2, type: 'assignment', title: 'Assignment deadline approaching', body: 'SEO Strategy Assignment is due tomorrow.', time: '5h ago', unread: true },
  { id: 3, type: 'quiz', title: 'Quiz result available', body: 'You scored 8/10 on SEO Fundamentals Quiz.', time: '1d ago', unread: false },
  { id: 4, type: 'certificate', title: 'Certificate available', body: 'Your certificate for Personal Finance 101 is ready.', time: '3d ago', unread: false },
];

export function Notifications() {
  const [items, setItems] = useState(notifData);
  const [tab, setTab] = useState('all');
  const filtered = items.filter((n) => tab === 'all' || (tab === 'unread' && n.unread));

  if (items.length === 0) return <EmptyState icon={Bell} title="No notifications" message="You're all caught up." />;

  return (
    <div className="max-w-2xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          {['all', 'unread'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize ${tab === t ? 'bg-violet-600 text-white' : 'bg-white dark:bg-navy-800 border border-navy-200 dark:border-white/10 text-navy-500'}`}>{t}</button>
          ))}
        </div>
        <button onClick={() => setItems((items) => items.map((i) => ({ ...i, unread: false })))} className="text-xs font-semibold text-violet-600">Mark all as read</button>
      </div>
      <div className="space-y-2">
        {filtered.map((n) => {
          const Icon = notifIcon[n.type] || Bell;
          return (
            <div key={n.id} className={`card-surface p-4 flex items-start gap-3 ${n.unread ? 'border-l-4 border-l-violet-500' : ''}`}>
              <span className="h-9 w-9 rounded-md bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300 flex items-center justify-center shrink-0"><Icon size={16} /></span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-navy-800 dark:text-slate-100">{n.title}</p>
                <p className="text-xs text-navy-400 mt-0.5">{n.body}</p>
                <p className="text-[11px] text-navy-300 mt-1">{n.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
