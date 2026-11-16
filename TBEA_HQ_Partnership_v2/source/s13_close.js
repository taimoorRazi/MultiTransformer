module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Vision · Next steps";

  // 55 — What success could look like
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "3–5 year vision", title: "What success could look like", tb: true,
    sub: "Milestones we can both measure — without speculative revenue forecasts." });
  const ph = [["YEAR 1", "First protected projects", ["Registration mechanism in place", "Priority products qualified", "EPC alliances signed", "First orders won"], C.NAVY],
    ["YEARS 2 – 3", "A repeatable pipeline", ["Several orders per year", "Local service and spares", "First transmission / IFI package", "Larger storage projects"], C.BLUE],
    ["YEARS 3 – 5", "A regional platform", ["Türkiye as a regional hub", "Local assembly if justified", "Balkans and Middle East projects", "Strategic investment if justified"], C.TB]];
  ph.forEach(([y_, t, items, col], i) => {
    const x = MX + i * 4.08;
    rect(s, x, 1.85, 3.92, 2.85, C.PALE, { rounded: true, r: 0.06 });
    rect(s, x, 1.85, 3.92, 1.05, col, { rounded: true, r: 0.06 });
    T(s, y_, { x: x + 0.25, y: 1.93, w: 3.4, h: 0.28, fontSize: 11, bold: true, color: "C9D9EE", charSpacing: 2 });
    T(s, t, { x: x + 0.25, y: 2.22, w: 3.5, h: 0.5, fontSize: 18, bold: true, color: C.WHITE });
    T(s, items.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j < items.length - 1 } })), { x: x + 0.25, y: 3.05, w: 3.5, h: 1.6, fontSize: 13.5, paraSpaceAfter: 5 });
    if (i < 2) line(s, x + 3.94, 2.37, x + 4.06, 2.37, C.MID, 2, { end: "triangle" });
  });
  T(s, "GEOGRAPHY", { x: MX, y: 5.72, w: 2, h: 0.25, fontSize: 9.5, bold: true, color: C.TB, charSpacing: 2 });
  T(s, "WE PROPOSE TO TRACK TOGETHER", { x: MX, y: 4.88, w: 4, h: 0.25, fontSize: 9.5, bold: true, color: C.TB, charSpacing: 2 });
  ["Registered opportunities", "Products qualified", "Bids submitted", "Orders won", "Service capability in place"].forEach((k, i) => {
    rect(s, MX + i * 2.45, 5.17, 2.3, 0.45, C.TBL, { rounded: true, r: 0.06 });
    T(s, k, { x: MX + i * 2.45, y: 5.17, w: 2.3, h: 0.45, fontSize: 11.5, bold: true, color: C.TB, align: "center", valign: "middle" });
  });
  const geo = [["Türkiye", 0, 12.133, C.NAVY], ["Balkans — Bulgaria, North Macedonia and neighbours", 0, 12.133, C.BLUE], ["Middle East", 4.08, 8.053, C.TB], ["Central Asia — where appropriate", 8.16, 3.973, "6E8FB5"]];
  geo.forEach(([g, x0, w, col], i) => {
    const y = 6.0 + i * 0.22;
    rect(s, MX + x0, y, w, 0.19, col, { rounded: true, r: 0.05 });
    T(s, g, { x: MX + x0 + 0.15, y, w: w - 0.2, h: 0.19, fontSize: 9, bold: true, color: C.WHITE, valign: "middle" });
  });

  // 56 — What we need from TBEA HQ
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Our requests", title: "What we ask from TBEA headquarters", tb: true, sub: "Eight concrete decisions that let us start working immediately." });
  const asks = [["Nominate", "the responsible TBEA team and one senior sponsor for the partnership"],
    ["Agree", "project and account registration and protection mechanics — in principle today"],
    ["Identify", "the priority product families for Türkiye and the region"],
    ["Provide", "qualification, type-test and reference packages for those products"],
    ["Allow", "direct coordination with the relevant factories and engineering teams"],
    ["Review", "the initial project pipeline together — starting with Bulgaria and North Macedonia"],
    ["Evaluate", "financing support where it strengthens a bid"],
    ["Schedule", "a follow-up working session within 30 days of this meeting"]];
  asks.forEach(([v, d], i) => {
    const x = MX + (i % 2) * 6.13, y = 1.85 + Math.floor(i / 2) * 1.2;
    rect(s, x, y, 5.95, 1.05, i % 2 === 0 && Math.floor(i / 2) === 0 ? C.TBL : C.PALE, { rounded: true, r: 0.06 });
    circle(s, x + 0.22, y + 0.24, 0.58, C.TB);
    T(s, String(i + 1), { x: x + 0.22, y: y + 0.24, w: 0.58, h: 0.58, fontSize: 17, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, [{ text: v + " ", options: { bold: true, color: C.TB } }, { text: d, options: { color: C.INK } }], { x: x + 1.0, y: y + 0.08, w: 4.8, h: 0.9, fontSize: 13.5, valign: "middle" });
  });

  // 57 — Next 90 days
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Proposed next steps", title: "The first 90 days after this meeting", tb: true, sub: "A practical sequence — so this meeting turns into business quickly." });
  const tl = [["Week 0", "HQ meeting", "Agree principles and the partnership team"], ["Weeks 1–2", "Team & contacts", "TBEA team nominated; product-factory contacts shared"],
    ["Weeks 3–4", "Registration framework", "Registration terms drafted; first projects registered"], ["Weeks 4–6", "Qualification packages", "Type tests, references and datasheets for priority products"],
    ["Weeks 6–8", "Joint working session", "Pipeline review in İstanbul; customer and EPC meetings"], ["Weeks 8–12", "First joint offers", "Offers for Bulgaria / North Macedonia packages and first Türkiye bids"]];
  const ty = 3.2, bw = 1.85, step = (12.133 - bw) / 5;
  line(s, MX + bw / 2, ty, MX + 12.133 - bw / 2, ty, C.TB, 3);
  tl.forEach(([w, t, d], i) => {
    const bx = MX + i * step, cx = bx + bw / 2;
    circle(s, cx - 0.18, ty - 0.18, 0.36, i === 0 ? C.NAVY : C.TB, { line: { color: C.WHITE, width: 2 } });
    T(s, w, { x: bx, y: 2.2, w: bw, h: 0.32, fontSize: 13, bold: true, color: C.TB, align: "center" });
    T(s, t, { x: bx, y: 2.52, w: bw, h: 0.42, fontSize: 12, bold: true, color: C.INK, align: "center" });
    rect(s, bx, 3.6, bw, 1.6, C.PALE, { rounded: true, r: 0.06 });
    T(s, d, { x: bx + 0.12, y: 3.68, w: bw - 0.24, h: 1.45, fontSize: 11.5, color: C.MUTED, align: "center", valign: "middle" });
  });
  rect(s, MX, 5.55, 12.133, 1.25, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "TODAY'S DESIRED OUTCOME", { x: MX + 0.35, y: 5.68, w: 5, h: 0.28, fontSize: 10.5, bold: true, color: C.MID, charSpacing: 2 });
  T(s, "A shared decision to build this partnership, a named TBEA team, and a date for the working session.", { x: MX + 0.35, y: 5.98, w: 11.4, h: 0.7, fontSize: 17, bold: true, color: C.WHITE });

  // 58 — Closing
  s = ctx.slide("BLANK_DARK", SEC);
  img(s, "karnobat_dusk.png", 0, 0, 13.333, 7.5, { fy: 0.55 });
  rect(s, 0, 0, 13.333, 7.5, C.NAVY, { transparency: 22 });
  s.addImage({ path: L.A + "ul_logo_white.png", x: MX, y: 0.62, w: 1.75, h: 0.4 });
  T(s, "TBEA  ×  ULUSOY", { x: MX, y: 1.8, w: 8, h: 0.4, fontSize: 14, bold: true, color: C.MID, charSpacing: 4 });
  T(s, [{ text: "TBEA has the technology and industrial scale.", options: { breakLine: true } }, { text: "Ulusoy has the market access and the project pipeline.", options: { breakLine: true } },
    { text: " ", options: { breakLine: true, fontSize: 12 } }, { text: "Let us build the bridge together.", options: { bold: true, color: C.WHITE } }],
    { x: MX, y: 2.35, w: 11, h: 2.6, fontSize: 30, color: C.ICE });
  T(s, "Türkiye  ·  Balkans  ·  Middle East", { x: MX, y: 5.35, w: 8, h: 0.35, fontSize: 15, color: C.MID, charSpacing: 2 });
  T(s, "“Everything on Time.” — since 1937", { x: MX, y: 6.55, w: 8, h: 0.35, fontSize: 13, italic: true, color: C.MID });
  T(s, "Karnobat solar project, Bulgaria", { x: 7.0, y: 7.08, w: 6.1, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });
};
