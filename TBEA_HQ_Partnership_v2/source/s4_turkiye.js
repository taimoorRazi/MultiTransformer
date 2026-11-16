module.exports = async (ctx) => {
  const { L, C, p } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Why Türkiye now";
  const axis = { catAxisLabelColor: C.MUTED, valAxisLabelColor: C.MUTED, catAxisLabelFontFace: "Arial", valAxisLabelFontFace: "Arial",
    catAxisLabelFontSize: 11, valAxisLabelFontSize: 10, valGridLine: { color: "E3EAF2", size: 0.75 }, catGridLine: { style: "none" },
    dataLabelFontFace: "Arial", dataLabelFontSize: 11, dataLabelColor: C.INK, showLegend: false, catAxisLineShow: false, valAxisLineShow: false };

  // 18 — Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "tbea_substation.png", 8.2, 0, 5.133, 7.5);
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 35 });
  ctx.divider(s, "02", "Why Türkiye matters now", "Türkiye is entering a structural electricity and grid investment cycle — not a short boom.",
    "Demand · renewables · storage · transmission · data centers · industry");

  // 20 — Capacity & renewables path
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Generation capacity", title: "127 GW installed — and wind + solar must almost triple by 2035",
    sub: "Solar is now Türkiye's second-largest source. The 2035 target is 120 GW of wind and solar." });
  s.addChart(p.charts.BAR, [{ name: "GW", labels: ["Hydro", "Solar", "Natural gas", "Wind", "Domestic coal", "Imported coal", "Biomass", "Geothermal"],
    values: [32.3, 28.2, 25.0, 15.5, 11.6, 10.5, 2.4, 1.8] }],
  Object.assign({ x: MX, y: 1.8, w: 5.6, h: 4.85, barDir: "bar", barGapWidthPct: 45, chartColors: [C.MID, C.BLUE, C.MID, C.BLUE, C.MID, C.MID, C.MID, C.MID],
    showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0.0", valAxisHidden: true, valAxisMaxVal: 40, catAxisOrientation: "maxMin",
    showTitle: true, title: "Installed capacity by source, GW (end-September 2026)", titleFontFace: "Arial", titleFontSize: 12, titleColor: C.MUTED }, axis));
  s.addChart(p.charts.BAR, [{ name: "Wind + solar GW", labels: ["End-2025", "Sep 2026", "2035 target", "2040 plan"], values: [39.9, 43.8, 120, 175] }],
    Object.assign({ x: 6.6, y: 1.8, w: 6.13, h: 3.65, barDir: "col", barGapWidthPct: 50, chartColors: [C.BLUE, C.BLUE, C.NAVY, C.NAVY],
      showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0", valAxisHidden: true, valAxisMaxVal: 200,
      showTitle: true, title: "Wind + solar capacity, GW", titleFontFace: "Arial", titleFontSize: 12, titleColor: C.MUTED }, axis));
  rect(s, 6.6, 5.6, 6.13, 1.1, C.PALE, { rounded: true, r: 0.06 });
  T(s, [{ text: "8–10 GW per year ", options: { bold: true, color: C.BLUE } }, { text: "of new wind and solar is needed to reach 2035 — versus a record of about 6.5 GW in 2025. Every gigawatt needs step-up transformers, switchgear, cables and a grid connection." }],
    { x: 6.85, y: 5.6, w: 5.7, h: 1.1, fontSize: 12.5, valign: "middle" });
  ctx.src(s, "Sources: MENR monthly capacity data (end-Sep 2026) via AA / Endeks24; MENR 2035 target (Oct 2024); Ember Türkiye Electricity Review 2026; Milli Enerji 2040. Hydro includes dam and run-of-river.");

  // 21 — Transmission investment
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Grid investment", title: "The grid must grow as fast as generation",
    sub: "Official plans commit tens of billions of dollars to transmission and distribution networks." });
  const big = [["$28bn", "transmission investment planned to 2035"], ["15,000 km", "new AC transmission lines to 2035"], ["~9,580 km", "HVDC corridors planned (≈28 GW)"], ["$18.5bn", "distribution investment approved for 2026–2030 (TL 776bn)"]];
  big.forEach(([n, l], i) => {
    const x = MX + i * 3.08;
    rect(s, x, 1.85, 2.93, 1.55, i === 0 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.22, y: 1.98, w: 2.6, h: 0.62, fontSize: 28, bold: true, color: i === 0 ? C.WHITE : C.BLUE });
    T(s, l, { x: x + 0.22, y: 2.65, w: 2.55, h: 0.65, fontSize: 12, color: i === 0 ? C.ICE : C.MUTED });
  });
  s.addChart(p.charts.BAR, [{ name: "Today", labels: ["HV lines ('000 km)", "Transformer capacity (GW)"], values: [77, 200] }, { name: "2040 plan", labels: ["HV lines ('000 km)", "Transformer capacity (GW)"], values: [112, 316] }],
    Object.assign({ x: MX, y: 3.65, w: 6.2, h: 3.15, barDir: "col", barGapWidthPct: 60, chartColors: [C.MID, C.NAVY], showValue: true, dataLabelPosition: "outEnd",
      valAxisHidden: true, valAxisMaxVal: 370, showLegend: true, legendPos: "t", legendFontFace: "Arial", legendFontSize: 11, legendColor: C.MUTED }, axis, { showLegend: true }));
  rect(s, 7.05, 3.65, 5.68, 3.15, C.PALE, { rounded: true, r: 0.06 });
  T(s, "WHAT THIS MEANS FOR EQUIPMENT", { x: 7.3, y: 3.82, w: 5.2, h: 0.28, fontSize: 10, bold: true, color: C.BLUE, charSpacing: 2 });
  T(s, [{ text: "TEİAŞ operates 824 substations and 2,215 transmission transformers today", options: { bullet: true, breakLine: true } },
    { text: "Transformer capacity to rise by ~58% by 2040", options: { bullet: true, breakLine: true } },
    { text: "New 400/154 kV substations, GIS, underground cables and SCADA upgrades", options: { bullet: true, breakLine: true } },
    { text: "Türkiye's first HVDC corridors at specification stage (±525 kV, 2 GW design)", options: { bullet: true } }],
    { x: 7.3, y: 4.18, w: 5.25, h: 2.5, fontSize: 12.5, paraSpaceAfter: 6 });
  ctx.src(s, "Sources: Minister Bayraktar, 16 Sep 2026 (via AA); Milli Enerji 2040 (Nov 2026); MENR grid statistics 2025; EPDK 2026–2030 distribution tariff decision; TEİAŞ HVDC consultancy notice. Transformer capacity unit as reported.");

  // 24 — Summary: structural demand
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "So what", title: "Türkiye is creating structural demand for what TBEA makes", tb: true,
    sub: "Five demand engines — each one maps directly onto TBEA product families." });
  const eng = [["LuSun", "Renewables", "120 GW wind + solar by 2035", "Step-up & main transformers, MV/HV switchgear, cables, inverters"],
    ["LuBatteryCharging", "Storage", "33 GW licensed pipeline", "BESS, PCS, MV skids, transformers, EMS"],
    ["LuUtilityPole", "Transmission", "$28bn to 2035 · HVDC planned", "Power transformers, GIS, HV cables, protection & automation"],
    ["LuServer", "Data centers", "1 GW target by 2030", "HV/MV substations, transformers, MV/LV switchgear, power quality"],
    ["LuFactory", "Industry & OIZs", "218 OIZ distribution grids", "Complete substations, distribution transformers, SVG, automation"]];
  for (let i = 0; i < eng.length; i++) {
    const [ic, t, n, eq] = eng[i]; const x = MX + i * 2.45;
    rect(s, x, 1.9, 2.3, 3.95, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.7, 2.12, 0.9, C.WHITE, C.BLUE);
    T(s, t, { x: x + 0.15, y: 3.15, w: 2.0, h: 0.35, fontSize: 16, bold: true, align: "center" });
    T(s, n, { x: x + 0.15, y: 3.52, w: 2.0, h: 0.6, fontSize: 12, color: C.BLUE, bold: true, align: "center" });
    line(s, x + 0.4, 4.25, x + 1.9, 4.25, C.LINE, 1);
    T(s, "TBEA FIT", { x: x + 0.15, y: 4.4, w: 2.0, h: 0.25, fontSize: 9.5, bold: true, color: C.TB, align: "center", charSpacing: 2 });
    T(s, eq, { x: x + 0.15, y: 4.7, w: 2.0, h: 1.1, fontSize: 12, color: C.INK, align: "center" });
  }
  rect(s, MX, 6.05, 12.133, 0.75, C.NAVY, { rounded: true, r: 0.06 });
  T(s, [{ text: "But market size alone does not mean market access.  ", options: { bold: true, color: C.WHITE } }, { text: "The real question is which doors are open to a foreign manufacturer.", options: { color: C.ICE } }],
    { x: MX + 0.35, y: 6.05, w: 11.5, h: 0.75, fontSize: 14, valign: "middle" });
};
