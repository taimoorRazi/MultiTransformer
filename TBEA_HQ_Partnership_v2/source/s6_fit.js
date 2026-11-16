module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Why TBEA fits · What Ulusoy adds";

  // 30 — Demand vs TBEA capability matrix
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Why TBEA fits", title: "Regional demand matches TBEA's portfolio", tb: true,
    sub: "Each demand segment needs several TBEA product families at once." });
  const cols = ["Power transformers", "Distribution transformers", "GIS / HV switchgear", "MV / LV switchgear", "Cables & conductors", "Inverters · PCS · BESS", "Protection · automation · EMS", "Power quality (SVG)", "Towers & structures", "Mobile / prefab substations"];
  const rows = [["Renewable connection", [2, 1, 2, 2, 2, 0, 2, 2, 0, 1]], ["Battery storage (BESS)", [1, 2, 1, 2, 2, 2, 2, 1, 0, 1]], ["Data centers", [2, 2, 2, 2, 2, 0, 2, 2, 0, 1]],
    ["Transmission (TEİAŞ / IFI)", [2, 0, 2, 1, 2, 0, 2, 2, 0, 1]], ["Wind power", [2, 2, 2, 2, 2, 0, 2, 1, 2, 0]], ["Industry & OIZs", [2, 2, 2, 2, 2, 0, 2, 2, 0, 1]], ["Off-grid / microgrid", [0, 2, 0, 2, 2, 2, 2, 0, 1, 1]]];
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
  T(s, "TBEA's advantage is not one product — it is the ability to supply an integrated electrical system.", { x: 5.5, y: ly - 0.04, w: 7.1, h: 0.58, fontSize: 12.5, bold: true, color: C.WHITE, valign: "middle" });
  ctx.src(s, "Source: TBEA Electrical Equipment Group portfolio (2026); Ulusoy analysis of project requirements. Fit indicates product-family relevance, not project approval.");

  // 31 — Integrated system
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Why TBEA fits", title: "One supplier for the whole electrical chain", tb: true,
    sub: "Fewer interfaces, one technical responsibility, one commercial counterpart — a strong argument for Turkish developers and EPCs." });
  const chain = [["tbea_inverter.png", "Generation", "PV inverters · wind turbine transformers · towers"], ["tbea_mv_skid.png", "MV collection", "Step-up skids · RMUs · MV cables"],
    ["tbea_power_trafo.png", "Substation", "Power transformers · GIS · CT/VT"], ["tbea_relay.png", "Control", "Relays · automation · SCADA · EMS"],
    ["tbea_battery.png", "Storage", "LFP containers · PCS · BESS skids"], ["tbea_gis_550.png", "Transmission", "HV cables · conductors · GIS · HVDC equipment"]];
  chain.forEach(([f, t, d], i) => {
    const x = MX + i * 2.05;
    rect(s, x, 1.85, 1.9, 2.95, C.PALE, { rounded: true, r: 0.06 });
    rect(s, x + 0.12, 1.97, 1.66, 1.3, C.WHITE, { rounded: true, r: 0.05 });
    img(s, f, x + 0.17, 2.02, 1.56, 1.2, { contain: true });
    T(s, t, { x: x + 0.12, y: 3.36, w: 1.7, h: 0.32, fontSize: 12.5, bold: true, color: C.TB });
    T(s, d, { x: x + 0.12, y: 3.72, w: 1.68, h: 1.0, fontSize: 11, color: C.MUTED });
    if (i < 5) line(s, x + 1.9, 3.32, x + 2.05, 3.32, C.TB, 2, { end: "triangle" });
  });
  T(s, "PROOF POINTS TURKISH BUYERS WILL ASK FOR", { x: MX, y: 5.05, w: 8, h: 0.28, fontSize: 10.5, bold: true, color: C.TB, charSpacing: 1.5 });
  const pp = [["500,000 MVA", "annual transformer production capacity"], ["20,000+", "GIS bays delivered (72.5–800 kV)"], ["90+", "countries and regions served"], ["$30bn+", "overseas projects signed"], ["IEC · EN", "standards compliance across the portfolio"]];
  pp.forEach(([n, l], i) => {
    const x = MX + i * 2.45;
    rect(s, x, 5.4, 2.3, 1.38, C.TBL, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.18, y: 5.5, w: 2.0, h: 0.5, fontSize: 21, bold: true, color: C.TB });
    T(s, l, { x: x + 0.18, y: 6.02, w: 2.0, h: 0.65, fontSize: 11, color: C.MUTED });
  });
  ctx.src(s, "Source: TBEA Electrical Equipment Group corporate presentation (July 2026). Product images: TBEA.");

  // 32 — The equation
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What Ulusoy adds", title: "Two halves of one route to market", tb: true,
    sub: "TBEA brings what Ulusoy cannot build. Ulusoy brings what TBEA cannot easily build from China." });
  const tb = ["Manufacturing", "Engineering", "Technology", "International references", "Scale", "Financing access"];
  const ul = ["Market intelligence", "Project origination", "Senior-level access", "EPC alliances", "Local commercial coordination", "Tender intelligence", "Local execution relationships", "Regional project pipeline"];
  rect(s, MX, 1.85, 3.6, 4.95, C.TB, { rounded: true, r: 0.06 });
  T(s, "TBEA CAPABILITY", { x: MX + 0.3, y: 2.05, w: 3, h: 0.3, fontSize: 12, bold: true, color: "D5E3F6", charSpacing: 2 });
  tb.forEach((t, i) => { const y = 2.55 + i * 0.66; rect(s, MX + 0.3, y, 3.0, 0.54, "1F63B5", { rounded: true, r: 0.05 }); T(s, t, { x: MX + 0.45, y, w: 2.8, h: 0.54, fontSize: 13.5, bold: true, color: C.WHITE, valign: "middle" }); });
  T(s, "+", { x: 4.2, y: 3.85, w: 0.6, h: 0.8, fontSize: 40, bold: true, color: C.BLUE, align: "center", valign: "middle" });
  rect(s, 4.8, 1.85, 4.0, 4.95, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ULUSOY CAPABILITY", { x: 5.1, y: 2.05, w: 3.4, h: 0.3, fontSize: 12, bold: true, color: C.MID, charSpacing: 2 });
  ul.forEach((t, i) => { const y = 2.5 + i * 0.52; rect(s, 5.1, y, 3.4, 0.44, C.DEEP, { rounded: true, r: 0.05 }); T(s, t, { x: 5.25, y, w: 3.2, h: 0.44, fontSize: 12.5, bold: true, color: C.WHITE, valign: "middle" }); });
  T(s, "=", { x: 8.8, y: 3.85, w: 0.6, h: 0.8, fontSize: 40, bold: true, color: C.BLUE, align: "center", valign: "middle" });
  rect(s, 9.4, 1.85, 3.33, 4.95, C.TBL, { rounded: true, r: 0.06, line: { color: C.TB, width: 1.5 } });
  await ctx.iconCircle(s, "LuRepeat", 10.56, 2.2, 1.0, C.WHITE, C.TB);
  T(s, "COMBINED PLATFORM", { x: 9.6, y: 3.4, w: 2.93, h: 0.3, fontSize: 12, bold: true, color: C.TB, align: "center", charSpacing: 2 });
  T(s, "A repeatable route to market", { x: 9.6, y: 3.75, w: 2.93, h: 0.9, fontSize: 20, bold: true, color: C.INK, align: "center" });
  T(s, "Project after project, account after account — in Türkiye, the Balkans and the Middle East.", { x: 9.6, y: 4.75, w: 2.93, h: 1.3, fontSize: 12.5, color: C.MUTED, align: "center" });

  // 33 — Operating chain
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What Ulusoy adds", title: "The operating chain: from first signal to the next project", tb: true,
    sub: "Ulusoy is not a messenger between buyer and factory. We run the commercial process end to end — with TBEA." });
  const steps = [["LuRadar", "Market intelligence", "U"], ["LuTarget", "Opportunity origination", "U"], ["LuUsers", "Customer access", "U"], ["LuCpu", "Technical match", "J"], ["LuCoins", "EPC / financing structure", "J"],
    ["LuGavel", "Tender & negotiation", "J"], ["LuTruck", "Delivery", "T"], ["LuWrench", "Service", "J"], ["LuRepeat", "Next project", "U"]];
  const own = { U: ["Ulusoy leads", C.NAVY], T: ["TBEA leads", C.TB], J: ["Joint", C.BLUE] };
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
  ctx.head(s, { eyebrow: "What Ulusoy adds", title: "Not an intermediary — a market-development layer", tb: true,
    sub: "The difference matters for how TBEA should structure the relationship." });
  const cmp = [["Focus", "One transaction", "A multi-year pipeline of projects and accounts"], ["Where it starts", "After an RFQ is already issued", "Before the project is designed — at origination"],
    ["Customer relationship", "Passes price messages", "Senior access and long-term account management"], ["Information for TBEA", "Little or none", "Market, tender and competitor intelligence shared with TBEA"],
    ["After the sale", "Moves on", "Service coordination, spares, references and the next project"], ["Result for TBEA", "Occasional orders", "A durable, growing market position in the region"]];
  const c1 = MX, c2 = 3.4, c3 = 7.3, rw = 12.73;
  rect(s, c2, 1.8, 3.75, 0.6, C.PALE, { rounded: true, r: 0.05 });
  T(s, "Typical agent or trader", { x: c2, y: 1.8, w: 3.75, h: 0.6, fontSize: 14, bold: true, color: C.MUTED, align: "center", valign: "middle" });
  rect(s, c3, 1.8, rw - c3, 0.6, C.TB, { rounded: true, r: 0.05 });
  T(s, "Ulusoy as market-development partner", { x: c3, y: 1.8, w: rw - c3, h: 0.6, fontSize: 14, bold: true, color: C.WHITE, align: "center", valign: "middle" });
  cmp.forEach(([a, b, c], i) => {
    const y = 2.52 + i * 0.72;
    rect(s, c1, y, rw - c1, 0.64, i % 2 ? C.WHITE : C.PALE);
    T(s, a, { x: c1 + 0.15, y, w: 2.6, h: 0.64, fontSize: 13, bold: true, valign: "middle" });
    T(s, b, { x: c2 + 0.2, y, w: 3.45, h: 0.64, fontSize: 12.5, color: C.MUTED, valign: "middle" });
    T(s, c, { x: c3 + 0.2, y, w: rw - c3 - 0.35, h: 0.64, fontSize: 12.5, bold: true, color: C.INK, valign: "middle" });
  });
};
