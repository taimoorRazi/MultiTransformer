module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Heavy AGVs";

  // Heavy AGVs in transformer plants
  let s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Ulusoy today", title: "Moving the heaviest parts of a transformer factory",
    sub: "With Lonyu Robot, we bring heavy-load AGVs to Turkish plants — where cranes and forklifts limit flow and safety." });
  const tasks = [["LuLayers", "Active parts", "Core-coil assemblies between assembly, drying and tanking"],
    ["LuContainer", "Tanks", "Tanks between welding, painting, assembly and test"],
    ["LuCylinder", "Coils and cores", "Heavy coils and cores between winding, stacking and assembly"],
    ["LuGauge", "Test and dispatch", "Finished units to the test bay and the loading area"]];
  for (const [i, [ic, t, d]] of tasks.entries()) {
    const y = 1.9 + i * 1.12;
    rect(s, MX, y, 6.6, 1.0, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, MX + 0.2, y + 0.16, 0.68, C.WHITE, C.BLUE);
    T(s, t, { x: MX + 1.1, y: y + 0.14, w: 5.3, h: 0.34, fontSize: 15, bold: true });
    T(s, d, { x: MX + 1.1, y: y + 0.5, w: 5.3, h: 0.4, fontSize: 12.5, color: C.MUTED });
  }
  const rx = 7.55;
  rect(s, rx, 1.9, 5.18, 4.36, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "WHAT WE DO FOR CUSTOMERS", { x: rx + 0.35, y: 2.12, w: 4.6, h: 0.3, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  const svc = ["Site survey and material-flow review", "Route and layout design with the factory", "Installation and commissioning", "Operator training", "Service, spare parts and fast response"];
  for (let i = 0; i < svc.length; i++) {
    const y = 2.6 + i * 0.7;
    circle(s, rx + 0.38, y + 0.04, 0.4, C.TB);
    T(s, String(i + 1), { x: rx + 0.38, y: y + 0.04, w: 0.4, h: 0.4, fontSize: 12, bold: true, color: C.WHITE, align: "center", valign: "middle" });
    T(s, svc[i], { x: rx + 0.95, y: y, w: 4.0, h: 0.5, fontSize: 14, color: C.WHITE, valign: "middle" });
  }
  rect(s, MX, 6.42, 12.133, 0.5, C.TBL, { rounded: true, r: 0.06 });
  T(s, [{ text: "The gap we see: ", options: { bold: true, color: C.TB } }, { text: "AGVs move the heavy parts — customers also ask for storage, line-side supply and one system for the whole flow." }],
    { x: MX + 0.3, y: 6.42, w: 11.6, h: 0.5, fontSize: 13, valign: "middle" });
  ctx.src(s, "Source: Ulusoy Group. Lonyu Robot: Chinese heavy-load AGV manufacturer; Ulusoy Robotics is its authorized distributor in Türkiye.");

  // Our network
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Our network", title: "Relationships across Türkiye's power-equipment industry",
    sub: "The Ulusoy Group's 89 years of relationships, now focused on the manufacturers that are expanding." });
  const net = [["LuZap", "Transformer manufacturers", "Large Turkish groups and multinational plants making power and distribution transformers"],
    ["LuCircuitBoard", "Switchgear & MV equipment", "Makers of medium-voltage switchgear, panels and substations"],
    ["LuCable", "Cables & conductors", "Copper and aluminium conductor and cable producers"],
    ["LuBatteryCharging", "Batteries & BESS", "Battery-system and storage assemblers serving the 33 GW storage pipeline"],
    ["LuSun", "Solar modules", "Module and cell producers building new capacity"],
    ["LuFactory", "Industrial groups & OIZs", "Diversified groups and organised industrial zones planning new plants"]];
  for (const [i, [ic, t, d]] of net.entries()) {
    const x = MX + (i % 3) * 4.08, y = 1.9 + Math.floor(i / 3) * 2.0;
    rect(s, x, y, 3.92, 1.82, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.22, 0.66, C.WHITE, C.TB);
    T(s, t, { x: x + 1.02, y: y + 0.22, w: 2.8, h: 0.66, fontSize: 14.5, bold: true, valign: "middle" });
    T(s, d, { x: x + 0.22, y: y + 1.0, w: 3.5, h: 0.75, fontSize: 12, color: C.MUTED });
  }
  rect(s, MX, 6.0, 12.133, 0.82, C.NAVY, { rounded: true, r: 0.06 });
  T(s, [{ text: "Several of these companies are expanding capacity or planning new plants. ", options: { bold: true, color: C.WHITE } },
    { text: "We introduce named accounts project by project, together with AIMS's solution team.", options: { color: C.MID } }],
    { x: MX + 0.35, y: 6.0, w: 11.5, h: 0.82, fontSize: 14, valign: "middle" });
};
