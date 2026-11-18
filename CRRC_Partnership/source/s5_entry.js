module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Where CRRC can enter";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "crrc_turbine_green.png", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 35 });
  ctx.divider(s, "03", "Where CRRC can realistically enter", "Market size alone does not mean market access.",
    "We studied which doors are open to a Chinese wind, solar and storage manufacturer — and which are not.");

  // Unequal doors
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Research finding", title: "The market is large — but the entry doors are unequal",
    sub: "Some segments are realistic for a new turbine supplier today; others need local manufacturing first. Our view on both." });
  rect(s, MX, 1.85, 4.55, 4.95, C.PALE, { rounded: true, r: 0.06 });
  await ctx.iconCircle(s, "LuLock", MX + 0.3, 2.05, 0.7, C.WHITE, C.MUTED);
  T(s, "HARDER TODAY", { x: MX + 1.15, y: 2.12, w: 3.3, h: 0.28, fontSize: 11, bold: true, color: C.MUTED, charSpacing: 1.5 });
  T(s, "Local content or incumbency", { x: MX + 1.15, y: 2.4, w: 3.3, h: 0.3, fontSize: 14, bold: true });
  const hard = [["YEKA wind tenders", "At least 55 local-content points; domestic towers and blades certified"],
    ["Incentive-backed projects", "From 2026, domestic nacelle and generator also required"],
    ["Mainstream utility wind", "Incumbent OEMs with Turkish factories and service networks"]];
  hard.forEach(([t, d], i) => {
    const y = 3.05 + i * 1.2;
    rect(s, MX + 0.3, y, 3.95, 1.02, C.WHITE, { rounded: true, r: 0.05 });
    T(s, t, { x: MX + 0.5, y: y + 0.12, w: 3.6, h: 0.3, fontSize: 13, bold: true, color: C.INK });
    T(s, d, { x: MX + 0.5, y: y + 0.45, w: 3.6, h: 0.5, fontSize: 11.5, color: C.MUTED });
  });
  line(s, 5.3, 4.3, 5.85, 4.3, C.BLUE, 3, { end: "triangle" });
  rect(s, 6.0, 1.85, 6.73, 4.95, C.NAVY, { rounded: true, r: 0.06 });
  await ctx.iconCircle(s, "LuKeyRound", 6.3, 2.05, 0.7, C.DEEP, C.WHITE);
  T(s, "MORE OPEN ROUTES", { x: 7.15, y: 2.12, w: 4, h: 0.28, fontSize: 11, bold: true, color: C.MID, charSpacing: 1.5 });
  T(s, "Private, hybrid, storage-linked — or with local partners", { x: 7.15, y: 2.4, w: 5.4, h: 0.3, fontSize: 14, bold: true, color: C.WHITE });
  const open = ["Private wind projects and capacity extensions", "Storage-integrated wind and solar licences", "Hybrid solar at existing wind farms", "Repowering older turbines",
    "Solar inverters, BESS and PCS", "Balkan projects with our partners", "Local manufacturing with Turkish partners", "Offshore wind (longer term)"];
  open.forEach((t, i) => {
    const x = 6.3 + (i % 2) * 3.17, y = 3.05 + Math.floor(i / 2) * 0.9;
    rect(s, x, y, 3.0, 0.75, C.DEEP, { rounded: true, r: 0.05 });
    T(s, t, { x: x + 0.18, y, w: 2.7, h: 0.75, fontSize: 12.5, bold: true, color: C.WHITE, valign: "middle" });
  });
  ctx.src(s, "Sources: YEKA RES-2025/2026 specifications and amendments; investment incentive rules (2025–26); Ulusoy market research (2026).");

  // Matrix
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Entry-route map", title: "Our view of the entry routes — for discussion",
    sub: "Qualitative positioning of segments for a Chinese manufacturer working with a local partner." });
  const gx = 1.45, gy = 1.85, gw = 7.4, gh = 4.75;
  rect(s, gx + gw / 2, gy, gw / 2, gh / 2, C.TBL);
  rect(s, gx, gy, gw / 2, gh / 2, C.PALE); rect(s, gx, gy + gh / 2, gw / 2, gh / 2, C.PALE); rect(s, gx + gw / 2, gy + gh / 2, gw / 2, gh / 2, C.PALE);
  line(s, gx, gy + gh, gx + gw, gy + gh, C.MUTED, 1.25, { end: "triangle" });
  line(s, gx, gy + gh, gx, gy, C.MUTED, 1.25, { end: "triangle" });
  T(s, "Openness to a Chinese manufacturer with a local partner  →", { x: gx, y: gy + gh + 0.08, w: gw, h: 0.28, fontSize: 11, color: C.MUTED, align: "center" });
  T(s, "Size and growth of demand  →", { x: 0.15, y: gy + gh / 2 - 0.15, w: 2.3, h: 0.3, fontSize: 11, color: C.MUTED, align: "center", rotate: 270 });
  T(s, "PRIORITY ENTRY ROUTES", { x: gx + gw / 2 + 0.15, y: gy + 0.1, w: 3.4, h: 0.25, fontSize: 10, bold: true, color: C.TB, charSpacing: 1.5 });
  T(s, "LARGE BUT LOCALISED", { x: gx + 0.15, y: gy + 0.1, w: 3.4, h: 0.25, fontSize: 10, bold: true, color: C.MUTED, charSpacing: 1.5 });
  T(s, "NICHE / OPPORTUNISTIC", { x: gx + gw / 2 + 0.15, y: gy + gh - 0.35, w: 3.4, h: 0.25, fontSize: 10, bold: true, color: C.MUTED, charSpacing: 1.5 });
  const B = [["Private wind & capacity extensions", 0.76, 0.82, 0.62, C.TB], ["Storage-integrated licences (BESS)", 0.70, 0.66, 0.52, C.TB],
    ["Balkan partner projects", 0.86, 0.56, 0.48, C.TB], ["Solar inverters & BESS", 0.60, 0.74, 0.44, C.BLUE], ["Repowering older turbines", 0.80, 0.38, 0.40, C.BLUE],
    ["Hybrid solar at wind farms", 0.90, 0.22, 0.34, C.BLUE], ["Offshore wind (longer term)", 0.40, 0.90, 0.42, C.MID], ["YEKA wind tenders", 0.18, 0.84, 0.50, C.MUTED], ["Green hydrogen (early)", 0.30, 0.30, 0.36, C.MUTED]];
  B.forEach(([t, bx, by, d, col], i) => {
    const cx = gx + bx * gw, cy = gy + (1 - by) * gh;
    circle(s, cx - d / 2, cy - d / 2, d, col);
    T(s, String(i + 1), { x: cx - d / 2, y: cy - d / 2, w: d, h: d, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
  });
  B.forEach(([t, , , , col], i) => {
    const y = 1.9 + i * 0.52;
    circle(s, 9.3, y + 0.04, 0.34, col);
    T(s, String(i + 1), { x: 9.3, y: y + 0.04, w: 0.34, h: 0.34, fontSize: 10.5, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, t, { x: 9.78, y, w: 3.0, h: 0.45, fontSize: 12, color: C.INK, valign: "middle", bold: i < 3 });
  });
  ctx.src(s, "Positioning is indicative and for discussion. YEKA tenders become accessible with local tower, blade and nacelle partners.");

  // Route 1: private wind & capacity extensions
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Priority route 1", title: "Private wind projects and capacity extensions", tb: true,
    sub: "Licensed wind farms adding capacity, new private projects and repowering: the buyer chooses the turbine on price, delivery and bankability." });
  const fl = [["LuWind", "Licensed wind farm", "adds capacity or repowers"], ["LuCpu", "Turbine supply", "5–8.5 MW class"], ["LuUtilityPole", "Grid connection", "existing licence and capacity"]];
  for (let i = 0; i < fl.length; i++) {
    const x = MX + i * 4.09;
    rect(s, x, 1.88, 3.6, 1.1, i === 1 ? C.TB : C.PALE, { rounded: true, r: 0.06 });
    await ctx.icon(s, fl[i][0], x + 0.2, 2.1, 0.62, i === 1 ? C.WHITE : C.BLUE);
    T(s, fl[i][1], { x: x + 1.0, y: 2.0, w: 2.5, h: 0.4, fontSize: 14, bold: true, color: i === 1 ? C.WHITE : C.INK });
    T(s, fl[i][2], { x: x + 1.0, y: 2.42, w: 2.5, h: 0.35, fontSize: 12, color: i === 1 ? "F6C9D1" : C.MUTED });
    if (i < 2) line(s, x + 3.62, 2.43, x + 4.07, 2.43, C.BLUE, 2.5, { end: "triangle" });
  }
  const cols3 = [["WHY THIS DOOR IS OPEN", ["Private procurement outside YEKA: no mandatory local-content points", "Existing licences can add capacity (2023 rules)", "About 30% of wind capacity is turbines under 3 MW: repowering", "Owners want delivery slots and competitive pricing"]],
    ["POTENTIAL CRRC SCOPE", ["Complete turbines: 6.25 MW D175 and 7.15 MW D195 platforms", "Nacelle transformer, converter and controls", "Hybrid add-ons: PV inverters, BESS, PCS", "Long-term service and spare parts"]],
    ["WHAT IT TAKES", ["Bankability: type certificates, power curves, warranties", "Grid-code compliance and SCADA integration", "Local service team and spares stock", "Logistics for blades and towers"]]];
  cols3.forEach(([h, items], i) => {
    const x = MX + i * 4.09;
    rect(s, x, 3.2, 3.95, 3.0, i === 1 ? C.TBL : C.PALE, { rounded: true, r: 0.06 });
    T(s, h, { x: x + 0.25, y: 3.35, w: 3.5, h: 0.28, fontSize: 10.5, bold: true, color: i === 1 ? C.TB : C.BLUE, charSpacing: 1.5 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })), { x: x + 0.25, y: 3.72, w: 3.5, h: 2.4, fontSize: 12.5, paraSpaceAfter: 6 });
  });
  rect(s, MX, 6.33, 12.133, 0.55, C.WHITE, { line: { color: C.TB, width: 1 }, rounded: true, r: 0.06 });
  T(s, [{ text: "The first Turkish reference is the key: ", options: { bold: true, color: C.TB } }, { text: "one well-delivered project becomes the reference for every following private buyer." }],
    { x: MX + 0.25, y: 6.33, w: 11.7, h: 0.55, fontSize: 12, valign: "middle" });
  ctx.src(s, "Sources: Electricity Market Licence Regulation (Oct 2023 amendment); TÜREB/TWEA fleet survey (2025); CRRC (D175 first unit Jun 2026; D195 TÜV SÜD certified Sep 2026).");

  // Route 2: storage & solar
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Priority route 2", title: "Storage-integrated licences, hybrid solar and BESS", tb: true,
    sub: "Thousands of megawatts of licensed wind and solar projects must add storage — and CRRC already sells PV inverters in Türkiye." });
  rect(s, MX, 1.85, 5.6, 4.95, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "STORAGE-INTEGRATED LICENCES", { x: MX + 0.35, y: 2.05, w: 5, h: 0.28, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  T(s, "33.1 GW", { x: MX + 0.35, y: 2.4, w: 3, h: 0.75, fontSize: 40, bold: true, color: C.WHITE });
  T(s, "of pre-licences, including 263 wind projects; storage must equal plant capacity", { x: MX + 0.35, y: 3.15, w: 5.0, h: 0.6, fontSize: 12.5, color: C.ICE });
  T(s, "~0.2 GW", { x: MX + 0.35, y: 3.9, w: 3, h: 0.65, fontSize: 30, bold: true, color: C.WHITE });
  T(s, "built by February 2026 — most of the equipment demand is still ahead", { x: MX + 0.35, y: 4.55, w: 5.0, h: 0.6, fontSize: 12.5, color: C.ICE });
  rect(s, MX + 0.35, 5.5, 4.9, 1.05, C.DEEP, { rounded: true, r: 0.05 });
  T(s, "Plus about 1.4 GW of hybrid solar already built — two-thirds of it at wind farms — and new 2026 rules for storage at industrial and consumer sites.",
    { x: MX + 0.55, y: 5.5, w: 4.6, h: 1.05, fontSize: 11.5, color: C.WHITE, valign: "middle" });
  const rr = [["LuBatteryCharging", "CRRC's storage offer", "LFP battery systems, PCS, PCS + MV stations and EMS — one supplier for the whole storage block."],
    ["LuSun", "CRRC's solar offer", "String and central inverters and MV stations; CRRC inverters are already sold in Türkiye."],
    ["LuWind", "Wind + storage together", "For storage-integrated wind licences, one partner for turbines and storage reduces interfaces."],
    ["LuHandshake", "Ulusoy's role", "Licence holders, EPCs and their decision timing; offer coordination; local logistics and service."]];
  for (let i = 0; i < rr.length; i++) {
    const [ic, t, d] = rr[i]; const y = 1.85 + i * 1.25;
    rect(s, 6.45, y, 6.28, 1.12, i === 3 ? C.TBL : C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, 6.65, y + 0.2, 0.7, C.WHITE, i === 3 ? C.TB : C.BLUE);
    T(s, t, { x: 7.55, y: y + 0.12, w: 5.0, h: 0.3, fontSize: 13.5, bold: true, color: i === 3 ? C.TB : C.INK });
    T(s, d, { x: 7.55, y: y + 0.44, w: 5.0, h: 0.62, fontSize: 11.5, color: C.MUTED });
  }
  ctx.src(s, "Sources: EPDK pre-licence data; Ember (installed storage, Feb 2026; hybrid solar, 2025); EPDK storage rules (Jan & Oct 2026); CRRC (Türkiye inverter sales).");

  // Route 3: local manufacturing
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Strategic route 3", title: "Local manufacturing: the key to the largest segment", tb: true,
    sub: "YEKA tenders, incentives and offshore wind all reward local production — and a new China–Türkiye agreement points the same way." });
  const lm = [["55 points", "minimum local-content score for YEKA wind turbines; towers and blades ≥ 65% domestic"], ["2026", "incentive rules add domestic nacelle and generator requirements"],
    ["25%", "local content of total capex required in the first offshore tender (Q1 2027)"], ["US$15bn", "China–Türkiye MoU (12 Nov 2026) for 7 GW, tied to local turbine production"]];
  lm.forEach(([n, l], i) => {
    const x = MX + i * 3.08;
    rect(s, x, 1.85, 2.93, 1.75, i === 3 ? C.TB : C.PALE, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.22, y: 1.98, w: 2.6, h: 0.62, fontSize: 28, bold: true, color: i === 3 ? C.WHITE : C.TB });
    T(s, l, { x: x + 0.22, y: 2.65, w: 2.55, h: 0.88, fontSize: 11.5, color: i === 3 ? "F6C9D1" : C.MUTED });
  });
  img(s, "crrc_mng_ankara.png", MX, 3.85, 4.4, 2.95, { fy: 0.5 });
  T(s, "CRRC MNG plant near Ankara (rail)", { x: MX, y: 6.82, w: 4.4, h: 0.22, fontSize: 8.5, color: C.MUTED, italic: true });
  rect(s, 5.2, 3.85, 7.53, 2.95, C.PALE, { rounded: true, r: 0.06 });
  T(s, "CRRC HAS DONE THIS IN TÜRKIYE BEFORE", { x: 5.45, y: 4.0, w: 7, h: 0.28, fontSize: 10.5, bold: true, color: C.TB, charSpacing: 1.5 });
  T(s, [{ text: "The CRRC MNG plant near Ankara (2014, 108,000 m²) assembled metro cars locally, e.g. 176 cars for İstanbul's M11 line with about 60% local content", options: { bullet: true, breakLine: true } },
    { text: "More than 400 metro cars delivered for İstanbul, Ankara and İzmir", options: { bullet: true, breakLine: true } },
    { text: "A step-by-step route for wind: tower and blade sourcing with Turkish makers first, nacelle assembly when volume justifies it", options: { bullet: true, breakLine: true } },
    { text: "Ulusoy can help identify and structure the local partners", options: { bullet: true } }],
    { x: 5.45, y: 4.35, w: 7.1, h: 2.4, fontSize: 12.5, paraSpaceAfter: 5 });
  ctx.src(s, "Sources: YEKA RES specifications; incentive rules (2025–26); offshore tender draft (Aug 2026); Daily Sabah (MoU, non-binding, no companies named); CRRC; Railway Gazette.");
};
