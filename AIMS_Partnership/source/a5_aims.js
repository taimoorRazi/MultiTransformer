module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Where AIMS fits";

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "aims_asrs.jpg", 8.2, 0, 5.133, 7.5, { fx: 0.5 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "03", "Where AIMS fits", "From the raw-material warehouse to the test bay.",
    "What we learned about AIMS, and how it matches what Turkish factories need.");
  T(s, "AIMS automated storage system", { x: 8.3, y: 7.08, w: 4.8, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // What we learned about AIMS
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "What we learned about AIMS", title: "A whole-factory partner, not an equipment seller", tb: true,
    sub: "AIMS analyses the factory, designs one concept, and delivers equipment and software together." });
  const st = [["400+", "employees; about 40% in R&D"], ["3", "R&D and manufacturing bases: Hefei, Shanghai, Jiangmen"],
    ["18", "national intelligent-manufacturing demonstration factories (MIIT)"], [">50%", "of China's transformer and power-equipment automation projects delivered by AIMS"]];
  st.forEach(([n, l], i) => {
    const x = MX + i * 3.07;
    rect(s, x, 1.85, 2.9, 1.55, C.TBL, { rounded: true, r: 0.06 });
    ctx.stat(s, n, l, x + 0.22, 1.9, 2.5, { color: C.TB, size: 30, nh: 0.6, lsize: 11.5, lh: 0.75 });
  });
  const pil = [["LuWarehouse", "Internal logistics", "AS/RS, RGVs, AGVs, loading and unloading, WMS, WCS, LES, uRMS"],
    ["LuFactory", "Production operations", "MES, APS, robotic workstations, vision inspection"],
    ["LuGauge", "Process & energy optimisation", "AI control of furnaces and process lines"]];
  for (const [i, [ic, t, d]] of pil.entries()) {
    const y = 3.62 + i * 0.9;
    await ctx.iconCircle(s, ic, MX, y, 0.62, C.ICE, C.BLUE);
    T(s, t, { x: MX + 0.8, y: y + 0.02, w: 5.2, h: 0.3, fontSize: 14, bold: true });
    T(s, d, { x: MX + 0.8, y: y + 0.33, w: 5.3, h: 0.3, fontSize: 11.5, color: C.MUTED });
  }
  T(s, "ALL CONNECTED BY THE AIMS-MOS MANUFACTURING OPERATIONS PLATFORM", { x: MX, y: 6.4, w: 6.2, h: 0.3, fontSize: 10, bold: true, color: C.TB, charSpacing: 1 });
  const refs = [["Transformers", "TBEA · Eaton · Siemens · Sunten"], ["Solar", "Jinko · TBEA · Huasun"], ["EV batteries", "CATL · CALB"],
    ["Automotive", "Geely · Volkswagen · NIO"], ["Metallurgy", "Dalipal · Baosteel · Jiangxi Copper"], ["Rail & aviation", "CRRC · COMAC"], ["Packaging", "P&G · VOION"]];
  rect(s, 7.0, 3.62, 5.73, 3.1, C.PALE, { rounded: true, r: 0.06 });
  T(s, "SELECTED CUSTOMERS", { x: 7.25, y: 3.75, w: 5, h: 0.28, fontSize: 10, bold: true, color: C.MUTED, charSpacing: 2 });
  refs.forEach(([k, v], i) => {
    const y = 4.08 + i * 0.37;
    T(s, k, { x: 7.25, y, w: 1.75, h: 0.32, fontSize: 12, bold: true, color: C.INK, valign: "middle" });
    T(s, v, { x: 9.05, y, w: 3.6, h: 0.32, fontSize: 12, color: C.MUTED, valign: "middle" });
  });
  ctx.src(s, "Source: AIMS Company Profile (2026) and AIMS information shared with Ulusoy Robotics (Nov 2026).");

  // Transformer plant flow
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Transformer plants", title: "Where automation fits in a transformer factory", tb: true,
    sub: "AIMS covers storage, process transfer, workstations and software; heavy AGVs add flexible movement of the largest parts." });
  const flow = [["Raw materials", "Steel, copper foil and wire", ["AS/RS for foil and wire", "Automatic loading"], []],
    ["Core", "Cutting and stacking", ["Core nesting algorithm", "Core insertion"], ["Core transfer"]],
    ["Coils", "Winding", ["Coil shape inspection", "Empty-spool recycling"], ["Heavy coil transfer"]],
    ["Active part", "Core-coil assembly", ["Robot press-fit / grinding", "Assembly stations"], ["Active-part transfer"]],
    ["Drying", "Oven / vapour phase", ["RGV drying line"], ["To and from the oven"]],
    ["Tanking", "Tank and oil", ["RGV body assembly line"], ["Tank transfer"]],
    ["Test & dispatch", "Final test, shipping", ["Finished-goods storage"], ["To test bay and loading"]]];
  const fw = 1.66, fg = 0.085, fy = 2.45;
  T(s, "AIMS", { x: MX, y: 1.82, w: 3, h: 0.28, fontSize: 11, bold: true, color: C.TB, charSpacing: 2 });
  T(s, "HEAVY AGVs (ULUSOY ROBOTICS · LONYU)", { x: MX, y: 4.45, w: 6, h: 0.28, fontSize: 11, bold: true, color: C.BLUE, charSpacing: 2 });
  flow.forEach(([t, d, a, u], i) => {
    const x = MX + i * (fw + fg);
    rect(s, x, 3.3, fw, 1.0, C.NAVY, { rounded: true, r: 0.05 });
    T(s, t, { x: x + 0.1, y: 3.36, w: fw - 0.2, h: 0.4, fontSize: 13, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, d, { x: x + 0.08, y: 3.76, w: fw - 0.16, h: 0.46, fontSize: 9.5, color: C.MID, align: "center", valign: "top" });
    if (i < flow.length - 1) line(s, x + fw + 0.005, 3.8, x + fw + fg - 0.005, 3.8, C.MID, 1.5, { end: "triangle" });
    a.forEach((it, j) => {
      const yy = 2.15 + j * 0.55;
      rect(s, x, yy, fw, 0.48, C.TBL, { rounded: true, r: 0.05 });
      T(s, it, { x: x + 0.06, y: yy, w: fw - 0.12, h: 0.48, fontSize: 9.5, bold: true, color: C.TBD, align: "center", valign: "middle" });
    });
    u.forEach((it, j) => {
      const yy = 4.78 + j * 0.55;
      rect(s, x, yy, fw, 0.48, C.ICE, { rounded: true, r: 0.05 });
      T(s, it, { x: x + 0.06, y: yy, w: fw - 0.12, h: 0.48, fontSize: 9.5, bold: true, color: C.DEEP, align: "center", valign: "middle" });
    });
  });
  rect(s, MX, 5.5, 12.133, 0.78, C.TB, { rounded: true, r: 0.06 });
  T(s, [{ text: "One software layer: ", options: { bold: true } }, { text: "WMS · WCS · LES · uRMS · MES — coordinating storage, transport and production, with full traceability for export customers." }],
    { x: MX + 0.3, y: 5.5, w: 11.6, h: 0.78, fontSize: 14, color: C.WHITE, valign: "middle" });
  T(s, "uRMS connects third-party robots through APIs. Integrating heavy AGVs into AIMS's dispatching is a point to confirm on the first project.",
    { x: MX, y: 6.42, w: 12.1, h: 0.4, fontSize: 11.5, italic: true, color: C.MUTED });
  ctx.src(s, "Source: AIMS TBEA Tianjin and Eaglerise Thailand project scopes (AIMS, 2026). Process steps simplified; drying and test equipment come from process-machine suppliers.");

  // TBEA + Eaglerise reference
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Proven in transformer plants", title: "TBEA Tianjin and Eaglerise Thailand", tb: true,
    sub: "Two references that answer the first questions a Turkish transformer maker will ask." });
  img(s, "aims_tbea.jpg", MX, 1.85, 5.6, 3.3);
  T(s, "AIMS project at TBEA, Tianjin", { x: MX, y: 5.2, w: 5.6, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  const kp = [["30%", "production efficiency increase"], ["50%", "shorter production cycle"], ["30%", "capacity increase"], ["20%", "faster inventory turnover"]];
  kp.forEach(([n, l], i) => {
    const x = MX + (i % 2) * 2.85, y = 5.55 + Math.floor(i / 2) * 0.68;
    T(s, n, { x, y, w: 0.95, h: 0.55, fontSize: 22, bold: true, color: C.TB, valign: "middle" });
    T(s, l, { x: x + 0.98, y, w: 1.85, h: 0.55, fontSize: 11, color: C.MUTED, valign: "middle" });
  });
  const cx = 6.6;
  rect(s, cx, 1.85, 6.13, 2.45, C.PALE, { rounded: true, r: 0.06 });
  T(s, "TBEA · TIANJIN, CHINA", { x: cx + 0.3, y: 2.0, w: 5.6, h: 0.3, fontSize: 11, bold: true, color: C.TB, charSpacing: 2 });
  T(s, [{ text: "All phases, four plants, from 2020 to today", options: { bullet: true, breakLine: true } },
    { text: "AIMS delivered everything except the process machines (e.g. slitting and drying)", options: { bullet: true, breakLine: true } },
    { text: "Storage for foil, wire, semi-finished and finished goods; workshop delivery; WMS and MES", options: { bullet: true, breakLine: true } },
    { text: "National intelligent-manufacturing pilot (MIIT, 2018)", options: { bullet: true } }],
    { x: cx + 0.3, y: 2.38, w: 5.6, h: 1.85, fontSize: 12.5, paraSpaceAfter: 4 });
  rect(s, cx, 4.45, 6.13, 2.38, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "EAGLERISE · THAILAND", { x: cx + 0.3, y: 4.6, w: 5.6, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  T(s, [{ text: "An export project: contract to final acceptance in about 12 months", options: { bullet: true, breakLine: true } },
    { text: "Core insertion, final and body assembly stations, RGV body assembly and drying lines, RGV workshop transfer", options: { bullet: true, breakLine: true } },
    { text: "AIMS's own team on site, with local installation labour", options: { bullet: true } }],
    { x: cx + 0.3, y: 4.98, w: 5.6, h: 1.8, fontSize: 12.5, color: C.WHITE, paraSpaceAfter: 4 });
  ctx.src(s, "Source: AIMS Company Profile (2026) and AIMS project information shared with Ulusoy Robotics (Nov 2026).");

  // Integrated offer
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "A combined offer", title: "One solution, from warehouse to test bay", tb: true,
    sub: "Turkish customers want one responsible team. Together we can offer the whole material flow, locally supported." });
  const cols = [["AIMS", C.TB, "LuCpu", ["Factory analysis and concept design", "AS/RS, RGVs, AGVs and workstations", "WMS, WCS, LES, uRMS, MES", "Solution engineering and commissioning", "Remote support"]],
    ["TOGETHER", C.BLUE, "LuHandshake", ["Joint site surveys with Turkish customers", "One proposal and one point of contact", "Reference visits to AIMS projects in China", "Integration of heavy AGVs into the AIMS system"]],
    ["ULUSOY ROBOTICS", C.NAVY, "LuTruck", ["Customer access and account management", "Heavy-load AGVs with Lonyu", "Local installation coordination", "Local service, spare parts and training", "Support with CE and local regulations"]]];
  for (const [i, [h, col, ic, items]] of cols.entries()) {
    const x = MX + i * 4.08;
    rect(s, x, 1.85, 3.92, 4.95, i === 1 ? C.PALE : col, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.3, 2.08, 0.7, i === 1 ? C.ICE : C.WHITE, col);
    T(s, h, { x: x + 1.15, y: 2.08, w: 2.6, h: 0.7, fontSize: 16, bold: true, color: i === 1 ? C.INK : C.WHITE, valign: "middle", charSpacing: 1 });
    T(s, items.map((t, j) => ({ text: t, options: { bullet: true, breakLine: j < items.length - 1 } })),
      { x: x + 0.3, y: 3.05, w: 3.4, h: 3.6, fontSize: 13.5, color: i === 1 ? C.INK : C.WHITE, paraSpaceAfter: 9 });
  }

  // Beyond transformers + results
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Beyond transformers", title: "Results that matter to Turkish manufacturers", tb: true,
    sub: "AIMS's references in other sectors match the factories Türkiye is building now." });
  const cs = [["aims_jinko.jpg", "Solar modules · Jinko", [["4.6×", "space utilisation"], ["63%", "higher labour efficiency"]]],
    ["aims_calb.jpg", "EV batteries · CALB", [["75%", "more storage capacity"], ["55%", "faster logistics transfer"]]],
    ["aims_dalipal.jpg", "Steel pipes · Dalipal", [["1,000", "pieces per hour"], ["200", "people saved in manpower"]]],
    ["aims_copper.jpg", "Copper · Jiangxi Copper", [["20%", "shorter transfer time"], ["10%", "lower logistics cost"]]]];
  cs.forEach(([f, t, kv], i) => {
    const x = MX + i * 3.07;
    img(s, f, x, 1.85, 2.9, 1.9);
    rect(s, x, 3.75, 2.9, 1.95, C.PALE);
    T(s, t, { x: x + 0.18, y: 3.85, w: 2.6, h: 0.35, fontSize: 13, bold: true });
    kv.forEach(([n, l], j) => {
      T(s, n, { x: x + 0.18, y: 4.28 + j * 0.65, w: 1.1, h: 0.55, fontSize: 20, bold: true, color: C.TB, valign: "middle" });
      T(s, l, { x: x + 1.3, y: 4.28 + j * 0.65, w: 1.5, h: 0.55, fontSize: 11, color: C.MUTED, valign: "middle" });
    });
  });
  rect(s, MX, 5.95, 12.133, 0.85, C.NAVY, { rounded: true, r: 0.06 });
  T(s, [{ text: "In Türkiye: ", options: { bold: true, color: C.MID } }, { text: "new solar, battery and automotive capacity is being built now — in the same sectors where AIMS already has references.", options: { color: C.WHITE } }],
    { x: MX + 0.3, y: 5.95, w: 11.6, h: 0.85, fontSize: 14, valign: "middle" });
  ctx.src(s, "Source: AIMS Company Profile (2026), customer value figures as reported by AIMS.");
};
