import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { agenda } from "../data/content";

export default function Agenda() {
  return (
    <Section id="agenda">
      <SectionHeading title={agenda.title} subtitle={agenda.subtitle} />

      <div className="flex flex-col">
        {agenda.eventos.map((e) => (
          <div
            key={e.titulo}
            className="grid grid-cols-[170px_auto_1fr_auto] items-center gap-6 border-b border-line py-[26px] first:border-t max-[900px]:grid-cols-1 max-[900px]:gap-2"
          >
            <span className="font-display text-[14.5px] font-semibold text-muted">{e.fecha}</span>
            <span className="size-2.5 rounded-full bg-gold" />
            <div>
              <h3 className="mb-1 font-display text-lg font-medium text-white">{e.titulo}</h3>
              <span className="text-[14.5px] text-muted">{e.detalle}</span>
            </div>
            <a
              href={e.href}
              className="border-b-2 border-gold pb-0.5 text-[14.5px] font-semibold whitespace-nowrap text-gold"
            >
              Más info →
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
