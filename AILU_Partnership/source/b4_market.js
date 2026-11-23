module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "The Turkish market";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "bg_pv_aerial.png", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "02", "The Turkish market", "Large industries — and an honest view of where imports compete.",
    "We studied cement, building chemicals, food, chemicals, PV and cosmetics before this meeting.");

  // Industrial base
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Demand", title: "A large industrial base that runs on packaging",
    sub: "Türkiye is a major producer and exporter in almost every sector AILU serves." });
  const st = [["LuBuilding2", "85–94 Mt", "cement produced in 2025, a record; about 16–19% of domestic sales are bagged"],
    ["LuPaintBucket", "Fast-growing", "dry-mix mortar and tile-adhesive sector, mostly in 25 kg sacks"],
    ["LuWheat", "No. 1", "world flour exporter (2.3 Mt in 2025); 30.7 Mt of animal feed"],
    ["LuFlaskConical", "6.5 Mt", "fertiliser consumption, plus a large chemicals and pigments industry"],
    ["LuSun", "13.4 GW", "PV module-making capacity — more than the EU-27 combined"],
    ["LuSparkles", "US$2.33bn", "cosmetics exports in 2025 (+11.8%); domestic market about US$3.3bn"]];
  for (const [i, [ic, n, l]] of st.entries()) {
    const x = MX + (i % 3) * 4.08, y = 1.9 + Math.floor(i / 3) * 2.45;
    rect(s, x, y, 3.92, 2.25, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.25, y + 0.25, 0.66, C.WHITE, C.BLUE);
    T(s, n, { x: x + 0.25, y: y + 1.0, w: 3.5, h: 0.5, fontSize: 24, bold: true, color: C.BLUE });
    T(s, l, { x: x + 0.25, y: y + 1.5, w: 3.5, h: 0.7, fontSize: 12, color: C.MUTED });
  }
  ctx.src(s, "Sources: TÜRKÇİMENTO; Turkish flour and feed industry associations; pv magazine (Aug 2026); Hürriyet Daily News (cosmetics). Figures rounded.");

  // Paper sacks: mature local industry
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Paper sacks", title: "Standard sacks: a mature, export-oriented local industry",
    sub: "Türkiye exports far more paper sacks than it imports — and the largest cement groups make their own." });
  s.addChart(ctx.p.charts.BAR, [{ name: "kt", labels: ["Exports (2023)", "Imports (2024)"], values: [73, 6] }],
    { x: MX, y: 1.8, w: 4.6, h: 3.9, barDir: "col", barGapWidthPct: 60, chartColors: [C.MID, C.TB], showValue: true, dataLabelPosition: "outEnd",
      dataLabelFormatCode: '0" kt"', valAxisHidden: true, valAxisMaxVal: 90, valAxisMinVal: 0, catAxisLabelColor: C.MUTED, catAxisLabelFontFace: "Arial", catAxisLabelFontSize: 12,
      valGridLine: { style: "none" }, dataLabelFontFace: "Arial", dataLabelFontSize: 14, dataLabelColor: C.INK, dataLabelFontBold: true, showLegend: false,
      showTitle: true, title: "Türkiye paper sacks and bags (HS 4819.40), thousand tonnes", titleFontFace: "Arial", titleFontSize: 11, titleColor: C.MUTED });
  const pts = [["Captive supply", "The largest cement group has its own kraft mill and sack plant (about 220m sacks/yr); another makes its own sacks"],
    ["Strong converters", "Several local and multinational converters, with capacity well above domestic demand"],
    ["Bulk dominates cement", "Only about 16–19% of domestic cement is sold in bags; exports ship in bulk"],
    ["Local, just-in-time", "Cement buyers report 85–97% local supplier spend and expect fast delivery"]];
  pts.forEach(([t, d], i) => {
    const y = 1.85 + i * 1.08;
    rect(s, 5.45, y, 7.28, 0.95, C.PALE, { rounded: true, r: 0.06 });
    T(s, t, { x: 5.65, y: y + 0.1, w: 6.9, h: 0.32, fontSize: 14, bold: true });
    T(s, d, { x: 5.65, y: y + 0.44, w: 6.9, h: 0.48, fontSize: 12, color: C.MUTED });
  });
  rect(s, 5.45, 6.2, 7.28, 0.6, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "Our view: standard 50 kg cement sacks are a local, price-driven business.", { x: 5.65, y: 6.2, w: 6.9, h: 0.6, fontSize: 14, bold: true, color: C.WHITE, valign: "middle" });
  ctx.src(s, "Sources: UN Comtrade via WITS (exports 2023); IndexBox (imports 2024); TÜRKÇİMENTO sector book; company sustainability reports.");

  // Specialty sacks
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Specialty sacks", title: "Where imports do compete: specialty and food-grade sacks", tb: true,
    sub: "Türkiye's sack imports are worth about 50% more per kilo than its exports — buyers import what local converters do not make well." });
  ctx.stat(s, "US$3.55/kg", "average value of Türkiye's paper-sack imports (2024)", MX, 1.85, 4.0, { color: C.TB, size: 32 });
  ctx.stat(s, "US$2.32/kg", "average value of Türkiye's paper-sack exports (2023)", MX, 3.2, 4.0, { color: C.MUTED, size: 32 });
  rect(s, MX, 4.75, 4.0, 1.95, C.TBL, { rounded: true, r: 0.06 });
  T(s, "AILU'S ADVANTAGES", { x: MX + 0.25, y: 4.88, w: 3.6, h: 0.28, fontSize: 10.5, bold: true, color: C.TB, charSpacing: 2 });
  T(s, [{ text: "BRCGS, ISO 22000, HACCP", options: { bullet: true, breakLine: true } }, { text: "Heat-seal, PE-lined, square-bottom formats", options: { bullet: true, breakLine: true } },
    { text: "References with Nestlé, Cargill, Wacker, Nippon Paint", options: { bullet: true } }], { x: MX + 0.25, y: 5.2, w: 3.6, h: 1.45, fontSize: 12, paraSpaceAfter: 4 });
  const seg = [["LuPaintBucket", "Building chemicals & dry mix", "25 kg PE-lined valve sacks, high-quality print", "Kalekim, Weber, Baumit, Sika, Mapei"],
    ["LuMilk", "Dairy & food ingredients", "Heat-seal, food-grade multi-wall sacks", "Milk powder, whey, starch, cocoa producers"],
    ["LuFlaskConical", "Chemicals & pigments", "Moisture-barrier sacks, clean filling", "Pigment, resin and mineral producers"],
    ["LuGlobe", "Multinational plants", "Group-approved global suppliers", "Plants of AILU's existing global customers"]];
  for (const [i, [ic, t, d, b]] of seg.entries()) {
    const y = 1.85 + i * 1.22;
    rect(s, 4.85, y, 7.88, 1.1, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, 5.03, y + 0.2, 0.68, C.WHITE, C.TB);
    T(s, t, { x: 5.9, y: y + 0.1, w: 3.2, h: 0.4, fontSize: 14, bold: true });
    T(s, d, { x: 5.9, y: y + 0.52, w: 3.3, h: 0.5, fontSize: 11.5, color: C.MUTED });
    T(s, b, { x: 9.35, y: y + 0.1, w: 3.25, h: 0.9, fontSize: 11.5, bold: true, color: C.TB, valign: "middle" });
  }
  ctx.src(s, "Sources: IndexBox (2024 imports); UN Comtrade via WITS (2023 exports); Ulusoy market review. Account names are examples of the segment, not contacts.");

  // PV frames
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "PV module frames", title: "PV frames: a new opening since June 2026", tb: true,
    sub: "Türkiye imposed anti-dumping duties on Chinese aluminium frames. Module makers need another solution." });
  const pv = [["38–46%", "definitive anti-dumping duty on Chinese aluminium PV frames, for 5 years (June 2026)"], ["~76%", "China's share of Türkiye's frame imports before the measure"],
    ["13.4 GW", "module capacity in Türkiye, mostly exported — increasingly to the US"], ["~14%", "share of module cost taken by the frame — the largest single item"]];
  pv.forEach(([n, l], i) => {
    const x = MX + i * 3.07;
    rect(s, x, 1.85, 2.9, 1.65, C.TBL, { rounded: true, r: 0.06 });
    ctx.stat(s, n, l, x + 0.2, 1.9, 2.55, { color: C.TB, size: 28, nh: 0.6, lsize: 11, lh: 0.85 });
  });
  const mk = [["Smart Solar", "2.4 GW"], ["Kalyon PV", "2.1 GW"], ["CW Enerji", "1.8 GW"], ["Kıvanç Enerji", "1.2 GW"], ["Schmid-Pekintaş", "1.2 GW"]];
  T(s, "LARGEST TURKISH MODULE MAKERS", { x: MX, y: 3.75, w: 6, h: 0.28, fontSize: 10.5, bold: true, color: C.MUTED, charSpacing: 2 });
  mk.forEach(([n, g], i) => {
    const y = 4.1 + i * 0.5;
    rect(s, MX, y, 5.6, 0.42, i % 2 ? C.WHITE : C.PALE);
    T(s, n, { x: MX + 0.2, y, w: 3.5, h: 0.42, fontSize: 13, bold: true, valign: "middle" });
    T(s, g, { x: MX + 3.9, y, w: 1.5, h: 0.42, fontSize: 13, color: C.BLUE, bold: true, align: "right", valign: "middle" });
  });
  rect(s, 6.55, 3.75, 6.18, 3.05, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "WHY COMPOSITE FRAMES FIT NOW", { x: 6.85, y: 3.92, w: 5.6, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  T(s, [{ text: "The duty names aluminium frames — a glass-fibre polyurethane frame is likely outside it (to be confirmed by a binding customs ruling)", options: { bullet: true, breakLine: true } },
    { text: "Lighter and corrosion-resistant: suited to rooftop, coastal and desert plants", options: { bullet: true, breakLine: true } },
    { text: "Module makers must re-certify modules with a new frame — certificates and test data decide", options: { bullet: true } }],
    { x: 6.85, y: 4.3, w: 5.65, h: 2.4, fontSize: 13, color: C.WHITE, paraSpaceAfter: 7 });
  ctx.src(s, "Sources: Türkiye Communiqué 2026/23 via Global Trade Alert and SolarQuarter; pv magazine (Aug 2026); SinoLink via pv magazine (frame cost share).");

  // Packing lines & cosmetics
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Packing systems · cosmetics", title: "Packing lines and cosmetic tubes: selective openings",
    sub: "Two smaller opportunities that build on AILU's REVOPAC and IKKO businesses." });
  const two = [["LuFactory", null, "PACKING & FILLING LINES (REVOPAC)", ["Cement, dry-mix, fertiliser and food plants are expanding and automating", "Buyers usually compare against European filling lines", "AILU can offer the sack and the filling line from one supplier"]],
    ["LuSparkles", null, "COSMETIC TUBES (IKKO)", ["Turkish cosmetics exports grew 11.8% in 2025", "Strong local bottle and jar makers — commodity items are hard to win", "Openings: premium laminated, PCR and sugar-cane tubes for exporting brands"]]];
  for (const [i, [ic, f, h, items]] of two.entries()) {
    const x = MX + i * 6.12;
    rect(s, x, 1.85, 5.95, 1.35, i ? C.NAVY : C.TB, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.3, 2.13, 0.8, C.WHITE, i ? C.NAVY : C.TB);
    T(s, h, { x: x + 1.35, y: 1.85, w: 4.4, h: 1.35, fontSize: 15, bold: true, color: C.WHITE, valign: "middle", charSpacing: 1 });
    rect(s, x, 3.3, 5.95, 3.5, C.PALE, { rounded: true, r: 0.06 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })), { x: x + 0.35, y: 3.55, w: 5.3, h: 3.1, fontSize: 15, paraSpaceAfter: 12 });
  }
  ctx.src(s, "Sources: Hürriyet Daily News (cosmetics exports 2025); Ulusoy market review.");

  // Trade rules
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Trade rules", title: "Trade rules to plan for — before the first quotation", tb: true,
    sub: "Türkiye applies extra duties and trade-defence measures to many imports from China. We will confirm each product with a customs broker." });
  const tr = [["LuStamp", "Customs duty", "Paper sacks 0%, plastic sacks 6.5%, woven sacks 7.2% (EU common tariff)"],
    ["LuBadgePercent", "Additional duty (İGV)", "Extra duty on many lines from countries without a trade agreement — rate to confirm per product"],
    ["LuTriangleAlert", "Trade defence", "Anti-dumping on Chinese BOPP film and aluminium PV frames; surveillance on sack kraft; safeguard probe on paper and board"],
    ["LuFileCheck", "Binding customs ruling", "Recommended for composite PV frames before the first shipment"],
    ["LuFlag", "Local-content rules", "State solar tenders and support schemes reward domestic components"],
    ["LuReceipt", "VAT", "20% on imports, recoverable by the importer"]];
  for (const [i, [ic, t, d]] of tr.entries()) {
    const x = MX + (i % 2) * 6.12, y = 1.9 + Math.floor(i / 2) * 1.55;
    rect(s, x, y, 5.95, 1.4, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.36, 0.68, C.WHITE, C.TB);
    T(s, t, { x: x + 1.1, y: y + 0.15, w: 4.65, h: 0.36, fontSize: 14, bold: true });
    T(s, d, { x: x + 1.1, y: y + 0.55, w: 4.65, h: 0.8, fontSize: 12, color: C.MUTED });
  }
  ctx.src(s, "Sources: Turkish customs tariff (CET); Official Gazette communiqués 2025–26 via trade-press summaries. Rates indicative until confirmed by a customs broker.");
};
