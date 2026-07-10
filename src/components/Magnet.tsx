"use client";

import { useRef, useState, type ReactNode } from "react";

interface MagnetProps {
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  children: ReactNode;
  className?: string;
}

export default function Magnet({
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  children,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    const withinPadding =
      e.clientX >= rect.left - padding &&
      e.clientX <= rect.right + padding &&
      e.clientY >= rect.top - padding &&
      e.clientY <= rect.bottom + padding;

    if (withinPadding) {
      setActive(true);
      setPosition({ x: deltaX / strength, y: deltaY / strength });
    } else {
      setActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setActive(false);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: active ? activeTransition : inactiveTransition,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
