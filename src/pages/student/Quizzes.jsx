import { useState } from 'react';
import { HelpCircle, Clock, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import { quizzes } from '../../data/users';
import { getCourseById } from '../../data/courses';
import EmptyState from '../../components/EmptyState';

const sampleQuestions = [
  { q: 'Which metric best measures ad campaign efficiency?', options: ['Impressions', 'ROAS', 'Page Likes', 'Follower Count'], correct: 1 },
  { q: 'What does SEO stand for?', options: ['Search Engine Optimization', 'Site Element Order', 'Search Efficiency Output', 'Sales Engagement Objective'], correct: 0 },
  { q: 'Which HTTP status code means "Not Found"?', options: ['200', '301', '404', '500'], correct: 2 },
];

export default function Quizzes() {
  const [activeQuiz, setActiveQuiz] = useState(null);

  if (activeQuiz) return <QuizRunner quiz={activeQuiz} onExit={() => setActiveQuiz(null)} />;

  if (quizzes.length === 0) {
    return <EmptyState icon={HelpCircle} title="No quizzes yet" message="Quizzes will appear here as you progress through your courses." />;
  }

  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {quizzes.map((quiz) => {
        const course = getCourseById(quiz.courseId);
        const lastAttempt = quiz.attempts[quiz.attempts.length - 1];
        return (
          <div key={quiz.id} className="card-surface p-5">
            <p className="text-xs text-navy-400 mb-1">{course.title}</p>
            <h3 className="font-display font-bold text-navy-900 dark:text-white mb-3">{quiz.title}</h3>
            <div className="flex items-center gap-4 text-xs text-navy-400 mb-4">
              <span className="flex items-center gap-1"><HelpCircle size={13} /> {quiz.questions} questions</span>
              <span className="flex items-center gap-1"><Clock size={13} /> {quiz.timeLimit}</span>
            </div>
            {lastAttempt && (
              <div className={`flex items-center gap-2 text-sm mb-4 px-3 py-2 rounded-md ${lastAttempt.passed ? 'bg-emerald-500/10 text-emerald-600' : 'bg-red-500/10 text-red-500'}`}>
                {lastAttempt.passed ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
                Last attempt: {lastAttempt.score}/{lastAttempt.total} ({Math.round((lastAttempt.score / lastAttempt.total) * 100)}%)
              </div>
            )}
            <button onClick={() => setActiveQuiz(quiz)} className="btn-primary w-full !py-2 text-sm">
              {lastAttempt ? <><RotateCcw size={14} /> Retry Quiz</> : 'Start Quiz'}
            </button>
          </div>
        );
      })}
    </div>
  );
}

function QuizRunner({ quiz, onExit }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [finished, setFinished] = useState(false);
  const question = sampleQuestions[index % sampleQuestions.length];

  const selectAnswer = (optIdx) => {
    setAnswers((prev) => [...prev, optIdx]);
    if (index < 2) setIndex(index + 1);
    else setFinished(true);
  };

  if (finished) {
    const score = answers.filter((a, i) => a === sampleQuestions[i].correct).length;
    const pct = Math.round((score / sampleQuestions.length) * 100);
    const passed = pct >= 60;
    return (
      <div className="max-w-md mx-auto text-center card-surface p-8">
        {passed ? <CheckCircle2 className="mx-auto text-emerald-500 mb-4" size={40} /> : <XCircle className="mx-auto text-red-500 mb-4" size={40} />}
        <h2 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-1">{score}/{sampleQuestions.length}</h2>
        <p className="text-navy-400 mb-1">{pct}% Score</p>
        <p className={`font-semibold mb-6 ${passed ? 'text-emerald-600' : 'text-red-500'}`}>{passed ? 'Passed' : 'Failed'}</p>
        <button onClick={onExit} className="btn-primary">Back to Quizzes</button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto">
      <p className="text-sm text-navy-400 mb-2">Question {index + 1} of {sampleQuestions.length}</p>
      <div className="card-surface p-6">
        <h3 className="font-display font-bold text-lg text-navy-900 dark:text-white mb-5">{question.q}</h3>
        <div className="space-y-2.5">
          {question.options.map((opt, i) => (
            <button key={opt} onClick={() => selectAnswer(i)} className="w-full text-left px-4 py-3 rounded-md border border-navy-200 dark:border-white/10 hover:border-violet-400 hover:bg-violet-50/50 dark:hover:bg-violet-500/5 transition text-sm text-navy-700 dark:text-slate-200">
              <span className="font-semibold text-violet-600 mr-2">{String.fromCharCode(65 + i)}.</span> {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
