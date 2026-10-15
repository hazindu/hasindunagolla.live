import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark py-6 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Copyright and social links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            © {new Date().getFullYear()} Hasindu (Lakshan) Nagolla. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/hasindu-nagolla/"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <RxLinkedinLogo className="w-4 h-4 text-gray-400" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/hazindu"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <RxGithubLogo className="w-4 h-4 text-gray-400" aria-hidden="true" />
            </a>
            <a
              href="mailto:hasindu.connect@proton.me"
              className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg
                className="w-4 h-4"
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
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
