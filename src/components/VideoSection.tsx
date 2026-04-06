import { useEffect } from 'react'

export function VideoSection() {
  useEffect(() => {
    // Instagram
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process()
    } else {
      const s = document.createElement('script')
      s.src = 'https://www.instagram.com/embed.js'
      s.async = true
      document.body.appendChild(s)
    }

    // TikTok
    const t = document.createElement('script')
    t.src = 'https://www.tiktok.com/embed.js'
    t.async = true
    document.body.appendChild(t)
  }, [])

  return (
    <section className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[#1d1d1f] leading-tight mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
          }}
        >
          Highlights
        </h2>

        {/* YouTube — full width */}
        <div className="aspect-video rounded-2xl overflow-hidden mb-8">
          <iframe
            src="https://www.youtube.com/embed/EbTp6fgELmI"
            title="Himbo Husbando YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Instagram + TikTok side by side */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex-1 min-w-0 flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink="https://www.instagram.com/p/DQCBvwIER8Q/"
              data-instgrm-version="14"
              style={{ margin: 0, maxWidth: 400, width: '100%' }}
            />
          </div>
          <div className="flex-1 min-w-0 flex justify-center">
            <blockquote
              className="tiktok-embed"
              cite="https://www.tiktok.com/@himbohusbando/video/7403073052541472046"
              data-video-id="7403073052541472046"
              style={{ maxWidth: 400, width: '100%' }}
            >
              <section />
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
