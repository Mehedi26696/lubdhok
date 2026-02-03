'use client'

import Link from "next/link";
import { Youtube } from "lucide-react";

export default function Footer() {
return (
<footer className="bg-slate-900 relative overflow-hidden pt-24 border-t border-white/5 pb-12">
{/* Background decorative elements */}
<div className="absolute inset-0 pointer-events-none select-none">
	<div className="absolute inset-0 bg-[#0f172a]"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
</div>

<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
{/* Top Branding Section */}
<div className="pb-16 grid grid-cols-1 lg:grid-cols-4 gap-12 border-b border-white/5">
<div className="lg:col-span-2">
<div className="flex items-center gap-4 mb-8 text-left">
<div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center border border-white/10 text-white font-black text-2xl shadow-2xl">
L
</div>
<div>
<h2 className="font-black text-3xl text-white tracking-tighter uppercase">
Lubdhok<span className="text-violet-500"> 29</span>
</h2>
<p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] mt-1">
Architecture of Knowledge
</p>
</div>
</div>
<p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
A digital sanctuary for the tech pioneers of CSEDU-29. Preserving our academic heritage and collective growth through open collaboration.
</p>
<a
href="https://www.youtube.com/@CSEDU-29"
target="_blank"
rel="noopener noreferrer"
className="inline-flex items-center gap-3 px-6 py-3 bg-red-600/10 border border-red-500/20 text-red-500 rounded-xl font-bold text-sm hover:bg-red-600 hover:text-white transition-all duration-300 group"
>
<Youtube size={18} className="transition-transform group-hover:scale-110" />
Our YouTube Channel
</a>
</div>

					<div>
						<h3 className="text-white font-black uppercase tracking-widest text-[10px] mb-8 opacity-50">Ecosystem</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-8 gap-y-4">
							{[
								{ href: "/", label: "Home", icon: "🏠" },
								{ href: "/semesters", label: "Materials", icon: "📚" },
								{ href: "/events", label: "Events", icon: "🎉" },
								{ href: "/projects", label: "Projects", icon: "💻" },
								{ href: "/achievements", label: "Achievements", icon: "🏆" },
								{ href: "/announcements", label: "Announcements", icon: "📢" },
								{ href: "/about", label: "About", icon: "👥" },
								{ href: "/contact", label: "Contact", icon: "📧" }
							].map((link) => (
								<Link 
									key={link.href}
									href={link.href} 
									className="text-slate-400 hover:text-white font-bold transition-all flex items-center group text-sm"
								>
									<span className="mr-3 text-lg group-hover:scale-125 transition-transform">{link.icon}</span>
									{link.label}
								</Link>
							))}
						</div>
					</div>

<div>
<div className="space-y-4">
<div className="p-4 bg-black/40 border border-white/5 rounded-2xl group hover:border-violet-500/30 transition-all">
<div className="text-white font-bold text-sm">CSEDU-29 (2022-26)</div>
</div>
<div className="p-4 bg-black/40 border border-white/5 rounded-2xl group hover:border-indigo-500/30 transition-all">
<div className="text-white font-bold text-sm">University of Dhaka</div>
</div>
</div>
</div>
</div>

{/* Resource Tags */}
<div className="py-12 flex flex-wrap items-center gap-3">
{[
{ label: "Lectures", color: "from-blue-500 to-blue-600" },
{ label: "Slides", color: "from-emerald-500 to-green-600" },
{ label: "Notes", color: "from-violet-500 to-purple-600" },
{ label: "Assignments", color: "from-orange-500 to-amber-600" },
{ label: "Lab Work", color: "from-cyan-500 to-sky-600" },
{ label: "Projects", color: "from-pink-500 to-rose-600" }
].map((resource) => (
<div 
key={resource.label}
className="px-5 py-2 bg-black/20 border border-white/5 rounded-full text-slate-500 text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-white/10 transition-all cursor-pointer flex items-center gap-2 group"
>
							<div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${resource.color} group-hover:scale-150 transition-transform`}></div>
{resource.label}
</div>
))}
</div>

{/* Bottom Bar */}
<div className="mt-8 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-slate-600 text-[9px] font-black uppercase tracking-[0.3em]">
&copy; 2026 Lubdhok Batch &bull; All Technical Rights Reserved
</p>
<div className="flex items-center gap-8">
<Link href="/privacy" className="text-slate-600 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Privacy</Link>
<Link href="/terms" className="text-slate-600 hover:text-white text-[9px] font-black uppercase tracking-widest transition-colors">Terms</Link>
<div className="h-4 w-[1px] bg-white/5 hidden md:block"></div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-slate-600 text-[9px] font-black uppercase tracking-widest">Systems Active</span>
</div>
</div>
</div>
</div>
</footer>
);
}
