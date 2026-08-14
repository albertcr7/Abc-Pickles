import React, { useEffect, useRef, useState, useCallback } from 'react';

// Dynamically load all frame images from src/ezgif-4a436fcb71d62d58-jpg/
const frameModules = import.meta.glob('../../ezgif-4a436fcb71d62d58-jpg/*.jpg', {
  eager: true,
  import: 'default'
});

// Sort frame URLs strictly numerically (frame-001 -> frame-300)
const frameUrls = Object.keys(frameModules)
  .sort((a, b) => {
    const numA = parseInt(a.match(/frame-(\d+)/i)?.[1] || '0', 10);
    const numB = parseInt(b.match(/frame-(\d+)/i)?.[1] || '0', 10);
    return numA - numB;
  })
  .map((key) => frameModules[key]);

export const ScrollFrameAnimation = ({ scrollProgress = 0, onLoadingChange }) => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const activeFrameRef = useRef(-1);
  const targetFrameRef = useRef(0);
  const rafIdRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const totalFrames = frameUrls.length;

  // Render a specific frame onto canvas with full-screen object-fit: cover behavior
  const renderFrame = useCallback((frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;

    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth, drawHeight, offsetX, offsetY;

    const isMobile = window.innerWidth <= 768 || canvasRatio < 1;

    if (isMobile) {
      // Reels Mode for Mobile: fill 100% of vertical height (9:16 aspect fill)
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
    } else if (canvasRatio > imgRatio) {
      drawHeight = canvasHeight;
      drawWidth = canvasHeight * imgRatio;
    } else {
      drawWidth = canvasWidth;
      drawHeight = canvasWidth / imgRatio;
    }

    offsetX = (canvasWidth - drawWidth) / 2;
    offsetY = (canvasHeight - drawHeight) / 2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    activeFrameRef.current = frameIndex;
  }, []);

  // Responsive canvas resizing
  const updateCanvasDimensions = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const newWidth = Math.round(rect.width * dpr);
    const newHeight = Math.round(rect.height * dpr);

    if (canvas.width !== newWidth || canvas.height !== newHeight) {
      canvas.width = newWidth;
      canvas.height = newHeight;
      // Re-render current frame on dimension change
      if (activeFrameRef.current >= 0) {
        renderFrame(activeFrameRef.current);
      } else {
        renderFrame(0);
      }
    }
  }, [renderFrame]);

  // Preload all frames on mount
  useEffect(() => {
    if (totalFrames === 0) return;

    let loadedCount = 0;
    const images = new Array(totalFrames);
    let isCancelled = false;

    frameUrls.forEach((url, index) => {
      const img = new Image();
      img.src = url;

      const handleLoad = () => {
        if (isCancelled) return;
        loadedCount++;
        const pct = Math.round((loadedCount / totalFrames) * 100);
        setLoadProgress(pct);

        if (onLoadingChange) {
          onLoadingChange({ loadedCount, totalFrames, pct, isLoaded: loadedCount === totalFrames });
        }

        if (loadedCount === totalFrames) {
          imagesRef.current = images;
          setIsLoaded(true);
          updateCanvasDimensions();
          renderFrame(0);
        }
      };

      img.onload = handleLoad;
      img.onerror = handleLoad; // proceed even if a frame fails
      images[index] = img;
    });

    return () => {
      isCancelled = true;
    };
  }, [totalFrames, onLoadingChange, renderFrame, updateCanvasDimensions]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener('resize', updateCanvasDimensions);
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, [updateCanvasDimensions]);

  // Update target frame index when scrollProgress changes
  useEffect(() => {
    if (totalFrames === 0) return;
    const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
    const nextFrameIndex = Math.min(totalFrames - 1, Math.floor(clampedProgress * totalFrames));
    targetFrameRef.current = nextFrameIndex;
  }, [scrollProgress, totalFrames]);

  // Animation frame rendering loop
  useEffect(() => {
    if (!isLoaded) return;

    const loop = () => {
      if (targetFrameRef.current !== activeFrameRef.current) {
        renderFrame(targetFrameRef.current);
      }
      rafIdRef.current = requestAnimationFrame(loop);
    };

    rafIdRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [isLoaded, renderFrame]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {!isLoaded && (
        <div className="our-pickle-collection-loader" aria-live="polite">
          <div className="loader-spinner" />
          <div className="loader-text">Loading Experience... {loadProgress}%</div>
          <div className="loader-bar-bg">
            <div className="loader-bar-fill" style={{ width: `${loadProgress}%` }} />
          </div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="our-pickle-collection-canvas"
        role="img"
        aria-label="Interactive 360 degree pickle bottle scroll presentation"
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  );
};

export default ScrollFrameAnimation;
