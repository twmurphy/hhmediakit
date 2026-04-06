export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[#6e6e73] text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <span>© {new Date().getFullYear()} Himbo Husbando. All rights reserved.</span>
        <a
          href="mailto:himbo.husbando@gmail.com"
          className="hover:text-[#1d1d1f] transition-colors"
        >
          himbo.husbando@gmail.com
        </a>
      </div>
    </footer>
  )
}
