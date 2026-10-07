import urllib.request, ssl

ctx = ssl._create_unverified_context()
req = urllib.request.Request(
    'https://waseeonthego.com/',
    headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
)

resp = urllib.request.urlopen(req, context=ctx)
html = resp.read().decode('utf-8', errors='ignore')

print("HTTP Status:", resp.status)
print("Has Material Symbols:", "Material Symbols" in html or "Material+Symbols" in html)
print("Has @import in Custom CSS:", "@import" in html)
print("Has Preload for LCP image:", "japan-kyoto-temple-guide.jpg" in html and 'rel="preload"' in html)
print("Has LiteSpeed x-litespeed-cache header:", resp.headers.get('x-litespeed-cache'))
print("HTML Total Size:", len(html), "bytes")
