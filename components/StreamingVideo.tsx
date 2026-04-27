'use client';

import { useEffect, useRef } from 'react';

export function StreamingVideo({ src, fallback }: { src: string; fallback: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hlsInstance: any = null;

    import('hls.js').then((HlsModule) => {
      const Hls = HlsModule.default;
      if (Hls.isSupported()) {
        hlsInstance = new Hls({ startLevel: -1 });
        hlsInstance.loadSource(src);
        hlsInstance.attachMedia(video);
        hlsInstance.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {});
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(() => {});
        });
      } else {
        video.src = fallback;
        video.play().catch(() => {});
      }
    });

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, [src, fallback]);

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      loop
      playsInline
      className="w-full h-auto mix-blend-screen"
    />
  );
}
