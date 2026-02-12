export default function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit px-8 py-3 rounded-full border border-white/10 bg-black/50 backdrop-blur-xl flex items-center gap-12">
      
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="cursor-target group relative overflow-hidden cursor-none">
            <div className="flex">
              {link.name.split("").map((char, i) => (
                <span
                  key={i}
                  className="text-zinc-400 group-hover:text-white transition-all duration-300 uppercase text-[20px] tracking-widest font-bold inline-block hover:-translate-y-1"
                >
                  {char}
                </span>
              ))}
            </div>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
          </a>
        ))}
      </div>
    </nav>
  );
}