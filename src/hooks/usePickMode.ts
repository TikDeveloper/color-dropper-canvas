import { useEffect, useState, RefObject, useCallback } from 'react';

export const usePickMode = (ref: RefObject<HTMLElement>, cb?: () => void) => {
  const [isPicking, setIsPicking] = useState(false);
  const handleClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (ref.current && !ref.current.contains(target)) {
      setIsPicking(false);
      cb?.();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  const togglePickMode = useCallback(() => setIsPicking((prev) => !prev), []);
  return { isPicking, togglePickMode };
};
