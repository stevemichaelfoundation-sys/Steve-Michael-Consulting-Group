import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left Card: Reach Out to Us Form */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
          {/* Top Corner Green Accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#15803d] rounded-bl-full" />
          
          <div>
            <h2 className="text-2xl font-bold text-[#15803d] mb-8">Reach Out to Us</h2>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:border-transparent transition-all"
                  />
                </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="Enter your phone number" 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="What is this regarding?" 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="Write your message here..." 
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#15803d] focus:border-transparent transition-all resize-none"
                />
              </div>
            </form>
          </div>

          <button className="w-full mt-6 bg-[#15803d] hover:bg-[#166534] text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
            Send Message
            <svg xmlns="http://w3.org" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-184,64a16,16,0,0,0-1.54,29.36l71.43,35.72,35.72,71.43A15.82,15.82,0,0,0,147.11,232c.11,0,.22,0,.33,0a16,16,0,0,0,13.39-10.45l64-184A16,16,0,0,0,227.32,28.68ZM147.16,215.34l-31.59-63.17L164,103.62a8,8,0,0,0-11.31-11.31l-48.55,48.55L41,109.26,213,49.26Z" />
            </svg>
          </button>
        </div>

        {/* Right Card: Contact Information */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
          {/* Top Corner Green Accent */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-[#15803d] rounded-bl-full" />
          
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-slate-800">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Phone block */}
              <div className="flex gap-4 items-start">
                <div className="text-[#15803d] mt-1">
                  <svg xmlns="http://w3.org" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M222.37,175.76c-.52-.71-11.53-15.84-29-23.22a16,16,0,0,0-18.17,4l-15.22,15.22c-20.91-10.51-37.45-27.05-48-48l15.22-15.22a16,16,0,0,0,4-18.17c-7.38-17.51-22.51-28.52-23.22-29A16,16,0,0,0,87,57l-15.15,15A48.05,48.05,0,0,0,116,164.12,48.05,48.05,0,0,0,208,184.2l15-15.15A16,16,0,0,0,222.37,175.76Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#15803d]">Phone</h4>
                  <p className="text-slate-600 text-sm mt-0.5">+250788977568</p>
                </div>
              </div>

              {/* Email 1 Block */}
              <div className="flex gap-4 items-start">
                <div className="text-[#15803d] mt-1">
                  <svg xmlns="http://w3.org" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16v26.83L135.88,141.4a12,12,0,0,1-15.76,0L32,90.83V64ZM32,108.64l68,39A28,28,0,0,0,156,147.65l68-39V192H32Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#15803d]">General Support Email</h4>
                  <a 
                    href="mailto:info@hezain.org" 
                    className="text-slate-600 text-sm mt-0.5 block hover:underline hover:text-[#15803d] transition-colors"
                  >
                    info@hezain.org
                  </a>
                </div>
              </div>

              {/* Email 2 Block */}
              <div className="flex gap-4 items-start">
                <div className="text-[#15803d] mt-1">
                  <svg xmlns="http://w3.org" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16v26.83L135.88,141.4a12,12,0,0,1-15.76,0L32,90.83V64ZM32,108.64l68,39A28,28,0,0,0,156,147.65l68-39V192H32Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#15803d]">Partnerships & Projects Email</h4>
                  <a 
                    href="mailto:partnerships@hezain.org" 
                    className="text-slate-600 text-sm mt-0.5 block hover:underline hover:text-[#15803d] transition-colors"
                  >
                    partnerships@hezain.org
                  </a>
                </div>
              </div>

              {/* LinkedIn Profile 1 */}
              <div className="flex gap-4 items-start">
                <div className="text-[#15803d] mt-1">
                  <svg xmlns="http://w3.org" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v80a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0V112ZM88,80a12,12,0,1,1,12-12A12,12,0,0,1,88,80Zm96,64v32a8,8,0,0,1-16,0V144a24,24,0,0,0-48,0v32a8,8,0,0,1-16,0V112a8,8,0,0,1,13.6-5.66A39.81,39.81,0,0,1,148,104,40,40,0,0,1,184,144Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#15803d]">Corporate LinkedIn</h4>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-600 text-sm mt-0.5 block hover:underline hover:text-[#15803d] transition-colors"
                  >
                    ://linkedin.com
                  </a>
                </div>
              </div>

              {/* LinkedIn Profile 2 */}
              <div className="flex gap-4 items-start">
                <div className="text-[#15803d] mt-1">
                  <svg xmlns="http://w3.org" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v80a8,8,0,0,1-16,0V112             a8,8,0,0,1,16,0V112ZM88,80a12,12,0,1,1,12-12A12,12,0,0,1,88,80Zm96,64v32a8,8,0,0,1-16,0V144a24,24,0,0,0-48,0v32a8,8,0,0,1-16,0V112a8,8,0,0,1,13.6-5.66A39.81,39.81,0,0,1,148,104,40,40,0,0,1,184,144Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#15803d]">Executive Director LinkedIn</h4>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-600 text-sm mt-0.5 block hover:underline hover:text-[#15803d] transition-colors"
                  >
                    ://linkedin.com
                  </a>
                </div>
              </div>

              {/* Address Block */}
              {/* Address Block */}
              <div className="flex gap-4 items-start">
                <div className="text-[#15803d] mt-1">
                  <svg xmlns="http://w3.org" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,16a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a272,272,0,0,0,41.45,38.31,8,8,0,0,0,9.14,0A272,272,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,112a24,24,0,1,1,24-24A24,24,0,0,1,128,128Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#15803d]">Address</h4>
                  <p className="text-slate-600 text-sm mt-0.5">Rulindo, Northern province - Rwanda</p>
                </div>
              </div>

              {/* Office Hours Block */}
              <div className="flex gap-4 items-start">
                <div className="text-[#15803d] mt-1">
                  <svg xmlns="http://w3.org" width="22" height="22" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24a104,104,0,1,0,104,104A104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h40A8,8,0,0,1,192,128Z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#15803d]">Office Hours</h4>
                  <p className="text-slate-600 text-sm mt-0.5">
                    Monday - Friday: 8:00 AM - 6:00 PM <br />
                    Saturday: 9:00 AM - 1:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Socials Divider section at bottom */}
          <div className="border-t border-slate-100 pt-6 mt-8">
            <h4 className="text-sm font-semibold text-slate-700 mb-3">Follow Us :</h4>
            <div className="flex gap-4 text-slate-400">
              <a href="#" className="hover:text-[#15803d] transition-colors">𝕏</a>
              <a href="#" className="hover:text-[#15803d] transition-colors">in</a>
              <a href="#" className="hover:text-[#15803d] transition-colors">📸</a>
              <a href="#" className="hover:text-[#15803d] transition-colors">🎥</a>
              <a href="#" className="hover:text-[#15803d] transition-colors">🎵</a>
            </div>
          </div>
