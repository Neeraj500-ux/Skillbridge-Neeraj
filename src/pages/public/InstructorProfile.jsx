import { useParams } from 'react-router-dom';
import { AtSign, Briefcase, Globe } from 'lucide-react';
import { instructors } from '../../data/instructors';
import { courses } from '../../data/courses';
import CourseCard from '../../components/CourseCard';
import Rating from '../../components/Rating';
import NotFound from './NotFound';

export default function InstructorProfile() {
  const { id } = useParams();
  const instructor = instructors.find((i) => i.id === id);
  if (!instructor) return <NotFound />;
  const theirCourses = courses.filter((c) => c.instructorId === id);

  return (
    <div>
      <section className="bg-navy-950 text-white">
        <div className="container-shell py-14 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
          <img src={instructor.avatar} alt={instructor.name} className="h-28 w-28 rounded-full object-cover shrink-0" />
          <div>
            <h1 className="font-display text-2xl font-extrabold">{instructor.name}</h1>
            <p className="text-slate-300 mb-2">{instructor.title}</p>
            <div className="flex justify-center sm:justify-start"><Rating value={instructor.rating} students={instructor.students} /></div>
            <p className="text-sm text-slate-400 mt-2">{instructor.courses} courses</p>
            <div className="flex justify-center sm:justify-start gap-2 mt-4">
              {[AtSign, Briefcase, Globe].map((Icon, i) => (
                <a key={i} href="#" className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"><Icon size={14} /></a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container-shell py-12">
        <div className="max-w-2xl mb-10">
          <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-3">About</h2>
          <p className="text-navy-500 dark:text-slate-400 leading-relaxed">{instructor.bio}</p>
          <div className="flex flex-wrap gap-1.5 mt-4">
            {instructor.expertise.map((e) => <span key={e} className="badge bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300">{e}</span>)}
          </div>
        </div>

        <h2 className="font-display text-xl font-bold text-navy-900 dark:text-white mb-5">Courses by {instructor.name}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {theirCourses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
    </div>
  );
}
