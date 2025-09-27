import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false); // bg saat scroll
  const [open, setOpen] = useState(false);     // menu mobile

  useEffect(() => {
    const handleScroll = () => setActive(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "block sm:text-lg text-base font-semibold relative transition-all duration-500 " +
    "text-white hover:text-violet-400 active:scale-95 " + // warna teks jadi putih
    "after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 " +
    "after:bg-gradient-to-r after:from-violet-500 via-pink-500 to-purple-500 " +
    "after:rounded-full after:transition-all after:duration-500 hover:after:w-full";

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        active
          ? "bg-black/90 backdrop-blur-md shadow-md"
          : "bg-black/70 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        {/* Logo */}
        <h1
          className="text-3xl font-extrabold tracking-wide cursor-pointer
                     bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent
                     transition duration-300 hover:scale-105"
        >
          Personal Web
        </h1>

        {/* Tombol Hamburger (Mobile) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#beranda" className={linkClass}>Home</a></li>
          <li><a href="#tentang" className={linkClass}>Journey</a></li>
          <li><a href="#hoby" className={linkClass}>Hobby</a></li>
          <li><a href="#portofolio" className={linkClass}>Portofolio</a></li>
          <li><a href="#kontak" className={linkClass}>contact</a></li>
          <li><a href="tugas-java.html" className={linkClass}>java task</a></li>
        </ul>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-md
                    flex flex-col items-center justify-center gap-8 text-center
                    transform transition-transform duration-500 ${
                      open ? "translate-x-0" : "-translate-x-full"
                    }`}
      >
        <a href="#beranda" className={linkClass} onClick={() => setOpen(false)}>Home</a>
        <a href="#tentang" className={linkClass} onClick={() => setOpen(false)}>Tentang</a>
        <a href="#hoby" className={linkClass} onClick={() => setOpen(false)}>Hoby</a>
        <a href="#portofolio" className={linkClass} onClick={() => setOpen(false)}>Portofolio</a>
        <a href="#kontak" className={linkClass} onClick={() => setOpen(false)}>Kontak</a>
        <a href="tugas-java.html" className={linkClass} onClick={() => setOpen(false)}>Tugas Java</a>
      </div>
    </nav>
  );
};

export default Navbar;
