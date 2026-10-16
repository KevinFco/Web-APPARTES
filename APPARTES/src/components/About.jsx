import Section from "./Section";
import SectionHeading from "./SectionHeading";
import { about, valoresTexto, junta, valores } from "../data/content";

const h3 = "mt-[26px] mb-2.5 font-display text-base font-semibold text-gold";
const p = "mb-[18px] max-w-[50ch] text-[17.5px] text-ivory";

export default function About() {
  return (
    <Section id="nosotros">
      <SectionHeading title={about.title} subtitle={about.subtitle} />

      <div className="grid grid-cols-[1.2fr_1fr] items-start gap-15 max-[900px]:grid-cols-1">
        <div>
          <h3 className={h3}>Misión</h3>
          <p className={p}>{about.mision}</p>

          <h3 className={h3}>Visión</h3>
          <p className={p}>{about.vision}</p>

          <h3 className={h3}>Valores</h3>
          {valoresTexto.map((v) => (
            <p key={v.nombre} className={p}>
              <b>{v.nombre}:</b> {v.texto}
            </p>
          ))}

          <div className="mt-4">
            <div className="mb-3.5 font-display text-base font-semibold text-gold">Junta Directiva</div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-[14.5px] max-[900px]:grid-cols-1">
              {junta.map((m) => (
                <div key={m.rol} className="flex justify-between gap-2.5 border-b border-line py-2">
                  <span className="text-muted">{m.rol}</span>
                  <span className="text-right text-ivory">{m.nombre}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {valores.map((v) => (
            <div key={v.nombre} className="border-l-[3px] border-gold pl-4">
              <b className="mb-[3px] block font-display text-[14.5px] font-semibold text-white">{v.nombre}</b>
              <span className="text-sm text-muted">{v.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
