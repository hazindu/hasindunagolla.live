import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getRoute, canonicalUrl, absoluteUrl, jsonLdGraph, NOT_FOUND } from '../seo/site';

// Keeps the <head> in sync with the current route during client-side
// navigation. The same tags are pre-rendered into each HTML file at build
// time (scripts/seo-plugin.js), so crawlers see them without JavaScript.

function setMeta(attr, key, content) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (content == null) {
        el?.remove();
        return;
    }
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
}

function setCanonical(href) {
    let el = document.head.querySelector('link[rel="canonical"]');
    if (!href) {
        el?.remove();
        return;
    }
    if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', 'canonical');
        document.head.appendChild(el);
    }
    el.setAttribute('href', href);
}

function setJsonLd(data) {
    let el = document.getElementById('seo-jsonld');
    if (!data) {
        el?.remove();
        return;
    }
    if (!el) {
        el = document.createElement('script');
        el.type = 'application/ld+json';
        el.id = 'seo-jsonld';
        document.head.appendChild(el);
    }
    el.textContent = JSON.stringify(data);
}

export default function Seo() {
    const { pathname } = useLocation();

    useEffect(() => {
        const route = getRoute(pathname);

        if (!route) {
            document.title = NOT_FOUND.title;
            setMeta('name', 'description', NOT_FOUND.description);
            setMeta('name', 'robots', 'noindex');
            setCanonical(null);
            setJsonLd(null);
            return;
        }

        const url = canonicalUrl(route);
        const image = absoluteUrl(route.image);

        document.title = route.title;
        setMeta('name', 'description', route.description);
        setMeta('name', 'robots', 'index, follow, max-image-preview:large');
        setCanonical(url);
        setMeta('property', 'og:type', route.type || 'website');
        setMeta('property', 'og:title', route.title);
        setMeta('property', 'og:description', route.description);
        setMeta('property', 'og:url', url);
        setMeta('property', 'og:image', image);
        setMeta('name', 'twitter:title', route.title);
        setMeta('name', 'twitter:description', route.description);
        setMeta('name', 'twitter:image', image);
        setJsonLd(jsonLdGraph(route));
    }, [pathname]);

    return null;
}
