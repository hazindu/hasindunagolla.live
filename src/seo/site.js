// Shared SEO data. Plain JS (no JSX) so both the React app and the
// build-time prerender plugin in vite.config.js can import it.

export const SITE_URL = 'https://www.hasindunagolla.live';
export const SITE_NAME = 'Hasindu Nagolla';
export const DEFAULT_IMAGE = '/assets/profile-img.webp';

export const PERSON = {
    name: 'Hasindu Nagolla',
    alternateNames: ['Hasindu Lakshan', 'Hasindu Lakshan Nagolla'],
    jobTitle: 'Intern Software Engineer',
    image: '/assets/profile-img.webp',
    github: 'https://github.com/hazindu',
    telegram: 'https://t.me/Hasindu_Lakshan',
    sameAs: [
        'https://github.com/hazindu',
        'https://www.linkedin.com/in/hasindu-nagolla/',
        'https://x.com/hasindunagolla',
        'https://dev.to/hasindu-nagolla',
        'https://t.me/Hasindu_Lakshan',
    ],
};

export const HASII = {
    path: '/hasiimusicbot',
    name: 'HasiiMusicBot',
    alternateNames: ['Hasii Music Bot', 'HasiiMusic', 'Hasii Music', '˹ʜᴀꜱɪɪ ꭙ ᴍᴜꜱɪᴄ˼'],
    styledName: '˹ʜᴀꜱɪɪ ꭙ ᴍᴜꜱɪᴄ˼ ♪',
    tagline: 'Open-source Telegram music bot for voice chats',
    summary:
        'HasiiMusicBot (Hasii Music) is an open-source Telegram music bot created and maintained by Hasindu Nagolla. ' +
        'It streams high-quality audio into Telegram group voice chats from YouTube links, search queries and live radio stations, ' +
        'with queue management, admin controls and automatic voice chat cleanup.',
    released: '2025-09-13',
    releasedLabel: 'September 2025',
    image: '/assets/hasii-music.webp',
    ogImage: '/assets/hasiimusicbot-og.png',
    links: {
        github: 'https://github.com/hazindu/HasiiMusicBot',
        license: 'https://github.com/hazindu/HasiiMusicBot/blob/main/LICENSE',
        telegram: 'https://t.me/HasiMusicBot',
        telegramHandle: '@HasiMusicBot',
        website: 'https://hasiimusic.hasindunagolla.live/',
    },
    stats: [
        { value: '600+', label: 'Served chats' },
        { value: '90%', label: 'Uptime' },
        { value: '2025', label: 'First released' },
    ],
    features: [
        { title: 'High-quality audio streaming', text: 'Smooth playback in Telegram voice chats using the Opus codec and FFmpeg.' },
        { title: 'YouTube playback', text: 'Play songs from YouTube links, search queries and supported playlists.' },
        { title: 'Live radio', text: 'Browse and stream a collection of online radio stations with /radio.' },
        { title: 'Smart queue management', text: 'Add songs, view the queue, skip tracks and clear the queue.' },
        { title: 'Admin controls', text: 'Pause, resume, skip, stop and seek, restricted to admins, authorised users, the owner and sudo users.' },
        { title: 'Automatic voice chat cleanup', text: 'Detects inactive voice chats and leaves them to save server resources.' },
        { title: 'Multi-language support', text: 'Serves an international audience in multiple languages.' },
        { title: 'Docker ready', text: 'Deploy with Docker or Docker Compose and configure everything through environment variables.' },
    ],
    tech: ['Python', 'Pyrogram', 'PyTgCalls', 'FFmpeg', 'yt-dlp', 'MongoDB', 'Deno', 'Docker', 'DigitalOcean', 'React.js', 'Tailwind CSS'],
    commands: [
        { cmd: '/play <song or URL>', text: 'Play a song from a YouTube URL or search query' },
        { cmd: '/radio', text: 'Browse available radio stations' },
        { cmd: '/queue', text: 'Show the current music queue' },
        { cmd: '/pause, /resume, /skip', text: 'Control playback (admins)' },
        { cmd: '/seek <time>', text: 'Jump to a timestamp (admins)' },
        { cmd: '/end', text: 'Stop playback and clear the queue (admins)' },
    ],
};

HASII.faq = [
    {
        q: 'Who created HasiiMusicBot?',
        a: 'HasiiMusicBot (Hasii Music) was created and is maintained by Hasindu Nagolla, a software engineer from Sri Lanka. ' +
            'It was first published on GitHub in September 2025, and the project license reads "Copyright (C) 2025-2026 Hasindu Nagolla".',
    },
    {
        q: 'Where is the official HasiiMusicBot source code?',
        a: 'The official repository is github.com/hazindu/HasiiMusicBot. Other repositories with the same code are forks or copies of it.',
    },
    {
        q: 'Is HasiiMusicBot free and open source?',
        a: 'Yes. HasiiMusicBot is free to use and its source code is published on GitHub under the GNU General Public License v3.0.',
    },
    {
        q: 'How do I use HasiiMusicBot in my Telegram group?',
        a: `Add ${HASII.links.telegramHandle} to your Telegram group, start a voice chat, then send /play followed by a song name or YouTube link.`,
    },
    {
        q: 'What is HasiiMusicBot built with?',
        a: 'It is written in Python with Pyrogram and PyTgCalls for Telegram and voice chat playback, FFmpeg and yt-dlp for media, and MongoDB for storage.',
    },
];

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;
const abs = (p) => (p.startsWith('http') ? p : `${SITE_URL}${p}`);

const personNode = {
    '@type': 'Person',
    '@id': personId,
    name: PERSON.name,
    alternateName: PERSON.alternateNames,
    jobTitle: PERSON.jobTitle,
    url: `${SITE_URL}/`,
    image: abs(PERSON.image),
    sameAs: PERSON.sameAs,
    address: { '@type': 'PostalAddress', addressCountry: 'LK' },
};

const websiteNode = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    author: { '@id': personId },
    publisher: { '@id': personId },
};

const breadcrumb = (items) => ({
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, path], i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name,
        item: abs(path),
    })),
});

const hasiiAppNode = {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}${HASII.path}#software`,
    name: HASII.name,
    alternateName: HASII.alternateNames,
    description: HASII.summary,
    url: `${SITE_URL}${HASII.path}`,
    image: [abs(HASII.ogImage), abs(HASII.image)],
    applicationCategory: 'MultimediaApplication',
    applicationSubCategory: 'Telegram music bot',
    operatingSystem: 'Telegram',
    softwareRequirements: 'Telegram',
    datePublished: HASII.released,
    author: { '@id': personId },
    creator: { '@id': personId },
    copyrightHolder: { '@id': personId },
    copyrightYear: 2025,
    license: 'https://www.gnu.org/licenses/gpl-3.0.html',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    sameAs: [HASII.links.github, HASII.links.telegram, HASII.links.website],
    featureList: HASII.features.map((f) => f.title),
};

const hasiiSourceNode = {
    '@type': 'SoftwareSourceCode',
    '@id': `${SITE_URL}${HASII.path}#source`,
    name: `${HASII.name} source code`,
    codeRepository: HASII.links.github,
    programmingLanguage: 'Python',
    runtimePlatform: 'Python 3.10+',
    license: 'https://www.gnu.org/licenses/gpl-3.0.html',
    dateCreated: HASII.released,
    author: { '@id': personId },
    targetProduct: { '@id': hasiiAppNode['@id'] },
};

const hasiiFaqNode = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${HASII.path}#faq`,
    mainEntity: HASII.faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
    })),
};

export const ROUTES = [
    {
        path: '/',
        file: 'index.html',
        title: 'Hasindu Nagolla – Software Engineer & Creator of HasiiMusicBot',
        description:
            'Portfolio of Hasindu Nagolla, an intern software engineer from Sri Lanka working on full-stack development, AI/ML and cloud. Creator of HasiiMusicBot, an open-source Telegram music bot.',
        image: DEFAULT_IMAGE,
        type: 'profile',
        priority: '1.0',
        jsonLd: [
            personNode,
            websiteNode,
            {
                '@type': 'ProfilePage',
                '@id': `${SITE_URL}/#profile`,
                url: `${SITE_URL}/`,
                name: 'Hasindu Nagolla – Portfolio',
                isPartOf: { '@id': websiteId },
                mainEntity: { '@id': personId },
            },
        ],
    },
    {
        path: '/projects',
        file: 'projects.html',
        title: 'Projects – Hasindu Nagolla | HasiiMusicBot, MindBou & AI Work',
        description:
            'Projects by Hasindu Nagolla, including HasiiMusicBot (an open-source Telegram music bot), MindBou blogging platform, a DeepSeek RAG system and a Sinhala scam detection model.',
        image: HASII.image,
        priority: '0.8',
        jsonLd: [
            personNode,
            {
                '@type': 'CollectionPage',
                url: `${SITE_URL}/projects`,
                name: 'Projects by Hasindu Nagolla',
                isPartOf: { '@id': websiteId },
                author: { '@id': personId },
                hasPart: [{ '@id': hasiiAppNode['@id'] }],
            },
            breadcrumb([['Home', '/'], ['Projects', '/projects']]),
        ],
    },
    {
        path: HASII.path,
        file: 'hasiimusicbot.html',
        title: 'HasiiMusicBot – Telegram Music Bot by Hasindu Nagolla',
        description:
            'HasiiMusicBot (Hasii Music) is an open-source Telegram music bot created by Hasindu Nagolla. Stream YouTube music and live radio in Telegram voice chats with queue management and admin controls.',
        image: HASII.ogImage,
        type: 'article',
        priority: '0.9',
        jsonLd: [
            personNode,
            hasiiAppNode,
            hasiiSourceNode,
            {
                '@type': 'WebPage',
                url: `${SITE_URL}${HASII.path}`,
                name: 'HasiiMusicBot – Telegram Music Bot by Hasindu Nagolla',
                isPartOf: { '@id': websiteId },
                about: { '@id': hasiiAppNode['@id'] },
                mainEntity: { '@id': hasiiAppNode['@id'] },
                author: { '@id': personId },
            },
            hasiiFaqNode,
            breadcrumb([['Home', '/'], ['Projects', '/projects'], ['HasiiMusicBot', HASII.path]]),
        ],
    },
    {
        path: '/about',
        file: 'about.html',
        title: 'About Hasindu Nagolla – Education, Experience & Certifications',
        description:
            'Background of Hasindu Nagolla: BSc (Hons) Software Engineering student at the Open University of Sri Lanka, intern software engineer, and creator of HasiiMusicBot.',
        image: DEFAULT_IMAGE,
        type: 'profile',
        priority: '0.7',
        jsonLd: [
            personNode,
            {
                '@type': 'ProfilePage',
                url: `${SITE_URL}/about`,
                name: 'About Hasindu Nagolla',
                isPartOf: { '@id': websiteId },
                mainEntity: { '@id': personId },
            },
            breadcrumb([['Home', '/'], ['About', '/about']]),
        ],
    },
];

export const NOT_FOUND = {
    title: 'Page not found – Hasindu Nagolla',
    description: 'This page does not exist.',
    noindex: true,
};

export function getRoute(pathname) {
    const clean = pathname.replace(/\/+$/, '') || '/';
    return ROUTES.find((r) => r.path === clean) || null;
}

export function canonicalUrl(route) {
    return route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
}

export function absoluteUrl(path) {
    return abs(path);
}

export function jsonLdGraph(route) {
    return { '@context': 'https://schema.org', '@graph': route.jsonLd };
}
