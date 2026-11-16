module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Where TBEA can enter";

  // 25 — Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "tbea_hv_disconnector.png", 8.2, 0, 5.133, 7.5, { fx: 0.4 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 30 });
  ctx.divider(s, "03", "Where TBEA can realistically enter", "Market size alone does not mean market access.",
    "We studied which doors are open to a foreign manufacturer — and which are not.");

  // 26 — Unequal doors
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Research finding", title: "The market is large — but the entry doors are unequal",
    sub: "Some segments are realistic for a foreign manufacturer; others are difficult. Our view on both." });
  // left: difficult
  rect(s, MX, 1.85, 4.55, 4.95, C.PALE, { rounded: true, r: 0.06 });
  await ctx.iconCircle(s, "LuLock", MX + 0.3, 2.05, 0.7, C.WHITE, C.MUTED);
  T(s, "HARDER FOR NEW ENTRANTS", { x: MX + 1.15, y: 2.12, w: 3.3, h: 0.28, fontSize: 11, bold: true, color: C.MUTED, charSpacing: 1.5 });
  T(s, "Protected or commoditised", { x: MX + 1.15, y: 2.4, w: 3.3, h: 0.3, fontSize: 14, bold: true });
  const hard = [["Commodity distribution equipment", "Strong, export-capable domestic producers; price-driven"],
    ["Ordinary public tenders", "Up to 15% price advantage for domestic goods"],
    ["Heavily localised categories", "Local-content rules and established utility suppliers"]];
  hard.forEach(([t, d], i) => {
    const y = 3.05 + i * 1.2;
    rect(s, MX + 0.3, y, 3.95, 1.02, C.WHITE, { rounded: true, r: 0.05 });
    T(s, t, { x: MX + 0.5, y: y + 0.12, w: 3.6, h: 0.3, fontSize: 13, bold: true, color: C.INK });
    T(s, d, { x: MX + 0.5, y: y + 0.45, w: 3.6, h: 0.5, fontSize: 11.5, color: C.MUTED });
  });
  // arrow
  line(s, 5.3, 4.3, 5.85, 4.3, C.BLUE, 3, { end: "triangle" });
  // right: open
  rect(s, 6.0, 1.85, 6.73, 4.95, C.NAVY, { rounded: true, r: 0.06 });
  await ctx.iconCircle(s, "LuKeyRound", 6.3, 2.05, 0.7, C.DEEP, C.WHITE);
  T(s, "MORE OPEN ROUTES", { x: 7.15, y: 2.12, w: 4, h: 0.28, fontSize: 11, bold: true, color: C.MID, charSpacing: 1.5 });
  T(s, "Private, IFI-financed or technically demanding", { x: 7.15, y: 2.4, w: 5.4, h: 0.3, fontSize: 14, bold: true, color: C.WHITE });
  const open = ["Private 154 kV connection substations", "World Bank / IFI transmission packages", "Renewable and storage grid connections", "Data-center electrical infrastructure",
    "Selected BESS balance-of-plant", "Components and supply cooperation", "Mobile and special substations", "HVDC positioning (longer term)"];
  open.forEach((t, i) => {
    const x = 6.3 + (i % 2) * 3.17, y = 3.05 + Math.floor(i / 2) * 0.9;
    rect(s, x, y, 3.0, 0.75, C.DEEP, { rounded: true, r: 0.05 });
    T(s, t, { x: x + 0.18, y, w: 2.7, h: 0.75, fontSize: 12.5, bold: true, color: C.WHITE, valign: "middle" });
  });
  ctx.src(s, "Sources: Ulusoy market research (2026); Public Procurement Regulation on domestic goods (yerli malı) price advantage; company disclosures.");

  // 27 — Attractiveness matrix
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Entry-route map", title: "Our view of the entry routes — for discussion",
    sub: "Qualitative positioning of segments for a foreign manufacturer working with a local partner." });
  const gx = 1.45, gy = 1.85, gw = 7.4, gh = 4.75;
  rect(s, gx + gw / 2, gy, gw / 2, gh / 2, C.TBL);
  rect(s, gx, gy, gw / 2, gh / 2, C.PALE); rect(s, gx, gy + gh / 2, gw / 2, gh / 2, C.PALE); rect(s, gx + gw / 2, gy + gh / 2, gw / 2, gh / 2, C.PALE);
  line(s, gx, gy + gh, gx + gw, gy + gh, C.MUTED, 1.25, { end: "triangle" });
  line(s, gx, gy + gh, gx, gy, C.MUTED, 1.25, { end: "triangle" });
  T(s, "Openness to a foreign manufacturer with a local partner  →", { x: gx, y: gy + gh + 0.08, w: gw, h: 0.28, fontSize: 11, color: C.MUTED, align: "center" });
  T(s, "Size and growth of demand  →", { x: 0.15, y: gy + gh / 2 - 0.15, w: 2.3, h: 0.3, fontSize: 11, color: C.MUTED, align: "center", rotate: 270 });
  T(s, "PRIORITY ENTRY ROUTES", { x: gx + gw / 2 + 0.15, y: gy + 0.1, w: 3.4, h: 0.25, fontSize: 10, bold: true, color: C.TB, charSpacing: 1.5 });
  T(s, "LARGE BUT PROTECTED", { x: gx + 0.15, y: gy + 0.1, w: 3.4, h: 0.25, fontSize: 10, bold: true, color: C.MUTED, charSpacing: 1.5 });
  T(s, "NICHE / OPPORTUNISTIC", { x: gx + gw / 2 + 0.15, y: gy + gh - 0.35, w: 3.4, h: 0.25, fontSize: 10, bold: true, color: C.MUTED, charSpacing: 1.5 });
  // bubbles: [label, x(0-1), y(0-1), size, color]
  const B = [["Private 154 kV renewable + storage connections", 0.80, 0.84, 0.62, C.TB], ["World Bank / IFI transmission packages", 0.72, 0.62, 0.52, C.TB],
    ["Data-center electrical infrastructure", 0.66, 0.73, 0.48, C.TB], ["BESS balance-of-plant", 0.52, 0.78, 0.44, C.BLUE],
    ["Components & supply cooperation", 0.80, 0.42, 0.38, C.BLUE], ["Mobile / special substations", 0.88, 0.2, 0.32, C.BLUE],
    ["HVDC (longer term)", 0.47, 0.88, 0.40, C.MID], ["Public tenders with domestic preference", 0.16, 0.80, 0.50, C.MUTED], ["Commodity distribution equipment", 0.22, 0.60, 0.50, C.MUTED]];
  B.forEach(([t, bx, by, d, col], i) => {
    const cx = gx + bx * gw, cy = gy + (1 - by) * gh;
    circle(s, cx - d / 2, cy - d / 2, d, col);
    T(s, String(i + 1), { x: cx - d / 2, y: cy - d / 2, w: d, h: d, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
  });
  // legend
  B.forEach(([t, , , , col], i) => {
    const y = 1.9 + i * 0.52;
    circle(s, 9.3, y + 0.04, 0.34, col);
    T(s, String(i + 1), { x: 9.3, y: y + 0.04, w: 0.34, h: 0.34, fontSize: 10.5, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, t, { x: 9.78, y, w: 3.0, h: 0.45, fontSize: 12, color: C.INK, valign: "middle", bold: i < 3 });
  });
  ctx.src(s, "Positioning is indicative and for discussion. It reflects Ulusoy market research on buyer type, procurement rules, domestic competition and demand outlook.");

  // 28 — Route 1: private 154 kV connection substations
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Priority route 1", title: "Private 154 kV connection substations for renewables and storage", tb: true,
    sub: "Every new wind, solar and hybrid-storage plant needs a substation to reach the TEİAŞ grid — usually procured privately." });
  // flow
  const fl = [["LuSun", "Wind / solar / storage plant", "33 kV collection"], ["LuZap", "Connection substation", "33/154 kV (or 400 kV)"], ["LuUtilityPole", "TEİAŞ grid", "154 / 400 kV"]];
  for (let i = 0; i < fl.length; i++) {
    const x = MX + i * 4.09;
    rect(s, x, 1.88, 3.6, 1.1, i === 1 ? C.TB : C.PALE, { rounded: true, r: 0.06 });
    await ctx.icon(s, fl[i][0], x + 0.2, 2.1, 0.62, i === 1 ? C.WHITE : C.BLUE);
    T(s, fl[i][1], { x: x + 1.0, y: 2.0, w: 2.5, h: 0.4, fontSize: 14, bold: true, color: i === 1 ? C.WHITE : C.INK });
    T(s, fl[i][2], { x: x + 1.0, y: 2.42, w: 2.5, h: 0.35, fontSize: 12, color: i === 1 ? "D5E3F6" : C.MUTED });
    if (i < 2) line(s, x + 3.62, 2.43, x + 4.07, 2.43, C.BLUE, 2.5, { end: "triangle" });
  }
  const cols3 = [["WHY THIS DOOR IS OPEN", [
      "Bought by developers, IPPs and their EPCs — not by public tender",
      "Buyers decide on price, delivery time, quality and service",
      "Volume driven by the 120 GW target and 33 GW storage pipeline",
      "Global transformer shortage: delivery slots matter"]],
    ["POTENTIAL TBEA SCOPE", [
      "154/33 kV and 400/154 kV power transformers",
      "170 kV-class GIS or AIS switchgear, CT/VT",
      "36 kV MV switchgear and auxiliary systems",
      "Protection, substation automation, SVG"]],
    ["WHAT IT TAKES", [
      "Equipment must meet TEİAŞ technical specifications",
      "Type tests, references and documentation in order",
      "EPC partners who install and commission",
      "Local after-sales and spare-parts response"]]];
  cols3.forEach(([h, items], i) => {
    const x = MX + i * 4.09;
    rect(s, x, 3.2, 3.95, 3.0, i === 1 ? C.TBL : C.PALE, { rounded: true, r: 0.06 });
    T(s, h, { x: x + 0.25, y: 3.35, w: 3.5, h: 0.28, fontSize: 10.5, bold: true, color: i === 1 ? C.TB : C.BLUE, charSpacing: 1.5 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })), { x: x + 0.25, y: 3.72, w: 3.5, h: 2.4, fontSize: 12.5, paraSpaceAfter: 6 });
  });
  rect(s, MX, 6.33, 12.133, 0.55, C.WHITE, { line: { color: C.TB, width: 1 }, rounded: true, r: 0.06 });
  T(s, [{ text: "Technical point to confirm together: ", options: { bold: true, color: C.TB } }, { text: "TBEA 170 kV-class GIS, CT/VT and 154 kV transformers against TEİAŞ specifications (Türkiye uses 154 kV)." }],
    { x: MX + 0.25, y: 6.33, w: 11.7, h: 0.55, fontSize: 12, valign: "middle" });
  ctx.src(s, "Sources: Ulusoy market research; MENR targets; Ember. TBEA scope reflects TBEA product families and is subject to TBEA technical confirmation.");

  // 29 — Route 2: World Bank / IFI
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Priority route 2", title: "World Bank and IFI-financed transmission packages", tb: true,
    sub: "International financing brings international competitive bidding — where TBEA's references count." });
  rect(s, MX, 1.85, 5.6, 4.95, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "WORLD BANK · P508354", { x: MX + 0.35, y: 2.05, w: 5, h: 0.28, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  T(s, "Transforming Power Transmission System Project", { x: MX + 0.35, y: 2.38, w: 5.0, h: 0.7, fontSize: 17, bold: true, color: C.WHITE });
  T(s, "~$748m", { x: MX + 0.35, y: 3.15, w: 2.6, h: 0.65, fontSize: 34, bold: true, color: C.WHITE });
  T(s, "€625m IBRD + Clean Technology Fund · approved Aug 2025 · signed with TEİAŞ Oct 2025", { x: MX + 2.75, y: 3.2, w: 2.6, h: 0.65, fontSize: 10.5, color: C.ICE });
  T(s, [{ text: "New and modernised high-voltage substations", options: { bullet: true, breakLine: true } },
    { text: "New transmission lines and underground cables", options: { bullet: true, breakLine: true } },
    { text: "SCADA / EMS upgrade and digitalisation", options: { bullet: true, breakLine: true } },
    { text: "Technical assistance for Türkiye's first HVDC corridors", options: { bullet: true } }],
    { x: MX + 0.35, y: 4.0, w: 5.0, h: 1.65, fontSize: 13, color: C.WHITE, paraSpaceAfter: 5 });
  rect(s, MX + 0.35, 5.8, 4.9, 0.78, C.DEEP, { rounded: true, r: 0.05 });
  T(s, "First phase of a $1.5bn programme; talks on up to $6bn of further grid financing reported.", { x: MX + 0.55, y: 5.8, w: 4.6, h: 0.78, fontSize: 12, color: C.WHITE, valign: "middle", bold: true });
  // right side
  const rr = [["LuFileCheck", "Different procurement rules", "World Bank-financed contracts follow World Bank Procurement Regulations — open international competitive bidding."],
    ["LuHistory", "A track record already exists", "The earlier Renewable Energy Integration Project (P169143, €289.5m additional financing) included GIS substations."],
    ["LuBadgeCheck", "References and qualification decide", "Bidder experience, type tests and financial strength are evaluated — areas where TBEA is strong."],
    ["LuHandshake", "Ulusoy's role", "Tender tracking, local partner and EPC alliances, documentation, site and logistics support."]];
  for (let i = 0; i < rr.length; i++) {
    const [ic, t, d] = rr[i]; const y = 1.85 + i * 1.25;
    rect(s, 6.45, y, 6.28, 1.12, i === 3 ? C.TBL : C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, L.dims && ic === "LuHistory" ? "LuClock" : ic, 6.65, y + 0.2, 0.7, C.WHITE, i === 3 ? C.TB : C.BLUE);
    T(s, t, { x: 7.55, y: y + 0.12, w: 5.0, h: 0.3, fontSize: 13.5, bold: true, color: i === 3 ? C.TB : C.INK });
    T(s, d, { x: 7.55, y: y + 0.44, w: 5.0, h: 0.62, fontSize: 11.5, color: C.MUTED });
  }
  ctx.src(s, "Sources: World Bank press release (4 Aug 2025) and project appraisal document P508354; TEİAŞ signing notice (Oct 2025); World Bank P169143; World Bank Procurement Regulations (7th ed., 2025). Margin of domestic preference applies only if stated in bidding documents.");
};
