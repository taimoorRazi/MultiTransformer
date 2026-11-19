# -*- coding: utf-8 -*-
"""Builds the bilingual (EN | ZH) Ulusoy Robotics x CRRC Wind MOU as DOCX and PDF."""
import html, os, subprocess, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from mou_content import TITLE, SUBTITLE, PARTIES, RECITALS, CLAUSES, SIGN, SIGN_LINES, WITNESS
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.oxml.ns import qn
from docx.oxml import OxmlElement
from docx.enum.text import WD_ALIGN_PARAGRAPH

OUT = "/home/user/MultiTransformer/CRRC_Partnership/mou/"
S = "/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad/mou/"
NAME = "Ulusoy Robotics - CRRC Wind - MOU (EN + ZH)"
DRAFT = ("DRAFT FOR DISCUSSION", "讨论稿")
NAVY, BLUE, MUTED = "0F2B45", "1C6EA8", "5B6B7C"
os.makedirs(OUT, exist_ok=True); os.makedirs(S, exist_ok=True)


# ---------------------------------------------------------------- DOCX
def font(run, size=9.5, bold=False, color=None, italic=False):
    run.font.size = Pt(size); run.bold = bold; run.italic = italic; run.font.name = "Arial"
    rpr = run._element.get_or_add_rPr(); rf = rpr.find(qn("w:rFonts"))
    if rf is None:
        rf = OxmlElement("w:rFonts"); rpr.append(rf)
    rf.set(qn("w:eastAsia"), "Microsoft YaHei")
    if color: run.font.color.rgb = RGBColor.from_string(color)

def para(container, text, size=9.5, bold=False, color=None, align=None, after=4, before=0, italic=False):
    p = container.add_paragraph() if hasattr(container, "add_paragraph") else container
    for i, line in enumerate(text.split("\n")):
        r = p.add_run(line); font(r, size, bold, color, italic)
        if i < len(text.split("\n")) - 1: r.add_break()
    pf = p.paragraph_format; pf.space_after = Pt(after); pf.space_before = Pt(before); pf.line_spacing = 1.15
    if align is not None: p.alignment = align
    return p

def no_borders(tbl):
    tblPr = tbl._tbl.tblPr; b = OxmlElement("w:tblBorders")
    for e in ("top", "left", "bottom", "right", "insideH", "insideV"):
        x = OxmlElement(f"w:{e}"); x.set(qn("w:val"), "nil"); b.append(x)
    tblPr.append(b)

def two_col(doc, rows, head=None):
    """rows: list of (en, zh); head: optional (en, zh) clause heading."""
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
    return t

def build_docx():
    doc = Document()
    for sec in doc.sections:
        sec.page_width, sec.page_height = Cm(21), Cm(29.7)
        sec.left_margin = sec.right_margin = Cm(1.8); sec.top_margin = Cm(1.6); sec.bottom_margin = Cm(1.6)
        fp = sec.footer.paragraphs[0]; fp.alignment = WD_ALIGN_PARAGRAPH.CENTER
        r = fp.add_run("Ulusoy Robotics × CRRC Wind — Memorandum of Understanding · " + DRAFT[0] + " / " + DRAFT[1]); font(r, 7.5, color=MUTED)
    para(doc, DRAFT[0] + "  ·  " + DRAFT[1], 8.5, True, "C8102E", WD_ALIGN_PARAGRAPH.RIGHT, after=8)
    para(doc, TITLE[0], 16, True, NAVY, WD_ALIGN_PARAGRAPH.CENTER, after=2)
    para(doc, TITLE[1], 15, True, NAVY, WD_ALIGN_PARAGRAPH.CENTER, after=4)
    para(doc, SUBTITLE[0], 10.5, False, BLUE, WD_ALIGN_PARAGRAPH.CENTER, after=2)
    para(doc, SUBTITLE[1], 10.5, False, BLUE, WD_ALIGN_PARAGRAPH.CENTER, after=12)
    two_col(doc, PARTIES, ("Parties", "协议双方"))
    two_col(doc, RECITALS, ("Background", "鉴于"))
    for h_en, h_zh, rows in CLAUSES:
        two_col(doc, rows, (h_en, h_zh))
    two_col(doc, [WITNESS])
    t = doc.add_table(rows=1, cols=2); no_borders(t)
    for j, (en, zh) in enumerate(SIGN):
        c = t.rows[0].cells[j]; c.width = Cm(8.6); c.paragraphs[0].text = ""
        para(c.paragraphs[0], en, 9.5, True, NAVY, before=10, after=0)
        para(c, zh, 9.5, True, NAVY, after=10)
        for l_en, l_zh in SIGN_LINES:
            para(c, f"{l_en} / {l_zh}:", 8.5, color=MUTED, after=0, before=8)
            para(c, "_______________________________", 9.5, after=2)
    doc.save(OUT + NAME + ".docx")


# ---------------------------------------------------------------- PDF (HTML -> Chromium)
CSS = """@page{size:A4;margin:15mm 16mm 16mm 16mm}
body{font-family:"Liberation Sans",Arial,"Microsoft YaHei","WenQuanYi Zen Hei",sans-serif;color:#16293C;font-size:8.9pt;line-height:1.45}
.draft{text-align:right;color:#C8102E;font-weight:bold;font-size:8pt;letter-spacing:1pt}
h1{text-align:center;color:#0F2B45;font-size:16pt;letter-spacing:2pt;margin:6pt 0 0}
h1.zh{font-size:15pt;letter-spacing:3pt;margin:2pt 0 4pt}
.sub{text-align:center;color:#1C6EA8;font-size:10pt;margin:0 0 3pt;white-space:pre-line}
.rule{border-top:1.5px solid #1C6EA8;margin:10pt 0 6pt}
.row{display:grid;grid-template-columns:1fr 1fr;column-gap:16pt;break-inside:avoid}
.row p{margin:0 0 5pt;text-align:justify}.row .zh{font-family:"Microsoft YaHei","WenQuanYi Zen Hei",sans-serif;font-size:9.1pt;line-height:1.6}
.h{color:#1C6EA8;font-weight:bold;font-size:9.8pt;margin:9pt 0 3pt;break-after:avoid}
.sig{display:grid;grid-template-columns:1fr 1fr;column-gap:16pt;margin-top:14pt;break-inside:avoid}
.sig b{color:#0F2B45;display:block}.sl{color:#5B6B7C;font-size:8pt;margin-top:11pt}.ln{border-bottom:1px solid #16293C;height:16pt}"""

def row(en, zh, cls=""):
    return f"<div class='row {cls}'><p>{html.escape(en)}</p><p class='zh'>{html.escape(zh)}</p></div>"

def head(en, zh):
    return f"<div class='row'><div class='h'>{html.escape(en)}</div><div class='h zh'>{html.escape(zh)}</div></div>"

def build_pdf():
    b = [f"<div class='draft'>{DRAFT[0]} · {DRAFT[1]}</div>", f"<h1>{TITLE[0]}</h1><h1 class='zh'>{TITLE[1]}</h1>",
         f"<div class='sub'>{html.escape(SUBTITLE[0])}</div><div class='sub'>{SUBTITLE[1]}</div><div class='rule'></div>",
         head("Parties", "协议双方")] + [row(*r) for r in PARTIES] + [head("Background", "鉴于")] + [row(*r) for r in RECITALS]
    for h_en, h_zh, rows in CLAUSES:
        b.append(f"<div style='break-inside:avoid'>{head(h_en, h_zh)}{row(*rows[0])}</div>")
        b += [row(*r) for r in rows[1:]]
    b.append(row(*WITNESS))
    sig = "<div class='sig'>"
    for en, zh in SIGN:
        sig += f"<div><b>{html.escape(en)}</b><b>{zh}</b>" + "".join(f"<div class='sl'>{a} / {z}</div><div class='ln'></div>" for a, z in SIGN_LINES) + "</div>"
    b.append(sig + "</div>")
    hp = S + "mou.html"
    open(hp, "w").write(f"<!doctype html><html><head><meta charset='utf-8'><style>{CSS}</style></head><body>{''.join(b)}</body></html>")
    pdf = OUT + NAME + ".pdf"
    foot = "Ulusoy Robotics × CRRC Wind — MOU · Draft for discussion · <span class=pageNumber></span> / <span class=totalPages></span>"
    subprocess.run(["node", "-e", f"""const {{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://{hp}');await p.pdf({{path:{pdf!r},format:'A4',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,headerTemplate:'<span></span>',
footerTemplate:`<div style="font-size:7px;color:#5B6B7C;width:100%;text-align:center;font-family:Arial">{foot}</div>`}});await b.close();}})()"""], check=True)


if __name__ == "__main__":
    build_docx(); build_pdf(); print("ok")
