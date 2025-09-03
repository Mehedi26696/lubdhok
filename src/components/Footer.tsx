import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-transparent relative overflow-hidden">
			{/* Background decorative elements that blend with page */}
			<div className="absolute inset-0 pointer-events-none select-none">
				{/* Gradient overlay that extends the page background */}
				<div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/80 to-transparent"></div>
				<div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-500/8 to-teal-500/8 rounded-full -translate-x-24 -translate-y-24"></div>
				<div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-violet-500/8 to-purple-500/8 rounded-full translate-x-16 translate-y-16"></div>
			</div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main Footer Content */}
				<div className="py-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Brand & Mission */}
						<div className="lg:col-span-1">
							<div className="mb-4">
								<h2 className="font-bold text-xl text-white tracking-tight mb-2">
									Lubdhok<span className="text-blue-400"> CSEDU-29</span>
								</h2>
								<div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-3"></div>
								<p className="text-gray-300 text-sm">
									Computer Science & Engineering<br />
									<span className="text-blue-300 font-medium">University of Dhaka</span>
								</p>
								{/* YouTube Channel Link */}
								<div className="mt-4">
									<a
										href="https://www.youtube.com/@CSEDU-29"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center gap-2 text-orange-300 hover:text-white font-medium text-sm transition-colors duration-200"
									>
										<svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
											<path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.413 3.5 12 3.5 12 3.5s-7.413 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.16 0 12 0 12s0 3.84.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.587 20.5 12 20.5 12 20.5s7.413 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.84 24 12 24 12s0-3.84-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
										</svg>
										<span>Visit our YouTube Channel</span>
									</a>
								</div>
							</div>
						</div>

						{/* Navigation Links */}
						<div className="lg:col-span-1">
							<h3 className="font-semibold text-white text-base mb-4">Quick Links</h3>
							<div className="grid grid-cols-2 gap-2">
								{[
									{ href: "/", label: "Home", icon: "🏠" },
									{ href: "/semesters", label: "Materials", icon: "📚" },
									{ href: "/events", label: "Events", icon: "🎉" },
									{ href: "/projects", label: "Projects", icon: "💻" },
									{ href: "/about", label: "About", icon: "👥" },
									{ href: "/contact", label: "Contact", icon: "📧" }
								].map((link) => (
									<Link 
										key={link.href}
										href={link.href} 
										className="text-gray-300 hover:text-white transition-all duration-200 flex items-center group text-sm py-1"
									>
										<span className="mr-2 text-sm group-hover:scale-110 transition-transform">{link.icon}</span>
										<span className="group-hover:translate-x-0.5 transition-transform">{link.label}</span>
									</Link>
								))}
							</div>
						</div>

						{/* Academic Resources */}
						<div className="lg:col-span-1">
							<h3 className="font-bold text-white text-lg mb-6">Academic Resources</h3>
							<div className="grid grid-cols-2 gap-3">
								{[
									{ label: "Lectures", icon: "🎓", color: "from-blue-500/20 to-blue-600/10" },
									{ label: "Slides", icon: "📊", color: "from-green-500/20 to-green-600/10" },
									{ label: "Notes", icon: "📝", color: "from-purple-500/20 to-purple-600/10" },
									{ label: "Assignments", icon: "📋", color: "from-orange-500/20 to-orange-600/10" },
									{ label: "Lab Work", icon: "�", color: "from-cyan-500/20 to-cyan-600/10" },
									{ label: "Projects", icon: "🚀", color: "from-pink-500/20 to-pink-600/10" }
								].map((resource) => (
									<div 
										key={resource.label}
										className={`bg-gradient-to-br ${resource.color} border border-white/10 rounded-lg p-3 text-center hover:scale-105 transition-all duration-200 cursor-pointer group`}
									>

										<span className="text-lg mb-1 block group-hover:scale-110 transition-transform">{resource.icon}</span>
										<span className="text-gray-300 text-xs font-medium">{resource.label}</span>
									</div>
								))}
							</div>
						</div>

					</div>
							
							 
							 
				 
				</div>

 
			</div>
		</footer>
	);
}
