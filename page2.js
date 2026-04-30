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

const sections = [
  { id: "accueil", nav: ".nav-accueil" },
  { id: "projets", nav: ".nav-projets" },
  { id: "programme", nav: ".nav-programme" }
];

const navItems = document.querySelectorAll(".nav li");

// SCROLL → active menu
window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {
    const element = document.getElementById(section.id);
    const top = element.offsetTop - 150;

    if (window.scrollY >= top) {
      current = section.nav;
    }
  });

  navItems.forEach(li => li.classList.remove("active"));

  if (current) {
    document.querySelector(current).classList.add("active");
  }

});

document.querySelector(".nav-accueil").onclick = () => {
  document.getElementById("accueil").scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".nav-projets").onclick = () => {
  document.getElementById("projets").scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".nav-programme").onclick = () => {
  document.getElementById("programme").scrollIntoView({ behavior: "smooth" });
};

const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("open");
});

});