import React from "react";
import {
  FaTelegram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiDevdotto } from "react-icons/si";

export default function Header() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <RxLinkedinLogo className="w-6 h-6" aria-hidden="true" />,
      link: "https://www.linkedin.com/in/hasindu-nagolla/",
    },
    {
      name: "GitHub",
      icon: <RxGithubLogo className="w-6 h-6" aria-hidden="true" />,
      link: "https://github.com/lakzexe",
    },
    {
      name: "X",
      icon: <FaSquareXTwitter className="w-6 h-6" aria-hidden="true" />,
      link: "https://x.com/hasindunagolla",
    },
    {
      name: "Dev.to",
      icon: <SiDevdotto className="w-6 h-6" aria-hidden="true" />,
      link: "https://dev.to/hasindu-nagolla",
    },
    {
      name: "Telegram",
      icon: <FaTelegram className="w-6 h-6" aria-hidden="true" />,
      link: "https://t.me/Hasindu_Lakshan",
    },
  ];

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-white">
      {/* Subtle grid behind the hero */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      ></div>

      {/* Decorative shape */}
      <div className="absolute w-[800px] h-[800px] bg-brand-primary/5 rounded-full -z-10 top-1/2 -translate-y-1/2 -right-[200px]"></div>

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-end mb-0">
          {/* Intro and calls to action */}
          <div className="lg:col-span-7 flex flex-col items-start animate-on-scroll is-visible pb-24 lg:pb-32 pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F5FF] mb-8">
              <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
              <span className="text-xs font-bold text-brand-primary tracking-wide">
                Intern Software Engineer
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-brand-dark mb-4 flex items-center gap-2">
              Hi! I'm Hasindu. <span className="text-3xl">👋</span>
            </h3>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight text-brand-dark leading-[1.15] mb-6">
              Building Intelligent <br className="hidden sm:block" />
              Solutions with <span className="text-brand-primary">Code.</span>
            </h1>

            <p className="max-w-lg text-lg text-gray-500 leading-relaxed mb-10 font-medium">
              I build modern web applications and AI-powered solutions that
              solve real-world problems. Passionate about clean code, scalable
              systems, and continuous learning.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#work"
                className="px-7 py-3.5 rounded-xl bg-brand-dark text-white font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg"
              >
                View My Work
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
              </a>

              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl border border-gray-200 text-brand-dark font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm bg-white"
              >
                Contact Me
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>

            <div className="flex items-center gap-5">
              <span className="text-sm font-semibold text-gray-600">
                Connect with me
              </span>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="w-12 h-12 rounded-full border border-gray-100 shadow-sm flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-brand-primary transition-all bg-white"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile image and highlight */}
          <div
            className="lg:col-span-5 relative flex justify-center items-end lg:justify-end animate-on-scroll is-visible h-full lg:h-[650px] z-0"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative z-10 h-full flex items-end">
              <img
                src="/assets/profile-img.webp"
                alt="Hasindu Nagolla"
                className="w-auto h-[450px] sm:h-[550px] lg:h-full object-cover object-bottom"
              />

              {/* Small profile highlight */}
              <div
                className="absolute bottom-24 -right-4 sm:-right-8 lg:-right-12 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-gray-100/50 flex items-center gap-4 animate-bounce z-30"
                style={{ animationDuration: "4s" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F0F5FF] flex items-center justify-center text-brand-primary">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 7V6a3 3 0 013-3h0a3 3 0 013 3v1m-9 0h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-dark uppercase tracking-wider mb-0.5">
                    Intern SWE
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    HadesReality, Colombo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick stats */}
        <div
          className="bg-brand-dark rounded-[2rem] p-8 sm:p-10 shadow-2xl relative z-20 -mt-12 lg:-mt-20 mx-4 lg:mx-0 animate-on-scroll is-visible"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-700/50">
            <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  10+
                </h4>
                <p className="text-xs text-gray-400 font-medium">
                  Projects Completed
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  3+
                </h4>
                <p className="text-xs text-gray-400 font-medium">
                  Years of Learning
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  10+
                </h4>
                <p className="text-xs text-gray-400 font-medium">
                  Technologies
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 md:px-8 justify-start md:justify-center pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#4B83F3]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  100%
                </h4>
                <p className="text-xs text-gray-400 font-medium">Dedication</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
