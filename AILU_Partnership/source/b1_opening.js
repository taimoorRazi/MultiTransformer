module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Opening";

  // 1 — Cover
  let s = ctx.slide("BLANK_DARK", SEC);
  img(s, "ul_roro.png", 6.55, 0, 6.783, 7.5, { fx: 0.5 });
  rect(s, 6.55, 0, 6.783, 7.5, C.NAVY, { transparency: 80 });
  s.addImage({ path: L.A + "ul_logo_white.png", x: MX, y: 0.62, w: 1.75, h: 0.4 });
  T(s, "STRATEGIC PARTNERSHIP PROPOSAL", { x: MX, y: 2.05, w: 5.8, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 4 });
  T(s, [{ text: "AILU", options: { color: C.WHITE } }, { text: "  ×  ", options: { color: C.MID } }, { text: "ULUSOY", options: { color: C.WHITE } }],
    { x: MX, y: 2.45, w: 5.9, h: 0.95, fontSize: 42, bold: true });
  T(s, "Opening the Turkish Market for AILU", { x: MX, y: 3.5, w: 5.7, h: 1.1, fontSize: 25, color: C.WHITE });
  T(s, "PACKAGING  ·  PACKING SYSTEMS  ·  PV FRAMES", { x: MX, y: 4.8, w: 5.95, h: 0.32, fontSize: 11, bold: true, color: C.MID, charSpacing: 1.5 });
  line(s, MX, 5.95, MX + 5.3, 5.95, C.DEEP, 0.75);
  T(s, "Presented to AILU Group  ·  Shanghai, China  ·  November 2026", { x: MX, y: 6.08, w: 5.8, h: 0.3, fontSize: 11, color: C.MID });
  T(s, "Prepared for discussion with AILU", { x: MX, y: 6.42, w: 5.7, h: 0.26, fontSize: 9, color: "7E93A8", italic: true });
  T(s, "Ulusoy Ro-Ro operations", { x: 6.75, y: 7.08, w: 6.3, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // 2 — Why we are here
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Purpose of this meeting", title: "Why we are here", tb: true,
    sub: "To explore how AILU and Ulusoy could build AILU's business in Türkiye, step by step." });
  const py = 1.95, ph = 3.45;
  rect(s, MX, py, 5.0, ph, C.TB, { rounded: true, r: 0.06 });
  T(s, "AILU", { x: MX + 0.4, y: py + 0.32, w: 4.2, h: 0.5, fontSize: 26, bold: true, color: C.WHITE });
  T(s, "INDUSTRIAL PACKAGING CAPABILITY", { x: MX + 0.4, y: py + 0.85, w: 4.4, h: 0.3, fontSize: 12, bold: true, color: "D5D9F5", charSpacing: 2 });
  T(s, [
    { text: "Multi-wall paper sacks for cement, chemicals and food", options: { bullet: true, breakLine: true } },
    { text: "REVOPAC filling and palletising lines", options: { bullet: true, breakLine: true } },
    { text: "IKKO cosmetic tubes and composite PV frames", options: { bullet: true, breakLine: true } },
    { text: "BRCGS and ISO 22000; global brand customers", options: { bullet: true } }],
    { x: MX + 0.4, y: py + 1.35, w: 4.3, h: 2.0, fontSize: 15, color: C.WHITE, paraSpaceAfter: 5 });
  const ux = 13.333 - MX - 5.0;
  rect(s, ux, py, 5.0, ph, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ULUSOY", { x: ux + 0.4, y: py + 0.32, w: 4.4, h: 0.5, fontSize: 26, bold: true, color: C.WHITE });
  T(s, "MARKET ACCESS & SUPPLY", { x: ux + 0.4, y: py + 0.85, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: C.MID, charSpacing: 2 });
  T(s, [
    { text: "89 years of relationships in Türkiye", options: { bullet: true, breakLine: true } },
    { text: "Access to industrial buyers and decision-makers", options: { bullet: true, breakLine: true } },
    { text: "Import, customs, warehousing and logistics in-house", options: { bullet: true, breakLine: true } },
    { text: "Local sales, trials and after-sales support", options: { bullet: true } }],
    { x: ux + 0.4, y: py + 1.35, w: 4.3, h: 2.0, fontSize: 15, color: C.WHITE, paraSpaceAfter: 5 });
  const bx = MX + 5.0, bw = ux - bx;
  line(s, bx + 0.05, py + ph / 2, ux - 0.05, py + ph / 2, C.MID, 2.5, { dash: "dash" });
  circle(s, bx + bw / 2 - 0.42, py + ph / 2 - 0.42, 0.84, C.WHITE, { line: { color: C.TB, width: 2.5 } });
  T(s, "+", { x: bx + bw / 2 - 0.42, y: py + ph / 2 - 0.44, w: 0.84, h: 0.84, fontSize: 34, bold: true, color: C.TB, align: "center", valign: "middle" });
  rect(s, MX, 5.72, 12.133, 1.1, C.PALE, { rounded: true, r: 0.06 });
  T(s, "TOGETHER", { x: MX + 0.45, y: 6.12, w: 2.0, h: 0.3, fontSize: 12, bold: true, color: C.TB, charSpacing: 3 });
  T(s, "A step-by-step entry into Türkiye — starting with the products where AILU can win.",
    { x: MX + 2.45, y: 5.75, w: 9.3, h: 1.05, fontSize: 18, bold: true, color: C.INK, valign: "middle" });

  // 3 — Agenda
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Agenda", title: "Our conversation today", sub: "Five short steps — from who we are to a concrete next step." });
  const steps = [
    ["Who Ulusoy is", "Nearly nine decades of operating history and partnerships"],
    ["The Turkish market", "Large industries — and an honest view of where imports compete"],
    ["Where AILU can win", "The products and customers to start with"],
    ["How we work together", "Roles, customer journey and a staged model"],
    ["Next steps", "The first 90 days"]];
  const sx = MX + 0.3, gap = 2.45, cy = 2.3;
  line(s, sx + 0.45, cy + 0.45, sx + gap * 4 + 0.45, cy + 0.45, C.ICE, 3);
  steps.forEach(([t, d], i) => {
    const x = sx + i * gap;
    circle(s, x, cy, 0.9, i === 4 ? C.TB : C.NAVY);
    T(s, String(i + 1).padStart(2, "0"), { x, y: cy, w: 0.9, h: 0.9, fontSize: 20, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, t, { x: x - 0.1, y: cy + 1.2, w: 2.25, h: 0.75, fontSize: 17, bold: true, color: C.INK });
    T(s, d, { x: x - 0.1, y: cy + 2.0, w: 2.15, h: 1.3, fontSize: 13, color: C.MUTED });
  });
  rect(s, MX, 6.0, 12.133, 0.72, C.PALE, { rounded: true, r: 0.06 });
  T(s, "Our aim today: share our view of the Turkish market, hear AILU's view, and agree a first market test.",
    { x: MX + 0.4, y: 6.0, w: 11.4, h: 0.72, fontSize: 15, bold: true, color: C.DEEP, valign: "middle" });
};
