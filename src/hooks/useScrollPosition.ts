import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

// Define the type for the hook
type UseScrollPosition = () => ScrollPosition;

const useScrollPosition: UseScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const position: ScrollPosition = {
        x: window.scrollX,
        y: window.scrollY,
      };
      setScrollPosition(position);
    };

    // Add event listener to track scroll position
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means effect only runs once after initial render

  return scrollPosition;
};

export default useScrollPosition