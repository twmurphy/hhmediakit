export function Workshops() {
  return (
    <section className="bg-[#f5f5f7] py-24 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        <h2
          className="text-[#1d1d1f] leading-tight"
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 900,
            fontSize: 'clamp(2rem, 5vw, 3rem)',
          }}
        >
          Workshops
        </h2>

        <img
          src="/workshop2.jpg"
          alt="Cosplay foamsmithing workshop at New York Comic Con"
          className="w-full rounded-2xl object-cover max-h-[60vh]"
        />

        <p className="text-[#1d1d1f] text-base leading-relaxed">
          In collaboration with Masked Dad, HimboHusbando teaches cosplay foamsmithing
          workshops at New York Comic Con — hands-on sessions covering foam selection,
          shaping, heat-forming, and finishing techniques for builders at every level.
        </p>
      </div>
    </section>
  )
}
