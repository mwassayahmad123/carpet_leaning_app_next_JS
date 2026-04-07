from PIL import Image, ImageEnhance
import math, os

SRC = r"C:\Users\Munib Raza\.gemini\antigravity\brain\de31dac8-9d7f-41b7-99f3-665f4e366d25\hero_orb_static_1774880137162.png"
OUT = r"C:\Users\Munib Raza\OneDrive\Desktop\carpet_leaning_app_next_JS\src\components\img\hero_orb.webp"

# Load & resize — smaller canvas = smaller file
src = Image.open(SRC).convert("RGBA")
TARGET_W = 640
ratio = TARGET_W / src.width
TARGET_H = int(src.height * ratio)
src = src.resize((TARGET_W, TARGET_H), Image.LANCZOS)

# 10 fps × 3 s = 30 frames  (smooth enough for a breathing pulse)
FPS, DURATION_S = 10, 3
N_FRAMES = FPS * DURATION_S   # 30
FRAME_MS = int(1000 / FPS)    # 100 ms per frame

SCALE_MIN,  SCALE_MAX  = 0.97, 1.03
BRIGHT_MIN, BRIGHT_MAX = 0.92, 1.08

frames = []
for i in range(N_FRAMES):
    phase  = math.sin(2 * math.pi * (i / N_FRAMES))
    scale  = SCALE_MIN  + (SCALE_MAX  - SCALE_MIN)  * (phase + 1) / 2
    bright = BRIGHT_MIN + (BRIGHT_MAX - BRIGHT_MIN) * (phase + 1) / 2

    new_w = int(TARGET_W * scale)
    new_h = int(TARGET_H * scale)
    scaled = src.resize((new_w, new_h), Image.LANCZOS)

    frame = Image.new("RGBA", (TARGET_W, TARGET_H), (0, 0, 0, 0))
    ox = (TARGET_W - new_w) // 2
    oy = (TARGET_H - new_h) // 2
    frame.paste(scaled, (ox, oy))
    frame = ImageEnhance.Brightness(frame).enhance(bright)
    frames.append(frame.convert("RGB"))

def save_webp(quality, method=6):
    frames[0].save(
        OUT, format="WEBP", save_all=True, append_images=frames[1:],
        duration=FRAME_MS, loop=0, quality=quality, method=method,
    )
    return os.path.getsize(OUT) / 1024

for q in [60, 45, 30, 15]:
    kb = save_webp(q)
    print(f"q={q} → {kb:.1f} KB")
    if kb <= 500:
        break

print(f"\n✅  hero_orb.webp  —  {N_FRAMES} frames · {DURATION_S}s loop · {kb:.1f} KB")
