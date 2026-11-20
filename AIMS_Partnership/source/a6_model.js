module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "How we work together";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "aims_agv.jpg", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "04", "How we could work together", "Clear roles, one project journey, a staged model.",
    "Based on what AIMS proposed in our first conversations.");
  T(s, "AIMS AGV in operation", { x: 8.3, y: 7.08, w: 4.8, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // Project journey
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Project journey", title: "From first contact to the next phase", tb: true,
    sub: "As AIMS suggested, its solution engineers join the customer survey — no information lost between teams." });
  const steps = [["LuSearch", "Lead & qualification", "Ulusoy finds and qualifies the project", "U"],
    ["LuClipboardList", "Joint site survey", "AIMS solution engineers and our team at the customer", "J"],
    ["LuRuler", "Concept & budget", "AIMS designs the concept and budget price", "A"],
    ["LuPlane", "Reference visit", "Customer visits AIMS projects in China", "J"],
    ["LuFileCheck", "Proposal & contract", "One proposal, agreed together", "J"],
    ["LuHardHat", "Delivery", "AIMS delivers and commissions; we coordinate locally", "A"],
    ["LuWrench", "Service & next phase", "Local service and spares; the next phase starts here", "U"]];
  const own = { U: ["ULUSOY", C.NAVY], A: ["AIMS", C.TB], J: ["JOINT", C.BLUE] };
  const sw = 1.66, sg = 0.085;
  for (const [i, [ic, t, d, o]] of steps.entries()) {
    const x = MX + i * (sw + sg);
    rect(s, x, 1.95, sw, 3.55, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + sw / 2 - 0.36, 2.15, 0.72, C.WHITE, own[o][1]);
    T(s, String(i + 1), { x: x + 0.1, y: 2.05, w: 0.4, h: 0.3, fontSize: 11, bold: true, color: C.MUTED });
    T(s, t, { x: x + 0.1, y: 3.0, w: sw - 0.2, h: 0.6, fontSize: 13, bold: true, align: "center", valign: "middle" });
    T(s, d, { x: x + 0.1, y: 3.65, w: sw - 0.2, h: 1.1, fontSize: 10.5, color: C.MUTED, align: "center" });
    ctx.tag(s, own[o][0], x + sw / 2 - 0.55, 4.95, 1.1, C.WHITE, own[o][1], 9.5);
    if (i < steps.length - 1) line(s, x + sw + 0.005, 3.3, x + sw + sg - 0.005, 3.3, C.MID, 1.5, { end: "triangle" });
  }
  rect(s, MX, 5.8, 12.133, 0.95, C.TBL, { rounded: true, r: 0.06 });
  T(s, [{ text: "What AIMS needs for a concept: ", options: { bold: true, color: C.TB } }, { text: "product mix, annual volumes, building layout and takt times. We collect this together with AIMS's engineers during the survey." }],
    { x: MX + 0.3, y: 5.8, w: 11.6, h: 0.95, fontSize: 14, valign: "middle" });

  // What Turkish customers will ask
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Export readiness", title: "What Turkish customers will ask — and our answers", tb: true,
    sub: "Most questions are about compliance, service and integration. We should answer them in the first proposal." });
  const qa = [["LuShieldCheck", "CE marking and EU machinery rules", "Handled by a third-party CE service provider, coordinated locally by Ulusoy"],
    ["LuWrench", "Who fixes it when it stops?", "Local Ulusoy service team, spare parts stored on site, AIMS remote support and on-site visits"],
    ["LuLink", "Will it connect to our ERP and machines?", "AIMS systems connect through APIs; interfaces defined in each project"],
    ["LuLanguages", "Language and training", "English interfaces; Turkish screens and training to be agreed per project"],
    ["LuAward", "Can we see it working?", "Reference visits and videos of AIMS projects in China"],
    ["LuCalendar", "How long will it take?", "Eaglerise Thailand: about 12 months from contract to final acceptance"]];
  for (const [i, [ic, q, a]] of qa.entries()) {
    const x = MX + (i % 2) * 6.12, y = 1.9 + Math.floor(i / 2) * 1.6;
    rect(s, x, y, 5.95, 1.45, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.38, 0.68, C.WHITE, C.TB);
    T(s, q, { x: x + 1.1, y: y + 0.18, w: 4.65, h: 0.36, fontSize: 14, bold: true });
    T(s, a, { x: x + 1.1, y: y + 0.58, w: 4.65, h: 0.8, fontSize: 12, color: C.MUTED });
  }
  ctx.src(s, "Source: AIMS answers to Ulusoy (Nov 2026). Points marked 'per project' to be confirmed in the first proposal.");

  // Staged model
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "A staged model", title: "Start with one project, then build a long-term presence", tb: true,
    sub: "Each step is earned by results. Neither side needs to commit to more than the next step." });
  const stg = [["STEP 1", "First joint project", "Next 3–6 months", ["One Turkish lead analysed together", "Joint site survey and concept", "Reference visit for the customer", "Working rules agreed in writing"], C.NAVY, 2.55],
    ["STEP 2", "Cooperation agreement", "After the first project", ["Representation for agreed sectors", "Project registration and one channel per customer", "Joint marketing to transformer and battery makers", "Local service capability"], C.BLUE, 2.15],
    ["STEP 3", "Regional platform", "When volume justifies", ["Local service centre and spare-parts stock", "Türkiye as a base for the Middle East, Balkans and Central Asia", "Selected local assembly or sourcing"], C.TB, 1.75]];
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
