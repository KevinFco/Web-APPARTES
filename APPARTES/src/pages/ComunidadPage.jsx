import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import { comunidad } from "../data/content";

const row = "flex items-center gap-4 border-b border-line py-5 font-display text-[17px] font-medium";

export default function ComunidadPage() {
  return (
    <>
      <title>{`APPARTES — ${comunidad.title}`}</title>
      <PageHeader title={comunidad.title} subtitle={comunidad.subtitle} />

      <Section>
        <ul className="grid grid-cols-2 gap-x-12 max-[760px]:grid-cols-1">
          {comunidad.proyectos.map((proj) => (
            <li key={proj.nombre}>
              {proj.to ? (
                <Link to={proj.to} className={`${row} text-white transition-colors duration-200 hover:text-gold`}>
                  <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-gold" />
                  <span className="flex-1">{proj.nombre}</span>
                  <span className="font-body text-sm font-semibold whitespace-nowrap text-gold">Ver página →</span>
                </Link>
              ) : (
                <div className={`${row} text-ivory`}>
                  <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-gold" />
                  <span>{proj.nombre}</span>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
