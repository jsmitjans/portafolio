import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getProjectById } from '../data/projects';
import { getAssetPath } from '../utils/paths';

function ProjectDetails() {
  const { id } = useParams();
  const project = getProjectById(id);
  const videoRef = useRef(null);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="main">
        <div className="page-title dark-background">
          <div className="container">
            <h1>Proyecto no encontrado</h1>
            <nav className="breadcrumbs">
              <ol>
                <li><Link to="/">Inicio</Link></li>
                <li className="current">Error</li>
              </ol>
            </nav>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <p>El proyecto solicitado no existe.</p>
            <Link to="/" state={{ scrollTo: 'proyectos' }} className="btn btn-primary">Volver a proyectos</Link>
          </div>
        </section>
      </main>
    );
  }

  const isVideoProject = project.category === 'product';

  const lightboxSlides = project.images ? project.images.map(img => ({ src: getAssetPath(img) })) : [];

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <main className="main">
      <div className="page-title dark-background" data-aos="fade">
        <div className="container">
          <h1>{project.title}</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/" state={{ scrollTo: 'proyectos' }}>Proyectos</Link></li>
              <li className="current">{project.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="portfolio-details" className="portfolio-details section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            <div className="col-lg-8">
              {isVideoProject ? (
                <div className="portfolio-details-slider">
                  <video
                    ref={videoRef}
                    controls
                    poster={getAssetPath(project.poster)}
                    style={{ width: '100%', maxHeight: '500px', backgroundColor: '#000' }}
                  >
                    <source src={getAssetPath(project.video)} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                </div>
              ) : (
                <div className="portfolio-details-slider">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    loop={project.images && project.images.length > 1}
                    className="swiper"
                  >
                    {project.images && project.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={getAssetPath(image)}
                          alt={`${project.title} - Imagen ${index + 1}`}
                          onClick={() => handleImageClick(index)}
                          style={{ cursor: 'pointer' }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                <h3>Información del Proyecto</h3>
                <ul>
                  <li><strong>Proyecto</strong>: {project.title}</li>
                  {project.client && <li><strong>Cliente</strong>: {project.client}</li>}
                  <li><strong>Empresa</strong>: {project.company}</li>
                  <li><strong>Fecha</strong>: {project.date}</li>
                  {project.technologies && (
                    <li>
                      <strong>Tecnologías</strong>: {project.technologies.join(', ')}
                    </li>
                  )}
                </ul>
              </div>

              <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                <h2>Descripción</h2>
                <p>{project.description}</p>
              </div>

              <div className="mt-4" data-aos="fade-up" data-aos-delay="400">
                <Link to="/" state={{ scrollTo: 'proyectos' }} className="btn btn-primary">
                  <i className="bi bi-arrow-left me-2"></i>
                  Volver a proyectos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </main>
  );
}

export default ProjectDetails;
