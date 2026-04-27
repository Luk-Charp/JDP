// ===============================
// 📦 FAKE DATA (à remplacer plus tard par Firebase)
// ===============================
const projects = [
  { id: "p1", name: "Robot IA", votes: 12 },
  { id: "p2", name: "App Santé", votes: 5 },
  { id: "p3", name: "Jeu Éducatif", votes: 8 }
];

// ===============================
// 🚀 INITIALISATION
// ===============================
window.onload = () => {
  loadVotes();
  renderProjects();
};

// ===============================
// 📊 AFFICHER LES PROJETS
// ===============================
function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = "";

  projects.forEach(project => {
    const hasVoted = localStorage.getItem("hasVoted");

    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <h3>${project.name}</h3>
      <p id="votes-${project.id}">${project.votes} votes</p>
      <button 
        onclick="vote('${project.id}')"
        ${hasVoted ? "disabled" : ""}
      >
        ${hasVoted ? "Déjà voté" : "Voter"}
      </button>
    `;

    container.appendChild(card);
  });
}

// ===============================
// 🗳️ VOTER (VERSION LOCALE)
// ===============================
function vote(projectId) {
  const hasVoted = localStorage.getItem("hasVoted");

  if (hasVoted) {
    alert("Tu as déjà voté !");
    return;
  }

  // trouver le projet
  const project = projects.find(p => p.id === projectId);
  project.votes++;

  // sauvegarder en local
  localStorage.setItem("votes-" + projectId, project.votes);
  localStorage.setItem("hasVoted", true);

  // mettre à jour UI
  updateVotesUI(projectId, project.votes);

  // re-render pour désactiver les boutons
  renderProjects();
}

// ===============================
// 🔄 CHARGER LES VOTES (LOCAL)
// ===============================
function loadVotes() {
  projects.forEach(project => {
    const savedVotes = localStorage.getItem("votes-" + project.id);
    if (savedVotes) {
      project.votes = parseInt(savedVotes);
    }
  });
}

// ===============================
// 🎯 UPDATE UI
// ===============================
function updateVotesUI(projectId, votes) {
  const el = document.getElementById("votes-" + projectId);
  if (el) {
    el.innerText = votes + " votes";
  }
}