import { useEffect } from 'react'
import { X, Download } from 'lucide-react'
import type { CosplayItem } from './Gallery'

interface LightboxProps {
  item: CosplayItem | null
  onClose: () => void
}

export function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, onClose])

  if (!item) return null

  const filename = item.src.split('/').pop() ?? 'cosplay.png'

  return (
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Image + overlays */}
      <div
        className="relative max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.name}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded-2xl block"
        />

        {/* Close button — top-right of image */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Bottom metadata bar */}
        <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-black/60 backdrop-blur-sm px-5 py-4 flex items-center justify-between gap-4">
          {/* Left: name + source */}
          <div className="flex items-baseline gap-3 min-w-0">
            <p
              className="text-white text-base leading-tight shrink-0"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {item.name}
            </p>
            <p
              className="text-white/50 text-sm truncate"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {item.source}
            </p>
          </div>

          {/* Right: credit + download */}
          <div className="flex items-center gap-3 shrink-0">
            <p className="text-white/40 text-xs hidden sm:block" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Photo by{' '}
              <a
                href="https://www.instagram.com/baggincats_cosplay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white underline underline-offset-2 transition-colors"
              >
                @baggincats_cosplay
              </a>
            </p>
            <a
              href={item.src}
              download={filename}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs transition-colors"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Download size={12} />
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
