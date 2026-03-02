import { useState, useEffect, useRef, useCallback } from 'react';
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { projects } from '../../data/projects';
import ProjectCard from '../ui/ProjectCard';
import VideoCard from '../ui/VideoCard';
import { getAssetPath } from '../../utils/paths';

const filters = [
  { key: '*', label: 'Todo' },
  { key: 'app', label: 'Imágenes' },
  { key: 'product', label: 'Videos' }
];

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('*');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxSlides, setLightboxSlides] = useState([]);
  const gridRef = useRef(null);
  const isotope = useRef(null);

  useEffect(() => {
    if (!gridRef.current) return;

    imagesLoaded(gridRef.current, () => {
      isotope.current = new Isotope(gridRef.current, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });
      isotope.current.arrange({ filter: '*' });
      isotope.current.layout();
    });

    return () => {
      if (isotope.current) {
        isotope.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (!isotope.current) return;

    const filterValue = activeFilter === '*' ? '*' : `.filter-${activeFilter}`;
    isotope.current.arrange({ filter: filterValue });
    isotope.current.layout();
  }, [activeFilter]);

  const handleFilterClick = (filterKey) => {
    setActiveFilter(filterKey);
  };

  const openImageLightbox = useCallback((project) => {
    if (project.images && project.images.length > 0) {
      const slides = project.images.map((img) => ({ src: getAssetPath(img) }));
      setLightboxSlides(slides);
      setLightboxIndex(0);
      setLightboxOpen(true);
    }
  }, []);

  const refreshLayout = useCallback(() => {
    if (!isotope.current) return;
    const filterValue = activeFilter === '*' ? '*' : `.filter-${activeFilter}`;
    isotope.current.arrange({ filter: filterValue });
    isotope.current.layout();
  }, [activeFilter]);

  return (
    <section id="proyectos" className="portfolio section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Proyectos</h2>
        <p>Proyectos en los que he trabajado a lo largo de mi carrera profesional.</p>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="fitRows" data-sort="original-order">
          <ul className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
            {filters.map((filter) => (
              <li
                key={filter.key}
                className={activeFilter === filter.key ? 'filter-active' : ''}
                onClick={() => handleFilterClick(filter.key)}
              >
                {filter.label}
              </li>
            ))}
          </ul>

          <div className="row gy-4 isotope-container" ref={gridRef} data-aos="fade-up" data-aos-delay="200">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`col-lg-4 col-md-6 portfolio-item isotope-item filter-${project.category}`}
              >
                {project.category === 'app' ? (
                  <ProjectCard
                    project={project}
                    onPreview={() => openImageLightbox(project)}
                  />
                ) : (
                  <VideoCard
                    project={project}
                    onMediaReady={refreshLayout}
                    matchImageSize={activeFilter === '*'}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </section>
  );
}

export default Portfolio;
