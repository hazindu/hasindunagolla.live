import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section id="about" className="pt-20 pb-10 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Intro and contact details */}
          <div className="lg:col-span-5 flex flex-col animate-on-scroll is-visible">
            <p className="text-brand-primary font-bold text-sm tracking-wider uppercase mb-2">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-dark mb-6">
              Introduction
            </h2>

            <p className="text-gray-600 leading-relaxed mb-8 text-justify">
              I am an Intern Software Engineer passionate about building
              scalable, intelligent, and user-focused applications. I have
              hands-on experience in Full-Stack Development, Data Analytics,
              and Cloud deployments, with a strong focus on problem-solving
              and software quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-10">
              <div className="flex gap-3">
                <div className="mt-1 text-brand-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-dark mb-0.5">
                    Location
                  </h4>
                  <p className="text-sm text-gray-500">Matale, Sri Lanka</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 text-brand-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-dark mb-0.5">
                    Email
                  </h4>
                  <p className="text-sm text-gray-500 break-all">
                    hasindu.connect@proton.me
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 text-brand-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-dark mb-0.5">
                    Degree
                  </h4>
                  <p className="text-sm text-gray-500">
                    Software Engineering (Hons)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="mt-1 text-brand-primary">
                  <svg
                    className="w-5 h-5"
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
                  <h4 className="text-sm font-semibold text-brand-dark mb-0.5">
                    Work
                  </h4>
                  <p className="text-sm text-gray-500">Intern SWE at HadesReality</p>
                </div>
              </div>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex px-7 py-3 rounded-xl bg-brand-dark text-white font-semibold items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
              >
                More About Me
                <span className="text-xl leading-none">&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Main areas of work */}
          <div
            className="lg:col-span-7 animate-on-scroll is-visible"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:p-10 h-full">
              <h3 className="text-xl font-bold text-brand-dark mb-8">
                What I Do
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary">
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
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-brand-dark mb-1">
                      Web Development
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Building responsive web applications that are easy to use.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary">
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-brand-dark mb-1">
                      AI & Machine Learning
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Experimenting with models, data, and useful automation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary">
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
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-brand-dark mb-1">
                      Backend Development
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Designing APIs and backend services that are dependable.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary">
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
                    <h4 className="text-base font-semibold text-brand-dark mb-1">
                      Problem Solving
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Breaking down difficult problems and turning them into
                      working code.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
