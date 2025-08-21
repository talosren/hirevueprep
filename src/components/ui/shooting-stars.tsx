"use client";
import React, { useRef, useEffect } from "react";

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random();
  
  switch (side) {
    case 0: // top
      return { x: offset, y: 0, angle: 45 };
    case 1: // right
      return { x: 1, y: offset, angle: 135 };
    case 2: // bottom
      return { x: offset, y: 1, angle: 225 };
    case 3: // left
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className = "",
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const createShootingStar = () => {
      const star = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      const startPoint = getRandomStartPoint();
      const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
      
      star.setAttribute("x", (startPoint.x * 100).toString());
      star.setAttribute("y", (startPoint.y * 100).toString());
      star.setAttribute("width", starWidth.toString());
      star.setAttribute("height", starHeight.toString());
      star.setAttribute("fill", "url(#gradient)");
      star.setAttribute("transform-origin", "center");
      
      svg.appendChild(star);

      const randomDuration = Math.random() * 6 + 6;
      const randomDelay = Math.random() * 2;

      star.style.animation = `shooting ${randomDuration}s linear ${randomDelay}s forwards`;

      setTimeout(() => {
        if (svg.contains(star)) {
          svg.removeChild(star);
        }
      }, (randomDuration + randomDelay) * 1000);
    };

    const interval = setInterval(() => {
      createShootingStar();
    }, Math.random() * (maxDelay - minDelay) + minDelay);

    // Create initial stars
    for (let i = 0; i < 3; i++) {
      setTimeout(createShootingStar, Math.random() * 2000);
    }

    return () => clearInterval(interval);
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starWidth, starHeight]);

  return (
    <>
      <style>{`
        @keyframes shooting {
          0% {
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: translateX(-500px) translateY(300px) rotate(45deg);
            opacity: 0;
          }
        }
      `}</style>
      <svg
        ref={svgRef}
        className={`absolute inset-0 h-full w-full ${className}`}
        style={{ zIndex: 1 }}
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
            <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};