# -*- coding: utf-8 -*-
"""Builds the four bilingual (EN | ZH) Ulusoy MOUs as DOCX and PDF."""
import html, os, subprocess, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mou_templates import build, COMPANIES
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.enum.text import WD_ALIGN_PARAGRAPH

OUT = "/home/user/MultiTransformer/MOUs/"
S = "/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad/mous/"
DRAFT = ("DRAFT FOR DISCUSSION", "讨论稿")
NAVY, BLUE, MUTED = "0F2B45", "1C6EA8", "5B6B7C"
SIGN_LINES = [("Signature", "签字"), ("Name", "姓名"), ("Title", "职务"), ("Date", "日期"), ("Company seal", "公司盖章")]
WITNESS = ("IN WITNESS WHEREOF, the Parties have signed this MOU by their duly authorised representatives on the date first written above.",
           "兹此为证，双方已由其正式授权代表于文首所载日期签署本备忘录。")
os.makedirs(OUT, exist_ok=True); os.makedirs(S, exist_ok=True)


def font(run, size=9.5, bold=False, color=None, italic=False):
    run.font.size = Pt(size); run.bold = bold; run.italic = italic; run.font.name = "Arial"
    rpr = run._element.get_or_add_rPr(); rf = rpr.find(qn("w:rFonts"))
    if rf is None:
        rf = OxmlElement("w:rFonts"); rpr.append(rf)
    rf.set(qn("w:eastAsia"), "Microsoft YaHei")
    if color: run.font.color.rgb = RGBColor.from_string(color)

def para(container, text, size=9.5, bold=False, color=None, align=None, after=4, before=0):
    p = container.add_paragraph() if hasattr(container, "add_paragraph") else container
    lines = text.split("\n")
    for i, line in enumerate(lines):
        r = p.add_run(line); font(r, size, bold, color)
        if i < len(lines) - 1: r.add_break()
    pf = p.paragraph_format; pf.space_after = Pt(after); pf.space_before = Pt(before); pf.line_spacing = 1.15
    if align is not None: p.alignment = align
    return p

def no_borders(tbl):
    b = OxmlElement("w:tblBorders")
    for e in ("top", "left", "bottom", "right", "insideH", "insideV"):
        x = OxmlElement(f"w:{e}"); x.set(qn("w:val"), "nil"); b.append(x)
    tbl._tbl.tblPr.append(b)

def two_col(doc, rows, head=None):
    t = doc.add_table(rows=0, cols=2); no_borders(t); t.autofit = False
    if head:
        c = t.add_row().cells
        for j, txt in enumerate(head):
            c[j].width = Cm(8.6); c[j].paragraphs[0].text = ""
            para(c[j].paragraphs[0], txt, 10, True, BLUE, before=6, after=2)
    for en, zh in rows:
        c = t.add_row().cells
        for j, txt in enumerate((en, zh)):
            c[j].width = Cm(8.6); c[j].paragraphs[0].text = ""
            para(c[j].paragraphs[0], txt, 9.2 if j == 0 else 9.4, after=4, align=WD_ALIGN_PARAGRAPH.JUSTIFY)

def build_docx(d):
    doc = Document()
    for sec in doc.sections:
        sec.page_width, sec.page_height = Cm(21), Cm(29.7)
        sec.left_margin = sec.right_margin = Cm(1.8); sec.top_margin = Cm(1.6); sec.bottom_margin = Cm(1.6)
        fp = sec.footer.paragraphs[0]; fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r = fp.add_run(f"{d['short']} × Ulusoy — Memorandum of Understanding · {DRAFT[0]} / {DRAFT[1]}"); font(r, 7.5, color=MUTED)
    para(doc, DRAFT[0] + "  ·  " + DRAFT[1], 8.5, True, "C8102E", WD_ALIGN_PARAGRAPH.RIGHT, after=8)
    para(doc, d["title"][0], 16, True, NAVY, WD_ALIGN_PARAGRAPH.CENTER, after=2)
    para(doc, d["title"][1], 15, True, NAVY, WD_ALIGN_PARAGRAPH.CENTER, after=4)
    para(doc, d["subtitle"][0], 10.5, False, BLUE, WD_ALIGN_PARAGRAPH.CENTER, after=2)
    para(doc, d["subtitle"][1], 10.5, False, BLUE, WD_ALIGN_PARAGRAPH.CENTER, after=12)
    two_col(doc, d["parties"], ("Parties", "协议双方"))
    two_col(doc, d["recitals"], ("Background", "鉴于"))
    for h_en, h_zh, rows in d["clauses"]:
        two_col(doc, rows, (h_en, h_zh))
    two_col(doc, [WITNESS])
    t = doc.add_table(rows=1, cols=2); no_borders(t)
    for j, (en, zh) in enumerate(d["sign"]):
        c = t.rows[0].cells[j]; c.width = Cm(8.6); c.paragraphs[0].text = ""
        para(c.paragraphs[0], en, 9.5, True, NAVY, before=10, after=0)
        para(c, zh, 9.5, True, NAVY, after=10)
        for l_en, l_zh in SIGN_LINES:
            para(c, f"{l_en} / {l_zh}:", 8.5, color=MUTED, after=0, before=8)
            para(c, "_______________________________", 9.5, after=2)
    two_col(doc, d["annex"][1:], d["annex"][0])
    two_col(doc, d["annex_b"][1:], d["annex_b"][0])
    doc.save(OUT + d["file"] + ".docx")


CSS = """@page{size:A4;margin:15mm 16mm 16mm 16mm}
body{font-family:"Liberation Sans",Arial,"Microsoft YaHei","WenQuanYi Zen Hei",sans-serif;color:#16293C;font-size:8.8pt;line-height:1.45}
.draft{text-align:right;color:#C8102E;font-weight:bold;font-size:8pt;letter-spacing:1pt}
h1{text-align:center;color:#0F2B45;font-size:16pt;letter-spacing:2pt;margin:6pt 0 0}
h1.zh{font-size:15pt;letter-spacing:3pt;margin:2pt 0 4pt}
.sub{text-align:center;color:#1C6EA8;font-size:10pt;margin:0 0 3pt;white-space:pre-line}
.rule{border-top:1.5px solid #1C6EA8;margin:10pt 0 6pt}
.row{display:grid;grid-template-columns:1fr 1fr;column-gap:16pt;break-inside:avoid}
.row p{margin:0 0 5pt;text-align:justify}.row .zh{font-family:"Microsoft YaHei","WenQuanYi Zen Hei",sans-serif;font-size:9pt;line-height:1.6}
.h{color:#1C6EA8;font-weight:bold;font-size:9.8pt;margin:9pt 0 3pt;break-after:avoid}
.sig{display:grid;grid-template-columns:1fr 1fr;column-gap:16pt;margin-top:14pt;break-inside:avoid}
.sig b{color:#0F2B45;display:block}.sl{color:#5B6B7C;font-size:8pt;margin-top:11pt}.ln{border-bottom:1px solid #16293C;height:16pt}
.annex{margin-top:14pt;border-top:1px solid #D9E7F4;padding-top:6pt}"""

def row(en, zh):
    return f"<div class='row'><p>{html.escape(en)}</p><p class='zh'>{html.escape(zh)}</p></div>"

def head(en, zh):
    return f"<div class='row'><div class='h'>{html.escape(en)}</div><div class='h zh'>{html.escape(zh)}</div></div>"

def build_pdf(d):
    b = [f"<div class='draft'>{DRAFT[0]} · {DRAFT[1]}</div>", f"<h1>{d['title'][0]}</h1><h1 class='zh'>{d['title'][1]}</h1>",
         f"<div class='sub'>{html.escape(d['subtitle'][0])}</div><div class='sub'>{d['subtitle'][1]}</div><div class='rule'></div>",
         head("Parties", "协议双方")] + [row(*r) for r in d["parties"]] + [head("Background", "鉴于")] + [row(*r) for r in d["recitals"]]
    for h_en, h_zh, rows in d["clauses"]:
        b.append(f"<div style='break-inside:avoid'>{head(h_en, h_zh)}{row(*rows[0])}</div>")
        b += [row(*r) for r in rows[1:]]
    b.append(row(*WITNESS))
    sig = "<div class='sig'>"
    for en, zh in d["sign"]:
        sig += f"<div><b>{html.escape(en)}</b><b>{zh}</b>" + "".join(f"<div class='sl'>{a} / {z}</div><div class='ln'></div>" for a, z in SIGN_LINES) + "</div>"
    b.append(sig + "</div>")
    b.append("<div class='annex'>" + head(*d["annex"][0]) + "".join(row(*r) for r in d["annex"][1:]) + head(*d["annex_b"][0]) + "".join(row(*r) for r in d["annex_b"][1:]) + "</div>")
    hp = S + d["short"] + ".html"
    open(hp, "w").write(f"<!doctype html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{''.join(b)}</body></html>")
    pdf = OUT + d["file"] + ".pdf"
    foot = f"{d['short']} × Ulusoy — MOU · Draft for discussion · <span class=pageNumber></span> / <span class=totalPages></span>"
    subprocess.run(["node", "-e", f"""const {{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://{hp}');await p.pdf({{path:{pdf!r},format:'A4',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,headerTemplate:'<span></span>',
footerTemplate:`<div style="font-size:7px;color:#5B6B7C;width:100%;text-align:center;font-family:Arial">{foot}</div>`}});await b.close();}})()"""], check=True)


if __name__ == "__main__":
    for k in COMPANIES:
        d = build(k); build_docx(d); build_pdf(d); print("built", d["file"])
