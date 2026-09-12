import { useState, useCallback, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ScrollProvider, useScroll } from './context/ScrollContext';

import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import FloatingDock from './components/FloatingDock';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TreatmentsPage from './pages/TreatmentsPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';
import Footer from './sections/Footer';

function Site() {
  const { containerRef } = useScroll();
  const scope = useRef(null);
  const location = useLocation();

  /* Ensure all content is immediately and reliably visible with zero blank white spaces */
  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    items.forEach((el) => {
      el.style.opacity = '1';
      el.style.visibility = 'visible';
      el.style.transform = 'none';
    });
  }, [location.pathname]);

  return (
    <>
      <Cursor />
      <Navbar />
      <FloatingDock />
      <BookingModal />
      <ScrollToTop />

      <div className="scroll-container" ref={containerRef}>
        <div ref={scope}>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutPage />} />
              <Route path="/treatments" element={<TreatmentsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>

      <div className="grain" aria-hidden="true" />
    </>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const onLoaded = useCallback(() => setLoaded(true), []);

  return (
    <ScrollProvider loaded={loaded}>
      {!loaded && <Preloader onComplete={onLoaded} />}
      <Site />
    </ScrollProvider>
  );
}
