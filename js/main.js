let currentLang = localStorage.getItem("lang") || "en";

function t(obj) {
  if (!obj) return "";
  return typeof obj === "string" ? obj : obj[currentLang] || obj.en || "";
}

function getLabel(key) {
  return LABELS[currentLang][key];
}

function renderLabels() {
  document.querySelectorAll("[data-label]").forEach((el) => {
    el.textContent = getLabel(el.dataset.label);
  });
}

function renderHero() {
  document.getElementById("hero-name").textContent = SITE.name;
  document.getElementById("hero-role").textContent = t(SITE.role);
  document.getElementById("hero-headline").textContent = t(SITE.headline);
  document.getElementById("hero-tagline").textContent = t(SITE.tagline);
  document.getElementById("hero-availability").textContent = t(SITE.availability);
  document.getElementById("hero-photo").src = SITE.photo;
  document.getElementById("hero-photo").alt = SITE.name;

  document.getElementById("stats-row").innerHTML = STATS.map(
    (stat) => `
      <div class="stat">
        <span class="stat-value">${stat.value}</span>
        <span class="stat-label">${t(stat.label)}</span>
      </div>
    `
  ).join("");
}

function renderProjectCard(project, featured = false) {
  const badge = project.badge ? `<span class="badge">${t(project.badge)}</span>` : "";
  const link = project.url
    ? `<a href="${project.url}" class="project-link" target="_blank" rel="noopener">${getLabel("viewProject")} &rarr;</a>`
    : "";
  const highlight = project.highlight
    ? `<p class="project-highlight">${t(project.highlight)}</p>`
    : "";
  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

  if (featured) {
    return `
      <article class="featured-project">
        <div class="featured-image">
          <img src="${project.image}" alt="${project.title}" loading="lazy">
        </div>
        <div class="featured-body">
          <div class="featured-meta">
            ${badge}
            <span class="featured-label">${getLabel("featured")}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${t(project.description)}</p>
          ${highlight}
          <div class="tags">${tags}</div>
          ${link}
        </div>
      </article>
    `;
  }

  return `
    <article class="project-row reveal">
      <div class="project-row-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
      </div>
      <div class="project-row-body">
        <div class="project-row-header">
          <h3>${project.title}</h3>
          ${badge}
        </div>
        <p>${t(project.description)}</p>
        ${highlight}
        <div class="tags">${tags}</div>
        ${link}
      </div>
    </article>
  `;
}

function renderProjects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  document.getElementById("featured-project").innerHTML = featured
    ? renderProjectCard(featured, true)
    : "";

  document.getElementById("projects-list").innerHTML = rest
    .map((p) => renderProjectCard(p))
    .join("");
}

function renderCapabilities() {
  document.getElementById("capabilities-grid").innerHTML = CAPABILITIES.map(
    (cap) => `
      <div class="capability-card reveal">
        <h3>${t(cap.title)}</h3>
        <p>${t(cap.desc)}</p>
      </div>
    `
  ).join("");

  document.getElementById("skills-cloud").innerHTML = SKILLS.map(
    (skill) => `<span class="skill-chip">${skill}</span>`
  ).join("");
}

function renderAbout() {
  document.getElementById("about-bio").textContent = t(ABOUT.bio);
  document.getElementById("about-looking").textContent = t(ABOUT.lookingFor);
}

function renderContact() {
  const emailLink = document.getElementById("contact-email");
  emailLink.href = `mailto:${CONTACT.email}`;
  emailLink.textContent = CONTACT.email;

  document.getElementById("cv-pl").href = CONTACT.cvPl;
  document.getElementById("cv-en").href = CONTACT.cvEn;

  document.getElementById("social-links").innerHTML = SOCIAL.map(
    (link) => `
      <a href="${link.url}" target="_blank" rel="noopener noreferrer" aria-label="${link.name}">
        ${ICONS[link.icon]}
        <span>${link.name}</span>
      </a>
    `
  ).join("");
}

function updateLangButtons() {
  document.getElementById("lang-en").classList.toggle("active", currentLang === "en");
  document.getElementById("lang-pl").classList.toggle("active", currentLang === "pl");
  document.documentElement.lang = currentLang;
}

function renderAll() {
  renderLabels();
  renderHero();
  renderProjects();
  renderCapabilities();
  renderAbout();
  renderContact();
  updateLangButtons();
  observeReveal();
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  renderAll();
}

const ICONS = {
  github: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  itch: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-8v4h3l-4 8z"/></svg>`,
};

let revealObserver;

function observeReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-logo").textContent = SITE.logo;
  renderAll();

  document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
  document.getElementById("lang-pl").addEventListener("click", () => setLanguage("pl"));

  const nav = document.querySelector(".nav");
  window.addEventListener(
    "scroll",
    () => nav.classList.toggle("scrolled", window.scrollY > 20),
    { passive: true }
  );
});
