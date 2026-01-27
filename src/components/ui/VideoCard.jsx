import { Link } from 'react-router-dom';

function VideoCard({ project, onPreview }) {
  return (
    <div className="portfolio-content h-100">
      <img src={project.thumbnail} className="img-fluid" alt={project.title} />
      <div className="portfolio-info">
        <h4>{project.title}</h4>
        <p>{project.company}</p>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onPreview();
          }}
          className="preview-link"
          title="Ver video"
        >
          <i className="bi bi-play-circle"></i>
        </a>
        <Link to={`/proyecto/${project.id}`} className="details-link" title="Más detalles">
          <i className="bi bi-link-45deg"></i>
        </Link>
      </div>
    </div>
  );
}

export default VideoCard;
