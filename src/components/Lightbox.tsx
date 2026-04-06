import { useEffect, useState } from 'react'
import { X, Download, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import type { CosplayItem } from './Gallery'

interface LightboxProps {
  item: CosplayItem | null
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const loading = item ? loadedSrc !== item.src : false

  useEffect(() => {
    if (!item) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape')     onClose()
      if (e.key === 'ArrowLeft')  onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [item, onClose, onPrev, onNext])

  if (!item) return null

  const filename = item.src.split('/').pop() ?? 'cosplay.png'

  return (
    <div
      className="fixed inset-0 bg-black/20 z-50 flex items-center justify-center gap-3 px-3 py-3"
      onClick={onClose}
    >
      {/* Prev button */}
      <button
        onClick={e => { e.stopPropagation(); onPrev() }}
        className="shrink-0 rounded-full bg-white/15 hover:bg-white/30 text-white p-3 transition-colors backdrop-blur-sm mr-4"
        aria-label="Previous"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Image frame */}
      <div
        className="relative bg-[#1c1c1e] rounded-2xl overflow-hidden"
        style={{
          width: 'min(92vw, calc(92vh * 2 / 3))',
          height: 'min(92vh, calc(92vw * 3 / 2))',
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* Spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Loader2 size={32} className="text-white/40 animate-spin" />
          </div>
        )}

        {/* Full-res image */}
        <img
          key={item.src}
          src={item.src}
          alt={item.name}
          onLoad={() => setLoadedSrc(item.src)}
          className="w-full h-full object-cover"
          style={{ opacity: loading ? 0 : 1, transition: 'opacity 0.3s' }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Bottom metadata bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/60 backdrop-blur-sm px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex items-baseline gap-3 min-w-0">
            <p className="text-white text-base leading-tight shrink-0 font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {item.name}
            </p>
            <p className="text-white/50 text-sm truncate" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {item.source}
            </p>
          </div>
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

      {/* Next button */}
      <button
        onClick={e => { e.stopPropagation(); onNext() }}
        className="shrink-0 rounded-full bg-white/15 hover:bg-white/30 text-white p-3 transition-colors backdrop-blur-sm ml-4"
        aria-label="Next"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  )
}
