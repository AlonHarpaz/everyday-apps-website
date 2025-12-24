"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AppCard, AppData } from "@/components/AppCard";

interface AppSliderProps {
  apps: AppData[];
  title?: string;
  showNavigation?: boolean;
  fullWidth?: boolean;
}

export function AppSlider({ apps, title, showNavigation = true, fullWidth = false }: AppSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      {/* Title */}
      {title && (
        <h3 className="text-xl font-light mb-6">{title}</h3>
      )}

      {/* Carousel */}
      <div className="relative">
        <div ref={emblaRef}>
          <div className="flex gap-6 items-stretch">
            {apps.map((app, index) => (
              <div
                key={app.slug}
                className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] min-h-[620px] flex"
              >
                <div className="flex-1">
                  <AppCard app={app} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Navigation - Below carousel */}
      {showNavigation && (
        <div className="flex items-center justify-center gap-4 mt-10">
          {/* Previous Button */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`p-3 rounded-full transition-all ${
              canScrollPrev
                ? "bg-card border border-white/20 text-muted-foreground hover:text-[#FAA1F1] hover:border-[#FAA1F1]/50"
                : "bg-card/50 border border-white/10 text-muted-foreground/20 cursor-not-allowed"
            }`}
          >
            <ChevronLeft size={24} strokeWidth={2} />
          </button>

          {/* Next Button */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`p-3 rounded-full transition-all ${
              canScrollNext
                ? "bg-card border border-white/20 text-muted-foreground hover:text-[#FAA1F1] hover:border-[#FAA1F1]/50"
                : "bg-card/50 border border-white/10 text-muted-foreground/20 cursor-not-allowed"
            }`}
          >
            <ChevronRight size={24} strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}
