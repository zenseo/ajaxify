all | (t, fn) $this.each(function() { t = t.split("*").join("$(this)"); t += ";"; eval(t); })
log | con = window.console | { verbosity: 0 } | (m) l < verbosity && con && con.log(m)
isHtml | (x) d=x.getResponseHeader("Content-Type"); r=d&&(d.indexOf("text/html")+1||d.indexOf("text/xml")+1)
replD | (h) r=String(h).replace(docType, "").replace(tagso, div12).replace(tagsc,"</div>")
_parseHTML | (h) r=$.trim($.replD(h)
pages | (h) string : for(var i=0; i<d.length; i++) if(d[i][0]==h) r=d[i][1]; object : d.push(h);
