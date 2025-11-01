"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface FadeInTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

const FadeInText: React.FC<FadeInTextProps> = ({
  text,
  className = "",
  delay = 0.3,
  duration = 1.2,
  yOffset = 30,
}) => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: yOffset },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
        }
      );
    }
  }, [delay, duration, yOffset]);

  return (
    <p ref={textRef} className={className}>
      {text}
    </p>
  );
};

export default FadeInText;
