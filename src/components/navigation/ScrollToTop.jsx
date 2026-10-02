import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "../../utils/scroll-to-top.js";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
}
