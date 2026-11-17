import re, json
t=open('/home/user/MultiTransformer/CRRC_Partnership/CRRC_Speaker_Notes.md').read().split('\n## Appendix')[0]
parts=re.split(r'\n## Slide (\d+) — ', t)
def field(body,name):
    m=re.search(r'\*\*'+re.escape(name)+r':\*\*\s*(.*?)(?=\n\*\*[A-Z][^*]*:\*\*|\n---|\Z)', body, re.S)
    return m.group(1).strip() if m else ''
notes={}
for i in range(1,len(parts),2):
    n=parts[i]; body=parts[i+1]; title=body.split('\n')[0].strip()
    out=[f"SLIDE {n} — {title}"]
    for lab,f in [("MAIN MESSAGE","Main message"),("SCRIPT","Script"),("EMPHASISE","Emphasise"),("TRANSITION","Transition")]:
        v=field(body,f)
        if v: out.append(f"{lab}: {v}")
    q=field(body,'Likely CRRC question'); a=field(body,'Suggested response')
    if q: out.append("LIKELY QUESTION: "+q+("\nRESPONSE: "+a if a else ''))
    notes[n]=re.sub(r'\*\*','','\n\n'.join(out))
json.dump(notes,open('/tmp/claude-0/-home-user-MultiTransformer/781dfe07-793a-5a60-ad45-b2b15a87b96b/scratchpad/crrc/build/notes.json','w'),ensure_ascii=False,indent=1)
print(len(notes))
