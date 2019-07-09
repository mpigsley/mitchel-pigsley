import { useState, useEffect } from 'react';
import { useDevice, useScroll } from '../utils/effects';

export default (scrollerRef, contentRef) => {
  const { isMobile } = useDevice();
  const [opacity, setOpacity] = useState(1);
  const [scrollerVisibility, setScrollerVisibility] = useState(true);

  useEffect(() => {
    if (isMobile && scrollerVisibility) {
      setScrollerVisibility(false);
    } else if (!isMobile && !scrollerVisibility) {
      setScrollerVisibility(true);
    }
  }, [isMobile]);

  useScroll(
    scrollerRef,
    evt => {
      const { scrollTop } = evt.currentTarget;
      if (!isMobile && !scrollTop && !scrollerVisibility) {
        setScrollerVisibility(true);
      } else if (scrollTop && scrollerVisibility) {
        setScrollerVisibility(false);
      }

      const { offsetTop } = contentRef.current;
      const height = offsetTop - 100;
      setOpacity(Math.max(0, (height - scrollTop) / height));
    },
    [scrollerVisibility],
  );

  return { isMobile, opacity, scrollerVisibility };
};
