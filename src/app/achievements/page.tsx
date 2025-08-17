
import { achievements } from '@/data/achievements';
import Image from 'next/image';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900/60 via-slate-900/80 to-indigo-900/60 py-10 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 bg-gradient-to-r from-emerald-400 via-violet-300 to-indigo-400 bg-clip-text text-transparent">
          Achievements
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {achievements.length === 0 && (
            <div className="col-span-2 text-center text-slate-300 text-base sm:text-lg">No achievements added yet.</div>
          )}
          {[...achievements].reverse().map((ach) => (
            <div key={ach.id} className="bg-slate-800/70 rounded-xl p-3 sm:p-6 border border-emerald-400/20 shadow-lg flex flex-col gap-2">
              {ach.coverImage && (
                <div className="mb-3 sm:mb-4 w-full aspect-video relative rounded-lg overflow-hidden bg-slate-900/40">
                  <Image src={`/${ach.coverImage}`} alt={ach.title} fill className="object-cover" />
                </div>
              )}
              <h3 className="text-base sm:text-xl font-semibold text-emerald-300 mb-1 sm:mb-2">{ach.title}</h3>
              <p className="text-slate-200 text-sm sm:text-base mb-1 sm:mb-2">{ach.description}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-400 mb-1 sm:mb-2">
                <span className="bg-slate-700/60 px-2 py-1 rounded">{new Date(ach.date).toLocaleDateString()}</span>
                {ach.awardedBy && <span className="bg-slate-700/60 px-2 py-1 rounded">Awarded by: {ach.awardedBy}</span>}
              </div>
              {ach.link && (
                <a href={ach.link} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline text-xs sm:text-sm font-medium mt-auto">View Details</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
