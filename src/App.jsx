import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutPage from './pages/AboutPage';
import HasiiMusicBot from './pages/HasiiMusicBot';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    const frame = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}

export default function App() {
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hasiimusicbot" element={<HasiiMusicBot />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}