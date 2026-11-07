'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AppMedia } from '@/data/apps-catalog';

interface AppMediaGalleryProps {
  media: AppMedia;
  appName: string;
}

export function AppMediaGallery({ media, appName }: AppMediaGalleryProps) {
  const [activeScreenshot, setActiveScreenshot] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasScreenshots = media.screenshots && media.screenshots.length > 0;
  const hasFeatureGraphic = !!media.featureGraphic;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setActiveScreenshot(media.screenshots[index]);
  };

  const closeLightbox = () => {
    setActiveScreenshot(null);
  };

  const nextScreenshot = () => {
    const nextIdx = (currentIndex + 1) % media.screenshots.length;
    setCurrentIndex(nextIdx);
    setActiveScreenshot(media.screenshots[nextIdx]);
  };

  const prevScreenshot = () => {
    const prevIdx = (currentIndex - 1 + media.screenshots.length) % media.screenshots.length;
    setCurrentIndex(prevIdx);
    setActiveScreenshot(media.screenshots[prevIdx]);
  };

  return (
    <div className="space-y-6">
      {/* Feature Graphic Banner */}
      {hasFeatureGraphic && (
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 group">
          <Image
            src={media.featureGraphic!}
            alt={`${appName} Feature Graphic`}
            fill
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white font-medium">
              Official Production Asset
            </span>
          </div>
        </div>
      )}

      {/* Screenshot Showcase / Carousel Grid */}
      {hasScreenshots && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider font-mono text-slate-800">
              Device Previews & Screenshots ({media.screenshots.length})
            </h3>
            <span className="text-xs text-slate-500 font-mono">Click to expand preview</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
            {media.screenshots.map((src, idx) => (
              <button
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative aspect-[9/16] sm:aspect-[9/19] rounded-xl overflow-hidden border border-slate-200 hover:border-emerald-500 transition-all bg-slate-50 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <Image
                  src={src}
                  alt={`${appName} screenshot ${idx + 1}`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                    <Eye className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <div className="absolute bottom-1.5 left-1.5 right-1.5 text-center">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-white font-medium">
                    Frame #{idx + 1}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {activeScreenshot && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition border border-white/20 z-50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={prevScreenshot}
            className="absolute left-4 sm:left-8 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/20 z-50 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative max-w-sm sm:max-w-md w-full h-[75vh] sm:h-[85vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <Image
              src={activeScreenshot}
              alt={`${appName} high-res frame ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={nextScreenshot}
            className="absolute right-4 sm:right-8 w-12 h-12 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center transition border border-white/20 z-50 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 text-center text-xs font-mono text-white/70">
            {appName} • Preview Frame {currentIndex + 1} of {media.screenshots.length}
          </div>
        </div>
      )}
    </div>
  );
}
