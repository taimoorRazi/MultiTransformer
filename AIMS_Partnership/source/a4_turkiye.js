module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Türkiye's factory wave";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "tbea_trafo_factory.png", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "02", "Türkiye's factory wave", "New plants, new halls — and a push to automate.",
    "Türkiye's energy-equipment makers are expanding fast to serve the domestic grid, the Middle East, Europe and the US.");
  T(s, "Transformer production line (illustrative)", { x: 8.3, y: 7.08, w: 4.8, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // Transformers: exports and demand
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Transformers", title: "A fast-growing export industry with full order books",
    sub: "Turkish transformer makers sell at home, across the region and increasingly to the US." });
  s.addChart(ctx.p.charts.BAR, [{ name: "Exports", labels: ["2022", "2025"], values: [1.52, 2.71] }],
    { x: MX, y: 1.8, w: 4.4, h: 3.9, barDir: "col", barGapWidthPct: 60, chartColors: [C.MID, C.TB], showValue: true, dataLabelPosition: "outEnd",
      dataLabelFormatCode: '"$"0.00"bn"', valAxisHidden: true, valAxisMaxVal: 3.2, valAxisMinVal: 0, catAxisLabelColor: C.MUTED, catAxisLabelFontFace: "Arial", catAxisLabelFontSize: 13,
      valGridLine: { style: "none" }, dataLabelFontFace: "Arial", dataLabelFontSize: 14, dataLabelColor: C.INK, dataLabelFontBold: true, showLegend: false,
      showTitle: true, title: "Exports of transformers and converters (HS 8504), US$bn", titleFontFace: "Arial", titleFontSize: 11, titleColor: C.MUTED });
  T(s, "+78% in three years · +12.9% in 2025", { x: MX, y: 5.75, w: 4.4, h: 0.35, fontSize: 13, bold: true, color: C.TB, align: "center" });
  const dr = [["87%", "of the Middle East's transformer exports came from Türkiye in 2024 (about US$1.8bn)"],
    ["US$769m", "of US power-transformer orders signed by one Turkish maker in March 2026, for delivery to 2028"],
    ["US$28bn", "of transmission investment planned in Türkiye to 2035"],
    ["+58%", "transformer capacity needed on the Turkish grid by 2040"]];
  dr.forEach(([n, l], i) => {
    const y = 1.85 + i * 1.08;
    rect(s, 5.45, y, 7.28, 0.95, C.PALE, { rounded: true, r: 0.06 });
    T(s, n, { x: 5.65, y, w: 1.9, h: 0.95, fontSize: 24, bold: true, color: C.BLUE, valign: "middle" });
    T(s, l, { x: 7.6, y, w: 5.0, h: 0.95, fontSize: 13, color: C.INK, valign: "middle" });
  });
  rect(s, 5.45, 6.2, 7.28, 0.6, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "Growing order books mean one thing: more capacity, built faster.", { x: 5.65, y: 6.2, w: 6.9, h: 0.6, fontSize: 14, bold: true, color: C.WHITE, valign: "middle" });
  ctx.src(s, "Sources: trade data (HS 8504) via Corplox; IndexBox (2024); Astor Enerji KAP disclosure (Mar 2026); Energy Ministry (Sep 2026); Milli Enerji 2040 plan.");

  // New transformer plants
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Transformers", title: "New transformer plants are being built now", tb: true,
    sub: "More than US$500m of new transformer capacity has been announced or opened in Türkiye since 2025." });
  const hdr = ["Company", "Investment", "Location", "Status", "What it adds"];
  const rows = [["Astor Enerji", "US$150m", "Ankara (Sincan OSB)", "Construction; output from early 2027", "Power transformers: 32,000 → 100,000 MVA/yr"],
    ["Beta Enerji", "US$130m", "Adana", "First phase commissioned", "New production campus"],
    ["Europower", "US$100m", "Ankara", "Producing since H2 2025", "New power-transformer plant"],
    ["Hitachi Energy", "US$70m", "Dilovası (Kocaeli)", "Opened June 2026", "Power transformers: +70% capacity"],
    ["EKOS Elektrik", "US$50m", "Balıkesir OSB", "Groundbreaking May 2025", "40,000 m²; 2,000 transformers/yr"],
    ["STD Transformatör", "TRY 1.3bn", "Adana (Hacı Sabancı OSB)", "Phase 1 in 2026", "Two-phase plant; 105 → 450 jobs"]];
  const cw = [2.2, 1.45, 2.35, 2.85, 3.28];
  let x0 = MX; const ty = 1.85;
  hdr.forEach((h, j) => { rect(s, x0, ty, cw[j] - 0.04, 0.45, C.NAVY); T(s, h, { x: x0 + 0.12, y: ty, w: cw[j] - 0.2, h: 0.45, fontSize: 12, bold: true, color: C.WHITE, valign: "middle" }); x0 += cw[j]; });
  rows.forEach((r, i) => {
    let xx = MX; const y = ty + 0.5 + i * 0.6;
    r.forEach((c, j) => {
      rect(s, xx, y, cw[j] - 0.04, 0.55, i % 2 ? C.WHITE : C.PALE);
      T(s, c, { x: xx + 0.12, y, w: cw[j] - 0.2, h: 0.55, fontSize: j === 0 ? 12.5 : 11.5, bold: j === 0 || j === 1, color: j === 1 ? C.TB : C.INK, valign: "middle" });
      xx += cw[j];
    });
  });
  rect(s, MX, 6.05, 12.133, 0.75, C.TB, { rounded: true, r: 0.06 });
  T(s, "Every new hall is a chance to design automated storage and material flow in from day one — not add it later.",
    { x: MX + 0.3, y: 6.05, w: 11.6, h: 0.75, fontSize: 14.5, bold: true, color: C.WHITE, valign: "middle" });
  ctx.src(s, "Sources: company and KAP disclosures; Hitachi Energy (Jun 2026); Capital, Borsagündem, AA Enerji Terminali, Adana Haber, Ekonomi Gazetesi (2025–26). Public announcements, not a customer list.");

  // Beyond transformers
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Beyond transformers", title: "Batteries, solar and cars: the same wave in AIMS's other sectors",
    sub: "New plants in the sectors where AIMS already has references in China." });
  const sec = [["LuBatteryCharging", "Batteries & storage", [["33 GW", "storage pipeline, larger than any EU country's"], ["7.5 GWh", "LG Energy Solution–GO Enerji pack plant, Ankara (from 2.5 GWh)"], ["3 GWh", "Pomega cell capacity near Ankara"]], "Hyundai's new İzmit battery plant uses 27 robots, with no manual handling"],
    ["LuSun", "Solar modules", [["13.4 GW", "module manufacturing capacity, more than five European countries"], ["2.1 GW", "Kalyon PV cell capacity after a new 1.1 GW line (May 2026)"]], "Module and cell makers are adding capacity for export"],
    ["LuCar", "Automotive", [["US$41.5bn", "record automotive exports in 2025"], ["100k", "Togg capacity per year by end-2027 (60k planned in 2026)"]], "Automotive already has the highest robot density in Türkiye"]];
  for (const [i, [ic, t, kv, foot]] of sec.entries()) {
    const x = MX + i * 4.08;
    rect(s, x, 1.85, 3.92, 4.95, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.25, 2.05, 0.7, C.WHITE, C.BLUE);
    T(s, t, { x: x + 1.1, y: 2.05, w: 2.7, h: 0.7, fontSize: 17, bold: true, valign: "middle" });
    kv.forEach(([n, l], j) => {
      const y = 2.95 + j * 0.92;
      T(s, n, { x: x + 0.25, y, w: 3.5, h: 0.42, fontSize: 21, bold: true, color: C.BLUE });
      T(s, l, { x: x + 0.25, y: y + 0.42, w: 3.5, h: 0.48, fontSize: 11, color: C.MUTED });
    });
    rect(s, x, 5.85, 3.92, 0.95, C.NAVY, { rounded: true, r: 0.06 });
    T(s, foot, { x: x + 0.25, y: 5.85, w: 3.45, h: 0.95, fontSize: 12, bold: true, color: C.WHITE, valign: "middle" });
  }
  ctx.src(s, "Sources: Ember (2026); Electrive (Dec 2025, Jan 2026); Daily Sabah (2025–26); pv magazine (Aug 2026); Hürriyet Daily News. Plant start dates partly unconfirmed.");

  // Policy
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Government support", title: "The state is paying for high-tech factories and robots",
    sub: "Incentives, new industrial zones and foreign investment all point towards modern manufacturing." });
  const pol = [["US$30bn", "HIT-30 high-tech investment programme to 2030", "Includes a US$1bn industrial-robot call; target of 200,000 robots in use by 2030"],
    ["7,354", "investment incentive certificates in 2025", "TRY 1.3 trillion of planned investment; manufacturing leads with TRY 527bn"],
    ["416", "organised industrial zones (OSBs), 68,000+ factories", "16 new 'mega' industrial zones announced in January 2026"],
    ["US$13.1bn", "foreign direct investment in 2025 (+12%)", "31% went into manufacturing"]];
  pol.forEach(([n, a, b], i) => {
    const x = MX + (i % 2) * 6.12, y = 1.9 + Math.floor(i / 2) * 2.15;
    rect(s, x, y, 5.95, 1.95, C.PALE, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.3, y: y + 0.2, w: 5.4, h: 0.65, fontSize: 32, bold: true, color: C.BLUE });
    T(s, a, { x: x + 0.3, y: y + 0.88, w: 5.4, h: 0.36, fontSize: 14, bold: true });
    T(s, b, { x: x + 0.3, y: y + 1.27, w: 5.4, h: 0.6, fontSize: 12, color: C.MUTED });
  });
  rect(s, MX, 6.2, 12.133, 0.6, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "For customers, incentives lower the cost of automation projects — and make the business case easier to approve.",
    { x: MX + 0.3, y: 6.2, w: 11.6, h: 0.6, fontSize: 14, bold: true, color: C.WHITE, valign: "middle" });
  ctx.src(s, "Sources: UNCTAD Investment Policy Monitor (HIT-30); Milliyet (robot call; not seen in official text); Hürriyet Daily News (2025 certificates); OSBÜK via Steel Radar; Yeni Şafak / Daily Sabah (FDI).");

  // Why automation now
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Why automation now", title: "Low automation today, rising pressure to change", tb: true,
    sub: "Türkiye's factories outside automotive are still largely manual — while costs and customer demands rise." });
  s.addChart(ctx.p.charts.BAR, [{ name: "Robots per 10,000 workers", labels: ["Automotive", "All manufacturing", "Other industries"], values: [374, 52, 35] }],
    { x: MX, y: 1.8, w: 5.2, h: 3.6, barDir: "bar", barGapWidthPct: 45, chartColors: [C.MID, C.BLUE, C.TB], showValue: true, dataLabelPosition: "outEnd",
      valAxisHidden: true, valAxisMaxVal: 450, catAxisOrientation: "maxMin", catAxisLabelColor: C.INK, catAxisLabelFontFace: "Arial", catAxisLabelFontSize: 12,
      valGridLine: { style: "none" }, dataLabelFontFace: "Arial", dataLabelFontSize: 13, dataLabelColor: C.INK, dataLabelFontBold: true, showLegend: false,
      showTitle: true, title: "Industrial robots per 10,000 manufacturing workers, Türkiye (2025)", titleFontFace: "Arial", titleFontSize: 11, titleColor: C.MUTED });
  T(s, "59% of new robots in 2025 went to handling and machine tending — the work intralogistics automates.", { x: MX, y: 5.5, w: 5.2, h: 0.65, fontSize: 12.5, bold: true, color: C.TB });
  const pr = [["LuTrendingUp", "Labour costs", "Minimum wage up 27% in 2026, after years of high wage growth"],
    ["LuScale", "EU carbon rules", "The EU carbon border tax could cost Turkish exporters about €1.7bn in 2026 — data and efficiency matter"],
    ["LuGlobe", "Nearshoring", "82% of US and EU executives plan to reduce reliance on China; Türkiye is a natural alternative"],
    ["LuShieldCheck", "Export quality", "US and EU buyers expect traceability for every unit — easier with MES and WMS"]];
  for (const [i, [ic, t, d]] of pr.entries()) {
    const y = 1.85 + i * 1.12;
    rect(s, 6.15, y, 6.58, 1.0, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, 6.33, y + 0.16, 0.68, C.WHITE, C.TB);
    T(s, t, { x: 7.2, y: y + 0.1, w: 5.4, h: 0.32, fontSize: 14, bold: true });
    T(s, d, { x: 7.2, y: y + 0.44, w: 5.4, h: 0.52, fontSize: 11.5, color: C.MUTED });
  }
  rect(s, MX, 6.3, 12.133, 0.5, C.TBL, { rounded: true, r: 0.06 });
  T(s, "Türkiye's robot stock reached a record 30,990 in 2025 — but density is still far below its automotive sector.", { x: MX + 0.3, y: 6.3, w: 11.6, h: 0.5, fontSize: 13, bold: true, color: C.TBD, valign: "middle" });
  ctx.src(s, "Sources: IFR World Robotics 2026 via AA / Hürriyet Daily News; Daily Sabah (minimum wage); Fastmarkets (CBAM, estimates range €0.8–1.7bn); Capgemini (Jan 2025).");

  // So what
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "So what", title: "Türkiye is moving from manual to modern factories", tb: true,
    sub: "Three kinds of projects — each a fit for AIMS's whole-factory approach." });
  const op = [["LuBuilding2", "New plants", "Greenfield factories in transformers, batteries and solar", "Automation designed in from the first layout", C.NAVY],
    ["LuLayers", "New halls and expansions", "Capacity added next to running production", "Storage, line-side supply and heavy-part flow for the new line", C.BLUE],
    ["LuSettings", "Plant upgrades", "Manual warehouses and crane-based flow", "Automated storage, MES traceability, AGVs and RGVs", C.TB]];
  for (const [i, [ic, t, a, b, col]] of op.entries()) {
    const x = MX + i * 4.08;
    rect(s, x, 1.85, 3.92, 3.9, col, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.3, 2.1, 0.8, C.WHITE, col);
    T(s, t, { x: x + 0.3, y: 3.1, w: 3.4, h: 0.5, fontSize: 19, bold: true, color: C.WHITE });
    T(s, a, { x: x + 0.3, y: 3.65, w: 3.4, h: 0.7, fontSize: 13, color: "DCE6F0" });
    line(s, x + 0.3, 4.45, x + 3.6, 4.45, "FFFFFF", 0.75);
    T(s, "AIMS + ULUSOY", { x: x + 0.3, y: 4.6, w: 3.4, h: 0.28, fontSize: 10, bold: true, color: "DCE6F0", charSpacing: 1.5 });
    T(s, b, { x: x + 0.3, y: 4.9, w: 3.4, h: 0.75, fontSize: 13.5, bold: true, color: C.WHITE });
  }
  rect(s, MX, 6.0, 12.133, 0.8, C.PALE, { rounded: true, r: 0.06 });
  T(s, "The question is no longer whether Turkish factories will automate — it is who designs it with them.",
    { x: MX + 0.3, y: 6.0, w: 11.6, h: 0.8, fontSize: 16, bold: true, color: C.DEEP, valign: "middle" });
};
