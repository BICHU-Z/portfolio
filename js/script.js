/* =====================================================================
   PORTFOLIO — script.js

   1. CONFIG      <- the ONLY block you need to edit to personalize the site
   2. Helpers
   3. Renderers   (build each section from CONFIG)
   4. Behaviours  (theme, navigation, filters, reveal, typing, ...)

   Anything marked SAMPLE is placeholder content. Replace or delete it.
   Empty strings / empty arrays hide the matching element, so the site
   never shows a broken link or a fake button.
   ===================================================================== */

const CONFIG = {
  /* ---------- Identity & hero ---------- */
  profile: {
    name: "BINSHAD", // SAMPLE
    title: "Full Stack Developer", // SAMPLE: shown in the footer and the page title
    headline: "I design and build fast, reliable web products.", // SAMPLE
    description:
      "SAMPLE: Replace this with two or three sentences about what you do, who you help and the value you bring to a team or client.",
    // Words that type out in the hero ("I'm a ..."). Use one item for no animation.
    roles: ["Full Stack Developer", "Problem Solver", "Lifelong Learner"], // SAMPLE
    availability: { show: true, text: "Available for new opportunities" },
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-bRQbNlB3Pq3fRIdOaBvaFXj3VuGEmO6R4KeXiwOXg&s=10", // e.g. "assets/images/profile.jpg". Empty = initials avatar.
    profileImageAlt: "Portrait of Your Name",
    resume: "", // e.g. "assets/resume.pdf". Empty = hide the download button.
  },

  /* ---------- SEO (also update <title> / <meta> in index.html) ---------- */
  seo: {
    title: "", // empty = "<name> | <title> Portfolio"
    description: "", // empty = keep the description already in index.html
  },

  /* ---------- Theme ---------- */
  theme: {
    accentDark: "#f30303", // accent colour on the dark theme
    accentLight: "#0f766e", // accent colour on the light theme (needs good contrast on white)
  },

  /* ---------- About ---------- */
  about: {
    paragraphs: [
      "SAMPLE: Write a short, genuine introduction. Who are you and what do you care about in your work?",
      "SAMPLE: Describe your background and career journey in a few sentences: how you started, what you have learned, where you are now.",
    ],
    specializations: ["Frontend", "Backend", "APIs"], // SAMPLE
    interests: ["Open source", "Clean UI"], // SAMPLE
    goals: "SAMPLE: Describe the kind of work you want to do next.",
    approach: [
      // SAMPLE
      "Understand the problem and the people affected.",
      "Break it into small, testable pieces.",
      "Ship early, gather feedback, improve.",
    ],
    // Only add stats you can verify. Leave empty to hide the row.
    // Example: [{ value: "3+", label: "Years of experience" }]
    stats: [],
  },

  /* ---------- Skills ---------- */
  // icon = any Lucide icon name: https://lucide.dev/icons
  skills: [
    // SAMPLE categories and items
    { category: "Frontend Development", icon: "monitor", items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"] },
    { category: "Backend Development", icon: "server", items: ["Node.js", "Express", "REST APIs", "Authentication"] },
    { category: "Databases", icon: "database", items: ["MongoDB", "PostgreSQL", "Redis"] },
    { category: "Data & Analytics", icon: "activity", items: ["Python", "SQL", "Pandas", "Power BI"] },
    { category: "Design Tools", icon: "palette", items: ["Figma", "Responsive design", "Accessibility"] },
    { category: "Developer Tools", icon: "wrench", items: ["Git & GitHub", "VS Code", "Postman", "Docker"] },
  ],

  /* ---------- Projects ---------- */
  // Filter buttons are created automatically from the distinct `category` values.
  // Leave live / code / caseStudy empty to hide that link. Leave image empty for a placeholder.
  projectFilterMinimum: 3, // show filters only when there are at least this many projects
  projects: [
    // SAMPLE projects
    {
      title: "Project Name One",
      category: "Web Development",
      description: "SAMPLE: One or two sentences on the problem this project solves and what you built.",
      features: ["Key feature or problem solved", "Another notable detail"],
      tech: ["React", "Node.js", "MongoDB"],
      image: "", // e.g. "assets/images/project-one.png"
      imageAlt: "Screenshot of Project Name One",
      live: "",
      code: "",
      caseStudy: "",
    },
    {
      title: "Project Name Two",
      category: "Web Development",
      description: "SAMPLE: Describe the outcome, not just the technology.",
      features: ["Key feature or problem solved"],
      tech: ["JavaScript", "Tailwind CSS"],
      image: "",
      imageAlt: "Screenshot of Project Name Two",
      live: "",
      code: "",
      caseStudy: "",
    },
    {
      title: "Project Name Three",
      category: "Data Analytics",
      description: "SAMPLE: What question did the data answer, and what changed because of it?",
      features: ["Key insight or deliverable"],
      tech: ["Python", "SQL", "Power BI"],
      image: "",
      imageAlt: "Dashboard preview of Project Name Three",
      live: "",
      code: "",
      caseStudy: "",
    },
    {
      title: "Project Name Four",
      category: "Data Science",
      description: "SAMPLE: Summarize the model or analysis and how you evaluated it.",
      features: ["Key method or result"],
      tech: ["Python", "scikit-learn"],
      image: "",
      imageAlt: "Chart preview of Project Name Four",
      live: "",
      code: "",
      caseStudy: "",
    },
  ],

  /* ---------- Experience & education ---------- */
  // type: "work" | "internship" | "freelance" | "education" | "training" | "academic"
  // Education-style types appear in the right-hand column.
  experience: [
    // SAMPLE entries. Do not publish placeholder dates or employers.
    {
      type: "work",
      role: "Job Title",
      org: "Company Name",
      start: "Month Year",
      end: "Present",
      points: ["Describe a responsibility or a measurable achievement.", "Add one more concrete result."],
      tech: ["Technology", "Technology"],
    },
    {
      type: "education",
      role: "Degree / Qualification",
      org: "Institution Name",
      start: "Year",
      end: "Year",
      points: ["Relevant coursework, thesis or academic project."],
      tech: [],
    },
  ],

  /* ---------- Certifications & achievements (optional) ---------- */
  // type: "certification" | "award" | "hackathon" | "publication" | "milestone"
  // Leave the array empty to hide the whole section.
  achievements: [
    // SAMPLE entries
    { type: "certification", title: "Certification Name", issuer: "Issuing Organization", year: "Year", url: "" },
    { type: "hackathon", title: "Hackathon or Award Name", issuer: "Organizer", year: "Year", url: "" },
  ],

  /* ---------- Contact (no form: direct, clickable methods only) ---------- */
  // Any empty value hides that card.
  contact: {
    message:
      "Whether you're hiring, planning a project or just want to say hello, pick whichever way suits you best and I'll get back to you.",
    email: "BINSHADBICHUX@GMAIL.COM", // SAMPLE
    phone: "+91 9526717340", // SAMPLE, include country code
    whatsapp: "WA.ME/9526717340", // SAMPLE, digits only with country code, no + or spaces
    whatsappMessage: "Hi! I found your portfolio and would like to connect.",
    linkedin: "https://www.linkedin.com/in/your-username", // SAMPLE
    github: "https://github.com/your-username", // SAMPLE
    instagram: "", // empty = hidden
    location: "City, Country", // SAMPLE, shown as a non-clickable card
  },
};

/* =====================================================================
   2. HELPERS
   ===================================================================== */
(function () {
  "use strict";

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const prefersReducedMotion = () => reduceMotionQuery.matches;

  const escapeMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  const esc = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => escapeMap[ch]);

  const isHttpUrl = (value) => /^https?:\/\/\S+$/i.test(String(value || "").trim());
  // Local paths or http(s) URLs only; blocks javascript: and similar.
  const safeSrc = (value) => {
    const v = String(value || "").trim();
    return v && !/^\s*(javascript|vbscript|data):/i.test(v) ? v : "";
  };
  const prettyUrl = (url) => url.replace(/^https?:\/\/(www\.)?/i, "").replace(/\/$/, "");
  const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

  const initialsOf = (name) => {
    const parts = String(name || "").trim().split(/\s+/).filter(Boolean);
    if (!parts.length) return "•";
    const letters = parts.length === 1 ? parts[0].slice(0, 2) : parts[0][0] + parts[parts.length - 1][0];
    return letters.toUpperCase();
  };

  const refreshIcons = () => {
    if (window.lucide && typeof window.lucide.createIcons === "function") window.lucide.createIcons();
  };

  const stagger = (index) => `style="--d:${Math.min(index, 8) * 60}ms"`;
  const externalAttrs = 'target="_blank" rel="noopener noreferrer"';
  const newTabHint = '<span class="sr-only">(opens in a new tab)</span>';

  /* Which sections actually have content (used to hide empty ones). */
  const hasContent = {};

  /* =====================================================================
     3. RENDERERS
     ===================================================================== */
  const { profile, about, contact } = CONFIG;

  function socialLinks() {
    const defs = [
      { key: "github", icon: "github", label: "GitHub" },
      { key: "linkedin", icon: "linkedin", label: "LinkedIn" },
      { key: "instagram", icon: "instagram", label: "Instagram" },
    ];
    return defs.filter((d) => isHttpUrl(contact[d.key])).map((d) => ({ ...d, href: contact[d.key].trim() }));
  }

  function renderSocials() {
    const links = socialLinks();
    const markup = links
      .map(
        (l) => `
        <li>
          <a class="icon-btn" href="${esc(l.href)}" ${externalAttrs} aria-label="${esc(l.label)} profile (opens in a new tab)">
            <i data-lucide="${l.icon}" aria-hidden="true"></i>
          </a>
        </li>`
      )
      .join("");
    ["#hero-socials", "#footer-socials"].forEach((sel) => {
      const el = $(sel);
      if (!el) return;
      el.innerHTML = markup;
      el.hidden = !links.length;
    });
  }

  function renderAvatar() {
    const host = $("#avatar");
    if (!host) return;
    const src = safeSrc(profile.profileImage);
    host.innerHTML = src
      ? `<img src="${esc(src)}" alt="${esc(profile.profileImageAlt || profile.name)}" width="480" height="600" decoding="async" fetchpriority="high">`
      : `<div class="avatar-initials" role="img" aria-label="${esc(profile.name)} initials">${esc(initialsOf(profile.name))}</div>`;
  }

  function renderAbout() {
    const text = $("#about-text");
    if (text) text.innerHTML = (about.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join("");

    // Stats (hidden unless provided)
    const stats = $("#about-stats");
    const statItems = (about.stats || []).filter((s) => s && s.value && s.label);
    if (stats) {
      stats.innerHTML = statItems
        .map((s) => `<li><span class="stat-value">${esc(s.value)}</span><span class="stat-label">${esc(s.label)}</span></li>`)
        .join("");
      stats.hidden = !statItems.length;
    }

    // Resume button (hidden unless a path is supplied)
    const actions = $("#about-actions");
    const resume = safeSrc(profile.resume);
    if (actions) {
      actions.innerHTML = resume
        ? `<a class="btn btn-primary" href="${esc(resume)}" download>
             <i data-lucide="download" aria-hidden="true"></i> Download résumé
           </a>`
        : "";
      actions.hidden = !resume;
    }

    // Supporting cards
    const card = (icon, title, body, i) => `
      <article class="card p-6 reveal" ${stagger(i)}>
        <div class="flex items-center gap-3">
          <span class="icon-box"><i data-lucide="${icon}" aria-hidden="true"></i></span>
          <h3 class="text-lg">${esc(title)}</h3>
        </div>
        <div class="mt-4">${body}</div>
      </article>`;
    const tagList = (items) =>
      `<ul class="flex flex-wrap gap-2">${items.map((t) => `<li class="tag">${esc(t)}</li>`).join("")}</ul>`;

    const cards = [];
    if (about.specializations?.length) {
      cards.push((i) => card("layers", "What I specialize in", tagList(about.specializations), i));
    }
    if (about.goals || about.interests?.length) {
      const body =
        (about.goals ? `<p class="about-card-text">${esc(about.goals)}</p>` : "") +
        (about.interests?.length ? `<div class="${about.goals ? "mt-4" : ""}">${tagList(about.interests)}</div>` : "");
      cards.push((i) => card("target", "Interests & goals", body, i));
    }
    if (about.approach?.length) {
      const body = `<ol class="steps">${about.approach.map((s) => `<li>${esc(s)}</li>`).join("")}</ol>`;
      cards.push((i) => card("puzzle", "How I solve problems", body, i));
    }
    const host = $("#about-cards");
    if (host) host.innerHTML = cards.map((fn, i) => fn(i)).join("");

    hasContent.about = Boolean((about.paragraphs || []).length || cards.length);
  }

  function renderSkills() {
    const host = $("#skills-grid");
    const groups = (CONFIG.skills || []).filter((g) => g && g.category && g.items?.length);
    if (host) {
      host.innerHTML = groups
        .map(
          (g, i) => `
        <article class="card card-hover p-6 reveal" ${stagger(i)}>
          <div class="flex items-center gap-3">
            <span class="icon-box"><i data-lucide="${esc(g.icon || "code")}" aria-hidden="true"></i></span>
            <h3 class="text-lg">${esc(g.category)}</h3>
          </div>
          <ul class="mt-5 flex flex-wrap gap-2">
            ${g.items.map((s) => `<li class="tag tag-skill">${esc(s)}</li>`).join("")}
          </ul>
        </article>`
        )
        .join("");
    }
    hasContent.skills = groups.length > 0;
  }

  function projectCard(p, i) {
    const img = safeSrc(p.image);
    const thumb = img
      ? `<img src="${esc(img)}" alt="${esc(p.imageAlt || p.title + " screenshot")}" width="800" height="500" loading="lazy" decoding="async">`
      : `<div class="thumb-placeholder" aria-hidden="true">${esc((p.title || "?").trim().charAt(0).toUpperCase())}</div>`;

    const links = [];
    if (isHttpUrl(p.live)) {
      links.push(
        `<a class="link-inline" href="${esc(p.live.trim())}" ${externalAttrs}><i data-lucide="external-link" aria-hidden="true"></i> Live demo${newTabHint}<span class="sr-only"> of ${esc(p.title)}</span></a>`
      );
    }
    if (isHttpUrl(p.code)) {
      links.push(
        `<a class="link-inline" href="${esc(p.code.trim())}" ${externalAttrs}><i data-lucide="github" aria-hidden="true"></i> Source code${newTabHint}<span class="sr-only"> for ${esc(p.title)}</span></a>`
      );
    }
    if (isHttpUrl(p.caseStudy)) {
      links.push(
        `<a class="link-inline" href="${esc(p.caseStudy.trim())}" ${externalAttrs}><i data-lucide="book-open" aria-hidden="true"></i> Case study${newTabHint}<span class="sr-only"> for ${esc(p.title)}</span></a>`
      );
    }

    return `
      <article class="card card-hover project-card reveal" data-category="${esc(p.category || "Other")}" ${stagger(i)}>
        <div class="project-thumb">${thumb}</div>
        <div class="flex flex-1 flex-col p-6">
          <p class="muted text-xs font-medium">${esc(p.category || "Other")}</p>
          <h3 class="mt-1 text-xl">${esc(p.title)}</h3>
          <p class="muted mt-3 text-[0.9375rem]">${esc(p.description)}</p>
          ${
            p.features?.length
              ? `<ul class="feature-list mt-4">${p.features
                  .map((f) => `<li><i data-lucide="check" aria-hidden="true"></i><span>${esc(f)}</span></li>`)
                  .join("")}</ul>`
              : ""
          }
          ${
            p.tech?.length
              ? `<ul class="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">${p.tech
                  .map((t) => `<li class="tag">${esc(t)}</li>`)
                  .join("")}</ul>`
              : ""
          }
          ${links.length ? `<div class="mt-auto flex flex-wrap gap-x-5 pt-4">${links.join("")}</div>` : ""}
        </div>
      </article>`;
  }

  function renderProjects() {
    const projects = (CONFIG.projects || []).filter((p) => p && p.title);
    const grid = $("#project-grid");
    if (grid) grid.innerHTML = projects.map(projectCard).join("");

    const filters = $("#project-filters");
    const categories = [...new Set(projects.map((p) => p.category || "Other"))];
    const showFilters = projects.length >= (CONFIG.projectFilterMinimum ?? 3) && categories.length > 1;
    if (filters) {
      filters.innerHTML = showFilters
        ? ["All", ...categories]
            .map(
              (c) =>
                `<button type="button" class="filter-btn" data-filter="${esc(c)}" aria-pressed="${c === "All"}">${esc(c)}</button>`
            )
            .join("")
        : "";
      filters.hidden = !showFilters;
    }
    hasContent.projects = projects.length > 0;
  }

  const EDU_TYPES = ["education", "training", "academic"];
  const TYPE_LABELS = {
    internship: "Internship",
    freelance: "Freelance",
    education: "Education",
    training: "Training",
    academic: "Academic project",
  };

  function timelineItem(item, i) {
    const dates = [item.start, item.end].filter(Boolean).join(" – ");
    const label = TYPE_LABELS[item.type];
    return `
      <li class="timeline-item reveal" ${stagger(i)}>
        <article class="card p-5">
          <div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p class="timeline-date">${esc(dates)}</p>
            ${label ? `<span class="tag">${esc(label)}</span>` : ""}
          </div>
          <h4 class="mt-2 text-lg">${esc(item.role)}</h4>
          <p class="muted text-[0.9375rem]">${esc(item.org)}</p>
          ${item.points?.length ? `<ul class="bullet-list">${item.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
          ${
            item.tech?.length
              ? `<ul class="mt-4 flex flex-wrap gap-2" aria-label="Relevant skills">${item.tech
                  .map((t) => `<li class="tag">${esc(t)}</li>`)
                  .join("")}</ul>`
              : ""
          }
        </article>
      </li>`;
  }

  function renderTimelines() {
    const entries = (CONFIG.experience || []).filter((e) => e && e.role);
    const edu = entries.filter((e) => EDU_TYPES.includes(e.type));
    const work = entries.filter((e) => !EDU_TYPES.includes(e.type));

    const fill = (listSel, groupSel, items) => {
      const list = $(listSel);
      const group = $(groupSel);
      if (list) list.innerHTML = items.map(timelineItem).join("");
      if (group) group.hidden = !items.length;
    };
    fill("#timeline-work", "#group-work", work);
    fill("#timeline-edu", "#group-edu", edu);

    const wrap = $("#timeline-wrap");
    if (wrap) wrap.classList.toggle("lg:grid-cols-2", Boolean(work.length && edu.length));
    hasContent.experience = entries.length > 0;
  }

  const ACHIEVEMENT_ICONS = {
    certification: "award",
    award: "trophy",
    hackathon: "trophy",
    publication: "book-open",
    milestone: "target",
  };

  function renderAchievements() {
    const items = (CONFIG.achievements || []).filter((a) => a && a.title);
    const host = $("#achievements-grid");
    if (host) {
      host.innerHTML = items
        .map((a, i) => {
          const url = isHttpUrl(a.url) ? a.url.trim() : "";
          const meta = [a.issuer, a.year].filter(Boolean).join(" · ");
          const inner = `
            <span class="icon-box"><i data-lucide="${ACHIEVEMENT_ICONS[a.type] || "award"}" aria-hidden="true"></i></span>
            <span class="contact-text">
              <span class="contact-label block">${esc(a.title)}</span>
              ${meta ? `<span class="contact-value block">${esc(meta)}</span>` : ""}
            </span>
            ${url ? `<i data-lucide="arrow-up-right" class="contact-arrow" aria-hidden="true"></i>` : ""}`;
          return url
            ? `<li class="reveal" ${stagger(i)}><a class="card contact-card" href="${esc(url)}" ${externalAttrs}>${inner}${newTabHint}</a></li>`
            : `<li class="reveal" ${stagger(i)}><div class="card contact-card">${inner}</div></li>`;
        })
        .join("");
    }
    hasContent.achievements = items.length > 0;
  }

  function contactMethods() {
    const list = [];
    const email = String(contact.email || "").trim();
    if (isEmail(email)) {
      list.push({
        icon: "mail",
        label: "Email",
        value: email,
        hint: "Best for detailed inquiries",
        href: `mailto:${email}`,
      });
    }
    const phone = String(contact.phone || "").trim();
    const phoneDigits = phone.replace(/[^\d+]/g, "");
    if (phoneDigits.replace(/\D/g, "").length >= 6) {
      list.push({
        icon: "phone",
        label: "Phone",
        value: phone,
        hint: "Call for a quick conversation",
        href: `tel:${phoneDigits}`,
      });
    }
    const wa = String(contact.whatsapp || "").replace(/\D/g, "");
    if (wa.length >= 6) {
      const text = contact.whatsappMessage ? `?text=${encodeURIComponent(contact.whatsappMessage)}` : "";
      list.push({
        icon: "message-circle",
        label: "WhatsApp",
        value: `+${wa}`,
        hint: "Message me directly",
        href: `https://wa.me/${wa}${text}`,
        external: true,
      });
    }
    if (isHttpUrl(contact.linkedin)) {
      list.push({
        icon: "linkedin",
        label: "LinkedIn",
        value: prettyUrl(contact.linkedin.trim()),
        hint: "Let's connect professionally",
        href: contact.linkedin.trim(),
        external: true,
      });
    }
    if (isHttpUrl(contact.github)) {
      list.push({
        icon: "github",
        label: "GitHub",
        value: prettyUrl(contact.github.trim()),
        hint: "Browse my code and contributions",
        href: contact.github.trim(),
        external: true,
      });
    }
    if (isHttpUrl(contact.instagram)) {
      list.push({
        icon: "instagram",
        label: "Instagram",
        value: prettyUrl(contact.instagram.trim()),
        hint: "Follow my work and updates",
        href: contact.instagram.trim(),
        external: true,
      });
    }
    if (String(contact.location || "").trim()) {
      list.push({ icon: "map-pin", label: "Location", value: contact.location.trim(), hint: "Where I'm based", href: "" });
    }
    return list;
  }

  function renderContact() {
    const methods = contactMethods();
    const host = $("#contact-grid");
    if (host) {
      host.innerHTML = methods
        .map((m, i) => {
          const body = `
            <span class="icon-box"><i data-lucide="${m.icon}" aria-hidden="true"></i></span>
            <span class="contact-text">
              <span class="contact-label block">${esc(m.label)}</span>
              <span class="contact-value block">${esc(m.value)}</span>
              <span class="contact-hint block">${esc(m.hint)}</span>
            </span>`;
          if (!m.href) {
            return `<li class="reveal" ${stagger(i)}><div class="card contact-card">${body}</div></li>`;
          }
          return `<li class="reveal" ${stagger(i)}>
            <a class="card contact-card" href="${esc(m.href)}" ${m.external ? externalAttrs : ""} aria-label="${esc(m.label)}: ${esc(m.value)}${m.external ? " (opens in a new tab)" : ""}">
              ${body}
              <i data-lucide="${m.external ? "arrow-up-right" : "arrow-right"}" class="contact-arrow" aria-hidden="true"></i>
            </a>
          </li>`;
        })
        .join("");
    }
    hasContent.contact = methods.length > 0;
  }

  /* Text bindings: <span data-bind="name"></span> */
  function bindText() {
    const values = {
      name: profile.name,
      initials: initialsOf(profile.name),
      title: profile.title,
      headline: profile.headline,
      description: profile.description,
      availabilityText: profile.availability?.text,
      contactMessage: contact.message,
    };
    $$("[data-bind]").forEach((el) => {
      const value = values[el.dataset.bind];
      if (value != null) el.textContent = value;
    });
    const badge = $("#availability");
    if (badge) badge.hidden = !(profile.availability?.show && profile.availability?.text);
  }

  function applySeo() {
    const seo = CONFIG.seo || {};
    document.title = seo.title || `${profile.name} | ${profile.title} Portfolio`;
    if (seo.description) {
      const meta = $('meta[name="description"]');
      if (meta) meta.setAttribute("content", seo.description);
      const og = $('meta[property="og:description"]');
      if (og) og.setAttribute("content", seo.description);
    }
    const ogTitle = $('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", document.title);
  }

  function applyAccent() {
    const theme = CONFIG.theme || {};
    const root = document.documentElement;
    if (theme.accentDark && CSS.supports("color", theme.accentDark)) root.style.setProperty("--accent-d", theme.accentDark);
    if (theme.accentLight && CSS.supports("color", theme.accentLight)) root.style.setProperty("--accent-l", theme.accentLight);
  }

  /* Hide whole sections (and every link to them) when they have no content. */
  function hideEmptySections() {
    Object.entries(hasContent).forEach(([id, ok]) => {
      const section = document.getElementById(id);
      if (section) section.hidden = !ok;
      $$(`[data-section-link="${id}"]`).forEach((link) => {
        const holder = link.closest("li") || link;
        holder.hidden = !ok;
      });
    });
    // Achievements section has no nav link; it is shown only when it has items.
  }

  /* =====================================================================
     4. BEHAVIOURS
     ===================================================================== */

  /* ----- Theme ----- */
  const THEME_KEY = "portfolio-theme";
  const THEME_COLORS = { dark: "#0b0d10", light: "#fafaf9" };

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  }

  function applyTheme(theme, persist) {
    document.documentElement.setAttribute("data-theme", theme);
    const button = $("#theme-toggle");
    if (button) button.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    const meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", THEME_COLORS[theme]);
    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {
        /* storage unavailable: the choice simply won't persist */
      }
    }
  }

  function initTheme() {
    applyTheme(currentTheme(), false);
    const button = $("#theme-toggle");
    if (button) button.addEventListener("click", () => applyTheme(currentTheme() === "dark" ? "light" : "dark", true));
    // Keep several open tabs in sync.
    window.addEventListener("storage", (event) => {
      if (event.key === THEME_KEY && (event.newValue === "light" || event.newValue === "dark")) {
        applyTheme(event.newValue, false);
      }
    });
  }

  /* ----- Mobile menu ----- */
  function initMenu() {
    const toggle = $("#menu-toggle");
    const menu = $("#mobile-menu");
    const header = $("#site-header");
    if (!toggle || !menu) return;

    const setOpen = (open, returnFocus) => {
      menu.hidden = !open;
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (!open && returnFocus) toggle.focus();
    };

    toggle.addEventListener("click", () => setOpen(menu.hidden, false));
    // Selecting any link closes the menu.
    menu.addEventListener("click", (event) => {
      if (event.target.closest("a")) setOpen(false, false);
    });
    // Click outside closes it.
    document.addEventListener("click", (event) => {
      if (!menu.hidden && header && !header.contains(event.target)) setOpen(false, false);
    });
    // Escape closes it and returns focus to the button.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !menu.hidden) setOpen(false, true);
    });
    // Close when the layout switches to the desktop navigation.
    window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
      if (event.matches) setOpen(false, false);
    });
  }

  /* ----- Active navigation (Intersection Observer) + header shadow ----- */
  function initNavTracking() {
    const links = $$("[data-nav]");
    const ids = [...new Set(links.map((l) => l.dataset.nav))].filter((id) => {
      const el = document.getElementById(id);
      return el && !el.hidden;
    });
    const setActive = (id) => {
      links.forEach((link) => {
        if (link.dataset.nav === id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    };

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(entry.target.id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );
      ids.forEach((id) => observer.observe(document.getElementById(id)));
    }

    // Header shadow, plus a fallback so the last link activates at the page bottom.
    const header = $("#site-header");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
        const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
        if (atBottom && ids.length) setActive(ids[ids.length - 1]);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ----- Project filters (event delegation: one listener) ----- */
  function initFilters() {
    const bar = $("#project-filters");
    const grid = $("#project-grid");
    if (!bar || !grid) return;

    bar.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) return;
      const category = button.dataset.filter;

      $$("[data-filter]", bar).forEach((b) => b.setAttribute("aria-pressed", String(b === button)));

      let shown = 0;
      $$("[data-category]", grid).forEach((card) => {
        const match = category === "All" || card.dataset.category === category;
        card.hidden = !match;
        if (match) {
          shown += 1;
          // Skip the scroll-reveal for cards the user just asked to see.
          card.classList.remove("reveal", "is-visible");
          card.classList.remove("filter-in");
          void card.offsetWidth; // restart the animation
          card.classList.add("filter-in");
        }
      });

      const status = $("#filter-status");
      if (status) {
        status.textContent = `Showing ${shown} project${shown === 1 ? "" : "s"}${category === "All" ? "" : " in " + category}`;
      }
    });
  }

  /* ----- Scroll reveal ----- */
  function initReveal() {
    const items = $$(".reveal");
    const finish = (el) => el.classList.remove("reveal", "is-visible");

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      items.forEach(finish);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          observer.unobserve(el);
          el.classList.add("is-visible");
          // Once the entrance finishes, drop the reveal classes so hover
          // transitions are not slowed by the stagger delay.
          const onEnd = (e) => {
            if (e.target === el && e.propertyName === "opacity") {
              el.removeEventListener("transitionend", onEnd);
              finish(el);
            }
          };
          el.addEventListener("transitionend", onEnd);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    items.forEach((el) => observer.observe(el));
  }

  /* ----- Hero role typing ----- */
  function initRoleTyper() {
    const el = $("#role-text");
    const sr = $("#roles-sr");
    const roles = (profile.roles || []).filter(Boolean);
    if (!el || !roles.length) {
      const line = el && el.closest(".role-line");
      if (line) line.hidden = true;
      return;
    }
    if (sr) sr.textContent = `I'm a ${roles.join(", ")}.`;

    if (prefersReducedMotion() || roles.length === 1) {
      el.textContent = roles[0];
      const caret = $(".caret");
      if (caret) caret.hidden = true;
      return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer = 0;

    const tick = () => {
      const word = roles[roleIndex];
      let delay;
      if (!deleting) {
        charIndex += 1;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === word.length) {
          deleting = true;
          delay = 1600;
        } else {
          delay = 70;
        }
      } else {
        charIndex -= 1;
        el.textContent = word.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          delay = 320;
        } else {
          delay = 35;
        }
      }
      timer = window.setTimeout(tick, delay);
    };

    // Pause while the tab is in the background.
    document.addEventListener("visibilitychange", () => {
      window.clearTimeout(timer);
      if (!document.hidden) timer = window.setTimeout(tick, 300);
    });
    tick();
  }

  /* ----- Footer: year + back to top ----- */
  function initFooter() {
    const year = $("#year");
    if (year) year.textContent = String(new Date().getFullYear());

    const button = $("#back-to-top");
    if (button) {
      button.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
      });
    }
  }

  /* =====================================================================
     INIT
     ===================================================================== */
  let initialized = false;

  function init() {
    if (initialized) return; // prevents duplicate listeners
    initialized = true;

    applyAccent();
    applySeo();
    bindText();

    renderAvatar();
    renderSocials();
    renderAbout();
    renderSkills();
    renderProjects();
    renderTimelines();
    renderAchievements();
    renderContact();
    hideEmptySections();

    initTheme();
    initMenu();
    initFilters();
    initFooter();
    initRoleTyper();
    initNavTracking();

    refreshIcons();
    initReveal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
