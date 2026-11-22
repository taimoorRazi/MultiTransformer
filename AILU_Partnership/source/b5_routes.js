module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Where AILU can win";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "ailu_revopac.jpg", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "03", "Where AILU can win", "Lead with the products where AILU has a clear edge.",
    "Our recommended order of entry — for discussion.");
  T(s, "REVOPAC showroom, AILU", { x: 8.3, y: 7.08, w: 4.8, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // Product priorities
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Our recommendation", title: "Five products, three priorities", tb: true,
    sub: "Where AILU has an edge in Türkiye — and where local competition is too strong." });
  const hdr = ["Product", "Turkish demand", "Local competition", "AILU's edge", "Priority"];
  const rows = [["Composite PV frames", "13.4 GW of module capacity", "Aluminium frames now carry anti-dumping duty", "Certified, lighter, no corrosion", "1 · Start now", C.TB],
    ["Specialty paper sacks", "Building chemicals, food, dairy, chemicals", "Moderate in food-grade and heat-seal formats", "BRCGS, ISO 22000, global references", "1 · Start now", C.TB],
    ["REVOPAC packing lines", "Plants expanding and automating", "European suppliers, higher price", "Sack + filling line from one source", "2 · Project by project", C.BLUE],
    ["IKKO cosmetic tubes", "Fast-growing cosmetics exports", "Strong local converters", "Premium and sustainable tubes", "3 · Selective", C.NAVY],
    ["Standard cement sacks", "Large, but mostly local", "Captive and local supply, overcapacity", "Limited after freight and duties", "Opportunistic only", C.MUTED]];
  const cw = [2.6, 2.55, 2.75, 2.55, 1.68];
  let x0 = MX; const ty = 1.85;
  hdr.forEach((h, j) => { rect(s, x0, ty, cw[j] - 0.04, 0.45, C.NAVY); T(s, h, { x: x0 + 0.12, y: ty, w: cw[j] - 0.2, h: 0.45, fontSize: 12, bold: true, color: C.WHITE, valign: "middle" }); x0 += cw[j]; });
  rows.forEach((r, i) => {
    let xx = MX; const y = ty + 0.5 + i * 0.86;
    for (let j = 0; j < 5; j++) {
      if (j === 4) {
        rect(s, xx, y, cw[j] - 0.04, 0.8, r[5], { rounded: true, r: 0.05 });
        T(s, r[4], { x: xx + 0.08, y, w: cw[j] - 0.2, h: 0.8, fontSize: 11.5, bold: true, color: C.WHITE, align: "center", valign: "middle" });
      } else {
        rect(s, xx, y, cw[j] - 0.04, 0.8, i % 2 ? C.WHITE : C.PALE);
        T(s, r[j], { x: xx + 0.12, y, w: cw[j] - 0.2, h: 0.8, fontSize: j === 0 ? 13 : 11.5, bold: j === 0, color: C.INK, valign: "middle" });
      }
      xx += cw[j];
    }
  });
  ctx.src(s, "Source: Ulusoy market review (Nov 2026). Priorities are indicative and for discussion.");

  // Route 1: PV frames
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Priority route 1", title: "Composite PV frames for Turkish module makers", tb: true,
    sub: "A fast, high-value opening — if the certification and customs questions are answered first." });
  const cols = [["WHY NOW", ["Anti-dumping duty of 38–46% on Chinese aluminium frames", "Module makers are looking for alternatives", "Turkish modules increasingly go to demanding export markets"]],
    ["WHAT AILU OFFERS", ["Glass-fibre polyurethane frames, 1.8 GW capacity", "VDE and TÜV SÜD certification", "Lighter, corrosion-resistant, competitive with aluminium"]],
    ["WHAT IT TAKES", ["Binding customs ruling on classification", "Module re-certification with 2–3 makers", "Price clearly below aluminium plus duty", "Long-term test data: UV, fire, salt mist"]]];
  cols.forEach(([h, items], i) => {
    const x = MX + i * 4.08;
    rect(s, x, 1.85, 3.92, 3.6, i === 1 ? C.TB : C.PALE, { rounded: true, r: 0.06 });
    T(s, h, { x: x + 0.3, y: 2.05, w: 3.4, h: 0.3, fontSize: 11.5, bold: true, color: i === 1 ? C.WHITE : C.TB, charSpacing: 2 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })), { x: x + 0.3, y: 2.5, w: 3.4, h: 2.85, fontSize: 13.5, color: i === 1 ? C.WHITE : C.INK, paraSpaceAfter: 8 });
  });
  rect(s, MX, 5.65, 12.133, 1.15, C.NAVY, { rounded: true, r: 0.06 });
  T(s, [{ text: "Later: ", options: { bold: true, color: C.MID } }, { text: "local frame assembly or licensing with a Turkish partner would count as domestic content and protect the business from future trade measures. Ulusoy can help structure it.", options: { color: C.WHITE } }],
    { x: MX + 0.35, y: 5.65, w: 11.5, h: 1.15, fontSize: 14, valign: "middle" });

  // Route 2: specialty sacks
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Priority route 2", title: "Specialty sacks for building chemicals, food and chemicals", tb: true,
    sub: "Win a few qualified accounts first — quality and reliability decide, then volume follows." });
  img(s, "ailu_floor2.jpg", MX, 1.85, 3.6, 4.95);
  T(s, "AILU sack production, Shanghai", { x: MX, y: 6.84, w: 3.6, h: 0.2, fontSize: 8, italic: true, color: C.MUTED });
  const blk = [["TARGET FORMATS", "25 kg PE-lined valve sacks · heat-seal and food-grade sacks · square-bottom and SOS sacks · moisture-barrier sacks"],
    ["FIRST ACCOUNTS", "3–5 accounts per segment: building-chemical brands, dairy and food-ingredient plants, chemical and pigment producers, Turkish plants of AILU's global customers"],
    ["WHAT IT TAKES", "Samples and line trials on the customer's filler · a competitive delivered price · a clear MOQ per print design · 6–8 weeks sea transit, so buffer stock in Türkiye"],
    ["ULUSOY'S ROLE", "Buyer access, trial coordination, import and customs, warehousing, local delivery and claims handling"]];
  blk.forEach(([h, d], i) => {
    const y = 1.85 + i * 1.25;
    rect(s, 4.45, y, 8.28, 1.12, i === 3 ? C.TBL : C.PALE, { rounded: true, r: 0.06 });
    T(s, h, { x: 4.7, y: y + 0.12, w: 7.8, h: 0.28, fontSize: 11, bold: true, color: C.TB, charSpacing: 2 });
    T(s, d, { x: 4.7, y: y + 0.42, w: 7.85, h: 0.65, fontSize: 12.5, color: C.INK });
  });

  // Route 3 & 4
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Routes 3 and 4", title: "Packing lines project by project; tubes for selected brands", tb: true,
    sub: "Both build on AILU's REVOPAC and IKKO businesses, without large upfront investment." });
  const r34 = [["REVOPAC PACKING LINES", C.BLUE, ["Target: new or expanding cement, dry-mix, fertiliser and food plants", "Offer: valve-bag fillers, robotic bag placers, palletising and big-bag lines", "Pitch: sack + filling line from one supplier, tested together", "Needs: CE documentation, local installation and service — Ulusoy coordinates"]],
    ["IKKO COSMETIC TUBES", C.NAVY, ["Target: export-oriented Turkish cosmetics and personal-care brands", "Offer: premium laminated tubes, PCR and sugar-cane tubes", "Pitch: sustainable packaging for brands exporting to Europe", "Needs: samples, decoration options and MOQ suited to mid-size brands"]]];
  r34.forEach(([h, col, items], i) => {
    const x = MX + i * 6.12;
    rect(s, x, 1.85, 5.95, 4.95, col, { rounded: true, r: 0.06 });
    T(s, h, { x: x + 0.35, y: 2.1, w: 5.3, h: 0.32, fontSize: 13, bold: true, color: C.WHITE, charSpacing: 2 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })), { x: x + 0.35, y: 2.65, w: 5.3, h: 4.0, fontSize: 14.5, color: C.WHITE, paraSpaceAfter: 12 });
  });
};
