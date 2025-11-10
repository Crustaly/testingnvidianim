import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './ArticleTransition.css';

function ArticleTransition() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    
    if (video) {
      // Play the video
      video.play().catch(error => {
        console.error('Error playing video:', error);
        // If video fails to play, navigate immediately
        navigate('/article-selection');
      });

      // Navigate when video ends
      const handleEnded = () => {
        navigate('/article-selection');
      };

      video.addEventListener('ended', handleEnded);

      return () => {
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [navigate]);

  return (
    <div className="article-transition">
      <video
        ref={videoRef}
        className="transition-video"
        src={`${process.env.PUBLIC_URL}/images/articletransition.mp4`}
        playsInline
        muted
        autoPlay
      />
    </div>
  );
}

export default ArticleTransition;

