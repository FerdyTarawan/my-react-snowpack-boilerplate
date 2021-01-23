import { useEffect, useRef } from 'react';

export const useInterval = (
  callback: () => void,
  delay: number | null,
): void => {
  const savedCallback = useRef<() => void | null>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  });

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback?.current();
      }
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
};
