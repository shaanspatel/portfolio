const header = document.querySelector("[data-header]");
const internalLinks = document.querySelectorAll('a[href^="#"]');

const setHeaderShadow = () => {
  header.style.boxShadow = window.scrollY > 8 ? "0 12px 28px rgba(0, 36, 82, 0.08)" : "none";
};

internalLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    const target = targetId && document.querySelector(targetId);

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.pushState(null, "", targetId);

    if (typeof target.focus === "function") {
      target.focus({ preventScroll: true });
    }
  });
});

window.addEventListener("scroll", setHeaderShadow, { passive: true });
setHeaderShadow();
