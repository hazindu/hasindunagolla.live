import React from 'react';

export default function Projects() {
    const work = [
        {
            name: 'DeepSeek RAG System',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM9 14h6m-3-9v2M7.5 7.5A4.5 4.5 0 003 12v3a4.5 4.5 0 004.5 4.5h9A4.5 4.5 0 0021 15v-3a4.5 4.5 0 00-4.5-4.5h-9z" />
                </svg>
            ),
            category: 'AI / ML',
            description: 'A document-based RAG system using DeepSeek, BGE embeddings, and FAISS to answer questions from PDF documents.',
            tech: ['Python', 'Jupyter'],
            link: 'https://github.com/hazindu/pdf-rag-deepseek',
        },
        {
            name: 'Sinhala Spam Detection',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            category: 'AI / ML',
            description: 'NLP-based spam detection model for binary text classification on a dataset of 4,000+ samples.',
            tech: ['Python', 'Jupyter'],
            link: 'https://github.com/hazindu/sinhala-spam-detection-model',
        },
        {
            name: 'Telegram Auto Reactor',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM9 14h6m-3-9v2M7.5 7.5A4.5 4.5 0 003 12v3a4.5 4.5 0 004.5 4.5h9A4.5 4.5 0 0021 15v-3a4.5 4.5 0 00-4.5-4.5h-9z" />
                </svg>
            ),
            category: 'Bot / Automation',
            description: 'A lightweight Telegram bot that automatically reacts to every message with random emojis.',
            tech: ['Python'],
            link: 'https://github.com/hazindu/telegram-auto-reactor',
        },
        {
            name: 'HasiiChatBot',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM9 14h6m-3-9v2M7.5 7.5A4.5 4.5 0 003 12v3a4.5 4.5 0 004.5 4.5h9A4.5 4.5 0 0021 15v-3a4.5 4.5 0 00-4.5-4.5h-9z" />
                </svg>
            ),
            category: 'Bot / Automation',
            description: 'A fast, self-learning Telegram chatbot built with Golang and MongoDB that generates natural replies.',
            tech: ['Go', 'MongoDB'],
            link: 'https://github.com/hazindu/HasiiChatBot',
        },
        {
            name: 'Stamps Diary',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            category: 'Web Application',
            description: 'Digital stamp collection and management platform.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://github.com/hazindu/Stamps-Diary',
        },
        {
            name: 'Admin Mention Bot',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zM9 14h6m-3-9v2M7.5 7.5A4.5 4.5 0 003 12v3a4.5 4.5 0 004.5 4.5h9A4.5 4.5 0 0021 15v-3a4.5 4.5 0 00-4.5-4.5h-9z" />
                </svg>
            ),
            category: 'Bot / Automation',
            description: 'A fully configurable Telegram group admin mention bot built in Python to instantly notify admins.',
            tech: ['Python'],
            link: 'https://github.com/hazindu/telegram-admin-mention-bot',
        },
        {
            name: 'E-Commerce System',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
            ),
            category: 'Web Application',
            description: 'A simple e-commerce form built using HTML, PHP, MySQL, and Bootstrap to insert and search data.',
            tech: ['HTML', 'PHP', 'MySQL'],
            link: 'https://github.com/hazindu/php-mysql-e-commerce',
        },
        {
            name: 'Library Management System',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
            ),
            category: 'CLI Application',
            description: 'Command-line based library management system with file persistence.',
            tech: ['Python'],
            link: 'https://github.com/hazindu/Python-Library-Management-System',
        },
        {
            name: 'React Native Login',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
            ),
            category: 'Mobile Application',
            description: 'Authentication flow implementation including Login and Signup screens for mobile applications.',
            tech: ['React Native', 'JavaScript', 'Android Studio'],
            link: 'https://github.com/hazindu/Login-Signup-ReactNative',
        },
        {
            name: 'BOC Mobile Banking App Design',
            icon: (
                <svg className="w-8 h-8 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            category: 'UI/UX',
                            description: 'A set of cleaner interface ideas for a mobile banking experience.',
            tech: ['Figma'],
            link: 'https://www.figma.com/design/LyTYW8jfoL38Oxo5XIhLMH/Untitled?node-id=0-1&m=dev&t=YM1W1QGOwIWuKl2O-1',
        }
    ];

    return (
        <section className="pt-32 pb-24 px-6 bg-[#FAFBFF] min-h-screen">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Page introduction */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-on-scroll is-visible">
                    <div className="max-w-2xl">
                        <p className="text-brand-primary font-bold text-sm tracking-wider uppercase mb-2">Featured Work</p>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-dark mb-4">Projects</h1>
                        <p className="text-gray-500 text-lg leading-relaxed">
                            A selection of projects where I solve real problems with code, AI, and clean architecture.
                        </p>
                    </div>
                </div>

                {/* Featured project */}
                <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 mb-8 shadow-xl flex flex-col lg:flex-row gap-12 items-center animate-on-scroll is-visible">

                    {/* Project details */}
                    <div className="flex-1 w-full">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Featured Project</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-3 leading-tight">
                            MindBou &ndash; Online Blogging Platform
                        </h2>
                        <p className="text-brand-primary font-bold text-xs uppercase tracking-wider mb-6">Web Application</p>

                        <p className="text-gray-500 text-base leading-relaxed mb-8 text-justify">
                            I built MindBou as a place where people can write, publish, and manage blog posts. It uses the MERN stack and is deployed with Vercel and Render.
                        </p>

                        <ul className="space-y-3 mb-8">
                            {[
                                'Role-based access for Admin and Users',
                                'Create, edit, and delete blog posts',
                                'Secure user authentication with JWT and cookies',
                                'Blog Analytics dashboard for insights'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 font-medium text-sm">
                                    <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS', 'Cloudinary'].map(tech => (
                                <div key={tech} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600 flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                    </svg>
                                    {tech}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="https://mind-bou-alpha.vercel.app/" target="_blank" className="px-7 py-3.5 rounded-xl bg-brand-dark text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-brand-dark/20">
                                Live Project
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Project preview */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl p-1 sm:p-2 relative">
                            {/* Browser-style preview controls */}
                            <div className="flex items-center gap-1.5 px-3 pt-2 pb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <img src="/assets/mindbou.webp" alt="MindBou App" className="w-full h-auto rounded-xl border border-gray-200 shadow-sm" />
                        </div>
                    </div>

                </div>

                <div className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 mb-8 shadow-xl flex flex-col lg:flex-row gap-12 items-center animate-on-scroll is-visible">

                    {/* Project details */}
                    <div className="flex-1 w-full">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
                            <span className="text-[10px] font-bold uppercase tracking-wider">Featured Project</span>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-dark mb-3 leading-tight">
                            HasiiMusic &ndash; Telegram Music Bot
                        </h2>
                        <p className="text-brand-primary font-bold text-xs uppercase tracking-wider mb-6">Web Application</p>

                        <p className="text-gray-500 text-base leading-relaxed mb-8 text-justify">
                            ˹ʜᴀꜱɪɪ ꭙ ᴍᴜꜱɪᴄ˼ ♪ is an <span className="text-color-black font-bold">open-source</span> Telegram bot built in Python. It plays music in voice chats from YouTube, Spotify, and live radio, while Pyrogram and PyTgCalls handle the Telegram integration and playback.
                        </p>

                        {/* <div className="grid grid-cols-2 gap-4 mb-8">
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                                <p className="text-2xl font-extrabold text-brand-dark">600+</p>
                                <p className="text-xs font-semibold text-gray-500">Served Groups</p>
                            </div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                                <p className="text-2xl font-extrabold text-brand-dark">90%</p>
                                <p className="text-xs font-semibold text-gray-500">Uptime</p>
                            </div>
                        </div> */}

                        <ul className="space-y-3 mb-8">
                            {[
                                'High-Quality Audio & Video Streaming',
                                'YouTube & Spotify Integration',
                                'Live Radio Streaming',
                                'Smart Queue Management',
                                'Multilingual Support',
                                '600+ Served Chats, International Audience & 90% Uptime'
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3 text-gray-600 font-medium text-sm">
                                    <div className="w-5 h-5 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 mt-0.5 text-brand-primary">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap gap-3 mb-10">
                            {['Python', 'Pyrogram', 'PyTgCalls', 'FFmpeg', 'ytdlp', 'DigitalOcean', 'React.js', 'Tailwind CSS'].map(tech => (
                                <div key={tech} className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600 flex items-center gap-2">
                                    <svg className="w-3.5 h-3.5 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                    </svg>
                                    {tech}
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="https://t.me/HasiMusicBot" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-xl bg-brand-dark text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-brand-dark/20">
                                Live Bot
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                            <a href="https://hasiimusic.hasindunagolla.live/" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-brand-primary/20">
                                Website
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </a>
                            <a href="https://github.com/hazindu/HasiiMusicBot" target="_blank" rel="noreferrer" className="px-7 py-3.5 rounded-xl border-2 border-gray-200 hover:border-brand-primary text-gray-700 hover:text-brand-primary bg-transparent font-bold text-sm transition-colors flex items-center gap-2"> 
                                GitHub
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Project preview */}
                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl p-1 sm:p-2 relative">
                            {/* Browser-style preview controls */}
                            <div className="flex items-center gap-1.5 px-3 pt-2 pb-3">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                            </div>
                            <img src="/assets/hasii-music.webp" alt="HasiiMusic Bot" className="w-full h-auto rounded-xl border border-gray-200 shadow-sm" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {work.map((project, index) => (
                        <a
                            key={project.name}
                            href={project.link || '#'}
                            target={project.link ? '_blank' : undefined}
                            rel={project.link ? 'noreferrer' : undefined}
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
                                <h3 className="text-brand-dark text-lg font-extrabold leading-tight mb-1.5">{project.name}</h3>
                                <p className="text-brand-primary font-bold text-[11px] uppercase tracking-wider mb-2.5">{project.category}</p>
                                <p className="text-sm text-gray-500 leading-relaxed mb-4 text-justify">{project.description}</p>

                                <div className="flex items-center gap-5 flex-wrap">
                                    {project.tech.map((t) => (
                                        <div key={t} className="flex items-center gap-1.5 text-xs font-semibold text-gray-600">
                                            <svg className="w-3.5 h-3.5 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                            </svg>
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="hidden sm:flex w-12 h-12 rounded-full border border-gray-100 items-center justify-center text-brand-dark group-hover:border-brand-primary group-hover:text-brand-primary group-hover:bg-brand-primary/5 transition-all shrink-0">
                                <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
