// Vite plugin that makes the single-page app crawlable on GitHub Pages:
// - injects per-route <title>, meta description, canonical, Open Graph,
//   Twitter and JSON-LD tags into the HTML head
// - writes one real HTML file per route (projects.html, about.html, ...),
//   so GitHub Pages answers /projects with 200 instead of a 404 fallback
// - puts a plain-HTML version of the page inside #root, so crawlers that
//   don't run JavaScript still read the content (React replaces it on load)
// - generates sitemap.xml and a noindex 404.html

import fs from 'fs';
import path from 'path';
import {
    ROUTES, NOT_FOUND, SITE_URL, SITE_NAME, HASII, PERSON,
    canonicalUrl, absoluteUrl, jsonLdGraph,
} from '../src/seo/site.js';

const START = '<!-- seo:start -->';
const END = '<!-- seo:end -->';

// Hides the crawler fallback inside #root from visitors whose browser runs
// JavaScript, so they don't see a flash of plain text before React loads.
const FALLBACK_GUARD = [
    '<script>document.documentElement.classList.add("js")</script>',
    '<style>.js .seo-fallback{display:none}</style>',
].join('\n    ');

const esc = (s) => String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const safeJson = (obj) => JSON.stringify(obj).replace(/</g, '\\u003c');

export function renderHead(route) {
    if (!route) {
        return [
            `<title>${esc(NOT_FOUND.title)}</title>`,
            `<meta name="description" content="${esc(NOT_FOUND.description)}" />`,
            `<meta name="robots" content="noindex" />`,
        ].join('\n    ');
    }
    const url = canonicalUrl(route);
    const image = absoluteUrl(route.image);
    return [
        `<title>${esc(route.title)}</title>`,
        `<meta name="description" content="${esc(route.description)}" />`,
        `<meta name="author" content="${esc(PERSON.name)}" />`,
        `<meta name="robots" content="index, follow, max-image-preview:large" />`,
        `<link rel="canonical" href="${url}" />`,
        `<meta property="og:site_name" content="${esc(SITE_NAME)}" />`,
        `<meta property="og:type" content="${route.type || 'website'}" />`,
        `<meta property="og:title" content="${esc(route.title)}" />`,
        `<meta property="og:description" content="${esc(route.description)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${image}" />`,
        `<meta name="twitter:card" content="summary_large_image" />`,
        `<meta name="twitter:creator" content="@hasindunagolla" />`,
        `<meta name="twitter:title" content="${esc(route.title)}" />`,
        `<meta name="twitter:description" content="${esc(route.description)}" />`,
        `<meta name="twitter:image" content="${image}" />`,
        `<script type="application/ld+json" id="seo-jsonld">${safeJson(jsonLdGraph(route))}</script>`,
    ].join('\n    ');
}

const link = (href, text) => {
    const external = href.startsWith('http');
    return `<a href="${esc(href)}"${external ? ' rel="noopener"' : ''}>${esc(text)}</a>`;
};

function renderHasiiBody() {
    const l = HASII.links;
    return `
<article class="seo-fallback max-w-3xl mx-auto px-6 pt-32 pb-24 text-gray-700">
  <nav aria-label="Breadcrumb">${link('/', 'Home')} / ${link('/projects', 'Projects')} / HasiiMusicBot</nav>
  <h1>HasiiMusicBot – Telegram Music Bot</h1>
  <p>${esc(HASII.tagline)}. Created and maintained by ${link('/', PERSON.name)}. First released ${esc(HASII.releasedLabel)}.</p>
  <p>${esc(HASII.summary)}</p>
  <img src="${HASII.image}" alt="HasiiMusicBot Telegram music bot by Hasindu Nagolla" width="1254" height="1254" style="max-width:12rem;height:auto" />
  <h2>Features</h2>
  <ul>${HASII.features.map((f) => `<li><strong>${esc(f.title)}</strong>: ${esc(f.text)}</li>`).join('')}</ul>
  <h2>Commands</h2>
  <ul>${HASII.commands.map((c) => `<li><code>${esc(c.cmd)}</code>: ${esc(c.text)}</li>`).join('')}</ul>
  <h2>Tech stack</h2>
  <p>${HASII.tech.map(esc).join(', ')}</p>
  <h2>Official links</h2>
  <ul>
    <li>Source code: ${link(l.github, 'github.com/hazindu/HasiiMusicBot')}</li>
    <li>Telegram bot: ${link(l.telegram, l.telegramHandle)}</li>
    <li>Website: ${link(l.website, 'hasiimusic.hasindunagolla.live')}</li>
    <li>Developer: ${link(PERSON.telegram, 'Hasindu Nagolla on Telegram')}</li>
  </ul>
  <h2>Frequently asked questions</h2>
  ${HASII.faq.map(({ q, a }) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('\n  ')}
</article>`;
}

function renderSimpleBody(route) {
    return `
<section class="seo-fallback max-w-3xl mx-auto px-6 pt-32 pb-24 text-gray-700">
  <h1>${esc(route.title)}</h1>
  <p>${esc(route.description)}</p>
  <p>Featured project: ${link(HASII.path, 'HasiiMusicBot – open-source Telegram music bot by Hasindu Nagolla')}</p>
  <nav>${link('/', 'Home')} · ${link('/projects', 'Projects')} · ${link('/about', 'About')}</nav>
</section>`;
}

function renderBody(route) {
    return route.path === HASII.path ? renderHasiiBody() : renderSimpleBody(route);
}

function replaceHead(html, head) {
    const start = html.indexOf(START);
    const end = html.indexOf(END);
    if (start === -1 || end === -1) throw new Error('seo-plugin: seo markers missing from index.html');
    return html.slice(0, start + START.length) + '\n    ' + head + '\n    ' + html.slice(end);
}

function replaceRoot(html, body) {
    return html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

function renderSitemap() {
    const today = new Date().toISOString().slice(0, 10);
    const urls = ROUTES.map((r) => `  <url>
    <loc>${canonicalUrl(r)}</loc>
    <lastmod>${today}</lastmod>
    <priority>${r.priority}</priority>
  </url>`).join('\n');
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export default function seoPlugin() {
    const home = ROUTES.find((r) => r.path === '/');
    let outDir = 'dist';

    return {
        name: 'seo-prerender',
        configResolved(config) {
            outDir = path.resolve(config.root, config.build.outDir);
        },
        // Dev and build: give index.html the home page tags.
        transformIndexHtml(html) {
            return html.replace('<!-- seo:head -->', `${FALLBACK_GUARD}\n    ${START}\n    ${renderHead(home)}\n    ${END}`);
        },
        writeBundle() {
            const base = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

            for (const route of ROUTES) {
                const html = replaceRoot(replaceHead(base, renderHead(route)), renderBody(route));
                fs.writeFileSync(path.join(outDir, route.file), html);
            }

            fs.writeFileSync(path.join(outDir, '404.html'), replaceHead(base, renderHead(null)));
            fs.writeFileSync(path.join(outDir, 'sitemap.xml'), renderSitemap());
            fs.writeFileSync(
                path.join(outDir, 'robots.txt'),
                `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
            );
        },
    };
}
