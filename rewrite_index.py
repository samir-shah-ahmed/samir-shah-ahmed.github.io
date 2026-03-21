import re

with open('index.html', 'r') as f:
    html = f.read()

# Replace the main wrapper tables
html = html.replace('<table style="width:100%;max-width:800px;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>', '<div class="main-container" style="width:100%;max-width:800px;margin:0 auto;padding:0;">')
html = html.replace('<table style="width:100%;border:0px;border-spacing:0px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>', '<div class="inner-container" style="width:100%;margin:0 auto;">')
html = html.replace('<table style="width:100%;border:0px;border-spacing:0px 10px;border-collapse:separate;margin-right:auto;margin-left:auto;"><tbody>', '<div class="projects-container" style="width:100%;margin:0 auto;display:flex;flex-direction:column;gap:10px;">')

# Replace tr closures
html = html.replace('</tbody></table>', '</div>')
html = html.replace('</tr>', '</div>')

# Replace tr openings
html = html.replace('<tr style="padding:0px">', '<div class="row" style="display:flex;flex-wrap:wrap;padding:0;align-items:center;">')
html = html.replace('<tr>', '<div class="row" style="display:flex;flex-wrap:wrap;">')
html = html.replace('<tr onmouseout="ever_stop()" onmouseover="ever_start()">', '<div class="row" style="display:flex;flex-wrap:wrap;" onmouseout="ever_stop()" onmouseover="ever_start()">')

# Replace td elements with div
html = re.sub(r'<td([^>]*)>', r'<div\1>', html)
html = html.replace('</td>', '</div>')

with open('index.html', 'w') as f:
    f.write(html)
