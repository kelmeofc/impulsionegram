import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function HeroCounter({
  startValue = 8799,
  endValue = 13789,
  duration = 3000, // 12 minutes in seconds
}: {
  startValue?: number;
  endValue?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 1,
    stiffness: 10 / duration, // Adjust stiffness to reach endValue in specified duration
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(endValue);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("pt-BR").format(
            latest.toFixed(0)
          );
        }
      }),
    [springValue]
  );

  return <span ref={ref} />;
}
