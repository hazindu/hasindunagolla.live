import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LenisScroll from '../components/LenisScroll';
import Seo from '../components/Seo';

export default function MainLayout() {
    const location = useLocation();

    // Watch newly rendered sections after each route change.
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        // Wait briefly for the new page to be in the DOM.
        const timeout = setTimeout(() => {
            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                observer.observe(el);
            });
        }, 100);

        return () => {
            clearTimeout(timeout);
            observer.disconnect();
        };
    }, [location.pathname]);

    return (
        <div id="top" className="font-inter text-brand-dark bg-white overflow-x-hidden selection:bg-brand-primary/20 selection:text-brand-primary min-h-screen transition-colors duration-300 flex flex-col">
            <Seo />
            <LenisScroll />
            <Navbar />

            {/* The active route is rendered here. */}
            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}
