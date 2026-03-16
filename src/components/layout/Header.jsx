import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getAssetPath } from '../../utils/paths';

const navItems = [
  { id: 'inicio', label: 'Inicio', icon: 'bi-house' },
  { id: 'sobre-mi', label: 'Sobre Mí', icon: 'bi-person' },
  { id: 'habilidades', label: 'Habilidades', icon: 'bi-stars' },
  { id: 'experiencia', label: 'Experiencia Profesional', icon: 'bi-file-earmark-text' },
  { id: 'proyectos', label: 'Proyectos', icon: 'bi-images' }
];

function Header({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleHeader = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId) => {
    setIsOpen(false);
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header id="header" className={`header dark-background d-flex flex-column ${isOpen ? 'header-show' : ''}`}>
        <i
          className={`header-toggle d-xl-none bi ${isOpen ? 'bi-x' : 'bi-list'}`}
          onClick={toggleHeader}
        ></i>

        <div className="profile-img">
          <img src={getAssetPath('/img/imagen_perfil.JPG')} alt="Jesús Soto Mitjans" className="img-fluid rounded-circle" />
        </div>

        <Link to="/" className="logo d-flex align-items-center justify-content-center">
          <h1 className="sitename">Jesús Soto Mitjans</h1>
        </Link>

        <div className="social-links text-center">
          <a href="https://www.linkedin.com/in/jesus-soto-mitjans-1a5148b0/" target="_blank" rel="noopener noreferrer" className="linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>

        <nav id="navmenu" className="navmenu">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                {isHomePage ? (
                  <a
                    href={`#${item.id}`}
                    className={activeSection === item.id ? 'active' : ''}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    <i className={`navicon bi ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <Link
                    to={`/#${item.id}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <i className={`navicon bi ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
