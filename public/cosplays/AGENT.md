# Cosplay Gallery Image Instructions

## Directory structure

```
public/cosplays/
  {name}-{n}.jpg       # Full-size image (used in lightbox)
  thumbs/
    {name}-{n}.jpg     # Thumbnail (used in gallery grid)
```

## Image requirements

### Full-size (`/cosplays/`)
- Format: **JPEG** — do NOT use PNG (Cloudflare has a 25MB per-file limit)
- Aspect ratio: **2:3** (portrait, e.g. 3600×5400)
- Max file size: **< 25MB**
- If source is a PNG, convert with ffmpeg:
  ```bash
  ffmpeg -y -i input.png -c:v mjpeg -q:v 2 output.jpg
  ```

### Thumbnail (`/cosplays/thumbs/`)
- Format: **JPEG**
- Dimensions: **600×900** (2:3)
- Generate from the full-size JPEG:
  ```bash
  ffmpeg -y -i cosplays/{name}.jpg -vf scale=600:900 -c:v mjpeg -q:v 3 cosplays/thumbs/{name}.jpg
  ```

## Adding a new cosplay to the gallery

1. Add both files (full-size + thumb) following the naming and format rules above.

2. Add an entry to the `cosplays` array in [src/components/Gallery.tsx](../../src/components/Gallery.tsx):
   ```ts
   {
     src:    '/cosplays/{name}-{n}.jpg',
     thumb:  '/cosplays/thumbs/{name}-{n}.jpg',
     name:   'Character Name',
     source: 'Source Material',
   }
   ```

3. Run `npm run build` to verify no errors before pushing.

## Photographer credit

All photography is currently credited to **@baggincats_cosplay** on Instagram. This is hardcoded in [src/components/Lightbox.tsx](../../src/components/Lightbox.tsx). If a photo has a different credit, update the `CosplayItem` type and Lightbox to support a per-item `photographer` field.
