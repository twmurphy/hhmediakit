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
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-5 right-5 text-white/70 hover:text-white transition-colors"
        aria-label="Close"
      >
        <X size={28} />
      </button>

      {/* Content — stop propagation so clicking inside doesn't close */}
      <div
        className="flex flex-row items-center gap-6 max-h-[85vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Photo */}
        <img
          src={item.src}
          alt={item.name}
          className="max-h-[85vh] max-w-[60vw] object-contain rounded-2xl"
        />

        {/* Metadata card */}
        <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[200px] max-w-[220px]">
          <div className="flex flex-col gap-1">
            <p
              className="text-white text-lg leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900 }}
            >
              {item.name}
            </p>
            <p
              className="text-white/60 text-sm"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {item.source}
            </p>
          </div>

          <div className="h-px bg-white/10" />

          <p className="text-white/40 text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
            className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white text-[#1d1d1f] text-sm hover:bg-white/90 transition-colors mt-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Download size={14} />
            Download
          </a>
        </div>
      </div>
    </div>
  )
}
