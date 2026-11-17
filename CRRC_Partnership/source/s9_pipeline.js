module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Türkiye pipeline · Competition";

  // Clusters
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Türkiye pipeline", title: "Where the Türkiye wind and storage opportunities cluster", tb: true,
    sub: "Six regional clusters — most of Türkiye's wind is in the west, with new zones inland and offshore." });
  img(s, "map_turkiye_wind.png", MX - 0.1, 1.75, 7.6, 3.8, { contain: true });
  const cl = [["Thrace & Marmara", "Kırklareli · Edirne · Tekirdağ", "Established wind region; capacity extensions and repowering"],
    ["Aegean core", "İzmir · Manisa · Balıkesir · Çanakkale", "Largest wind cluster; most YEKA RES-2026 zones (Balıkesir, Manisa)"],
    ["Eastern Mediterranean", "Hatay · Osmaniye · Adana", "Strong wind sites; industrial demand nearby"],
    ["Central-East", "Sivas · Kayseri", "New inland zones, e.g. Sivas 320 MW (YEKA RES-2026)"],
    ["Central Anatolia", "Konya · Karaman", "Large solar + storage; wind and hybrid projects"],
    ["Offshore (future)", "Saros · Gökçeada · Bozcaada", "First 1 GW offshore tender planned for 2027"]];
  cl.forEach(([n, r, d], i) => {
    const y = 1.8 + i * 0.84;
    circle(s, 8.3, y + 0.1, 0.42, C.NAVY);
    T(s, String(i + 1), { x: 8.3, y: y + 0.1, w: 0.42, h: 0.42, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, [{ text: n + "  ", options: { bold: true, color: C.INK, fontSize: 13 } }, { text: r, options: { color: C.MUTED, fontSize: 10 } }], { x: 8.88, y: y + 0.02, w: 3.95, h: 0.3 });
    T(s, d, { x: 8.88, y: y + 0.33, w: 3.9, h: 0.42, fontSize: 11, color: C.TB, bold: true });
  });
  rect(s, MX, 5.75, 7.4, 1.05, C.TBL, { rounded: true, r: 0.06 });
  T(s, [{ text: "Why clusters matter: ", options: { bold: true, color: C.TB } }, { text: "a few developers, EPCs and logistics routes recur across many wind projects in each region. One good reference opens several projects." }],
    { x: MX + 0.25, y: 5.75, w: 7.0, h: 1.05, fontSize: 12.5, valign: "middle" });
  ctx.src(s, "Sources: TÜREB regional data; MENR YEKA RES-2026 zones; offshore tender draft (Aug 2026). Clusters are indicative.");

  // Categories
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Türkiye pipeline", title: "Six opportunity categories we are developing", tb: true,
    sub: "Representative categories — named accounts are shared project by project once registration terms are agreed." });
  const cats = [["LuWind", "Private wind & capacity extensions", "Licensed wind IPPs", "Complete turbines, converters, nacelle transformers, service", "Now"],
    ["LuRepeat", "Repowering older wind farms", "Owners of pre-2012 wind farms", "Larger turbines replacing sub-3 MW units", "Now – 2 yrs"],
    ["LuBatteryCharging", "Storage-integrated wind & solar", "33 GW licence holders, EPCs", "BESS, PCS, MV stations, EMS", "Now"],
    ["LuSun", "Solar + hybrid solar at wind farms", "Developers, wind farm owners", "PV inverters, MV stations, BESS", "Now"],
    ["LuGavel", "YEKA wind (with local partners)", "YEKA winners and their EPCs", "Turbines with local towers, blades, nacelle assembly", "1 – 3 yrs"],
    ["LuFactory", "Green hydrogen & industry", "Industrial groups, OIZs, ports", "Electrolyser power supplies, BESS, substations", "2+ yrs"]];
  for (let i = 0; i < cats.length; i++) {
    const [ic, t, b, sc, tm] = cats[i]; const x = MX + (i % 3) * 4.08, y = 1.85 + Math.floor(i / 3) * 2.45;
    rect(s, x, y, 3.92, 2.28, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.2, 0.7, C.WHITE, C.TB);
    T(s, t, { x: x + 1.05, y: y + 0.18, w: 2.75, h: 0.72, fontSize: 13, bold: true, valign: "middle" });
    ctx.tag(s, tm, x + 2.6, y + 0.95, 1.15, C.TB, C.TBL, 9.5);
    T(s, "BUYER", { x: x + 0.22, y: y + 1.0, w: 2.2, h: 0.22, fontSize: 9, bold: true, color: C.MUTED, charSpacing: 1.5 });
    T(s, b, { x: x + 0.22, y: y + 1.28, w: 3.5, h: 0.3, fontSize: 11.5, color: C.INK });
    T(s, "CRRC SCOPE", { x: x + 0.22, y: y + 1.6, w: 2.2, h: 0.22, fontSize: 9, bold: true, color: C.MUTED, charSpacing: 1.5 });
    T(s, sc, { x: x + 0.22, y: y + 1.81, w: 3.55, h: 0.45, fontSize: 11, color: C.TB, bold: true });
  }
  ctx.src(s, "Source: Ulusoy market research and account development (2026). Timing indicates when the category can generate orders.");

  // Competitive landscape
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Competitive reality", title: "Strong incumbents — and Chinese peers already moving",
    sub: "European OEMs dominate and are localising fast. Several Chinese turbine makers have entered the region." });
  s.addChart(ctx.p.charts.BAR, [{ name: "Share", labels: ["Nordex", "Enercon", "GE", "Vestas", "Siemens Gamesa", "Goldwind"], values: [34, 24, 15, 15, 8, 2] }],
    { x: MX, y: 1.8, w: 4.6, h: 4.0, barDir: "bar", barGapWidthPct: 40, chartColors: [C.MID, C.MID, C.MID, C.MID, C.MID, C.TB], showValue: true, dataLabelPosition: "outEnd",
      dataLabelFormatCode: '0"%"', valAxisHidden: true, valAxisMaxVal: 42, catAxisOrientation: "maxMin", catAxisLabelColor: C.MUTED, catAxisLabelFontFace: "Arial", catAxisLabelFontSize: 11,
      valGridLine: { style: "none" }, catGridLine: { style: "none" }, dataLabelFontFace: "Arial", dataLabelFontSize: 11, dataLabelColor: C.INK, showLegend: false,
      showTitle: true, title: "Share of installed wind capacity in Türkiye", titleFontFace: "Arial", titleFontSize: 12, titleColor: C.MUTED });
  const grp = [["INCUMBENTS LOCALISING", C.NAVY, [["Nordex", "New İzmir blade plant (May 2026); record 525 MW order"], ["Enercon", "Own blade plant in Bergama; generators and towers from ATEŞ"]]],
    ["CHINESE PEERS IN THE REGION", C.TB, [["Goldwind", "1.2 GW+ installed and contracted in Türkiye; blade plant planned"], ["Envision", "232 MW Karaman (TR); 131 MW Štip (N. Macedonia)"], ["SANY", "168 MW Alibunar, Serbia (construction 2026)"]]]];
  let yy = 1.85;
  grp.forEach(([h, col, items]) => {
    rect(s, 5.55, yy, 7.18, 0.42, col, { rounded: true, r: 0.05 });
    T(s, h, { x: 5.75, y: yy, w: 6.8, h: 0.42, fontSize: 11, bold: true, color: C.WHITE, valign: "middle", charSpacing: 1.5 });
    yy += 0.5;
    items.forEach(([n, d]) => {
      rect(s, 5.55, yy, 7.18, 0.5, C.PALE, { rounded: true, r: 0.05 });
      T(s, n, { x: 5.75, y: yy, w: 1.5, h: 0.5, fontSize: 12.5, bold: true, valign: "middle" });
      T(s, d, { x: 7.25, y: yy, w: 5.4, h: 0.5, fontSize: 11, color: C.MUTED, valign: "middle" });
      yy += 0.56;
    });
    yy += 0.1;
  });
  rect(s, MX, 6.0, 12.133, 0.82, C.NAVY, { rounded: true, r: 0.06 });
  T(s, [{ text: "What this means: ", options: { bold: true, color: C.MID } }, { text: "Chinese turbines are accepted in the region, and a 2025 Turkish anti-dumping case on Chinese blades closed without duties. In EU markets (Bulgaria), the EU's foreign-subsidy review of Chinese turbine makers is a factor to manage.", options: { color: C.WHITE } }],
    { x: MX + 0.3, y: 6.0, w: 11.6, h: 0.82, fontSize: 12, valign: "middle" });
  ctx.src(s, "Sources: TÜREB market-share data; Nordex and Enercon announcements (2026); company and press reports on Goldwind, Envision, SANY; Turkish Trade Ministry (anti-dumping, Dec 2025); European Commission FSR (Feb 2026).");

  // What success requires
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Competitive reality", title: "What success in Türkiye requires", tb: true, sub: "Six conditions — and who is best placed to provide each one." });
  const req = [["LuCompass", "Correct segment selection", "Start with private, hybrid and storage-linked projects", "U"],
    ["LuHardHat", "Local partners", "EPCs, tower and blade makers, logistics — chosen with care", "U"],
    ["LuFileCheck", "Certification & bankability", "Type certificates, power curves, warranties lenders accept", "T"],
    ["LuTrophy", "References", "A first Turkish reference — our ongoing project — changes the conversation", "J"],
    ["LuWrench", "Service capability", "Local O&M team, spare parts, fast response", "J"],
    ["LuRadar", "Commercial intelligence", "Who buys, when, through whom — and at what price", "U"]];
  const own = { U: ["Ulusoy", C.NAVY], T: ["CRRC", C.TB], J: ["Joint", C.BLUE] };
  for (let i = 0; i < req.length; i++) {
    const [ic, t, d, o] = req[i]; const x = MX + (i % 3) * 4.08, y = 1.85 + Math.floor(i / 3) * 1.95;
    rect(s, x, y, 3.92, 1.8, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.22, 0.68, C.WHITE, C.TB);
    T(s, t, { x: x + 1.05, y: y + 0.2, w: 2.0, h: 0.6, fontSize: 13.5, bold: true, valign: "middle" });
    ctx.tag(s, own[o][0].toUpperCase(), x + 2.95, y + 0.36, 0.8, C.WHITE, own[o][1], 9.5);
    T(s, d, { x: x + 0.22, y: y + 1.0, w: 3.5, h: 0.72, fontSize: 11.5, color: C.MUTED });
  }
  rect(s, MX, 5.85, 12.133, 0.95, C.TB, { rounded: true, r: 0.06 });
  T(s, "These are the areas where we believe Ulusoy can contribute most, together with CRRC.", { x: MX + 0.35, y: 5.85, w: 11.5, h: 0.95, fontSize: 18, bold: true, color: C.WHITE, valign: "middle" });
};
