const {chromium}=require('playwright');
(async()=>{const [,,src,out,label]=process.argv;const b=await chromium.launch();const p=await b.newPage();await p.goto('file://'+src);
await p.pdf({path:out,format:'A4',printBackground:true,displayHeaderFooter:true,headerTemplate:'<span></span>',
footerTemplate:`<div style="font-size:8px;color:#5B6B7C;width:100%;text-align:center;font-family:Arial">${label} · <span class=pageNumber></span> / <span class=totalPages></span></div>`,
margin:{top:'18mm',bottom:'18mm',left:'18mm',right:'18mm'}});await b.close();})();
