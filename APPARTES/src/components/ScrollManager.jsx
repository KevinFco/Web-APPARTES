import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Al navegar: vuelve arriba, o baja a la sección si la URL trae #ancla (ej. /#agenda)
export default function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}
