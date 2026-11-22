module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Our plan for AILU";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "ailu_floor2.jpg", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "03", "Our plan for AILU in Türkiye", "From market study to first customers.",
    "What Ulusoy would do in the first months of our cooperation.");
  T(s, "AILU production hall, Shanghai", { x: 8.3, y: 7.08, w: 4.8, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // Four-phase plan
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "The plan", title: "Four steps from market study to repeat orders", tb: true,
    sub: "Ulusoy leads the market work in Türkiye; AILU supports with products, data and samples." });
  const ph = [["LuSearch", "1", "Market study", "Weeks 1–8", ["Demand by sector and product", "Local and imported competitors", "Price levels and buyer expectations", "Duties and import rules"]],
    ["LuUsers", "2", "Network outreach", "Weeks 6–12", ["Introduce AILU to buyers in our network", "Target accounts for each product line", "Joint visits in Türkiye", "Buyer visits to AILU in Shanghai"]],
    ["LuTestTube", "3", "Samples & trials", "Months 3–6", ["Samples and technical data to buyers", "Trials on customers' lines", "Quality and purchasing approval", "Feedback to AILU"]],
    ["LuWarehouse", "4", "Orders & local supply", "From month 6", ["First commercial orders", "Import, customs and warehousing by Ulusoy", "Local delivery and after-sales", "More products and more customers"]]];
  for (const [i, [ic, n, t, w, items]] of ph.entries()) {
    const x = MX + i * 3.07;
    rect(s, x, 1.9, 2.9, 4.9, i === 3 ? C.TB : C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, 2.1, 0.68, C.WHITE, i === 3 ? C.TB : C.BLUE);
    T(s, n, { x: x + 2.2, y: 2.1, w: 0.5, h: 0.5, fontSize: 26, bold: true, color: i === 3 ? "D5D9F5" : C.MID, align: "right" });
    T(s, t, { x: x + 0.22, y: 2.95, w: 2.5, h: 0.4, fontSize: 17, bold: true, color: i === 3 ? C.WHITE : C.INK });
    T(s, w, { x: x + 0.22, y: 3.38, w: 2.5, h: 0.3, fontSize: 12, italic: true, color: i === 3 ? "D5D9F5" : C.TB });
    T(s, items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j < items.length - 1 } })),
      { x: x + 0.22, y: 3.85, w: 2.55, h: 2.85, fontSize: 12.5, color: i === 3 ? C.WHITE : C.INK, paraSpaceAfter: 7 });
    if (i < 3) line(s, x + 2.9 + 0.005, 4.3, x + 3.07 - 0.005, 4.3, C.MID, 1.5, { end: "triangle" });
  }

  // What we will study
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "The market study", title: "What we will study for each AILU product line", tb: true,
    sub: "A practical study, focused on where AILU can win customers — shared with AILU when complete." });
  const pr = [["LuPackage", "Industrial paper sacks", "Cement, building chemicals, food, flour, chemicals"],
    ["LuLayers", "Plastic packaging", "Barrier films, FFS film, food and industrial packaging"],
    ["LuFactory", "REVOPAC packing lines", "New and expanding filling and packing plants"],
    ["LuSparkles", "IKKO cosmetic tubes", "Cosmetics and personal-care brands"],
    ["LuSun", "PV module frames", "Solar module manufacturers"]];
  const qs = ["Who buys", "Competitors", "Price levels", "Import rules"];
  T(s, "FOR EACH PRODUCT LINE WE WILL ANSWER", { x: 7.2, y: 1.85, w: 5.5, h: 0.28, fontSize: 10.5, bold: true, color: C.MUTED, charSpacing: 2 });
  for (const [i, [ic, t, d]] of pr.entries()) {
    const y = 1.85 + i * 0.98;
    rect(s, MX, y, 6.35, 0.86, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, MX + 0.15, y + 0.13, 0.6, C.WHITE, C.TB);
    T(s, t, { x: MX + 0.95, y: y + 0.08, w: 5.2, h: 0.36, fontSize: 14, bold: true });
    T(s, d, { x: MX + 0.95, y: y + 0.44, w: 5.3, h: 0.36, fontSize: 11.5, color: C.MUTED });
  }
  qs.forEach((q, i) => {
    const y = 2.25 + i * 0.95;
    rect(s, 7.2, y, 5.53, 0.82, C.TBL, { rounded: true, r: 0.06 });
    circle(s, 7.4, y + 0.19, 0.44, C.TB);
    T(s, String(i + 1), { x: 7.4, y: y + 0.19, w: 0.44, h: 0.44, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, q, { x: 8.05, y, w: 4.5, h: 0.82, fontSize: 16, bold: true, color: C.TBD, valign: "middle" });
  });
  T(s, "Result: a joint plan with priority products, target customers and a realistic timeline.", { x: 7.2, y: 6.1, w: 5.53, h: 0.7, fontSize: 13, bold: true, italic: true, color: C.DEEP });

  // Why Ulusoy can deliver it
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Why Ulusoy", title: "What Ulusoy brings to AILU's business in Türkiye",
    sub: "Everything a foreign manufacturer needs locally — inside one group." });
  const cap = [["LuUsers", "Senior access", "Relationships with owners and decision-makers built over 89 years"],
    ["LuFactory", "Industrial network", "Construction, food, chemicals, energy and manufacturing companies"],
    ["LuShip", "Import & customs", "International trade and customs since 1973"],
    ["LuWarehouse", "Warehousing & delivery", "Bonded warehousing, local stock and on-time delivery"],
    ["LuHandshake", "Representation experience", "Volvo, Neoplan and Chinese manufacturers such as Lonyu"],
    ["LuGlobe", "Regional reach", "Türkiye as a base for the Balkans, Middle East and Central Asia"]];
  for (const [i, [ic, t, d]] of cap.entries()) {
    const x = MX + (i % 3) * 4.08, y = 1.9 + Math.floor(i / 3) * 2.15;
    rect(s, x, y, 3.92, 1.95, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.25, y + 0.25, 0.7, C.WHITE, C.BLUE);
    T(s, t, { x: x + 1.1, y: y + 0.25, w: 2.7, h: 0.7, fontSize: 15, bold: true, valign: "middle" });
    T(s, d, { x: x + 0.25, y: y + 1.1, w: 3.45, h: 0.75, fontSize: 12.5, color: C.MUTED });
  }
  rect(s, MX, 6.2, 12.133, 0.6, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "One partner for market development, import and local supply — AILU focuses on making the products.",
    { x: MX + 0.3, y: 6.2, w: 11.6, h: 0.6, fontSize: 14, bold: true, color: C.WHITE, valign: "middle" });
};
