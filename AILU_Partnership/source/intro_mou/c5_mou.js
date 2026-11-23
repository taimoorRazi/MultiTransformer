module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Proposed cooperation";

  // MOU key points
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "04 · Proposed cooperation", title: "A Memorandum of Understanding as the first step", tb: true,
    sub: "A simple, non-binding framework that lets both sides start working together now." });
  const pts = [["LuTarget", "Purpose", "Cooperate to develop AILU's business in Türkiye and the region"],
    ["LuPackage", "Scope", "AILU product lines and territories agreed together"],
    ["LuUsers", "Roles", "AILU: products, data, samples, pricing. Ulusoy: market study, customers, import and local supply"],
    ["LuClipboardList", "Joint plan", "Market study and a joint entry plan within about two months"],
    ["LuShieldCheck", "Customer protection", "Customers introduced by Ulusoy are registered and protected"],
    ["LuFileText", "Simple terms", "Confidentiality; non-binding; 1–2 years; next step a distribution agreement"]];
  for (const [i, [ic, t, d]] of pts.entries()) {
    const x = MX + (i % 2) * 6.12, y = 1.9 + Math.floor(i / 2) * 1.55;
    rect(s, x, y, 5.95, 1.4, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.36, 0.68, C.WHITE, C.TB);
    T(s, t, { x: x + 1.1, y: y + 0.15, w: 4.65, h: 0.36, fontSize: 14.5, bold: true });
    T(s, d, { x: x + 1.1, y: y + 0.55, w: 4.65, h: 0.8, fontSize: 12.5, color: C.MUTED });
  }
  ctx.src(s, "Ulusoy can prepare a bilingual (English–Chinese) MOU draft within one week for AILU's review.");

  // Staged path
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "The path", title: "From MOU to a long-term partnership", tb: true,
    sub: "Each step builds on the results of the last. Neither side commits to more than the next step." });
  const stg = [["STEP 1", "MOU", "Now", ["Framework and contact persons", "Product catalogues and data", "Confidentiality"], C.NAVY, 2.85],
    ["STEP 2", "Market study & plan", "About 2 months", ["Ulusoy studies the market", "Network outreach to buyers", "Joint entry plan"], C.BLUE, 2.45],
    ["STEP 3", "Market test", "Months 3–6", ["Samples and trials", "First orders", "Customs and logistics tested"], C.DEEP, 2.05],
    ["STEP 4", "Distribution agreement", "After first orders", ["Agreed products and territory", "Local stock in Türkiye", "Regional expansion"], C.TB, 1.65]];
  stg.forEach(([k, t, w, items, col, top], i) => {
    const x = MX + i * 3.07, h = 6.8 - top;
    rect(s, x, top, 2.9, h, col, { rounded: true, r: 0.06 });
    T(s, k, { x: x + 0.25, y: top + 0.2, w: 2.5, h: 0.28, fontSize: 11, bold: true, color: "DCE6F0", charSpacing: 2 });
    T(s, t, { x: x + 0.25, y: top + 0.5, w: 2.5, h: 0.7, fontSize: 17, bold: true, color: C.WHITE });
    T(s, w, { x: x + 0.25, y: top + 1.2, w: 2.5, h: 0.3, fontSize: 12, italic: true, color: "DCE6F0" });
    T(s, items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j < items.length - 1 } })),
      { x: x + 0.25, y: top + 1.65, w: 2.5, h: h - 1.8, fontSize: 13, color: C.WHITE, paraSpaceAfter: 7 });
    if (i < 3) line(s, x + 2.9, top + 0.6, x + 3.07, top + 0.2, C.MID, 1.5, { end: "triangle" });
  });

  // Next steps
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Next steps", title: "Proposed next steps", tb: true,
    sub: "Suggestions for discussion: what Ulusoy will prepare, and where AILU's input would help." });
  const cols = [["ULUSOY WILL PREPARE", C.NAVY, ["A bilingual MOU draft within one week", "The market study for Türkiye", "Introductions to buyers in our network", "A joint entry plan with priority products"]],
    ["WE WOULD WELCOME FROM AILU", C.TB, ["A contact person in the international trade team", "Product catalogues and technical data", "Indicative export prices for main products", "AILU's view on priority products and markets"]]];
  cols.forEach(([h, col, items], i) => {
    const x = MX + i * 6.12;
    rect(s, x, 1.9, 5.95, 3.7, col, { rounded: true, r: 0.06 });
    T(s, h, { x: x + 0.35, y: 2.1, w: 5.3, h: 0.3, fontSize: 11.5, bold: true, color: i ? "D5D9F5" : C.MID, charSpacing: 2 });
    items.forEach((it, j) => {
      const y = 2.6 + j * 0.72;
      circle(s, x + 0.35, y + 0.04, 0.38, C.WHITE);
      T(s, String(j + 1), { x: x + 0.35, y: y + 0.04, w: 0.38, h: 0.38, fontSize: 12, bold: true, color: col, align: "center", valign: "middle" });
      T(s, it, { x: x + 0.9, y: y - 0.02, w: 4.8, h: 0.55, fontSize: 14, color: C.WHITE, valign: "middle" });
    });
  });
  rect(s, MX, 5.85, 12.133, 0.95, C.PALE, { rounded: true, r: 0.06 });
  T(s, [{ text: "Our suggestion for today: ", options: { bold: true, color: C.TB } }, { text: "agree to work together under an MOU, and name one contact person on each side." }],
    { x: MX + 0.35, y: 5.85, w: 11.5, h: 0.95, fontSize: 15, valign: "middle" });

  // Closing
  s = ctx.slide("BLANK_DARK", SEC);
  img(s, "ul_tir.png", 0, 0, 13.333, 7.5, { fx: 0.5 });
  rect(s, 0, 0, 13.333, 7.5, C.NAVY, { transparency: 22 });
  s.addImage({ path: L.A + "ul_logo_white.png", x: MX, y: 0.62, w: 1.75, h: 0.4 });
  T(s, "AILU  ×  ULUSOY", { x: MX, y: 2.0, w: 8, h: 0.35, fontSize: 13, bold: true, color: C.MID, charSpacing: 4 });
  T(s, "Thank you", { x: MX, y: 2.45, w: 8, h: 1.0, fontSize: 48, bold: true, color: C.WHITE });
  T(s, [{ text: "AILU brings advanced packaging, packing systems and new materials.", options: { breakLine: true } },
    { text: "Ulusoy brings the Turkish market, the network and local supply.", options: { breakLine: true } },
    { text: "We look forward to building this partnership together." }],
    { x: MX, y: 3.65, w: 9.8, h: 1.6, fontSize: 19, color: C.WHITE, paraSpaceAfter: 6 });
  T(s, "TÜRKİYE  ·  MIDDLE EAST  ·  BALKANS  ·  CENTRAL ASIA", { x: MX, y: 5.75, w: 9, h: 0.3, fontSize: 12, color: C.MID, charSpacing: 3 });
  T(s, "“Everything on Time.” — since 1937", { x: MX, y: 6.55, w: 6, h: 0.3, fontSize: 11, italic: true, color: C.MID });
  T(s, "Ulusoy international transport", { x: 7.0, y: 7.08, w: 6.1, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });
};
