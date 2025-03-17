import React from 'react';
import './VideoModal.css';

const VideoModal = ({ video, onClose }) => {
  return (
    <div className="video-modal-overlay" onClick={onClose}>
      <div className="video-modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>✕</button>
        <video controls className="modal-video">
          <source src={video.videoUrl} type="video/mp4" />
        </video>
        <h3 className="modal-video-title">{video.title}</h3>
      </div>
    </div>
  );
};

export default VideoModal; 