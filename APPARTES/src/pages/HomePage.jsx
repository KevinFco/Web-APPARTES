import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import EventRow from "../components/EventRow";
import Join from "../components/Join";
import { homeCards } from "../data/content";
import { eventos } from "../data/agenda";
import { separarEventos } from "../utils/eventos";

export default function HomePage() {
  const proximos = separarEventos(eventos).proximos.slice(0, 3);

  return (
    <>
      <title>APPARTES — Asociación Palmareña Para las Artes</title>
      <Hero />

      <Section>
        <SectionHeading title={homeCards.title} subtitle={homeCards.subtitle} />
        <div className="grid grid-cols-4 gap-5 max-[1000px]:grid-cols-2 max-[560px]:grid-cols-1">
          {homeCards.items.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="flex flex-col rounded-xl border border-line bg-ink-soft p-6 transition-colors duration-200 hover:border-gold"
            >
              <h3 className="mb-2.5 font-display text-base font-semibold text-white">{c.titulo}</h3>
              <p className="mb-5 text-sm text-muted">{c.texto}</p>
              <span className="mt-auto text-sm font-semibold text-gold">Conocer más →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Próximos eventos" />
        {proximos.length > 0 ? (
          <div className="border-t border-line">
            {proximos.map((e) => (
              <EventRow key={`${e.fecha}-${e.titulo}`} evento={e} />
            ))}
          </div>
        ) : (
          <p className="max-w-[56ch] text-[16.5px] text-muted">
            Por ahora no hay eventos programados. Cuando haya nuevas fechas, las publicaremos en la agenda.
          </p>
        )}
        <Link to="/agenda" className="mt-8 inline-block border-b-2 border-gold pb-0.5 text-[14.5px] font-semibold text-gold">
          Ver agenda completa →
        </Link>
      </Section>

      <Join />
    </>
  );
}
