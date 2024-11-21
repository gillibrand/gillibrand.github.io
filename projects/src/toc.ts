const toc = document.getElementById("toc") as HTMLUListElement;

function markSelected(a?: HTMLAnchorElement | HTMLHeadingElement) {
  if (!a) return;

  if (a.nodeName !== "A") {
    const section = a.parentElement;
    const sectionId = section?.id;
    a = document.querySelector(`[data-to="${sectionId}"]`) as HTMLAnchorElement;
  }

  toc.querySelectorAll(".is-selected").forEach((el) => el.classList.remove("is-selected"));
  a.classList.add("is-selected");
}

function initToc() {
  const linkFrags: string[] = [];
  document.querySelectorAll("main section[id]").forEach((section) => {
    const sectionId = section.id;
    const heading = section.querySelector("h1,h2,h3,h4") as HTMLHeadingElement | null;
    if (!heading) return;

    const sectionTitle = heading.dataset.alt || heading.textContent;

    const classNames = ["toc__entry"];
    if (heading.nodeName === "H2" || heading.nodeName === "H1") {
      classNames.push("toc__entry--group");
    }

    linkFrags.push(
      `<li><a class="${classNames.join(" ")}" data-to="${sectionId}" href="#${sectionId}">
        <span>${sectionTitle}</span>
        </a></li>`
    );
  });

  toc.innerHTML = linkFrags.join("");

  toc.addEventListener("click", (e: MouseEvent) => {
    const a = e.target as HTMLAnchorElement;
    if (a.nodeName !== "A") return;
    e.preventDefault();

    // Update URL since it looks nice, but replace state so we don't pollute history
    // window.history.replaceState(undefined, "", a.href);

    // Top link TRY to center it so we actually scroll to the top of the page instead.
    const block = a.dataset.to === "me" ? "center" : "start";

    const section = document.getElementById(a.dataset.to!);
    section?.scrollIntoView({
      behavior: "smooth",
      block,
    });

    setTimeout(() => document.body.classList.remove("nav-open"), 500);
  });
}

function initIntersectionObserver() {
  // Callback function for the observer
  function handleIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const heading = entry.target as HTMLHeadingElement;
        const section = heading.parentElement as HTMLElement;
        const sectionId = section.id;
        const a = document.querySelector(`[data-to="${sectionId}"]`) as HTMLAnchorElement;
        markSelected(a);
      }
    });
  }

  // Create an IntersectionObserver instance
  const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: "0px 0px -75% 0px",
    threshold: 0, // Trigger as soon as the element is within the margin
  });

  const sections = Array.from(document.querySelectorAll("section[id]")) as HTMLElement[];
  const headings = sections.map((section) => {
    return section.querySelector("h1,h2,h3") as HTMLHeadingElement;
  });

  const top = document.documentElement.scrollTop;
  for (const heading of headings.reverse()) {
    if (heading.offsetTop < top) {
      markSelected(heading);
      break;
    }
  }

  headings.forEach((heading) => {
    observer.observe(heading);
  });
}

initToc();
initIntersectionObserver();
