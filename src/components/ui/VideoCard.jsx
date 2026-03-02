import { useState } from 'react';
import { getAssetPath } from '../../utils/paths';

function VideoCard({ project }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const poster = project.poster || project.thumbnail;

  return (
    <div className="portfolio-content video-content h-100" style={{ position: 'relative' }}>
      <video
        controls
        preload="metadata"
        playsInline
        className="portfolio-video"
        poster={poster ? getAssetPath(poster) : undefined}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={getAssetPath(project.video)} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {!isPlaying && <div className="dv-texto-video">{project.title}</div>}
    </div>
  );
}

export default VideoCard;
