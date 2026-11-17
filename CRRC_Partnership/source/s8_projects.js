module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Opportunities in our network";

  // ---------- reusable architecture schematic (block flag "x" = outside CRRC's documented range)
  function arch(s, cfg) {
    const top = cfg.top || 2.1, laneH = 1.2, laneGap = 0.38;
    const nL = cfg.lanes.length, areaH = nL * laneH + (nL - 1) * laneGap;
    const busX = 5.35, busW = 0.38, bw = 1.33, bgap = 0.25;
    const block = (x, y, w, h, name, spec, flag, o = {}) => {
      const out = flag === "x";
      rect(s, x, y, w, h, o.fill || (out ? C.PALE : C.TBL), { rounded: true, r: 0.06, line: out ? { color: C.LINE, width: 1, dashType: "dash" } : undefined });
      T(s, name, { x: x + 0.1, y: y + 0.1, w: w - 0.18, h: 0.62, fontSize: 11, bold: true, color: o.color || (out ? C.MUTED : C.INK) });
      if (spec) T(s, spec, { x: x + 0.1, y: y + h - 0.42, w: w - 0.2, h: 0.36, fontSize: 10, color: o.scolor || (out ? C.MUTED : C.TB), bold: true, valign: "bottom" });
    };
    cfg.lanes.forEach((ln, li) => {
      const y = top + li * (laneH + laneGap);
      T(s, ln.label, { x: MX, y: y - 0.29, w: 5, h: 0.25, fontSize: 9.5, bold: true, color: C.MUTED, charSpacing: 1.5 });
      ln.blocks.forEach(([n, sp, fl], bi) => {
        const x = MX + bi * (bw + bgap);
        block(x, y, bw, laneH, n, sp, fl);
        const nx = bi < ln.blocks.length - 1 ? x + bw + bgap : busX;
        line(s, x + bw + 0.02, y + laneH / 2, nx - 0.02, y + laneH / 2, C.TB, 1.75, { end: "triangle" });
      });
    });
    rect(s, busX, top - 0.1, busW, areaH + 0.2, C.TB, { rounded: true, r: 0.05 });
    T(s, cfg.bus.label, { x: busX - 1.1, y: top + areaH + 0.15, w: 2.6, h: 0.6, fontSize: 10.5, bold: true, color: C.TB, align: "center" });
    const my = top + areaH / 2 - laneH / 2;
    let x = busX + busW + bgap;
    const rbw = (12.73 - x - cfg.right.length * bgap - 1.25) / cfg.right.length;
    line(s, busX + busW + 0.02, my + laneH / 2, x - 0.02, my + laneH / 2, C.TB, 1.75, { end: "triangle" });
    cfg.right.forEach(([n, sp, fl]) => {
      block(x, my, rbw, laneH, n, sp, fl);
      line(s, x + rbw + 0.02, my + laneH / 2, x + rbw + bgap - 0.02, my + laneH / 2, C.TB, 1.75, { end: "triangle" });
      x += rbw + bgap;
    });
    block(x, my, 12.73 - x, laneH, cfg.grid[0], cfg.grid[1], null, { fill: C.NAVY, color: C.WHITE, scolor: C.MID });
    const sy = top + areaH + 0.9;
    rect(s, MX, sy, 12.133, 0.62, C.PALE, { rounded: true, r: 0.06 });
    T(s, "SECONDARY SYSTEMS", { x: MX + 0.2, y: sy, w: 2.1, h: 0.62, fontSize: 9.5, bold: true, color: C.BLUE, valign: "middle", charSpacing: 1.5 });
    const sw = (12.133 - 2.4 - 0.2) / cfg.secondary.length;
    cfg.secondary.forEach((t, i) => {
      rect(s, MX + 2.35 + i * sw, sy + 0.1, sw - 0.12, 0.42, C.WHITE, { rounded: true, r: 0.05 });
      T(s, t, { x: MX + 2.35 + i * sw, y: sy + 0.1, w: sw - 0.12, h: 0.42, fontSize: 11, bold: true, align: "center", valign: "middle" });
    });
    return sy + 0.62;
  }
  const legend = (s, y, note) => {
    rect(s, MX, y, 0.3, 0.22, C.TBL, { rounded: true, r: 0.04 });
    T(s, "CRRC product family", { x: MX + 0.4, y: y - 0.03, w: 2.0, h: 0.28, fontSize: 10.5, color: C.MUTED });
    rect(s, MX + 2.3, y, 0.3, 0.22, C.PALE, { rounded: true, r: 0.04, line: { color: C.LINE, width: 1, dashType: "dash" } });
    T(s, "Outside CRRC's documented range", { x: MX + 2.7, y: y - 0.03, w: 2.8, h: 0.28, fontSize: 10.5, color: C.MUTED });
    T(s, [{ text: "Red text = ", options: { color: C.MUTED } }, { text: "project requirement / CRRC reference", options: { color: C.TB, bold: true } }], { x: MX + 5.3, y: y - 0.03, w: 3.4, h: 0.28, fontSize: 10.5 });
    if (note) T(s, note, { x: MX + 8.6, y: y - 0.03, w: 3.53, h: 0.5, fontSize: 10, color: C.MUTED, italic: true, align: "right" });
  };

  // Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "karnobat3.jpg", 8.2, 0, 5.133, 7.5, { fx: 0.4 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "04", "Opportunities already in our network", "An ongoing project together — and real projects at different stages.",
    "A wind project with CRRC Wind in Türkiye, plus wind, solar and storage projects in North Macedonia, Bulgaria and the Middle East.");
  T(s, "Karnobat solar site, Bulgaria (2026)", { x: 8.3, y: 7.08, w: 4.85, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // Ongoing cooperation
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Already working together", title: "An ongoing wind project with CRRC Wind in Türkiye", tb: true,
    sub: "This meeting builds on real work: Ulusoy and CRRC Wind are already developing a wind project together." });
  img(s, "crrc_turbine_grass.png", MX, 1.85, 4.9, 3.3, { fy: 0.4 });
  T(s, "CRRC wind turbine", { x: MX, y: 5.18, w: 4.9, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  rect(s, MX, 5.55, 4.9, 1.25, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "Senior-level dialogue between Ulusoy's leadership and CRRC executives has already opened the door to today's meeting.",
    { x: MX + 0.25, y: 5.55, w: 4.45, h: 1.25, fontSize: 12.5, color: C.WHITE, valign: "middle", bold: true });
  const og = [["LuHandshake", "A working channel exists", "Leadership, commercial and technical contacts between Ulusoy and CRRC Wind are already active."],
    ["LuRoute", "Ulusoy's role in practice", "Customer relationship, local coordination, and the technical-commercial process in Türkiye."],
    ["LuTrophy", "A reference in the making", "A first CRRC Wind project in Türkiye makes every following project easier to win."],
    ["LuRepeat", "Lessons for the next projects", "Bankability documents, grid-code compliance, logistics and service — learned once, reused."]];
  for (let i = 0; i < og.length; i++) {
    const [ic, t, d] = og[i]; const y = 1.85 + i * 1.25;
    rect(s, 5.85, y, 6.88, 1.12, i === 0 ? C.TBL : C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, 6.05, y + 0.2, 0.7, C.WHITE, C.TB);
    T(s, t, { x: 6.95, y: y + 0.12, w: 5.6, h: 0.3, fontSize: 13.5, bold: true, color: i === 0 ? C.TB : C.INK });
    T(s, d, { x: 6.95, y: y + 0.44, w: 5.6, h: 0.62, fontSize: 11.5, color: C.MUTED });
  }
  ctx.src(s, "Project details are shared in confidence with the responsible CRRC team.");

  // North Macedonia overview
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "North Macedonia · wind", title: "PLAKE and Makedonski Brod: 20 turbines, 127 MW", tb: true,
    sub: "Two wind projects in North Macedonia with defined turbine counts and ratings — a direct CRRC turbine opportunity." });
  img(s, "crrc_turbine_clouds.png", 7.0, 1.85, 5.73, 3.3, { fx: 0.5 });
  T(s, "CRRC wind turbine (reference image)", { x: 7.0, y: 5.18, w: 5.73, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  const nm = [["PLAKE", "72 MW", [["Turbines", "10 × 7.2 MW"], ["Collection (study)", "20 kV"], ["Main transformers (study)", "2 × 40 MVA, 110/20 kV"], ["Grid line", "110 kV · approx. 7 km"]]],
    ["MAKEDONSKI BROD", "55 MW", [["Turbines", "10 × 5.5 MW"], ["Wind measurement", "80 m met mast, 12 months"], ["Voltage levels", "not yet defined"], ["Grid line", "approx. 12 km"]]]];
  nm.forEach(([n, c, rows], i) => {
    const x = MX + i * 3.2;
    rect(s, x, 1.85, 3.05, 4.15, i === 0 ? C.NAVY : C.DEEP, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.22, y: 2.0, w: 2.75, h: 0.32, fontSize: 14, bold: true, color: C.WHITE, charSpacing: 1 });
    T(s, c, { x: x + 0.22, y: 2.32, w: 2.7, h: 0.55, fontSize: 26, bold: true, color: C.MID });
    rows.forEach(([a, b], j) => {
      const y = 3.0 + j * 0.74;
      line(s, x + 0.22, y - 0.06, x + 2.83, y - 0.06, "2C4A6B", 0.75);
      T(s, a, { x: x + 0.22, y, w: 2.7, h: 0.24, fontSize: 10, color: C.MID });
      T(s, b, { x: x + 0.22, y: y + 0.24, w: 2.75, h: 0.45, fontSize: 12, bold: true, color: C.WHITE });
    });
  });
  ctx.tag(s, "POTENTIAL CRRC SUPPLY — NOT SELECTED", MX, 6.2, 3.7);
  rect(s, 7.0, 5.6, 5.73, 1.2, C.PALE, { rounded: true, r: 0.06 });
  T(s, [{ text: "Platform fit: ", options: { bold: true, color: C.TB } }, { text: "CRRC's European-market platform (6.25–8.5 MW, 175 m rotor) covers the 7.2 MW class; the 5.5 MW turbines need a platform match. Turbine models are not yet selected." }],
    { x: 7.2, y: 5.6, w: 5.35, h: 1.2, fontSize: 11.5, valign: "middle" });
  ctx.src(s, "Source: project documentation held by Ulusoy's development partners (Oct–Nov 2026). PLAKE transformer data from the June 2024 connection study (70 MW).");

  // North Macedonia CRRC scope
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "North Macedonia · wind", title: "CRRC scope: complete turbines, from blade to tower", tb: true,
    sub: "For each of the 20 turbines, CRRC makes the main components in-house — plus selected plant-level equipment." });
  const comp = [["crrc_blades.jpg", "Blades & electric pitch", "Rotor blades, pitch drives, supercapacitors"], ["crrc_gearbox.jpg", "Gearbox & DFIG generator", "6.X–8.X MW geared DFIG drivetrain"],
    ["crrc_converter.png", "Converter & controls", "IGBT converter; LVRT/HVRT, reactive power"], ["crrc_nacelle_render.png", "Nacelle transformer", "Dry-type, inside the nacelle"], ["crrc_turbine_sq.jpg", "Tower", "Segmented steel towers"]];
  T(s, "PER TURBINE  ×  20  (PLAKE 10 × 7.2 MW · MAKEDONSKI BROD 10 × 5.5 MW)", { x: MX, y: 1.8, w: 10, h: 0.26, fontSize: 10, bold: true, color: C.TB, charSpacing: 1.2 });
  comp.forEach(([f, t, d], i) => {
    const x = MX + i * 2.45;
    rect(s, x, 2.15, 2.3, 2.75, C.TBL, { rounded: true, r: 0.06 });
    rect(s, x + 0.12, 2.27, 2.06, 1.25, C.WHITE, { rounded: true, r: 0.05 });
    img(s, f, x + 0.17, 2.31, 1.96, 1.17, { contain: true });
    T(s, t, { x: x + 0.15, y: 3.62, w: 2.05, h: 0.5, fontSize: 12.5, bold: true, color: C.INK });
    T(s, d, { x: x + 0.15, y: 4.12, w: 2.05, h: 0.7, fontSize: 10.5, color: C.TB, bold: true });
    if (i < 4) line(s, x + 2.3, 3.5, x + 2.45, 3.5, C.TB, 2, { end: "triangle" });
  });
  const pl = [["20 kV collection", "PLAKE study level", ""], ["Main transformers 110/20 kV", "2 × 40 MVA (study)", "x"], ["110 kV substation", "CRRC prefab substations ≤ 220 kV", ""], ["Grid line", "PLAKE ~7 km · Brod ~12 km", "x"]];
  T(s, "PLANT LEVEL", { x: MX, y: 5.15, w: 3, h: 0.26, fontSize: 10, bold: true, color: C.MUTED, charSpacing: 1.5 });
  pl.forEach(([t, d, fl], i) => {
    const x = MX + i * 3.08, out = fl === "x";
    rect(s, x, 5.45, 2.93, 0.95, out ? C.PALE : C.TBL, { rounded: true, r: 0.06, line: out ? { color: C.LINE, width: 1, dashType: "dash" } : undefined });
    T(s, t, { x: x + 0.15, y: 5.5, w: 2.65, h: 0.4, fontSize: 12, bold: true, color: out ? C.MUTED : C.INK });
    T(s, d, { x: x + 0.15, y: 5.9, w: 2.65, h: 0.4, fontSize: 10.5, color: out ? C.MUTED : C.TB, bold: true });
  });
  legend(s, 6.6, "Plus SDP protection and monitoring.");
  ctx.src(s, "Source: project documentation (Oct–Nov 2026); CRRC wind power business presentation (2026). Potential scope only — no CRRC model is selected.");

  // Radilovo + Katselovo overview
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Bulgaria · Radilovo + Katselovo", title: "Two utility-scale solar + storage plants at 220 kV", tb: true,
    sub: "A large solar and battery programme where CRRC's inverter, storage and PCS portfolio fits directly." });
  img(s, "crrc_pv_lake.png", MX, 1.85, 5.2, 3.0);
  T(s, "Illustrative: CRRC solar reference project", { x: MX, y: 4.88, w: 5.2, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  [["371 MW AC", "solar PV"], ["370 MW", "battery power"], ["1,200 MWh", "battery energy"]].forEach(([n, l], i) => {
    const x = MX + i * 1.77;
    T(s, n, { x, y: 5.2, w: 1.75, h: 0.5, fontSize: 21, bold: true, color: C.TB });
    T(s, l, { x, y: 5.7, w: 1.7, h: 0.3, fontSize: 11.5, color: C.MUTED });
  });
  ctx.tag(s, "POTENTIAL CRRC SUPPLY — NOT SELECTED", MX, 6.3, 3.7);
  const pj = [["RADILOVO", "Pazardzhik region", [["Solar PV", "176 MW AC"], ["Battery storage", "175 MW / 700 MWh"], ["Substation", "33/220 kV"], ["Grid line", "220 kV, ~9.1 km to Aleko"]]],
    ["KATSELOVO", "Ruse region", [["Solar PV", "195 MW AC"], ["Battery storage", "195 MW / 500 MWh"], ["Substation", "33/220 kV"], ["Grid line", "220 kV, ~12.5 km to Dve Mogili"]]]];
  pj.forEach(([n, r, rows], i) => {
    const x = 6.15 + i * 3.33;
    rect(s, x, 1.85, 3.2, 4.0, i === 0 ? C.NAVY : C.DEEP, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.25, y: 2.02, w: 2.8, h: 0.35, fontSize: 16, bold: true, color: C.WHITE, charSpacing: 1 });
    T(s, r, { x: x + 0.25, y: 2.38, w: 2.8, h: 0.28, fontSize: 11, color: C.MID });
    rows.forEach(([a, b], j) => {
      const y = 2.85 + j * 0.74;
      line(s, x + 0.25, y - 0.06, x + 2.95, y - 0.06, "2C4A6B", 0.75);
      T(s, a, { x: x + 0.25, y, w: 2.8, h: 0.25, fontSize: 10, color: C.MID });
      T(s, b, { x: x + 0.25, y: y + 0.25, w: 2.85, h: 0.35, fontSize: 13.5, bold: true, color: C.WHITE });
    });
  });
  rect(s, 6.15, 6.0, 6.58, 0.8, C.PALE, { rounded: true, r: 0.06 });
  T(s, "Development stage. A 3-year offtake offer (€185/MWh) has been received, and EU grant support is expected for 500 MWh of the storage. Final design, quantities and suppliers are not yet fixed.",
    { x: 6.35, y: 6.0, w: 6.25, h: 0.8, fontSize: 11, color: C.MUTED, valign: "middle" });
  ctx.src(s, "Source: project documentation held by Ulusoy's development partners (2026). Capacities subject to final design and permits.");

  // Radilovo + Katselovo CRRC architecture
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Bulgaria · Radilovo + Katselovo", title: "Electrical architecture and potential CRRC supply scope", tb: true,
    sub: "Most of the plant, from the PV string to the 33 kV busbar and the battery system, falls within CRRC product families." });
  let yb = arch(s, { lanes: [{ label: "SOLAR PV", blocks: [["DC combiner boxes", "tDriver-EC · 1,500 V"], ["PV inverters", "string NM5.350K or central"], ["PV MV stations", "TGN series · 33 kV"]] },
    { label: "BATTERY STORAGE", blocks: [["LFP battery containers", "CESS-L5016 · 5.0 MWh"], ["Battery PCS", "APCS-2500 · 2.5 MW"], ["PCS + MV stations", "CESS-eStation-5000"]] }],
    bus: { label: "33 kV collection: KYN61-40.5 switchgear" },
    right: [["Main transformers 33/220 kV", "2 substations", "x"], ["Prefabricated substation", "CRRC range ≤ 220 kV"], ["220 kV lines", "~21.6 km", "x"]],
    grid: ["220 kV grid", "Aleko · Dve Mogili"], secondary: ["SDP protection", "AGC / AVC · PMU", "Battery EMS", "SCADA"] });
  legend(s, yb + 0.25, "Models and quantities not yet selected.");
  ctx.src(s, "Source: project documentation (2026); CRRC product catalogue references. Potential scope only — no CRRC selection, approval or order exists.");

  // Karnobat status
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Bulgaria · Karnobat", title: "Karnobat: a project already built, connected and expanding", tb: true,
    sub: "Substations and 110 kV lines are in operation. New solar phases and battery storage are being added." });
  img(s, "karnobat4.jpg", MX, 1.85, 4.9, 3.55, { fy: 0.6 });
  T(s, "Karnobat site, Burgas province, Bulgaria (2026)", { x: MX, y: 5.43, w: 4.9, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  [["150 MW", "total solar connection"], ["45 MW / 90 MWh", "battery storage (2 h)"], ["110 kV", "grid connection"]].forEach(([n, l], i) => {
    const x = MX + [0, 1.4, 3.85][i], w = [1.35, 2.35, 1.1][i];
    T(s, n, { x, y: 5.8, w, h: 0.45, fontSize: 19, bold: true, color: C.TB, valign: "bottom" });
    T(s, l, { x, y: 6.27, w, h: 0.45, fontSize: 11, color: C.MUTED });
  });
  const tl = [["2023", "In operation", "Karnobat 1–2: 33/110 kV substation, 110 kV line, 10 + 30 MWp solar"],
    ["2025", "In operation", "Karnobat 3: solar expansion up to 4 MWp, 5 MVA inverter station"],
    ["Oct 2026", "Commissioned", "Karnobat 2: first 20 MW new phase, 2 × 10 MVA units, two 33/110 kV substations, 110 kV line"],
    ["Next", "In progress", "Remaining new solar phases (121.1 MW new in total) and 45 MW / 90 MWh battery storage"]];
  const tx = 5.95;
  line(s, tx + 0.1, 2.05, tx + 0.1, 2.05 + 3 * 1.08, C.ICE, 2.5);
  tl.forEach(([d, st, t], i) => {
    const y = 1.9 + i * 1.08;
    circle(s, tx, y + 0.03, 0.22, i === 3 ? C.WHITE : C.TB, { line: { color: C.TB, width: 2 } });
    T(s, d, { x: tx + 0.42, y: y - 0.04, w: 1.3, h: 0.32, fontSize: 15, bold: true, color: C.TB });
    ctx.tag(s, st.toUpperCase(), tx + 1.75, y - 0.02, 1.55, i === 3 ? C.AMBER : C.GREEN, i === 3 ? C.AMBERL : "E5F3EB", 9);
    T(s, t, { x: tx + 0.42, y: y + 0.34, w: 6.3, h: 0.72, fontSize: 12.5 });
  });
  rect(s, tx, 6.3, 6.78, 0.6, C.PALE, { rounded: true, r: 0.06 });
  T(s, "Grid connection agreement with Bulgaria's TSO in place (latest addendum Oct 2026): 150 MW export / 25 MW import at 110 kV.",
    { x: tx + 0.2, y: 6.3, w: 6.45, h: 0.6, fontSize: 11.5, color: C.DEEP, valign: "middle" });
  ctx.src(s, "Source: Karnobat Energy project documentation and Bulgarian use permits (2023–2026). Site photographs: project developer.");

  // Karnobat CRRC scope
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Bulgaria · Karnobat", title: "Karnobat: potential CRRC scope for the expansion", tb: true,
    sub: "Focused on what is still to be built — remaining solar phases and the 45 MW / 90 MWh battery system." });
  yb = arch(s, { lanes: [{ label: "NEW SOLAR PHASES", blocks: [["DC combiner boxes", "5 × 20 + 21.1 MW"], ["PV inverters", "string or central"], ["PV MV stations", "e.g. 10 MVA blocks"]] },
    { label: "BATTERY STORAGE", blocks: [["LFP battery containers", "90 MWh usable"], ["Battery PCS", "45 MW"], ["PCS + MV stations", "MV interface"]] }],
    bus: { label: "MV collection: switchgear + cables" },
    right: [["MV/110 kV step-up transformer", "on-load tap changer", "x"], ["110 kV switching & metering", "3 CT + 3 VT"], ["110 kV line", "in operation", "x"]],
    grid: ["110 kV grid", "Bulgarian TSO (ESO)"], secondary: ["Line differential protection", "SCADA (IEC 60870-5-104)", "Battery EMS", "AC/DC backup ≥ 2 h"] });
  legend(s, yb + 0.25, "Battery and remaining-phase suppliers to be confirmed with the developer.");
  ctx.src(s, "Source: Karnobat Energy grid-connection and technical documentation (2026). Potential scope only.");

  // Middle East overview
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Middle East · off-grid", title: "Off-grid solar + storage: a modular, repeatable design", tb: true,
    sub: "An island power system for a site without a utility connection — three sizes under evaluation." });
  const alt = [["5 MW", "20 MWh", "7.0 MWp", "2 × 6.3 MVA"], ["10 MW", "40 MWh", "14.0 MWp", "2 × 12.5 MVA"], ["20 MW", "80 MWh", "28.0 MWp", "2 × 25 MVA"]];
  alt.forEach(([a, b, c, d], i) => {
    const x = MX + i * 2.55;
    rect(s, x, 1.85, 2.4, 3.3, i === 2 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    const fg = i === 2 ? C.WHITE : C.INK, mu = i === 2 ? C.MID : C.MUTED;
    T(s, "OPTION " + (i + 1), { x: x + 0.2, y: 1.98, w: 2, h: 0.25, fontSize: 9.5, bold: true, color: i === 2 ? C.MID : C.BLUE, charSpacing: 1.5 });
    T(s, a, { x: x + 0.2, y: 2.22, w: 2.0, h: 0.6, fontSize: 30, bold: true, color: fg });
    [["Net AC energy", b], ["Installed PV (DC)", c], ["33/11 kV transformers", d]].forEach(([k, v], j) => {
      T(s, k, { x: x + 0.2, y: 2.98 + j * 0.7, w: 2.0, h: 0.24, fontSize: 10, color: mu });
      T(s, v, { x: x + 0.2, y: 3.22 + j * 0.7, w: 2.0, h: 0.35, fontSize: 14, bold: true, color: fg });
    });
  });
  img(s, "crrc_pv_desert.png", 8.35, 1.85, 4.38, 3.3);
  T(s, "Illustrative: CRRC solar reference project in a desert climate", { x: 8.35, y: 5.18, w: 4.38, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  rect(s, MX, 5.5, 12.133, 1.32, C.TBL, { rounded: true, r: 0.06 });
  T(s, "ENGINEERING POINTS FOR CRRC", { x: MX + 0.25, y: 5.6, w: 4, h: 0.26, fontSize: 10.5, bold: true, color: C.TB, charSpacing: 1.5 });
  const eq = ["Site ambient 55 °C: CRRC's string-type battery is rated to 55 °C; the centralized type to 50 °C", "PCS and inverter derating above 40–45 °C — sizing at 55 °C to confirm", "Grid-forming PCS for an island system: CRRC's 2026 2.5 MW grid-forming product to check"];
  eq.forEach((t, i) => {
    const x = MX + 0.25 + i * 3.97;
    circle(s, x, 6.02, 0.36, C.TB);
    T(s, String(i + 1), { x, y: 6.02, w: 0.36, h: 0.36, fontSize: 12, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, t, { x: x + 0.48, y: 5.92, w: 3.35, h: 0.82, fontSize: 11, color: C.INK, valign: "middle" });
  });
  ctx.src(s, "Source: project equipment list (Oct 2026); CRRC catalogue data (CESS-L5016, CESS-L5016AC-STR, APCS-2500). Site location not shown; options are alternatives, not cumulative.");

  // Middle East package
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Middle East · off-grid", title: "A complete CRRC package: PV, BESS, PCS, MV and EMS", tb: true,
    sub: "Quantities shown for the three alternatives (5 / 10 / 20 MW). The design repeats easily for other off-grid sites." });
  yb = arch(s, { lanes: [{ label: "SOLAR PV", blocks: [["PV string inverters", "20 / 40 / 80 units"], ["PV MV stations", "TGN0800 family"], ["PV MV skids, 3.15 MVA", "2 / 4 / 8 units"]] },
    { label: "BATTERY STORAGE", blocks: [["LFP containers, ~5 MWh", "5 / 10 / 20 units"], ["Grid-forming PCS, 2.5 MW", "2 / 4 / 8 units"], ["BESS MV skids, 3.15 MVA", "CESS-eStation family"]] }],
    bus: { label: "33 kV switchgear: KYN61-40.5" },
    right: [["33/11 kV OLTC transformers", "up to 2 × 25 MVA"], ["11 kV distribution switchgear", "KYN28A-12"]],
    grid: ["Site loads", "Island system"], secondary: ["Microgrid EMS", "SCADA (IEC 61850 / 104)", "SDP protection", "LV switchboards"] });
  legend(s, yb + 0.25, "Model selection subject to confirmation at 55 °C.");
  ctx.src(s, "Source: project equipment list (Oct 2026); CRRC catalogue references. Potential scope only — no CRRC selection, approval or order exists.");

  // Regional map
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Regional view", title: "Opportunities beyond a single country", tb: true,
    sub: "An ongoing wind project in Türkiye, 127 MW of wind in North Macedonia and 500+ MW of solar with ≈1.37 GWh of storage." });
  img(s, "map_projects_crrc.png", MX - 0.2, 1.7, 7.4, 4.16, { contain: true });
  const rows = [["2BB673", "Ongoing wind project", "Türkiye", "CRRC Wind turbines · with Ulusoy", "In progress"],
    ["2BB673", "PLAKE + Makedonski Brod", "North Macedonia", "127 MW wind · 20 turbines", "Development"],
    ["F2A900", "Radilovo + Katselovo", "Bulgaria", "371 MW PV · 370 MW / 1,200 MWh BESS", "Development"],
    ["F2A900", "Karnobat", "Bulgaria", "150 MW PV · 45 MW / 90 MWh BESS", "Operating + expanding"],
    ["E4572E", "Off-grid solar + storage", "Middle East", "5–20 MW PV · 20–80 MWh BESS", "Options under evaluation"]];
  rows.forEach(([col, n, c, cap, st], i) => {
    const y = 1.85 + i * 0.98;
    rect(s, 7.45, y, 5.28, 0.86, i === 0 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    circle(s, 7.62, y + 0.16, 0.22, col, { line: { color: i === 0 ? C.WHITE : col, width: 1.5 } });
    T(s, n, { x: 7.98, y: y + 0.08, w: 2.7, h: 0.3, fontSize: 12.5, bold: true, color: i === 0 ? C.WHITE : C.INK });
    T(s, c, { x: 10.5, y: y + 0.08, w: 2.1, h: 0.3, fontSize: 10.5, color: i === 0 ? C.MID : C.MUTED, align: "right" });
    T(s, cap, { x: 7.98, y: y + 0.4, w: 3.3, h: 0.4, fontSize: 10.5, color: i === 0 ? C.ICE : C.MUTED });
    T(s, st, { x: 11.1, y: y + 0.4, w: 1.5, h: 0.4, fontSize: 10, bold: true, color: i === 0 ? C.MID : C.TB, align: "right" });
  });
  rect(s, MX, 6.05, 6.7, 0.75, C.TBL, { rounded: true, r: 0.06 });
  T(s, "Opportunities in four markets that we would like to review together with CRRC's engineers.", { x: MX + 0.2, y: 6.05, w: 6.35, h: 0.75, fontSize: 12.5, bold: true, color: C.TB, valign: "middle" });
  ctx.src(s, "Source: project documentation (2026). Capacities are planned / working values; Karnobat includes 28.9 MW already operating. Map locations approximate; Middle East location indicative.");
};
