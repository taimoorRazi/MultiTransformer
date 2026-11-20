module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Opening";

  // 1 — Cover
  let s = ctx.slide("BLANK_DARK", SEC);
  img(s, "crrc_turbine_onshore.png", 6.55, 0, 6.783, 7.5, { fx: 0.42 });
  rect(s, 6.55, 0, 6.783, 7.5, C.NAVY, { transparency: 78 });
  s.addImage({ path: L.A + "ul_logo_white.png", x: MX, y: 0.62, w: 1.75, h: 0.4 });
  T(s, "STRATEGIC PARTNERSHIP PROPOSAL", { x: MX, y: 2.05, w: 5.6, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 4 });
  T(s, [{ text: "CRRC", options: { color: C.WHITE } }, { text: "  ×  ", options: { color: C.MID } }, { text: "ULUSOY", options: { color: C.WHITE } }],
    { x: MX, y: 2.45, w: 5.9, h: 0.95, fontSize: 42, bold: true });
  T(s, "Building a Regional Renewable Energy Partnership", { x: MX, y: 3.45, w: 5.6, h: 1.1, fontSize: 26, color: C.WHITE });
  T(s, "TÜRKİYE  ·  BALKANS  ·  MIDDLE EAST", { x: MX, y: 4.7, w: 5.6, h: 0.32, fontSize: 13, bold: true, color: C.MID, charSpacing: 3 });
  line(s, MX, 5.95, MX + 5.3, 5.95, C.DEEP, 0.75);
  T(s, "Presented to CRRC management  ·  Zhuzhou, China  ·  November 2026", { x: MX, y: 6.08, w: 5.7, h: 0.3, fontSize: 11, color: C.MID });
  T(s, "Confidential — prepared for discussion with CRRC", { x: MX, y: 6.42, w: 5.7, h: 0.26, fontSize: 9, color: "7E93A8", italic: true });
  T(s, "CRRC wind turbine", { x: 6.75, y: 7.08, w: 6.3, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // 2 — Why we are here
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Purpose of this meeting", title: "Why we are here",
    sub: "To explore a long-term business together in Türkiye, the Balkans and the Middle East." });
  const py = 1.95, ph = 3.45;
  // CRRC panel
  rect(s, MX, py, 5.0, ph, C.TB, { rounded: true, r: 0.06 });
  T(s, "CRRC", { x: MX + 0.4, y: py + 0.32, w: 4.2, h: 0.5, fontSize: 26, bold: true, color: C.WHITE });
  T(s, "INDUSTRIAL CAPABILITY", { x: MX + 0.4, y: py + 0.85, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: "F6C9D1", charSpacing: 2 });
  T(s, [
    { text: "Wind turbines, 5–12.5 MW onshore", options: { bullet: true, breakLine: true } },
    { text: "In-house chain: from IGBT to tower", options: { bullet: true, breakLine: true } },
    { text: "PV inverters, storage and hydrogen", options: { bullet: true, breakLine: true } },
    { text: "Global references, scale and financing", options: { bullet: true } }],
    { x: MX + 0.4, y: py + 1.4, w: 4.3, h: 1.85, fontSize: 16, color: C.WHITE, paraSpaceAfter: 6 });
  // Ulusoy panel
  const ux = W_(13.333) - MX - 5.0;
  rect(s, ux, py, 5.0, ph, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ULUSOY", { x: ux + 0.4, y: py + 0.32, w: 4.2, h: 0.5, fontSize: 26, bold: true, color: C.WHITE });
  T(s, "MARKET ACCESS", { x: ux + 0.4, y: py + 0.85, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: C.MID, charSpacing: 2 });
  T(s, [
    { text: "89 years of relationships in Türkiye", options: { bullet: true, breakLine: true } },
    { text: "Access to developers, EPCs and industry", options: { bullet: true, breakLine: true } },
    { text: "Real projects and a regional pipeline", options: { bullet: true, breakLine: true } },
    { text: "Local commercial and execution layer", options: { bullet: true } }],
    { x: ux + 0.4, y: py + 1.4, w: 4.3, h: 1.85, fontSize: 16, color: C.WHITE, paraSpaceAfter: 6 });
  // bridge
  const bx = MX + 5.0, bw = ux - bx;
  line(s, bx + 0.05, py + ph / 2, ux - 0.05, py + ph / 2, C.MID, 2.5, { dash: "dash" });
  circle(s, bx + bw / 2 - 0.42, py + ph / 2 - 0.42, 0.84, C.WHITE, { line: { color: C.BLUE, width: 2.5 } });
  T(s, "+", { x: bx + bw / 2 - 0.42, y: py + ph / 2 - 0.44, w: 0.84, h: 0.84, fontSize: 34, bold: true, color: C.BLUE, align: "center", valign: "middle" });
  // result band
  rect(s, MX, 5.72, 12.133, 1.1, C.PALE, { rounded: true, r: 0.06 });
  T(s, "TOGETHER", { x: MX + 0.45, y: 6.12, w: 2.0, h: 0.3, fontSize: 12, bold: true, color: C.BLUE, charSpacing: 3 });
  T(s, "A long-term regional business in wind, solar and storage — built step by step, project by project.",
    { x: MX + 2.45, y: 5.75, w: 9.3, h: 1.05, fontSize: 18, bold: true, color: C.INK, valign: "middle" });

  // 3 — Journey
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Agenda", title: "Our conversation today", sub: "One continuous story — from who we are to a concrete next step." });
  const steps = [
    ["Who Ulusoy is", "Nearly nine decades of operating history and partnerships"],
    ["Why Türkiye matters now", "A structural electricity and grid investment cycle"],
    ["Where CRRC can enter", "The realistic entry routes for wind, solar and storage"],
    ["Opportunities in our network", "Wind, solar and storage projects in Türkiye, North Macedonia, Bulgaria and the Middle East"],
    ["Partnership model", "A staged, protected, long-term structure"],
    ["Next steps", "What we suggest as practical next steps"]];
  const sx = MX + 0.1, gap = 2.02, cy = 2.3;
  line(s, sx + 0.45, cy + 0.45, sx + gap * 5 + 0.45, cy + 0.45, C.ICE, 3);
  steps.forEach(([t, d], i) => {
    const x = sx + i * gap;
    circle(s, x, cy, 0.9, i === 5 ? C.TB : C.NAVY);
    T(s, String(i + 1).padStart(2, "0"), { x, y: cy, w: 0.9, h: 0.9, fontSize: 20, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, t, { x: x - 0.1, y: cy + 1.2, w: 1.85, h: 0.75, fontSize: 17, bold: true, color: C.INK });
    T(s, d, { x: x - 0.1, y: cy + 2.05, w: 1.8, h: 1.4, fontSize: 13, color: C.MUTED });
  });
  rect(s, MX, 6.0, 12.133, 0.72, C.PALE, { rounded: true, r: 0.06 });
  T(s, "Our aim today: share our view, hear CRRC's view, and agree practical next steps.",
    { x: MX + 0.4, y: 6.0, w: 11.4, h: 0.72, fontSize: 15, bold: true, color: C.DEEP, valign: "middle" });
};
function W_(w) { return w; }
