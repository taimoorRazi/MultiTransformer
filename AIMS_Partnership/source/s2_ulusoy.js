module.exports = async (ctx) => {
  const { L, C } = ctx; const { T, rect, circle, line, img, MX } = L;
  const SEC = "Who is Ulusoy";
  const SRC = "Source: Ulusoy Group corporate records.";

  // 4 — Enterprise legacy (section opener)
  let s = ctx.slide("DARK", SEC);
  img(s, "ul_coach1937.png", 7.35, 0, 5.983, 7.5, { fx: 0.45 });
  T(s, "01  ·  WHO IS ULUSOY", { x: MX, y: 0.95, w: 6, h: 0.3, fontSize: 12, bold: true, color: C.MID, charSpacing: 4 });
  T(s, "1937 – 2026", { x: MX, y: 1.45, w: 6.6, h: 1.1, fontSize: 60, bold: true, color: C.WHITE });
  T(s, "Nearly nine decades of building, operating and partnering — from a single coach between Of and Trabzon to a diversified group across transport, maritime, infrastructure, energy and technology.",
    { x: MX, y: 2.75, w: 6.3, h: 1.35, fontSize: 16, color: C.MID });
  const st = [["89", "years of continuous family enterprise"], ["3", "generations of family leadership"], ["16+", "sectors entered and operated"], ["50+", "years of international business, since 1973"]];
  st.forEach(([n, l], i) => {
    const x = MX + (i % 2) * 3.2, y = 4.45 + Math.floor(i / 2) * 1.25;
    T(s, n, { x, y, w: 3.0, h: 0.6, fontSize: 34, bold: true, color: C.WHITE });
    T(s, l, { x, y: y + 0.6, w: 2.9, h: 0.5, fontSize: 12, color: C.MID });
  });
  T(s, "The first Ulusoy coach, 1937 — registered OF-1", { x: 7.5, y: 7.08, w: 5.6, h: 0.24, fontSize: 8, color: C.WHITE, italic: true, align: "right" });

  // 5 — Origins & founding philosophy
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Origins · 1920–1937", title: "Origins: a transport problem solved, a principle established",
    sub: "The enterprise began by solving a practical infrastructure problem on Türkiye's eastern Black Sea coast." });
  img(s, "ul_house_of.png", 7.55, 1.85, 5.18, 3.45);
  T(s, "The house of the Ulusoy family in Of, Trabzon", { x: 7.55, y: 5.35, w: 5.18, h: 0.25, fontSize: 9, color: C.MUTED, italic: true });
  const ev = [["1920s", "No roads, few vehicles. When floods cut off Of and Çaykara, Hacı Mehmet Bahattin Ulusoy restored the crossing with a raft."],
    ["1928", "Trading hazelnut and grain, he buys the family's first vehicle — turning a regional transport problem into a business."],
    ["1937", "Ulusoy Coaching is founded with one 1937-model Opel bus: one vehicle, one route (Of–Trabzon), one principle."]];
  ev.forEach(([y_, t], i) => {
    const y = 1.95 + i * 1.12;
    circle(s, MX, y + 0.05, 0.22, C.BLUE);
    if (i < 2) line(s, MX + 0.11, y + 0.3, MX + 0.11, y + 1.12, C.ICE, 2);
    T(s, y_, { x: MX + 0.45, y, w: 1.2, h: 0.32, fontSize: 16, bold: true, color: C.BLUE });
    T(s, t, { x: MX + 1.55, y, w: 5.15, h: 0.95, fontSize: 13, color: C.INK });
  });
  rect(s, MX, 5.6, 6.6, 1.25, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "“Everything on Time.”", { x: MX + 0.35, y: 5.7, w: 6.0, h: 0.6, fontSize: 26, bold: true, italic: true, color: C.WHITE });
  T(s, "The founding principle — still the group's operating philosophy.", { x: MX + 0.35, y: 6.3, w: 6.0, h: 0.4, fontSize: 12, color: C.MID });
  rect(s, 7.55, 5.85, 5.18, 1.0, C.PALE, { rounded: true, r: 0.06 });
  T(s, [{ text: "Why it matters for AIMS:  ", options: { bold: true, color: C.BLUE } }, { text: "the same discipline applies to factory projects — installation windows, commissioning and production ramp-up." }],
    { x: 7.8, y: 5.85, w: 4.75, h: 1.0, fontSize: 13, color: C.INK, valign: "middle" });
  ctx.src(s, SRC);

  // 6 — Three generations
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Family leadership · 1928–2026", title: "Three generations: from regional operator to holding",
    sub: "Long-term family ownership — decisions are made for decades, not quarters." });
  const ppl = [["ul_saffet.png", "Saffet Ulusoy", "1930 – 2012", "Senior family figure in transport from 1946; Chairman of the holding; long-serving President of the International Forwarders Association (UND)."],
    ["ul_cemal.png", "Cemal Ulusoy", "1935 – 1989", "Led the coaching business from 1957; opened the first İstanbul office; founded the tourism company in 1963."],
    ["ul_yilmaz.png", "Yılmaz Ulusoy", "1941 – 2025", "Joined in 1959; led the holding company and its international, globalising businesses."]];
  ppl.forEach(([f, n, y_, d], i) => {
    const x = MX + i * 2.55;
    img(s, f, x, 1.85, 2.3, 2.45, { fy: 0.3 });
    T(s, n, { x, y: 4.4, w: 2.35, h: 0.3, fontSize: 14, bold: true });
    T(s, y_, { x, y: 4.7, w: 2.35, h: 0.25, fontSize: 11, color: C.BLUE, bold: true });
    T(s, d, { x, y: 5.0, w: 2.35, h: 1.02, fontSize: 11, color: C.MUTED });
  });
  rect(s, MX, 6.12, 7.45, 0.74, C.PALE, { rounded: true, r: 0.06 });
  await ctx.iconCircle(s, "LuAward", MX + 0.15, 6.2, 0.58, C.WHITE, C.BLUE);
  T(s, [{ text: "International recognition: ", options: { bold: true, color: C.BLUE } },
    { text: "Saffet Ulusoy was named Commendatore by the Italian Republic for international achievements in Ro-Ro transport, and was honoured in Flensburg, Germany (2002), for vessel orders that helped revive the city's shipyard." }],
    { x: MX + 0.88, y: 6.12, w: 6.45, h: 0.74, fontSize: 10.5, color: C.INK, valign: "middle" });
  const ph = [["1920s – 1951", "Foundation", "A transport problem solved; coaching founded on punctuality."],
    ["1952 – 1994", "Expansion", "Freight, international TIR, tourism, Volvo distribution, shipping."],
    ["1995 – 2002", "Consolidation", "Companies united under one holding; industrial production added."],
    ["2003 – today", "Diversification", "Ports, dry cargo, energy, construction, software, robotics, trade."]];
  ph.forEach(([y_, t, d], i) => {
    const y = 1.85 + i * 1.22, x = 8.45;
    rect(s, x, y, 4.28, 1.08, i === 3 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    T(s, y_, { x: x + 0.25, y: y + 0.12, w: 1.8, h: 0.25, fontSize: 10, bold: true, color: i === 3 ? C.MID : C.BLUE, charSpacing: 1 });
    T(s, t, { x: x + 2.0, y: y + 0.1, w: 2.1, h: 0.3, fontSize: 14, bold: true, color: i === 3 ? C.WHITE : C.INK });
    T(s, d, { x: x + 0.25, y: y + 0.45, w: 3.85, h: 0.6, fontSize: 11.5, color: i === 3 ? C.ICE : C.MUTED });
  });
  ctx.src(s, SRC + " Honours: Anadolu Agency and national press obituaries (2012).");

  // 7 — Business evolution timeline
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Business evolution", title: "Each new sector was built on the one before",
    sub: "Regional transport → national transport → logistics → maritime → infrastructure → energy → technology" });
  const bands = [["TRANSPORT", 1937, 1973, C.ICE], ["LOGISTICS", 1973, 1995, C.MID], ["MARITIME", 1981, 2008, "8FB2D3"], ["INFRASTRUCTURE", 2000, 2015, C.BLUE], ["ENERGY", 2010, 2020, C.DEEP], ["TECHNOLOGY", 2015, 2026, C.NAVY]];
  const x0 = MX + 0.1, x1 = 12.65, y0 = 1937, y1 = 2026; const X = (yr) => x0 + (yr - y0) / (y1 - y0) * (x1 - x0);
  const ty = 4.05;
  line(s, x0, ty, x1, ty, C.INK, 2);
  // level: 1 = above near, 2 = above far, -1 = below near, -2 = below far
  const ms = [[1937, "Ulusoy Coaching founded — one Opel bus", 1], [1952, "Freight transport begins", -1], [1973, "International TIR haulage", 1], [1978, "Ulusoy Automotive", -1],
    [1981, "Volvo distributor · Ulusoy Shipping", 2], [1995, "Holding formed · Black Sea Ro-Ro", -1], [2000, "Çeşme–Trieste corridor", 1], [2003, "Çeşme Port concession", -2],
    [2008, "Dry-cargo fleet (China-built)", 2], [2010, "İlk Elektrik — hydro power", -1], [2019, "Viniks software", 1], [2026, "Robotics & automation", -2]];
  ms.forEach(([yr, t, lv]) => {
    const x = X(yr), bw = 1.6, bx = Math.min(Math.max(x - bw / 2, MX - 0.1), 12.83 - bw);
    const up = lv > 0, far = Math.abs(lv) === 2;
    const top = up ? ty - (far ? 2.15 : 1.25) : ty + (far ? 1.15 : 0.3);
    line(s, x, up ? top + 0.95 : ty + 0.09, x, up ? ty - 0.09 : top, C.LINE, 1);
    circle(s, x - 0.09, ty - 0.09, 0.18, C.WHITE, { line: { color: C.BLUE, width: 2 } });
    T(s, String(yr), { x: bx, y: top, w: bw, h: 0.3, fontSize: 14, bold: true, color: C.BLUE, align: "center" });
    T(s, t, { x: bx, y: top + 0.3, w: bw, h: 0.6, fontSize: 10.5, color: C.INK, align: "center" });
  });
  bands.forEach(([n, a, b, col], i) => {
    const y = 6.2 + (i % 2) * 0.38;
    rect(s, X(a), y, X(b) - X(a), 0.32, col, { rounded: true, r: 0.16 });
    T(s, n, { x: X(a), y, w: X(b) - X(a), h: 0.32, fontSize: 9, bold: true, color: i < 1 ? C.DEEP : C.WHITE, align: "center", valign: "middle", charSpacing: 1 });
  });
  ctx.src(s, SRC + " Bands indicate the period in which each capability was built; most remain active today.");

  // 8 — Transport & logistics DNA
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Passenger transport & freight · from 1937", title: "Operating DNA: moving people and freight on schedule",
    sub: "From one vehicle in 1937 to one of Türkiye's largest coach operations." });
  img(s, "ul_coach_fleet.png", MX, 1.85, 6.2, 3.85);
  T(s, "The Ulusoy coach fleet in its modern era", { x: MX, y: 5.75, w: 6.2, h: 0.25, fontSize: 9, color: C.MUTED, italic: true });
  [["3M", "passengers carried each year"], ["450", "coaches in the fleet"], ["2,000", "people employed"], ["~300", "coaches in the 1970s — Türkiye's largest fleet of its time"]]
    .forEach(([n, l], i) => ctx.stat(s, n, l, 7.2 + (i % 2) * 2.8, 1.8 + Math.floor(i / 2) * 1.45, 2.6, { size: 36 }));
  rect(s, 7.2, 4.85, 5.53, 1.85, C.PALE, { rounded: true, r: 0.06 });
  T(s, "WHAT THIS BUILT", { x: 7.45, y: 5.0, w: 5, h: 0.25, fontSize: 10, bold: true, color: C.BLUE, charSpacing: 2 });
  T(s, [{ text: "Freight since 1952 — timber, grain, fuel, salt", options: { bullet: true, breakLine: true } },
    { text: "Terminals, fleets and maintenance networks nationwide", options: { bullet: true, breakLine: true } },
    { text: "Relationships in every major Turkish city", options: { bullet: true } }], { x: 7.45, y: 5.32, w: 5.1, h: 1.3, fontSize: 13, paraSpaceAfter: 4 });
  ctx.src(s, SRC + " Fleet and passenger figures refer to the passenger-transport business at its peak.");

  // 9 — International logistics
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "International transport · from 1973", title: "International logistics: Türkiye–Europe–Middle East since 1973",
    sub: "Road, sea and air — built as one chain, with our own trailers on our own vessels." });
  img(s, "map_reach.png", 5.35, 1.6, 7.6, 5.07, { contain: true });
  const il = [["1973", "International TIR haulage begins between Türkiye, Europe and the Middle East"], ["1981", "TIR fleet expanded; offices opened in Munich, Trieste and London"],
    ["1991", "Crude-oil haulage operations in Iran"], ["1994", "Air cargo and container transport; bonded and duty-free warehousing"]];
  il.forEach(([y_, t], i) => {
    const y = 1.9 + i * 0.95;
    T(s, y_, { x: MX, y, w: 0.9, h: 0.35, fontSize: 18, bold: true, color: C.BLUE });
    T(s, t, { x: MX + 1.0, y: y + 0.02, w: 3.75, h: 0.8, fontSize: 13 });
  });
  rect(s, MX, 5.75, 4.6, 1.0, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "Customs, cross-border trade and heavy project cargo are native to the group — directly relevant to moving turbines, blades and towers.",
    { x: MX + 0.25, y: 5.75, w: 4.15, h: 1.0, fontSize: 12, color: C.WHITE, valign: "middle" });
  ctx.src(s, SRC + " Map shows principal historical routes and offices.");

  // 10 — Maritime & Ro-Ro
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Maritime · from 1981", title: "Maritime and Ro-Ro: operating international infrastructure",
    sub: "Growing Black Sea and Mediterranean trade took the group's transport business onto the water." });
  img(s, "ul_roro.png", MX, 1.85, 3.9, 2.95);
  img(s, "ul_drycargo.png", MX + 4.05, 1.85, 4.1, 2.95);
  T(s, "Ro-Ro loading operations", { x: MX, y: 4.85, w: 3.9, h: 0.25, fontSize: 9, color: C.MUTED, italic: true });
  T(s, "Ro-Ro operations at Çeşme", { x: MX + 4.05, y: 4.85, w: 4.1, h: 0.25, fontSize: 9, color: C.MUTED, italic: true });
  [["8", "vessels across Ro-Ro and dry cargo"], ["~194,000", "DWT combined bulk capacity"], ["1995", "first Ro-Ro line, Samsun–Novorossiysk"]]
    .forEach(([n, l], i) => ctx.stat(s, n, l, 9.15, 1.8 + i * 1.12, 3.6, { size: 30, nh: 0.52, lh: 0.42 }));
  rect(s, MX, 5.35, 12.133, 1.4, C.PALE, { rounded: true, r: 0.06 });
  await ctx.iconCircle(s, "LuShip", MX + 0.3, 5.6, 0.9, C.WHITE, C.BLUE);
  T(s, [{ text: "An early working relationship with Chinese industry. ", options: { bold: true, color: C.INK } },
    { text: "Our first dry-cargo vessels, Ulusoy-8 and Ulusoy-9 (2008), were built in China; Ulusoy-14 and Ulusoy-15 were built in Flensburg, Germany. All vessels operate under the Turkish flag with Turkish crews, certified to ISM, ISO and Lloyd's Register standards." }],
    { x: MX + 1.5, y: 5.4, w: 10.4, h: 1.3, fontSize: 13, color: C.MUTED, valign: "middle" });
  ctx.src(s, SRC);

  // 11 — Çeşme–Trieste corridor & port
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Corridor & port operations · from 2000", title: "Çeşme–Trieste: port ownership and cross-border trade",
    sub: "A maritime corridor between Türkiye and Italy, anchored by the group's own port." });
  img(s, "ul_cesme_port.png", MX, 1.85, 5.6, 3.7);
  T(s, "Çeşme Port, İzmir", { x: MX, y: 5.6, w: 5.6, h: 0.25, fontSize: 9, color: C.MUTED, italic: true });
  const cz = [["2000", "Çeşme–Trieste Ro-Ro line established"], ["2003", "Çeşme Port operating rights acquired through privatization"], ["2009", "Second pier of 213 m completed"],
    ["2011", "Trieste Gateway S.r.l. established in Italy"], ["2013", "First pier extended from 150 m to 322 m"], ["2015", "Container and swap-body transport added"], ["2019", "Scrubber systems installed on corridor vessels"]];
  const tx = 6.75;
  line(s, tx + 0.09, 1.98, tx + 0.09, 1.98 + 6 * 0.6, C.ICE, 2);
  cz.forEach(([y_, t], i) => {
    const y = 1.88 + i * 0.6;
    circle(s, tx, y + 0.02, 0.18, i === 1 ? C.BLUE : C.WHITE, { line: { color: C.BLUE, width: 2 } });
    T(s, y_, { x: tx + 0.4, y: y - 0.04, w: 0.8, h: 0.3, fontSize: 14, bold: true, color: C.BLUE });
    T(s, t, { x: tx + 1.25, y: y - 0.02, w: 4.7, h: 0.4, fontSize: 12.5 });
  });
  rect(s, MX, 6.0, 12.133, 0.78, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "Concession, port investment and an Italian company structure: experience in developing and operating long-term infrastructure across borders.",
    { x: MX + 0.35, y: 6.0, w: 11.5, h: 0.78, fontSize: 13.5, color: C.WHITE, valign: "middle", bold: true });
  ctx.src(s, SRC);

  // 12 — International partnership heritage
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "International partnership heritage", title: "Long-term partnerships with international brands",
    sub: "Sales, after-sales service, spare parts and reputation: the full responsibility of a long-term partner." });
  img(s, "ul_volvo.png", MX, 1.85, 4.6, 3.0);
  T(s, "Volvo showroom, Yenibosna, İstanbul", { x: MX, y: 4.9, w: 4.6, h: 0.25, fontSize: 9, color: C.MUTED, italic: true });
  rect(s, MX, 5.3, 4.6, 1.45, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "VOLVO · FROM 1981", { x: MX + 0.25, y: 5.42, w: 4.2, h: 0.25, fontSize: 10, bold: true, color: C.MID, charSpacing: 2 });
  T(s, "Türkiye's general distributor for Volvo trucks, construction vehicles and coaches; a joint company with Swedish capital from 1994; showrooms and service network.",
    { x: MX + 0.25, y: 5.72, w: 4.15, h: 0.98, fontSize: 11.5, color: C.WHITE });
  const pc = [["LuBus", "Neoplan", "1983", "Coach distributor for Türkiye"], ["LuAnchor", "Çeşme Port", "2003", "Privatization concession — port operator"],
    ["LuLandmark", "Trieste Gateway", "2011", "Italian company with majority holding in Trieste Intermodal Maritime"],
    ["LuShip", "Chinese shipyards", "2008", "Dry-cargo vessels built in China"], ["LuBot", "Lonyu Robot", "Today", "Authorized distributor in Türkiye for a Chinese heavy-load AGV manufacturer"],
    ["LuZap", "İlk Elektrik", "2010", "Licensed hydroelectric generation company"]];
  for (let i = 0; i < pc.length; i++) {
    const [ic, n, y_, d] = pc[i];
    const x = 5.55 + (i % 2) * 3.62, y = 1.85 + Math.floor(i / 2) * 1.66;
    rect(s, x, y, 3.47, 1.5, C.PALE, { rounded: true, r: 0.06 });
    if (ic !== "LuBus") await ctx.iconCircle(s, ic, x + 0.2, y + 0.22, 0.62, C.WHITE, C.BLUE);
    else await ctx.iconCircle(s, "LuTruck", x + 0.2, y + 0.22, 0.62, C.WHITE, C.BLUE);
    T(s, n, { x: x + 0.98, y: y + 0.2, w: 2.0, h: 0.3, fontSize: 14, bold: true });
    T(s, y_, { x: x + 2.6, y: y + 0.22, w: 0.75, h: 0.28, fontSize: 10, bold: true, color: C.BLUE, align: "right" });
    T(s, d, { x: x + 0.98, y: y + 0.55, w: 2.35, h: 0.88, fontSize: 11, color: C.MUTED });
  }
  ctx.src(s, SRC);

  // 13 — Energy
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Energy · from 2010", title: "Energy: owner and operator of grid-connected generation",
    sub: "The group entered electricity generation through İlk Elektrik Enerji, with hydroelectric plants in Sinop province." });
  img(s, "ul_hydro.png", 6.85, 1.85, 5.88, 3.88);
  T(s, "Hydroelectric operations, Sinop", { x: 6.85, y: 5.78, w: 5.88, h: 0.25, fontSize: 9, color: C.MUTED, italic: true });
  T(s, "25 MW", { x: MX, y: 1.8, w: 5.5, h: 1.0, fontSize: 60, bold: true, color: C.BLUE });
  T(s, "installed hydroelectric capacity — Güzelçay II and Ayancık plants, two generation licences", { x: MX, y: 2.85, w: 5.6, h: 0.6, fontSize: 13, color: C.MUTED });
  rect(s, MX, 3.75, 5.85, 2.95, C.PALE, { rounded: true, r: 0.06 });
  T(s, "WHAT THIS GIVES US", { x: MX + 0.3, y: 3.92, w: 5, h: 0.25, fontSize: 10, bold: true, color: C.BLUE, charSpacing: 2 });
  T(s, [{ text: "The equipment buyer's view: we have bought, connected and operated electrical assets", options: { bullet: true, breakLine: true } },
    { text: "First-hand experience of licensing, grid connection and utility interfaces in Türkiye", options: { bullet: true, breakLine: true } },
    { text: "An understanding of the owner's perspective when working with developers and IPPs", options: { bullet: true } }],
    { x: MX + 0.3, y: 4.28, w: 5.35, h: 2.3, fontSize: 13.5, paraSpaceAfter: 8 });
  ctx.src(s, SRC);

  // 14 — Technology & robotics
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Technology · today", title: "Technology: robotics, automation and software",
    sub: "Ulusoy Robotics applies the group's logistics experience to automated industrial movement." });
  const tc = [["LuFactory", "Industrial robotics", "Automation systems for manufacturing and materials handling."],
    ["LuTruck", "Heavy-duty AGVs", "Automated guided vehicles for high-load industrial movement in Turkish factories."],
    ["LuRoute", "Autonomous transport", "Driverless transport solutions built on the group's logistics experience."],
    ["LuCpu", "Viniks software · 2019", "The group's software company: digital systems and technology investment."]];
  for (let i = 0; i < tc.length; i++) {
    const [ic, t, d] = tc[i]; const x = MX + i * 3.08;
    rect(s, x, 1.9, 2.9, 2.55, C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.25, 2.12, 0.75, C.WHITE, C.BLUE);
    T(s, t, { x: x + 0.25, y: 3.0, w: 2.45, h: 0.35, fontSize: 15, bold: true });
    T(s, d, { x: x + 0.25, y: 3.4, w: 2.45, h: 0.95, fontSize: 12, color: C.MUTED });
  }
  rect(s, MX, 4.75, 12.133, 2.0, C.NAVY, { rounded: true, r: 0.06 });
  T(s, "ALREADY WORKING WITH CHINESE INDUSTRY", { x: MX + 0.45, y: 4.98, w: 8, h: 0.28, fontSize: 11, bold: true, color: C.MID, charSpacing: 2 });
  T(s, "Ulusoy Robotics is the authorized distributor in Türkiye for Lonyu Robot, a Chinese heavy-load AGV manufacturer. We introduce the technology, qualify customers, coordinate engineering with the factory, and support customers locally.",
    { x: MX + 0.45, y: 5.32, w: 7.6, h: 1.3, fontSize: 13.5, color: C.WHITE });
  T(s, "The same working model we propose with AIMS: local customer engagement, installation and service.", { x: 8.9, y: 5.0, w: 3.6, h: 1.6, fontSize: 15, bold: true, color: C.ICE, valign: "middle", italic: true });
  ctx.src(s, SRC + " ulusoyrobotics.com");

  // 15 — Why Ulusoy today
  s = ctx.slide("LIGHT", SEC);
  ctx.head(s, { eyebrow: "Group strengths", title: "Why Ulusoy today", sub: "What the group brings to a long-term partnership." });
  const wu = [["LuUsers", "Senior-level relationships", "Access to owners and decision-makers built over 89 years"],
    ["LuAnchor", "Infrastructure experience", "Ports, fleets, industrial plants, hotels — built and operated"],
    ["LuFactory", "Industrial customer access", "Long relationships across Turkish industry and logistics"],
    ["LuMilestone", "Project development", "From permits and connection to financing and construction"],
    ["LuTruck", "Logistics & project cargo", "Road, sea, port and customs capability in-house"],
    ["LuGlobe", "International business", "Europe, Black Sea, Middle East — and China"],
    ["LuZap", "Energy", "Owner-operator of licensed generation assets"],
    ["LuBot", "Technology", "Robotics and automation with a Chinese partner"],
    ["LuShieldCheck", "Family ownership", "Long-term owners: partnerships that last decades, not deals"]];
  for (let i = 0; i < wu.length; i++) {
    const [ic, t, d] = wu[i]; const x = MX + (i % 3) * 4.08, y = 1.85 + Math.floor(i / 3) * 1.65;
    rect(s, x, y, 3.9, 1.48, i === 8 ? C.NAVY : C.PALE, { rounded: true, r: 0.06 });
    await ctx.iconCircle(s, ic, x + 0.22, y + 0.3, 0.8, i === 8 ? C.DEEP : C.WHITE, i === 8 ? C.WHITE : C.BLUE);
    T(s, t, { x: x + 1.2, y: y + 0.24, w: 2.55, h: 0.35, fontSize: 14, bold: true, color: i === 8 ? C.WHITE : C.INK });
    T(s, d, { x: x + 1.2, y: y + 0.62, w: 2.55, h: 0.75, fontSize: 11.5, color: i === 8 ? C.ICE : C.MUTED });
  }
};
