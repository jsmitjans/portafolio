import { useState } from 'react';
import { getAssetPath } from '../../utils/paths';

function VideoCard({ project, onMediaReady, matchImageSize = false }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const poster = project.poster || project.thumbnail;
  const videoContentClass = `portfolio-content video-content${matchImageSize ? ' video-content-all' : ''}`;

  return (
    <div className={videoContentClass} style={{ position: 'relative' }}>
      <video
        controls
        preload="metadata"
        playsInline
        className="portfolio-video"
        poster={poster ? getAssetPath(poster) : undefined}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        onLoadedMetadata={onMediaReady}
        onCanPlay={onMediaReady}
      >
        <source src={getAssetPath(project.video)} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {!isPlaying && <div className="dv-texto-video">{project.title}</div>}
    </div>
  );
}

export default VideoCard;
