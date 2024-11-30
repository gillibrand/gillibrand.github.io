const footerHead = document.querySelector(".footer-head")!;

const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0]!;
    footerHead.classList.toggle("footer-head--up", entry.isIntersecting);
  },
  {
    threshold: 1.0,
  }
);

observer.observe(document.querySelector("footer")!);
