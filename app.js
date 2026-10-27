(function () {
  const LANGS = ["en", "ru", "es"];
  const $ = (id) => document.getElementById(id);

  function storedLang() {
    try { return localStorage.getItem("lang"); } catch (e) { return null; }
  }

  function pickLang() {
    const fromUrl = new URLSearchParams(location.search).get("lang");
    if (LANGS.includes(fromUrl)) return fromUrl;
    const saved = storedLang();
    if (LANGS.includes(saved)) return saved;
    const browser = (navigator.language || "en").slice(0, 2);
    return LANGS.includes(browser) ? browser : "en";
  }

  function el(tag, attrs, html) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) node.setAttribute(k, v);
    if (html != null) node.innerHTML = html;
    return node;
  }

  function month(ym, lang) {
    const [y, m] = ym.split("-").map(Number);
    const name = new Date(y, m - 1, 1).toLocaleDateString(lang, { month: "short" }).replace(".", "");
    return `${name} ${y}`;
  }

  // Inclusive length of a job, e.g. "1 yr 5 mos"; an open-ended job runs to the current month.
  function duration(from, to, t, lang) {
    const [fy, fm] = from.split("-").map(Number);
    const now = new Date();
    const [ty, tm] = to ? to.split("-").map(Number) : [now.getFullYear(), now.getMonth() + 1];
    const total = (ty * 12 + tm) - (fy * 12 + fm) + 1;
    const y = Math.floor(total / 12);
    const m = total % 12;
    const plural = new Intl.PluralRules(lang);
    const part = (n, words) => `${n}\u00a0${words[plural.select(n)] || words.other}`;
    return [y && part(y, t.ui.years), m && part(m, t.ui.months)].filter(Boolean).join(" ");
  }

  function external(a, t) {
    a.target = "_blank";
    a.rel = "noopener";
    a.insertAdjacentHTML("beforeend", `<span class="visually-hidden"> (${t.ui.newTab})</span>`);
  }

  function list(items) {
    const ul = el("ul");
    items.forEach((t) => ul.append(el("li", null, t)));
    return ul;
  }

  const icon = (body, viewBox = "0 0 24 24") =>
    `<svg class="icon" viewBox="${viewBox}" aria-hidden="true" focusable="false">${body}</svg>`;

  const ICONS = {
    email: icon('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>'),
    telegram: icon('<path d="M21 4 3 11l6 2.5L11 20l3.5-4 4.5 3.5z"/><path d="m9 13.5 9-7"/>'),
    linkedin: icon('<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-7M12 13a3 3 0 0 1 6 0v4"/>'),
    github: icon('<path class="fill" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>', "0 0 16 16"),
    habr: icon('<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M9 7.5v9M15 7.5v9M9 12h6"/>'),
    channel: icon('<path d="M4 10v4h3l7 4.5v-13L7 10z"/><path d="M17.5 9a4 4 0 0 1 0 6M20 6.5a7.5 7.5 0 0 1 0 11"/>'),
  };

  function renderContacts(t) {
    // [href, visible text, full value shown in tooltip and print]
    const links = {
      email: CONTACTS.email && [`mailto:${CONTACTS.email}`, "e-mail", CONTACTS.email],
      telegram: CONTACTS.telegram && [`https://t.me/${CONTACTS.telegram}`, "Telegram", `@${CONTACTS.telegram}`],
      linkedin: CONTACTS.linkedin && [CONTACTS.linkedin, t.ui.linkedin],
      github: CONTACTS.github && [`https://github.com/${CONTACTS.github}`, "GitHub", `github.com/${CONTACTS.github}`],
      habr: CONTACTS.habr && [`https://habr.com/ru/users/${CONTACTS.habr}/articles/`, t.ui.habr],
      channel: CONTACTS.channel && [`https://t.me/${CONTACTS.channel}`, t.ui.channel, `t.me/${CONTACTS.channel}`],
    };
    const ul = $("contacts");
    ul.replaceChildren();
    for (const [key, link] of Object.entries(links)) {
      if (!link) continue;
      const [href, text, full] = link;
      const external = key !== "email";
      const label = `${t.ui[key]}: ${full || text}${external ? ` (${t.ui.newTab})` : ""}`;
      const a = el("a", { href, "aria-label": label }, `${ICONS[key]}<span class="label">${text}</span>`);
      if (full) a.title = full;
      if (external) { a.target = "_blank"; a.rel = "noopener"; }
      const li = el("li");
      li.append(a);
      ul.append(li);
    }
  }

  function renderJob(job, t, lang) {
    const text = t.jobs[job.id];
    const li = el("li", { class: job.thread ? "job thread" : "job" });
    li.append(el("span", { class: "gateway", "aria-hidden": "true" }));
    const to = job.to ? month(job.to, lang) : t.ui.present;
    li.append(el("p", { class: "period" }, `${month(job.from, lang)} – ${to}<span class="duration">${duration(job.from, job.to, t, lang)}</span>`));
    li.append(el("h3", null, text.company));
    li.append(el("p", { class: "title" }, text.title));
    li.append(el("p", { class: "about" }, text.about));
    // An empty site is a placeholder until the real URL is known.
    const site = el("a", { class: job.site ? "site" : "site placeholder", href: job.site || "#" }, t.ui.site);
    if (job.site) external(site, t);
    const siteLine = el("p", { class: "site-line" });
    siteLine.append(site);
    li.append(siteLine);
    li.append(el("p", { class: "stack" }, `<b>${t.ui.stack}:</b> ${job.stack}`));
    if (text.intro) li.append(el("p", { class: "intro" }, text.intro));
    if (text.bullets) li.append(list(text.bullets));
    (text.projects || []).forEach((p) => {
      const block = el("div", { class: "project" });
      block.append(el("h4", null, p.name));
      if (p.team) block.append(el("p", { class: "team" }, `${t.ui.team}: ${p.team}`));
      block.append(list(p.bullets));
      li.append(block);
    });
    return li;
  }

  function render(lang) {
    const t = CONTENT[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').content = t.meta.description;

    document.querySelectorAll("[data-lang]").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    $("pdf").textContent = t.ui.pdf;
    $("pdf").href = `resume-${lang}.pdf`;
    $("theme").setAttribute("aria-label", t.ui.theme);
    $("theme").title = t.ui.theme;
    $("skip").textContent = t.ui.skip;

    $("name").textContent = t.name;
    $("role").textContent = t.role;
    $("focus").textContent = t.focus;
    $("where").textContent = t.where;
    renderContacts(t);

    const summary = $("summary");
    $("h-summary").textContent = t.ui.summary;
    summary.querySelectorAll("p").forEach((p) => p.remove());
    t.summary.forEach((s) => summary.append(el("p", null, s)));

    $("h-exp").textContent = t.ui.experience;
    $("timeline").replaceChildren(...JOBS.map((j) => renderJob(j, t, lang)));

    $("h-skills").textContent = t.ui.skills;
    const skills = $("skills");
    skills.replaceChildren();
    for (const [key, label] of Object.entries(t.skills)) {
      skills.append(el("dt", null, label), el("dd", null, SKILLS_STACK[key]));
    }

    $("h-edu").textContent = t.ui.education;
    $("edu").textContent = t.education;
    $("h-langs").textContent = t.ui.languages;
    $("langs").replaceChildren(...t.languages.map(([name, level]) => el("li", null, `${name} <span>${level}</span>`)));

    $("h-cta").textContent = t.ui.ctaTitle;
    $("cta-text").textContent = t.ui.ctaText;
    $("cta-button").textContent = t.ui.ctaButton;
    $("cta-button").href = `mailto:${CONTACTS.email}`;
    $("updated").textContent = `${t.ui.updated}: ${month(UPDATED, lang)}`;
  }

  document.querySelectorAll("[data-lang]").forEach((b) => {
    b.addEventListener("click", () => {
      const lang = b.dataset.lang;
      try { localStorage.setItem("lang", lang); } catch (e) { /* storage unavailable */ }
      const url = new URL(location.href);
      url.searchParams.set("lang", lang);
      history.replaceState(null, "", url);
      render(lang);
    });
  });

  // The toggle flips whatever theme is showing now, including the system default.
  $("theme").addEventListener("click", () => {
    const root = document.documentElement;
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* storage unavailable */ }
  });

  // Page text is as wide as the name above it. The observer catches every change of the name's size:
  // a language switch, a late web font (each alphabet loads on demand), a window resize.
  function alignToName() {
    const width = $("name").getBoundingClientRect().width;
    document.documentElement.style.setProperty("--name-width", `${width}px`);
  }

  render(pickLang());
  alignToName();

  // Each alphabet is a separate font file that loads only when first used. Fetch them all now,
  // so switching language does not flash a fallback font.
  ["500 1em Unbounded", "400 1em 'Golos Text'", "400 1em 'JetBrains Mono'"].forEach((font) =>
    document.fonts.load(font, "Aa Яя Ññ").catch(() => {}));
  new ResizeObserver(alignToName).observe($("name"));
})();
