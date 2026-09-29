import React from 'react';
import {
  User,
  GraduationCap,
  Target,
  Award,
  CheckCircle,
  BookOpen,
  MapPin
} from 'lucide-react';
import profilePic from '../assets/medha-profile.jpg';
import { personalData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <User className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About <span className="gradient-text">{personalData.name}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            3rd-year Computer Science student committed to continuous learning, software quality, and impactful technology solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Profile Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-4 border-b border-slate-200/60 dark:border-slate-800 pb-6">
                <img
                  src={profilePic}
                  alt={personalData.name}
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-indigo-500 shadow-lg shrink-0"
                />
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {personalData.name}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {personalData.location}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {personalData.aboutExtended}
                </p>

                {/* Quick Info Items */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Institution:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">Vignan University</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Degree & Year:</span>
                    <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-right">B.Tech CSE (3rd Year)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Graduation Year:</span>
                    <span className="font-semibold text-slate-800 dark:text-slate-200 text-right">2028 (Expected)</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">B.Tech CGPA:</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400 text-right">8.93 / 10</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Languages:</span>
                    <span className="font-medium text-slate-700 dark:text-slate-300 text-right">English, Telugu, Hindi</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Detailed Career, Technical & Academic Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Key Focus & Interests Card */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center gap-3 border-b border-slate-200/60 dark:border-slate-800 pb-4">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Career Objective & Technical Focus
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                As a 3rd-year B.Tech Computer Science student, my goal is to build real-world software solutions that combine high performance with intuitive user interfaces. I am actively seeking software engineering and full-stack web developer internship opportunities where I can apply my problem-solving skills in C, Python, JavaScript, and modern database management systems.
              </p>

              {/* Career Interest Badges */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Core Technical Interests:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalData.careerInterests.map((interest, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>{interest}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Academic Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">8.93</h4>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">B.Tech CGPA</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Vignan University</p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">98.2%</h4>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">Intermediate Score</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">MPC Stream Distinction</p>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-md text-center space-y-2">
                <div className="w-10 h-10 mx-auto rounded-xl bg-pink-50 dark:bg-pink-950/60 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h4 className="text-2xl font-extrabold text-pink-600 dark:text-pink-400">95.0%</h4>
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">SSC Board Score</p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400">Top School Ranker</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
