import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { LOGO_URL, navLinks } from "../data/content";

const underline =
  "relative pb-0.5 after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-gold after:transition-[width] after:duration-250 hover:after:w-full";


function estaActivo(link, pathname) {
  if (link.end) return pathname === link.to;
  return [link.to, ...(link.children ?? []).map((h) => h.to)].some(
    (p) => pathname === p || pathname.startsWith(p + "/")
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;


  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/94 backdrop-blur-[6px]">
      <nav
        aria-label="Principal"
        className="mx-auto flex max-w-[1120px] items-center justify-between px-10 py-[18px] max-[560px]:px-[22px] max-[560px]:py-4"
      >
        <Link to="/" className="flex items-center gap-2.5">
          <img src={LOGO_URL} alt="Logo APPARTES" className="h-[34px] w-auto" />
          <span className="font-display text-lg font-bold tracking-[-0.01em] text-white">APPARTES</span>
        </Link>

        <div className="flex gap-6 text-sm font-medium text-ivory max-[1100px]:hidden">
          {navLinks.map((link) => {
            const activo = estaActivo(link, pathname);
            const enlace = (
              <Link
                to={link.to}
                aria-current={activo ? "page" : undefined}
                className={`${underline} ${activo ? "after:w-full" : "after:w-0"} ${
                  link.children ? "inline-flex items-center gap-1.5" : ""
                }`}
              >
                {link.label}
                {link.children && (
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180"
                  >
                    <path d="M1.5 3.5L5 7l3.5-3.5" />
                  </svg>
                )}
              </Link>
            );

            if (!link.children) return <div key={link.to}>{enlace}</div>;

            return (
              <div key={link.to} className="group relative">
                {enlace}
                <div className="invisible absolute top-full left-0 z-10 pt-3 opacity-0 transition-opacity duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[230px] rounded-xl border border-line bg-ink p-2 shadow-[0_12px_28px_rgba(0,0,0,0.4)]">
                    {link.children.map((h) => (
                      <li key={h.to}>
                        <Link
                          to={h.to}
                          aria-current={pathname === h.to ? "page" : undefined}
                          className={`block rounded-lg px-4 py-2.5 text-sm transition-colors duration-200 hover:bg-ink-soft hover:text-gold ${
                            pathname === h.to ? "text-gold" : "text-ivory"
                          }`}
                        >
                          {h.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <Link
          to="/unete"
          className="rounded-full border-2 border-gold px-5 py-[9px] text-sm font-semibold whitespace-nowrap text-gold transition-colors duration-200 hover:bg-gold hover:text-ink max-[1100px]:hidden"
        >
          Únase
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="hidden size-10 items-center justify-center rounded-full border border-line text-white max-[1100px]:flex"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M3 3l12 12M15 3L3 15" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div id="menu-movil" className="border-t border-line bg-ink px-[22px] pb-5 min-[1101px]:hidden">
          {navLinks.map((link) => (
            <div key={link.to}>
              <Link
                to={link.to}
                aria-current={estaActivo(link, pathname) ? "page" : undefined}
                className={`block border-b border-line py-3.5 text-[17px] font-medium ${
                  estaActivo(link, pathname) ? "text-gold" : "text-ivory"
                }`}
              >
                {link.label}
              </Link>
              {link.children?.map((h) => (
                <Link
                  key={h.to}
                  to={h.to}
                  aria-current={pathname === h.to ? "page" : undefined}
                  className={`block border-b border-line py-3 pl-5 text-[15px] ${
                    pathname === h.to ? "text-gold" : "text-muted"
                  }`}
                >
                  {h.label}
                </Link>
              ))}
            </div>
          ))}
          <Link
            to="/unete"
            className="mt-4 block rounded-full border-2 border-gold px-5 py-2.5 text-center font-semibold text-gold"
          >
            Únase
          </Link>
        </div>
      )}
    </header>
  );
}
