import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { about, valores, junta } from "../data/content";

const h2 = "mb-4 font-display text-[clamp(22px,2.6vw,28px)] font-semibold text-white";
const p = "max-w-[50ch] text-[17.5px] text-ivory";

export default function AboutPage() {
  return (
    <>
      <title>APPARTES — Sobre la asociación</title>
      <PageHeader kicker={about.kicker} title={about.title} subtitle={about.subtitle} />

      <Section>
        <div className="mb-14 inline-block border-l-[3px] border-gold pl-5">
          <div className="font-display text-[clamp(44px,7vw,72px)] leading-none font-bold text-gold">
            {about.fundacion}
          </div>
          <div className="mt-2 text-base text-muted">Año de fundación</div>
        </div>

        <div className="grid grid-cols-2 gap-15 max-[900px]:grid-cols-1 max-[900px]:gap-12">
          <div>
            <h2 className={h2}>Misión</h2>
            <p className={p}>{about.mision}</p>
          </div>
          <div>
            <h2 className={h2}>Visión</h2>
            <p className={p}>{about.vision}</p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading title="Valores" />
        <div className="grid grid-cols-3 gap-x-8 gap-y-9 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {valores.map((v) => (
            <div key={v.nombre} className="border-l-[3px] border-gold pl-4">
              <b className="mb-1 block font-display text-[15px] font-semibold text-white">{v.nombre}</b>
              <span className="text-sm text-muted">{v.texto}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Junta Directiva" subtitle="Integrantes de la asociación y sus puestos." />
        <div className="grid grid-cols-2 gap-x-12 max-[900px]:grid-cols-1">
          {junta.map((m) => (
            <div
              key={m.rol}
              className="flex items-baseline justify-between gap-4 border-b border-line py-4 max-[560px]:flex-col max-[560px]:gap-1"
            >
              <span className="text-sm text-muted">{m.rol}</span>
              <span className="text-right text-base text-ivory max-[560px]:text-left">{m.nombre}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
