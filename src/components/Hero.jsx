import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Sparkles,
  GraduationCap,
  Award,
  Terminal,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import profilePic from '../assets/medha-profile.jpg';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResumeModal, onScrollToProjects, onScrollToContact }) {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % personalData.subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Decorative Light Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800/60 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-semibold text-indigo-900 dark:text-indigo-200 tracking-wide uppercase">
              {personalData.availability}
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm <br />
              <span className="gradient-text">{personalData.name}</span>
            </h1>

            {/* Dynamic Typing Subtitle */}
            <div className="h-10 flex items-center pt-1">
              <div className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-slate-700 dark:text-slate-300">
                <Terminal className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span className="transition-all duration-500 text-indigo-600 dark:text-indigo-400 font-mono">
                  {personalData.subtitles[subtitleIndex]}
                </span>
              </div>
            </div>
          </div>

          {/* Short Bio */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            {personalData.bio}
          </p>

          {/* Quick Academic Highlight Badge */}
          <div className="flex flex-wrap gap-3 pt-1">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300">
              <GraduationCap className="w-4 h-4 text-indigo-500" />
              <span>Vignan University (3rd Year)</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/50 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Award className="w-4 h-4 text-amber-500" />
              <span>8.93 CGPA</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300">
              <Code2 className="w-4 h-4 text-purple-500" />
              <span>Full-Stack Web Engineering</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
            <button
              onClick={onScrollToProjects}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer text-sm"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResumeModal}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-white bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-lg transition-all cursor-pointer text-sm"
            >
              <Download className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={onScrollToContact}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 bg-slate-100/80 dark:bg-slate-800/50 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <span className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
              Connect:
            </span>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:scale-110"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:scale-110"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email Direct"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Right Column: Premium Visual Avatar Card */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            
            {/* Glowing Backdrop Circle */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 dark:opacity-40 animate-pulse-glow" />

            {/* Main Card Wrapper */}
            <div className="relative glass-card p-6 sm:p-8 rounded-3xl border border-white/50 dark:border-slate-700/50 shadow-2xl flex flex-col items-center text-center space-y-6">
              
              {/* Full Profile Photo Container */}
              <div className="relative group w-full max-w-xs">
                <div className="w-full h-72 sm:h-80 rounded-2xl p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-xl overflow-hidden">
                  <img
                    src={profilePic}
                    alt={personalData.name}
                    className="w-full h-full rounded-xl object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Tech Stack Badges */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 text-indigo-600 dark:text-indigo-400 text-xs font-bold shadow-lg backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-1 animate-float">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>React.js</span>
                </div>
                
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-white/90 dark:bg-slate-800/90 text-emerald-600 dark:text-emerald-400 text-xs font-bold shadow-lg backdrop-blur-md border border-slate-200/60 dark:border-slate-700/60 flex items-center gap-1 animate-float" style={{ animationDelay: '1.5s' }}>
                  <Code2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>C & Python Dev</span>
                </div>
              </div>

              {/* Developer Details inside card */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {personalData.name}
                </h3>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Computer Science Student (3rd Year) @ Vignan Univ
                </p>
              </div>

              {/* Quick Stat Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 w-full pt-2">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 flex flex-col items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Current CGPA</span>
                  <span className="text-lg font-extrabold text-indigo-600 dark:text-indigo-400">8.93 / 10</span>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200/80 dark:border-slate-700/60 flex flex-col items-center">
                  <span className="text-xs text-slate-500 dark:text-slate-400">Intermediate</span>
                  <span className="text-lg font-extrabold text-purple-600 dark:text-purple-400">98.2%</span>
                </div>
              </div>

              {/* Verified Checklist */}
              <div className="w-full space-y-2 text-left pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Full-Stack Web Engineering (React, Node, Express, MongoDB)</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Data Structures, OOP & Algorithmic Problem Solving</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Relational & NoSQL Database Architecture</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
