import React, { useRef } from 'react';
import { X, Download, Printer, CheckCircle2, Mail, Phone, MapPin, GraduationCap, Code2, Award, Briefcase, Sparkles } from 'lucide-react';
import { personalData, skillsData, educationData, projectsData, experienceAchievementsData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function ResumeModal({ isOpen, onClose }) {
  const resumePrintRef = useRef(null);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  const handleDownloadPDF = () => {
    triggerConfetti();
    // Trigger standard browser print window formatted as PDF export
    const printContent = resumePrintRef.current;
    if (!printContent) return;

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${personalData.name} - Resume</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1e293b; padding: 40px; margin: 0; line-height: 1.5; }
            h1 { font-size: 26px; color: #0f172a; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
            .subtitle { font-size: 14px; color: #475569; font-weight: 600; margin-bottom: 16px; }
            .contact-info { font-size: 12px; color: #64748b; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 2px solid #e2e8f0; display: flex; gap: 16px; }
            .section-title { font-size: 14px; font-weight: 800; color: #4f46e5; text-transform: uppercase; letter-spacing: 1px; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; }
            .item-title { font-weight: 700; font-size: 13px; color: #0f172a; }
            .item-sub { font-size: 12px; color: #64748b; font-style: italic; }
            .item-desc { font-size: 12px; color: #334155; margin-top: 4px; }
            ul { margin: 4px 0 12px 18px; padding: 0; font-size: 12px; }
            li { margin-bottom: 3px; }
            .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 12px; }
            .badge { background: #f1f5f9; padding: 2px 6px; border-radius: 4px; font-size: 11px; font-weight: 600; display: inline-block; margin-right: 4px; }
            @media print {
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-4xl glass-card rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 sm:px-8 bg-slate-100 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
              Official Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/25 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 space-y-6" ref={resumePrintRef}>
          
          {/* Header */}
          <div className="border-b-2 border-indigo-500/30 pb-6 space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight uppercase text-slate-900 dark:text-white">
              {personalData.name}
            </h1>
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
              {personalData.title}
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-600 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-indigo-500" />
                {personalData.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-indigo-500" />
                {personalData.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                {personalData.location}
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div className="space-y-2">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Career Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              B.Tech third-year Computer Science and Engineering student seeking internship or training opportunities to develop strong technical, full-stack software development, and professional skills.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white">{edu.degree}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{edu.institution} | {edu.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{edu.score}</span>
                    <p className="text-xs text-slate-500">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsData.map((cat, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <span className="font-bold text-slate-900 dark:text-white block mb-1">{cat.category}</span>
                  <p className="text-slate-600 dark:text-slate-300">
                    {cat.skills.map(s => s.name).join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Key Projects
            </h2>
            <div className="space-y-3">
              {projectsData.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                    <span>{proj.title} ({proj.technologies.join(', ')})</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Extracurricular */}
          <div className="space-y-3">
            <h2 className="text-sm font-extrabold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 border-b border-slate-200 dark:border-slate-800 pb-1">
              Extracurricular & Achievements
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-slate-700 dark:text-slate-300">
              {experienceAchievementsData.map((item, idx) => (
                <li key={idx}>
                  <strong className="text-slate-900 dark:text-white">{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
