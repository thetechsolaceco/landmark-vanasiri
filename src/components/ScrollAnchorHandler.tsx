"use client";

import { useEffect } from "react";

const NAV_OFFSET = 100;

export default function ScrollAnchorHandler() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const link = (e.target as HTMLElement)?.closest(
        'a[href^="#"], a[href^="/#"]'
      ) as HTMLAnchorElement | null;
      if (!link) return;

      const rawHref = link.getAttribute("href");
      if (!rawHref) return;

      const hash = rawHref.startsWith("/#") ? rawHref.slice(1) : rawHref;
      if (hash.length < 2) return;

      const target = document.getElementById(hash.slice(1));
      if (!target) return;

      e.preventDefault();
      e.stopPropagation();

      const top =
        target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
      history.pushState(null, "", hash);
    }

    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) {
        setTimeout(() => {
          const top =
            target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
          window.scrollTo({ top, behavior: "smooth" });
        }, 150);
      }
    }

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
