import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Section from "../components/Section";
import SectionHeading from "../components/SectionHeading";
import { sondeoccidente as b } from "../data/content";
import ImageSlot from "../components/ImageSlot";

const enlace = "inline-block border-b-2 border-gold pb-0.5 text-[14.5px] font-semibold text-gold";

export default function SonDeOccidente() {
  return (
    <>
      <title>{`APPARTES — ${b.title}`}</title>
      <PageHeader kicker={b.kicker} title={b.title} titleClassName="max-w-[22ch]" />

      <Section>
        <ImageSlot imagen={b.imagen} className="mb-8" />
        <p className="mb-14 max-w-[60ch] text-[19px] text-ivory">{b.lead}</p>

        <div className="grid grid-cols-3 gap-5 max-[900px]:grid-cols-1">
          {b.datos.map((d) => (
            <div key={d.etiqueta} className="rounded-xl border border-line bg-ink-soft p-6">
              <div className="mb-2 text-sm text-muted">{d.etiqueta}</div>
              <div
                className={`font-display font-semibold ${
                  d.destacado ? "text-[40px] leading-none text-gold" : "text-[17px] text-white"
                }`}
              >
                {d.valor}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Su historia" />
        <ol className="border-t border-line">
          {b.historia.map((h) => (
            <li
              key={h.titulo}
              className="grid grid-cols-[180px_1fr] gap-8 border-b border-line py-8 max-[760px]:grid-cols-1 max-[760px]:gap-2"
            >
              <span className="font-display text-[17px] font-semibold text-gold">{h.cuando}</span>
              <div>
                <h3 className="mb-2 font-display text-lg font-medium text-white">{h.titulo}</h3>
                <p className="max-w-[60ch] text-[16px] text-muted">{h.texto}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading title={b.hoy.titulo} subtitle={b.hoy.texto} />
        <ul className="mb-12 flex flex-wrap gap-2.5">
          {b.hoy.areas.map((a) => (
            <li key={a} className="rounded-full border border-gold px-4 py-2 text-sm font-semibold text-gold">
              {a}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          <Link to="/comunidad" className={enlace}>
            ← Ver toda la comunidad artística
          </Link>
          <Link to="/unete" className={enlace}>
            Únase a APPARTES →
          </Link>
        </div>
      </Section>
    </>
  );
}
