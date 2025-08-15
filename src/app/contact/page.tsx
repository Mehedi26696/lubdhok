export default function ContactPage() {
  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'For general questions about our batch and activities',
      icon: '📧',
      contact: 'lubdhok29@du.ac.bd'
    },
    {
      title: 'Academic Support',
      description: 'Study materials and course-related queries',
      icon: '📚',
      contact: 'academic.lubdhok29@du.ac.bd'
    },
    {
      title: 'Events & Activities',
      description: 'Information about events and batch gatherings',
      icon: '🎉',
      contact: 'events.lubdhok29@du.ac.bd'
    },
    {
      title: 'Project Collaboration',
      description: 'Share your project ideas and collaborate',
      icon: '🚀',
      contact: 'projects.lubdhok29@du.ac.bd'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-25">
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Have a specific question? Fill out the form below and we&apos;ll get back to you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-slate-700/50">
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
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
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200"
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
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-200 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Contact Info */}
        <div className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-700/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Find Us</h3>
            <div className="space-y-3 text-slate-300">
              <p className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">🏫</span>
                Computer Science & Engineering Department
              </p>
              <p className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">📍</span>
                University of Dhaka, Dhaka-1000, Bangladesh
              </p>
              <p className="flex items-center justify-center">
                <span className="text-cyan-400 mr-2">👥</span>
                Batch: Lubdhok-29 (3rd Year)
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
