// Footer year
document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

// Image frames: if a photo is missing, remove the broken image so the "Add a photo" placeholder shows.
document.querySelectorAll(".spot img").forEach(img => {
  const fail = () => img.remove();
  const ok = () => img.parentElement.classList.add("has");
  img.addEventListener("error", fail);
  img.addEventListener("load", ok);
  if (img.complete) (img.naturalWidth ? ok : fail)();
});
