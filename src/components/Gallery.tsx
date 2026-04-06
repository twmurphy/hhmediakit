import { useState } from 'react'
import { Lightbox } from './Lightbox'

export interface CosplayItem {
  src: string
  thumb: string
  name: string
  source: string
}

const cosplays: CosplayItem[] = [
  { src: '/cosplays/halsin-1.png',     thumb: '/cosplays/thumbs/halsin-1.jpg',     name: 'Halsin',         source: "Baldur's Gate 3" },
  { src: '/cosplays/charwizard-1.png', thumb: '/cosplays/thumbs/charwizard-1.jpg', name: 'Charwizard',     source: 'Pokémon Gijinka' },
  { src: '/cosplays/abel-1.png',       thumb: '/cosplays/thumbs/abel-1.jpg',       name: 'Abel the Table', source: 'Date Everything' },
  { src: '/cosplays/hooded-1.png',     thumb: '/cosplays/thumbs/hooded-1.jpg',     name: 'The Hooded One', source: 'Path of Exile II' },
  { src: '/cosplays/senshi-1.png',     thumb: '/cosplays/thumbs/senshi-1.jpg',     name: 'Senshi',         source: 'Dungeon Meshi' },
  { src: '/cosplays/thor-1.png',       thumb: '/cosplays/thumbs/thor-1.jpg',       name: 'Thor',           source: 'God of War' },
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const prev = () => setSelectedIndex(i => i !== null ? (i - 1 + cosplays.length) % cosplays.length : null)
  const next = () => setSelectedIndex(i => i !== null ? (i + 1) % cosplays.length : null)

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
          {cosplays.map((item, i) => (
            <div
              key={item.src}
              className="aspect-[9/16] overflow-hidden rounded-2xl bg-[#f5f5f7] cursor-pointer group relative"
              onClick={() => setSelectedIndex(i)}
            >
              <img
                src={item.thumb}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        item={selectedIndex !== null ? cosplays[selectedIndex] : null}
        onClose={() => setSelectedIndex(null)}
        onPrev={prev}
        onNext={next}
      />
    </section>
  )
}
