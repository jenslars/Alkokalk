import { useEffect } from "react";

export function useIntersectionObserver({
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
}) {
  useEffect(() => {
    if (!target.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) =>
          entry.isIntersecting ? onIntersect() : null
        ),
      {
        rootMargin,
        threshold,
      }
    );

    const currentTarget = target.current;
    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [target, onIntersect, threshold, rootMargin]);
}
