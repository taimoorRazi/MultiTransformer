module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Partnership model";

  // 49 — Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "crrc_kz_lift.png", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 40 });
  ctx.divider(s, "05", "A staged partnership model", "Protected, earned and built step by step — not blanket exclusivity on day one.",
    "Market development → market execution → localization, each stage unlocked by results.");
  T(s, "CRRC turbine installation, Kazakhstan", { x: 8.3, y: 7.08, w: 4.85, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // 50 — Staircase overview
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Partnership model", title: "Three stages — each one earned by the results of the last", tb: true,
    sub: "We are not asking for exclusivity on all CRRC products today. We are proposing a structure that grows with proven demand." });
  const st = [["STAGE 1", "Market development", "Now – 12 months", ["Complete the ongoing project as a reference", "Register and pursue first private projects", "Bankability and certification package", "Win the first orders"], C.NAVY],
    ["STAGE 2", "Market execution", "Years 1 – 3", ["Repeatable wind pipeline", "Local O&M and spare parts", "Storage and solar alongside wind", "Local tower and blade partners"], C.BLUE],
    ["STAGE 3", "Localization", "When volume justifies", ["Nacelle assembly in Türkiye", "Access to YEKA tenders", "Selected local manufacturing", "Regional supply platform"], C.TB]];
  st.forEach(([n, t, w, items, col], i) => {
    const x = MX + i * 4.1, y = 3.75 - i * 0.6, h = 3.05 + i * 0.6;
    rect(s, x, y, 3.85, h, col, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.25, y: y + 0.18, w: 2, h: 0.26, fontSize: 10.5, bold: true, color: "C9D9EE", charSpacing: 2 });
    T(s, t, { x: x + 0.25, y: y + 0.45, w: 3.4, h: 0.42, fontSize: 19, bold: true, color: C.WHITE });
    T(s, w, { x: x + 0.25, y: y + 0.88, w: 3.4, h: 0.3, fontSize: 12, color: "C9D9EE", italic: true });
    T(s, items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j < items.length - 1 } })), { x: x + 0.25, y: y + 1.28, w: 3.4, h: 1.25, fontSize: 12.5, color: C.WHITE, paraSpaceAfter: 3 });
    if (i > 0) {
      rect(s, x + 0.2, y + h - 0.62, 3.45, 0.45, i === 1 ? "185D96" : "A50D26", { rounded: true, r: 0.05 });
      T(s, i === 1 ? "Unlocked by: registered pipeline + first awards" : "Unlocked by: repeatable volume", { x: x + 0.3, y: y + h - 0.62, w: 3.3, h: 0.45, fontSize: 10.5, bold: true, color: C.WHITE, valign: "middle" });
    }
    if (i < 2) line(s, x + 3.88, y + 0.6, x + 4.07, y + 0.6, C.MID, 2, { end: "triangle" });
  });
  const pr = ["Start focused", "Protect what is originated", "Expand with proof", "Invest only behind demand"];
  pr.forEach((t, i) => {
    const x = MX + i * 3.08;
    rect(s, x, 1.8, 2.93, 0.55, C.TBL, { rounded: true, r: 0.06 });
    T(s, (i + 1) + "  " + t, { x: x + 0.15, y: 1.8, w: 2.7, h: 0.55, fontSize: 12.5, bold: true, color: C.TB, valign: "middle" });
  });

  // 51 — Stage 1 roles
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Stage 1 · Market development", title: "Stage 1: a proposed division of roles", tb: true,
    sub: "Ulusoy focuses on market development; CRRC on technology, certification and industrial support." });
  const ur = ["Originates opportunities and develops customers", "Maps decision chains and procurement timing", "Introduces and aligns EPC partners", "Coordinates CRRC technical teams with customers", "Supports tenders: documents, clarifications, schedule", "Supports commercial negotiation"];
  const tr = ["Turbine platforms and engineering", "Pricing and commercial offers", "Type certificates, power curves, references", "Bankability: warranties and availability", "Factory and wind-farm visits for customers"];
  rect(s, MX, 1.85, 5.6, 3.95, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ULUSOY", { x: MX + 0.3, y: 2.0, w: 3, h: 0.4, fontSize: 18, bold: true, color: C.WHITE });
  ur.forEach((t, i) => {
    const y = 2.55 + i * 0.52;
    circle(s, MX + 0.32, y + 0.1, 0.2, C.MID);
    T(s, t, { x: MX + 0.7, y, w: 4.75, h: 0.42, fontSize: 13, color: C.WHITE, valign: "middle" });
  });
  rect(s, 7.13, 1.85, 5.6, 3.95, C.TB, { rounded: true, r: 0.06 });
  T(s, "CRRC", { x: 7.43, y: 2.0, w: 3, h: 0.4, fontSize: 18, bold: true, color: C.WHITE });
  tr.forEach((t, i) => {
    const y = 2.55 + i * 0.52;
    circle(s, 7.45, y + 0.1, 0.2, "F6C9D1");
    T(s, t, { x: 7.83, y, w: 4.75, h: 0.42, fontSize: 13, color: C.WHITE, valign: "middle" });
  });
  rect(s, 6.27, 3.38, 0.8, 0.8, C.WHITE, { rounded: true, r: 0.4, line: { color: C.TB, width: 2 } });
  await ctx.icon(s, "LuHandshake", 6.45, 3.56, 0.44, C.TB);
  rect(s, MX, 6.0, 12.133, 0.8, C.TBL, { rounded: true, r: 0.06, line: { color: C.TB, width: 1.25 } });
  await ctx.icon(s, "LuShieldCheck", MX + 0.25, 6.15, 0.5, C.TB);
  T(s, "Projects and accounts introduced by Ulusoy are formally registered with CRRC and protected.", { x: MX + 0.95, y: 6.0, w: 11.0, h: 0.8, fontSize: 15, bold: true, color: C.TB, valign: "middle" });

  // 52 — Registration & protection
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Project & account protection", title: "A simple, transparent registration mechanism", tb: true,
    sub: "Protection is what allows Ulusoy to invest in market development — and gives CRRC one clear channel per account." });
  const fl = [["LuSearch", "Identify", "Ulusoy identifies a project or account"], ["LuFileText", "Register", "Customer, project, scope, stage and evidence submitted to CRRC"],
    ["LuCircleCheck", "Confirm", "CRRC confirms registration within an agreed time"], ["LuShieldCheck", "Protect", "Protected for an agreed period, renewed with activity"],
    ["LuUsers", "Pursue jointly", "One channel: direct enquiries for the project are routed through it"]];
  for (let i = 0; i < fl.length; i++) {
    const [ic, t, d] = fl[i]; const x = MX + i * 2.45;
    await ctx.iconCircle(s, ic, x + 0.62, 1.95, 1.0, i === 3 ? C.TB : C.TBL, i === 3 ? C.WHITE : C.TB);
    if (i < 4) line(s, x + 1.7, 2.45, x + 3.0, 2.45, C.MID, 2, { end: "triangle" });
    T(s, (i + 1) + "  " + t, { x, y: 3.08, w: 2.25, h: 0.35, fontSize: 15, bold: true, align: "center" });
    T(s, d, { x: x + 0.05, y: 3.45, w: 2.15, h: 0.95, fontSize: 11.5, color: C.MUTED, align: "center" });
  }
  const pr2 = [["Transparency", "Both sides see the full registered list at all times"], ["One point of contact", "Each registered account has one coordinated CRRC–Ulusoy team"],
    ["Activity-based", "Protection continues while the opportunity is actively developed"], ["Clear resolution", "A simple rule for overlaps and disputes, agreed in advance"]];
  pr2.forEach(([t, d], i) => {
    const x = MX + i * 3.08;
    rect(s, x, 4.65, 2.93, 1.35, C.PALE, { rounded: true, r: 0.06 });
    T(s, t, { x: x + 0.2, y: 4.78, w: 2.6, h: 0.3, fontSize: 13, bold: true, color: C.TB });
    T(s, d, { x: x + 0.2, y: 5.1, w: 2.6, h: 0.8, fontSize: 11.5, color: C.MUTED });
  });
  rect(s, MX, 6.2, 12.133, 0.6, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "Our suggestion: discuss the principle today, and prepare the details together in a working session.", { x: MX + 0.3, y: 6.2, w: 11.6, h: 0.6, fontSize: 13, bold: true, color: C.WHITE, valign: "middle" });

  // 53 — Stage 2
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Stage 2 · Market execution", title: "Stage 2: from first orders to a repeatable business", tb: true,
    sub: "As the pipeline grows, we strengthen local delivery so Turkish customers see CRRC as a local supplier." });
  const s2 = [["LuCpu", "Local engineering support", "Application engineers in Türkiye for bids, design reviews and commissioning"],
    ["LuWrench", "Local O&M service", "Turbine maintenance, remote monitoring and fast fault response"],
    ["LuPackage", "Spare parts", "Critical spares held in Türkiye — and logistics handled by the group"],
    ["LuHardHat", "Stronger EPC relationships", "Framework agreements with key EPCs for repeat projects"],
    ["LuUserCheck", "CRRC technical presence", "CRRC specialists working alongside the Ulusoy team"],
    ["LuTrendingUp", "Larger projects", "Larger wind and storage projects, built on Stage 1 references"]];
  for (let i = 0; i < s2.length; i++) {
    const [ic, t, d] = s2[i]; const x = MX + (i % 3) * 4.08, y = 1.85 + Math.floor(i / 3) * 2.0;
    rect(s, x, y, 3.92, 1.82, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.25, 0.7, C.WHITE, C.BLUE);
    T(s, t, { x: x + 1.08, y: y + 0.28, w: 2.7, h: 0.6, fontSize: 14, bold: true, valign: "middle" });
    T(s, d, { x: x + 0.22, y: y + 1.05, w: 3.5, h: 0.7, fontSize: 11.5, color: C.MUTED });
  }
  rect(s, MX, 5.95, 12.133, 0.85, C.TBL, { rounded: true, r: 0.06 });
  T(s, [{ text: "Trigger to enter Stage 2: ", options: { bold: true, color: C.TB } }, { text: "first orders delivered, a registered pipeline with several active bids, and agreed priority product families." }],
    { x: MX + 0.3, y: 5.95, w: 11.6, h: 0.85, fontSize: 13.5, valign: "middle" });

  // 54 — Stage 3 localization
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Stage 3 · Localization", title: "Localization follows proven demand — it does not precede it", tb: true,
    sub: "Each step is taken only when volume makes it economic. No factory on day one." });
  const lad = [["O&M service center", "Turbine service, training, remote monitoring"], ["Spares & repair hub", "Regional stock for Türkiye and neighbours"], ["Local towers & blades", "Sourced from Turkish makers"],
    ["Nacelle assembly", "When volume justifies it — unlocks YEKA"], ["JV / technology cooperation", "With Ulusoy and Turkish industry"], ["Regional supply platform", "Türkiye as hub for Balkans, Middle East, Central Asia"]];
  lad.forEach(([t, d], i) => {
    const x = MX + i * 2.05, h = 1.25 + i * 0.5, y = 6.35 - h;
    rect(s, x, y, 1.9, h, i < 2 ? C.BLUE : i < 4 ? C.TB : C.NAVY, { rounded: true, r: 0.05 });
    T(s, t, { x: x + 0.12, y: y + 0.12, w: 1.68, h: 0.6, fontSize: 12.5, bold: true, color: C.WHITE });
    T(s, d, { x: x + 0.12, y: y + 0.72, w: 1.68, h: 0.55, fontSize: 10, color: "D5E3F6" });
  });
  line(s, MX, 6.5, 12.73, 6.5, C.MID, 2, { end: "triangle" });
  T(s, "Volume and proven demand  →", { x: 8.5, y: 6.55, w: 4.2, h: 0.28, fontSize: 11, color: C.MUTED, align: "right", italic: true });
  rect(s, MX, 1.85, 6.0, 1.55, C.PALE, { rounded: true, r: 0.06 });
  T(s, "WHY IT MATTERS LATER", { x: MX + 0.25, y: 1.98, w: 4, h: 0.26, fontSize: 10, bold: true, color: C.TB, charSpacing: 1.5 });
  T(s, [{ text: "Local content unlocks YEKA tenders and incentives (towers, blades, nacelle, generator)", options: { bullet: true, breakLine: true } },
    { text: "It matches the China–Türkiye MoU's focus on local turbine production", options: { bullet: true } }], { x: MX + 0.25, y: 2.28, w: 5.6, h: 1.05, fontSize: 12, paraSpaceAfter: 3 });
};
