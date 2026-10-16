import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { recursos } from "../data/content";

export default function Recursos() {
  return (
    <Section id="recursos">
      <SectionHeading title={recursos.title} subtitle={recursos.subtitle} />

      <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
        {recursos.items.map((r) => (
          <div key={r.titulo} className="rounded-xl border border-dashed border-line p-[26px]">
            <h4 className="mb-2 font-display text-base font-semibold text-white">{r.titulo}</h4>
            <p className="text-sm text-muted">{r.texto}</p>
            <span className="mt-3 inline-block text-xs font-semibold tracking-[0.03em] text-gold">
              Próximamente
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
