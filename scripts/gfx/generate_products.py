# scripts/gfx/generate_products.py
# Next.js 14 + Tailwind – Genera:
#   public/images/products/knife-1.webp
#   public/images/products/saw-1.webp

from PIL import Image, ImageDraw, ImageFilter, ImageFont
from PIL.Image import Resampling
from pathlib import Path

# --- Paths (relativos al repo) ---
REPO = Path(__file__).resolve().parents[2]   # .../scripts/gfx/ -> repo root
RAW  = REPO / "assets" / "raw"
OUT  = REPO / "public" / "images" / "products"
OUT.mkdir(parents=True, exist_ok=True)

# Cambiá estos nombres si tus archivos crudos se llaman distinto
KNIFE_IMG_MAIN = RAW / "knives" / "knife-a.png"
KNIFE_IMG_B    = RAW / "knives" / "knife-b.png"
KNIFE_IMG_C    = RAW / "knives" / "knife-c.png"
SAW_IMG        = RAW / "saws"   / "saw.png"

W = H = 1200

def font(size=42, bold=False):
    try:
        return ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf" if bold
            else "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
            size
        )
    except Exception:
        return ImageFont.load_default()

def gradient(w, h, c1, c2):
    base = Image.new("RGBA", (w, h))
    d = ImageDraw.Draw(base)
    (r1,g1,b1),(r2,g2,b2) = c1, c2
    for y in range(h):
        t = y/(h-1)
        r = int(r1 + (r2-r1)*t); g = int(g1 + (g2-g1)*t); b = int(b1 + (b2-b1)*t)
        d.line([(0,y),(w,y)], fill=(r,g,b))
    return base

def rounded_rect(size, radius, fill):
    w, h = size
    img = Image.new("RGBA", (w, h), (0,0,0,0))
    d = ImageDraw.Draw(img)
    d.rounded_rectangle((0,0,w,h), radius, fill=fill)
    return img

def drop_shadow(im, blur=20, opacity=120, offset=(14,14)):
    w, h = im.size
    sh = Image.new("RGBA", (w+abs(offset[0])*2, h+abs(offset[1])*2), (0,0,0,0))
    d = ImageDraw.Draw(sh)
    d.rectangle((offset[0],offset[1],offset[0]+w,offset[1]+h), fill=(0,0,0,opacity))
    sh = sh.filter(ImageFilter.GaussianBlur(blur))
    out = Image.new("RGBA", sh.size, (0,0,0,0))
    out.alpha_composite(sh, (0,0))
    out.alpha_composite(im, (abs(offset[0]),abs(offset[1])))
    return out

# -------- knife-1.webp (collage rojo) --------
bg = gradient(W, H, (239,68,68), (127,29,29))  # rojo
canvas = bg.copy()
card = rounded_rect((int(W*0.9), int(H*0.9)), 56, (255,255,255,240))
canvas.alpha_composite(card, (int(W*0.05), int(H*0.05)))

main = Image.open(KNIFE_IMG_MAIN).convert("RGBA")
main.thumbnail((int(W*0.88), int(H*0.55)), Resampling.LANCZOS)
main = drop_shadow(main, blur=16, opacity=110, offset=(10,10))
canvas.alpha_composite(main, (int(W*0.06), int(H*0.25)))

def circle_thumb(path, size):
    im = Image.open(path).convert("RGBA")
    im.thumbnail((size, size), Resampling.LANCZOS)
    mask = Image.new("L", im.size, 0)
    d = ImageDraw.Draw(mask)
    d.ellipse((0,0,im.width-1, im.height-1), fill=255)
    out = Image.new("RGBA", im.size, (0,0,0,0))
    out.paste(im, (0,0), mask)
    return out

c1 = circle_thumb(KNIFE_IMG_B, 260)
c2 = circle_thumb(KNIFE_IMG_C, 260)
ring = Image.new("RGBA", (c1.width+18, c1.height+18), (255,255,255,0))
rd = ImageDraw.Draw(ring)
rd.ellipse((0,0,ring.width-1, ring.height-1), outline=(239,68,68,230), width=14)
ring = ring.filter(ImageFilter.GaussianBlur(0.8))
x1,y1 = int(W*0.12), int(H*0.12)
x2,y2 = int(W*0.68), int(H*0.62)
canvas.alpha_composite(ring,(x1-9,y1-9)); canvas.alpha_composite(c1,(x1,y1))
canvas.alpha_composite(ring,(x2-9,y2-9)); canvas.alpha_composite(c2,(x2,y2))

badge = rounded_rect((260,64), 26, (239,68,68,230))
ImageDraw.Draw(badge).text((22,12), "Cuchillería", font=font(36, True), fill=(255,255,255,255))
canvas.alpha_composite(badge, (int(W*0.08), int(H*0.08)))

(canvas.convert("RGB")).save(OUT / "knife-1.webp", "WEBP", quality=95, method=6)

# -------- saw-1.webp (render azul) --------
bg2 = gradient(W, H, (14,165,233), (29,78,216))  # azul
canvas2 = bg2.copy()
frame = rounded_rect((int(W*0.9), int(H*0.9)), 56, (255,255,255,240))
canvas2.alpha_composite(frame, (int(W*0.05), int(H*0.05)))

saw = Image.open(SAW_IMG).convert("RGBA")
saw.thumbnail((int(W*0.86), int(H*0.7)), Resampling.LANCZOS)
saw = drop_shadow(saw, blur=18, opacity=120, offset=(14,14))
canvas2.alpha_composite(saw, (int(W*0.07), int(H*0.18)))

badge2 = rounded_rect((220,64), 26, (29,78,216,230))
ImageDraw.Draw(badge2).text((22,12), "Máquinas", font=font(36, True), fill=(255,255,255,255))
canvas2.alpha_composite(badge2, (int(W*0.08), int(H*0.08)))

(canvas2.convert("RGB")).save(OUT / "saw-1.webp", "WEBP", quality=95, method=6)

print("OK:", OUT / "knife-1.webp", OUT / "saw-1.webp")
