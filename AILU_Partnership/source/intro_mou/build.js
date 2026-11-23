const pptxgen = require("pptxgenjs");
const fs = require("fs");
const L = require("./lib");
const { C, W, H, MX, T, rect, circle, line, img, icon, A } = L;

const OUT = process.argv[2] || "deck.pptx";

function defineMasters(p) {
  const titlePh = { placeholder: { options: { name: "title", type: "title", x: MX, y: 0.6, w: 10.7, h: 0.6, fontFace: "Arial", fontSize: 24, bold: true, color: C.INK, valign: "top", align: "left", margin: 0 }, text: "" } };
  const num = { x: 12.25, y: 7.04, w: 0.5, h: 0.26, fontFace: "Arial", fontSize: 9, color: C.MUTED, align: "right" };
  p.defineSlideMaster({ title: "LIGHT", background: { color: C.WHITE },
    objects: [{ image: { path: A + "ul_logo_blue.png", x: 11.5, y: 0.36, w: 1.22, h: 0.279 } }, titlePh], slideNumber: num });
  p.defineSlideMaster({ title: "LIGHT_TB", background: { color: C.WHITE },
    objects: [{ image: { path: A + "ul_logo_blue.png", x: 11.5, y: 0.36, w: 1.22, h: 0.279 } },
      { text: { text: "× AILU", options: { x: 11.5, y: 0.66, w: 1.22, h: 0.2, fontFace: "Arial", fontSize: 9, bold: true, color: C.TB, align: "right", margin: 0, charSpacing: 2 } } }, titlePh], slideNumber: num });
  p.defineSlideMaster({ title: "DARK", background: { color: C.NAVY },
    objects: [{ image: { path: A + "ul_logo_white.png", x: 11.5, y: 0.36, w: 1.22, h: 0.279 } }], slideNumber: Object.assign({}, num, { color: C.MID }) });
  p.defineSlideMaster({ title: "BLANK_DARK", background: { color: C.NAVY }, objects: [] });

}

function makeCtx(p) {
  let notes = {};
  try { notes = JSON.parse(fs.readFileSync(__dirname + "/notes.json", "utf8")); } catch (e) {}
  const ctx = { p, L, C, notes, n: 0, mod: "", local: 0, drop: new Set() };
  const scratch = new pptxgen(); scratch.layout = "LAYOUT_WIDE"; defineMasters(scratch);

  const secs = new Set();
  ctx.slide = (master, section) => {
    ctx.local += 1;
    if (ctx.drop.has(ctx.mod + ":" + ctx.local)) return scratch.addSlide({ masterName: master });
    if (!secs.has(section)) { p.addSection({ title: section }); secs.add(section); }
    const s = p.addSlide({ masterName: master, sectionTitle: section });
    ctx.n += 1;
    const key = String(ctx.n);
    if (notes[key]) s.addNotes(notes[key]);
    return s;
  };

  // standard content header (Ulusoy style: eyebrow / title / subtitle)
  ctx.head = (s, { eyebrow, title, sub, tb }) => {
    if (eyebrow) T(s, eyebrow.toUpperCase(), { x: MX, y: 0.36, w: 9.5, h: 0.24, fontSize: 10, bold: true, color: tb ? C.TB : C.BLUE, charSpacing: 3 });
    s.addText(title, { placeholder: "title" });
    if (sub) T(s, sub, { x: MX, y: 1.2, w: 11.4, h: 0.42, fontSize: 14, color: C.MUTED });
  };
  ctx.src = (s, text) => T(s, text, { x: MX, y: 7.04, w: 11.2, h: 0.26, fontSize: 8, color: C.MUTED, valign: "middle" });

  ctx.divider = (s, num, title, line1, line2) => {
    T(s, num, { x: MX + 0.05, y: 1.2, w: 3, h: 1.3, fontSize: 80, bold: true, color: C.BLUE });
    T(s, title, { x: MX + 0.05, y: 2.6, w: 7.2, h: 1.5, fontSize: 38, bold: true, color: C.WHITE, valign: "top" });
    if (line1) T(s, line1, { x: MX + 0.05, y: 4.3, w: 7.0, h: 0.9, fontSize: 18, color: C.MID, italic: true });
    if (line2) T(s, line2, { x: MX + 0.05, y: 5.3, w: 7.0, h: 0.7, fontSize: 14, color: C.MID });
  };

  // small pill tag
  ctx.tag = (s, text, x, y, w, color = C.AMBER, fill = C.AMBERL, fs = 10) => {
    rect(s, x, y, w, 0.28, fill, { rounded: true, r: 0.14 });
    T(s, text, { x, y, w, h: 0.28, fontSize: fs, bold: true, color, align: "center", valign: "middle" });
  };

  ctx.iconCircle = async (s, name, x, y, d, bg = C.ICE, fg = C.BLUE) => {
    circle(s, x, y, d, bg);
    const pad = d * 0.24;
    s.addImage({ data: await icon(name, fg), x: x + pad, y: y + pad, w: d - 2 * pad, h: d - 2 * pad });
  };
  ctx.icon = async (s, name, x, y, d, fg = C.BLUE) => s.addImage({ data: await icon(name, fg), x, y, w: d, h: d });

  // stat block: big number + label
  ctx.stat = (s, num, label, x, y, w, o = {}) => {
    T(s, num, { x, y, w, h: o.nh || 0.62, fontSize: o.size || 34, bold: true, color: o.color || C.BLUE, valign: "bottom" });
    T(s, label, { x, y: y + (o.nh || 0.62) + 0.06, w, h: o.lh || 0.5, fontSize: o.lsize || 12, color: o.lcolor || C.MUTED });
  };
  return ctx;
}

(async () => {
  await L.loadDims();
  const p = new pptxgen();
  p.layout = "LAYOUT_WIDE";
  p.author = "Ulusoy Group";
  p.company = "Ulusoy Group";
  p.title = "AILU × Ulusoy — A Partnership for Türkiye and the Region";
  p.theme = { headFontFace: "Arial", bodyFontFace: "Arial" };

  defineMasters(p);
  const ctx = makeCtx(p);
  const sections = ["b1_opening", "s2_ulusoy", "s3_platform", "c4_plan", "c5_mou"];
  ["b1_opening:2"].forEach(k => ctx.drop.add(k));
  for (const m of sections) {
    if (!fs.existsSync(__dirname + "/" + m + ".js")) { console.log("skip", m); continue; }
    ctx.mod = m; ctx.local = 0;
    await require("./" + m)(ctx);
    console.log(m, "-> slides so far", ctx.n);
  }
  await p.writeFile({ fileName: OUT });
  console.log("wrote", OUT, ctx.n, "slides");
})().catch(e => { console.error(e); process.exit(1); });
