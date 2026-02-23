const btn = document.querySelector(".menu-btn");
const nav = document.querySelector(".site-nav");

btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
});
