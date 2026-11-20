module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Next steps";

  // Start with one real project
  let s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "05 · First step", title: "Start with one real project", tb: true,
    sub: "AIMS suggested analysing one of our current leads together. We agree — it is the best way to build trust." });
  rect(s, MX, 1.9, 5.9, 4.9, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "WHAT MAKES A GOOD FIRST PROJECT", { x: MX + 0.35, y: 2.1, w: 5.3, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  const crit = [["A transformer or power-equipment maker", "the sector where AIMS's references are strongest"],
    ["Expanding capacity or building a new hall", "automation is easiest to design in from the start"],
    ["A clear pain point", "storage space, heavy-part movement, traceability or labour"],
    ["A decision-maker we know well", "so the survey leads to a real decision"]];
  crit.forEach(([a, b], i) => {
    const y = 2.6 + i * 1.02;
    circle(s, MX + 0.35, y + 0.05, 0.42, C.TB);
    T(s, String(i + 1), { x: MX + 0.35, y: y + 0.05, w: 0.42, h: 0.42, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, a, { x: MX + 0.95, y, w: 4.7, h: 0.36, fontSize: 14.5, bold: true, color: C.WHITE });
    T(s, b, { x: MX + 0.95, y: y + 0.38, w: 4.7, h: 0.5, fontSize: 12, color: C.MID });
  });
  const rx = 6.75;
  T(s, "HOW THE FIRST PROJECT COULD RUN", { x: rx, y: 1.95, w: 5.9, h: 0.3, fontSize: 11, bold: true, color: C.TB, charSpacing: 2 });
  const tl = [["Week 1–2", "Ulusoy Robotics shares 1–2 leads with basic data"], ["Week 3–5", "Joint site survey in Türkiye with AIMS engineers"],
    ["Week 6–8", "AIMS concept layout and budget price"], ["Week 8–12", "Customer reference visit to China; proposal"]];
  line(s, rx + 0.2, 2.55, rx + 0.2, 2.55 + 3 * 0.88, C.TBL, 3);
  tl.forEach(([w, d], i) => {
    const y = 2.4 + i * 0.88;
    circle(s, rx + 0.05, y + 0.02, 0.3, C.TB);
    T(s, w, { x: rx + 0.55, y: y - 0.04, w: 2, h: 0.32, fontSize: 13, bold: true, color: C.TB });
    T(s, d, { x: rx + 0.55, y: y + 0.3, w: 5.4, h: 0.55, fontSize: 13.5, color: C.INK });
  });
  rect(s, rx, 6.1, 5.98, 0.7, C.TBL, { rounded: true, r: 0.06 });
  T(s, "A mutual NDA is available whenever either side prefers it.", { x: rx + 0.25, y: 6.1, w: 5.5, h: 0.7, fontSize: 13, italic: true, color: C.TBD, valign: "middle" });

  // Proposed next steps
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Next steps", title: "Proposed next steps", tb: true,
    sub: "Suggestions for discussion: what Ulusoy Robotics will prepare, and where AIMS's input would help." });
  const cols = [["ULUSOY ROBOTICS WILL PREPARE", C.NAVY, ["Selection of 1–2 first leads, with basic factory data", "Dates for a joint site survey in Türkiye", "A short list of Turkish manufacturers expanding capacity", "A draft of simple working rules for joint projects"]],
    ["WE WOULD WELCOME FROM AIMS", C.TB, ["A solution engineer for the first survey", "English case studies and videos for Turkish customers", "A reference visit option for a Turkish customer", "A view on integrating heavy AGVs into AIMS's system"]]];
  cols.forEach(([h, col, items], i) => {
    const x = MX + i * 6.12;
    rect(s, x, 1.9, 5.95, 3.7, col, { rounded: true, r: 0.06 });
    T(s, h, { x: x + 0.35, y: 2.1, w: 5.3, h: 0.3, fontSize: 11.5, bold: true, color: i ? "FBD3C8" : C.MID, charSpacing: 2 });
    items.forEach((it, j) => {
      const y = 2.6 + j * 0.72;
      circle(s, x + 0.35, y + 0.04, 0.38, C.WHITE);
      T(s, String(j + 1), { x: x + 0.35, y: y + 0.04, w: 0.38, h: 0.38, fontSize: 12, bold: true, color: col, align: "center", valign: "middle" });
      T(s, it, { x: x + 0.9, y: y - 0.02, w: 4.8, h: 0.55, fontSize: 14, color: C.WHITE, valign: "middle" });
    });
  });
  rect(s, MX, 5.85, 12.133, 0.95, C.PALE, { rounded: true, r: 0.06 });
  T(s, [{ text: "Our suggestion for today: ", options: { bold: true, color: C.TB } }, { text: "agree on the first lead to analyse, a survey date, and one contact person on each side." }],
    { x: MX + 0.35, y: 5.85, w: 11.5, h: 0.95, fontSize: 15, valign: "middle" });

  // Closing
  s = ctx.slide("BLANK_DARK", SEC);
  img(s, "aims_hq.jpg", 0, 0, 13.333, 7.5, { fx: 0.5 });
  rect(s, 0, 0, 13.333, 7.5, C.NAVY, { transparency: 22 });
  s.addImage({ path: L.A + "ul_logo_white.png", x: MX, y: 0.62, w: 1.75, h: 0.4 });
  T(s, "AIMS  ×  ULUSOY ROBOTICS", { x: MX, y: 2.0, w: 8, h: 0.35, fontSize: 13, bold: true, color: C.MID, charSpacing: 4 });
  T(s, "Thank you", { x: MX, y: 2.45, w: 8, h: 1.0, fontSize: 48, bold: true, color: C.WHITE });
  T(s, [{ text: "AIMS brings smart-factory technology and transformer-plant experience.", options: { breakLine: true } },
    { text: "Ulusoy Robotics brings local access, heavy AGVs and service.", options: { breakLine: true } },
    { text: "Let's start with one project together." }],
    { x: MX, y: 3.65, w: 9.5, h: 1.6, fontSize: 19, color: C.WHITE, paraSpaceAfter: 6 });
  T(s, "TÜRKİYE  ·  MIDDLE EAST  ·  BALKANS  ·  CENTRAL ASIA", { x: MX, y: 5.75, w: 9, h: 0.3, fontSize: 12, color: C.MID, charSpacing: 3 });
  T(s, "“Everything on Time.” — since 1937", { x: MX, y: 6.55, w: 6, h: 0.3, fontSize: 11, italic: true, color: C.MID });
  T(s, "AIMS headquarters", { x: 7.0, y: 7.08, w: 6.1, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });
};
