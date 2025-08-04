import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 mt-12 relative overflow-hidden">
			{/* Background decorative elements */}
			<div className="absolute inset-0">
				<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full -translate-x-48 -translate-y-48"></div>
				<div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-indigo-500/10 to-blue-500/10 rounded-full translate-x-40 translate-y-40"></div>
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="py-12">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
						{/* Brand Info */}
						<div className="space-y-6">
							<div className="flex items-center space-x-3">
								<div>
									<span className="font-bold text-xl text-white">
										Lubdhok-CSEDU29
									</span>
								</div>
							</div>
						</div>

						{/* Quick Links */}
						<div className="space-y-6">
							<h3 className="font-bold text-white text-lg mb-4">Quick Links</h3>
							<ul className="space-y-3">
								<li>
									<Link
										href="/"
										className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group">
										<span className="w-2 h-2 bg-violet-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
										Home
									</Link>
								</li>
								<li>
									<Link
										href="/semesters"
										className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group">
										<span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
										All Semesters
									</Link>
								</li>
								<li>
									<Link
										href="/about"
										className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group">
										<span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href="/events"
										className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group">
										<span className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
										Events
									</Link>
								</li>
								<li>
									<Link
										href="/projects"
										className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group">
										<span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
										Projects
									</Link>
								</li>
								<li>
									<Link
										href="/contact"
										className="text-gray-300 hover:text-violet-400 transition-colors duration-300 flex items-center group">
										<span className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></span>
										Contact
									</Link>
								</li>
							</ul>
						</div>

						{/* Resource Types */}
						<div className="space-y-6">
							<h3 className="font-bold text-white text-lg mb-4">
								Resource Types
							</h3>
							<div className="grid grid-cols-2 gap-3">
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">🎓</span>
										<span className="text-gray-300 text-sm font-medium">
											Lectures
										</span>
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">📊</span>
										<span className="text-gray-300 text-sm font-medium">
											Slides
										</span>
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">📝</span>
										<span className="text-gray-300 text-sm font-medium">
											Notes
										</span>
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">📋</span>
										<span className="text-gray-300 text-sm font-medium">
											Assignments
										</span>
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">💻</span>
										<span className="text-gray-300 text-sm font-medium">
											Code
										</span>
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">📚</span>
										<span className="text-gray-300 text-sm font-medium">
											Books
										</span>
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">❓</span>
										<span className="text-gray-300 text-sm font-medium">
											Questions
										</span>
									</div>
								</div>
								<div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 hover:bg-white/10 transition-all duration-300">
									<div className="flex items-center space-x-2">
										<span className="text-xl">🔬</span>
										<span className="text-gray-300 text-sm font-medium">
											Lab Work
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
