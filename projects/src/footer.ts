const footer = document.querySelector("footer")!;
const observer = new IntersectionObserver(
  (entries) => {
    const entry = entries[0]!;
    footer.classList.toggle("is-end", entry.isIntersecting);
  },
  {
    threshold: 0.99,
  }
);

observer.observe(footer);
