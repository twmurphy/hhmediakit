export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 text-center">
      <h1
        className="font-black text-[#1d1d1f] leading-none tracking-tight"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontWeight: 900,
          fontSize: 'clamp(3.5rem, 12vw, 10rem)',
        }}
      >
        Himbo<br />Husbando
      </h1>
      <p
        className="mt-6 text-[#6e6e73] text-lg tracking-wide uppercase"
        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.2em' }}
      >
        Cosplayer · Creator · Judge
      </p>
    </section>
  )
}
