import React from 'react';
import {
  FileText,
  Download,
  Eye,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Code2,
  Award,
  Sparkles
} from 'lucide-react';
import { personalData, skillsData, educationData } from '../data/portfolioData';

export default function Resume({ onOpenResumeModal }) {
  return (
    <section id="resume" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <FileText className="w-3.5 h-3.5" />
            <span>CURRICULUM VITAE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Professional <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified academic summary, technical qualifications, and software project portfolio.
          </p>
        </div>

        {/* Main Card Wrapper */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200/80 dark:border-slate-800 pb-8">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                Official Curriculum Vitae
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                {personalData.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {personalData.title} • {personalData.location}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-sm"
              >
                <Eye className="w-4 h-4" />
                <span>View Interactive Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer text-sm"
              >
                <Download className="w-4 h-4 text-indigo-500" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>

          {/* Quick Resume Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <GraduationCap className="w-6 h-6 text-indigo-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Education</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                B.Tech CSE (3rd Year) @ Vignan University (8.93 CGPA)
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <Code2 className="w-6 h-6 text-purple-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Technical Core</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                C, Python, Data Structures, React, Node.js, MySQL & MongoDB
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <Briefcase className="w-6 h-6 text-pink-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Projects Showcase</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Full-Stack Web & Smart Monitoring Systems
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2">
              <Award className="w-6 h-6 text-amber-500" />
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Merit Honors</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                98.2% Intermediate & 95% SSC Board Examinations
              </p>
            </div>

          </div>

          <div className="pt-4 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Need a custom formatted PDF copy for an internship portal or faculty evaluation? Click <button onClick={onOpenResumeModal} className="text-indigo-600 dark:text-indigo-400 font-bold underline cursor-pointer">here</button> to generate and download.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
