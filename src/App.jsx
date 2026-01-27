import { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollTop from './components/layout/ScrollTop';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import useScrollSpy from './hooks/useScrollSpy';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles/main.css';

const sectionIds = ['inicio', 'sobre-mi', 'experiencia', 'proyectos'];

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const activeSection = useScrollSpy(sectionIds, 200);

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash && isHomePage) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location, isHomePage]);

  if (loading) {
    return <div id="preloader"></div>;
  }

  return (
    <>
      <Header activeSection={isHomePage ? activeSection : ''} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyecto/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      <ScrollTop />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
