module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Opportunities in our network";

  // ---------- reusable architecture schematic
  // cfg: { lanes:[{label, blocks:[[name, spec]]}], bus:{label, spec}, right:[[name,spec]], grid:[name,spec], secondary:[...], top }
  function arch(s, cfg) {
    const top = cfg.top || 2.1, laneH = 1.2, laneGap = 0.38;
    const nL = cfg.lanes.length;
    const areaH = nL * laneH + (nL - 1) * laneGap;
    const busX = 5.35, busW = 0.38;
    const bw = 1.33, bgap = 0.25;
    const block = (x, y, w, h, name, spec, o = {}) => {
      rect(s, x, y, w, h, o.fill || C.TBL, { rounded: true, r: 0.06, line: o.line });
      T(s, name, { x: x + 0.1, y: y + 0.1, w: w - 0.18, h: 0.62, fontSize: 11, bold: true, color: o.color || C.INK });
      if (spec) T(s, spec, { x: x + 0.1, y: y + h - 0.42, w: w - 0.2, h: 0.36, fontSize: 10, color: o.scolor || C.TB, bold: true, valign: "bottom" });
    };
    cfg.lanes.forEach((ln, li) => {
      const y = top + li * (laneH + laneGap);
      T(s, ln.label, { x: MX, y: y - 0.29, w: 5, h: 0.25, fontSize: 9.5, bold: true, color: C.MUTED, charSpacing: 1.5 });
      ln.blocks.forEach(([n, sp], bi) => {
        const x = MX + bi * (bw + bgap);
        block(x, y, bw, laneH, n, sp);
        const ax = x + bw, nx = bi < ln.blocks.length - 1 ? x + bw + bgap : busX;
        line(s, ax + 0.02, y + laneH / 2, nx - 0.02, y + laneH / 2, C.TB, 1.75, { end: "triangle" });
      });
    });
    // bus
    rect(s, busX, top - 0.1, busW, areaH + 0.2, C.TB, { rounded: true, r: 0.05 });
    T(s, cfg.bus.label, { x: busX - 1.1, y: top + areaH + 0.15, w: 2.6, h: 0.6, fontSize: 10.5, bold: true, color: C.TB, align: "center" });
    // right chain at mid height
    const my = top + areaH / 2 - laneH / 2;
    let x = busX + busW + bgap;
    const rbw = (12.73 - x - (cfg.right.length) * bgap - 1.25) / cfg.right.length;
    line(s, busX + busW + 0.02, my + laneH / 2, x - 0.02, my + laneH / 2, C.TB, 1.75, { end: "triangle" });
    cfg.right.forEach(([n, sp], i) => {
      block(x, my, rbw, laneH, n, sp);
      line(s, x + rbw + 0.02, my + laneH / 2, x + rbw + bgap - 0.02, my + laneH / 2, C.TB, 1.75, { end: "triangle" });
      x += rbw + bgap;
    });
    block(x, my, 12.73 - x, laneH, cfg.grid[0], cfg.grid[1], { fill: C.NAVY, color: C.WHITE, scolor: C.MID });
    // secondary band
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
    T(s, "Block = potential TBEA product family", { x: MX + 0.4, y: y - 0.03, w: 3.4, h: 0.28, fontSize: 10.5, color: C.MUTED });
    T(s, [{ text: "Blue text = ", options: { color: C.MUTED } }, { text: "confirmed project requirement", options: { color: C.TB, bold: true } }], { x: MX + 3.7, y: y - 0.03, w: 3.4, h: 0.28, fontSize: 10.5 });
    if (note) T(s, note, { x: MX + 7.0, y: y - 0.03, w: 5.13, h: 0.5, fontSize: 10, color: C.MUTED, italic: true, align: "right" });
  };

  // 35 — Divider
  let s = ctx.slide("DARK", SEC);
  img(s, "karnobat3.jpg", 8.2, 0, 5.133, 7.5, { fx: 0.4 });
  rect(s, 8.2, 0, 5.133, 7.5, C.NAVY, { transparency: 45 });
  ctx.divider(s, "04", "Opportunities already in our network", "This is not theoretical.",
    "Live solar, storage and wind projects where TBEA products could be specified — in Bulgaria, North Macedonia and the Middle East.");
  T(s, "Karnobat solar site, Bulgaria (2026)", { x: 8.3, y: 7.08, w: 4.85, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // 36 — Radilovo + Katselovo overview
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Bulgaria · Radilovo + Katselovo", title: "Two utility-scale solar + storage plants at 220 kV", tb: true,
    sub: "Two sites, one development programme: utility-scale solar paired with large battery storage." });
  img(s, "bg_pv_aerial.png", MX, 1.85, 5.2, 3.0);
  T(s, "Illustrative: TBEA solar reference site", { x: MX, y: 4.88, w: 5.2, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  [["371 MW AC", "solar PV"], ["370 MW", "battery power"], ["1,200 MWh", "battery energy"]].forEach(([n, l], i) => {
    const x = MX + i * 1.77;
    T(s, n, { x, y: 5.2, w: 1.75, h: 0.5, fontSize: 21, bold: true, color: C.TB });
    T(s, l, { x, y: 5.7, w: 1.7, h: 0.3, fontSize: 11.5, color: C.MUTED });
  });
  ctx.tag(s, "POTENTIAL TBEA SUPPLY — NOT SELECTED", MX, 6.3, 3.6);
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
  T(s, "Status: development stage. Capacities are the current working values in project documents; final design, equipment quantities and suppliers are not yet fixed.",
    { x: 6.35, y: 6.0, w: 6.25, h: 0.8, fontSize: 11.5, color: C.MUTED, valign: "middle" });
  ctx.src(s, "Source: project documentation held by Ulusoy's development partners (2026). Capacities subject to final design and permits.");

  // 37 — Radilovo + Katselovo architecture & scope
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Bulgaria · Radilovo + Katselovo", title: "Electrical architecture and potential TBEA supply scope", tb: true,
    sub: "From the solar array and battery container to the 220 kV grid connection — almost every block is a TBEA product family." });
  let yb = arch(s, { lanes: [{ label: "SOLAR PV", blocks: [["PV mounting structures", "176 + 195 MW AC"], ["String inverters", ""], ["PV step-up transformers", "LV / 33 kV"]] },
    { label: "BATTERY STORAGE", blocks: [["LFP battery containers", "700 + 500 MWh"], ["Bidirectional PCS", "175 + 195 MW"], ["BESS step-up transformers", "LV / 33 kV"]] }],
    bus: { label: "33 kV collection: MV cables + switchgear" },
    right: [["Main power transformers", "33/220 kV · 2 substations"], ["220 kV switchgear + CT/VT", "GIS or AIS — open"], ["220 kV conductor", "~21.6 km of route"]],
    grid: ["220 kV grid", "Aleko · Dve Mogili"], secondary: ["Protection relays", "Substation automation", "Battery EMS", "AC/DC auxiliary power"] });
  legend(s, yb + 0.25, "Quantities, ratings and brands are not yet defined in the project documents.");
  ctx.src(s, "Source: project documentation (2026); TBEA product portfolio. Potential scope only — no TBEA selection, approval or order exists.");

  // 38 — Karnobat status
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

  // 39 — Karnobat architecture & scope
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Bulgaria · Karnobat", title: "Karnobat: potential TBEA scope for the expansion", tb: true,
    sub: "Focused on what is still to be built — remaining solar phases, battery storage and connection upgrades." });
  yb = arch(s, { lanes: [{ label: "NEW SOLAR PHASES", blocks: [["PV mounting structures", "5 × 20 + 21.1 MW"], ["Inverters + MV stations", "e.g. 10 MVA units"], ["Step-up transformers", "LV / MV"]] },
    { label: "BATTERY STORAGE", blocks: [["LFP battery containers", "90 MWh usable"], ["PCS + MV skids", "45 MW"], ["BESS transformers", "LV / MV"]] }],
    bus: { label: "MV collection: cables + switchgear" },
    right: [["MV/110 kV step-up transformer", "On-load tap changer"], ["110 kV switching & metering", "3 CT + 3 VT"], ["110 kV line", "in operation"]],
    grid: ["110 kV grid", "Bulgarian TSO (ESO)"], secondary: ["Line differential protection", "SCADA (IEC 60870-5-104)", "Battery EMS", "AC/DC backup ≥ 2 h"] });
  legend(s, yb + 0.25, "Battery and remaining-phase equipment suppliers to be confirmed with the developer.");
  ctx.src(s, "Source: Karnobat Energy grid-connection and technical documentation (2026). The developer also holds a full project-finance model (senior debt + equity).");

  // 40 — North Macedonia overview
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "North Macedonia · wind", title: "PLAKE and Golem Kamen: 140 MW of planned wind power", tb: true,
    sub: "Two wind projects in the south-west of the country, with further sites in early development." });
  img(s, "tbea_wind2.png", 7.0, 1.85, 5.73, 3.3);
  T(s, "Illustrative: TBEA wind power reference site", { x: 7.0, y: 5.18, w: 5.73, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  const nm = [["PLAKE", "70 MW", [["Turbine locations", "10 planned"], ["Collection", "20 kV"], ["Main transformers", "2 × 40 MVA, 110/20 kV"], ["Grid line", "ACSR 240/40 · 24 km or 30 km route"]]],
    ["GOLEM KAMEN", "70 MW", [["Turbine locations", "10 planned"], ["Collection", "20 kV (preliminary)"], ["Substation range", "80–100 MVA (preliminary)"], ["Connection", "110 kV or 220 kV option"]]]];
  nm.forEach(([n, c, rows], i) => {
    const x = MX + i * 3.2;
    rect(s, x, 1.85, 3.05, 4.15, i === 0 ? C.NAVY : C.DEEP, { rounded: true, r: 0.06 });
    T(s, n, { x: x + 0.22, y: 2.0, w: 2.7, h: 0.32, fontSize: 15, bold: true, color: C.WHITE, charSpacing: 1 });
    T(s, c, { x: x + 0.22, y: 2.32, w: 2.7, h: 0.55, fontSize: 26, bold: true, color: C.MID });
    rows.forEach(([a, b], j) => {
      const y = 3.0 + j * 0.74;
      line(s, x + 0.22, y - 0.06, x + 2.83, y - 0.06, "2C4A6B", 0.75);
      T(s, a, { x: x + 0.22, y, w: 2.7, h: 0.24, fontSize: 10, color: C.MID });
      T(s, b, { x: x + 0.22, y: y + 0.24, w: 2.75, h: 0.45, fontSize: 12, bold: true, color: C.WHITE });
    });
  });
  ctx.tag(s, "POTENTIAL TBEA SUPPLY — NOT SELECTED", MX, 6.2, 3.6);
  rect(s, 7.0, 5.6, 5.73, 1.2, C.PALE, { rounded: true, r: 0.06 });
  T(s, [{ text: "Unique fit: ", options: { bold: true, color: C.TB } }, { text: "TBEA can supply from the steel tower to the 110 kV substation. A third site (Makedonski Brod) is at the wind-measurement stage; its capacity is not yet defined." }],
    { x: 7.2, y: 5.6, w: 5.35, h: 1.2, fontSize: 12, valign: "middle" });
  ctx.src(s, "Source: project documentation held by Ulusoy's development partners (Oct 2026). Golem Kamen figures are preliminary.");

  // 41 — North Macedonia architecture
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "North Macedonia · wind", title: "Wind electrical architecture and potential TBEA scope", tb: true,
    sub: "PLAKE is the more advanced project: its main transformer and line specifications are already defined." });
  yb = arch(s, { top: 2.7, lanes: [{ label: "EACH WIND TURBINE (20 LOCATIONS)", blocks: [["Steel tower", "20 locations"], ["Generator & nacelle cables", ""], ["Turbine step-up transformer", "LV / 20 kV"]] }],
    bus: { label: "20 kV collection: XLPE cables + switchgear / RMUs" },
    right: [["Main power transformers", "PLAKE: 2 × 40 MVA"], ["110 kV switchgear + CT/VT", "GIS or AIS — open"], ["Overhead line", "ACSR 240/40"]],
    grid: ["110 kV grid", "Ohrid or Bitola 1"], secondary: ["Transformer / line protection", "Substation automation", "AC/DC auxiliary power", "LV distribution panels"] });
  legend(s, yb + 0.3, "Golem Kamen: 110 kV or 220 kV connection still under study.");
  ctx.src(s, "Source: project documentation (Oct 2026); TBEA product portfolio. Potential scope only — no TBEA selection, approval or order exists.");

  // 42 — Middle East overview
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
  img(s, "tbea_bess_site.png", 8.35, 1.85, 4.38, 3.3);
  T(s, "Illustrative: TBEA energy-storage reference site", { x: 8.35, y: 5.18, w: 4.38, h: 0.24, fontSize: 8.5, color: C.MUTED, italic: true });
  rect(s, MX, 5.5, 12.133, 1.32, C.TBL, { rounded: true, r: 0.06 });
  T(s, "ENGINEERING POINTS FOR TBEA", { x: MX + 0.25, y: 5.6, w: 4, h: 0.26, fontSize: 10.5, bold: true, color: C.TB, charSpacing: 1.5 });
  const eq = ["Site ambient 55 °C vs. 50 °C catalogue limit for battery containers", "Inverter derating at high ambient — sizing to be confirmed", "Grid-forming PCS for an island system without a utility grid"];
  eq.forEach((t, i) => {
    const x = MX + 0.25 + i * 3.97;
    circle(s, x, 6.02, 0.36, C.TB);
    T(s, String(i + 1), { x, y: 6.02, w: 0.36, h: 0.36, fontSize: 12, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, t, { x: x + 0.48, y: 5.92, w: 3.35, h: 0.82, fontSize: 11.5, color: C.INK, valign: "middle" });
  });
  ctx.src(s, "Source: project equipment list (Oct 2026); TBEA catalogue data (TB-S2000, TS250 series). Site location not shown; options are alternatives, not cumulative.");

  // 43 — Middle East architecture
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Middle East · off-grid", title: "A complete TBEA-family package: PV, PCS, BESS, MV and EMS", tb: true,
    sub: "Quantities shown for the three alternatives (5 / 10 / 20 MW). The design repeats easily for other off-grid sites." });
  yb = arch(s, { lanes: [{ label: "SOLAR PV", blocks: [["PV mounting structures", "7 / 14 / 28 MWp"], ["String inverters, 250 kW", "20 / 40 / 80 units"], ["PV MV skids, 3.15 MVA", "2 / 4 / 8 units"]] },
    { label: "BATTERY STORAGE", blocks: [["LFP containers, ~5 MWh", "5 / 10 / 20 units"], ["Grid-forming PCS, 2.5 MW", "2 / 4 / 8 units"], ["BESS MV skids, 3.15 MVA", "0.8 / 33 kV"]] }],
    bus: { label: "33 kV switchgear: 36 kV class, 25 kA" },
    right: [["33/11 kV OLTC transformers", "2 per option"], ["11 kV distribution switchgear", "dual incomer"]],
    grid: ["Site loads", "Island system"], secondary: ["Microgrid EMS", "SCADA (IEC 61850 / 104)", "Protection + CT/VT", "AC/DC auxiliary"] });
  legend(s, yb + 0.25, "Model selection subject to TBEA confirmation at 55 °C ambient.");
  ctx.src(s, "Source: project equipment list (Oct 2026); TBEA product portfolio. Potential scope only — no TBEA selection, approval or order exists.");

  // 44 — Regional project map
  s = ctx.slide("LIGHT_TB", SEC);
  ctx.head(s, { eyebrow: "Regional view", title: "Opportunities beyond a single country", tb: true,
    sub: "≈680 MW of solar and wind and up to ≈1.37 GWh of battery storage across four live opportunities — plus the Türkiye pipeline." });
  img(s, "map_projects.png", MX - 0.2, 1.7, 7.4, 4.16, { contain: true });
  const rows = [["F2A900", "Radilovo + Katselovo", "Bulgaria", "371 MW PV · 370 MW / 1,200 MWh BESS", "Development"],
    ["F2A900", "Karnobat", "Bulgaria", "150 MW PV · 45 MW / 90 MWh BESS", "Operating + expanding"],
    ["2BB673", "PLAKE + Golem Kamen", "North Macedonia", "140 MW wind", "Development"],
    ["E4572E", "Off-grid solar + storage", "Middle East", "5–20 MW PV · 20–80 MWh BESS", "Options under evaluation"],
    ["FFFFFF", "Türkiye pipeline", "Türkiye", "Connection substations · data centers · industry · transmission", "See next section"]];
  rows.forEach(([col, n, c, cap, st], i) => {
    const y = 1.85 + i * 0.98;
    rect(s, 7.45, y, 5.28, 0.86, i === 4 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    circle(s, 7.62, y + 0.16, 0.22, col, { line: { color: i === 4 ? C.WHITE : col, width: 1.5 } });
    T(s, n, { x: 7.98, y: y + 0.08, w: 2.6, h: 0.3, fontSize: 12.5, bold: true, color: i === 4 ? C.WHITE : C.INK });
    T(s, c, { x: 10.5, y: y + 0.08, w: 2.1, h: 0.3, fontSize: 10.5, color: i === 4 ? C.MID : C.MUTED, align: "right" });
    T(s, cap, { x: 7.98, y: y + 0.4, w: 3.3, h: 0.4, fontSize: 10.5, color: i === 4 ? C.ICE : C.MUTED });
    T(s, st, { x: 11.1, y: y + 0.4, w: 1.5, h: 0.4, fontSize: 10, bold: true, color: i === 4 ? C.MID : C.TB, align: "right" });
  });
  rect(s, MX, 6.05, 6.7, 0.75, C.TBL, { rounded: true, r: 0.06 });
  T(s, "Ulusoy already brings opportunities in four markets. A partnership turns these into a repeatable pipeline.", { x: MX + 0.2, y: 6.05, w: 6.35, h: 0.75, fontSize: 12.5, bold: true, color: C.TB, valign: "middle" });
  ctx.src(s, "Source: project documentation (2026). Capacities are planned / working values; Karnobat includes 28.9 MW already operating. Map locations approximate; Middle East location indicative.");
};
