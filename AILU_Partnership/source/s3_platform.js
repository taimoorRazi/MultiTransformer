module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Regional platform";

  // Regional platform map
  let s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "The regional platform", title: "Between Chinese industrial capability and regional demand",
    sub: "This operating history created relationships and capabilities. Today we apply the same platform to industrial supply." });
  img(s, "map_platform_ailu.png", MX, 1.72, 12.133, 4.15, { contain: true });
  const ch = [["Türkiye", "Home market — cement, building chemicals, food, chemicals and PV module makers"],
    ["Balkans · SE Europe", "Building-material and food producers close to the EU"],
    ["Middle East", "Construction and food markets, often supplied via Türkiye"],
    ["Central Asia · Caucasus", "Future extension, where projects justify it"]];
  ch.forEach(([t, d], i) => {
    const x = MX + i * 3.08;
    rect(s, x, 5.95, 2.93, 0.95, i === 0 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    T(s, t, { x: x + 0.18, y: 6.02, w: 2.6, h: 0.28, fontSize: 12.5, bold: true, color: i === 0 ? C.WHITE : C.INK });
    T(s, d, { x: x + 0.18, y: 6.3, w: 2.65, h: 0.58, fontSize: 10.5, color: i === 0 ? C.ICE : C.MUTED });
  });

  // The local layer
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What Ulusoy contributes", title: "How a local partner can support AILU in the region",
    sub: "One local team between AILU's plants and the companies that buy packaging in Türkiye and the region." });
  rect(s, 2.9, 1.8, 7.53, 0.78, C.TB, { rounded: true, r: 0.06 });
  T(s, [{ text: "AILU  ", options: { bold: true, fontSize: 18 } }, { text: "paper sacks · plastic packaging · REVOPAC lines · IKKO tubes · PV frames", options: { fontSize: 13 } }],
    { x: 2.9, y: 1.8, w: 7.53, h: 0.78, color: C.WHITE, align: "center", valign: "middle" });
  const arrowDown = (x, y1, y2) => line(s, x, y1, x, y2, C.MID, 2.5, { end: "triangle" });
  const arrowUp = (x, y1, y2) => line(s, x, y1, x, y2, C.MID, 2.5, { begin: "triangle" });
  arrowDown(6.3, 2.62, 3.0); arrowUp(7.03, 2.62, 3.0);
  rect(s, MX, 3.05, 12.133, 1.95, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ULUSOY — LOCAL COMMERCIAL AND SUPPLY LAYER", { x: MX + 0.3, y: 3.15, w: 8, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  const fn = ["Market intelligence", "Customer origination", "Senior buyer access", "Samples & line trials", "Commercial development",
    "Technical qualification", "Import & customs", "Warehousing & stock", "Local delivery", "Customer relationship management"];
  fn.forEach((f, i) => {
    const x = MX + 0.3 + (i % 5) * 2.33, y = 3.55 + Math.floor(i / 5) * 0.68;
    rect(s, x, y, 2.18, 0.56, C.DEEP, { rounded: true, r: 0.06 });
    T(s, f, { x: x + 0.08, y, w: 2.02, h: 0.56, fontSize: 11.5, bold: true, color: C.WHITE, align: "center", valign: "middle" });
  });
  arrowDown(6.3, 5.04, 5.42); arrowUp(7.03, 5.04, 5.42);
  T(s, "solutions", { x: 4.9, y: 5.08, w: 1.3, h: 0.3, fontSize: 10, color: C.MUTED, italic: true, align: "right" });
  T(s, "demand and feedback", { x: 7.15, y: 5.08, w: 2.2, h: 0.3, fontSize: 10, color: C.MUTED, italic: true });
  const cs = [["LuBuilding2", "Cement & building materials"], ["LuPaintBucket", "Building chemicals & dry mix"], ["LuWheat", "Food, flour & dairy"],
    ["LuFlaskConical", "Chemicals & fertiliser"], ["LuSun", "PV module makers"], ["LuSparkles", "Cosmetics brands"]];
  for (let i = 0; i < cs.length; i++) {
    const x = MX + i * 2.04, y = 5.48;
    rect(s, x, y, 1.9, 1.35, C.PALE, { rounded: true, r: 0.06 });
    await ctx.icon(s, cs[i][0], x + 0.73, y + 0.14, 0.44, C.BLUE);
    T(s, cs[i][1], { x: x + 0.08, y: y + 0.66, w: 1.74, h: 0.62, fontSize: 11.5, bold: true, align: "center" });
  }
};
