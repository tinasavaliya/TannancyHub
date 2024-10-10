import React, { useState, useEffect } from 'react';

const MeasureComponent = () => {
  const [headerHeight, setHeaderHeight] = useState(null);
  const [rootNextMarginTop, setRootNextMarginTop] = useState(null);

  useEffect(() => {
    const measureElements = () => {
      // Measure header height
      const header = document.querySelector('header');
      if (header) {
        const height = window.getComputedStyle(header).height;
        setHeaderHeight(height);
      }

      // Measure margin-top of element after #root
      const root = document.getElementById('root');
      if (root && root.nextElementSibling) {
        const marginTop = window.getComputedStyle(root.nextElementSibling).marginTop;
        setRootNextMarginTop(marginTop);
      }
    };

    measureElements();

    // Re-measure on window resize
    window.addEventListener('resize', measureElements);

    // Cleanup
    return () => window.removeEventListener('resize', measureElements);
  }, []);

  return { headerHeight, rootNextMarginTop };
};

export default MeasureComponent;
