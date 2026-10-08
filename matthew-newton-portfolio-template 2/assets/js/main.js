const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}
document.querySelector("#year").textContent = new Date().getFullYear();
const chips = document.querySelectorAll("[data-filter]");
chips.forEach((c) =>
  c.addEventListener("click", () => {
    chips.forEach((x) => x.classList.remove("active"));
    c.classList.add("active");
    document.querySelectorAll("[data-type]").forEach((item) => {
      item.hidden =
        c.dataset.filter !== "all" && item.dataset.type !== c.dataset.filter;
    });
  }),
);
