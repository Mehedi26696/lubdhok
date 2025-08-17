
import { announcements } from '@/data/announcements';

export default function AnnouncementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-900/60 via-slate-900/80 to-yellow-900/60 py-10 sm:py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-2 sm:px-4 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-10 bg-gradient-to-r from-orange-400 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
           Announcements
        </h1>
        <div className="space-y-4 sm:space-y-6">
          {announcements.length === 0 && (
            <div className="text-center text-slate-300 text-base sm:text-lg">No announcements yet.</div>
          )}
          {[...announcements].reverse().map((a) => (
            <div key={a.id} className="bg-slate-800/70 rounded-xl p-3 sm:p-5 border-l-4 border-orange-400 shadow flex flex-col gap-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1 sm:gap-0">
                <h3 className="text-base sm:text-lg font-semibold text-orange-300 mb-1 sm:mb-0">{a.title}</h3>
                <span className="text-xs text-slate-400 bg-slate-700/60 px-2 py-1 rounded w-fit">{new Date(a.date).toLocaleDateString()}</span>
              </div>
              <p className="text-slate-200 text-sm sm:text-base mb-1">{a.message}</p>
              {a.author && <div className="text-xs text-slate-400">By {a.author}</div>}
              {a.link && (
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="text-orange-300 hover:underline text-xs font-medium">More info</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
