/**
 * ═══════════════════════════════════════════════════════════════════════════
 *  PORTFOLIO DATA - edit this file to update your site
 * ═══════════════════════════════════════════════════════════════════════════
 *
 *  • Add a project     → copy an object in PROJECTS
 *  • Update your pitch → edit SITE and ABOUT
 *  • Change strengths  → edit CAPABILITIES
 *  • Update links      → edit CONTACT and SOCIAL
 */

const SITE = {
  name: "Jakub Kaczor",
  logo: "JK",
  role: {
    en: "Unreal Engine Game Developer",
    pl: "Developer Gier Unreal Engine",
  },
  headline: {
    en: "I build gameplay systems that actually ship.",
    pl: "Tworzę systemy rozgrywki, które da się dowieźć.",
  },
  tagline: {
    en: "C++ & Blueprints in UE5 - from combat frameworks to co-op puzzles. Self-taught, project-driven, and ready to contribute on day one.",
    pl: "C++ i Blueprints w UE5 - od frameworków combat po co-op puzzle. Samouk, projektowy, gotowy wnosić wartość od pierwszego dnia.",
  },
  availability: {
    en: "Open to junior roles, internships & collaborations",
    pl: "Otwarty na stanowiska junior, staże i współpracę",
  },
  photo: "images/photo.jpg",
};

const STATS = [
  { value: "2+", label: { en: "Shipped prototypes", pl: "Dostarczone prototypy" } },
  { value: "UE5", label: { en: "Primary engine", pl: "Główny silnik" } },
  { value: "C++", label: { en: "Systems language", pl: "Język systemów" } },
  { value: "Team", label: { en: "Collaborative dev", pl: "Praca zespołowa" } },
];

const ABOUT = {
  bio: {
    en: "I'm a game developer focused on Unreal Engine 5 and C++. I learn by building - every project pushes me further into systems design, multiplayer architecture, and gameplay programming. I've shipped multiple playable prototypes across different genres, contributed to team-based AI systems, and implemented production-grade patterns like the Gameplay Ability System from scratch. I don't wait for assignments - I prototype, iterate, and document what I build.",
    pl: "Jestem developerem gier skupionym na Unreal Engine 5 i C++. Uczę się przez budowanie - każdy projekt popycha mnie dalej w projektowaniu systemów, architekturze multiplayer i programowaniu rozgrywki. Dostarczyłem wiele grywalnych prototypów w różnych gatunkach, pracowałem zespołowo nad systemami AI i implementowałem wzorce produkcyjne, jak Gameplay Ability System, od zera. Nie czekam na zadania - prototypuję, iteruję i dokumentuję to, co buduję.",
  },
  lookingFor: {
    en: "Looking for a studio that values curiosity, clean code, and developers who grow fast. Happy to start as junior or intern - I bring real projects, not just a diploma.",
    pl: "Szukam studia, które ceni ciekawość, czysty kod i developerów, którzy szybko rosną. Chętnie zacznę jako junior lub na stażu - wnoszę realne projekty, nie tylko dyplom.",
  },
};

const CAPABILITIES = [
  {
    title: { en: "Gameplay Systems", pl: "Systemy rozgrywki" },
    desc: {
      en: "Custom ASC, ability slots, Enhanced Input, Gameplay Tags - built a full GAS combat framework in C++.",
      pl: "Custom ASC, sloty abilities, Enhanced Input, Gameplay Tags - zbudowałem pełny framework combat GAS w C++.",
    },
  },
  {
    title: { en: "Multiplayer & Co-op", pl: "Multiplayer i co-op" },
    desc: {
      en: "Designed and built networked puzzle mechanics and co-op gameplay loops from the ground up.",
      pl: "Projektowałem i budowałem mechaniki sieciowe puzzle oraz pętle rozgrywki co-op od podstaw.",
    },
  },
  {
    title: { en: "AI & Enemy Logic", pl: "AI i logika wrogów" },
    desc: {
      en: "Currently developing enemy AI systems in a team - behavior trees, state machines, and combat reactivity.",
      pl: "Obecnie rozwijam systemy AI wrogów w zespole - behavior trees, maszyny stanów i reaktywność w walce.",
    },
  },
  {
    title: { en: "Rapid Prototyping", pl: "Szybkie prototypowanie" },
    desc: {
      en: "Four completed game prototypes across platformer, horror, puzzle, and combat genres - all in UE5.",
      pl: "Cztery ukończone prototypy gier - platformówka, horror, puzzle i combat - wszystkie w UE5.",
    },
  },
];

const SKILLS = [
  "Unreal Engine 5",
  "C++",
  "Blueprints",
  "Gameplay Ability System",
  "Enhanced Input",
  "Multiplayer",
  "AI / Behavior Trees",
  "Level Design",
  "Game Design",
  "3D Modeling",
];

/**
 * Add a project by copying one of the objects below.
 *
 * featured: true  → large showcase at the top
 * highlight       → one line about what you built (shows technical depth)
 */
const PROJECTS = [
  {
    title: "Split-Bean",
    description: {
      en: "3D co-op puzzle game where two players solve environmental challenges together - built to explore networked gameplay.",
      pl: "Gra 3D co-op puzzle, w której dwóch graczy rozwiązuje wyzwania środowiskowe - stworzona, by eksplorować rozgrywkę sieciową.",
    },
    highlight: {
      en: "Co-op puzzle design, multiplayer architecture, environmental interaction systems",
      pl: "Projekt co-op puzzle, architektura multiplayer, systemy interakcji ze środowiskiem",
    },
    tags: ["UE5", "C++", "Multiplayer", "Co-op"],
    image: "images/splitbean.png",
    url: "https://github.com/jkaczor6/SplitBean",
  },
  {
    title: "Platform Farmer",
    description: {
      en: "Cozy 2D platformer with a farming loop - movement feel, crop systems, and level progression in a single cohesive package.",
      pl: "Przytulna platformówka 2D z pętlą rolniczą - feeling ruchu, system upraw i progresja poziomów w spójnej całości.",
    },
    highlight: {
      en: "2D platformer mechanics, farming economy, level design",
      pl: "Mechaniki platformówki 2D, ekonomia rolnictwa, level design",
    },
    tags: ["UE5", "C++", "Platformer", "2D"],
    image: "images/platformfarmer.png",
    url: "https://github.com/jkaczor6/PlatformFarmer",
  },
];

const CONTACT = {
  email: "j.kaczor06@gmail.com",
  cvPl: "JakubKaczor_CV.pdf",
  cvEn: "JakubKaczor_Resume.pdf",
};

const SOCIAL = [
  { name: "GitHub", url: "https://github.com/jkaczor6", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/jakubkaczor6", icon: "linkedin" },
  { name: "itch.io", url: "https://jkaczor6.itch.io", icon: "itch" },
  { name: "Twitter", url: "https://twitter.com/jkaczor6", icon: "twitter" },
];

const LABELS = {
  en: {
    navWork: "Work",
    navAbout: "About",
    navContact: "Hire Me",
    sectionWork: "Selected Work",
    sectionWorkSub: "Projects that show what I can do - not what I've been assigned.",
    sectionCapabilities: "What I Bring",
    sectionAbout: "About",
    sectionContact: "Let's Work Together",
    sectionContactSub: "Junior role, internship, or freelance - I'm ready to talk.",
    featured: "Featured",
    viewProject: "View project",
    cvPl: "CV (Polish)",
    cvEn: "Resume (English)",
    heroCtaWork: "See my work",
    heroCtaContact: "Get in touch",
  },
  pl: {
    navWork: "Prace",
    navAbout: "O mnie",
    navContact: "Zatrudnij",
    sectionWork: "Wybrane Projekty",
    sectionWorkSub: "Projekty, które pokazują co umiem - nie co mi zlecono.",
    sectionCapabilities: "Co Wnoszę",
    sectionAbout: "O mnie",
    sectionContact: "Porozmawiajmy",
    sectionContactSub: "Junior, staż lub freelance - chętnie pogadam.",
    featured: "Wyróżniony",
    viewProject: "Zobacz projekt",
    cvPl: "CV (Polski)",
    cvEn: "Resume (English)",
    heroCtaWork: "Zobacz projekty",
    heroCtaContact: "Napisz do mnie",
  },
};
