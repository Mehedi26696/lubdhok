import Image from 'next/image'

export default function ContactPage() {
  const contactMethods = [
    {
      title: 'General Inquiries',
      description: 'For general questions about our batch and activities',
      icon: '📧',
      contact: 'info@lubdhokbatch2024.com',
      action: 'Send Email'
    },
    {
      title: 'Academic Support',
      description: 'Study materials, academic resources, and course-related queries',
      icon: '📚',
      contact: 'academic@lubdhokbatch2024.com',
      action: 'Get Help'
    },
    {
      title: 'Events & Activities',
      description: 'Information about events, workshops, and batch gatherings',
      icon: '🎉',
      contact: 'events@lubdhokbatch2024.com',
      action: 'Learn More'
    },
    {
      title: 'Project Collaboration',
      description: 'Want to collaborate or share your project ideas?',
      icon: '🚀',
      contact: 'projects@lubdhokbatch2024.com',
      action: 'Collaborate'
    }
  ]

  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Batch Representative',
      department: 'Computer Science Engineering',
      email: 'rahul.sharma@example.com',
      phone: '+91 98765 43210',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
      responsibilities: ['Overall coordination', 'External communications', 'Strategic planning']
    },
    {
      name: 'Priya Patel',
      role: 'Academic Coordinator',
      department: 'Electronics Engineering',
      email: 'priya.patel@example.com',
      phone: '+91 87654 32109',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b75b4fc2?w=300&h=300&fit=crop&crop=face',
      responsibilities: ['Study materials management', 'Academic activities', 'Exam coordination']
    },
    {
      name: 'Sneha Gupta',
      role: 'Event Manager',
      department: 'Civil Engineering',
      email: 'sneha.gupta@example.com',
      phone: '+91 76543 21098',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
      responsibilities: ['Event planning', 'Cultural activities', 'Community engagement']
    },
    {
      name: 'Arjun Singh',
      role: 'Technical Lead',
      department: 'Mechanical Engineering',
      email: 'arjun.singh@example.com',
      phone: '+91 65432 10987',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
      responsibilities: ['Technical projects', 'Innovation initiatives', 'Industry partnerships']
    }
  ]

  const campusInfo = {
    address: 'Engineering College Campus\nLubdhok District\nState - 123456\nIndia',
    phone: '+91 11 2345 6789',
    email: 'college@lubdhok.edu.in',
    hours: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 9:00 AM - 2:00 PM\nSunday: Closed'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            We&apos;d love to hear from you! Whether you have questions, suggestions, or want to collaborate with us, 
            don&apos;t hesitate to reach out to the Lubdhok Batch 2024 team.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 text-center shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-6">{method.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{method.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{method.description}</p>
              <div className="mb-6">
                <p className="text-violet-600 font-semibold break-all">{method.contact}</p>
              </div>
              <a 
                href={`mailto:${method.contact}`}
                className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold py-3 px-6 rounded-xl hover:from-violet-600 hover:to-purple-600 transition-all duration-300 shadow-lg transform hover:-translate-y-1 inline-block"
              >
                {method.action}
              </a>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Send us a Message
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a specific question or message? Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-violet-200/50">
              <form className="grid md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all duration-300"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="academic">Academic Support</option>
                    <option value="events">Events & Activities</option>
                    <option value="projects">Project Collaboration</option>
                    <option value="membership">Batch Membership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-violet-100 focus:border-violet-500 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your inquiry or message..."
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch with our core team members for specific queries and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Profile Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-2xl object-cover shadow-lg"
                  />
                </div>

                {/* Member Info */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2">
                    {member.role}
                  </div>
                  <p className="text-violet-600 font-medium text-sm">{member.department}</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm break-all">{member.email}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 mr-3 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-sm">{member.phone}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Responsibilities</h4>
                  <div className="space-y-2">
                    {member.responsibilities.map((responsibility, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <svg className="w-3 h-3 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs">{responsibility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a 
                  href={`mailto:${member.email}`}
                  className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white text-sm font-bold py-2 px-4 rounded-lg hover:from-violet-600 hover:to-purple-600 transition-all duration-300 text-center inline-block"
                >
                  Contact {member.name.split(' ')[0]}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Information */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Campus Information
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us on campus or find us during college hours
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="text-4xl mb-6 text-center">📍</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Campus Address</h3>
              <p className="text-gray-600 text-center leading-relaxed whitespace-pre-line">
                {campusInfo.address}
              </p>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="text-4xl mb-6 text-center">📞</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Contact Details</h3>
              <div className="text-center space-y-3">
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span><br />
                  {campusInfo.phone}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span><br />
                  {campusInfo.email}
                </p>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-violet-200/50 hover:shadow-2xl transition-all duration-500">
              <div className="text-4xl mb-6 text-center">🕒</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Office Hours</h3>
              <p className="text-gray-600 text-center leading-relaxed whitespace-pre-line">
                {campusInfo.hours}
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our batch and activities
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "How can I join the Lubdhok Batch 2024 community?",
                answer: "If you're a current student in our batch, reach out to any of our core team members or attend our regular meetups. We welcome all batch members to participate in our activities and initiatives."
              },
              {
                question: "How can I access study materials?",
                answer: "Visit our Study Materials section on this website. All materials are organized by semester and subject. If you need specific resources that aren't available, contact our Academic Coordinator."
              },
              {
                question: "Can I contribute my own study materials or projects?",
                answer: "Absolutely! We encourage all batch members to contribute. Contact our Academic Coordinator for study materials or our Technical Lead for project collaborations."
              },
              {
                question: "How do I stay updated about events and activities?",
                answer: "Check our Events page regularly, follow our social media channels, or subscribe to our newsletter. You can also join our WhatsApp group for instant updates."
              },
              {
                question: "Are there opportunities for industry collaboration?",
                answer: "Yes! We actively seek partnerships with industry professionals and companies. If you represent a company or know of collaboration opportunities, please contact our Technical Lead."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-violet-200/50 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media & Final CTA */}
        <div className="text-center bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-bold mb-6">Stay Connected!</h2>
          <p className="text-xl mb-8 text-violet-100 max-w-2xl mx-auto">
            Follow us on social media for the latest updates, behind-the-scenes content, and community highlights.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#" className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@lubdhokbatch2024.com"
              className="bg-white text-violet-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-violet-50 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Send Us an Email
            </a>
            <a 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-violet-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
