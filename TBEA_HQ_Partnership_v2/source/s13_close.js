module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Vision · Next steps";

  // 55 — What success could look like
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "3–5 year vision", title: "What success could look like", tb: true,
    sub: "Possible milestones, for discussion. We deliberately show no revenue forecast." });
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
  T(s, "WHAT WE COULD TRACK TOGETHER", { x: MX, y: 4.88, w: 4, h: 0.25, fontSize: 9.5, bold: true, color: C.TB, charSpacing: 2 });
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

  // Next steps (mutual)
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Next steps", title: "Proposed next steps", tb: true,
    sub: "Suggestions for discussion: what Ulusoy will prepare, and where TBEA's input would help." });
  const ul = ["Project files for Karnobat, Radilovo–Katselovo and PLAKE (under NDA)", "TEİAŞ technical requirements for 154 kV transformers, GIS and CT/VT",
    "A draft of the project-registration principles for joint review", "Customer and EPC meetings in Türkiye for a joint visit"];
  const tb = ["A contact person or team for this work", "TBEA's view on priority product families for Türkiye", "A date for a working session, ideally within the next month"];
  const card = (x, w, head, items, fill, dot) => {
    rect(s, x, 1.85, w, 3.15, fill, { rounded: true, r: 0.06 });
    T(s, head, { x: x + 0.3, y: 2.0, w: w - 0.6, h: 0.3, fontSize: 12, bold: true, color: C.WHITE, charSpacing: 2 });
    items.forEach((t, i) => {
      const y = 2.48 + i * 0.62;
      circle(s, x + 0.3, y + 0.06, 0.34, dot);
      T(s, String(i + 1), { x: x + 0.3, y: y + 0.06, w: 0.34, h: 0.34, fontSize: 11, bold: true, color: fill, align: "center", valign: "middle" });
      T(s, t, { x: x + 0.8, y, w: w - 1.05, h: 0.48, fontSize: 13, color: C.WHITE, valign: "middle" });
    });
  };
  card(MX, 6.35, "ULUSOY WILL PREPARE", ul, C.NAVY, C.MID);
  card(7.1, 5.63, "WE WOULD WELCOME FROM TBEA", tb, C.TB, "BFD4F2");
  const tl = [["Weeks 1–2", "Contacts and documents shared"], ["Weeks 3–6", "Technical review of the first projects"], ["Weeks 6–8", "Working session in İstanbul"], ["Weeks 8–12", "First joint offers, where TBEA sees a fit"]];
  const ty = 5.55, step = 12.133 / 4;
  line(s, MX + step / 2, ty, MX + 12.133 - step / 2, ty, C.TB, 2.5);
  tl.forEach(([w, d], i) => {
    const cx = MX + step * i + step / 2;
    circle(s, cx - 0.15, ty - 0.15, 0.3, C.TB, { line: { color: C.WHITE, width: 2 } });
    T(s, w, { x: cx - 1.45, y: ty + 0.25, w: 2.9, h: 0.3, fontSize: 12.5, bold: true, color: C.TB, align: "center" });
    T(s, d, { x: cx - 1.45, y: ty + 0.55, w: 2.9, h: 0.5, fontSize: 11.5, color: C.MUTED, align: "center" });
  });

  // Closing
  s = ctx.slide("BLANK_DARK", SEC);
  img(s, "karnobat_dusk.png", 0, 0, 13.333, 7.5, { fy: 0.55 });
  rect(s, 0, 0, 13.333, 7.5, C.NAVY, { transparency: 22 });
  s.addImage({ path: L.A + "ul_logo_white.png", x: MX, y: 0.62, w: 1.75, h: 0.4 });
  T(s, "TBEA  ×  ULUSOY", { x: MX, y: 1.8, w: 8, h: 0.4, fontSize: 14, bold: true, color: C.MID, charSpacing: 4 });
  T(s, "Thank you", { x: MX, y: 2.3, w: 10, h: 0.9, fontSize: 44, bold: true, color: C.WHITE });
  T(s, [{ text: "TBEA brings technology and industrial scale.", options: { breakLine: true } }, { text: "Ulusoy brings local market access and projects.", options: { breakLine: true } },
    { text: "We look forward to exploring this partnership together.", options: { color: C.WHITE } }],
    { x: MX, y: 3.45, w: 11, h: 1.8, fontSize: 22, color: C.ICE, paraSpaceAfter: 4 });
  T(s, "Türkiye  ·  Balkans  ·  Middle East", { x: MX, y: 5.6, w: 8, h: 0.35, fontSize: 15, color: C.MID, charSpacing: 2 });
  T(s, "“Everything on Time.” — since 1937", { x: MX, y: 6.55, w: 8, h: 0.35, fontSize: 13, italic: true, color: C.MID });
  T(s, "Karnobat solar project, Bulgaria", { x: 7.0, y: 7.08, w: 6.1, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });
};
