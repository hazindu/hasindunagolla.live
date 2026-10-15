import React from "react";
import { Link } from "react-router-dom";

export default function Work({ hideHeading = false }) {
  const work = [
    {
      name: "Telegram Bot & Website",
      icon: (
        <svg
          className="w-8 h-8 text-brand-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM9 14h6m-3-9v2M7.5 7.5A4.5 4.5 0 003 12v3a4.5 4.5 0 004.5 4.5h9A4.5 4.5 0 0021 15v-3a4.5 4.5 0 00-4.5-4.5h-9z"
          />
        </svg>
      ),
      category: "Bot / Automation",
      description:
        "Telegram music bot with advanced playback, queues, and web control panel.",
      tech: [
        "Python",
        "Pyrogram",
        "MongoDB",
        "yt-dlp",
        "FFmpeg",
        "Linux",
        "Docker",
        "Cloud Environments",
      ],
      link: "https://hasiimusic.hasindunagolla.live/",
    },

    {
      name: "MindBou",
      icon: (
        <svg
          className="w-8 h-8 text-brand-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      category: "Web Application",
      description:
        "A blogging and publishing platform built for writing, sharing, and reading without unnecessary distractions.",
      tech: [
        "TypeScript",
        "React.js",
        "Tailwind CSS",
        "Express.js",
        "Node.js",
        "MongoDB",
        "Vercel",
        "Render",
      ],
      link: "https://mind-bou-alpha.vercel.app/",
    },

    {
      name: "DeepSeek RAG System",
      icon: (
        <svg
          className="w-8 h-8 text-brand-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM9 14h6m-3-9v2M7.5 7.5A4.5 4.5 0 003 12v3a4.5 4.5 0 004.5 4.5h9A4.5 4.5 0 0021 15v-3a4.5 4.5 0 00-4.5-4.5h-9z"
          />
        </svg>
      ),
      category: "AI / ML",
      description:
        "A document-based RAG system using DeepSeek to answer questions from PDF documents.",
      tech: ["Python", "Google Colab", "PyTorch"],
      link: "https://github.com/hazindu/pdf-rag-deepseek",
    },
    {
      name: "Sinhala Scam Detection Model",
      icon: (
        <svg
          className="w-8 h-8 text-brand-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      category: "AI / ML",
      description:
        "Real-time NLP based scam detection model for low context languages using Python.",
      tech: ["Python", "Google Colab"],
      link: "https://github.com/hazindu/sinhala-spam-detection-model",
    },

    {
      name: "Python Library Management System",
      icon: (
        <svg
          className="w-8 h-8 text-brand-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      category: "CLI Application",
      description:
        "Command-line based library management system with file persistence.",
      tech: ["Python"],
      link: "https://github.com/hazindu/Python-Library-Management-System",
    },
    {
      name: "MediMate",
      icon: (
        <svg
          className="w-8 h-8 text-brand-dark"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      ),
      category: "Web Application",
      description:
        "web application designed to revolutionize the way you schedule medical appointments.",
      tech: [
        "JavaScript",
        "EJS",
        "Boostrap",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      link: "https://github.com/MediMateBooking",
    },
  ];

  return (
    <section
      id="work"
      className={`${hideHeading ? "" : "py-20 px-6 bg-white"}`}
    >
      <div className="max-w-7xl mx-auto z-10 relative">
        {!hideHeading && (
          <div className="flex flex-col mb-12 animate-on-scroll is-visible">
            <p className="text-brand-primary font-bold text-sm tracking-wider uppercase mb-2">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
              Featured Projects
            </h2>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {work.map((project, index) => (
            <a
              key={project.name}
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noreferrer" : undefined}
              onClick={(event) => {
                if (!project.link) event.preventDefault();
              }}
              className="group flex flex-col sm:flex-row items-start sm:items-center p-6 bg-white border border-gray-100 rounded-[1.5rem] hover:shadow-xl hover:border-gray-200 transition-all duration-300 animate-on-scroll is-visible"
              style={{ animationDelay: `${(index % 2) * 0.1}s` }}
            >
              <div className="w-24 h-24 bg-gray-50 flex items-center justify-center rounded-[1.25rem] shrink-0 mb-6 sm:mb-0">
                {project.icon}
              </div>

              <div className="sm:ml-8 flex-1 pr-4">
                <h3 className="text-brand-dark text-lg font-extrabold leading-tight mb-1.5">
                  {project.name}
                </h3>
                <p className="text-brand-primary font-bold text-[11px] uppercase tracking-wider mb-2.5">
                  {project.category}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed mb-4 text-justify">
                  {project.description}
                </p>

                <div className="flex items-center gap-5 flex-wrap">
                  {project.tech.map((t) => (
                    <div
                      key={t}
                      className="flex items-center gap-1.5 text-xs font-semibold text-gray-600"
                    >
                      <svg
                        className="w-3.5 h-3.5 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                      </svg>
                      {t}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden sm:flex w-12 h-12 rounded-full border border-gray-100 items-center justify-center text-brand-dark group-hover:border-brand-primary group-hover:text-brand-primary group-hover:bg-brand-primary/5 transition-all shrink-0">
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {!hideHeading && (
          <div className="flex justify-center animate-on-scroll is-visible mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors"
            >
              View all projects
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
