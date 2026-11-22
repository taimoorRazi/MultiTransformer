module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Next steps";

  // First 90 days
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "05 · First 90 days", title: "A practical first 90 days", tb: true,
    sub: "A small, focused market test with the two priority products." });
  const tl = [["Weeks 1–3", "Price indications, data sheets and certificates from AILU; customs and duty checks in Türkiye", "Both"],
    ["Weeks 3–6", "First meetings with target accounts; samples delivered; binding customs ruling requested for PV frames", "Ulusoy"],
    ["Weeks 6–10", "Line trials for sacks; frame test samples to 2–3 module makers", "Joint"],
    ["Weeks 10–13", "Trial results reviewed together; first orders; decide on Stage 2", "Joint"]];
  line(s, MX + 0.95, 2.1, MX + 0.95, 2.1 + 3 * 1.15, C.TBL, 3);
  tl.forEach(([w, d, o], i) => {
    const y = 1.9 + i * 1.15;
    circle(s, MX + 0.8, y + 0.05, 0.3, C.TB);
    T(s, w, { x: MX + 1.35, y, w: 1.8, h: 0.4, fontSize: 15, bold: true, color: C.TB });
    T(s, d, { x: MX + 3.2, y, w: 7.4, h: 0.9, fontSize: 14, color: C.INK });
    ctx.tag(s, o.toUpperCase(), 11.5, y + 0.05, 1.15, C.WHITE, o === "Ulusoy" ? C.NAVY : o === "Joint" ? C.BLUE : C.TB, 9.5);
  });
  rect(s, MX, 6.15, 12.133, 0.65, C.PALE, { rounded: true, r: 0.06 });
  T(s, "Success after 90 days: qualified samples at several accounts, confirmed duties, and the first orders.", { x: MX + 0.3, y: 6.15, w: 11.6, h: 0.65, fontSize: 14, bold: true, color: C.DEEP, valign: "middle" });

  // Next steps
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Next steps", title: "Proposed next steps", tb: true,
    sub: "Suggestions for discussion: what Ulusoy will prepare, and where AILU's input would help." });
  const cols = [["ULUSOY WILL PREPARE", C.NAVY, ["Duty and customs confirmation for each product", "Local price benchmarks for sacks and frames", "A target-account list and first meetings", "Simple working rules for the market test"]],
    ["WE WOULD WELCOME FROM AILU", C.TB, ["Price indications for the priority products", "Data sheets, certificates and samples", "The PV frame certification pack and references", "A contact person in the international trade team"]]];
  cols.forEach(([h, col, items], i) => {
    const x = MX + i * 6.12;
    rect(s, x, 1.9, 5.95, 3.7, col, { rounded: true, r: 0.06 });
    T(s, h, { x: x + 0.35, y: 2.1, w: 5.3, h: 0.3, fontSize: 11.5, bold: true, color: i ? "D5D9F5" : C.MID, charSpacing: 2 });
    items.forEach((it, j) => {
      const y = 2.6 + j * 0.72;
      circle(s, x + 0.35, y + 0.04, 0.38, C.WHITE);
      T(s, String(j + 1), { x: x + 0.35, y: y + 0.04, w: 0.38, h: 0.38, fontSize: 12, bold: true, color: col, align: "center", valign: "middle" });
      T(s, it, { x: x + 0.9, y: y - 0.02, w: 4.8, h: 0.55, fontSize: 14, color: C.WHITE, valign: "middle" });
    });
  });
  rect(s, MX, 5.85, 12.133, 0.95, C.PALE, { rounded: true, r: 0.06 });
  T(s, [{ text: "Our suggestion for today: ", options: { bold: true, color: C.TB } }, { text: "agree the priority products, the first samples, and one contact person on each side." }],
    { x: MX + 0.35, y: 5.85, w: 11.5, h: 0.95, fontSize: 15, valign: "middle" });

  // Closing
  s = ctx.slide("BLANK_DARK", SEC);
  img(s, "ailu_floor.jpg", 0, 0, 13.333, 7.5, { fx: 0.5 });
  rect(s, 0, 0, 13.333, 7.5, C.NAVY, { transparency: 22 });
  s.addImage({ path: L.A + "ul_logo_white.png", x: MX, y: 0.62, w: 1.75, h: 0.4 });
  T(s, "AILU  ×  ULUSOY", { x: MX, y: 2.0, w: 8, h: 0.35, fontSize: 13, bold: true, color: C.MID, charSpacing: 4 });
  T(s, "Thank you", { x: MX, y: 2.45, w: 8, h: 1.0, fontSize: 48, bold: true, color: C.WHITE });
  T(s, [{ text: "AILU brings advanced packaging, packing systems and new materials.", options: { breakLine: true } },
    { text: "Ulusoy brings the Turkish market, buyers and local supply.", options: { breakLine: true } },
    { text: "Let's start with a focused market test together." }],
    { x: MX, y: 3.65, w: 9.8, h: 1.6, fontSize: 19, color: C.WHITE, paraSpaceAfter: 6 });
  T(s, "TÜRKİYE  ·  MIDDLE EAST  ·  BALKANS  ·  CENTRAL ASIA", { x: MX, y: 5.75, w: 9, h: 0.3, fontSize: 12, color: C.MID, charSpacing: 3 });
  T(s, "“Everything on Time.” — since 1937", { x: MX, y: 6.55, w: 6, h: 0.3, fontSize: 11, italic: true, color: C.MID });
  T(s, "AILU production hall, Shanghai", { x: 7.0, y: 7.08, w: 6.1, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });
};
