// src/hooks/useIsLgScreen.js

import { useState, useEffect } from 'react';

// Tailwind's 'lg' breakpoint is 1024px
const LG_BREAKPOINT = 1024; 

const useIsLgScreen = () => {
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    // Check if window is defined (for server-side rendering safety)
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`);
    
    const handleResize = () => setIsLg(mediaQuery.matches);

    // Initial check
    handleResize(); 

    // Add listener for changes
    mediaQuery.addListener(handleResize);

    // Cleanup: Remove listener when the component unmounts
    return () => mediaQuery.removeListener(handleResize);
  }, []);

  return isLg;
};

export default useIsLgScreen;