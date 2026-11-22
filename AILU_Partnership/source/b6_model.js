module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "How we work together";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "ailu_floor2.jpg", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "04", "How we could work together", "Clear roles, a simple customer journey, a staged model.",
    "Each step earned by results — no large commitment on day one.");

  // Roles
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Roles", title: "A proposed division of roles", tb: true,
    sub: "AILU makes and qualifies the products; Ulusoy opens and serves the Turkish market." });
  const cols = [["AILU", C.TB, "LuFactory", ["Products and production slots", "Technical data sheets and certificates", "Samples for trials", "USD price indications and terms", "Technical support for qualification"]],
    ["TOGETHER", C.BLUE, "LuHandshake", ["Target-account list by product", "Joint customer visits in Türkiye", "Factory visits to Shanghai for key buyers", "Pricing strategy by segment"]],
    ["ULUSOY", C.NAVY, "LuShip", ["Market intelligence and buyer access", "Trial coordination and feedback", "Import, customs and warehousing", "Local delivery and buffer stock", "Claims handling and after-sales"]]];
  for (const [i, [h, col, ic, items]] of cols.entries()) {
    const x = MX + i * 4.08;
    rect(s, x, 1.85, 3.92, 4.95, i === 1 ? C.PALE : col, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.3, 2.08, 0.7, i === 1 ? C.ICE : C.WHITE, col);
    T(s, h, { x: x + 1.15, y: 2.08, w: 2.6, h: 0.7, fontSize: 17, bold: true, color: i === 1 ? C.INK : C.WHITE, valign: "middle", charSpacing: 1 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })),
      { x: x + 0.3, y: 3.05, w: 3.4, h: 3.6, fontSize: 14, color: i === 1 ? C.INK : C.WHITE, paraSpaceAfter: 9 });
  }

  // Customer journey
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Customer journey", title: "From first contact to repeat orders", tb: true,
    sub: "Industrial buyers change packaging suppliers only after trials. This is how we would take each account through it." });
  const steps = [["LuTarget", "Target", "Select accounts and products", "U"], ["LuPackage", "Samples", "Samples and technical data to the buyer", "A"],
    ["LuTestTube", "Line trial", "Trial on the customer's filling line", "J"], ["LuBadgeCheck", "Qualification", "Approval by quality and purchasing", "J"],
    ["LuFileCheck", "First order", "First commercial order", "J"], ["LuWarehouse", "Local stock", "Buffer stock in Türkiye for fast delivery", "U"],
    ["LuRepeat", "Repeat & expand", "More formats, more plants", "U"]];
  const own = { U: ["ULUSOY", C.NAVY], A: ["AILU", C.TB], J: ["JOINT", C.BLUE] };
  const sw = 1.66, sg = 0.085;
  for (const [i, [ic, t, d, o]] of steps.entries()) {
    const x = MX + i * (sw + sg);
    rect(s, x, 1.95, sw, 3.55, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + sw / 2 - 0.36, 2.15, 0.72, C.WHITE, own[o][1]);
    T(s, String(i + 1), { x: x + 0.1, y: 2.05, w: 0.4, h: 0.3, fontSize: 11, bold: true, color: C.MUTED });
    T(s, t, { x: x + 0.1, y: 3.0, w: sw - 0.2, h: 0.6, fontSize: 13.5, bold: true, align: "center", valign: "middle" });
    T(s, d, { x: x + 0.1, y: 3.65, w: sw - 0.2, h: 1.1, fontSize: 11, color: C.MUTED, align: "center" });
    ctx.tag(s, own[o][0], x + sw / 2 - 0.55, 4.95, 1.1, C.WHITE, own[o][1], 9.5);
    if (i < steps.length - 1) line(s, x + sw + 0.005, 3.3, x + sw + sg - 0.005, 3.3, C.MID, 1.5, { end: "triangle" });
  }
  rect(s, MX, 5.8, 12.133, 0.95, C.TBL, { rounded: true, r: 0.06 });
  T(s, [{ text: "Typical timing: ", options: { bold: true, color: C.TB } }, { text: "3–6 months from samples to a first order for sacks; longer for PV frames, because modules must be re-certified." }],
    { x: MX + 0.3, y: 5.8, w: 11.6, h: 0.95, fontSize: 14, valign: "middle" });

  // Staged model
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "A staged model", title: "Start with a market test, then build a long-term presence", tb: true,
    sub: "Each stage is earned by results. Neither side needs to commit to more than the next step." });
  const stg = [["STAGE 1", "Market test", "Next 6 months", ["3–5 target accounts per priority product", "Samples, line trials and first orders", "Customs rulings and landed-cost checks", "Simple working rules agreed in writing"], C.NAVY, 2.55],
    ["STAGE 2", "Distribution", "After first orders", ["Ulusoy as distributor for agreed products", "Price lists and buffer stock in Türkiye", "Account protection for introduced customers", "Joint marketing and trade fairs"], C.BLUE, 2.15],
    ["STAGE 3", "Local presence", "When volume justifies", ["Local finishing, printing or frame assembly with a Turkish partner", "Türkiye as a base for the Middle East, Balkans and Central Asia", "Long-term supply agreements"], C.TB, 1.75]];
  stg.forEach(([k, t, w, items, col, top], i) => {
    const x = MX + i * 4.08, h = 6.8 - top;
    rect(s, x, top, 3.92, h, col, { rounded: true, r: 0.06 });
    T(s, k, { x: x + 0.3, y: top + 0.2, w: 3, h: 0.28, fontSize: 11, bold: true, color: "DCE6F0", charSpacing: 2 });
    T(s, t, { x: x + 0.3, y: top + 0.5, w: 3.4, h: 0.4, fontSize: 18, bold: true, color: C.WHITE });
    T(s, w, { x: x + 0.3, y: top + 0.95, w: 3.4, h: 0.3, fontSize: 12, italic: true, color: "DCE6F0" });
    T(s, items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j < items.length - 1 } })),
      { x: x + 0.3, y: top + 1.4, w: 3.4, h: h - 1.6, fontSize: 13, color: C.WHITE, paraSpaceAfter: 6 });
    if (i < 2) line(s, x + 3.92, top + 0.6, x + 4.08, top + 0.2, C.MID, 1.5, { end: "triangle" });
  });
};
