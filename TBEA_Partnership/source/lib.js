// Shared design system + helpers for the Ulusoy × TBEA deck
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const lu = require("react-icons/lu");

const ROOT = "/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad/";
const A = ROOT + "assets/";

// ---- Ulusoy design DNA (taken from the corporate deck) + TBEA blue for partnership sections
const C = {
  NAVY: "0F2B45", INK: "16293C", BLUE: "1C6EA8", MUTED: "5B6B7C", PALE: "F2F6FA", ICE: "D9E7F4",
  MID: "AEC6DB", DEEP: "1B3D5F", WHITE: "FFFFFF", TB: "0A4FA3", TBL: "E6EEF9", AMBER: "D9892B", AMBERL: "FBF1E4",
  GREEN: "2E8B57", LINE: "C9D6E3",
};
const W = 13.333, H = 7.5, MX = 0.6;
const FONT = "Arial";

const dims = {};
async function loadDims() {
  for (const f of fs.readdirSync(A)) {
    if (!/\.(png|jpe?g)$/i.test(f)) continue;
    const m = await sharp(A + f).metadata();
    dims[f] = [m.width, m.height];
  }
}

const iconCache = {};
async function icon(name, color = C.BLUE, px = 256) {
  const key = `${name}_${color}_${px}`;
  if (iconCache[key]) return iconCache[key];
  const Comp = lu[name];
  if (!Comp) throw new Error("missing icon " + name);
  const svg = ReactDOMServer.renderToStaticMarkup(React.createElement(Comp, { size: px, color: "#" + color, strokeWidth: 1.75 }));
  const buf = await sharp(Buffer.from(svg)).resize(px, px).png().toBuffer();
  iconCache[key] = "image/png;base64," + buf.toString("base64");
  return iconCache[key];
}

// text box with sane defaults
function T(slide, text, o = {}) {
  const opts = Object.assign({ fontFace: FONT, color: C.INK, fontSize: 14, margin: 0, valign: "top", isTextBox: true, paraSpaceAfter: 0 }, o);
  slide.addText(text, opts);
}

function rect(slide, x, y, w, h, fill, o = {}) {
  slide.addShape(o.rounded ? "roundRect" : "rect", Object.assign({ x, y, w, h, fill: { color: fill }, line: { color: fill, width: 0 } },
    o.rounded ? { rectRadius: o.r || 0.08 } : {}, o.line ? { line: o.line } : {}, o.shadow ? { shadow: { type: "outer", color: "8FA3B8", opacity: 0.25, blur: 8, offset: 2, angle: 90 } } : {},
    o.transparency !== undefined ? { fill: { color: fill, transparency: o.transparency } } : {}));
}

function circle(slide, x, y, d, fill, o = {}) {
  slide.addShape("ellipse", { x, y, w: d, h: d, fill: { color: fill }, line: o.line || { color: fill, width: 0 } });
}

function line(slide, x1, y1, x2, y2, color = C.LINE, w = 1, o = {}) {
  slide.addShape("line", Object.assign({ x: Math.min(x1, x2), y: Math.min(y1, y2), w: Math.abs(x2 - x1) || 0.0001, h: Math.abs(y2 - y1) || 0.0001,
    line: { color, width: w, dashType: o.dash || "solid", beginArrowType: o.begin, endArrowType: o.end }, flipH: x2 < x1, flipV: y2 < y1 }));
}

// image with "cover" crop into box
function src(file) {
  const opt = A + "opt/" + file.replace(/\.(png|jpe?g)$/i, ".jpg");
  return fs.existsSync(opt) ? opt : A + file;
}
function img(slide, file, x, y, w, h, o = {}) {
  const d = dims[file];
  if (!d) throw new Error("no dims for " + file);
  const [iw, ih] = d;
  if (o.contain) {
    const s = Math.min(w / iw, h / ih); const nw = iw * s, nh = ih * s;
    slide.addImage({ path: src(file), x: x + (w - nw) / 2, y: y + (h - nh) / 2, w: nw, h: nh, altText: o.alt || file });
    return;
  }
  // cover: compute crop in source pixels -> use pptxgenjs crop sizing
  const boxR = w / h, imgR = iw / ih;
  let cw, ch;
  if (imgR > boxR) { ch = ih; cw = ih * boxR; } else { cw = iw; ch = iw / boxR; }
  const fx = o.fx !== undefined ? o.fx : 0.5, fy = o.fy !== undefined ? o.fy : 0.5;
  const cx = (iw - cw) * fx, cy = (ih - ch) * fy;
  // pptxgenjs 'crop' sizing: w/h of image given in inches representing full image; sizing x,y,w,h = crop window in same units
  const scale = w / cw; // inches per px
  slide.addImage({ path: src(file), x, y, w: iw * scale, h: ih * scale,
    sizing: { type: "crop", x: cx * scale, y: cy * scale, w, h }, altText: o.alt || file });
}

module.exports = { C, W, H, MX, FONT, A, ROOT, dims, loadDims, icon, T, rect, circle, line, img };
