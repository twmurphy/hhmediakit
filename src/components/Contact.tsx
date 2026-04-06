import { Mail } from 'lucide-react'

export function Contact() {
  return (
    <section className="bg-[#1d1d1f] min-h-[60vh] flex items-center justify-center px-6 text-center">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <h2
          className="text-white leading-tight"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          }}
        >
          Let's work together.
        </h2>
        <a
          href="mailto:himbo.husbando@gmail.com"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-lg"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          <Mail size={20} />
          himbo.husbando@gmail.com
        </a>
      </div>
    </section>
  )
}
