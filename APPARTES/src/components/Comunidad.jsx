import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { comunidad } from "../data/content";

export default function Comunidad() {
  return (
    <Section id="comunidad">
      <SectionHeading title={comunidad.title} subtitle={comunidad.subtitle} />

      <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {comunidad.pilares.map((pilar) => (
          <div
            key={pilar.nombre}
            className="border-t-[5px] border-gold bg-ivory px-[26px] py-7 text-ink transition duration-250 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)]"
          >
            <div className="mb-2.5 font-display text-lg font-semibold">{pilar.nombre}</div>
            <ul className="flex flex-col gap-1.5">
              {pilar.items.map((item) => (
                <li key={item} className="relative pl-3.5 text-[14.5px] text-[#5A5D63]">
                  <span aria-hidden="true" className="absolute left-0 text-gold-deep">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
