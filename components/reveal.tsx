"use client";

import { useEffect, type ReactNode } from "react";
import { useInView, useReducedMotion } from "motion/react";
import { useAnimate } from "motion/react-mini";

export function Reveal({ children, className = "", delay = 0 }: {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
}) {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const inView = useInView(scope, { once: true, margin: "0px 0px -32px 0px" });
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!inView || reducedMotion !== false) return;

    // The static HTML stays visible; motion is an enhancement after hydration.
    const animation = animate(scope.current, {
      opacity: [0, 1],
      transform: ["translateY(12px)", "translateY(0px)"],
    }, { duration: 0.46, delay, ease: [0.22, 1, 0.36, 1] });

    return () => animation.cancel();
  }, [animate, delay, inView, reducedMotion, scope]);

  return <div ref={scope} className={`reveal ${className}`}>{children}</div>;
}
