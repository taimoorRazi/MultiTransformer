module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Why CRRC fits · What Ulusoy adds";

  // 30 — Demand vs CRRC capability matrix
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Why CRRC fits", title: "Regional demand matches CRRC's portfolio", tb: true,
    sub: "Each demand segment draws on several CRRC product families at once." });
  const cols = ["Wind turbines", "Blades & towers", "Gearbox & generator", "Converters & IGBT", "PV inverters", "BESS & PCS", "MV stations & transformers", "Switchgear & protection", "Prefab substations", "Hydrogen power supply"];
  const rows = [["Onshore wind farms", [2, 2, 2, 2, 0, 0, 2, 2, 2, 0]], ["Capacity extensions", [2, 2, 2, 2, 0, 0, 2, 1, 1, 0]], ["Hybrid wind + storage", [2, 1, 1, 2, 0, 2, 2, 2, 2, 0]],
    ["Utility solar + storage", [0, 0, 0, 1, 2, 2, 2, 2, 2, 0]], ["Off-grid / microgrid", [0, 0, 0, 1, 2, 2, 2, 2, 1, 0]], ["Industry & green hydrogen", [0, 0, 0, 2, 1, 2, 2, 2, 1, 2]], ["Offshore wind (future)", [2, 2, 2, 2, 0, 0, 2, 2, 2, 0]]];
  const lx = MX, lw = 2.45, cx0 = lx + lw, cw = (12.73 - cx0) / cols.length, hy = 1.78, hh = 0.85, rh = 0.53;
  cols.forEach((c, j) => {
    rect(s, cx0 + j * cw + 0.03, hy, cw - 0.06, hh, C.TB, { rounded: true, r: 0.04 });
    T(s, c, { x: cx0 + j * cw + 0.04, y: hy, w: cw - 0.08, h: hh, fontSize: 9, bold: true, color: C.WHITE, align: "center", valign: "middle" });
  });
  rows.forEach(([r, v], i) => {
    const y = hy + hh + 0.08 + i * rh;
    rect(s, lx, y + 0.03, 12.133, rh - 0.06, i % 2 ? C.WHITE : C.PALE);
    T(s, r, { x: lx + 0.12, y, w: lw - 0.15, h: rh, fontSize: 12.5, bold: true, valign: "middle" });
    v.forEach((k, j) => {
      if (!k) return;
      const d = k === 2 ? 0.3 : 0.3;
      const x = cx0 + j * cw + cw / 2 - d / 2, yy = y + rh / 2 - d / 2;
      if (k === 2) circle(s, x, yy, d, C.TB); else circle(s, x, yy, d, C.WHITE, { line: { color: C.TB, width: 1.75 } });
    });
  });
  const ly = hy + hh + 0.12 + rows.length * rh;
  circle(s, MX + 0.1, ly + 0.08, 0.22, C.TB); T(s, "Core scope", { x: MX + 0.42, y: ly + 0.04, w: 1.5, h: 0.3, fontSize: 11, color: C.MUTED });
  circle(s, MX + 1.9, ly + 0.08, 0.22, C.WHITE, { line: { color: C.TB, width: 1.5 } }); T(s, "Selected applications", { x: MX + 2.22, y: ly + 0.04, w: 2.2, h: 0.3, fontSize: 11, color: C.MUTED });
  rect(s, 5.3, ly - 0.04, 7.43, 0.58, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "CRRC's advantage: one group across wind, solar, storage and hydrogen — with its own component chain.", { x: 5.5, y: ly - 0.04, w: 7.1, h: 0.58, fontSize: 12.5, bold: true, color: C.WHITE, valign: "middle" });
  ctx.src(s, "Source: CRRC Zhuzhou Institute portfolio (2026); Ulusoy analysis of project requirements. Fit indicates product-family relevance, not project approval.");

  // 31 — In-house chain
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Why CRRC fits", title: "From chip to wind farm: an in-house supply chain", tb: true,
    sub: "CRRC makes the critical components of its turbines itself — a strong argument for supply security, spare parts and lifetime service." });
  const chain = [["crrc_converter.png", "Converters & IGBT", "Own IGBT chips, modules and wind converters"], ["crrc_blades.jpg", "Blades & pitch", "Rotor blades, electric pitch, supercapacitors"],
    ["crrc_gearbox.jpg", "Gearbox & generator", "6.X–8.X MW DFIG drivetrain"], ["crrc_nacelle_render.png", "Nacelle & transformer", "Dry-type transformer inside the nacelle"],
    ["crrc_turbine_sq.jpg", "Turbines & towers", "5–12.5 MW onshore · 8.5–26 MW offshore"], ["crrc_bess_container.jpg", "Solar & storage", "PV inverters, BESS, PCS, MV stations"]];
  chain.forEach(([f, t, d], i) => {
    const x = MX + i * 2.05;
    rect(s, x, 1.85, 1.9, 2.95, C.PALE, { rounded: true, r: 0.06 });
    rect(s, x + 0.12, 1.97, 1.66, 1.3, C.WHITE, { rounded: true, r: 0.05 });
    img(s, f, x + 0.17, 2.02, 1.56, 1.2, { contain: true });
    T(s, t, { x: x + 0.12, y: 3.36, w: 1.72, h: 0.5, fontSize: 12, bold: true, color: C.TB, valign: "top" });
    T(s, d, { x: x + 0.12, y: 3.9, w: 1.68, h: 0.85, fontSize: 11, color: C.MUTED, valign: "top" });
    if (i < 5) line(s, x + 1.9, 3.32, x + 2.05, 3.32, C.TB, 2, { end: "triangle" });
  });
  T(s, "REFERENCES TURKISH BUYERS TYPICALLY ASK FOR", { x: MX, y: 5.05, w: 8, h: 0.28, fontSize: 10.5, bold: true, color: C.TB, charSpacing: 1.5 });
  const pp = [["300+", "wind farms supplied"], ["9,000", "turbines under CRRC service"], ["98%", "time-based availability (industry avg. 97%)"], ["70 GW+", "PV inverters installed"], ["#7", "global wind OEM in 2025 (GWEC supplier ranking)"]];
  pp.forEach(([n, l], i) => {
    const x = MX + i * 2.45;
    rect(s, x, 5.4, 2.3, 1.38, C.TBL, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.18, y: 5.5, w: 2.0, h: 0.5, fontSize: 21, bold: true, color: C.TB });
    T(s, l, { x: x + 0.18, y: 6.02, w: 2.0, h: 0.65, fontSize: 11, color: C.MUTED });
  });
  ctx.src(s, "Source: CRRC Zhuzhou Institute, \"Introduction of CRRC Wind Power Business\" (2026). Product images: CRRC.");

  // 32 — The equation
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What Ulusoy adds", title: "How our capabilities complement each other", tb: true,
    sub: "CRRC's industrial strengths and Ulusoy's local strengths cover different parts of the same route to market." });
  const tb = ["Wind turbine technology", "In-house component chain", "Solar, storage & hydrogen", "International references", "Scale", "Financing access"];
  const ul = ["Market intelligence", "Project origination", "Senior-level access", "EPC alliances", "Local commercial coordination", "Tender intelligence", "Local execution relationships", "Regional project pipeline"];
  rect(s, MX, 1.85, 3.6, 4.95, C.TB, { rounded: true, r: 0.06 });
  T(s, "CRRC CAPABILITY", { x: MX + 0.3, y: 2.05, w: 3, h: 0.3, fontSize: 12, bold: true, color: "D5E3F6", charSpacing: 2 });
  tb.forEach((t, i) => { const y = 2.55 + i * 0.66; rect(s, MX + 0.3, y, 3.0, 0.54, "A50D26", { rounded: true, r: 0.05 }); T(s, t, { x: MX + 0.45, y, w: 2.8, h: 0.54, fontSize: 13.5, bold: true, color: C.WHITE, valign: "middle" }); });
  T(s, "+", { x: 4.2, y: 3.85, w: 0.6, h: 0.8, fontSize: 40, bold: true, color: C.BLUE, align: "center", valign: "middle" });
  rect(s, 4.8, 1.85, 4.0, 4.95, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ULUSOY CAPABILITY", { x: 5.1, y: 2.05, w: 3.4, h: 0.3, fontSize: 12, bold: true, color: C.MID, charSpacing: 2 });
  ul.forEach((t, i) => { const y = 2.5 + i * 0.52; rect(s, 5.1, y, 3.4, 0.44, C.DEEP, { rounded: true, r: 0.05 }); T(s, t, { x: 5.25, y, w: 3.2, h: 0.44, fontSize: 12.5, bold: true, color: C.WHITE, valign: "middle" }); });
  T(s, "=", { x: 8.8, y: 3.85, w: 0.6, h: 0.8, fontSize: 40, bold: true, color: C.BLUE, align: "center", valign: "middle" });
  rect(s, 9.4, 1.85, 3.33, 4.95, C.TBL, { rounded: true, r: 0.06, line: { color: C.TB, width: 1.5 } });
  await ctx.iconCircle(s, "LuRepeat", 10.56, 2.2, 1.0, C.WHITE, C.TB);
  T(s, "COMBINED PLATFORM", { x: 9.6, y: 3.4, w: 2.93, h: 0.3, fontSize: 12, bold: true, color: C.TB, align: "center", charSpacing: 2 });
  T(s, "A long-term route to market", { x: 9.6, y: 3.75, w: 2.93, h: 0.9, fontSize: 20, bold: true, color: C.INK, align: "center" });
  T(s, "Project after project, account after account — in Türkiye, the Balkans and the Middle East.", { x: 9.6, y: 4.75, w: 2.93, h: 1.3, fontSize: 12.5, color: C.MUTED, align: "center" });

  // 33 — Operating chain
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What Ulusoy adds", title: "The operating chain: from first signal to the next project", tb: true,
    sub: "How the work could be shared, from the first market signal to after-sales." });
  const steps = [["LuRadar", "Market intelligence", "U"], ["LuTarget", "Opportunity origination", "U"], ["LuUsers", "Customer access", "U"], ["LuCpu", "Technical match", "J"], ["LuCoins", "EPC / financing structure", "J"],
    ["LuGavel", "Tender & negotiation", "J"], ["LuTruck", "Delivery", "T"], ["LuWrench", "Service", "J"], ["LuRepeat", "Next project", "U"]];
  const own = { U: ["Ulusoy leads", C.NAVY], T: ["CRRC leads", C.TB], J: ["Joint", C.BLUE] };
  for (let i = 0; i < steps.length; i++) {
    const [ic, t, o] = steps[i];
    const row = i < 5 ? 0 : 1; const k = row === 0 ? i : 8 - i + 1; // second row right-to-left
    const x = row === 0 ? MX + 0.15 + i * 2.45 : MX + 0.15 + (9 - i - 1 + 1) * 2.45 - 2.45 + 1.225;
    const xx = row === 0 ? MX + 0.15 + i * 2.45 : MX + 0.15 + (8 - i) * 2.45 + 1.225;
    const y = row === 0 ? 1.95 : 4.35;
    circle(s, xx + 0.55, y, 1.05, own[o][1]);
    s.addImage({ data: await L.icon(ic, C.WHITE), x: xx + 0.8, y: y + 0.25, w: 0.55, h: 0.55 });
    T(s, String(i + 1), { x: xx + 0.35, y: y - 0.08, w: 0.4, h: 0.3, fontSize: 12, bold: true, color: own[o][1] });
    T(s, t, { x: xx - 0.1, y: y + 1.12, w: 2.35, h: 0.55, fontSize: 13, bold: true, align: "center" });
    T(s, own[o][0], { x: xx - 0.1, y: y + 1.55, w: 2.35, h: 0.25, fontSize: 10, color: own[o][1], align: "center", bold: true });
    if (row === 0 && i < 4) line(s, xx + 1.7, y + 0.52, xx + 2.9, y + 0.52, C.MID, 2, { end: "triangle" });
    if (row === 1 && i < 8) line(s, xx + 0.45, y + 0.52, xx - 0.75, y + 0.52, C.MID, 2, { end: "triangle" });
  }
  // turn arrow from step 5 down to step 6
  line(s, MX + 0.15 + 4 * 2.45 + 1.08, 3.75, MX + 0.15 + 3 * 2.45 + 1.225 + 1.08 + 0.1, 4.3, C.MID, 2, { end: "triangle" });
  rect(s, MX, 6.4, 12.133, 0.45, C.PALE, { rounded: true, r: 0.06 });
  T(s, "Each completed project becomes a reference — and the starting point for the next opportunity with the same customer or EPC.", { x: MX + 0.3, y: 6.4, w: 11.6, h: 0.45, fontSize: 12, color: C.DEEP, valign: "middle", bold: true });

  // 34 — Not an intermediary
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What Ulusoy adds", title: "The working model we propose", tb: true,
    sub: "Compared with transaction-based sales, the focus is a long-term market position for CRRC." });
  const cmp = [["Focus", "One transaction", "A multi-year pipeline of projects and accounts"], ["Where it starts", "After an RFQ is already issued", "Before the project is designed — at origination"],
    ["Customer relationship", "Price and offer coordination", "Senior access and long-term account management"], ["Information for CRRC", "Limited", "Market, auction and competitor intelligence shared with CRRC"],
    ["After the sale", "Relationship often ends", "Service coordination, spares, references and the next project"], ["Result for CRRC", "Individual orders", "A durable, growing market position in the region"]];
  const c1 = MX, c2 = 3.4, c3 = 7.3, rw = 12.73;
  rect(s, c2, 1.8, 3.75, 0.6, C.PALE, { rounded: true, r: 0.05 });
  T(s, "Transaction-based sales", { x: c2, y: 1.8, w: 3.75, h: 0.6, fontSize: 14, bold: true, color: C.MUTED, align: "center", valign: "middle" });
  rect(s, c3, 1.8, rw - c3, 0.6, C.TB, { rounded: true, r: 0.05 });
  T(s, "Market-development model (proposed)", { x: c3, y: 1.8, w: rw - c3, h: 0.6, fontSize: 14, bold: true, color: C.WHITE, align: "center", valign: "middle" });
  cmp.forEach(([a, b, c], i) => {
    const y = 2.52 + i * 0.72;
    rect(s, c1, y, rw - c1, 0.64, i % 2 ? C.WHITE : C.PALE);
    T(s, a, { x: c1 + 0.15, y, w: 2.6, h: 0.64, fontSize: 13, bold: true, valign: "middle" });
    T(s, b, { x: c2 + 0.2, y, w: 3.45, h: 0.64, fontSize: 12.5, color: C.MUTED, valign: "middle" });
    T(s, c, { x: c3 + 0.2, y, w: rw - c3 - 0.35, h: 0.64, fontSize: 12.5, bold: true, color: C.INK, valign: "middle" });
  });
};
