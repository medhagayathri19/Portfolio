import React from 'react';
import {
  Trophy,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { experienceAchievementsData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <Trophy className="w-3.5 h-3.5" />
            <span>MILESTONES & ACHIEVEMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Experience & <span className="gradient-text">Accomplishments</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Workshops, hackathons, academic merit honors, and leadership activities undertaken during my degree program.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-900/60 ml-4 sm:ml-8 md:ml-12 space-y-8">
          {experienceAchievementsData.map((item, idx) => (
            <div key={idx} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Icon Node */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Award className="w-4 h-4" />
              </div>

              {/* Achievement Card */}
              <div className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-lg space-y-4 group-hover:border-indigo-400 transition-all">
                
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {item.organization}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-medium border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[11px] font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
