import re

with open('index.html', 'r') as f:
    text = f.read()

# I also want to just strip the inline widths to be absolutely 100% sure it works.
text = re.sub(r'width:63%;?', '', text)
text = re.sub(r'width:37%;max-width:37%;?', '', text)
text = re.sub(r'width:20%;?', '', text)
text = re.sub(r'width:80%;?', '', text)
# remove empty styles
text = re.sub(r'style="\s*"', '', text)

with open('index.html', 'w') as f:
    f.write(text)
