import re, html
t=open('/home/user/MultiTransformer/AILU_Partnership/AILU_Speaker_Notes.md').read().split('\n## Appendix')[0]
parts=re.split(r'\n## Slide (\d+) — ', t)
def field(body,name):
    m=re.search(r'\*\*'+re.escape(name)+r':\*\*\s*(.*?)(?=\n\*\*[A-Z][^*]*:\*\*|\n---|\Z)', body, re.S)
    return m.group(1).strip() if m else ''
def clean(s): return html.escape(re.sub(r'\s+',' ',s.strip()).replace('"',''))
blocks=[]
for i in range(1,len(parts),2):
    n=parts[i]; body=parts[i+1]; title=body.split('\n')[0].strip()
    sc=field(body,'Script'); tr=field(body,'Transition')
    if tr.lower().startswith('go straight'): tr=''
    p=''.join(f'<p>{clean(x)}</p>' for x in re.split(r'\n\s*\n',sc) if x.strip())
    if tr: p+=f'<p class="tr">→ {clean(tr)}</p>'
    blocks.append(f'<section><div class="hd"><span class="n">{n}</span><span class="t">{html.escape(title)}</span></div>{p}</section>')
css='''@page{size:A4;margin:18mm}body{font-family:"Liberation Sans",Arial,sans-serif;color:#16293C;font-size:12.5pt;line-height:1.55}
h1{font-size:22pt;margin:0 0 4pt;color:#0F2B45}.sub{color:#5B6B7C;font-size:11pt;margin-bottom:18pt;border-bottom:1px solid #D9E7F4;padding-bottom:10pt}
section{page-break-inside:avoid;margin:0 0 16pt;padding:0 0 12pt;border-bottom:1px solid #E6EEF6}.hd{display:flex;align-items:baseline;gap:10pt;margin-bottom:5pt}
.n{background:#0F2B45;color:#fff;font-weight:bold;font-size:10.5pt;border-radius:10pt;padding:1pt 8pt;min-width:16pt;text-align:center}.t{font-weight:bold;font-size:13pt;color:#1C6EA8}
p{margin:0 0 6pt}.tr{color:#5B6B7C;font-style:italic}'''
open('/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad/ailu/rehearsal.html','w').write(f'<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head><body><h1>AILU × Ulusoy — Rehearsal Script</h1><div class="sub">Spoken script only, slide by slide ({len(blocks)} slides). Grey italic lines are the transitions to the next slide. Speak slowly; pause after every number.</div>{"".join(blocks)}</body></html>')
print(len(blocks))
