import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeDrawer = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-[#f4c025] text-3xl">
              airport_shuttle
            </span>

            <h2 className="font-serif text-2xl font-bold tracking-tight text-white">
              Loymar <span className="text-[#f4c025]">Transport</span>
            </h2>
          </div>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#services"
              className="text-sm font-medium uppercase tracking-widest hover:text-[#f4c025] transition-colors"
            >
              Servicios
            </a>

            <a
              href="#fleet"
              className="text-sm font-medium uppercase tracking-widest hover:text-[#f4c025] transition-colors"
            >
              Flota
            </a>

            <a
              href="#about"
              className="text-sm font-medium uppercase tracking-widest hover:text-[#f4c025] transition-colors"
            >
              Nosotros
            </a>

            <a
              href="/login"
              className="bg-[#f4c025] hover:bg-[#f4c025]/90 text-[#0a0a0a] px-6 py-2.5 rounded-lg font-bold text-sm transition-all hover:scale-105"
            >
              RESERVAR AHORA
            </a>
          </nav>

          {/* Mobile */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-[#f4c025]"
            aria-label="Abrir menú"
          >
            <span className="material-symbols-outlined text-4xl">
              menu
            </span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={closeDrawer}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-screen w-80 max-w-[85vw]
        bg-[#111]
        border-l border-white/10
        shadow-2xl
        transition-transform duration-300 ease-out
        ${
          open
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          <h3 className="text-xl font-bold text-white">
            Menú
          </h3>

          <button
            onClick={closeDrawer}
            className="text-[#f4c025]"
          >
            <span className="material-symbols-outlined text-3xl">
              close
            </span>
          </button>
        </div>

        <nav className="flex flex-col gap-7 p-8">
          <a
            href="#services"
            onClick={closeDrawer}
            className="text-lg text-white hover:text-[#f4c025] transition"
          >
            Servicios
          </a>

          <a
            href="#fleet"
            onClick={closeDrawer}
            className="text-lg text-white hover:text-[#f4c025] transition"
          >
            Flota
          </a>

          <a
            href="#about"
            onClick={closeDrawer}
            className="text-lg text-white hover:text-[#f4c025] transition"
          >
            Nosotros
          </a>

          <a
            href="/login"
            onClick={closeDrawer}
            className="mt-6 bg-[#f4c025] text-[#111] rounded-lg py-3 text-center font-bold hover:brightness-110 transition"
          >
            RESERVAR AHORA
          </a>
        </nav>
      </aside>
    </>
  );
}