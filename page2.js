window.addEventListener("DOMContentLoaded", () => {

  const titre = document.querySelector(".projet-detail h2");
  const btnAccueil = document.querySelector(".nav-accueil");
  const btnProjets = document.querySelector(".nav-projets");

  const sectionProjets = document.getElementById("projets");

btnProjets.addEventListener("click", () => {
  sectionProjets.scrollIntoView({
    behavior: "smooth"
  });
});

btnAccueil.addEventListener("click", () => {
  document.getElementById("accueil").scrollIntoView({
    behavior: "smooth"
  });
});

  function updateMenu() {
    const rect = titre.getBoundingClientRect();

    if (rect.top <= window.innerHeight / 2) {
      btnAccueil.classList.remove("active");
      btnProjets.classList.add("active");
    } else {
      btnProjets.classList.remove("active");
      btnAccueil.classList.add("active");
    }
  }

  window.addEventListener("scroll", updateMenu);
  updateMenu();

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  const contenu = toggle.nextElementSibling;

  // ✅ fermé au chargement
  contenu.classList.add("retracte");
  toggle.classList.add("ferme");

  // ✅ ouverture / fermeture au clic
  toggle.addEventListener("click", () => {
    contenu.classList.toggle("retracte");
    toggle.classList.toggle("ferme");
  });
});
});