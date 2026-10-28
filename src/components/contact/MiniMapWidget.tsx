"use client";

import { useState } from "react";
import { FaMapMarkerAlt, FaTimes } from "react-icons/fa";

/**
 * Decorative, interactive SVG India map with an HQ pin at Hyderabad.
 * The pin pulses and shows a tooltip on hover/focus. The map is a
 * simplified silhouette — not survey-accurate. Used purely for visual
 * orientation on the contact page.
 */
export function MiniMapWidget() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative overflow-hidden rounded-lg border border-hairline bg-surface p-4 sm:p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
            Headquarters
          </p>
          <p className="mt-1 font-display text-sm font-bold text-foreground">
            Hyderabad, Telangana
          </p>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-brand/25 bg-brand/10">
          <FaMapMarkerAlt className="h-4 w-4 text-brand" aria-hidden="true" />
        </span>
      </div>

      {/* Map */}
      <div
        className="relative mt-4 aspect-[4/5] w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <svg
          viewBox="0 0 400 500"
          className="h-full w-full"
          role="img"
          aria-label="Simplified map of India with a pin at Hyderabad"
        >
          {/* India silhouette — simplified, decorative */}
          <path
            d="M180 40 L220 35 L250 55 L270 50 L290 70 L300 100 L280 130 L290 160 L280 190 L260 220 L270 250 L250 280 L260 310 L240 340 L230 380 L210 420 L190 460 L170 450 L150 420 L140 390 L130 360 L120 330 L110 300 L100 270 L90 240 L80 210 L70 180 L80 150 L70 120 L90 90 L120 70 L150 55 Z"
            className="fill-navy-light stroke-hairline-strong"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />

          {/* Decorative grid lines */}
          <g className="stroke-[rgba(168,180,190,0.08)]" strokeWidth="0.5">
            <line x1="0" y1="100" x2="400" y2="100" />
            <line x1="0" y1="200" x2="400" y2="200" />
            <line x1="0" y1="300" x2="400" y2="300" />
            <line x1="0" y1="400" x2="400" y2="400" />
            <line x1="100" y1="0" x2="100" y2="500" />
            <line x1="200" y1="0" x2="200" y2="500" />
            <line x1="300" y1="0" x2="300" y2="500" />
          </g>

          {/* Major city dots (decorative) */}
          <g className="fill-muted-foreground/30">
            <circle cx="140" cy="160" r="2" /> {/* Delhi */}
            <circle cx="170" cy="320" r="2" /> {/* Mumbai */}
            <circle cx="215" cy="340" r="2" /> {/* Bangalore */}
            <circle cx="260" cy="200" r="2" /> {/* Kolkata */}
            <circle cx="120" cy="260" r="2" /> {/* Ahmedabad */}
            <circle cx="195" cy="290" r="2" /> {/* Chennai */}
          </g>

          {/* HQ pin — Hyderabad (roughly center-south) */}
          <g
            className="cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {/* Pulse ring */}
            <circle
              cx="195"
              cy="295"
              r="14"
              className="fill-brand/10"
            >
              <animate
                attributeName="r"
                values="14;22;14"
                dur="2.6s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0;0.6"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Pin marker */}
            <circle cx="195" cy="295" r="6" className="fill-brand" />
            <circle cx="195" cy="295" r="2.5" className="fill-background" />
          </g>

          {/* Label */}
          {hovered && (
            <g>
              <rect
                x="210"
                y="278"
                width="80"
                height="34"
                rx="4"
                className="fill-background stroke-hairline-strong"
                strokeWidth="1"
              />
              <text
                x="250"
                y="293"
                textAnchor="middle"
                className="fill-brand text-[8px] font-bold uppercase"
              >
                HQ
              </text>
              <text
                x="250"
                y="305"
                textAnchor="middle"
                className="fill-foreground text-[7px] font-medium"
              >
                Hyderabad
              </text>
            </g>
          )}
        </svg>

        {/* Legend */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded border border-hairline bg-background/80 px-2 py-1 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            HQ
          </span>
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        Plot No 230/A, MLA&apos;s Colony Road No.12, Banjara Hills, Hyderabad,
        Telangana, India.
      </p>
    </div>
  );
}

export default MiniMapWidget;
