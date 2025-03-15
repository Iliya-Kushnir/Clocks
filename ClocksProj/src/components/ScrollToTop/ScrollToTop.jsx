import React from "react";
// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Этот компонент будет прокручивать страницу в верх при каждом переходе
const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Прокручивает страницу в верх
  }, [location]);

  return null;
};

export default ScrollToTop;
