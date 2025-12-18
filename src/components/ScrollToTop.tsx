import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // If the navigation was a language toggle, keep the current scroll position
    // (language switch should not jump to top). Other navigations should scroll to top.
    const state = location.state as any;
    if (state && state.langToggle) return;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // غيرها لـ "auto" إذا ما بدك أنيميشن
    });
  }, [location]);

  return null;
};

export default ScrollToTop;
