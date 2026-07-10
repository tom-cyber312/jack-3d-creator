"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = "", style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chars = text.split("");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  return (
    <div ref={containerRef} className={`relative ${className}`} style={style}>
      <span className="invisible">{text}</span>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = (i + 1) / chars.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={i} className="relative inline-block">
            <span className="invisible">{char === " " ? "\u00A0" : char}</span>
            <motion.span className="absolute inset-0" style={{ opacity }}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
}
