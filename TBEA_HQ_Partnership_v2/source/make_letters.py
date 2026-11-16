# -*- coding: utf-8 -*-
import base64, html, os, subprocess, sys
sys.path.insert(0, os.path.dirname(__file__))
from letters_content import L, OFFER
from docx import Document
from docx.shared import Pt, Cm, RGBColor
from docx.oxml.ns import qn
from docx.enum.text import WD_BREAK

S = "/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad/"
OUT = "/home/user/MultiTransformer/TBEA_HQ_Partnership_v2/letters/"
os.makedirs(OUT, exist_ok=True); os.makedirs(S + "letters/html", exist_ok=True); os.makedirs(S + "letters/pdf", exist_ok=True)
LOGO = S + "assets/ul_logo_blue.png"
logo_b64 = base64.b64encode(open(LOGO, "rb").read()).decode()
ORIG_OFFER = "/root/.claude/uploads/781dfe07-793a-5a60-ad45-b2b15a87b96b/73de1c02-_pdf.pdf"

TXT = {"en": {"date": "November 2026", "to": "To: TBEA Electrical Equipment Group Co., Ltd.", "subj": "Subject:", "close": "Yours faithfully,", "sig": "Ulusoy Group", "place": "İstanbul, Türkiye", "att": "Attachment: project presentation"},
       "zh": {"date": "2026年11月", "to": "致：特变电工（TBEA）", "subj": "主题：", "close": "此致<br>敬礼", "sig": "Ulusoy 集团", "place": "土耳其 伊斯坦布尔", "att": "附件：项目演示文件"}}

CSS = """@page{size:A4;margin:15mm 18mm 14mm 18mm}
body{font-family:"Liberation Sans",Arial,"Microsoft YaHei","WenQuanYi Zen Hei",sans-serif;color:#16293C;font-size:10pt;line-height:1.42}
body.zh{font-family:"Microsoft YaHei","WenQuanYi Zen Hei","Liberation Sans",sans-serif;font-size:10pt;line-height:1.6}
.lh{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:1.5px solid #1C6EA8;padding-bottom:7pt;margin-bottom:12pt}
.lh img{height:26pt}.lh .r{text-align:right;font-size:9pt;color:#5B6B7C;line-height:1.35}.lh .r b{color:#0F2B45;letter-spacing:1.5pt}
.meta{color:#5B6B7C;margin:0 0 2pt}.subj{font-weight:bold;color:#0F2B45;margin:10pt 0 12pt}
h3{font-size:10pt;color:#1C6EA8;margin:8pt 0 2pt;break-after:avoid}.keep{break-inside:avoid}p{margin:0 0 6pt;text-align:justify}
table{border-collapse:collapse;width:100%;margin:2pt 0 8pt;font-size:9.3pt;break-inside:avoid}th{background:#D9E7F4;color:#0F2B45;text-align:left;padding:3pt 6pt}
td{border-bottom:1px solid #E1E9F2;padding:3pt 6pt}ul{margin:0 0 8pt;padding-left:15pt}li{margin:0 0 3pt}
.sig{margin-top:10pt}.line{width:55mm;border-bottom:1px solid #16293C;height:24pt;margin:4pt 0 3pt}
.note{background:#F2F6FA;border-left:0;padding:6pt 9pt;color:#1B3D5F;font-size:9pt;margin-bottom:12pt;border-radius:3pt}
.title{text-align:center;font-weight:bold;font-size:14pt;letter-spacing:2pt;margin:10pt 0 10pt;color:#0F2B45}.small{font-size:8.5pt;color:#5B6B7C}"""

def blocks_html(blocks):
    out = []
    for kind, val in blocks:
        if kind == "p": out.append(f"<p>{val if '<br>' in val else html.escape(val)}</p>")
        elif kind == "h": out.append(f"<h3>{html.escape(val)}</h3>")
        elif kind == "ul": out.append("<ul>" + "".join(f"<li>{html.escape(i)}</li>" for i in val) + "</ul>")
        elif kind == "table":
            hdr, *rows = val
            out.append("<table><tr>" + "".join(f"<th>{html.escape(c)}</th>" for c in hdr) + "</tr>" + "".join("<tr>" + "".join(f"<td>{html.escape(c)}</td>" for c in r) + "</tr>" for r in rows) + "</table>")
        elif kind == "meta": out.append(f"<p class='meta small'>{html.escape(val)}</p>")
        elif kind == "title": out.append(f"<div class='title'>{html.escape(val)}</div>")
    return "\n".join(out)

def letter_html(lang, d):
    t = TXT[lang]
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body class="{lang}">
<div class="lh"><img src="data:image/png;base64,{logo_b64}"><div class="r"><b>ULUSOY GROUP</b><br>{t['place']}</div></div>
<p class="meta">{t['date']}</p><p class="meta">{t['to']}</p>
<p class="subj">{t['subj']} {html.escape(d['subject'])}</p>
{blocks_html(d['blocks'][:-2])}
<div class="keep">{blocks_html(d['blocks'][-2:])}
<div class="sig">{t['close']}<div class="line"></div><b>{t['sig']}</b></div>
<p class="small" style="margin-top:10pt">{t['att']}</p></div></body></html>"""

def offer_html(lang, d):
    return f"""<!doctype html><html><head><meta charset="utf-8"><style>{CSS}</style></head><body class="{lang}">
<div class="note">{html.escape(d['note'])}</div>{blocks_html(d['blocks'])}</body></html>"""

def to_pdf(h, name):
    hp = S + "letters/html/" + name + ".html"; pp = S + "letters/pdf/" + name + ".pdf"
    open(hp, "w").write(h)
    subprocess.run(["node", "-e", f"""const {{chromium}}=require('playwright');(async()=>{{const b=await chromium.launch();const p=await b.newPage();
await p.goto('file://{hp}');await p.pdf({{path:'{pp}',format:'A4',printBackground:true,preferCSSPageSize:true}});await b.close();}})()"""], check=True)
    return pp

# ---------------- DOCX
def set_font(run, lang, size=10.5, bold=False, color=None):
    run.font.size = Pt(size); run.bold = bold
    run.font.name = "Arial"; rpr = run._element.get_or_add_rPr()
    rf = rpr.find(qn("w:rFonts"))
    if rf is None:
        rf = rpr.makeelement(qn("w:rFonts"), {}); rpr.append(rf)
    rf.set(qn("w:eastAsia"), "Microsoft YaHei")
    if color: run.font.color.rgb = RGBColor.from_string(color)

def add_blocks_docx(doc, lang, blocks):
    for kind, val in blocks:
        if kind in ("p", "meta"):
            for i, part in enumerate(val.split("<br>")):
                p = doc.add_paragraph(); r = p.add_run(part); set_font(r, lang, 9 if kind == "meta" else 10.5, color="5B6B7C" if kind == "meta" else None)
                p.paragraph_format.space_after = Pt(0 if (kind == "p" and "<br>" in val and i == 0) else 6)
        elif kind == "h":
            p = doc.add_paragraph(); r = p.add_run(val); set_font(r, lang, 10.5, True, "1C6EA8"); p.paragraph_format.space_before = Pt(6); p.paragraph_format.space_after = Pt(2)
        elif kind == "title":
            p = doc.add_paragraph(); p.alignment = 1; r = p.add_run(val); set_font(r, lang, 14, True, "0F2B45")
        elif kind == "ul":
            for item in val:
                p = doc.add_paragraph(style="List Bullet"); r = p.add_run(item); set_font(r, lang)
        elif kind == "table":
            hdr, *rows = val
            tb = doc.add_table(rows=1 + len(rows), cols=len(hdr)); tb.style = "Light Grid Accent 1"
            for j, c in enumerate(hdr):
                cell = tb.rows[0].cells[j]; cell.text = ""; r = cell.paragraphs[0].add_run(c); set_font(r, lang, 9.5, True)
            for i, row in enumerate(rows, 1):
                for j, c in enumerate(row):
                    cell = tb.rows[i].cells[j]; cell.text = ""; r = cell.paragraphs[0].add_run(c); set_font(r, lang, 9.5)
            doc.add_paragraph()

def letter_docx(doc, lang, d, first):
    t = TXT[lang]
    if not first:
        doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)
    p = doc.add_paragraph(); p.add_run().add_picture(LOGO, height=Cm(0.95))
    r = p.add_run("\tULUSOY GROUP · " + t["place"]); set_font(r, lang, 9, True, "0F2B45")
    for line in (t["date"], t["to"]):
        q = doc.add_paragraph(); rr = q.add_run(line); set_font(rr, lang, 10, color="5B6B7C"); q.paragraph_format.space_after = Pt(0)
    q = doc.add_paragraph(); rr = q.add_run(f"{t['subj']} {d['subject']}"); set_font(rr, lang, 10.5, True, "0F2B45"); q.paragraph_format.space_before = Pt(8)
    add_blocks_docx(doc, lang, d["blocks"])
    for part in t["close"].split("<br>"):
        q = doc.add_paragraph(); rr = q.add_run(part); set_font(rr, lang); q.paragraph_format.space_after = Pt(0)
    q = doc.add_paragraph("\n\n______________________________")
    q = doc.add_paragraph(); rr = q.add_run(t["sig"]); set_font(rr, lang, 10.5, True)
    q = doc.add_paragraph(); rr = q.add_run(t["att"]); set_font(rr, lang, 8.5, color="5B6B7C")

def new_doc():
    doc = Document()
    for sec in doc.sections:
        sec.page_width, sec.page_height = Cm(21), Cm(29.7)
        sec.left_margin = sec.right_margin = Cm(2); sec.top_margin = Cm(2); sec.bottom_margin = Cm(1.8)
    return doc

pdfs = {}
for key in ("bg", "nm", "me"):
    d = L[key]
    doc = new_doc()
    for i, lang in enumerate(("en", "zh")):
        pdfs[(key, lang)] = to_pdf(letter_html(lang, d[lang]), f"{d['file']} ({lang.upper()})")
        letter_docx(doc, lang, d[lang], i == 0)
    doc.save(OUT + f"{d['file']} - Letter (EN + ZH).docx")

doc = new_doc()
for i, lang in enumerate(("en", "zh")):
    pdfs[("offer", lang)] = to_pdf(offer_html(lang, OFFER[lang]), f"1a - Offtake Offer Translation ({lang.upper()})")
    if i: doc.add_paragraph().add_run().add_break(WD_BREAK.PAGE)
    q = doc.add_paragraph(); rr = q.add_run(OFFER[lang]["note"]); set_font(rr, lang, 9, color="1B3D5F")
    add_blocks_docx(doc, lang, OFFER[lang]["blocks"])
doc.save(OUT + "1a - Offtake Offer Translation (EN + ZH).docx")

order = [pdfs[("bg", "en")], pdfs[("bg", "zh")], pdfs[("offer", "en")], pdfs[("offer", "zh")], ORIG_OFFER,
         pdfs[("nm", "en")], pdfs[("nm", "zh")], pdfs[("me", "en")], pdfs[("me", "zh")]]
subprocess.run(["pdfunite", *order, OUT + "Ulusoy - TBEA Project Letters - Print Pack.pdf"], check=True)
for (k, lang), p in pdfs.items():
    print(k, lang, subprocess.run(["pdfinfo", p], capture_output=True, text=True).stdout.split("Pages:")[1].split()[0], "pages")
print(sorted(os.listdir(OUT)))
