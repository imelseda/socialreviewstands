import asyncio, os, base64
from dotenv import load_dotenv
from emergentintegrations.llm.chat import LlmChat, UserMessage

load_dotenv("/app/backend/.env")
api_key = os.getenv("EMERGENT_LLM_KEY")

STYLE = (
    "Premium editorial blog cover photograph, wide 16:9 landscape composition. "
    "Luxury dark aesthetic: deep charcoal-black background, champagne-gold accent lighting, "
    "high-end product photography, soft rim light, shallow depth of field, cinematic. "
    "Absolutely no text, no words, no letters, no logos anywhere in the image."
)

JOBS = [
    (
        "setting-up-google-business-profile",
        STYLE + " Scene: an elegant matte-black NFC review stand with subtle gold trim standing on a dark cafe counter; "
        "a hand holds a smartphone tapping the stand; the phone screen glows showing a generic five-gold-stars review page; "
        "warm bokeh cafe lights in the background.",
    ),
    (
        "increase-followers-social-media-business",
        STYLE + " Scene: a matte-black NFC social media stand with gold trim on a modern boutique retail counter; "
        "a smartphone hovers above it; glowing golden heart and plus-follower notification bubbles float upward from the phone; "
        "dark elegant store interior, moody premium lighting.",
    ),
]

async def gen(slug, prompt):
    chat = LlmChat(api_key=api_key, session_id=f"blog-img-{slug}", system_message="You are a helpful AI assistant")
    chat.with_model("gemini", "gemini-3.1-flash-image-preview").with_params(modalities=["image", "text"])
    text, images = await chat.send_message_multimodal_response(UserMessage(text=prompt))
    if images:
        raw = base64.b64decode(images[0]["data"])
        tmp = f"/tmp/blog_raw_{slug}.png"
        with open(tmp, "wb") as f:
            f.write(raw)
        print(f"{slug}: generated {len(raw)//1024}KB")
        return tmp
    print(f"{slug}: NO IMAGE — {text[:120]}")
    return None

async def main():
    for slug, prompt in JOBS:
        tmp = await gen(slug, prompt)
        if tmp:
            from PIL import Image, ImageOps
            img = Image.open(tmp).convert("RGB")
            img = ImageOps.fit(img, (1200, 675), Image.LANCZOS)
            out = f"/app/frontend/public/images/blog/{slug}.jpg"
            img.save(out, quality=84, optimize=True)
            print(f"{slug}: saved {out}")

asyncio.run(main())
