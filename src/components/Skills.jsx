import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Wrench,
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categoryIcons = {
  "Programming & Core": Code2,
  "Frontend Development": Layout,
  "Backend & APIs": Server,
  "Database Systems": Database,
  "AI & Machine Learning": Brain,
  "Developer Tools": Wrench
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCategories = selectedCategory === "All"
    ? skillsData
    : skillsData.filter(cat => cat.category === selectedCategory);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-sm sm:text-base">
            Categorized technical stack focused on clean code, software engineering principles, and full-stack web architectures.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory("All")}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === "All"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
            }`}
          >
            All Skills
          </button>
          {skillsData.map((cat) => {
            const Icon = categoryIcons[cat.category] || Code2;
            const isSelected = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategory(cat.category)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/25"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((group, idx) => {
            const Icon = categoryIcons[group.category] || Code2;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl flex flex-col justify-between space-y-6 group hover:border-indigo-500/40 transition-all"
              >
                {/* Category Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                        {group.category}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {group.description}
                  </p>
                </div>

                {/* Skills Badges List */}
                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                  {group.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/60 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col space-y-1"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-indigo-500" />
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100/70 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 pl-4 font-mono">
                        {skill.highlight}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
