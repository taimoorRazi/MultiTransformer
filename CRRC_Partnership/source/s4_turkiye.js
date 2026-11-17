module.exports = async (ctx) => {
  const { L, C, p } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Why Türkiye now";
  const axis = { catAxisLabelColor: C.MUTED, valAxisLabelColor: C.MUTED, catAxisLabelFontFace: "Arial", valAxisLabelFontFace: "Arial",
    catAxisLabelFontSize: 11, valAxisLabelFontSize: 10, valGridLine: { color: "E3EAF2", size: 0.75 }, catGridLine: { style: "none" },
    dataLabelFontFace: "Arial", dataLabelFontSize: 11, dataLabelColor: C.INK, showLegend: false, catAxisLineShow: false, valAxisLineShow: false };

  // 18 — Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "crrc_pv_sunrise.png", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 55 });
  ctx.divider(s, "02", "Why Türkiye matters now", "Türkiye is entering a structural electricity and grid investment cycle — not a short boom.",
    "Demand · wind · solar · storage · grid · green hydrogen");

  // 19 — Demand
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Electricity demand", title: "Demand is at record levels — and set to almost double by 2040",
    sub: "Official national strategy (Milli Enerji 2040, presented 5 November 2026)." });
  s.addChart(p.charts.BAR, [{ name: "TWh", labels: ["2023", "2024", "2025", "2030 (plan)", "2035 (plan)", "2040 (target)"], values: [330.3, 347.9, 360.9, 455, 510, 680] }],
    Object.assign({ x: MX, y: 1.8, w: 7.3, h: 4.9, barDir: "col", barGapWidthPct: 55, chartColors: [C.BLUE, C.BLUE, C.BLUE, C.MID, C.MID, C.NAVY],
      showValue: true, dataLabelPosition: "outEnd", dataLabelFormatCode: "0", valAxisHidden: true, valAxisMinVal: 0, valAxisMaxVal: 760,
      showTitle: true, title: "Gross electricity consumption, TWh", titleFontFace: "Arial", titleFontSize: 12, titleColor: C.MUTED }, axis));
  const st = [["360.9 TWh", "record consumption in 2025"], ["59.5 GW", "record peak demand, July 2025"], ["680 TWh", "demand target for 2040 — about 1.9× today"], ["281 GW", "installed capacity planned for 2040, from 123 GW"]];
  st.forEach(([n, l], i) => {
    const y = 1.85 + i * 1.2;
    rect(s, 8.3, y, 4.43, 1.05, i === 2 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    T(s, n, { x: 8.55, y: y + 0.1, w: 3.9, h: 0.5, fontSize: 24, bold: true, color: i === 2 ? C.WHITE : C.BLUE });
    T(s, l, { x: 8.55, y: y + 0.6, w: 3.95, h: 0.38, fontSize: 12, color: i === 2 ? C.ICE : C.MUTED });
  });
  ctx.src(s, "Sources: Ministry of Energy and Natural Resources (MENR) data via AA / Hürriyet Daily News; Invest in Türkiye Energy Sector Report 2026; National Energy Plan (2030, 2035 values); Milli Enerji 2040 (Nov 2026).");

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
  T(s, [{ text: "8–10 GW per year ", options: { bold: true, color: C.BLUE } }, { text: "of new wind and solar is needed to reach 2035 — versus a record of about 6.5 GW in 2025. Every gigawatt needs turbines or inverters, and increasingly storage." }],
    { x: 6.85, y: 5.6, w: 5.7, h: 1.1, fontSize: 12.5, valign: "middle" });
  ctx.src(s, "Sources: MENR monthly capacity data (end-Sep 2026) via AA / Endeks24; MENR 2035 target (Oct 2024); Ember Türkiye Electricity Review 2026; Milli Enerji 2040. Hydro includes dam and run-of-river.");

  // Wind market
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Wind power", title: "Wind: a record year in 2025 — and 63 GW targeted by 2040",
    sub: "Türkiye was second in Europe for new wind in 2025. The 2040 strategy implies roughly 3 GW of new wind every year." });
  s.addChart(p.charts.BAR, [{ name: "GW", labels: ["2023", "2024", "2025", "2026 (forecast)"], values: [0.5, 1.3, 2.1, 2.5] }],
    Object.assign({ x: MX, y: 1.8, w: 3.9, h: 4.9, barDir: "col", barGapWidthPct: 45, chartColors: [C.MID, C.MID, C.BLUE, C.NAVY], showValue: true, dataLabelPosition: "outEnd",
      dataLabelFormatCode: "0.0", valAxisHidden: true, valAxisMaxVal: 3.0,
      showTitle: true, title: "New wind capacity per year, GW", titleFontFace: "Arial", titleFontSize: 12, titleColor: C.MUTED }, axis));
  s.addChart(p.charts.BAR, [{ name: "GW", labels: ["End-2025", "Sep 2026", "2040 plan"], values: [14.8, 15.5, 63] }],
    Object.assign({ x: 4.6, y: 1.8, w: 3.6, h: 4.9, barDir: "col", barGapWidthPct: 45, chartColors: [C.BLUE, C.BLUE, C.NAVY], showValue: true, dataLabelPosition: "outEnd",
      dataLabelFormatCode: "0.0", valAxisHidden: true, valAxisMaxVal: 72,
      showTitle: true, title: "Installed wind capacity, GW", titleFontFace: "Arial", titleFontSize: 12, titleColor: C.MUTED }, axis));
  [["1.5 GW", "YEKA RES-2026: 7 zones, 5 Turkish developers (Nov 2026)"], ["1 GW", "first offshore wind tender, planned for Q1 2027"], ["US$15bn", "China–Türkiye MoU (12 Nov 2026): 7 GW wind + solar, tied to local turbine production"]]
    .forEach(([n, l], i) => {
      const y = 1.85 + i * 1.62;
      rect(s, 8.5, y, 4.23, 1.45, i === 2 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
      T(s, n, { x: 8.75, y: y + 0.15, w: 3.8, h: 0.55, fontSize: 26, bold: true, color: i === 2 ? C.WHITE : C.BLUE });
      T(s, l, { x: 8.75, y: y + 0.72, w: 3.85, h: 0.68, fontSize: 11.5, color: i === 2 ? C.ICE : C.MUTED });
    });
  ctx.src(s, "Sources: TÜREB / GWEC / WindEurope (annual additions; 2024 estimates vary by method; 2026 = TÜREB forecast); MENR (installed); Milli Enerji 2040 (Nov 2026; incl. 6 GW offshore); AA / Enerdata (YEKA RES-2026); Daily Sabah (MoU, non-binding).");

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
  T(s, "WHY IT MATTERS FOR WIND AND SOLAR", { x: 7.3, y: 3.82, w: 5.2, h: 0.28, fontSize: 10, bold: true, color: C.BLUE, charSpacing: 2 });
  T(s, [{ text: "Grid capacity is the main limit on new wind and solar — new lines unlock new projects", options: { bullet: true, breakLine: true } },
    { text: "Transformer capacity to rise by ~58% by 2040", options: { bullet: true, breakLine: true } },
    { text: "Storage and hybrid plants make better use of existing connections", options: { bullet: true, breakLine: true } },
    { text: "HVDC corridors planned to move western wind to demand centres", options: { bullet: true } }],
    { x: 7.3, y: 4.18, w: 5.25, h: 2.5, fontSize: 12.5, paraSpaceAfter: 6 });
  ctx.src(s, "Sources: Minister Bayraktar, 16 Sep 2026 (via AA); Milli Enerji 2040 (Nov 2026); MENR grid statistics 2025; EPDK 2026–2030 distribution tariff decision; TEİAŞ HVDC consultancy notice. Transformer capacity unit as reported.");

  // 22 — Storage
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Energy storage", title: "Storage: a 33 GW licensed pipeline, barely started",
    sub: "Storage-integrated wind and solar licences require storage equal to the plant's capacity." });
  s.addChart(p.charts.BAR, [{ name: "GW", labels: ["Installed (Feb 2026)", "Expected to commission from 2026", "2035 national target", "Storage-linked licences"], values: [0.2, 2.5, 7.5, 33.5] }],
    Object.assign({ x: MX, y: 1.8, w: 7.0, h: 4.9, barDir: "bar", barGapWidthPct: 45, chartColors: [C.MID, C.MID, C.BLUE, C.NAVY], showValue: true, dataLabelPosition: "outEnd",
      dataLabelFormatCode: "0.0", valAxisHidden: true, valAxisMaxVal: 40, catAxisOrientation: "maxMin",
      showTitle: true, title: "Battery storage in Türkiye, GW", titleFontFace: "Arial", titleFontSize: 12, titleColor: C.MUTED }, axis));
  [["~33 GW", "storage-linked wind and solar licences — larger than any EU country's pipeline"], ["140 GWh", "battery storage targeted by 2040, plus 6 GW pumped hydro"], ["2026", "new EPDK storage rules: OIZ, consumer and unlicensed storage now allowed"]]
    .forEach(([n, l], i) => {
      const y = 1.85 + i * 1.62;
      rect(s, 7.95, y, 4.78, 1.45, i === 0 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
      T(s, n, { x: 8.2, y: y + 0.15, w: 4.3, h: 0.55, fontSize: 26, bold: true, color: i === 0 ? C.WHITE : C.BLUE });
      T(s, l, { x: 8.2, y: y + 0.72, w: 4.35, h: 0.65, fontSize: 12, color: i === 0 ? C.ICE : C.MUTED });
    });
  ctx.src(s, "Sources: Ember Türkiye Electricity Review 2026 (installed, pipeline); Minister Bayraktar statements (33.5 GW; 2–3 GW expected — forecast, shown as midpoint); National Energy Plan; Milli Enerji 2040; EPDK (Jan & Oct 2026).");

  // Summary: structural demand
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "So what", title: "Türkiye is creating structural demand for what CRRC makes", tb: true,
    sub: "Five demand engines — each one maps directly onto CRRC product families." });
  const eng = [["LuWind", "Wind", "15 → 63 GW by 2040", "Complete turbines, blades, drivetrains, converters, towers"],
    ["LuSun", "Solar", "26 → 112 GW by 2040", "String and central inverters, PV MV stations"],
    ["LuBatteryCharging", "Storage", "33 GW licensed · 140 GWh by 2040", "LFP battery systems, PCS, MV stations, EMS"],
    ["LuUtilityPole", "Grid & substations", "$28bn transmission to 2035", "Prefab substations ≤ 220 kV, switchgear, protection"],
    ["LuFactory", "Green hydrogen", "National hydrogen strategy", "Electrolyser power supplies (1–20 MW)"]];
  for (let i = 0; i < eng.length; i++) {
    const [ic, t, n, eq] = eng[i]; const x = MX + i * 2.45;
    rect(s, x, 1.9, 2.3, 3.95, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.7, 2.12, 0.9, C.WHITE, C.BLUE);
    T(s, t, { x: x + 0.15, y: 3.15, w: 2.0, h: 0.35, fontSize: 16, bold: true, align: "center" });
    T(s, n, { x: x + 0.15, y: 3.52, w: 2.0, h: 0.6, fontSize: 12, color: C.BLUE, bold: true, align: "center" });
    line(s, x + 0.4, 4.25, x + 1.9, 4.25, C.LINE, 1);
    T(s, "CRRC FIT", { x: x + 0.15, y: 4.4, w: 2.0, h: 0.25, fontSize: 9.5, bold: true, color: C.TB, align: "center", charSpacing: 2 });
    T(s, eq, { x: x + 0.15, y: 4.7, w: 2.0, h: 1.1, fontSize: 12, color: C.INK, align: "center" });
  }
  rect(s, MX, 6.05, 12.133, 0.75, C.NAVY, { rounded: true, r: 0.06 });
  T(s, [{ text: "But market size alone does not mean market access.  ", options: { bold: true, color: C.WHITE } }, { text: "The real question is which doors are open to a Chinese manufacturer.", options: { color: C.ICE } }],
    { x: MX + 0.35, y: 6.05, w: 11.5, h: 0.75, fontSize: 14, valign: "middle" });
};
