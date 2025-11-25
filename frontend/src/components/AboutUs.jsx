import { BookOpen, Users, Target, Heart, Sparkles, GraduationCap } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
export default function AboutUs() {
  return (
    <>
    <div>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 mt-20
        w-full bg-cover bg-center
        bg-[url('/heroimage-white.jpg')]
        dark:bg-[url('/heroimage-dark.jpg')]
      ">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-br from-orange-500 to-amber-600 p-4 rounded-2xl shadow-lg">
              <BookOpen className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900  dark:text-white mb-10">About LegacyBooks</h1>
          <p className="text-xl mt-5 text-black dark:text-white">Making learning accessible to everyone, one page at a time</p>
        </div>

        <div className="bg-blue-900 rounded-3xl shadow-xl p-8 md:p-12 mb-12 mt-5 dark:bg-gray-950 ">
          <div className="prose prose-lg max-w-none">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl font-bold  text-white dark:text-white">Our Story</h2>
              </div>
              <p className=" text-lime-500 leading-relaxed dark:text-white">
                LegacyBooks was built with a simple but powerful goal: to make learning accessible to everyone.
                We believe that knowledge should be free-flowing, easy to understand, and available to learners
                at every stage of their journey.
              </p>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl font-bold text-white  dark:text-white">What We Offer</h2>
              </div>
              <p className=" text-lime-500 leading-relaxed mb-6  dark:text-white">
                Our platform provides a curated collection of books, courses, and educational resources designed
                for modern learners. Whether you're just starting out or looking to deepen your expertise,
                LegacyBooks offers:
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-start gap-3  dark:text-white">
                  <span className="font-bold mt-1 text-orange-500  dark:text-white">•</span>
                  <span>Free and paid books covering a wide range of topics</span>
                </li>
                <li className="flex items-start gap-3  dark:text-white">
                  <span className="text-orange-500 font-bold mt-1  dark:text-white">•</span>
                  <span>Simple explanations that break down complex concepts</span>
                </li>
                <li className="flex items-start gap-3  dark:text-white">
                  <span className="text-orange-500 font-bold mt-1  dark:text-white">•</span>
                  <span>Helpful guides and tutorials for practical learning</span>
                </li>
                <li className="flex items-start gap-3  dark:text-white">
                  <span className="text-orange-500 font-bold mt-1  dark:text-white">•</span>
                  <span>Beginner-friendly learning paths to help you grow step by step</span>
                </li>
              </ul>
            </div>

            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-orange-500" />
                <h2 className="text-3xl font-bold text-white m-0  dark:text-white">Who Built This</h2>
              </div>
              <p className="text-lime-500 leading-relaxed  dark:text-white">
                LegacyBooks started as a personal initiative by a computer science student who wanted to create
                a space where learners could grow at their own pace. What began as a small project has evolved
                into a fully-featured platform with an engaging homepage, animated quotes for inspiration,
                an intuitive book display system, secure user authentication, and a comprehensive admin dashboard
                to manage books and users efficiently.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-orange-600" />
                <h2 className="text-3xl font-bold text-gray-900 m-0">Our Mission</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-lg m-0">
                We're here to help people <span className="font-semibold text-orange-600 ">read more</span>,
                <span className="font-semibold text-orange-600"> learn more</span>, and
                <span className="font-semibold text-orange-600"> improve themselves</span> through consistent,
                accessible learning. Whether you have five minutes or five hours, LegacyBooks is your companion
                on the journey to becoming the best version of yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
            <span className="text-lg">Built with passion for Readers</span>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
    </>
  );
}
