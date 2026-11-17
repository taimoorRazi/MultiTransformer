module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Regional platform";

  // 16 — Regional platform map
  let s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "The regional platform", title: "Between Chinese industrial capability and regional demand",
    sub: "This operating history created relationships and capabilities. Today we apply the same platform to energy and industrial technology." });
  img(s, "map_platform_crrc.png", MX, 1.72, 12.133, 4.15, { contain: true });
  const ch = [["Türkiye", "Home market — 89 years of relationships, the group's base and largest opportunity"],
    ["Balkans · SE Europe", "Wind projects in North Macedonia; solar and storage in Bulgaria"],
    ["Middle East", "Long trade relationships; an off-grid solar + storage opportunity"],
    ["Central Asia · Caucasus", "Future extension, where projects justify it"]];
  ch.forEach(([t, d], i) => {
    const x = MX + i * 3.08;
    rect(s, x, 5.95, 2.93, 0.95, i === 0 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    T(s, t, { x: x + 0.18, y: 6.02, w: 2.6, h: 0.28, fontSize: 12.5, bold: true, color: i === 0 ? C.WHITE : C.INK });
    T(s, d, { x: x + 0.18, y: 6.3, w: 2.65, h: 0.58, fontSize: 10.5, color: i === 0 ? C.ICE : C.MUTED });
  });

  // 17 — The local commercial layer
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What Ulusoy contributes", title: "How a local partner can support CRRC in the region",
    sub: "One commercial system between CRRC's factories and the customers who buy in Türkiye and the region." });
  // CRRC box
  rect(s, 3.4, 1.8, 6.53, 0.78, C.TB, { rounded: true, r: 0.06 });
  T(s, [{ text: "CRRC  ", options: { bold: true, fontSize: 18 } }, { text: "turbines · solar · storage · engineering · references · financing", options: { fontSize: 13 } }],
    { x: 3.4, y: 1.8, w: 6.53, h: 0.78, color: C.WHITE, align: "center", valign: "middle" });
  // arrows
  const arrowDown = (x, y1, y2) => line(s, x, y1, x, y2, C.MID, 2.5, { end: "triangle" });
  const arrowUp = (x, y1, y2) => line(s, x, y1, x, y2, C.MID, 2.5, { begin: "triangle" });
  arrowDown(6.3, 2.62, 3.0); arrowUp(7.03, 2.62, 3.0);
  // Ulusoy layer
  rect(s, MX, 3.05, 12.133, 1.95, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ULUSOY — LOCAL COMMERCIAL LAYER", { x: MX + 0.3, y: 3.15, w: 6, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  const fn = ["Market intelligence", "Project origination", "Senior customer access", "EPC relationships", "Commercial development",
    "Tender intelligence", "Technical-commercial coordination", "Financing coordination", "Local implementation support", "Customer relationship management"];
  fn.forEach((f, i) => {
    const x = MX + 0.3 + (i % 5) * 2.33, y = 3.55 + Math.floor(i / 5) * 0.68;
    rect(s, x, y, 2.18, 0.56, C.DEEP, { rounded: true, r: 0.06 });
    T(s, f, { x: x + 0.08, y, w: 2.02, h: 0.56, fontSize: 11.5, bold: true, color: C.WHITE, align: "center", valign: "middle" });
  });
  arrowDown(6.3, 5.04, 5.42); arrowUp(7.03, 5.04, 5.42);
  T(s, "solutions", { x: 4.9, y: 5.08, w: 1.3, h: 0.3, fontSize: 10, color: C.MUTED, italic: true, align: "right" });
  T(s, "demand intelligence", { x: 7.15, y: 5.08, w: 2.0, h: 0.3, fontSize: 10, color: C.MUTED, italic: true });
  const cs = [["LuWind", "Wind developers & IPPs"], ["LuHardHat", "EPC contractors"], ["LuGavel", "YEKA auction winners"], ["LuBatteryCharging", "Solar + storage projects"], ["LuFactory", "Industrial groups · OIZs"], ["LuGlobe", "Neighbouring-country projects"]];
  for (let i = 0; i < cs.length; i++) {
    const x = MX + i * 2.04, y = 5.48;
    rect(s, x, y, 1.9, 1.35, C.PALE, { rounded: true, r: 0.06 });
    await ctx.icon(s, cs[i][0], x + 0.73, y + 0.14, 0.44, C.BLUE);
    T(s, cs[i][1], { x: x + 0.08, y: y + 0.66, w: 1.74, h: 0.62, fontSize: 11.5, bold: true, align: "center" });
  }
};
