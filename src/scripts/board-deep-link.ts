/**
 * board-deep-link
 * Shared by BoardGrid and AlumniGrid (imported from each component's
 * <script> block). When the URL hash matches a person's card anchor
 * (e.g. /about/leadership#joshua-kent), expands that card's <details>
 * bio so duties/WHY text is already visible, then scrolls to it.
 * Self-guards so pages rendering both grids only bind once.
 */

const w = window as unknown as { __boardDeepLinkBound?: boolean };

if (!w.__boardDeepLinkBound) {
  w.__boardDeepLinkBound = true;

  const openFromHash = () => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    let target: HTMLElement | null;
    try {
      target = document.getElementById(decodeURIComponent(id));
    } catch {
      return;
    }
    if (!(target instanceof HTMLElement)) return;
    const details = target.matches("details.board-card")
      ? target
      : target.querySelector("details.board-card");
    if (!(details instanceof HTMLDetailsElement)) return;
    details.open = true;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  };

  window.addEventListener("hashchange", openFromHash);
  openFromHash();
}
