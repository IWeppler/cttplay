"use client";

import { useEffect, useRef, useState } from "react";

export default function BirthdayMarquee({ users }: { users: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (containerRef.current && contentRef.current) {
        setShouldScroll(
          contentRef.current.scrollWidth > containerRef.current.offsetWidth
        );
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [users]);

  return (
    <div
      ref={containerRef}
      className="w-full bg-red-600 text-white py-2 overflow-hidden border-y border-red-700 flex items-center shadow-inner"
    >
      <div className="flex items-center px-4 h-full z-10 shrink-0">
        <span className="text-xs font-bold uppercase tracking-widest">
          Cumpleaños:
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <div
          ref={contentRef}
          className={`flex whitespace-nowrap min-w-full gap-4 ${
            shouldScroll ? "animate-marquee" : "justify-center"
          }`}
        >
          {users.map((user, i) => (
            <span
              key={i}
              className="inline-flex font-bold uppercase text-xs tracking-widest "
            >
              {user}
              <span className="mx-3 text-red-300">•</span>
            </span>
          ))}

          {/* Duplicación para el loop */}
          {shouldScroll &&
            users.map((user, i) => (
              <span
                key={`dup-${i}`}
                className="inline-flex font-bold uppercase text-xs tracking-widest "
              >
                {user}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
