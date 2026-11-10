import React from 'react';
import { Link } from 'react-router-dom';
import { FaTelegram } from 'react-icons/fa6';
import { RxGithubLogo } from 'react-icons/rx';
import { HASII, PERSON } from '../seo/site';

const CheckIcon = () => (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
);

const ArrowIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18M12 3a15 15 0 000 18" />
    </svg>
);

function SectionHeading({ eyebrow, children, id }) {
    return (
        <div className="mb-6">
            {eyebrow && <p className="text-brand-primary font-bold text-xs tracking-wider uppercase mb-2">{eyebrow}</p>}
            <h2 id={id} className="text-2xl md:text-3xl font-extrabold text-brand-dark">{children}</h2>
        </div>
    );
}

export default function HasiiMusicBot() {
    const { links } = HASII;

    return (
        <article className="pt-32 pb-24 px-6 bg-[#FAFBFF] min-h-screen">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Breadcrumb */}
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-gray-500">
                    <ol className="flex flex-wrap items-center gap-2">
                        <li><Link to="/" className="hover:text-brand-primary">Home</Link></li>
                        <li aria-hidden="true">/</li>
                        <li><Link to="/projects" className="hover:text-brand-primary">Projects</Link></li>
                        <li aria-hidden="true">/</li>
                        <li className="text-brand-dark font-semibold" aria-current="page">HasiiMusicBot</li>
                    </ol>
                </nav>

                {/* Hero */}
                <header className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-12 mb-10 shadow-xl flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 w-full">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary mb-6">
                            <FaTelegram className="w-4 h-4" aria-hidden="true" />
                            <span className="text-[10px] font-bold uppercase tracking-wider">Open-source Telegram bot</span>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-extrabold text-brand-dark mb-3 leading-tight">
                            HasiiMusicBot &ndash; Telegram Music Bot
                        </h1>
                        <p className="text-gray-400 font-semibold mb-6" lang="en">
                            Also known as Hasii Music &middot; {HASII.styledName}
                        </p>

                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            {HASII.summary}
                        </p>

                        <p className="text-sm text-gray-500 mb-8">
                            Created and maintained by{' '}
                            <Link to="/about" className="font-bold text-brand-dark hover:text-brand-primary">
                                {PERSON.name}
                            </Link>
                            {' '}&middot; First released{' '}
                            <time dateTime={HASII.released}>{HASII.releasedLabel}</time>
                        </p>

                        <div className="grid grid-cols-3 gap-3 mb-8 max-w-md">
                            {HASII.stats.map((s) => (
                                <div key={s.label} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                                    <p className="text-2xl font-extrabold text-brand-dark">{s.value}</p>
                                    <p className="text-xs font-semibold text-gray-500">{s.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <a href={links.telegram} target="_blank" rel="noopener" className="px-6 py-3.5 rounded-xl bg-brand-dark text-white font-bold text-sm hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg shadow-brand-dark/20">
                                Open {links.telegramHandle}
                                <ArrowIcon />
                            </a>
                            <a href={links.website} target="_blank" rel="noopener" className="px-6 py-3.5 rounded-xl bg-brand-primary text-white font-bold text-sm hover:bg-brand-primary/90 transition-colors flex items-center gap-2 shadow-lg shadow-brand-primary/20">
                                Website
                                <GlobeIcon />
                            </a>
                            <a href={links.github} target="_blank" rel="noopener" className="px-6 py-3.5 rounded-xl border-2 border-gray-200 hover:border-brand-primary text-gray-700 hover:text-brand-primary font-bold text-sm transition-colors flex items-center gap-2">
                                Source on GitHub
                                <RxGithubLogo className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 w-full lg:w-1/2">
                        <div className="rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-xl p-1 sm:p-2">
                            <img
                                src={HASII.image}
                                alt="HasiiMusicBot, a Telegram music bot by Hasindu Nagolla"
                                width="1254"
                                height="1254"
                               
                                className="w-full h-auto rounded-xl border border-gray-200"
                            />
                        </div>
                    </div>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    <div className="lg:col-span-2 space-y-10">

                        {/* About */}
                        <section className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm" aria-labelledby="about-heading">
                            <SectionHeading eyebrow="Overview" id="about-heading">About HasiiMusicBot</SectionHeading>
                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    I built HasiiMusicBot to give Telegram communities a fast and reliable way to listen to music
                                    together in group voice chats. Members can play songs from YouTube links or a search query,
                                    switch to live radio, and build up a shared queue, while admins keep full control over playback.
                                </p>
                                <p>
                                    The bot is written in Python on top of Pyrogram and PyTgCalls, with FFmpeg and yt-dlp handling
                                    media and MongoDB storing chat settings. It runs in Docker on DigitalOcean, and its companion
                                    website is built with React and Tailwind CSS. Today it serves 600+ Telegram chats with an
                                    international audience.
                                </p>
                                <p>
                                    The full source code is open source under the GNU GPL v3.0 license on{' '}
                                    <a href={links.github} target="_blank" rel="noopener" className="text-brand-primary font-semibold hover:underline">
                                        GitHub
                                    </a>
                                    , so anyone can deploy their own instance.
                                </p>
                            </div>
                        </section>

                        {/* Features */}
                        <section aria-labelledby="features-heading">
                            <SectionHeading eyebrow="What it does" id="features-heading">Features</SectionHeading>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {HASII.features.map((f) => (
                                    <div key={f.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0 text-brand-primary">
                                                <CheckIcon />
                                            </span>
                                            <h3 className="font-bold text-brand-dark leading-snug">{f.title}</h3>
                                        </div>
                                        <p className="text-sm text-gray-500 leading-relaxed">{f.text}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Commands */}
                        <section className="bg-white border border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm" aria-labelledby="commands-heading">
                            <SectionHeading eyebrow="Usage" id="commands-heading">Commands</SectionHeading>
                            <dl className="divide-y divide-gray-100">
                                {HASII.commands.map((c) => (
                                    <div key={c.cmd} className="py-3 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
                                        <dt className="sm:w-56 shrink-0">
                                            <code className="px-2 py-1 rounded-md bg-gray-50 border border-gray-100 text-sm font-semibold text-brand-dark">{c.cmd}</code>
                                        </dt>
                                        <dd className="text-sm text-gray-500">{c.text}</dd>
                                    </div>
                                ))}
                            </dl>
                        </section>

                        {/* FAQ */}
                        <section aria-labelledby="faq-heading">
                            <SectionHeading eyebrow="FAQ" id="faq-heading">Frequently asked questions</SectionHeading>
                            <div className="space-y-4">
                                {HASII.faq.map(({ q, a }) => (
                                    <div key={q} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                                        <h3 className="font-bold text-brand-dark mb-2">{q}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed">{a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6 self-start">
                        <section className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm" aria-labelledby="official-heading">
                            <h2 id="official-heading" className="text-lg font-extrabold text-brand-dark mb-1">Official links</h2>
                            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                These are the only official HasiiMusicBot sources. Other repositories with the same code are forks or copies of the original.
                            </p>
                            <ul className="space-y-3 text-sm">
                                <li>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Source code</p>
                                    <a href={links.github} target="_blank" rel="noopener" className="font-semibold text-brand-primary hover:underline break-all">github.com/hazindu/HasiiMusicBot</a>
                                </li>
                                <li>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Telegram bot</p>
                                    <a href={links.telegram} target="_blank" rel="noopener" className="font-semibold text-brand-primary hover:underline">{links.telegramHandle}</a>
                                </li>
                                <li>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Website</p>
                                    <a href={links.website} target="_blank" rel="noopener" className="font-semibold text-brand-primary hover:underline">hasiimusic.hasindunagolla.live</a>
                                </li>
                                <li>
                                    <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">License</p>
                                    <a href={links.license} target="_blank" rel="noopener" className="font-semibold text-brand-primary hover:underline">GNU GPL v3.0 &copy; 2025&ndash;2026 Hasindu Nagolla</a>
                                </li>
                            </ul>
                        </section>

                        <section className="bg-white border border-gray-100 rounded-[1.5rem] p-6 shadow-sm" aria-labelledby="tech-heading">
                            <h2 id="tech-heading" className="text-lg font-extrabold text-brand-dark mb-4">Tech stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {HASII.tech.map((t) => (
                                    <span key={t} className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-xs font-bold text-gray-600">{t}</span>
                                ))}
                            </div>
                        </section>

                        <section className="bg-brand-dark text-white rounded-[1.5rem] p-6 shadow-sm" aria-labelledby="dev-heading">
                            <h2 id="dev-heading" className="text-lg font-extrabold mb-2">About the developer</h2>
                            <p className="text-sm text-gray-300 leading-relaxed mb-4">
                                {PERSON.name} is a {PERSON.jobTitle.toLowerCase()} from Sri Lanka working on full-stack development, AI/ML and cloud infrastructure.
                            </p>
                            <div className="flex flex-wrap gap-3 text-sm font-bold">
                                <Link to="/about" className="text-white hover:text-brand-primary">About me</Link>
                                <a href={PERSON.github} target="_blank" rel="noopener me" className="text-white hover:text-brand-primary">GitHub</a>
                                <a href={PERSON.telegram} target="_blank" rel="noopener me" className="text-white hover:text-brand-primary">Telegram</a>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </article>
    );
}
