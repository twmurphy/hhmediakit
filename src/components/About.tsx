const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@himbohusbando' },
  { label: 'Instagram', href: 'https://www.instagram.com/himbohusbando' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/himbohusando.bsky.social' },
  { label: 'YouTube', href: 'https://www.youtube.com/@himbohusbando' },
  { label: 'Twitch', href: 'https://www.twitch.tv/himbohusbando' },
]

export function About() {
  return (
    <section className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

          {/* Headshot */}
          <div className="w-full md:w-72 shrink-0">
            <img
              src="/headshots/himbo-1.png"
              alt="Himbo Husbando"
              className="w-full rounded-2xl object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-[#1d1d1f] leading-tight"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 3rem)',
              }}
            >
              About
            </h2>
            <p className="text-[#1d1d1f] text-base leading-relaxed max-w-prose">
              HimboHusbando is a Brooklyn-based cosplayer known for big, lovable characters
              and a genuine belief that everyone around him is capable of greatness. That
              philosophy shows up in everything he does, from honoring classic construction
              techniques like sewing, foam, and leatherworking to exploring forward-thinking
              technology like CAD, 3D printing, and electronics. He brings that same breadth
              and curiosity to the judging table. Whether you've been building for under a
              year or more than a decade, he's in your corner.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 mt-2">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full border border-[#d2d2d7] bg-white text-[#1d1d1f] text-sm hover:bg-[#1d1d1f] hover:text-white hover:border-[#1d1d1f] transition-colors duration-200"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
