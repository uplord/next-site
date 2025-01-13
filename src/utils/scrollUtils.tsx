import { useState, useEffect } from 'react';
import { useBreakpoints } from '@/utils/useBreakpoints';

export function useScroll() {
  const breakpoints = useBreakpoints();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
}
