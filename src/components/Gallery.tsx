const cosplays = [
  { src: '/cosplays/abel-1.png', alt: 'Abel cosplay' },
  { src: '/cosplays/charwizard-1.png', alt: 'Char Wizard cosplay' },
  { src: '/cosplays/halsin-1.png', alt: 'Halsin cosplay' },
  { src: '/cosplays/hooded-1.png', alt: 'Hooded character cosplay' },
  { src: '/cosplays/senshi-1.png', alt: 'Senshi cosplay' },
  { src: '/cosplays/thor-1.png', alt: 'Thor cosplay' },
]

export function Gallery() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-[#1d1d1f] leading-tight mb-12"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
          }}
        >
          Cosplays
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {cosplays.map(({ src, alt }) => (
            <div key={src} className="aspect-[9/16] overflow-hidden rounded-2xl bg-[#f5f5f7]">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
