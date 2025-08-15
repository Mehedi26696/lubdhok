export default function ContactPage() {
 
 

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Enhanced Visual Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary floating orbs with contact-themed colors */}
        <div className="absolute top-20 -right-40 w-96 h-96 bg-green-500/12 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/12 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-violet-500/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-40 left-1/4 w-64 h-64 bg-emerald-400/6 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-cyan-400/6 rounded-full blur-2xl"></div>
        
        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.06),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Form */}
        <div className="mb-16">
          <div className="text-center mb-12 opacity-0 animate-fade-in-up" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-green-100 to-blue-100 bg-clip-text text-transparent">
              Send us a Message
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-6"></div>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Have a specific question? Fill out the form below and we&apos;ll get back to you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}>
            <div className="bg-slate-800/60 backdrop-blur-md rounded-xl p-8 border border-slate-600/50 shadow-2xl">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-white placeholder-slate-400 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-white backdrop-blur-sm"
                  >
                    <option value="" className="bg-slate-700">Select a subject</option>
                    <option value="general" className="bg-slate-700">General Inquiry</option>
                    <option value="academic" className="bg-slate-700">Academic Support</option>
                    <option value="events" className="bg-slate-700">Events & Activities</option>
                    <option value="projects" className="bg-slate-700">Project Collaboration</option>
                    <option value="other" className="bg-slate-700">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-slate-700/60 border border-slate-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 resize-none text-white placeholder-slate-400 backdrop-blur-sm"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Send Message</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center bg-slate-800/60 backdrop-blur-md rounded-xl p-12 border border-slate-600/50 opacity-0 animate-fade-in-up" style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}>
          <div className="text-4xl mb-6">🎓</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">More Ways to Connect</h2>
          <p className="text-lg mb-8 text-slate-300 max-w-2xl mx-auto">
            Join our study groups, participate in events, or connect with us on campus at the Computer Science Department, University of Dhaka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/events"
              className="bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View Our Events
            </a>
            <a 
              href="/semesters"
              className="border-2 border-green-500/50 text-green-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-green-500/20 hover:border-green-400 transition-all duration-300 shadow-lg transform hover:-translate-y-1 backdrop-blur-sm"
            >
              Study Materials
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
