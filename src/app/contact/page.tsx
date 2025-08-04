import Image from 'next/image'

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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions or want to connect with the Lubdhok-29 batch? 
            We&apos;d love to hear from you!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-200"
            >
              <div className="text-4xl mb-6">{method.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{method.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
              <div className="mb-6">
                <p className="text-blue-600 font-medium text-sm break-all">{method.contact}</p>
              </div>
              <a 
                href={`mailto:${method.contact}`}
                className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 inline-block"
              >
                Send Email
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Send us a Message
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a specific question? Fill out the form below and we&apos;ll get back to you.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="academic">Academic Support</option>
                    <option value="events">Events & Activities</option>
                    <option value="projects">Project Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

 
      </div>
    </div>
  )
}
