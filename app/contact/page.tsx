import Header from '../components/Header'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Little Sprouts Academy',
  description: 'Get in touch with Little Sprouts Academy. Schedule a tour, ask about enrollment, or learn more about our programs.',
  keywords: ['Contact Little Sprouts', 'Preschool Enrollment', 'Schedule a Tour', 'Preschool Information'],
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-primary-800 mb-4">Contact Us</h1>
            <p className="text-base md:text-lg text-gray-600">
              Have questions about Little Sprouts Academy? We&#39;d love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl shadow-lg shadow-primary-100/30 p-8 border-2 border-primary-100">
              <h2 className="text-2xl font-semibold font-display text-primary-800 mb-6">Get in Touch</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@littlesprouts.example.com</p>
                    <p className="text-gray-600">enrollment@littlesprouts.example.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 234-5678</p>
                    <p className="text-sm text-gray-500">Monday to Friday, 7 AM - 6 PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent-100 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Location</h3>
                    <p className="text-gray-600">
                      456 Sunshine Lane<br />
                      Meadowbrook, CA 94025
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">School Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:00 AM - 6:00 PM<br />
                      Half Day: 7:00 AM - 12:30 PM<br />
                      Saturday & Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-lg shadow-primary-100/30 p-8 border-2 border-primary-100">
              <h2 className="text-2xl font-semibold font-display text-primary-800 mb-6">Send us a Message</h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-primary-100 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-primary-400 transition-colors"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-3 px-4 rounded-full hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 transition-all duration-200 font-bold shadow-lg shadow-primary-200 hover:-translate-y-0.5"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8 md:mt-12 bg-accent-100 rounded-3xl p-6 md:p-8 border-2 border-accent-200">
            <div className="text-center">
              <h2 className="text-xl md:text-2xl font-bold font-display text-primary-800 mb-4">Ready to Schedule a Tour?</h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Come see our classrooms, meet our teachers, and learn about our play-based curriculum in person.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/programs"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-700 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-200 font-bold"
                >
                  View Programs
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent-400 text-primary-900 rounded-full hover:bg-accent-300 transition-all duration-200 font-bold shadow-md"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
