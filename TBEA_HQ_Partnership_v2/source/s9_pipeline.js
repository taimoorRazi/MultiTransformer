module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Türkiye pipeline · Competition";

  // 45 — Türkiye opportunity clusters
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Türkiye pipeline", title: "Where the Türkiye opportunities cluster", tb: true,
    sub: "Six regional clusters where Ulusoy is building the pipeline — each with a different buyer and product need." });
  img(s, "map_turkiye.png", MX - 0.1, 1.75, 7.6, 3.8, { contain: true });
  const cl = [["Marmara", "İstanbul · Kocaeli · Bursa", "Industrial OIZ substations, data centers, urban GIS"],
    ["Ankara", "Başkent OIZ and capital region", "Data-center campuses, public and TEİAŞ projects"],
    ["Aegean", "İzmir · Manisa · Balıkesir · Çanakkale", "Wind + storage connection substations"],
    ["Central Anatolia", "Konya · Karaman", "Large solar + storage, 154/400 kV connections"],
    ["South-East", "Şanlıurfa · Gaziantep", "Solar zones, grid reinforcement, industrial zones"],
    ["Thrace", "Tekirdağ · Kırklareli · Edirne", "Industry (Çerkezköy) and links to Bulgaria / Greece"]];
  cl.forEach(([n, r, d], i) => {
    const y = 1.8 + i * 0.84;
    circle(s, 8.3, y + 0.1, 0.42, C.NAVY);
    T(s, String(i + 1), { x: 8.3, y: y + 0.1, w: 0.42, h: 0.42, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, [{ text: n + "  ", options: { bold: true, color: C.INK, fontSize: 13 } }, { text: r, options: { color: C.MUTED, fontSize: 10.5 } }], { x: 8.88, y: y + 0.02, w: 3.9, h: 0.3 });
    T(s, d, { x: 8.88, y: y + 0.33, w: 3.9, h: 0.42, fontSize: 11.5, color: C.TB, bold: true });
  });
  rect(s, MX, 5.75, 7.4, 1.05, C.TBL, { rounded: true, r: 0.06 });
  T(s, [{ text: "Why clusters matter: ", options: { bold: true, color: C.TB } }, { text: "a few EPCs, developers and industrial groups recur across many projects in each region. Winning one relationship opens several projects." }],
    { x: MX + 0.25, y: 5.75, w: 7.0, h: 1.05, fontSize: 12.5, valign: "middle" });
  ctx.src(s, "Source: Ulusoy market research (2026); MENR YEKA zones; public data-center announcements. Clusters are indicative.");

  // 46 — Pipeline categories
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Türkiye pipeline", title: "Six opportunity categories we are developing", tb: true,
    sub: "Representative categories — named accounts are shared project by project once registration terms are agreed." });
  const cats = [["LuSun", "Renewable + storage connection substations", "Developers, IPPs, EPCs", "Transformers, GIS/AIS, MV switchgear, protection", "Now"],
    ["LuServer", "Ankara data-center electrical infrastructure", "Data-center developers and their EPCs", "HV/MV substations, transformers, MV/LV switchgear, power quality", "Now – 2 yrs"],
    ["LuFactory", "Industrial and OIZ substations", "OIZ managements, industrial groups", "154/33 kV substations, distribution transformers, SVG, automation", "Now"],
    ["LuUtilityPole", "World Bank / TEİAŞ transmission packages", "TEİAŞ via international bidding", "Substations, GIS, power transformers, cables, SCADA", "1 – 2 yrs"],
    ["LuCable", "HVDC and large-grid investment", "TEİAŞ and its EPC consortia", "Converter transformers, HV cables, GIS, reactors", "3+ yrs"],
    ["LuBoxes", "Components and technology supply", "Turkish manufacturers and panel builders", "Bushings, transformer components, MV parts, cables", "Now"]];
  for (let i = 0; i < cats.length; i++) {
    const [ic, t, b, sc, tm] = cats[i]; const x = MX + (i % 3) * 4.08, y = 1.85 + Math.floor(i / 3) * 2.45;
    rect(s, x, y, 3.92, 2.28, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.2, 0.7, C.WHITE, C.TB);
    T(s, t, { x: x + 1.05, y: y + 0.18, w: 2.75, h: 0.72, fontSize: 13, bold: true, valign: "middle" });
    ctx.tag(s, tm, x + 2.6, y + 0.95, 1.15, C.TB, C.TBL, 9.5);
    T(s, "BUYER", { x: x + 0.22, y: y + 1.0, w: 2.2, h: 0.22, fontSize: 9, bold: true, color: C.MUTED, charSpacing: 1.5 });
    T(s, b, { x: x + 0.22, y: y + 1.28, w: 3.5, h: 0.3, fontSize: 11.5, color: C.INK });
    T(s, "TBEA SCOPE", { x: x + 0.22, y: y + 1.6, w: 2.2, h: 0.22, fontSize: 9, bold: true, color: C.MUTED, charSpacing: 1.5 });
    T(s, sc, { x: x + 0.22, y: y + 1.81, w: 3.55, h: 0.45, fontSize: 11, color: C.TB, bold: true });
  }
  ctx.src(s, "Source: Ulusoy market research and account development (2026). Timing indicates when the category can generate tenders.");

  // 47 — Competitive landscape
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Competitive reality", title: "Türkiye already has strong, export-capable competitors",
    sub: "A competitive market: entry needs the right segments, partners and qualification." });
  const grp = [["TURKISH MANUFACTURERS", C.NAVY, [["Astor Enerji", "Transformers & switchgear · ~$1.84bn order backlog, mostly export"], ["Europower Enerji", "Transformers · new ~$100m transformer factory"],
      ["BEST", "Power transformers up to 1,250 MVA / 765 kV"], ["EKOS", "Transformers & compact substations · exports to 38+ countries"], ["Kontrolmatik / Pomega", "BESS and LFP cell plant (~3 GWh)"]]],
    ["GLOBAL OEMs WITH LOCAL PLANTS", C.DEEP, [["Hitachi Energy", "New Dilovası power-transformer factory (June 2026)"], ["Siemens", "LV/MV switchgear manufacturing in Gebze"], ["Other multinationals", "Local sales, service and selected assembly"]]],
    ["IMPORTERS", C.BLUE, [["Chinese and other manufacturers", "Compete mainly on price in private projects, often without local service"]]]];
  grp.forEach(([h, col, items], gi) => {
    const x = MX + gi * 4.08;
    rect(s, x, 1.85, 3.92, 0.5, col, { rounded: true, r: 0.05 });
    T(s, h, { x: x + 0.2, y: 1.85, w: 3.6, h: 0.5, fontSize: 11, bold: true, color: C.WHITE, valign: "middle", charSpacing: 1.5 });
    items.forEach(([n, d], i) => {
      const y = 2.45 + i * 0.8;
      rect(s, x, y, 3.92, 0.72, C.PALE, { rounded: true, r: 0.05 });
      T(s, n, { x: x + 0.2, y: y + 0.06, w: 3.6, h: 0.28, fontSize: 12.5, bold: true });
      T(s, d, { x: x + 0.2, y: y + 0.33, w: 3.6, h: 0.36, fontSize: 10.5, color: C.MUTED });
    });
  });
  rect(s, MX + 4.08, 5.0, 8.05, 1.8, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "WHAT THIS MEANS", { x: MX + 4.35, y: 5.15, w: 4, h: 0.28, fontSize: 10.5, bold: true, color: C.MID, charSpacing: 2 });
  T(s, [{ text: "Local champions win public tenders with domestic preference — we should not fight them there first.", options: { bullet: true, breakLine: true } },
    { text: "Global transformer demand keeps local factories full: delivery slots and capacity are real openings.", options: { bullet: true, breakLine: true } },
    { text: "Price alone does not win: references, qualification and local service do.", options: { bullet: true } }],
    { x: MX + 4.35, y: 5.48, w: 7.6, h: 1.3, fontSize: 12.5, color: C.WHITE, paraSpaceAfter: 4 });
  ctx.src(s, "Sources: company disclosures and KAP filings (Astor 9M 2026, Europower FY2025); Hitachi Energy (June 2026); Invest in Türkiye; trade press. Not exhaustive.");

  // 48 — What success requires
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Competitive reality", title: "What success in Türkiye requires", tb: true, sub: "Six conditions — and who is best placed to provide each one." });
  const req = [["LuCompass", "Correct segment selection", "Start where the door is open: private, IFI-financed, technically demanding", "U"],
    ["LuHardHat", "Local EPC alliances", "Turkish EPCs install, commission and often choose the equipment", "U"],
    ["LuFileCheck", "Qualification", "TEİAŞ specifications, type tests, IEC certificates, documentation", "T"],
    ["LuTrophy", "References", "Regional references first; a first Turkish reference matters greatly", "J"],
    ["LuWrench", "Service capability", "Local engineering, spares and fast response after delivery", "J"],
    ["LuRadar", "Commercial intelligence", "Who buys, when, through whom — and at what price", "U"]];
  const own = { U: ["Ulusoy", C.NAVY], T: ["TBEA", C.TB], J: ["Joint", C.BLUE] };
  for (let i = 0; i < req.length; i++) {
    const [ic, t, d, o] = req[i]; const x = MX + (i % 3) * 4.08, y = 1.85 + Math.floor(i / 3) * 1.95;
    rect(s, x, y, 3.92, 1.8, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.22, 0.68, C.WHITE, C.TB);
    T(s, t, { x: x + 1.05, y: y + 0.2, w: 2.0, h: 0.6, fontSize: 13.5, bold: true, valign: "middle" });
    ctx.tag(s, own[o][0].toUpperCase(), x + 2.95, y + 0.36, 0.8, C.WHITE, own[o][1], 9.5);
    T(s, d, { x: x + 0.22, y: y + 1.0, w: 3.5, h: 0.72, fontSize: 11.5, color: C.MUTED });
  }
  rect(s, MX, 5.85, 12.133, 0.95, C.TB, { rounded: true, r: 0.06 });
  T(s, "These are the areas where we believe Ulusoy can contribute most, together with TBEA.", { x: MX + 0.35, y: 5.85, w: 11.5, h: 0.95, fontSize: 18, bold: true, color: C.WHITE, valign: "middle" });
};
