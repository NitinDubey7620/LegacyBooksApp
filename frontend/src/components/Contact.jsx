import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { MessageCircle, Headset, Phone, Mail, MapPin, Send } from "lucide-react";
function Contact() {
  return (
    <>
    <div>
        <Navbar></Navbar>
        <div
        className="min-h-screen 
        bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100 
        dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-950 dark:to-slate-900
        mt-20 w-full bg-cover bg-center
        bg-[url('/heroimage-white.jpg')]
        dark:bg-[url('/heroimage-dark.jpg')]"
      >
        {/* HEADER SECTION */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 rounded-2xl shadow-lg">
                <MessageCircle className="w-12 h-12 text-white" strokeWidth={2} />
              </div>
            </div>

            <h1 className="text-5xl font-bold text-gray-900 mb-4 dark:text-white">
              Contact Us
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300">
              We’re here to help. Reach out anytime!
            </p>
          </div>

          {/* CONTENT CARD */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl p-8 md:p-12 mb-12">

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Headset className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                Get in Touch
              </h2>

              <div className="grid md:grid-cols-2 gap-8">

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">support@legacybooks.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Send className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                Send a Message
              </h2>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 
                    bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white 
                    focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 
                    bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white 
                    focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="mail@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 mb-1 font-medium">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    className="w-full p-4 rounded-xl border border-gray-300 dark:border-slate-700 
                    bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-white 
                    focus:ring-2 focus:ring-blue-500 outline-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 
                  text-white py-3 rounded-xl text-lg font-semibold transition-all shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Footnote */}
          <div className="text-center text-gray-600 dark:text-gray-400">
            We typically reply within 24 hours ✨
          </div>
        </div>
      </div>
      <Footer></Footer>
        </div>
        </>
  );
}

export default Contact;